// gs_smoke_test.js — mocks SpreadsheetApp/LockService/ContentService/Logger
// and runs the REAL apps-script/Code.gs through vm to catch logic bugs.
// Run with: node gs_smoke_test.js

const fs = require('fs');
const vm = require('vm');

const results = [];
function check(label, condition, detail) {
  results.push({ label, pass: !!condition, detail });
}

// ---------- Minimal in-memory "sheet" mock ----------
function makeSheet(headerRow) {
  const rows = [headerRow.slice()];
  const formulas = {}; // 'row,col' -> formula string, tracked separately from values
  const sheetObj = {
    _rows: rows,
    _formulas: formulas,
    getDataRange() {
      return {
        getValues: () => rows.map(r => r.slice())
      };
    },
    getLastRow() {
      return rows.length;
    },
    getRange(row, col, numRows, numCols) {
      numRows = numRows || 1;
      numCols = numCols || 1;
      // 1-indexed, matching real Apps Script semantics
      const slice = [];
      for (let i = 0; i < numRows; i++) {
        const sourceRow = rows[row - 1 + i] || [];
        const cells = [];
        for (let j = 0; j < numCols; j++) {
          cells.push(sourceRow[col - 1 + j]);
        }
        slice.push(cells);
      }
      return {
        getValues: () => slice,
        setValues: (vals) => {
          for (let i = 0; i < vals.length; i++) {
            const targetRow = row - 1 + i;
            while (rows.length <= targetRow) rows.push([]);
            for (let j = 0; j < vals[i].length; j++) {
              rows[targetRow][col - 1 + j] = vals[i][j];
            }
          }
        },
        setValue: (val) => {
          const targetRow = row - 1;
          while (rows.length <= targetRow) rows.push([]);
          rows[targetRow][col - 1] = val;
        },
        setFormula: (formula) => {
          formulas[row + ',' + col] = formula;
        },
        setFontWeight: function () { return this; },
        setFontFamily: function () { return this; }
      };
    },
    appendRow(values) {
      rows.push(values.slice());
    },
    clear() {
      rows.length = 0;
      rows.push(headerRow.slice());
      for (const k of Object.keys(formulas)) delete formulas[k];
    },
    setFrozenRows: () => {}
  };
  return sheetObj;
}

function makeMockSpreadsheetApp(sheets) {
  return {
    getActive: () => ({
      getSheetByName: (name) => sheets[name] || null,
      insertSheet: (name) => {
        sheets[name] = makeSheet([]);
        return sheets[name];
      }
    })
  };
}

function freshSandbox() {
  const sheets = {
    'Student Roster': makeSheet(['StudentID', 'StudentName', 'Program', 'Section']),
    'Course Catalog': makeSheet(['CourseID', 'CourseName']),
    'Lesson Catalog': makeSheet(['LessonID', 'LessonTitle', 'ChapterTitle', 'CourseID']),
    'Activity Log': makeSheet([
      'Timestamp', 'StudentID', 'StudentName', 'Program', 'Section',
      'CourseID', 'CourseName', 'ChapterID', 'ChapterTitle', 'LessonID', 'LessonTitle',
      'SessionID', 'AttemptNumber', 'Status', 'StartTime', 'EndTime', 'DurationSeconds'
    ])
  };

  // Seed one roster student and one course/lesson catalog row, mirroring
  // setupSpreadsheet()'s real seed data (courseId is the URL folder id —
  // "biostatistics", not the short display code "BIOSTAT" — and lessonId is
  // the globally-unique composite format tracking.js actually sends; see
  // Code.gs's lookupCourse/lookupLesson comments for why).
  sheets['Student Roster'].appendRow(['2025-000123', 'Jane Student', 'BS Statistics', 'Section A']);
  sheets['Course Catalog'].appendRow(['biostatistics', 'Biostatistics and Epidemiology']);
  sheets['Course Catalog'].appendRow(['ama', 'Applied Multivariate Analysis']);
  sheets['Lesson Catalog'].appendRow(['biostatistics-L01', 'Introduction to Biostatistics', 'Chapter 1', 'biostatistics']);
  // Same RAW lesson number (1) as the row above, but a different course —
  // this is deliberately the exact collision scenario the ID-format bugfix
  // addresses. See the regression test below.
  sheets['Lesson Catalog'].appendRow(['ama-L01', 'Welcome to the Course — MAS 305a', 'Course Orientation & Univariate Review', 'ama']);

  let lockHeld = false;
  const lockLog = [];

  const sandbox = {
    SpreadsheetApp: makeMockSpreadsheetApp(sheets),
    LockService: {
      getScriptLock: () => ({
        tryLock: (ms) => {
          lockLog.push('tryLock');
          if (lockHeld) return false; // simulate lock contention
          lockHeld = true;
          return true;
        },
        releaseLock: () => {
          lockLog.push('releaseLock');
          lockHeld = false;
        }
      })
    },
    ContentService: {
      MimeType: { JSON: 'JSON', TEXT: 'TEXT' },
      createTextOutput: (content) => ({
        _content: content,
        setMimeType: function () { return this; },
        getContent: function () { return this._content; }
      })
    },
    Logger: { log: () => {} },
    console
  };
  sandbox.global = sandbox;
  vm.createContext(sandbox);

  const code = fs.readFileSync(__dirname + '/../apps-script/Code.gs', 'utf8');
  vm.runInContext(code, sandbox, { filename: 'Code.gs' });

  sandbox.doPost = vm.runInContext('doPost', sandbox);
  sandbox.setupSpreadsheet = vm.runInContext('setupSpreadsheet', sandbox);
  sandbox._sheets = sheets;
  sandbox._lockLog = lockLog;
  return sandbox;
}

