# GitHub Microlearning Portal — Project Continuity Doc

Paste this whole file into a Claude Project's knowledge base (or attach it as a file), or paste it at the start of a new conversation, to pick this build up with full context. It reflects the ACTUAL current state of the codebase as of the last working session, not the original plan — several things changed since the original design docs and should be treated as final, not the docs.

If you're also attaching the `github-microlearning-portal` Claude skill (the SKILL.md + references/ bundle from earlier in this build) to the same Project: that skill still holds correct, accurate rationale for the architecture, the data contract, the duplicate-detection logic, and the Apps Script backend. **This document supersedes it only on the specific points listed in "What changed since the skill was written" below** — everything else in the skill is still accurate and authoritative.

## What this project is

A no-LMS learning analytics system: GitHub Pages hosts Rise 360 lesson exports for 3 courses, a shared JS module (`tracking.js`/`storage.js`/`api.js`) times each lesson attempt and POSTs a record, a Google Apps Script web app validates and logs it, Google Sheets stores it. One instructor, ~200 students, no accounts, no passwords.

## Current build status

A full, working codebase exists (delivered as a zip in this conversation, folder name `portal-build/` when extracted). It is NOT yet deployed — the person building this has the code but has not yet: deployed the Apps Script backend, pushed to GitHub, turned on Pages, or uploaded real Rise 360 lesson exports. All `rise/` folders currently hold placeholder content with a "Simulate lesson completion" test button.

Both verification suites pass as of the last edit: `dev-tests/frontend_smoke_test.js` (9/9) and `dev-tests/apps_script_smoke_test.js` (17/17), run via plain `node`, no install needed. Re-run these after any future edit to `tracking.js`, `storage.js`, `api.js`, or `Code.gs`.

## What changed since the original skill/planning docs (treat these as final)

1. **Design is light mode, blue, minimalist** — NOT the dark ink-blue/ochre direction originally planned. `css/portal.css` was fully rewritten: near-white paper background (`#fafbfd`), deep blue-black text (`#1a2433`), one blue accent family (`#1e4fa8` primary). Course codes (BIOSTAT/SSA/AMA) are styled as catalog "spine labels" with a left rule, not pill badges — this is the design's one signature element. All colors were checked against WCAG AA contrast (4.5:1 minimum for body text) and one token (`--ink-faint`) was corrected from a failing 2.99:1 to a passing 4.77:1. Fonts: Source Serif 4 (headings), Inter (body/UI), IBM Plex Mono (codes/IDs) — loaded via Google Fonts `<link>` tags in every HTML page's `<head>`.

2. **Real content exists for all 7 lessons across 3 courses** — no longer one placeholder lesson per course. Real structure:
   - Biostatistics and Epidemiology (`courses/biostatistics/chapter-01/`): lesson-01 "Welcome to the Course — MLS BE 201", lesson-02 "Variables, Measurement Scales, Data Collection & Sampling"
   - Statistical Software Application (`courses/ssa/chapter-01/`): lesson-01 "Welcome to the Course — MAS 303a", lesson-02 "R & RStudio Orientation", lesson-03 "SPSS Orientation"
   - Applied Multivariate Analysis (`courses/ama/chapter-01/`): lesson-01 "Welcome to the Course — MAS 305a", lesson-02 "Hypothesis Testing & Distribution Overview"

   Every lesson has a real wrapper `index.html` with correct breadcrumb/title, and a `rise/index.html` placeholder folder waiting for the real Rise 360 HTML5 export to be dropped in (the person has not yet provided actual Rise export files — only lesson titles as text). `js/course-catalog.js` and the Apps Script `setupSpreadsheet()`'s Course/Lesson Catalog seed data both already reflect these real 7 lessons.

3. **Student ID format is locked to `YYYY-NNNNNN`** (4-digit year, hyphen, exactly 6 digits — e.g. `2025-000123`), NOT the generic `3-32 alphanumeric` check from the original build. This is enforced client-side in `index.html` via `/^\d{4}-\d{6}$/`, with matching placeholder text, helper copy, and a specific error message. This is a client-side fast-fail only — the real, authoritative validation is still server-side (does the ID exist in the Student Roster tab?), per the original data contract. The client-side regex just catches obvious typos before the network round-trip.

4. **No student roster exists yet.** The person does not currently have a masterlist of real students (Student ID + Name + Program + Section). The system is fully testable and deployable without one — `setupSpreadsheet()` seeds exactly one sentinel row (`TEST-0001`) for end-to-end testing — but no real student can sign in successfully until real roster rows are added. This is a one-time copy-paste into the Student Roster sheet tab whenever the real list is available; no code changes needed for that step.

