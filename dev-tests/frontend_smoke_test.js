// smoke_test.js — mocks localStorage/sessionStorage/fetch/window/navigator
// and exercises the real js/*.js files to catch real bugs (not just typos)
// before calling this "done." Run with: node smoke_test.js

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function makeMockStorage() {
  const store = {};
  return {
    getItem(k) { return Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null; },
    setItem(k, v) { store[k] = String(v); },
    removeItem(k) { delete store[k]; },
    get length() { return Object.keys(store).length; },
    key(i) { return Object.keys(store)[i] ?? null; },
    _dump() { return { ...store }; }
  };
}

const results = [];
function check(label, condition, detail) {
  results.push({ label, pass: !!condition, detail });
}

function freshSandbox(pathname, fetchImpl) {
  const localStorage = makeMockStorage();
  const sessionStorage = makeMockStorage();

  const sandbox = {
    localStorage,
    sessionStorage,
    window: {
      location: { pathname, search: '' },
      crypto: { randomUUID: () => 'uuid-' + Math.random().toString(36).slice(2) },
      addEventListener: () => {} // no-op for pagehide etc in this smoke test
    },
    navigator: { userAgent: 'SmokeTest/1.0' },
    document: { addEventListener: () => {} }, // prevent auto Tracking.init() on DOMContentLoaded
    console,
    fetch: fetchImpl,
    URLSearchParams: URLSearchParams,
    Storage: undefined,
    Api: undefined,
    Tracking: undefined
  };
  sandbox.global = sandbox;
  vm.createContext(sandbox);

  const files = ['js/storage.js', 'js/api.js', 'js/tracking.js'];
  for (const f of files) {
    const code = fs.readFileSync(path.join(__dirname, '..', f), 'utf8');
    vm.runInContext(code, sandbox, { filename: f });
  }
  // vm.runInContext's `const`/`let` top-level bindings don't attach to the
  // sandbox object automatically (this mirrors how classic <script> tags
  // behave in real browsers too — const at top level doesn't become a
  // window property either, though sibling <script> tags DO still see it
  // via shared lexical scope, which is what the real site relies on).
  // Pull the bindings out explicitly so this test harness can inspect them.
  sandbox.Storage = vm.runInContext('Storage', sandbox);
  sandbox.Api = vm.runInContext('Api', sandbox);
  sandbox.Tracking = vm.runInContext('Tracking', sandbox);
  return sandbox;
}

// ---------- Test 1: deriveLessonMetadata parses a normal lesson path ----------
// BUGFIX regression test: chapterId/lessonId must be GLOBALLY UNIQUE
// (prefixed with courseId), not bare digits — bare digits collide across
// courses (every course's chapter 1 was "01") and caused the Apps Script
// Lesson Catalog lookup to match the wrong course's lesson. See tracking.js
// and Code.gs for the full explanation.
{
  const sandbox = freshSandbox('/courses/biostatistics/chapter-01/lesson-01/index.html', async () => ({ json: async () => ({ success: true }) }));
  const meta = sandbox.Tracking.deriveLessonMetadata();
  check(
    'deriveLessonMetadata parses a standard lesson path into globally-unique composite IDs',
    meta &&
      meta.courseId === 'biostatistics' &&
      meta.chapterId === 'biostatistics-CH01' &&
      meta.lessonId === 'biostatistics-L01' &&
      meta.chapterNum === '01' &&
      meta.lessonNum === '01',
    JSON.stringify(meta)
  );
}

// ---------- Test 2: deriveLessonMetadata handles a GitHub Pages project subpath ----------
{
  const sandbox = freshSandbox('/my-repo-name/courses/ssa/chapter-02/lesson-03/index.html', async () => ({ json: async () => ({ success: true }) }));
  const meta = sandbox.Tracking.deriveLessonMetadata();
  check(
    'deriveLessonMetadata handles a GitHub Pages project subpath, still producing composite IDs',
    meta &&
      meta.courseId === 'ssa' &&
      meta.chapterId === 'ssa-CH02' &&
      meta.lessonId === 'ssa-L03' &&
      meta.chapterNum === '02' &&
      meta.lessonNum === '03',
    JSON.stringify(meta)
  );
}

