/**
 * api.js
 * Owns every call to the Apps Script backend. Nothing else constructs a
 * fetch() call. Depends on storage.js for the offline retry queue.
 *
 * IMPORTANT: requests are sent with Content-Type: text/plain, NOT
 * application/json. This is deliberate — application/json triggers a CORS
 * preflight (OPTIONS request) that Apps Script web apps don't handle the
 * way a normal backend would, and the request fails before it ever reaches
 * your code. text/plain is a CORS "simple request" and skips the preflight
 * entirely. The body is still a JSON string; only the header differs.
 * See: apps-script/CodeJS.gs and the project skill's apps-script-backend.md
 * for the full explanation.
 *
 * IMPORTANT: Apps Script doPost() web apps always return HTTP 200 to the
 * fetch call regardless of what logically went wrong — Apps Script doesn't
 * support custom HTTP status codes on web app responses. Failure is
 * signaled via the JSON body's `success` field, never response.status.
 */

const Api = {
  // Replace with the deployed Apps Script web app URL after deployment.
  // See apps-script/CodeJS.gs deployment notes.
  ENDPOINT_URL: 'https://script.google.com/macros/s/AKfycbw31-wquCnhKhJpwF7Zu5gHQS0fQxCadGgMVQU3XaeY8TZ906yCTuA4rRxgUbte5nD6/exec',

  async send(payload) {
    try {
      const response = await fetch(this.ENDPOINT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!result.success) {
        this.handleFailure(payload, result);
      }
      // result.duplicate === true is treated as a normal success — the
      // backend already has a row for this sessionId, nothing more to do.

    } catch (err) {
      // Network failure (offline, DNS failure, Apps Script unreachable, etc).
      // Queue the payload so it isn't lost — it will be retried the next
      // time any lesson page loads successfully (see flushPendingQueue).
      console.warn('Analytics send failed, queued for retry:', err);
      Storage.queuePendingPayload(payload);
    }
  },

  handleFailure(payload, result) {
    if (result.code === 404) {
      // Student ID not recognized server-side. Retrying won't help since
      // the ID itself is the problem — clear it and send the student back
      // to the landing page to re-enter it correctly.
      console.error('Student ID not recognized:', result.message);
      Storage.clearStudentId();
      window.location.href = '/index.html?error=student_not_found';
    } else if (result.code === 400) {
      // Malformed payload. A retry would fail identically (same bad data),
      // so just log it rather than queueing it forever.
      console.error('Invalid payload, not retrying:', result.message);
    } else {
      // 500 or anything else — likely transient (e.g. sheet lock timeout).
      // Worth retrying later.
      console.warn('Server error, queued for retry:', result.message);
      Storage.queuePendingPayload(payload);
    }
  },

  // Called on every page load (see tracking.js init) to opportunistically
  // drain anything that failed to send on a previous visit.
  async flushPendingQueue() {
    const queue = Storage.getPendingQueue();
    if (queue.length === 0) return;

    // Clear optimistically first. If any of these fail again, send()
    // re-queues them individually below — this avoids double-queuing items
    // that succeed while still keeping ones that fail again.
    Storage.setPendingQueue([]);

    for (const payload of queue) {
      await this.send(payload);
    }
  }
};
