/**
 * Code.gs
 * Google Apps Script Web App backend for the GitHub Microlearning Portal.
 *
 * DEPLOYMENT (do this after pasting this code into a bound or standalone
 * Apps Script project attached to the analytics Google Sheet):
 *   1. Deploy > New deployment > select type "Web app"
 *   2. Execute as: Me (your own Google account) — NOT "User accessing the
 *      web app". Students never authenticate, so the script must run under
 *      the developer's identity to have permission to write to the sheet.
 *   3. Who has access: Anyone — NOT "Anyone with Google account". Students
 *      aren't signing in with Google at all.
 *   4. Deploy, copy the resulting Web App URL, and paste it into
 *      js/api.js -> Api.ENDPOINT_URL.
 *   5. After ANY future code change, you must create a new deployment
 *      version (or "Manage deployments" -> edit -> new version) for the
 *      change to actually take effect at the existing URL. Editing the
 *      script alone does not update what the live URL serves.
 *
 * WHY THE FRONTEND SENDS Content-Type: text/plain INSTEAD OF
 * application/json: application/json triggers a CORS preflight (an OPTIONS
 * request) that Apps Script web apps don't handle the way a normal backend
 * does, so the real POST never arrives. text/plain is a CORS "simple
 * request" and skips the preflight. The body is still a JSON string — this
 * script JSON.parses it from e.postData.contents below.
 *
 * WHY doPost ALWAYS RETURNS HTTP 200: Apps Script web apps cannot set a
 * custom HTTP status code on their response. Every logical outcome —
 * success, validation failure, student not found, server error — is
 * therefore signaled through the `success` field (and `code` field on
 * failure) inside the JSON response body, never through the HTTP status.
 * js/api.js checks response.json().success, never response.status.
 */

// ---------- Sheet name + column constants ----------
// Centralized here so a renamed tab or reordered column only needs to
// change in one place.

const SHEET_ROSTER = 'Student Roster';
const SHEET_COURSE_CATALOG = 'Course Catalog';
const SHEET_LESSON_CATALOG = 'Lesson Catalog';
const SHEET_ACTIVITY_LOG = 'Activity Log';

// Column position of SessionID within the Activity Log tab (1-indexed).
// Must match the column order defined in the project skill's
// sheets-setup.md exactly. If that layout ever changes, update this.
const ACTIVITY_LOG_SESSION_ID_COL = 11;

const REQUIRED_FIELDS = [
  'timestamp', 'studentId', 'sessionId', 'courseId', 'chapterId',
  'lessonId', 'attemptNumber', 'status', 'startTime', 'endTime', 'durationSeconds'
];

// ---------- Entry point ----------

function doPost(e) {
  const lock = LockService.getScriptLock();
  let hasLock = false;

  try {
    hasLock = lock.tryLock(10000); // wait up to 10s for the lock
    if (!hasLock) {
      return jsonResponse({ success: false, code: 500, message: 'Server busy, please retry.' });
    }

    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse({ success: false, code: 400, message: 'Missing request body.' });
    }

    let payload;
    try {
      payload = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      return jsonResponse({ success: false, code: 400, message: 'Request body was not valid JSON.' });
    }

    const validation = validatePayload(payload);
    if (!validation.valid) {
      return jsonResponse({ success: false, code: 400, message: validation.message });
    }

    // Duplicate check happens BEFORE roster/catalog lookups, both because
    // it's cheaper (fail fast) and because it must be inside the same lock
    // as the append below — checking and appending must be atomic together,
    // or two simultaneous requests for the same sessionId could both pass
    // the check before either has appended its row, producing two rows for
    // one session. See the project skill's data-contract.md for the full
    // explanation of why sessionId alone (not studentId+sessionId) is the
    // correct dedup key.
    if (sessionAlreadyLogged(payload.sessionId)) {
      return jsonResponse({ success: true, message: 'Duplicate session ignored.', duplicate: true });
    }

    const student = lookupStudent(payload.studentId);
    if (!student) {
      return jsonResponse({ success: false, code: 404, message: 'Student ID not found.' });
    }

    const course = lookupCourse(payload.courseId);
    const lesson = lookupLesson(payload.lessonId);

    appendActivityRow(payload, student, course, lesson);

    return jsonResponse({ success: true, message: 'Activity logged.' });

  } catch (err) {
    return jsonResponse({ success: false, code: 500, message: 'Server error: ' + err.message });
  } finally {
    if (hasLock) lock.releaseLock();
  }
}

