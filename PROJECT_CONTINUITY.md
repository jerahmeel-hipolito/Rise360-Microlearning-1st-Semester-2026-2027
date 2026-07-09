# GitHub Microlearning Portal — Project Continuity Doc

Paste this whole file into a Claude Project's knowledge base (or attach it as a file), or paste it at the start of a new conversation, to pick this build up with full context. It reflects the ACTUAL current state of the codebase as of the last working session, not the original plan — several things changed since the original design docs (and since the previous version of this continuity doc) and should be treated as final, not superseded.

If you're also attaching the `github-microlearning-portal` Claude skill (the SKILL.md + references/ bundle from earlier in this build) to the same Project: that skill still holds correct, accurate rationale for the architecture, the duplicate-detection logic, and the general Apps Script backend shape. **This document supersedes it on every specific point listed below** — everything else in the skill is still accurate and authoritative.

## What this project is

A no-LMS learning analytics system: GitHub Pages hosts Rise 360 lesson exports for 3 courses, a shared JS module (`tracking.js`/`storage.js`/`api.js`/`lesson-nav.js`) times each lesson attempt and POSTs a record, a Google Apps Script web app validates and logs it, Google Sheets stores it and now auto-builds a Dashboard. One instructor, ~200 students, no accounts, no passwords.

## Current build status

A full, working codebase exists. It is NOT yet deployed — the person building this has the code but has not yet: deployed the Apps Script backend, pushed to GitHub, turned on Pages, or uploaded real Rise 360 lesson exports. All 53 `rise/` folders currently hold placeholder content with a "Simulate lesson completion" test button.

Both verification suites pass as of the last edit: `dev-tests/frontend_smoke_test.js` (**12/12**) and `dev-tests/apps_script_smoke_test.js` (**30/30**), run via plain `node`, no install needed. Re-run these after any future edit to `tracking.js`, `storage.js`, `api.js`, `lesson-nav.js`, `Code.gs`, or `data/catalog.py`.

## What changed in this session (treat these as final, superseding the previous version of this doc)

