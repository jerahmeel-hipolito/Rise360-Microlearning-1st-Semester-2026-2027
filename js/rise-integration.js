/**
 * rise-integration.js
 * Bridges a Rise 360 export's completion signal to Tracking.onLessonComplete().
 * Load this AFTER storage.js, api.js, and tracking.js.
 *
 * WHY THIS FILE EXISTS, AND WHY IT'S NOT JUST PART OF tracking.js:
 * Rise 360 doesn't expose a simple global "lesson complete" callback you can
 * hook directly — it's built for SCORM/LMS embedding and signals completion
 * by posting a window message (postMessage) intended for an LRS or SCORM
 * wrapper, OR by calling functions on a small SCORM API shim if one is
 * present on the page (e.g. window.parent.API / window.API, the classic
 * SCORM 1.2 pattern Rise exports look for). Listening for that message/shim
 * is Rise-specific glue, so it's kept separate from tracking.js, which is
 * meant to stay generic and reusable even if a future course uses lessons
 * that AREN'T Rise exports.
 *
 * THIS IS THE ONE PIECE OF THIS SYSTEM THAT MAY NEED ADJUSTING PER RISE
 * VERSION. Rise periodically changes its export internals. If completion
 * stops being detected after a Rise update, this is the file to revisit —
 * not tracking.js or api.js.
 *
 * Two detection strategies are wired up below; keep both, since which one
 * fires depends on how the specific Rise export was configured at build
 * time (whether "Reporting and Tracking" / a SCORM-style completion mode
 * was enabled in the Rise authoring tool).
 */

(function () {
  let completionFired = false;

  function fireCompletionOnce() {
    if (completionFired) return;
    completionFired = true;
    Tracking.onLessonComplete();
  }

  // Strategy 1: listen for postMessage events Rise exports commonly emit.
  // Rise's own message shape has varied across versions; this checks for
  // a few of the field names/values that have been observed in practice
  // rather than assuming one exact schema.
  window.addEventListener('message', function (event) {
    const data = event.data;
    if (!data) return;

    const isCompletionSignal =
      data === 'completed' ||
      data.type === 'complete' ||
      data.event === 'complete' ||
      data.status === 'completed' ||
      data.lessonStatus === 'completed';

    if (isCompletionSignal) {
      fireCompletionOnce();
    }
  });

  // Strategy 2: provide a minimal SCORM 1.2-style API shim. Some Rise
  // exports look for window.API (or window.parent.API) and call
  // LMSSetValue('cmi.core.lesson_status', 'completed') directly, the way
  // they would if embedded in a real LMS. Providing this shim lets Rise
  // "think" it's talking to an LMS, without us building a real SCORM
  // runtime (explicitly out of scope per the project skill's non-goals).
  window.API = {
    LMSInitialize: function () { return 'true'; },
    LMSFinish: function () { return 'true'; },
    LMSGetValue: function () { return ''; },
    LMSSetValue: function (key, value) {
      if (key === 'cmi.core.lesson_status' && (value === 'completed' || value === 'passed')) {
        fireCompletionOnce();
      }
      return 'true';
    },
    LMSCommit: function () { return 'true'; },
    LMSGetLastError: function () { return '0'; },
    LMSGetErrorString: function () { return ''; },
    LMSGetDiagnostic: function () { return ''; }
  };
  // Rise sometimes looks on window.parent for the API object rather than
  // the current window, depending on whether the export runs in an iframe.
  try {
    window.parent.API = window.API;
  } catch (err) {
    // Cross-origin parent access can throw in some embedding setups —
    // harmless to skip if so, since window.API alone covers same-window exports.
  }

  // Manual fallback: if neither strategy above fires (e.g. a future Rise
  // version changes both mechanisms), a lesson template can call this
  // directly from a button's "Trigger" action configured in Rise's
  // authoring tool as a JS interaction, or from a manually edited line at
  // the bottom of the exported index.html.
  window.markLessonComplete = fireCompletionOnce;
})();
