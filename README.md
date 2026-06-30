# GitHub Microlearning Portal

A lightweight, no-LMS learning analytics system: GitHub Pages hosts Rise 360 lesson exports, a small shared JS module tracks lesson attempts, and a Google Apps Script web app logs everything to Google Sheets. Built for one instructor, three courses, seven lessons so far, roughly 200 students.

This repo is the implementation of the `github-microlearning-portal` Claude skill — if you're extending this project in a future Claude session, that skill (installed separately) carries the full design rationale and the corrections made to the original planning documents. This README is the practical "how do I actually run this" companion, including step-by-step GitHub setup.

## Design

Light, blue, minimalist — a quiet academic course catalog rather than a SaaS marketing site. Near-white paper background, deep blue-black text, one confident blue accent. Course codes (BIOSTAT / SSA / AMA) are styled as catalog "spine labels" with a left rule, not rounded badges. All design tokens live in `css/portal.css`.

## What's in this repo

```
index.html              Landing page — student enters their Student ID once
courses.html            Course / chapter / lesson navigation
css/portal.css          Shared design system (light/blue/minimalist)
js/
  storage.js             All localStorage/sessionStorage access
  api.js                 Sends analytics payloads to Apps Script, handles offline retry
  tracking.js            Lesson lifecycle: timer, session ID, payload construction
  rise-integration.js    Bridges Rise 360's completion signal to tracking.js
  course-catalog.js      Frontend course/chapter/lesson data driving courses.html nav
courses/
  biostatistics/chapter-01/
    lesson-01/   Welcome to the Course — MLS BE 201
    lesson-02/   Variables, Measurement Scales, Data Collection & Sampling
  ssa/chapter-01/
    lesson-01/   Welcome to the Course — MAS 303a
    lesson-02/   R & RStudio Orientation
    lesson-03/   SPSS Orientation
  ama/chapter-01/
    lesson-01/   Welcome to the Course — MAS 305a
    lesson-02/   Hypothesis Testing & Distribution Overview
apps-script/
  Code.gs                The entire backend
  README.md              Step-by-step Apps Script deployment walkthrough
dev-tests/
  frontend_smoke_test.js     Node-based regression test for js/*.js (run with `node`, no install needed)
  apps_script_smoke_test.js  Node-based regression test for Code.gs, including the exact duplicate-session race condition
generate_lessons.py     One-off script used to scaffold the 7 lesson pages above — safe to ignore unless you're regenerating wrapper pages in bulk
```

Every `courses/.../lesson-NN/` folder currently contains a placeholder `rise/index.html` stand-in with a "Simulate lesson completion" button — see **Part 4** below for exactly how to swap each one for your real Rise 360 export.

---

## Part 1 — Deploy the backend (Google Apps Script + Sheets)

Do this before touching GitHub. Follow `apps-script/README.md` in full:

1. Create a Google Sheet.
2. Extensions → Apps Script → paste in `apps-script/Code.gs`.
3. Run `setupSpreadsheet` once (Apps Script editor → function dropdown → Run). This creates all 6 tabs and pre-fills Course Catalog and Lesson Catalog with your real 3 courses and 7 lessons.
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

Each lesson folder currently has a `rise/` subfolder containing a placeholder page. Replace it like this, repeated once per lesson:

1. Export the lesson from Rise 360 as **HTML5**, and unzip the export on your computer. You'll get a folder containing the export's own `index.html` plus its assets (CSS, JS, images, etc.).
2. Open the matching lesson folder in this repo, e.g. `courses/biostatistics/chapter-01/lesson-01/rise/`.
3. Delete everything currently inside that `rise/` folder (the placeholder `index.html`).
4. Copy the entire unzipped Rise export's contents into that same `rise/` folder, so `courses/biostatistics/chapter-01/lesson-01/rise/index.html` is now Rise's real exported file, not the placeholder.
5. Don't touch the lesson's outer wrapper page (`courses/biostatistics/chapter-01/lesson-01/index.html`, one level up) — that's the page with the portal header, breadcrumb, and tracking scripts, and it already points at `rise/index.html` correctly. You're only ever replacing what's inside the `rise/` subfolder.
6. Repeat for all 7 lessons:

