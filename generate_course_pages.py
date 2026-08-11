#!/usr/bin/env python3
"""
generate_course_pages.py
Regenerates course-biostatistics.html / course-ssa.html / course-ama.html
from data/course_detail_template.html, filled in with data/catalog.py.

Previously this was a manual step (copy-paste the template three times,
hand-edit each placeholder) — this script replaces that with the same
"single source of truth" pattern generate_lessons.py already uses for
lesson wrapper pages, so a catalog.py change (e.g. a lesson title rename)
propagates here too instead of needing separate manual edits.

Safe to re-run any time data/catalog.py or data/course_detail_template.html
changes. Always fully overwrites the 3 course-*.html files at the repo
root — never hand-edit those directly, or the next run will silently
discard the edit.

Run from the repo root: python3 generate_course_pages.py
"""

import os
import sys

REPO = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(REPO, "data"))
from catalog import COURSES  # noqa: E402

with open(os.path.join(REPO, "data", "course_detail_template.html")) as f:
    TEMPLATE = f.read()

for course in COURSES:
    total_lessons = sum(len(ch["lessons"]) for ch in course["chapters"])

    out = (TEMPLATE
        .replace("__COURSE_ID__", course["course_id"])
        .replace("__COURSE_CODE__", course["course_code"])
        .replace("__COURSE_NUMBER__", course["course_number"])
        .replace("__COURSE_NAME__", course["course_name"])
        .replace("__TOTAL_LESSONS__", str(total_lessons))
    )

    out_path = os.path.join(REPO, f"course-{course['course_id']}.html")
    with open(out_path, "w") as f:
        f.write(out)
    print(f"Wrote {out_path}  ({total_lessons} lessons)")
