/**
 * storage.js
 * Owns every read/write to localStorage and sessionStorage. No other file
 * should touch browser storage directly — if the storage strategy ever
 * changes, only this file should need to change.
 *
 * localStorage:
 *   studentId        - persists across browser sessions, set once at landing
 *   pendingPayloads  - JSON array of analytics payloads that failed to send
 *                      and survive a tab close so they can retry later
 *
 * sessionStorage (cleared when the tab/browser closes — by design, since a
 * new browser session must always mean a new lesson session):
 *   sessionId         - fresh UUID per lesson visit, never reused
 *   startTime         - ISO timestamp when the current lesson timer started
 *   attempt_<lessonId> - per-lesson attempt counter
 */

const Storage = {
  // ---- Student identity (localStorage) ----

  getStudentId() {
    return localStorage.getItem('studentId');
  },

  setStudentId(id) {
    localStorage.setItem('studentId', id);
  },

  clearStudentId() {
    localStorage.removeItem('studentId');
  },

  // ---- Per-visit session state (sessionStorage) ----

  getSessionId() {
    return sessionStorage.getItem('sessionId');
  },

  setSessionId(id) {
    sessionStorage.setItem('sessionId', id);
  },

  getStartTime() {
    return sessionStorage.getItem('startTime');
  },

  setStartTime(iso) {
    sessionStorage.setItem('startTime', iso);
  },

  // Attempt number is tracked per lesson (keyed by lessonId), not as a
  // single global counter — otherwise visiting a second lesson would
  // inherit the first lesson's attempt count.
  getAttemptNumber(lessonId) {
    const raw = sessionStorage.getItem('attempt_' + lessonId);
    return raw ? parseInt(raw, 10) : 0;
  },

  incrementAttemptNumber(lessonId) {
    const next = this.getAttemptNumber(lessonId) + 1;
    sessionStorage.setItem('attempt_' + lessonId, String(next));
    return next;
  },

  // ---- Offline retry queue (localStorage, so it survives a tab close) ----

  queuePendingPayload(payload) {
    const queue = this.getPendingQueue();
    queue.push(payload);
    localStorage.setItem('pendingPayloads', JSON.stringify(queue));
  },

  getPendingQueue() {
    const raw = localStorage.getItem('pendingPayloads');
    if (!raw) return [];
    try {
      return JSON.parse(raw);
    } catch (err) {
      // Corrupted queue data should never crash the page — drop it and move on.
      console.error('Pending queue was corrupted, clearing it:', err);
      localStorage.removeItem('pendingPayloads');
      return [];
    }
  },

  setPendingQueue(queue) {
    localStorage.setItem('pendingPayloads', JSON.stringify(queue));
  },

  // ---- Cosmetic "completed" badge shown on courses.html ----
  // Purely a local convenience for this browser (see courses.html for the
  // full explanation of why this is NOT authoritative analytics data).
  // Keyed on the RAW chapter/lesson numbers (e.g. "03", "05"), not the
  // globally-unique composite IDs sent to the backend (see tracking.js) —
  // this key only ever needs to be unique within one browser's storage.

  _completionKey(courseId, chapterNum, lessonNum) {
    return 'completed_' + courseId + '_' + chapterNum + '_' + lessonNum;
  },

  markLessonCompletedLocally(courseId, chapterNum, lessonNum) {
    localStorage.setItem(this._completionKey(courseId, chapterNum, lessonNum), 'true');
  },

  isLessonCompletedLocally(courseId, chapterNum, lessonNum) {
    return localStorage.getItem(this._completionKey(courseId, chapterNum, lessonNum)) === 'true';
  },

  // Counts completed lessons for one course by scanning localStorage keys
  // with that course's prefix. Used to render the progress bar on
  // courses.html (per-course summary) and each course-*.html detail page
  // (full progress bar). O(number of localStorage keys), which is trivially
  // small at this app's scale (a few dozen lesson flags per student browser).
  countCompletedForCourse(courseId) {
    const prefix = 'completed_' + courseId + '_';
    let count = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.indexOf(prefix) === 0 && localStorage.getItem(key) === 'true') {
        count++;
      }
    }
    return count;
  }
};
