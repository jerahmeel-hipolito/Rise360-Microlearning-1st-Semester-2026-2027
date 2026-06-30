/**
 * course-catalog.js
 * Drives the navigation shown on courses.html. This is the FRONTEND mirror
 * of the "Course Catalog" / "Lesson Catalog" tabs in the Google Sheet
 * (see the project skill's sheets-setup.md) — it exists so the site can
 * render a lesson list without a network call back to Apps Script just to
 * show navigation. The Sheet catalogs are still the source of truth for
 * analytics lookups server-side; this file only drives what the student
 * sees and clicks.
 *
 * WEEKLY PUBLISHING WORKFLOW: when you add a new lesson folder under
 * /courses/, add one entry here too (and a matching row in the Lesson
 * Catalog sheet tab) — this is the "update navigation" step referenced in
 * the project skill's deployment-and-testing.md. Forgetting this step
 * means the lesson exists and will still log correctly if visited
 * directly, it just won't show up as a link for students to find.
 */

const CourseCatalog = [
  {
    courseId: 'biostatistics',
    courseCode: 'BIOSTAT',
    courseName: 'Biostatistics and Epidemiology',
    chapters: [
      {
        chapterId: '01',
        chapterTitle: 'Chapter 1 — Foundations of Biostatistics',
        lessons: [
          { lessonId: 'lesson-01', lessonTitle: 'Introduction to Biostatistics' }
        ]
      }
    ]
  },
  {
    courseId: 'ssa',
    courseCode: 'SSA',
    courseName: 'Statistical Software Application',
    chapters: [
      {
        chapterId: '01',
        chapterTitle: 'Chapter 1 — Getting Started',
        lessons: [
          { lessonId: 'lesson-01', lessonTitle: 'Introduction to Statistical Software' }
        ]
      }
    ]
  },
  {
    courseId: 'ama',
    courseCode: 'AMA',
    courseName: 'Applied Multivariate Analysis',
    chapters: [
      {
        chapterId: '01',
        chapterTitle: 'Chapter 1 — Multivariate Foundations',
        lessons: [
          { lessonId: 'lesson-01', lessonTitle: 'Introduction to Multivariate Analysis' }
        ]
      }
    ]
  }
];
