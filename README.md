# GitHub Microlearning Portal

A lightweight, no-LMS learning analytics system: GitHub Pages hosts Rise 360 lesson exports, a small shared JS module tracks lesson attempts, and a Google Apps Script web app logs everything to Google Sheets. Built for one instructor, three courses, **53 lessons across 32 chapters**, roughly 200 students.

This repo is the implementation of the `github-microlearning-portal` Claude skill — if you're extending this project in a future Claude session, that skill (installed separately) carries the full design rationale. `PROJECT_CONTINUITY.md` in this repo has the up-to-date, authoritative state of the build (including everything that changed since the skill was written) and is the better starting point if you're picking this project back up. This README is the practical "how do I actually run this" companion, including step-by-step GitHub setup.

## Design

Light, blue, minimalist — a quiet academic course catalog rather than a SaaS marketing site. Near-white paper background, deep blue-black text, one confident blue accent. Course codes (BIOSTAT / SSA / AMA) are styled as catalog "spine labels" with a left rule, not rounded badges. All design tokens live in `css/portal.css`.

## The single source of truth: `data/catalog.py`

Every course/chapter/lesson name in this build — the frontend nav (`js/course-catalog.js`), the 53 lesson folders under `courses/`, and the Apps Script Lesson/Course Catalog seed data — is generated FROM `data/catalog.py`. **If you need to rename a lesson, add a chapter, or fix a typo in a title, edit `data/catalog.py` and re-run the generator — never hand-edit `js/course-catalog.js` or the seed rows in `Code.gs` directly**, or they'll drift out of sync with each other and with the actual lesson folders.

To regenerate everything after editing `data/catalog.py`:

```bash
python3 data/build_catalog_json.py > data/catalog.json   # rebuilds the shared JSON
python3 generate_lessons.py                                # regenerates all lesson wrapper pages (never touches an existing rise/index.html)
```

