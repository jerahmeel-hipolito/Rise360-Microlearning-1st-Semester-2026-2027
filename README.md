# GitHub Microlearning Portal

A lightweight, no-LMS learning analytics system: GitHub Pages hosts Rise 360 lesson exports, a small shared JS module tracks lesson attempts, and a Google Apps Script web app logs everything to Google Sheets. Built for one instructor, three courses, roughly 200 students.

This repo is the implementation of the `github-microlearning-portal` Claude skill — if you're extending this project in a future Claude session, that skill (installed separately) carries the full design rationale and the corrections made to the original planning documents. This README is the practical "how do I actually run this" companion.

## What's in this repo

```
index.html              Landing page — student enters their Student ID once
courses.html            Course / chapter / lesson navigation
css/portal.css           Shared design system
js/
  storage.js             All localStorage/sessionStorage access
  api.js                 Sends analytics payloads to Apps Script, handles offline retry
  tracking.js            Lesson lifecycle: timer, session ID, payload construction
  rise-integration.js    Bridges Rise 360's completion signal to tracking.js
  course-catalog.js      Frontend course/chapter/lesson data driving courses.html nav
courses/
  biostatistics/chapter-01/lesson-01/   Sample lesson (with a placeholder Rise stand-in)
  ssa/chapter-01/lesson-01/             Sample lesson
  ama/chapter-01/lesson-01/             Sample lesson
apps-script/
  Code.gs                The entire backend
  README.md              Step-by-step Apps Script deployment walkthrough
dev-tests/
  frontend_smoke_test.js     Node-based regression test for js/*.js (run with `node`, no install needed)
  apps_script_smoke_test.js  Node-based regression test for Code.gs, including the exact duplicate-session race condition
```

## Quick start

1. **Backend first.** Follow `apps-script/README.md` start to finish — create the Sheet, paste `Code.gs` in, run `setupSpreadsheet`, run `testDoPostManually`, then deploy as a web app and copy the URL.
2. **Wire up the frontend.** Open `js/api.js` and replace `Api.ENDPOINT_URL`'s placeholder with the deployed Apps Script URL from step 1.
3. **Try it locally.** Serve this folder with any static file server (e.g. `python3 -m http.server 8000` from this directory, or use VS Code's Live Server) and open `http://localhost:8000/index.html`. Enter any Student ID matching the format `2025-0001` — for a real end-to-end test against your deployed backend, use the same ID you seeded in the roster (e.g. `TEST-0001` if you haven't replaced the sample data yet).
4. **Click through to a lesson** and use the placeholder "Simulate lesson completion" button inside the lesson's iframe (or run `window.markLessonComplete()` in the browser devtools console) to fire a completion event without needing a real Rise export yet. Check your Activity Log tab for a new row.
5. **Push to GitHub and enable Pages** (repo Settings → Pages → deploy from the branch/folder containing these files) once you're happy with local testing.

## Adding a real lesson (weekly workflow)

1. Export the finished lesson from Rise 360 as HTML5.
2. Unzip the export into a new `lesson-NN/rise/` folder under the right course/chapter path — fully replacing the placeholder `rise/index.html` that ships in the sample lessons.
3. Copy one of the existing `lesson-XX/index.html` wrapper pages into the new lesson folder, and update its title, breadcrumb text, and `<title>` to match the new lesson. The four `<script src="...">` tags and the relative `../../../../` paths back to `css/` and `js/` only need adjusting if you change how deeply nested the lesson folder is.
4. Add one entry to `js/course-catalog.js` so the lesson shows up as a clickable link on `courses.html`.
5. Add a matching row to the **Lesson Catalog** tab in the Sheet (LessonID, LessonTitle, ChapterTitle, CourseID) so the Activity Log shows a readable title instead of falling back to the raw lesson ID.
6. Commit and push. GitHub Pages republishes automatically within a minute or two.
7. Open the new lesson yourself once, complete it, and confirm a new row appears in the Activity Log before telling students it's live.

## Known placeholders that need real content before this goes live

- `js/api.js` → `Api.ENDPOINT_URL` — currently a literal placeholder string, must be replaced with your real deployed Apps Script URL.
- Every `rise/index.html` under `courses/` — currently a stand-in page with a manual "simulate completion" button. Replace with real Rise 360 exports.
- `js/course-catalog.js` — currently has one sample lesson per course. Expand as real lessons are published.
- The Student Roster, Course Catalog, and Lesson Catalog sheet tabs — `setupSpreadsheet` seeds one sample row in each (`TEST-0001` / `BIOSTAT` / `lesson-01`) purely so the manual test function works out of the box. Replace with your real class roster and catalogs before opening this up to actual students.

## Browser support note

`tracking.js` uses `crypto.randomUUID()` with a manual fallback for older browsers, and relies on the `pagehide` event for detecting early exits — this is well-supported across modern browsers but, per the original project risk notes, is never 100% guaranteed to fire in every close/crash scenario. Treat the occasional missing `Incomplete` record as an accepted limitation, not a bug.