5. **`apps-script/dashboard-formulas.md` was added** — six ready-to-paste Google Sheets `QUERY` formulas for the Dashboard tab (per-lesson completion split by status, per-student progress, average completion time, course-level rollup, section/course comparison, and a "students with zero activity" list), written against the real Activity Log column layout (A=Timestamp through P=DurationSeconds). Important built-in correction: an early draft of these used `CASE WHEN`, which is NOT valid in Google's Visualization Query Language (it only looks SQL-like) — the shipped formulas correctly use `pivot` instead, which is the native GViz way to split a count by a status column. The file is explicit that these were checked for structural validity but not executed against a live Sheet, since Claude has no way to access a real Google Sheet from the chat environment.

## Things still pending / not yet done

- Apps Script backend not yet deployed (no real Web App URL exists yet)
- `js/api.js`'s `Api.ENDPOINT_URL` still holds the literal placeholder string `'PASTE_DEPLOYED_APPS_SCRIPT_URL_HERE'`
- Repo not yet pushed to GitHub, GitHub Pages not yet enabled
- All 7 `rise/` folders hold placeholder content, not real Rise 360 exports
- No real Student Roster data — only the `TEST-0001` sentinel row
- `js/course-catalog.js` covers exactly the 7 lessons listed above — if more lessons are published later, both this file AND a matching Lesson Catalog row in the Sheet need updating (the weekly workflow is documented in the top-level README)

## Repo structure (as currently built)

```
index.html              Landing page, Student ID entry (YYYY-NNNNNN format)
courses.html            Course/chapter/lesson navigation, reads js/course-catalog.js
css/portal.css          Light/blue/minimalist design system, ~490 lines
js/
  storage.js             All localStorage/sessionStorage access
  api.js                 Sends payloads to Apps Script; ENDPOINT_URL still a placeholder
  tracking.js            Lesson lifecycle, timer, session ID, payload construction
  rise-integration.js    Bridges Rise 360's postMessage/SCORM-shim completion signal
  course-catalog.js      Real 7-lesson nav data (see "what changed" #2 above)
courses/
  biostatistics/chapter-01/lesson-01/  and  lesson-02/
  ssa/chapter-01/lesson-01/  lesson-02/  and  lesson-03/
  ama/chapter-01/lesson-01/  and  lesson-02/
  (each lesson folder: index.html wrapper + rise/index.html placeholder)
apps-script/
  Code.gs                  Full backend: validation, roster/course/lesson lookups,
                            LockService-guarded sessionId dedup, denormalized
                            Activity Log writes, setupSpreadsheet() + seed data,
                            testDoPostManually() test helper
  README.md                Step-by-step Apps Script deployment walkthrough
  dashboard-formulas.md    Ready-to-paste QUERY formulas for the Dashboard tab
dev-tests/
  frontend_smoke_test.js     Node test for js/*.js — 9 checks, run with `node`
  apps_script_smoke_test.js  Node test for Code.gs — 17 checks, including the
                              exact duplicate-session race condition
  README.md                  Explains what each test checks
generate_lessons.py     One-off script that scaffolded the 7 lesson wrapper pages
.gitignore
README.md                Full GitHub deployment walkthrough, Parts 1-7:
                          (1) deploy backend, (2) create GitHub repo, (3) push code,
                          (4) swap in real Rise exports, (5) enable Pages,
                          (6) test end to end, (7) ongoing tracking/Dashboard use
                          — plus a Troubleshooting section
```

## Key design decisions worth knowing if extending this (from the original skill, still accurate)

- Identity is Student ID only, never name, sent from the browser — name/program/section are looked up server-side from the roster on every request, never stored client-side.
- The Activity Log is fully denormalized: course name and lesson title are written directly into each row (via server-side lookups), not just IDs — so the instructor never needs a VLOOKUP to read their own spreadsheet.
- Duplicate protection uses `sessionId` ALONE as the dedup key (not `studentId+sessionId`), guarded by `LockService`, because the real failure mode is the same session firing two terminal events (e.g. `lesson_complete` then a `pagehide`-triggered `Incomplete` moments later) — `sessionId` alone is the only key that can actually catch that.
- The frontend sends `Content-Type: text/plain`, not `application/json`, specifically to avoid a CORS preflight that Apps Script web apps don't handle — this is the most common real-world failure point for this architecture and is deliberate, not a mistake if seen in the code.
- Apps Script `doPost` always returns HTTP 200 regardless of logical outcome (Apps Script can't set custom HTTP status codes on web app responses) — failure is signaled via the JSON body's `success`/`code` fields, never `response.status`. `api.js` is written to respect this.
- Lock wraps the ENTIRE `doPost` handler in `Code.gs`, not just the final write — the duplicate-check and the append must be atomic together, or two simultaneous requests for the same session could both pass the check before either has appended.

## If picking this up in a new conversation, the useful next things to ask for are probably

- Walking through actual deployment (Parts 1-6 of the top-level README) interactively
- Building out a real Student Roster once a masterlist exists
- Swapping in real Rise 360 exports once they're ready, one lesson at a time
- Adding lesson 3+ to any course beyond what exists today
- Anything about reading/interpreting the Dashboard once real data starts flowing