| Course | Lesson folder | Lesson |
|---|---|---|
| Biostatistics and Epidemiology | `courses/biostatistics/chapter-01/lesson-01/rise/` | Welcome to the Course — MLS BE 201 |
| Biostatistics and Epidemiology | `courses/biostatistics/chapter-01/lesson-02/rise/` | Variables, Measurement Scales, Data Collection & Sampling |
| Statistical Software Application | `courses/ssa/chapter-01/lesson-01/rise/` | Welcome to the Course — MAS 303a |
| Statistical Software Application | `courses/ssa/chapter-01/lesson-02/rise/` | R & RStudio Orientation |
| Statistical Software Application | `courses/ssa/chapter-01/lesson-03/rise/` | SPSS Orientation |
| Applied Multivariate Analysis | `courses/ama/chapter-01/lesson-01/rise/` | Welcome to the Course — MAS 305a |
| Applied Multivariate Analysis | `courses/ama/chapter-01/lesson-02/rise/` | Hypothesis Testing & Distribution Overview |

7. After replacing all 7, check Rise's completion signal actually reaches the wrapper page — `js/rise-integration.js` listens for the standard `postMessage`/SCORM-shim signals Rise exports send, which should work without any change on your end. If a lesson's completion doesn't register once you've replaced the placeholder (test by completing it and checking your Activity Log tab for a new row), see the **Troubleshooting** section below.
8. Commit and push (`git add . && git commit -m "Add real Rise lesson content" && git push`).

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
2. Click into any lesson.
3. If you haven't replaced that lesson's `rise/` folder yet, use the placeholder's "Simulate lesson completion" button. If you have replaced it with a real export, complete the real lesson.
4. Open your Google Sheet's Activity Log tab — a new row should appear within a few seconds, with `TEST-0001`, the real student name from the roster, and the correct course/lesson names already filled in (not just raw IDs).
5. Once this works, delete the `TEST-0001` roster row and replace it with your real class roster (Part 1's Sheet, Student Roster tab) before sharing the link with students.

---

## Troubleshooting

**The site loads but nothing gets logged / browser console shows a CORS or network error.**
Almost always means `js/api.js`'s `ENDPOINT_URL` is still the placeholder, or doesn't match your actual deployed Apps Script URL. Double-check it, push the fix, and hard-refresh.

**Sheet shows nothing even though the browser console shows no errors.**
Check the Apps Script deployment settings (Part 1) are exactly "Execute as: Me" and "Who has access: Anyone" — anything else silently fails for requests coming from outside your own Google account. After changing deployment settings, you must create a new deployment version for the change to take effect (see `apps-script/README.md`).

**A lesson's completion isn't detected after I added the real Rise export.**
Open that lesson page, open browser devtools console, and manually run `window.markLessonComplete()`. If that correctly logs a `Completed` row, the tracking pipeline is fine and the issue is specifically that this Rise export's completion signal isn't one `rise-integration.js` recognizes (possible after a Rise version update). See the comments at the top of `js/rise-integration.js` for what to check next.

**I added a new lesson folder but it doesn't show up on the courses page.**
You added the folder but forgot to add a matching entry to `js/course-catalog.js` — see "Adding a future lesson" below.

---

## Adding a future lesson (after these first 7)

1. Export the finished lesson from Rise 360 as HTML5.
2. Create a new `lesson-NN/rise/` folder under the right course/chapter path and unzip the export into it.
3. Copy an existing `lesson-XX/index.html` wrapper page (from the same course) into the new lesson folder, and update its `<title>` and breadcrumb lesson number to match.
4. Add one entry to `js/course-catalog.js` so the lesson shows up as a clickable link on `courses.html`.
5. Add a matching row to the **Lesson Catalog** tab in the Sheet (LessonID, LessonTitle, ChapterTitle, CourseID) so the Activity Log shows a readable title instead of falling back to the raw lesson ID.
6. Commit and push. GitHub Pages republishes automatically.
7. Open the new lesson yourself once, complete it, and confirm a new row appears in the Activity Log before telling students it's live.

## Browser support note

`tracking.js` uses `crypto.randomUUID()` with a manual fallback for older browsers, and relies on the `pagehide` event for detecting early exits — this is well-supported across modern browsers but, per the original project risk notes, is never 100% guaranteed to fire in every close/crash scenario. Treat the occasional missing `Incomplete` record as an accepted limitation, not a bug.