// Apps Script web apps need a GET handler too, even if unused, so visiting
// the deployed URL directly in a browser (e.g. while sanity-checking the
// deployment) returns something readable instead of an opaque error.
function doGet(e) {
  return ContentService
    .createTextOutput('Microlearning Portal backend is running. POST analytics payloads to this URL.')
    .setMimeType(ContentService.MimeType.TEXT);
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ---------- Validation ----------

function validatePayload(p) {
  for (let i = 0; i < REQUIRED_FIELDS.length; i++) {
    const field = REQUIRED_FIELDS[i];
    if (p[field] === undefined || p[field] === null || p[field] === '') {
      return { valid: false, message: 'Missing required field: ' + field };
    }
  }
  if (p.status !== 'Completed' && p.status !== 'Incomplete') {
    return { valid: false, message: 'Invalid status value: ' + p.status };
  }
  if (typeof p.durationSeconds !== 'number' || p.durationSeconds < 0) {
    return { valid: false, message: 'Invalid durationSeconds.' };
  }
  if (typeof p.attemptNumber !== 'number' || p.attemptNumber < 1 || p.attemptNumber % 1 !== 0) {
    return { valid: false, message: 'Invalid attemptNumber.' };
  }
  return { valid: true };
}

// ---------- Duplicate detection ----------
// sessionId alone is the dedup key (NOT studentId+sessionId — see
// data-contract.md for why that combination can't catch the real failure
// mode this guards against: the same session firing two terminal events,
// e.g. lesson_complete followed by a pagehide-triggered Incomplete for the
// same session a moment later).
//
// This is a linear scan and will get slower as the Activity Log grows
// across semesters. Fine at the scale of one class/one semester (low
// thousands of rows at most). If this becomes slow after a year or two of
// accumulated data, archive old semesters to a separate sheet rather than
// trying to optimize this scan — see the project skill's
// deployment-and-testing.md roadmap notes.

function sessionAlreadyLogged(sessionId) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_ACTIVITY_LOG);
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return false; // only header row exists, nothing logged yet

  const data = sheet.getRange(2, ACTIVITY_LOG_SESSION_ID_COL, lastRow - 1, 1).getValues();
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] === sessionId) return true;
  }
  return false;
}

// ---------- Lookups ----------
// Three lookups (student, course, lesson) so the Activity Log row can be
// fully denormalized — readable course/lesson names written directly into
// the log, so the instructor never has to write a VLOOKUP just to read
// their own spreadsheet. See sheets-setup.md for the full column layout
// this feeds into.

function lookupStudent(studentId) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_ROSTER);
  const data = sheet.getDataRange().getValues(); // includes header row at index 0
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(studentId)) {
      return {
        studentId: data[i][0],
        name: data[i][1],
        program: data[i][2],
        section: data[i][3]
      };
    }
  }
  return null; // missing student IS a hard failure — see doPost's 404 handling
}

function lookupCourse(courseId) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_COURSE_CATALOG);
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(courseId)) {
      return { courseId: data[i][0], courseName: data[i][1] };
    }
  }
  // Missing catalog entry falls back to the raw ID rather than blocking the
  // write — a metadata gap shouldn't prevent logging the attempt. Only a
  // missing STUDENT (above) is treated as a hard failure.
  return { courseId: courseId, courseName: courseId };
}

function lookupLesson(lessonId) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_LESSON_CATALOG);
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (String(data[i][0]) === String(lessonId)) {
      return { lessonId: data[i][0], lessonTitle: data[i][1] };
    }
  }
  return { lessonId: lessonId, lessonTitle: lessonId };
}

// ---------- Write ----------
// Column order here MUST exactly match the Activity Log header row defined
// in sheets-setup.md. If you add a field to the data contract later, add
// it to both this array and that header in the same change.