// ---------- Test 2b: two different courses' same chapter/lesson NUMBER produce DIFFERENT IDs ----------
// This is the exact bug scenario: without the courseId prefix, BIOSTAT's
// chapter 1/lesson 1 and AMA's chapter 1/lesson 1 would send IDENTICAL
// chapterId/lessonId values to the backend.
{
  const sandboxA = freshSandbox('/courses/biostatistics/chapter-01/lesson-01/index.html', async () => ({ json: async () => ({ success: true }) }));
  const sandboxB = freshSandbox('/courses/ama/chapter-01/lesson-01/index.html', async () => ({ json: async () => ({ success: true }) }));
  const metaA = sandboxA.Tracking.deriveLessonMetadata();
  const metaB = sandboxB.Tracking.deriveLessonMetadata();
  check(
    'the same chapter/lesson NUMBER in two different courses produces two DIFFERENT globally-unique IDs',
    metaA.lessonId !== metaB.lessonId && metaA.chapterId !== metaB.chapterId,
    JSON.stringify({ metaA, metaB })
  );
}

// ---------- Test 3: deriveLessonMetadata returns null on a malformed path (fail closed) ----------
{
  const sandbox = freshSandbox('/courses/biostatistics/notachapter/index.html', async () => ({ json: async () => ({ success: true }) }));
  const meta = sandbox.Tracking.deriveLessonMetadata();
  check(
    'deriveLessonMetadata fails closed (returns null) on a malformed path',
    meta === null,
    JSON.stringify(meta)
  );
}

// ---------- Test 4: attemptNumber increments per-lesson, not globally ----------
{
  const sandbox = freshSandbox('/courses/biostatistics/chapter-01/lesson-01/index.html', async () => ({ json: async () => ({ success: true }) }));
  const a1 = sandbox.Storage.incrementAttemptNumber('lesson-01');
  const a2 = sandbox.Storage.incrementAttemptNumber('lesson-01');
  const bOther = sandbox.Storage.incrementAttemptNumber('lesson-02'); // different lesson, should start fresh
  check(
    'attemptNumber increments per-lesson, independent counters',
    a1 === 1 && a2 === 2 && bOther === 1,
    JSON.stringify({ a1, a2, bOther })
  );
}

// ---------- Test 5: api.js sends text/plain content-type, not application/json ----------
{
  let capturedHeaders = null;
  const fetchSpy = async (url, opts) => {
    capturedHeaders = opts.headers;
    return { json: async () => ({ success: true, message: 'Activity logged.' }) };
  };
  const sandbox = freshSandbox('/courses/biostatistics/chapter-01/lesson-01/index.html', fetchSpy);
  sandbox.Storage.setStudentId('2025-000123');

  // Run as an async IIFE inside the sandbox to await Api.send
  vm.runInContext(`
    (async () => {
      global.__sendPromise = Api.send({ studentId: '2025-000123', sessionId: 's1', status: 'Completed' });
    })();
  `, sandbox);
}

