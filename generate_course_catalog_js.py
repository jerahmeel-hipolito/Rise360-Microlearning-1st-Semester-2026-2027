#!/usr/bin/env python3
"""
generate_course_catalog_js.py
Regenerates js/course-catalog.js from data/catalog.json.

Previously this was a manual step ("replace the const CourseCatalog = [...]
array with the contents of data/catalog.json") — this script does it
directly instead, so a catalog.py edit propagates here with no hand-editing
and no chance of pasting into the wrong spot.

Run AFTER data/build_catalog_json.py (which regenerates data/catalog.json
from data/catalog.py). Safe to re-run any time.

Run from the repo root: python3 generate_course_catalog_js.py
"""

import json
import os

REPO = os.path.dirname(os.path.abspath(__file__))

with open(os.path.join(REPO, "data", "catalog.json")) as f:
    catalog = json.load(f)

HEADER = '''/**
 * course-catalog.js
 * Drives the navigation shown on courses.html. This is the FRONTEND mirror
 * of the "Course Catalog" / "Lesson Catalog" tabs in the Google Sheet
 * (see the project skill's sheets-setup.md) — it exists so the site can
 * render a lesson list without a network call back to Apps Script just to
 * show navigation. The Sheet catalogs are still the source of truth for
 * analytics lookups server-side; this file only drives what the student
 * sees and clicks.
 *
 * GENERATED FILE — do not hand-edit. Edit data/catalog.py, then run:
 *   python3 data/build_catalog_json.py > data/catalog.json
 *   python3 generate_course_catalog_js.py
 * (or just run generate_all.sh, if present, to do the whole chain at once)
 *
 * WEEKLY PUBLISHING WORKFLOW: when you add a new lesson folder under
 * /courses/, add one entry to data/catalog.py too (and a matching row in
 * the Lesson Catalog sheet tab) — this is the "update navigation" step
 * referenced in the project skill's deployment-and-testing.md. Forgetting
 * this step means the lesson exists and will still log correctly if
 * visited directly, it just won't show up as a link for students to find.
 */

'''

FOOTER = '''

// Convenience derived data, computed once here so every page that loads
// this file (courses.html, the course-*.html detail pages, lesson-nav.js)
// shares identical totals instead of re-deriving them slightly differently.
CourseCatalog.forEach(function (course) {
  course.totalLessons = course.chapters.reduce(function (sum, ch) {
    return sum + ch.lessons.length;
  }, 0);
});
'''

body = "const CourseCatalog = " + json.dumps(catalog, indent=2, ensure_ascii=False) + ";"

out_path = os.path.join(REPO, "js", "course-catalog.js")
with open(out_path, "w") as f:
    f.write(HEADER + body + FOOTER)

print(f"Wrote {out_path} ({len(catalog)} courses)")
