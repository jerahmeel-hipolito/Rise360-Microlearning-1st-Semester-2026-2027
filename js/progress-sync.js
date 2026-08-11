/**
 * progress-sync.js
 * Bridges the backend's cross-device view of "what has this student
 * completed" (Api.fetchProgress, backed by the Activity Log — see
 * Code.gs's getProgress handler) into the browser's own local completion
 * flags (storage.js), which is what actually drives the "Completed"
 * badges on courses.html / course-*.html and the checkmarks in
 * lesson-nav.js's sidebar.
 *
 * WHY THIS EXISTS: the local flags are, by design, per-browser — a student
 * who finishes a lesson on their phone and then opens a laptop starts with
 * an empty local flag set on the laptop, even though the Activity Log
 * already has the real record. This module closes that gap by asking the
 * backend once per page load and merging the answer in. It is purely
 * ADDITIVE: it only ever turns a local flag ON, never off, so a flaky
 * network or a student briefly offline can never make an already-completed
 * lesson look incomplete.
 *
 * Depends on api.js (Api.fetchProgress), storage.js (Storage.*), and
 * course-catalog.js (CourseCatalog) — load all three before this file.
 */

const ProgressSync = {
  // Pulls studentId's completions from the backend and merges them into
  // local storage. If (and only if) that merge actually changes something
  // this browser didn't already know about, calls onChanged() once so the
  // caller can re-render whatever it's showing (a progress bar, a lesson
  // list, a sidebar) without needing to re-fetch anything itself.
  //
  // Always resolves, never throws — a missing CourseCatalog, an
  // unreachable backend, or an unrecognized studentId all just mean "no
  // update available right now," not a broken page.
  async pull(studentId, onChanged) {
    if (typeof CourseCatalog === 'undefined' || typeof Api === 'undefined') return;
    if (!studentId) return;

    const completedLessonIds = await Api.fetchProgress(studentId);
    if (!completedLessonIds || completedLessonIds.length === 0) return;

    const completedSet = {};
    completedLessonIds.forEach(function (id) { completedSet[id] = true; });

    let changed = false;

    CourseCatalog.forEach(function (course) {
      course.chapters.forEach(function (chapter) {
        chapter.lessons.forEach(function (lesson) {
          // Reconstruct the SAME composite ID tracking.js sends to the
          // backend (e.g. "ssa-L06") from catalog data alone, so this can
          // run on courses.html / course-*.html, which never derive
          // anything from a lesson URL. lesson.lessonNum is the course-wide
          // (chapter-spanning) lesson number tracking.js's URL-derived
          // lessonNum matches — see tracking.js's deriveLessonMetadata.
          const compositeId = course.courseId + '-L' + String(lesson.lessonNum).padStart(2, '0');
          if (!completedSet[compositeId]) return;

          const alreadyLocal = Storage.isLessonCompletedLocally(course.courseId, chapter.chapterId, lesson.lessonNum);
          if (!alreadyLocal) {
            Storage.markLessonCompletedLocally(course.courseId, chapter.chapterId, lesson.lessonNum);
            changed = true;
          }
        });
      });
    });

    if (changed && typeof onChanged === 'function') {
      onChanged();
    }
  }
};
