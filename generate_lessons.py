#!/usr/bin/env python3
"""
Generates a lesson wrapper index.html for each real lesson, using the
existing biostatistics/chapter-01/lesson-01 page as the structural template.
Run once from the repo root: python3 generate_lessons.py
"""

import os

REPO = os.path.dirname(os.path.abspath(__file__))

TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lesson — {lesson_title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../../../css/portal.css">
</head>
<body>

  <header class="site-header">
    <div class="shell shell-wide">
      <div class="brand">Microlearning <span class="brand-mark">Portal</span></div>
      <div class="student-chip">
        <span id="student-id-display">—</span>
      </div>
    </div>
  </header>

  <main>
    <div class="shell shell-wide">

      <div class="lesson-meta-bar">
        <span>{course_code}<span class="crumb-sep">/</span>Chapter 01<span class="crumb-sep">/</span>Lesson {lesson_num:02d}</span>
        <a href="../../../../courses.html">&larr; Back to courses</a>
      </div>

      <div class="lesson-layout">

        <!--
          Populated by js/lesson-nav.js from CourseCatalog — lists every
          course/lesson, expands the course containing THIS lesson, and
          marks this lesson active. Don't hand-edit; edit
          js/course-catalog.js instead and this fills in automatically.
        -->
        <aside class="lesson-sidebar" id="lesson-sidebar"></aside>

        <div class="lesson-main">
          <div class="lesson-frame-wrap">
            <!--
              The Rise 360 export's own exported index.html goes here,
              unzipped into this same lesson-{lesson_num:02d}/ folder as
              e.g. "rise/index.html", and is loaded in this iframe.
              Wrapping it this way means the Rise export itself never needs
              tracking.js injected into it directly — all tracking lives in
              THIS wrapper page instead, which is what actually gets
              edited/maintained.

              For HTML5 (non-SCORM) Rise exports: add the standardized
              completion-trigger block (see
              /rise-completion-trigger/completion-block.html at the repo
              root) as the last block on this lesson's final slide inside
              Rise itself, before exporting. It posts
              window.top.postMessage({{type: 'complete'}}, '*') — which
              js/rise-integration.js on THIS page is already listening for.
            -->
            <iframe
              id="rise-frame"
              src="rise/index.html"
              title="{lesson_title}"
              allow="autoplay"
            ></iframe>
          </div>

          <div class="lesson-next-row">
            <!-- text/href filled in by js/lesson-nav.js based on CourseCatalog order -->
            <a id="next-lesson-link" class="btn-next" href="../../../../courses.html">Next Lesson &rarr;</a>
          </div>
        </div>

      </div>

    </div>
  </main>

  <footer class="site-footer">
    <div class="shell shell-wide">Microlearning Portal · this lesson's progress is recorded automatically</div>
  </footer>

  <script src="../../../../js/storage.js"></script>
  <script src="../../../../js/api.js"></script>
  <script src="../../../../js/tracking.js"></script>
  <script src="../../../../js/rise-integration.js"></script>
  <script src="../../../../js/course-catalog.js"></script>
  <script src="../../../../js/lesson-nav.js"></script>
  <script>
    document.getElementById('student-id-display').textContent = Storage.getStudentId() || '—';

    // Manual fallback for testing/demo purposes only — remove once real
    // Rise completion detection (rise-integration.js) is confirmed working
    // for this lesson's specific Rise export configuration. Useful while
    // developing: open devtools console and run window.markLessonComplete()
    // to simulate Rise signaling completion.
  </script>
</body>
</html>
"""

PLACEHOLDER_RISE = """<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Placeholder Lesson Content</title>
<style>
  body {{ font-family: Georgia, serif; background: #fafbfd; color: #1a2433; max-width: 640px; margin: 60px auto; padding: 0 24px; line-height: 1.6; }}
  h1 {{ font-size: 1.3rem; }}
  button {{ font-family: inherit; font-size: 1rem; padding: 10px 18px; margin-top: 24px; cursor: pointer; background: #1e4fa8; border: none; border-radius: 4px; color: #ffffff; font-weight: 600; }}
  code {{ background: #e8eefb; padding: 2px 6px; border-radius: 3px; }}
</style>
</head>
<body>
  <h1>{lesson_title}</h1>
  <p>Replace everything in this <code>rise/</code> folder with the unzipped contents of the real Rise 360 HTML5 export for this lesson (its own <code>index.html</code>, assets, etc.).</p>
  <button id="simulate-complete-btn">Simulate lesson completion</button>
  <script>
    document.getElementById('simulate-complete-btn').addEventListener('click', function () {{
      window.parent.postMessage({{ status: 'completed' }}, '*');
      this.textContent = 'Completion signal sent';
      this.disabled = true;
    }});
  </script>
</body>
</html>
"""

# courseId (folder name) -> courseCode (display) -> lessons list
COURSES = [
    {
        "course_id": "ssa",
        "course_code": "SSA",
        "course_name": "Statistical Software Application",
        "lessons": [
            "Welcome to the Course — MAS 303a",
            "R & RStudio Orientation",
            "SPSS Orientation",
        ],
    },
    {
        "course_id": "ama",
        "course_code": "AMA",
        "course_name": "Applied Multivariate Analysis",
        "lessons": [
            "Welcome to the Course — MAS 305a",
            "Hypothesis Testing & Distribution Overview",
        ],
    },
    {
        "course_id": "biostatistics",
        "course_code": "BIOSTAT",
        "course_name": "Biostatistics and Epidemiology",
        "lessons": [
            "Welcome to the Course — MLS BE 201",
            "Variables, Measurement Scales, Data Collection & Sampling",
        ],
    },
]

generated = []

for course in COURSES:
    for idx, lesson_title in enumerate(course["lessons"], start=1):
        lesson_dir = os.path.join(REPO, "courses", course["course_id"], "chapter-01", f"lesson-{idx:02d}")
        rise_dir = os.path.join(lesson_dir, "rise")
        os.makedirs(rise_dir, exist_ok=True)

        index_path = os.path.join(lesson_dir, "index.html")
        with open(index_path, "w") as f:
            f.write(TEMPLATE.format(
                lesson_title=lesson_title,
                course_code=course["course_code"],
                lesson_num=idx,
            ))

        rise_placeholder_path = os.path.join(rise_dir, "index.html")
        # Only write a placeholder if rise/index.html doesn't already exist —
        # never overwrite a real Rise export that's been dropped in.
        if not os.path.exists(rise_placeholder_path):
            with open(rise_placeholder_path, "w") as f:
                f.write(PLACEHOLDER_RISE.format(lesson_title=lesson_title))

        generated.append((course["course_id"], idx, lesson_title))

print(f"Generated {len(generated)} lesson pages:")
for course_id, idx, title in generated:
    print(f"  courses/{course_id}/chapter-01/lesson-{idx:02d}/  ->  {title}")
