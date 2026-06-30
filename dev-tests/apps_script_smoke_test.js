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
  return {
    _rows: rows,
    getDataRange() {
      return {
        getValues: () => rows.map(r => r.slice())
      };
    },
    getLastRow() {
      return rows.length;
    },
    getRange(row, col, numRows, numCols) {
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
        setFontWeight: () => {}
      };
    },
    appendRow(values) {
      rows.push(values.slice());
    },
    setFrozenRows: () => {}
  };
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
      'CourseID', 'CourseName', 'ChapterID', 'LessonID', 'LessonTitle',
      'SessionID', 'AttemptNumber', 'Status', 'StartTime', 'EndTime', 'DurationSeconds'
    ])
  };

  // Seed one roster student and one course/lesson catalog row, mirroring
  // setupSpreadsheet()'s seed data, so lookups have something to find.
  sheets['Student Roster'].appendRow(['2025-0001', 'Jane Student', 'BS Statistics', 'Section A']);
  sheets['Course Catalog'].appendRow(['BIOSTAT', 'Biostatistics and Epidemiology']);
  sheets['Lesson Catalog'].appendRow(['lesson-01', 'Introduction to Biostatistics', 'Chapter 1', 'BIOSTAT']);

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
    studentId: '2025-0001',
    sessionId: 'sess-' + Math.random().toString(36).slice(2),
    courseId: 'BIOSTAT',
    chapterId: '01',
    lessonId: 'lesson-01',
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
  check('appended row has denormalized LessonTitle', newRow[9] === 'Introduction to Biostatistics', JSON.stringify(newRow));
  check('SessionID lands in column 11 (index 10)', newRow[10] === 'sess-001', JSON.stringify(newRow));
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
  check('unknown lesson falls back to raw lessonId as the title', newRow[9] === 'unknown-lesson', JSON.stringify(newRow));
}

// ---------- Test 8: lock is always released, even after a duplicate short-circuit ----------
{
  const sandbox = freshSandbox();
  sandbox.doPost(fakeEvent(basePayload({ sessionId: 'lock-test' })));
  sandbox.doPost(fakeEvent(basePayload({ sessionId: 'lock-test' }))); // duplicate, short-circuits
  sandbox.doPost(fakeEvent(basePayload({ sessionId: 'lock-test-2' }))); // should NOT be blocked by a stuck lock
  check(
    'lock does not get stuck after a duplicate short-circuit (third request still succeeds)',
    sandbox._sheets['Activity Log']._rows.some(r => r[10] === 'lock-test-2'),
    JSON.stringify(sandbox._lockLog)
  );
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
