/**
 * tracking.js
 * Owns the lesson lifecycle: read student identity, derive lesson metadata
 * from the URL, generate a session, start a timer, build the analytics
 * payload, and decide when to send it via api.js. Depends on storage.js
 * and api.js, both of which must be loaded before this file.
 *
 * This file is referenced by every single lesson page across all three
 * courses, so it must stay generic — it should never contain anything
 * specific to one course or one lesson.
 */

const Tracking = {
  studentId: null,
  meta: null,
  sessionId: null,
  startTime: null,
  attemptNumber: null,
  _recordSent: false, // guards against sending two terminal records from one call site

  init() {
    const studentId = Storage.getStudentId();
    if (!studentId) {
      // No identity on file — this should never happen on a real lesson
      // page reached through normal navigation, but guards against a
      // student bookmarking a lesson URL directly.
      window.location.href = this._pathTo('index.html');
      return;
    }

    const meta = this.deriveLessonMetadata();
    if (!meta) {
      console.error('tracking.js: could not derive course/chapter/lesson from URL:', window.location.pathname);
      return; // fail closed — don't send analytics with garbage metadata
    }

    const sessionId = this._generateUUID();
    Storage.setSessionId(sessionId);

    const startTime = new Date().toISOString();
    Storage.setStartTime(startTime);

    const attemptNumber = Storage.incrementAttemptNumber(meta.lessonId);

    this.studentId = studentId;
    this.meta = meta;
    this.sessionId = sessionId;
    this.startTime = startTime;
    this.attemptNumber = attemptNumber;
    this._recordSent = false;

    // Opportunistically drain anything that failed to send on a previous
    // visit. Fire-and-forget — don't block lesson load on this.
    Api.flushPendingQueue();

    this._attachExitHandlers();

    console.log('Tracking initialized:', {
      studentId: this.studentId,
      ...this.meta,
      sessionId: this.sessionId,
      attemptNumber: this.attemptNumber
    });
  },

  // Derive course/chapter/lesson IDs from the page's own URL so the student
  // never types this and so moving a lesson folder doesn't require editing
  // embedded config inside every page.
  //
  // Expected path shape (see project skill's deployment-and-testing.md):
  //   /courses/<courseId>/chapter-<NN>/lesson-<NN>/index.html
  // Works whether the site is served from a domain root or from a GitHub
  // Pages project subpath (e.g. /my-repo/courses/...).
  //
  // BUGFIX (previously sent raw "01"/"02" for chapterId/lessonId): a raw
  // folder number is NOT unique across courses — every course's first
  // chapter is "chapter-01", and lesson numbering restarts too, so the old
  // payload sent identical chapterId/lessonId values for entirely different
  // lessons in different courses. The Apps Script Lesson Catalog lookup
  // matched whichever row happened to come first, so LessonTitle (and the
  // raw ChapterID shown in the log) were frequently wrong. Fix: prefix both
  // with courseId to make them globally unique and self-describing, e.g.
  // "biostatistics-CH03" / "biostatistics-L05". These are what get SENT to
  // the backend and what the Lesson Catalog sheet is keyed on (see
  // apps-script/Code.gs). The raw, un-prefixed numbers are kept separately
  // as chapterNum/lessonNum purely for the LOCAL "completed" UI flag
  // (courses.html / course-*.html progress bars, lesson-nav.js checkmarks),
  // which has no need to match the backend's ID format.
  deriveLessonMetadata() {
    const parts = window.location.pathname.split('/').filter(Boolean);
    const coursesIdx = parts.indexOf('courses');

    if (coursesIdx === -1 || parts.length < coursesIdx + 4) {
      return null;
    }

    const courseId = parts[coursesIdx + 1];
    const chapterPart = parts[coursesIdx + 2];
    const lessonPart = parts[coursesIdx + 3];

    const chapterMatch = chapterPart.match(/^chapter-(.+)$/);
    const lessonMatch = lessonPart.match(/^lesson-(.+)$/);

    if (!courseId || !chapterMatch || !lessonMatch) {
      return null;
    }

    return {
      courseId: courseId,
      chapterId: courseId + '-CH' + chapterMatch[1],
      lessonId: courseId + '-L' + lessonMatch[1],
      chapterNum: chapterMatch[1],
      lessonNum: lessonMatch[1]
    };
  },

  // Call this from the Rise 360 completion hook (see assets/rise-integration.js
  // for how Rise's own completion event wires into this).
  onLessonComplete() {
    if (this._recordSent) return; // already sent a terminal record this visit
    this._recordSent = true;
    this._sendRecord('Completed');
    // Cosmetic only — see storage.js and courses.html for why this isn't
    // part of the analytics system itself. Uses the raw chapter/lesson
    // numbers, not the composite backend IDs, since this key only needs to
    // be unique within THIS browser, not globally.
    Storage.markLessonCompletedLocally(this.meta.courseId, this.meta.chapterNum, this.meta.lessonNum);
  },

  // Registers the page-exit fallback. This can fire AFTER onLessonComplete
  // already sent a Completed record (e.g. student finishes, then closes the
  // tab a second later) — that's expected and handled server-side by the
  // sessionId dedup rule in the Apps Script backend, not here. Trying to
  // suppress the second send client-side would require knowing for certain
  // the first send actually reached the server before the page unloads,
  // which isn't reliable. Let the duplicate go out; the backend no-ops it.
  _attachExitHandlers() {
    // pagehide fires more reliably than beforeunload across browsers and
    // mobile platforms, including for tab close and app-switch on mobile.
    window.addEventListener('pagehide', () => {
      if (this._recordSent) return;
      this._recordSent = true;
      this._sendRecord('Incomplete');
    });
  },

  _sendRecord(status) {
    const endTime = new Date().toISOString();
    const durationSeconds = Math.max(
      0,
      Math.round((new Date(endTime) - new Date(this.startTime)) / 1000)
    );

    const payload = {
      timestamp: new Date().toISOString(),
      studentId: this.studentId,
      sessionId: this.sessionId,
      courseId: this.meta.courseId,
      chapterId: this.meta.chapterId,
      lessonId: this.meta.lessonId,
      attemptNumber: this.attemptNumber,
      status: status,
      startTime: this.startTime,
      endTime: endTime,
      durationSeconds: durationSeconds,
      browser: navigator.userAgent, // stored raw, never parsed client-side
      version: '1.0'
    };

    Api.send(payload);
  },

  // Builds an absolute path back to the site root regardless of how deep
  // the current lesson is nested, so redirects work whether the site is
  // served from a domain root or a GitHub Pages project subpath.
  _pathTo(file) {
    const parts = window.location.pathname.split('/').filter(Boolean);
    const coursesIdx = parts.indexOf('courses');
    if (coursesIdx === -1) {
      return '/' + file;
    }
    // Everything before 'courses' is the site root (handles project subpaths)
    const rootParts = parts.slice(0, coursesIdx);
    return '/' + rootParts.concat(file).join('/');
  },

  _generateUUID() {
    if (window.crypto && window.crypto.randomUUID) {
      return window.crypto.randomUUID();
    }
    // Fallback for older browsers without crypto.randomUUID support
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => Tracking.init());