function fakeEvent(payloadObj) {
  return { postData: { contents: JSON.stringify(payloadObj) } };
}

function basePayload(overrides) {
  return Object.assign({
    timestamp: '2026-06-27T09:30:00Z',
    studentId: '2025-000123',
    sessionId: 'sess-' + Math.random().toString(36).slice(2),
    courseId: 'biostatistics',
    chapterId: 'biostatistics-CH01',
    lessonId: 'biostatistics-L01',
    attemptNumber: 1,
    status: 'Completed',
    startTime: '2026-06-27T09:18:00Z',
    endTime: '2026-06-27T09:30:00Z',
    durationSeconds: 720
  }, overrides);
}

// ---------- Test 1: valid payload logs a row with correct, denormalized values ----------
{
  const sandbox = freshSandbox();
  const result = sandbox.doPost(fakeEvent(basePayload({ sessionId: 'sess-001' })));
  const parsed = JSON.parse(result.getContent());
  const logRows = sandbox._sheets['Activity Log']._rows;
  const newRow = logRows[logRows.length - 1];

  check('valid payload returns success:true', parsed.success === true, JSON.stringify(parsed));
  check('appended row has denormalized StudentName (not just ID)', newRow[2] === 'Jane Student', JSON.stringify(newRow));
  check('appended row has denormalized CourseName', newRow[6] === 'Biostatistics and Epidemiology', JSON.stringify(newRow));
  check('appended row has the globally-unique ChapterID as sent (not a raw digit)', newRow[7] === 'biostatistics-CH01', JSON.stringify(newRow));
  check('appended row has a denormalized, human-readable ChapterTitle (BUGFIX — this column did not exist before)', newRow[8] === 'Chapter 1', JSON.stringify(newRow));
  check('appended row has the globally-unique LessonID as sent (not a raw digit)', newRow[9] === 'biostatistics-L01', JSON.stringify(newRow));
  check('appended row has denormalized LessonTitle', newRow[10] === 'Introduction to Biostatistics', JSON.stringify(newRow));
  check('SessionID lands in column 12 (index 11) — shifted by the new ChapterTitle column', newRow[11] === 'sess-001', JSON.stringify(newRow));
}

// ---------- Test 2: duplicate sessionId is ignored, not double-logged ----------
{
  const sandbox = freshSandbox();
  sandbox.doPost(fakeEvent(basePayload({ sessionId: 'dup-001', status: 'Completed' })));
  const rowCountAfterFirst = sandbox._sheets['Activity Log']._rows.length;

  // Same sessionId, different status — simulates the real-world race: a
  // lesson_complete followed by a pagehide-triggered Incomplete a moment
  // later for the SAME session.
  const result2 = sandbox.doPost(fakeEvent(basePayload({ sessionId: 'dup-001', status: 'Incomplete' })));
  const parsed2 = JSON.parse(result2.getContent());
  const rowCountAfterSecond = sandbox._sheets['Activity Log']._rows.length;

  check('duplicate sessionId does not add a second row', rowCountAfterSecond === rowCountAfterFirst, `${rowCountAfterFirst} -> ${rowCountAfterSecond}`);
  check('duplicate response reports duplicate:true and success:true (not an error)', parsed2.success === true && parsed2.duplicate === true, JSON.stringify(parsed2));
}