Then manually re-inject the new catalog JSON into `js/course-catalog.js` (replace the `const CourseCatalog = [...]` array with the contents of `data/catalog.json`), regenerate `course-biostatistics.html` / `course-ssa.html` / `course-ama.html` from `data/course_detail_template.html`, and re-run `setupSpreadsheet()` in Apps Script so the Lesson/Course Catalog sheet tabs pick up the change (it only adds rows for IDs that don't already exist — see `apps-script/README.md`).

## What's in this repo

```
index.html                    Landing page — student enters their Student ID once
courses.html                  Course PREVIEW grid (3 cards) — click a course to see its chapters/lessons
course-biostatistics.html     Full chapter/lesson list + progress bar for MLSBE 201
course-ssa.html               Full chapter/lesson list + progress bar for MAS 303a
course-ama.html                Full chapter/lesson list + progress bar for MAS 305a
css/portal.css                Shared design system (light/blue/minimalist)
js/
  storage.js                   All localStorage/sessionStorage access, incl. local completion flags + per-course progress counters
  api.js                       Sends analytics payloads to Apps Script, handles offline retry
  tracking.js                  Lesson lifecycle: timer, session ID, globally-unique ID construction, payload construction
  rise-integration.js          Bridges Rise 360's completion signal to tracking.js
  course-catalog.js            Frontend course/chapter/lesson data — GENERATED from data/catalog.py, don't hand-edit
  lesson-nav.js                Builds the lesson sidebar (grouped by chapter) + collapsible toggle + Next Lesson link
courses/
  biostatistics/  chapter-01/ .. chapter-08/   16 lessons  (MLSBE 201 — Biostatistics and Epidemiology)
  ssa/            chapter-01/ .. chapter-08/   16 lessons  (MAS 303a — Statistical Software Application)
  ama/            chapter-01/ .. chapter-11/   21 lessons  (MAS 305a — Applied Multivariate Analysis)
  (each lesson folder: index.html wrapper + rise/index.html placeholder — see PROJECT_CONTINUITY.md for the full lesson-by-lesson list)
apps-script/
  Code.gs                       The entire backend — validation, lookups, dedup, Activity Log writes, Dashboard auto-builder
  README.md                     Step-by-step Apps Script deployment walkthrough
  dashboard-formulas.md         Documents the 6 formula blocks buildDashboardSheet() writes automatically
dev-tests/
  frontend_smoke_test.js        Node-based regression test for js/*.js (12/12 as of last edit)
  apps_script_smoke_test.js     Node-based regression test for Code.gs (30/30 as of last edit), incl. the duplicate-session race condition and the ID-collision bugfix
data/
  catalog.py                    THE MASTERLIST — single source of truth, see above
  catalog.json                  Generated from catalog.py, consumed by course-catalog.js
  build_catalog_json.py         catalog.py -> catalog.json
  lesson_wrapper_template.html  Template generate_lessons.py fills in per lesson
  rise_placeholder_template.html  Template for each rise/index.html placeholder
  course_detail_template.html   Template the 3 course-*.html pages are generated from
generate_lessons.py           Regenerates all 53 lesson wrapper + placeholder pages from data/catalog.py — safe to re-run any time
```

Every `courses/.../lesson-NN/` folder currently contains a placeholder `rise/index.html` stand-in with a "Simulate lesson completion" button — see **Part 4** below for exactly how to swap each one for your real Rise 360 export.

---

## Part 1 — Deploy the backend (Google Apps Script + Sheets)

Do this before touching GitHub. Follow `apps-script/README.md` in full:

1. Create a Google Sheet.
2. Extensions → Apps Script → paste in `apps-script/Code.gs`.
3. Run `setupSpreadsheet` once (Apps Script editor → function dropdown → Run). This creates all 6 tabs, pre-fills Course Catalog and Lesson Catalog with your real 3 courses and **all 53 lessons**, and **builds the Dashboard tab automatically** with 6 live formula blocks.
4. Run `testDoPostManually` to confirm the pipeline works end-to-end before deploying anything public-facing.
5. Deploy → New deployment → Web app → **Execute as: Me**, **Who has access: Anyone** → Deploy → copy the Web app URL.

Keep that URL handy — it goes into `js/api.js` in Part 3.

---

## Part 2 — Create the GitHub repository

1. Go to [github.com/new](https://github.com/new).
2. Repository name: anything you like (e.g. `microlearning-portal`). It becomes part of your site's URL unless you use a custom domain.
3. Visibility: **Public** — GitHub Pages on a free GitHub account only serves public repos. (A paid GitHub plan can serve Pages from a private repo if that matters to you; otherwise keep it public — nothing in this repo contains student data, since the actual Activity Log/Roster live in your private Google Sheet, not in this code.)
4. Don't initialize with a README, .gitignore, or license — you already have a README from this build, and adding one on GitHub's side will conflict with pushing this folder up.
5. Click **Create repository**. Leave the page open; the next screen shows the exact `git remote add` command with your repo's real URL — copy it, you'll need it in Part 3.

---

## Part 3 — Push this codebase to GitHub

Run these from your terminal, inside this folder (the one containing `index.html`, not its parent):

```bash
git init
git add .
git commit -m "Initial commit: GitHub Microlearning Portal"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

Replace the `git remote add` line with the exact URL GitHub showed you at the end of Part 2 — it's specific to your account and repo name.

**Before you push**, open `js/api.js` and replace the placeholder:

```javascript
ENDPOINT_URL: 'PASTE_DEPLOYED_APPS_SCRIPT_URL_HERE',
```

with the real Apps Script Web app URL from Part 1. It's fine for this URL to be visible in a public repo — it only accepts POSTs matching the data contract and validates against your roster; it isn't a secret credential.

If you forget this step and push anyway, just edit the file, commit, and push again — GitHub Pages picks up new commits automatically (see Part 5).

---

## Part 4 — Add your real Rise 360 lessons

Each of the 53 lesson folders currently has a `rise/` subfolder containing a placeholder page. Replace it like this, repeated once per lesson:

1. Export the lesson from Rise 360 as **HTML5**, and unzip the export on your computer. You'll get a folder containing the export's own `index.html` plus its assets (CSS, JS, images, etc.).
2. Open the matching lesson folder in this repo, e.g. `courses/biostatistics/chapter-03/lesson-05/rise/`.
3. Delete everything currently inside that `rise/` folder (the placeholder `index.html`).
4. Copy the entire unzipped Rise export's contents into that same `rise/` folder, so `courses/biostatistics/chapter-03/lesson-05/rise/index.html` is now Rise's real exported file, not the placeholder.
5. Don't touch the lesson's outer wrapper page (`courses/biostatistics/chapter-03/lesson-05/index.html`, one level up) — that's the page with the portal header, sidebar, and tracking scripts, and it already points at `rise/index.html` correctly. You're only ever replacing what's inside the `rise/` subfolder.
6. **On the lesson's final slide inside Rise itself**, before exporting, add the standardized completion-trigger block from `/rise-completion-trigger/completion-block.html` at the repo root — this is what actually signals completion back to this wrapper page (see `js/rise-integration.js`).
7. Repeat for all 53 lessons — the full course-by-course, chapter-by-chapter list is in `PROJECT_CONTINUITY.md`, or just walk `courses/` in a file browser; the folder path tells you exactly which lesson goes where.
8. After replacing a placeholder, test it by completing the real lesson and checking your Activity Log tab for a new row. If completion doesn't register, see the **Troubleshooting** section below.
9. Commit and push (`git add . && git commit -m "Add real Rise lesson content" && git push`).

You don't have to do all 53 before going live — GitHub Pages serves whatever's there, and each lesson's placeholder "Simulate lesson completion" button works fine as a stand-in for lessons you haven't gotten to yet.

---

## Part 5 — Turn on GitHub Pages

1. On your repo's GitHub page, go to **Settings → Pages** (left sidebar, under "Code and automation").
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
4. Wait 1–2 minutes. Refresh the Pages settings page — it'll show a green banner with your live URL, something like `https://<your-username>.github.io/<your-repo-name>/`.
5. Open that URL. You should land on the portal's sign-in page.

Every future `git push` to `main` republishes automatically within a minute or two — there's no separate deploy step beyond pushing.

---

## Part 6 — Test the live site end to end

1. Visit your GitHub Pages URL, enter `TEST-0001` (the sample roster row from Part 1) as the Student ID.
2. You'll land on `courses.html` — a grid of 3 course preview cards. Click one to see its full chapter/lesson list and progress bar.
3. Click into any lesson.
4. If you haven't replaced that lesson's `rise/` folder yet, use the placeholder's "Simulate lesson completion" button. If you have replaced it with a real export, complete the real lesson.
5. Open your Google Sheet's Activity Log tab — a new row should appear within a few seconds, with `TEST-0001`, the real student name from the roster, and the correct course/chapter/lesson names already filled in (not just raw IDs).
6. Check the **Dashboard** tab — it should already show that attempt reflected in the "Per-Lesson Completion by Status" block.
7. Once this works, delete the `TEST-0001` roster row and replace it with your real class roster (Part 1's Sheet, Student Roster tab) before sharing the link with students.

---

## Part 7 — Tracking and reading data, day to day

You never trigger logging manually — every student finishing or abandoning a lesson writes its own row to the **Activity Log** tab automatically, the moment it happens. Your only ongoing jobs are:

1. **Keep Student Roster current.** Add a row whenever a new student joins; nothing else in the system needs to know about a new student except this one tab.
2. **Keep Lesson Catalog current** when you publish a new lesson (see "Adding a future lesson" below) — this is what turns raw lesson IDs into readable titles in the log; skipping it doesn't break logging, it just shows IDs instead of names until you add the row.
3. **Read engagement on the Dashboard tab**, not the Activity Log directly. Activity Log is meant to stay a raw, append-only table — one row per attempt, never hand-edited. The Dashboard tab builds itself (see Part 1) with 6 live formula blocks: per-lesson completion by status, per-student progress, average completion time, course rollup, section comparison, and students with zero activity. `apps-script/dashboard-formulas.md` documents exactly what each block does.

If you ever want to check a specific student's history quickly without building a formula, the simplest method is opening Activity Log and using **Data → Create a filter**, then filtering the StudentID column to one ID.

---

## Troubleshooting

**The site loads but nothing gets logged / browser console shows a CORS or network error.**
Almost always means `js/api.js`'s `ENDPOINT_URL` is still the placeholder, or doesn't match your actual deployed Apps Script URL. Double-check it, push the fix, and hard-refresh.

**Sheet shows nothing even though the browser console shows no errors.**
Check the Apps Script deployment settings (Part 1) are exactly "Execute as: Me" and "Who has access: Anyone" — anything else silently fails for requests coming from outside your own Google account. After changing deployment settings, you must create a new deployment version for the change to take effect (see `apps-script/README.md`).

**A lesson's completion isn't detected after I added the real Rise export.**
Open that lesson page, open browser devtools console, and manually run `window.markLessonComplete()` if you've defined it, or use the placeholder's simulate button on a not-yet-replaced lesson to confirm the pipeline itself works. If the pipeline works but a specific real Rise export doesn't trigger completion, confirm you added the completion-trigger block (Part 4, step 6) to that lesson's final slide before exporting. See the comments at the top of `js/rise-integration.js` for what else to check.

**The LessonTitle or ChapterTitle showing in the Activity Log looks wrong or is just an ID.**
This was a real bug in an earlier version of this build (see `PROJECT_CONTINUITY.md`) — raw, non-unique chapter/lesson numbers collided across courses. It's fixed at the source now: `tracking.js` sends globally-unique composite IDs (`<courseId>-CH<NN>` / `<courseId>-L<NN>`), and `Code.gs`'s Lesson Catalog is keyed on those same IDs. If you still see a raw ID instead of a title, it usually means that exact lesson's row is missing from the Lesson Catalog tab — re-run `setupSpreadsheet()`, which only adds rows that don't already exist and won't touch anything you've added by hand.

**I added a new lesson folder but it doesn't show up on a course page.**
You added the folder but forgot to add a matching entry to `data/catalog.py` (and regenerate from it) — see "Adding a future lesson" below. Don't hand-edit `js/course-catalog.js` directly; it'll just get overwritten (and drift from the real folders) the next time someone regenerates it from `data/catalog.py`.

---

## Adding a future lesson (beyond the current 53)

1. Add the chapter/lesson to `data/catalog.py` (create a new chapter entry, or append to an existing chapter's `lessons` list).
2. Run `python3 data/build_catalog_json.py > data/catalog.json` then `python3 generate_lessons.py` — this creates the new lesson folder(s) with a wrapper page and placeholder `rise/index.html`, and regenerates every OTHER lesson's wrapper too (safe — it never touches existing `rise/index.html` files with real content).
3. Re-inject `data/catalog.json` into `js/course-catalog.js` (replace the `CourseCatalog` array), and regenerate the affected `course-*.html` page(s) from `data/course_detail_template.html`.
4. Export the finished lesson from Rise 360 as HTML5 and drop it into the new `rise/` folder (see Part 4).
5. Re-run `setupSpreadsheet()` in Apps Script — it adds the new Lesson Catalog row automatically (matched by ID, so it won't duplicate anything already there) so the Activity Log shows a readable title instead of falling back to the raw lesson ID.
6. Commit and push. GitHub Pages republishes automatically.
7. Open the new lesson yourself once, complete it, and confirm a new row appears in the Activity Log before telling students it's live.

## Browser support note

`tracking.js` uses `crypto.randomUUID()` with a manual fallback for older browsers, and relies on the `pagehide` event for detecting early exits — this is well-supported across modern browsers but, per the original project risk notes, is never 100% guaranteed to fire in every close/crash scenario. Treat the occasional missing `Incomplete` record as an accepted limitation, not a bug.
