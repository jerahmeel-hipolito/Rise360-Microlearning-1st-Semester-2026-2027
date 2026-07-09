import json, sys, os
sys.path.insert(0, os.path.dirname(__file__))
from catalog import COURSES

out = []
for course in COURSES:
    course_obj = {
        "courseId": course["course_id"],
        "courseCode": course["course_code"],
        "courseNumber": course["course_number"],
        "courseName": course["course_name"],
        "courseDescription": course["course_description"],
        "chapters": []
    }
    lesson_counter = 0
    for chapter in course["chapters"]:
        chapter_obj = {
            "chapterId": f"{chapter['num']:02d}",
            "chapterTitle": chapter["title"],
            "lessons": []
        }
        for title in chapter["lessons"]:
            lesson_counter += 1
            chapter_obj["lessons"].append({
                "lessonId": f"lesson-{lesson_counter:02d}",
                "lessonTitle": title,
                "lessonNum": lesson_counter
            })
        course_obj["chapters"].append(chapter_obj)
    out.append(course_obj)

print(json.dumps(out, indent=2, ensure_ascii=False))