// ---------- Test 3: unknown student returns 404, does not log a row ----------
{
  const sandbox = freshSandbox();
  const rowsBefore = sandbox._sheets['Activity Log']._rows.length;
  const result = sandbox.doPost(fakeEvent(basePayload({ studentId: 'NOT-IN-ROSTER', sessionId: 'sess-404' })));
  const parsed = JSON.parse(result.getContent());
  const rowsAfter = sandbox._sheets['Activity Log']._rows.length;

  check('unknown student returns success:false, code 404', parsed.success === false && parsed.code === 404, JSON.stringify(parsed));
  check('unknown student does not append a row', rowsAfter === rowsBefore, `${rowsBefore} -> ${rowsAfter}`);
}

// ---------- Test 4: missing required field returns 400, does not log a row ----------
{
  const sandbox = freshSandbox();
  const rowsBefore = sandbox._sheets['Activity Log']._rows.length;
  const badPayload = basePayload({});
  delete badPayload.durationSeconds;
  const result = sandbox.doPost(fakeEvent(badPayload));
  const parsed = JSON.parse(result.getContent());
  const rowsAfter = sandbox._sheets['Activity Log']._rows.length;

  check('missing required field returns success:false, code 400', parsed.success === false && parsed.code === 400, JSON.stringify(parsed));
  check('invalid payload does not append a row', rowsAfter === rowsBefore, `${rowsBefore} -> ${rowsAfter}`);
}

// ---------- Test 5: invalid status value is rejected ----------
{
  const sandbox = freshSandbox();
  const result = sandbox.doPost(fakeEvent(basePayload({ status: 'Halfway', sessionId: 'sess-badstatus' })));
  const parsed = JSON.parse(result.getContent());
  check('invalid status value ("Halfway") is rejected with code 400', parsed.success === false && parsed.code === 400, JSON.stringify(parsed));
}

// ---------- Test 6: negative duration is rejected ----------
{
  const sandbox = freshSandbox();
  const result = sandbox.doPost(fakeEvent(basePayload({ durationSeconds: -5, sessionId: 'sess-negdur' })));
  const parsed = JSON.parse(result.getContent());
  check('negative durationSeconds is rejected with code 400', parsed.success === false && parsed.code === 400, JSON.stringify(parsed));
}

// ---------- Test 7: missing course/lesson catalog entries fall back to raw ID, do NOT 404 ----------
{
  const sandbox = freshSandbox();
  const result = sandbox.doPost(fakeEvent(basePayload({ courseId: 'UNKNOWN_COURSE', lessonId: 'unknown-lesson', sessionId: 'sess-fallback' })));
  const parsed = JSON.parse(result.getContent());
  const logRows = sandbox._sheets['Activity Log']._rows;
  const newRow = logRows[logRows.length - 1];

  check('unknown course/lesson does NOT block the write (falls back, not 404)', parsed.success === true, JSON.stringify(parsed));
  check('unknown course falls back to raw courseId as the name', newRow[6] === 'UNKNOWN_COURSE', JSON.stringify(newRow));
  check('unknown lesson falls back to raw lessonId as the title', newRow[10] === 'unknown-lesson', JSON.stringify(newRow));
}

// ---------- Test 8: lock is always released, even after a duplicate short-circuit ----------
{
  const sandbox = freshSandbox();
  sandbox.doPost(fakeEvent(basePayload({ sessionId: 'lock-test' })));
  sandbox.doPost(fakeEvent(basePayload({ sessionId: 'lock-test' }))); // duplicate, short-circuits
  sandbox.doPost(fakeEvent(basePayload({ sessionId: 'lock-test-2' }))); // should NOT be blocked by a stuck lock
  check(
    'lock does not get stuck after a duplicate short-circuit (third request still succeeds)',
    sandbox._sheets['Activity Log']._rows.some(r => r[11] === 'lock-test-2'),
    JSON.stringify(sandbox._lockLog)
  );
}

