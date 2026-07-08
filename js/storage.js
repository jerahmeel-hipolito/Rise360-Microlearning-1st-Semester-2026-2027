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

  markLessonCompletedLocally(courseId, chapterId, lessonId) {
    const key = 'completed_' + courseId + '_' + chapterId + '_' + lessonId;
    localStorage.setItem(key, 'true');
  }
};
