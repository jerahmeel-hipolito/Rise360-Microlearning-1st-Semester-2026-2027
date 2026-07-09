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

  // Delegates to Storage.isLessonCompletedLocally, which is the single
  // place that defines this key format (raw chapter/lesson numbers — see
  // storage.js and tracking.js for why this is intentionally NOT the same
  // as the composite IDs sent to the backend).
  function isCompleted(entry) {
    const lessonNum = entry.lessonFolder.replace(/^lesson-/, '');
    return Storage.isLessonCompletedLocally(entry.courseId, entry.chapterId, lessonNum);
  }

  function buildSidebar(loc, flat, root) {
    const nav = document.getElementById('lesson-sidebar');
    if (!nav) return;

    const header = document.createElement('div');
    header.className = 'lesson-sidebar-header';
    header.textContent = 'Course Navigation';
    nav.appendChild(header);

    let currentCourseId = null;
    let currentChapterFolder = null;
    let courseEl = null;

    flat.forEach(function (entry) {
      if (entry.courseId !== currentCourseId) {
        currentCourseId = entry.courseId;
        currentChapterFolder = null;
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

      // Chapters can now run up to 11 deep (21 lessons) for some courses —
      // a small, non-collapsible chapter label groups lessons visually so
      // a long course doesn't read as one undifferentiated list.
      if (entry.chapterFolder !== currentChapterFolder) {
        currentChapterFolder = entry.chapterFolder;
        const chapterLabel = document.createElement('div');
        chapterLabel.className = 'sidebar-chapter-label';
        chapterLabel.textContent = 'Ch. ' + entry.chapterId + ' — ' + entry.chapterTitle;
        courseEl.appendChild(chapterLabel);
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

  // ---------- Collapsible sidebar ----------
  // Lets a student hide the course nav to focus on just the lesson player.
  // Shown by default on every visit (per the project brief); the choice to
  // collapse it is remembered per-browser via localStorage so it doesn't
  // reset every time they open a new lesson, but a brand-new student always
  // starts with it visible.
  const SIDEBAR_COLLAPSE_KEY = 'lessonSidebarCollapsed';

  function applyCollapseState(collapsed) {
    const layout = document.querySelector('.lesson-layout');
    if (!layout) return;
    layout.classList.toggle('sidebar-collapsed', collapsed);
    const btn = document.getElementById('sidebar-toggle-btn');
    if (btn) {
      btn.setAttribute('aria-expanded', String(!collapsed));
      btn.title = collapsed ? 'Show course navigation' : 'Hide course navigation';
    }
  }

  function wireSidebarToggle() {
    const btn = document.getElementById('sidebar-toggle-btn');
    if (!btn) return;

    const startCollapsed = localStorage.getItem(SIDEBAR_COLLAPSE_KEY) === 'true';
    applyCollapseState(startCollapsed);

    btn.addEventListener('click', function () {
      const layout = document.querySelector('.lesson-layout');
      const nowCollapsed = !layout.classList.contains('sidebar-collapsed');
      applyCollapseState(nowCollapsed);
      localStorage.setItem(SIDEBAR_COLLAPSE_KEY, String(nowCollapsed));
    });
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
    wireSidebarToggle();
  });
})();