// ---------- Test 9 (core bugfix regression, end-to-end through doPost):
// two different courses' lessons that happen to share the same RAW number
// resolve to their OWN correct, denormalized LessonTitle/ChapterTitle —
// not to whichever row happened to come first in the Lesson Catalog. ----------
{
  const sandbox = freshSandbox();
  const resultA = sandbox.doPost(fakeEvent(basePayload({
    courseId: 'biostatistics', chapterId: 'biostatistics-CH01', lessonId: 'biostatistics-L01', sessionId: 'sess-collide-a'
  })));
  const resultB = sandbox.doPost(fakeEvent(basePayload({
    courseId: 'ama', chapterId: 'ama-CH01', lessonId: 'ama-L01', sessionId: 'sess-collide-b'
  })));
  check('doPost for biostatistics lesson 1 succeeds', JSON.parse(resultA.getContent()).success === true, resultA.getContent());
  check('doPost for ama lesson 1 succeeds', JSON.parse(resultB.getContent()).success === true, resultB.getContent());

  const rows = sandbox._sheets['Activity Log']._rows;
  const rowA = rows.find(r => r[11] === 'sess-collide-a');
  const rowB = rows.find(r => r[11] === 'sess-collide-b');

  check(
    'BUGFIX: two different courses\' "lesson 1" resolve to their OWN correct LessonTitle, not the first Lesson Catalog row',
    rowA[10] === 'Introduction to Biostatistics' && rowB[10] === 'Welcome to the Course — MAS 305a',
    JSON.stringify({ rowA_LessonTitle: rowA[10], rowB_LessonTitle: rowB[10] })
  );
  check(
    'BUGFIX: ChapterTitle is also correctly resolved per-course, not shared/mixed up',
    rowA[8] === 'Chapter 1' && rowB[8] === 'Course Orientation & Univariate Review',
    JSON.stringify({ rowA_ChapterTitle: rowA[8], rowB_ChapterTitle: rowB[8] })
  );
}

// ---------- Test 10: setupSpreadsheet() runs end-to-end without throwing,
// seeds all 53 real lessons, and builds a Dashboard with formulas in place ----------
{
  const sandbox = freshSandbox();
  let threw = null;
  try {
    sandbox.setupSpreadsheet();
  } catch (e) {
    threw = e;
  }
  check('setupSpreadsheet() runs without throwing', threw === null, threw && threw.stack);

  const lessonRows = sandbox._sheets['Lesson Catalog']._rows;
  // 1 header + 2 pre-seeded rows from freshSandbox() + 53 real lessons from
  // setupSpreadsheet's own seed data. seedRowsIfMissing skips rows whose
  // LessonID already exists, so the 2 pre-seeded rows above (which use the
  // same IDs as two of the real 53) are NOT duplicated.
  check(
    'setupSpreadsheet seeds all 53 real lessons into the Lesson Catalog (no duplicates for the 2 already present)',
    lessonRows.length === 1 + 53,
    `Lesson Catalog has ${lessonRows.length} rows (expected 54)`
  );

  const courseRows = sandbox._sheets['Course Catalog']._rows;
  check(
    'setupSpreadsheet seeds all 3 courses with folder-style CourseIDs (no duplicate for the 1 already present)',
    courseRows.length === 1 + 3 && courseRows.some(r => r[0] === 'biostatistics') && courseRows.some(r => r[0] === 'ssa') && courseRows.some(r => r[0] === 'ama'),
    JSON.stringify(courseRows)
  );

  const dashboard = sandbox._sheets['Dashboard'];
  check('setupSpreadsheet creates a Dashboard tab', !!dashboard, 'Dashboard sheet missing');
  if (dashboard) {
    const titleRow = dashboard._rows[0];
    check(
      'Dashboard has all 6 section titles written in row 1, in separate column bands',
      titleRow[0] && titleRow[5] && titleRow[9] && titleRow[12] && titleRow[16] && titleRow[21],
      JSON.stringify(titleRow)
    );
    const formulaCount = Object.keys(dashboard._formulas).length;
    check('Dashboard has 6 formulas written (one per block, at row 3 of each column band)', formulaCount === 6, `found ${formulaCount} formulas: ${JSON.stringify(Object.keys(dashboard._formulas))}`);
  }
}

// ---------- Print results ----------
console.log('\n=== Apps Script Smoke Test Results ===\n');
let allPass = true;
for (const r of results) {
  const status = r.pass ? 'PASS' : 'FAIL';
  if (!r.pass) allPass = false;
  console.log(`[${status}] ${r.label}${r.pass ? '' : '  -> ' + r.detail}`);
}
console.log(`\n${results.filter(r => r.pass).length}/${results.length} passed`);
process.exit(allPass ? 0 : 1);
