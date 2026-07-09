# Dev Tests

Two Node.js smoke tests that exercise the real production files — `js/storage.js`, `js/api.js`, `js/tracking.js`, and `apps-script/Code.gs` — by mocking their browser/Apps Script dependencies (localStorage, fetch, SpreadsheetApp, LockService, etc.) and asserting on real behavior. These aren't unit tests in a formal framework; they're quick regression checks for the specific bugs this project is most likely to reintroduce if edited carelessly.

Run them with plain Node, no install required:

```bash
node dev-tests/frontend_smoke_test.js
node dev-tests/apps_script_smoke_test.js
```

As of the last edit: `frontend_smoke_test.js` is 12/12, `apps_script_smoke_test.js` is 30/30.

## What frontend_smoke_test.js checks

- `tracking.js` correctly derives course/chapter/lesson IDs from a normal lesson URL and from a GitHub Pages project subpath, and fails closed (returns `null`, doesn't guess) on a malformed path
- **the ID-accuracy bugfix**: chapterId/lessonId are globally-unique composite IDs (`"<courseId>-CH<NN>"` / `"<courseId>-L<NN>"`), and two different courses' same chapter/lesson *number* produce two genuinely different IDs — this is a direct regression test for the ChapterID/LessonID/LessonTitle accuracy bug (see `PROJECT_CONTINUITY.md`)
- attempt numbers increment independently per lesson, not as one global counter
- `api.js` sends `Content-Type: text/plain`, not `application/json` — this is the CORS-preflight-avoiding header the whole backend depends on; if a future edit accidentally "fixes" this to `application/json`, this test catches it
- a 404 response clears the stored Student ID and redirects to the landing page with an error flag, rather than failing silently
- a network failure queues the payload for later retry instead of losing it
- a 400 (malformed payload) does NOT get queued for retry, since retrying identical bad data would just fail again
- the local "completed lesson" flag (`Storage.markLessonCompletedLocally` / `isLessonCompletedLocally`) round-trips correctly, and `countCompletedForCourse` only counts a given course's own completions — this backs the progress bars on `courses.html` and each `course-*.html` page

## What apps_script_smoke_test.js checks

- a valid payload writes a fully denormalized row (student name, course name, lesson title, **and now chapter title** — not just IDs) to the right columns, including the new `ChapterTitle` column and the resulting shift of `SessionID` to column 12
- **the core ID-accuracy bugfix, end-to-end through `doPost`**: two different courses' lessons that share the same raw chapter/lesson *number* resolve to their own correct `LessonTitle`/`ChapterTitle`, not to whichever Lesson Catalog row happened to come first
- **the actual race condition this project was built to prevent**: the same `sessionId` sending `Completed` and then a duplicate `Incomplete` (simulating a `pagehide` firing right after `lesson_complete`) results in exactly one row, not two
- an unrecognized student returns a 404 and does not write a row
- missing required fields, invalid status values, and negative durations are all rejected with 400 and don't write a row
- an unrecognized course or lesson ID falls back to using the raw ID as the display name rather than blocking the write — only a missing student is a hard failure
- the `LockService` lock is correctly released even when a request short-circuits early on the duplicate check, so one duplicate request can't accidentally block all future requests
- `setupSpreadsheet()` runs end-to-end without throwing, seeds all 53 real lessons and all 3 courses without duplicating rows that already exist (by ID, not full-row equality — see `seedRowsIfMissing`'s comment for a real bug this caught during development), and `buildDashboardSheet()` writes all 6 Dashboard blocks into their own column bands with a formula in each

## When to re-run these

Any time you edit `tracking.js`, `storage.js`, `api.js`, `Code.gs`, or `data/catalog.py` (the masterlist). If you add a new field to the data contract, add a corresponding assertion here too — these tests are meant to grow alongside the real code, not stay frozen as a one-time check.

