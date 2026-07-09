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
    "courseId": "biostatistics",
    "courseCode": "BIOSTAT",
    "courseNumber": "MLSBE 201",
    "courseName": "Biostatistics and Epidemiology",
    "courseDescription": "Foundations of biostatistics and epidemiologic reasoning for the health sciences.",
    "chapters": [
      {
        "chapterId": "01",
        "chapterTitle": "Foundations — Orientation, Variables & Measurement",
        "lessons": [
          {
            "lessonId": "lesson-01",
            "lessonTitle": "Welcome to the Course — MLSBE 201",
            "lessonNum": 1
          },
          {
            "lessonId": "lesson-02",
            "lessonTitle": "Variables, Measurement Scales, Data Collection & Sampling",
            "lessonNum": 2
          }
        ]
      },
      {
        "chapterId": "02",
        "chapterTitle": "Organizing & Visualizing Health Data",
        "lessons": [
          {
            "lessonId": "lesson-03",
            "lessonTitle": "Frequency Distributions & Basic Data Management",
            "lessonNum": 3
          },
          {
            "lessonId": "lesson-04",
            "lessonTitle": "Data Visualization & Presentation",
            "lessonNum": 4
          }
        ]
      },
      {
        "chapterId": "03",
        "chapterTitle": "Descriptive Statistics, Probability & Distributions",
        "lessons": [
          {
            "lessonId": "lesson-05",
            "lessonTitle": "Descriptive Statistics — Central Tendency, Dispersion & Shape",
            "lessonNum": 5
          },
          {
            "lessonId": "lesson-06",
            "lessonTitle": "Probability Concepts & Basic Rules",
            "lessonNum": 6
          },
          {
            "lessonId": "lesson-07",
            "lessonTitle": "Probability Distributions",
            "lessonNum": 7
          }
        ]
      },
      {
        "chapterId": "04",
        "chapterTitle": "Epidemiology Foundations",
        "lessons": [
          {
            "lessonId": "lesson-08",
            "lessonTitle": "Measures of Disease Frequency",
            "lessonNum": 8
          }
        ]
      },
      {
        "chapterId": "05",
        "chapterTitle": "Hypothesis Testing & Group Comparisons",
        "lessons": [
          {
            "lessonId": "lesson-09",
            "lessonTitle": "Foundations of Hypothesis Testing",
            "lessonNum": 9
          },
          {
            "lessonId": "lesson-10",
            "lessonTitle": "Comparing Two Means — t-Tests",
            "lessonNum": 10
          },
          {
            "lessonId": "lesson-11",
            "lessonTitle": "Comparing Three or More Means — One-Way ANOVA",
            "lessonNum": 11
          }
        ]
      },
      {
        "chapterId": "06",
        "chapterTitle": "Categorical Data, Correlation & Regression",
        "lessons": [
          {
            "lessonId": "lesson-12",
            "lessonTitle": "Chi-Square Test & Measures of Association",
            "lessonNum": 12
          },
          {
            "lessonId": "lesson-13",
            "lessonTitle": "Correlation & Simple Linear Regression",
            "lessonNum": 13
          }
        ]
      },
      {
        "chapterId": "07",
        "chapterTitle": "Diagnostic Testing, Study Design & Sampling",
        "lessons": [
          {
            "lessonId": "lesson-14",
            "lessonTitle": "Diagnostic & Screening Test Evaluation",
            "lessonNum": 14
          },
          {
            "lessonId": "lesson-15",
            "lessonTitle": "Epidemiologic Study Designs & Sampling Methods",
            "lessonNum": 15
          }
        ]
      },
      {
        "chapterId": "08",
        "chapterTitle": "Critical Appraisal & Capstone Readiness",
        "lessons": [
          {
            "lessonId": "lesson-16",
            "lessonTitle": "Reading and Critiquing Medical Research",
            "lessonNum": 16
          }
        ]
      }
    ]
  },
  {
    "courseId": "ssa",
    "courseCode": "SSA",
    "courseNumber": "MAS 303a",
    "courseName": "Statistical Software Application",
    "courseDescription": "Hands-on statistical computing in R and SPSS, from first script to reproducible report.",
    "chapters": [
      {
        "chapterId": "01",
        "chapterTitle": "Foundations & Software Orientation",
        "lessons": [
          {
            "lessonId": "lesson-01",
            "lessonTitle": "Welcome to the Course — MAS 303a",
            "lessonNum": 1
          },
          {
            "lessonId": "lesson-02",
            "lessonTitle": "R & RStudio Orientation",
            "lessonNum": 2
          },
          {
            "lessonId": "lesson-03",
            "lessonTitle": "SPSS Orientation",
            "lessonNum": 3
          }
        ]
      },
      {
        "chapterId": "02",
        "chapterTitle": "Data Management & Wrangling",
        "lessons": [
          {
            "lessonId": "lesson-04",
            "lessonTitle": "Missing Values & Outliers",
            "lessonNum": 4
          },
          {
            "lessonId": "lesson-05",
            "lessonTitle": "Wrangling with dplyr & SPSS Transform",
            "lessonNum": 5
          }
        ]
      },
      {
        "chapterId": "03",
        "chapterTitle": "Data Visualization & Storytelling",
        "lessons": [
          {
            "lessonId": "lesson-06",
            "lessonTitle": "Grammar of Graphics & ggplot2 Basics",
            "lessonNum": 6
          },
          {
            "lessonId": "lesson-07",
            "lessonTitle": "Storytelling with Data",
            "lessonNum": 7
          }
        ]
      },
      {
        "chapterId": "04",
        "chapterTitle": "Exploratory Data Analysis (EDA)",
        "lessons": [
          {
            "lessonId": "lesson-08",
            "lessonTitle": "Descriptive Statistics",
            "lessonNum": 8
          },
          {
            "lessonId": "lesson-09",
            "lessonTitle": "Normality Assessment",
            "lessonNum": 9
          }
        ]
      },
      {
        "chapterId": "05",
        "chapterTitle": "Inferential Statistics — Group Comparisons",
        "lessons": [
          {
            "lessonId": "lesson-10",
            "lessonTitle": "T-Tests",
            "lessonNum": 10
          },
          {
            "lessonId": "lesson-11",
            "lessonTitle": "Analysis of Variance (ANOVA)",
            "lessonNum": 11
          }
        ]
      },
      {
        "chapterId": "06",
        "chapterTitle": "Relationships & Prediction",
        "lessons": [
          {
            "lessonId": "lesson-12",
            "lessonTitle": "Correlation Analysis",
            "lessonNum": 12
          },
          {
            "lessonId": "lesson-13",
            "lessonTitle": "Regression Analysis",
            "lessonNum": 13
          }
        ]
      },
      {
        "chapterId": "07",
        "chapterTitle": "Reporting & Reproducibility",
        "lessons": [
          {
            "lessonId": "lesson-14",
            "lessonTitle": "R Markdown & Quarto",
            "lessonNum": 14
          },
          {
            "lessonId": "lesson-15",
            "lessonTitle": "APA Reporting & Ethical Practices",
            "lessonNum": 15
          }
        ]
      },
      {
        "chapterId": "08",
        "chapterTitle": "Capstone Hackathon",
        "lessons": [
          {
            "lessonId": "lesson-16",
            "lessonTitle": "Hackathon Preparation",
            "lessonNum": 16
          }
        ]
      }
    ]
  },
  {
    "courseId": "ama",
    "courseCode": "AMA",
    "courseNumber": "MAS 305a",
    "courseName": "Applied Multivariate Analysis",
    "courseDescription": "Multivariate methods for research — from MANOVA and factor analysis to full SEM.",
    "chapters": [
      {
        "chapterId": "01",
        "chapterTitle": "Course Orientation & Univariate Review",
        "lessons": [
          {
            "lessonId": "lesson-01",
            "lessonTitle": "Welcome to the Course — MAS 305a",
            "lessonNum": 1
          },
          {
            "lessonId": "lesson-02",
            "lessonTitle": "Hypothesis Testing & Distributions Review",
            "lessonNum": 2
          }
        ]
      },
      {
        "chapterId": "02",
        "chapterTitle": "Multivariate Data, MVN & Assumptions",
        "lessons": [
          {
            "lessonId": "lesson-03",
            "lessonTitle": "Understanding Multivariate Data Structure",
            "lessonNum": 3
          },
          {
            "lessonId": "lesson-04",
            "lessonTitle": "Multivariate Normality: Testing & Implications",
            "lessonNum": 4
          }
        ]
      },
      {
        "chapterId": "03",
        "chapterTitle": "Regression: MLR Review & Extensions",
        "lessons": [
          {
            "lessonId": "lesson-05",
            "lessonTitle": "Multiple Linear Regression — Deep Review",
            "lessonNum": 5
          },
          {
            "lessonId": "lesson-06",
            "lessonTitle": "MLR Extensions: MMR & Intro to Logistic Regression",
            "lessonNum": 6
          }
        ]
      },
      {
        "chapterId": "04",
        "chapterTitle": "MANOVA, Repeated Measures & Mixed Designs — Overview",
        "lessons": [
          {
            "lessonId": "lesson-07",
            "lessonTitle": "MANOVA: Rationale, Assumptions & Interpretation",
            "lessonNum": 7
          },
          {
            "lessonId": "lesson-08",
            "lessonTitle": "Repeated Measures ANOVA & Mixed Designs",
            "lessonNum": 8
          }
        ]
      },
      {
        "chapterId": "05",
        "chapterTitle": "Principal Component Analysis (PCA)",
        "lessons": [
          {
            "lessonId": "lesson-09",
            "lessonTitle": "PCA: Concepts, Components & Decisions",
            "lessonNum": 9
          },
          {
            "lessonId": "lesson-10",
            "lessonTitle": "PCA in SPSS & R: Full Output Walkthrough",
            "lessonNum": 10
          }
        ]
      },
      {
        "chapterId": "06",
        "chapterTitle": "Exploratory Factor Analysis (EFA)",
        "lessons": [
          {
            "lessonId": "lesson-11",
            "lessonTitle": "EFA Foundations: Model, Extraction & Rotation",
            "lessonNum": 11
          },
          {
            "lessonId": "lesson-12",
            "lessonTitle": "Determining Number of Factors & Reporting EFA",
            "lessonNum": 12
          }
        ]
      },
      {
        "chapterId": "07",
        "chapterTitle": "EFA Deep Dive: Reliability & Scale Validation",
        "lessons": [
          {
            "lessonId": "lesson-13",
            "lessonTitle": "Reliability Analysis: Alpha, Omega & Item Analysis",
            "lessonNum": 13
          },
          {
            "lessonId": "lesson-14",
            "lessonTitle": "The EFA → Reliability → CFA Pipeline",
            "lessonNum": 14
          }
        ]
      },
      {
        "chapterId": "08",
        "chapterTitle": "Cluster Analysis",
        "lessons": [
          {
            "lessonId": "lesson-15",
            "lessonTitle": "Cluster Analysis Foundations: Distance, Hierarchy & K-Means",
            "lessonNum": 15
          },
          {
            "lessonId": "lesson-16",
            "lessonTitle": "Cluster Validation, Profiling & Reporting",
            "lessonNum": 16
          }
        ]
      },
      {
        "chapterId": "09",
        "chapterTitle": "Confirmatory Factor Analysis (CFA)",
        "lessons": [
          {
            "lessonId": "lesson-17",
            "lessonTitle": "CFA: Model Specification, Identification & Fit",
            "lessonNum": 17
          },
          {
            "lessonId": "lesson-18",
            "lessonTitle": "CFA Validity Evidence, Model Refinement & Reporting",
            "lessonNum": 18
          }
        ]
      },
      {
        "chapterId": "10",
        "chapterTitle": "Structural Equation Modeling (SEM)",
        "lessons": [
          {
            "lessonId": "lesson-19",
            "lessonTitle": "SEM Foundations: Architecture, Effects & Output",
            "lessonNum": 19
          },
          {
            "lessonId": "lesson-20",
            "lessonTitle": "SEM in Practice: Model Comparison & the Full Worked Example",
            "lessonNum": 20
          }
        ]
      },
      {
        "chapterId": "11",
        "chapterTitle": "Integration: Technique Selection & Research Ethics",
        "lessons": [
          {
            "lessonId": "lesson-21",
            "lessonTitle": "Integration: Technique Selection & Research Ethics",
            "lessonNum": 21
          }
        ]
      }
    ]
  }
];

// Convenience derived data, computed once here so every page that loads
// this file (courses.html, the course-*.html detail pages, lesson-nav.js)
// shares identical totals instead of re-deriving them slightly differently.
CourseCatalog.forEach(function (course) {
  course.totalLessons = course.chapters.reduce(function (sum, ch) {
    return sum + ch.lessons.length;
  }, 0);
});
