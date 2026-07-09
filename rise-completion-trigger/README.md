# HTML5 Completion Trigger Block

This replaces SCORM-based completion detection with a manual "Finish
Lesson" button embedded on the **last slide** of each Rise 360 lesson,
for plain HTML5 exports (no LMS reporting).

## Files

- `completion-block.html` — the master template. Has one placeholder,
  `{{LESSON_TITLE}}`, to fill in per lesson.
- `ready-to-upload/*.html` — one copy per lesson, already filled in with
  the real title, covering all 53 lessons across all 3 courses. Upload
  these directly, no editing needed. Named
  `<biostat|ssa|ama>-lesson-<NN>-completion-block.html`, where `NN` is the
  lesson's number within its own course (matching the numbering in
  `PROJECT_CONTINUITY.md` and each lesson's folder name under `courses/`).

## How to use, per lesson

1. In Rise, open the lesson's final slide.
2. Add a **Web Object** (embed) block.
3. Upload the matching file from `ready-to-upload/` (or a copy of
   `completion-block.html` with `{{LESSON_TITLE}}` replaced, for a lesson
   not listed here yet).
4. Export the lesson as **HTML5** as usual.
5. Drop the export into that lesson's `rise/` folder, replacing the
   placeholder — same process as always.

That's the entire per-lesson workflow. The trigger logic itself is
identical in every copy — only the visible title text differs — so if
something isn't firing, the fix is the same everywhere, not a
lesson-by-lesson debugging exercise.

## Why this works with the existing portal code

The block posts:

```js
window.top.postMessage({ type: 'complete' }, '*');
```

`js/rise-integration.js` (loaded on every lesson wrapper page) already
listens for a message shaped `{ type: 'complete' }` and calls
`Tracking.onLessonComplete()` when it sees one — that part of the portal
needed no changes.

**`window.top`, not `window.parent`, is required.** This block is loaded
as a *nested* iframe: portal wrapper page → Rise's own exported page
(loaded in the portal's `rise-frame` iframe) → this block (loaded in a
further iframe inside Rise's own page). `window.parent` from inside this
block only reaches Rise's own page, not the portal wrapper where the
listener actually lives. `window.top` reaches the outermost window
regardless of nesting depth, so it works no matter how Rise structures
its own internal frames internally.

## Notes

- Clicking "Finish Lesson" is the only thing that fires completion. Just
  viewing the slide, or Rise's own internal navigation/reloads, won't
  trigger anything — this avoids the false-Incomplete problem that
  event-guessing approaches run into.
- If a student never clicks it and just closes the tab, the existing
  `pagehide` fallback in `tracking.js` still logs an `Incomplete` record,
  same as before — nothing about that behavior changed.
- Once real Student Roster data exists and lessons are actually deployed,
  test this exactly like the Rise placeholder's "Simulate lesson
  completion" button — open devtools console on the lesson page and
  confirm `Tracking initialized` logs, then click Finish and confirm the
  Activity Log row is `Completed`, not `Incomplete`.