1. **The full 53-lesson, 32-chapter masterlist is now built out**, replacing the previous placeholder set of 7 lessons in 1 chapter per course. Real structure:
   - **MLSBE 201 — Biostatistics and Epidemiology** (`biostatistics`): 8 chapters, 16 lessons (Foundations; Organizing & Visualizing Health Data; Descriptive Statistics/Probability/Distributions; Epidemiology Foundations; Hypothesis Testing & Group Comparisons; Categorical Data/Correlation/Regression; Diagnostic Testing/Study Design/Sampling; Critical Appraisal & Capstone Readiness)
   - **MAS 303a — Statistical Software Application** (`ssa`): 8 chapters, 16 lessons (Foundations & Software Orientation; Data Management & Wrangling; Data Visualization & Storytelling; EDA; Inferential Statistics; Relationships & Prediction; Reporting & Reproducibility; Capstone Hackathon)
   - **MAS 305a — Applied Multivariate Analysis** (`ama`): 11 chapters, 21 lessons (Orientation & Univariate Review through MANOVA, PCA, EFA, Reliability, Cluster Analysis, CFA, SEM, and Integration/Ethics)

   The complete, authoritative chapter/lesson title list lives in **`data/catalog.py`** — that file is now the single source of truth for every course/chapter/lesson name in the project (frontend nav, lesson folders, and the Apps Script catalog seed data are all GENERATED from it; see the top-level README's "single source of truth" section for the regeneration workflow). Don't hand-edit `js/course-catalog.js` or the Lesson/Course Catalog seed rows in `Code.gs` — edit `data/catalog.py` and regenerate.

   Every one of the 53 lessons has a real wrapper `index.html` and a placeholder `rise/index.html` waiting for the real Rise 360 export (none have been provided yet — only lesson titles as text, same as before, just at 53x the scale).

2. **`courses.html` is now a course PREVIEW grid, not a full listing.** It shows 3 cards (one per course) with a graph-paper-motif header band, course code, chapter/lesson counts, a local progress bar, and a "View course" / "Continue course" link — no lesson-level detail on this page anymore. Clicking a card goes to that course's own dedicated detail page.

3. **Three new per-course detail pages were added**: `course-biostatistics.html`, `course-ssa.html`, `course-ama.html`. Each shows that course's full chapter/lesson list (collapsible `<details>` per chapter, auto-opens the first not-yet-finished chapter) plus a progress bar ("`X` of `Y` lessons completed, `Z`%"). All three are generated from the same `data/course_detail_template.html`, differing only by an embedded `courseId` — there's no meaningful logic duplication to maintain.

4. **The chapterId/lessonId/LessonTitle accuracy bug is fixed.** Previously `tracking.js` sent bare, non-unique numbers (e.g. `"01"`) as chapterId/lessonId — every course's chapter 1 was `"01"`, so the Apps Script Lesson Catalog lookup matched whichever row happened to come first, and the wrong course's LessonTitle (and an unresolved raw ChapterID) frequently got logged. Fixed at the source: `tracking.js`'s `deriveLessonMetadata()` now builds **globally-unique composite IDs** — `"<courseId>-CH<NN>"` / `"<courseId>-L<NN>"` (e.g. `"biostatistics-CH03"` / `"biostatistics-L05"`) — purely from the URL, no external lookup needed. `Code.gs`'s Lesson/Course Catalog seed data is keyed on these same IDs (CourseID is now the URL folder name like `"biostatistics"`, not a short code like `"BIOSTAT"` — the old short-code seed values never actually matched what the frontend sent, so CourseName resolution was quietly broken too; that's fixed as the same change). A new `ChapterTitle` column was added to the Activity Log (denormalized, looked up from the Lesson Catalog's own ChapterTitle field) so the sheet shows a readable chapter name, not just an ID — this shifted `SessionID` from column 11 to column 12 (`ACTIVITY_LOG_SESSION_ID_COL` updated to match). While writing the regression test for this, a **second, previously-unnoticed bug** was caught and fixed: `seedRowsIfMissing()` deduped by full-row equality instead of by ID, so a row whose ID already existed but had slightly different title text would be inserted as a genuine duplicate ID row; it now dedupes by the ID column only.

5. **The Dashboard tab now builds itself.** `setupSpreadsheet()` calls a new `buildDashboardSheet()`, which writes 6 live formula blocks (per-lesson completion by status, per-student progress, average completion time, course rollup, section comparison, students with zero activity) directly into the Dashboard tab, laid out in separate column bands (not stacked) so growth in one block's row count can never collide with another. `apps-script/dashboard-formulas.md` is now documentation of what got built and why, not copy-paste instructions.

6. **Lesson player enlarged, sidebar made collapsible.** The player iframe grew from ~78vh (min 620/max 900px) to ~88vh (min 720/max 1120px). The sidebar is shown by default on every visit and can be collapsed via a toggle button in the lesson meta bar (persists per-browser via `localStorage`, not per-session) so a student can focus on just the player. The sidebar itself now groups lessons under non-collapsible chapter-title labels within each course, since some courses now run up to 11 chapters / 21 lessons — a flat list would have been unwieldy at this scale.

7. **`index.html` and the design system got a visual pass** (same locked light/blue/minimalist direction from the previous session — this was polish, not a redesign): a quiet scatter/regression-line SVG watermark on the landing hero (low-opacity, stays secondary to the course "spine label" tags, which remain the one bold signature element), richer hero typography rhythm, a small icon added to the ID card, and hover/depth polish on course-tag rows and preview/detail cards. `courses.html`'s new preview cards use a graph-paper-motif gradient band in place of photography (none available in this build) rather than introducing new accent colors, to stay inside the existing one-blue-accent palette.

## Things still pending / not yet done

- Apps Script backend not yet deployed (no real Web App URL exists yet)
- `js/api.js`'s `Api.ENDPOINT_URL` still holds the literal placeholder string `'PASTE_DEPLOYED_APPS_SCRIPT_URL_HERE'`
- Repo not yet pushed to GitHub, GitHub Pages not yet enabled
- All 53 `rise/` folders hold placeholder content, not real Rise 360 exports
- No real Student Roster data — only the `TEST-0001` sentinel row
- If more lessons are published later beyond the current 53, `data/catalog.py` needs updating first, then regenerate everything from it (see the top-level README) — don't hand-edit the generated files

## Repo structure (as currently built)

```
index.html                    Landing page, Student ID entry (YYYY-NNNNNN format)
courses.html                  Course PREVIEW grid (3 cards) — click through to a course's own page
course-biostatistics.html     Full chapter/lesson list + progress bar, MLSBE 201 (16 lessons / 8 chapters)
course-ssa.html               Full chapter/lesson list + progress bar, MAS 303a (16 lessons / 8 chapters)
course-ama.html                Full chapter/lesson list + progress bar, MAS 305a (21 lessons / 11 chapters)
css/portal.css                 Light/blue/minimalist design system
js/
  storage.js                    localStorage/sessionStorage access, incl. local completion flags + per-course progress counter
  api.js                        Sends payloads to Apps Script; ENDPOINT_URL still a placeholder
  tracking.js                   Lesson lifecycle, timer, session ID, globally-unique ID construction, payload construction
  rise-integration.js           Bridges Rise 360's postMessage/SCORM-shim completion signal
  course-catalog.js             GENERATED from data/catalog.py — full 53-lesson nav data, don't hand-edit
  lesson-nav.js                 Builds sidebar (grouped by chapter), collapsible toggle, Next Lesson link
courses/
  biostatistics/  chapter-01/ .. chapter-08/    16 lessons total
  ssa/            chapter-01/ .. chapter-08/    16 lessons total
  ama/            chapter-01/ .. chapter-11/    21 lessons total
  (each lesson folder: index.html wrapper + rise/index.html placeholder)
apps-script/
  Code.gs                   Full backend: validation, roster/course/lesson lookups (now on globally-unique
                             composite IDs), LockService-guarded sessionId dedup, denormalized Activity Log
                             writes (incl. new ChapterTitle column), setupSpreadsheet() + full 53-lesson seed
                             data, buildDashboardSheet() (NEW), testDoPostManually() test helper
  README.md                 Step-by-step Apps Script deployment walkthrough
  dashboard-formulas.md     Documents the 6 auto-built Dashboard formula blocks
rise-completion-trigger/
  completion-block.html         Master HTML5 completion-trigger template (window.top postMessage)
  ready-to-upload/*.html        Pre-filled copy per lesson, now covering all 53 lessons
  README.md
dev-tests/
  frontend_smoke_test.js     Node test for js/*.js — 12 checks (was 9; added ID-collision + progress-counter tests)
  apps_script_smoke_test.js  Node test for Code.gs — 30 checks (was 17; added end-to-end ID-collision regression
                              test and a setupSpreadsheet()/Dashboard test), run with `node`
  README.md                  Explains what each test checks
data/
  catalog.py                     THE MASTERLIST — single source of truth for every course/chapter/lesson name
  catalog.json                   Generated from catalog.py
  build_catalog_json.py          catalog.py -> catalog.json
  lesson_wrapper_template.html   Template generate_lessons.py fills in per lesson
  rise_placeholder_template.html Template for each rise/index.html placeholder
  course_detail_template.html    Template the 3 course-*.html pages are generated from
generate_lessons.py       Regenerates all 53 lesson wrapper + placeholder pages from data/catalog.py
.gitignore
README.md                Full GitHub deployment walkthrough, Parts 1-7, plus Troubleshooting and
                          "adding a future lesson" (now describing the data/catalog.py-driven workflow)
```

## Key design decisions worth knowing if extending this (still accurate)

- Identity is Student ID only, never name, sent from the browser — name/program/section are looked up server-side from the roster on every request, never stored client-side.
- The Activity Log is fully denormalized: course name, chapter title, and lesson title are all written directly into each row (via server-side lookups), not just IDs — so the instructor never needs a VLOOKUP to read their own spreadsheet.
- Duplicate protection uses `sessionId` ALONE as the dedup key (not `studentId+sessionId`), guarded by `LockService`, because the real failure mode is the same session firing two terminal events (e.g. `lesson_complete` then a `pagehide`-triggered `Incomplete` moments later) — `sessionId` alone is the only key that can actually catch that.
- The frontend sends `Content-Type: text/plain`, not `application/json`, specifically to avoid a CORS preflight that Apps Script web apps don't handle.
- Apps Script `doPost` always returns HTTP 200 regardless of logical outcome — failure is signaled via the JSON body's `success`/`code` fields, never `response.status`. `api.js` respects this.
- Lock wraps the ENTIRE `doPost` handler in `Code.gs`, not just the final write — the duplicate-check and the append must be atomic together.
- **chapterId/lessonId are globally unique, courseId-prefixed composite strings** (`"<courseId>-CH<NN>"` / `"<courseId>-L<NN>"`), derived purely from the URL with no catalog lookup needed — this is the fix for the ID-accuracy bug described above; don't reintroduce bare per-course numbering as a primary key.
- The LOCAL, cosmetic "lesson completed" flag used for progress bars/sidebar checkmarks (`Storage.markLessonCompletedLocally`/`isLessonCompletedLocally`/`countCompletedForCourse`) intentionally uses a DIFFERENT, simpler key (raw chapter/lesson numbers, not the composite backend IDs) — it only ever needs to be unique within one browser's storage, and keeping it decoupled from the backend ID format means a future backend ID scheme change can't silently break the progress bars.
- `data/catalog.py` is the single source of truth for course/chapter/lesson content — `js/course-catalog.js`, the 53 lesson folders, and the Apps Script catalog seed data are all generated from it and should never be hand-edited directly.

## If picking this up in a new conversation, the useful next things to ask for are probably

- Walking through actual deployment (Parts 1-6 of the top-level README) interactively
- Building out a real Student Roster once a masterlist exists
- Swapping in real Rise 360 exports once they're ready, one lesson at a time (the `rise-completion-trigger/ready-to-upload/` files are ready for all 53)
- Adding lessons/chapters beyond the current 53 (edit `data/catalog.py`, then regenerate — see the top-level README)
- Anything about reading/interpreting the auto-built Dashboard once real data starts flowing
