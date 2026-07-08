/**
 * lesson-nav.js
 * Builds the persistent left-hand course/lesson navigation sidebar shown on
 * every lesson wrapper page, and wires the "Next Lesson" link below the
 * player. Reads the same CourseCatalog used by courses.html, so there is
 * exactly one place (course-catalog.js) that defines lesson order and
 * titles — this file only renders that data differently.
 *
 * Deliberately does NOT depend on Tracking having initialized — it derives
 * the current course/chapter/lesson straight from the URL itself, the same
 * way tracking.js does, so load order between this file and tracking.js on
 * the lesson page doesn't matter.
 *
 * Required load order on lesson pages: storage.js, course-catalog.js, then
 * this file. (tracking.js / api.js / rise-integration.js can load in any
 * order relative to this file — no shared state between them.)
 *
 * "Next lesson" order = the order CourseCatalog lists courses, chapters,
 * and lessons in — the very last lesson of the last course links back to
 * courses.html instead of a next lesson.
 */
(function () {
  function currentLocation() {
    const parts = window.location.pathname.split('/').filter(Boolean);
    const coursesIdx = parts.indexOf('courses');
    if (coursesIdx === -1 || parts.length < coursesIdx + 4) return null;
    return {
      courseId: parts[coursesIdx + 1],
      chapterFolder: parts[coursesIdx + 2], // e.g. "chapter-01"
      lessonFolder: parts[coursesIdx + 3],  // e.g. "lesson-02"
      rootParts: parts.slice(0, coursesIdx)
    };
  }

  function rootPath(rootParts) {
    return '/' + rootParts.concat([]).join('/') + (rootParts.length ? '/' : '');
  }

  function flattenLessons() {
    const flat = [];
    CourseCatalog.forEach(function (course) {
      course.chapters.forEach(function (chapter) {
        chapter.lessons.forEach(function (lesson) {
          flat.push({
            courseId: course.courseId,
            courseCode: course.courseCode,
            courseName: course.courseName,
            chapterFolder: 'chapter-' + chapter.chapterId,
            chapterId: chapter.chapterId,
            chapterTitle: chapter.chapterTitle,
            lessonFolder: lesson.lessonId,
            lessonTitle: lesson.lessonTitle
          });
        });
      });
    });
    return flat;
  }

  // Matches the key format tracking.js ACTUALLY writes (see tracking.js
  // deriveLessonMetadata — chapterId/lessonId are stored WITHOUT their
  // "chapter-"/"lesson-" prefix, e.g. "01" not "lesson-01"). courses.html
  // previously read this same flag using the prefixed catalog lessonId and
  // never actually matched what got written — fixed here and in
  // courses.html to both use this stripped format.
  function isCompleted(entry) {
    const lessonNum = entry.lessonFolder.replace(/^lesson-/, '');
    const key = 'completed_' + entry.courseId + '_' + entry.chapterId + '_' + lessonNum;
    return localStorage.getItem(key) === 'true';
  }

  function buildSidebar(loc, flat, root) {
    const nav = document.getElementById('lesson-sidebar');
    if (!nav) return;

    const header = document.createElement('div');
    header.className = 'lesson-sidebar-header';
    header.textContent = 'Course Navigation';
    nav.appendChild(header);

    let currentCourseId = null;
    let courseEl = null;

    flat.forEach(function (entry) {
      if (entry.courseId !== currentCourseId) {
        currentCourseId = entry.courseId;
        courseEl = document.createElement('details');
        courseEl.className = 'sidebar-course';
        if (loc && entry.courseId === loc.courseId) courseEl.open = true;

        const summary = document.createElement('summary');
        summary.innerHTML =
          '<span class="sidebar-course-code">' + entry.courseCode + '</span>' +
          '<span class="sidebar-course-name">' + entry.courseName + '</span>';
        courseEl.appendChild(summary);
        nav.appendChild(courseEl);
      }

      const isActive = !!loc &&
        entry.courseId === loc.courseId &&
        entry.chapterFolder === loc.chapterFolder &&
        entry.lessonFolder === loc.lessonFolder;

      const row = document.createElement('div');
      row.className = 'sidebar-lesson-row' + (isActive ? ' active' : '');

      const link = document.createElement('a');
      link.href = root + 'courses/' + entry.courseId + '/' + entry.chapterFolder + '/' + entry.lessonFolder + '/';
      link.textContent = entry.lessonTitle;
      row.appendChild(link);

      if (isCompleted(entry)) {
        const check = document.createElement('span');
        check.className = 'sidebar-check';
        check.textContent = '✓';
        row.appendChild(check);
      }

      courseEl.appendChild(row);
    });
  }

  function wireNextButton(loc, flat, root) {
    const link = document.getElementById('next-lesson-link');
    if (!link) return;

    const idx = flat.findIndex(function (entry) {
      return !!loc &&
        entry.courseId === loc.courseId &&
        entry.chapterFolder === loc.chapterFolder &&
        entry.lessonFolder === loc.lessonFolder;
    });

    if (idx === -1) {
      // Current lesson isn't in the catalog (e.g. a lesson visited directly
      // that hasn't been added to course-catalog.js yet) — hide rather than
      // guess at a "next" lesson.
      link.style.display = 'none';
      return;
    }

    const next = flat[idx + 1];
    if (next) {
      link.href = root + 'courses/' + next.courseId + '/' + next.chapterFolder + '/' + next.lessonFolder + '/';
      link.textContent = 'Next: ' + next.lessonTitle + ' →';
    } else {
      link.href = root + 'courses.html';
      link.textContent = 'Back to Courses ✓';
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (typeof CourseCatalog === 'undefined') {
      console.error('lesson-nav.js: CourseCatalog not found — make sure course-catalog.js loads before this file.');
      return;
    }
    const loc = currentLocation();
    const root = loc ? rootPath(loc.rootParts) : '/';
    const flat = flattenLessons();
    buildSidebar(loc, flat, root);
    wireNextButton(loc, flat, root);
  });
})();
