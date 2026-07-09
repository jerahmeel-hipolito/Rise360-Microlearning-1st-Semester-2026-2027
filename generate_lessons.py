#!/usr/bin/env python3
"""
generate_lessons.py
Generates a lesson wrapper index.html (and a placeholder rise/index.html,
if one doesn't already exist) for EVERY lesson in data/catalog.py — the
single source of truth for the course/chapter/lesson masterlist.

Safe to re-run any time the masterlist changes: wrapper pages are always
regenerated (so design/behavior changes propagate to every lesson), but an
existing rise/index.html is NEVER overwritten, so a real Rise 360 export
already dropped into a lesson folder is never clobbered.

Run from the repo root: python3 generate_lessons.py
"""

import os
import sys

REPO = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(REPO, "data"))
from catalog import COURSES  # noqa: E402

with open(os.path.join(REPO, "data", "lesson_wrapper_template.html")) as f:
    WRAPPER_TEMPLATE = f.read()

with open(os.path.join(REPO, "data", "rise_placeholder_template.html")) as f:
    PLACEHOLDER_TEMPLATE = f.read()

generated = []
skipped_rise = []

for course in COURSES:
    lesson_counter = 0
    for chapter in course["chapters"]:
        chapter_num_padded = f"{chapter['num']:02d}"
        for lesson_title in chapter["lessons"]:
            lesson_counter += 1
            lesson_num_padded = f"{lesson_counter:02d}"

            lesson_dir = os.path.join(
                REPO, "courses", course["course_id"],
                f"chapter-{chapter_num_padded}", f"lesson-{lesson_num_padded}"
            )
            rise_dir = os.path.join(lesson_dir, "rise")
            os.makedirs(rise_dir, exist_ok=True)

            wrapper_out = (WRAPPER_TEMPLATE
                .replace("__LESSON_TITLE__", lesson_title)
                .replace("__COURSE_CODE__", course["course_code"])
                .replace("__COURSE_ID__", course["course_id"])
                .replace("__CHAPTER_NUM_PADDED__", chapter_num_padded)
                .replace("__LESSON_NUM_PADDED__", lesson_num_padded)
            )
            with open(os.path.join(lesson_dir, "index.html"), "w") as f:
                f.write(wrapper_out)

            rise_index_path = os.path.join(rise_dir, "index.html")
            if not os.path.exists(rise_index_path):
                placeholder_out = (PLACEHOLDER_TEMPLATE
                    .replace("__LESSON_TITLE__", lesson_title)
                    .replace("__COURSE_CODE__", course["course_code"])
                    .replace("__CHAPTER_NUM_PADDED__", chapter_num_padded)
                    .replace("__LESSON_NUM_PADDED__", lesson_num_padded)
                )
                with open(rise_index_path, "w") as f:
                    f.write(placeholder_out)
            else:
                skipped_rise.append(rise_index_path)

            generated.append((course["course_id"], chapter_num_padded, lesson_num_padded, lesson_title))

print(f"Generated {len(generated)} lesson wrapper pages:")
current_course = None
for course_id, ch, ln, title in generated:
    if course_id != current_course:
        print(f"\n  == {course_id} ==")
        current_course = course_id
    print(f"    chapter-{ch}/lesson-{ln}/  ->  {title}")

if skipped_rise:
    print(f"\n{len(skipped_rise)} rise/index.html files already existed and were left untouched (real content preserved).")