(async () => {
  // Re-run test 5 properly with async/await at top level since the IIFE above can't be awaited from outside easily
  let capturedHeaders = null;
  const fetchSpy = async (url, opts) => {
    capturedHeaders = opts.headers;
    return { json: async () => ({ success: true, message: 'Activity logged.' }) };
  };
  const sandbox = freshSandbox('/courses/biostatistics/chapter-01/lesson-01/index.html', fetchSpy);
  await sandbox.Api.send({ studentId: '2025-000123', sessionId: 's1', status: 'Completed' });
  check(
    'api.js sends Content-Type: text/plain (CORS-preflight-avoiding), not application/json',
    capturedHeaders && capturedHeaders['Content-Type'] === 'text/plain;charset=utf-8',
    JSON.stringify(capturedHeaders)
  );

  // ---------- Test 6: on 404, api.js clears studentId and redirects ----------
  {
    const fetch404 = async () => ({ json: async () => ({ success: false, code: 404, message: 'Student ID not found.' }) });
    const sandbox6 = freshSandbox('/courses/biostatistics/chapter-01/lesson-01/index.html', fetch404);
    sandbox6.Storage.setStudentId('BAD-ID');
    await sandbox6.Api.send({ studentId: 'BAD-ID', sessionId: 's2', status: 'Completed' });
    check(
      'on 404 (student not found), studentId is cleared from storage',
      sandbox6.Storage.getStudentId() === null,
      'studentId after 404: ' + sandbox6.Storage.getStudentId()
    );
    check(
      'on 404, redirect target includes error=student_not_found',
      sandbox6.window.location.href && sandbox6.window.location.href.includes('error=student_not_found'),
      sandbox6.window.location.href
    );
  }

  // ---------- Test 7: network failure queues the payload instead of losing it ----------
  {
    const fetchFails = async () => { throw new Error('network down'); };
    const sandbox7 = freshSandbox('/courses/biostatistics/chapter-01/lesson-01/index.html', fetchFails);
    await sandbox7.Api.send({ studentId: '2025-000123', sessionId: 's3', status: 'Incomplete' });
    const queue = sandbox7.Storage.getPendingQueue();
    check(
      'network failure queues the payload for retry instead of losing it',
      queue.length === 1 && queue[0].sessionId === 's3',
      JSON.stringify(queue)
    );
  }

  // ---------- Test 8: a 400 (invalid payload) does NOT get queued for retry ----------
  {
    const fetch400 = async () => ({ json: async () => ({ success: false, code: 400, message: 'Missing field.' }) });
    const sandbox8 = freshSandbox('/courses/biostatistics/chapter-01/lesson-01/index.html', fetch400);
    await sandbox8.Api.send({ studentId: '2025-000123', sessionId: 's4', status: 'Completed' });
    const queue = sandbox8.Storage.getPendingQueue();
    check(
      'a 400 (malformed payload) is NOT queued for retry (retry would fail identically)',
      queue.length === 0,
      JSON.stringify(queue)
    );
  }

  // ---------- Test 9: local completion flag + per-course progress counter ----------
  {
    const sandbox9 = freshSandbox('/courses/biostatistics/chapter-01/lesson-01/index.html', async () => ({ json: async () => ({ success: true }) }));
    // Mirrors what tracking.js's onLessonComplete actually calls: raw
    // chapterNum/lessonNum (NOT the composite backend IDs) — see storage.js
    // and tracking.js for why these are intentionally different keys.
    sandbox9.Storage.markLessonCompletedLocally('biostatistics', '01', '01');
    sandbox9.Storage.markLessonCompletedLocally('biostatistics', '01', '02');
    sandbox9.Storage.markLessonCompletedLocally('ssa', '01', '01'); // different course, must not count toward biostatistics

    const isDone1 = sandbox9.Storage.isLessonCompletedLocally('biostatistics', '01', '01');
    const isNotDone = sandbox9.Storage.isLessonCompletedLocally('biostatistics', '02', '03');
    const biostatCount = sandbox9.Storage.countCompletedForCourse('biostatistics');
    const ssaCount = sandbox9.Storage.countCompletedForCourse('ssa');

    check(
      'isLessonCompletedLocally reads back what markLessonCompletedLocally wrote',
      isDone1 === true && isNotDone === false,
      JSON.stringify({ isDone1, isNotDone })
    );
    check(
      'countCompletedForCourse only counts that course\'s completions, not other courses\'',
      biostatCount === 2 && ssaCount === 1,
      JSON.stringify({ biostatCount, ssaCount })
    );
  }

  // ---------- Print results ----------
  console.log('\n=== Smoke Test Results ===\n');
  let allPass = true;
  for (const r of results) {
    const status = r.pass ? 'PASS' : 'FAIL';
    if (!r.pass) allPass = false;
    console.log(`[${status}] ${r.label}${r.pass ? '' : '  -> ' + r.detail}`);
  }
  console.log(`\n${results.filter(r => r.pass).length}/${results.length} passed`);
  process.exit(allPass ? 0 : 1);
})();