function appendActivityRow(payload, student, course, lesson) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(SHEET_ACTIVITY_LOG);
  sheet.appendRow([
    payload.timestamp,        //  1 Timestamp
    student.studentId,        //  2 StudentID
    student.name,              //  3 StudentName
    student.program,           //  4 Program
    student.section,            //  5 Section
    course.courseId,           //  6 CourseID
    course.courseName,         //  7 CourseName
    payload.chapterId,         //  8 ChapterID
    lesson.lessonId,            //  9 LessonID
    lesson.lessonTitle,         // 10 LessonTitle
    payload.sessionId,          // 11 SessionID  <- dedup key, see ACTIVITY_LOG_SESSION_ID_COL above
    payload.attemptNumber,      // 12 AttemptNumber
    payload.status,             // 13 Status
    payload.startTime,          // 14 StartTime
    payload.endTime,            // 15 EndTime
    payload.durationSeconds     // 16 DurationSeconds
  ]);
}

// ---------- One-time setup helper ----------
// Run this manually once (Apps Script editor -> select function -> Run)
// against a brand-new spreadsheet to create all required tabs with correct
// headers, so you don't have to type them by hand. Safe to re-run — it
// skips any tab that already exists rather than overwriting it.

function setupSpreadsheet() {
  const ss = SpreadsheetApp.getActive();

  const rosterSheet = createTabIfMissing(ss, SHEET_ROSTER, ['StudentID', 'StudentName', 'Program', 'Section']);
  const courseSheet = createTabIfMissing(ss, SHEET_COURSE_CATALOG, ['CourseID', 'CourseName']);
  const lessonSheet = createTabIfMissing(ss, SHEET_LESSON_CATALOG, ['LessonID', 'LessonTitle', 'ChapterTitle', 'CourseID']);
  createTabIfMissing(ss, SHEET_ACTIVITY_LOG, [
    'Timestamp', 'StudentID', 'StudentName', 'Program', 'Section',
    'CourseID', 'CourseName', 'ChapterID', 'LessonID', 'LessonTitle',
    'SessionID', 'AttemptNumber', 'Status', 'StartTime', 'EndTime', 'DurationSeconds'
  ]);
  createTabIfMissing(ss, 'Dashboard', []);
  createTabIfMissing(ss, 'Settings', ['Key', 'Value']);

  // Seed one sample row per lookup tab, ONLY if that tab is otherwise
  // empty (header row only) — so re-running this after real data exists
  // never overwrites anything. This also makes testDoPostManually() below
  // work correctly out of the box instead of 404'ing on a student that
  // doesn't exist yet.
  seedRowIfEmpty(rosterSheet, ['TEST-0001', 'Test Student', 'Sample Program', 'Section A']);
  seedRowIfEmpty(courseSheet, ['BIOSTAT', 'Biostatistics and Epidemiology']);
  seedRowIfEmpty(lessonSheet, ['lesson-01', 'Introduction to Biostatistics', 'Chapter 1 — Foundations', 'BIOSTAT']);

  Logger.log('Spreadsheet setup complete.');
}

function seedRowIfEmpty(sheet, rowValues) {
  if (sheet.getLastRow() > 1) return; // already has data beyond the header — leave it alone
  sheet.getRange(2, 1, 1, rowValues.length).setValues([rowValues]);
}

function createTabIfMissing(ss, name, headerRow) {
  let sheet = ss.getSheetByName(name);
  if (sheet) return sheet; // don't overwrite an existing tab

  sheet = ss.insertSheet(name);
  if (headerRow.length > 0) {
    sheet.getRange(1, 1, 1, headerRow.length).setValues([headerRow]);
    sheet.getRange(1, 1, 1, headerRow.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

// ---------- Manual test helper ----------
// Run this manually (Apps Script editor -> select function -> Run) to send
// a fake payload through the full doPost pipeline without needing a
// deployed URL or a real browser request. Check the Activity Log tab
// afterward for the new row, and check Logger output (View > Logs) for
// the response.

function testDoPostManually() {
  const fakeEvent = {
    postData: {
      contents: JSON.stringify({
        timestamp: new Date().toISOString(),
        studentId: 'TEST-0001',
        sessionId: 'manual-test-' + new Date().getTime(),
        courseId: 'BIOSTAT',
        chapterId: '01',
        lessonId: 'lesson-01',
        attemptNumber: 1,
        status: 'Completed',
        startTime: new Date(Date.now() - 600000).toISOString(),
        endTime: new Date().toISOString(),
        durationSeconds: 600
      })
    }
  };

  const result = doPost(fakeEvent);
  Logger.log(result.getContent());
}
