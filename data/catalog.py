"""
catalog.py — SINGLE SOURCE OF TRUTH for the course/chapter/lesson masterlist.

Every other generated artifact (js/course-catalog.js, the lesson folder tree,
the Apps Script Lesson/Course Catalog seed data) is derived FROM this file by
generate_all.py — never hand-edit course-catalog.js or the seed rows in
Code.gs directly; edit this file and re-run the generator instead, or they
will drift out of sync with each other.
"""

COURSES = [
    {
        "course_id": "biostatistics",       # URL folder name + backend CourseID
        "course_code": "BIOSTAT",           # short display tag
        "course_number": "MLSBE 201",
        "course_name": "Biostatistics and Epidemiology",
        "course_description": "Foundations of biostatistics and epidemiologic reasoning for the health sciences.",
        "chapters": [
            {"num": 1, "title": "Foundations — Orientation, Variables & Measurement", "lessons": [
                "Welcome to the Course — MLSBE 201",
                "Variables, Measurement Scales, Data Collection & Sampling",
            ]},
            {"num": 2, "title": "Organizing & Visualizing Health Data", "lessons": [
                "Frequency Distributions & Basic Data Management",
                "Data Visualization & Presentation",
            ]},
            {"num": 3, "title": "Descriptive Statistics, Probability & Distributions", "lessons": [
                "Descriptive Statistics — Central Tendency, Dispersion & Shape",
                "Probability Concepts & Basic Rules",
                "Probability Distributions",
            ]},
            {"num": 4, "title": "Epidemiology Foundations", "lessons": [
                "Measures of Disease Frequency",
            ]},
            {"num": 5, "title": "Hypothesis Testing & Group Comparisons", "lessons": [
                "Foundations of Hypothesis Testing",
                "Comparing Two Means — t-Tests",
                "Comparing Three or More Means — One-Way ANOVA",
            ]},
            {"num": 6, "title": "Categorical Data, Correlation & Regression", "lessons": [
                "Chi-Square Test & Measures of Association",
                "Correlation & Simple Linear Regression",
            ]},
            {"num": 7, "title": "Diagnostic Testing, Study Design & Sampling", "lessons": [
                "Diagnostic & Screening Test Evaluation",
                "Epidemiologic Study Designs & Sampling Methods",
            ]},
            {"num": 8, "title": "Critical Appraisal & Capstone Readiness", "lessons": [
                "Reading and Critiquing Medical Research",
            ]},
        ],
    },
    {
        "course_id": "ssa",
        "course_code": "SSA",
        "course_number": "MAS 303a",
        "course_name": "Statistical Software Application",
        "course_description": "Hands-on statistical computing in R and SPSS, from first script to reproducible report.",
        "chapters": [
            {"num": 1, "title": "Foundations & Software Orientation", "lessons": [
                "Welcome to the Course — MAS 303a",
                "R & RStudio Orientation",
                "SPSS Orientation",
            ]},
            {"num": 2, "title": "Data Management & Wrangling", "lessons": [
                "Missing Values & Outliers",
                "Wrangling with dplyr & SPSS Transform",
            ]},
            {"num": 3, "title": "Data Visualization & Storytelling", "lessons": [
                "Grammar of Graphics & ggplot2 Basics",
                "Storytelling with Data",
            ]},
            {"num": 4, "title": "Exploratory Data Analysis (EDA)", "lessons": [
                "Descriptive Statistics",
                "Normality Assessment",
            ]},
            {"num": 5, "title": "Inferential Statistics — Group Comparisons", "lessons": [
                "T-Tests",
                "Analysis of Variance (ANOVA)",
            ]},
            {"num": 6, "title": "Relationships & Prediction", "lessons": [
                "Correlation Analysis",
                "Regression Analysis",
            ]},
            {"num": 7, "title": "Reporting & Reproducibility", "lessons": [
                "R Markdown & Quarto",
                "APA Reporting & Ethical Practices",
            ]},
            {"num": 8, "title": "Capstone Hackathon", "lessons": [
                "Hackathon Preparation",
            ]},
        ],
    },
    {
        "course_id": "ama",
        "course_code": "AMA",
        "course_number": "MAS 305a",
        "course_name": "Applied Multivariate Analysis",
        "course_description": "Multivariate methods for research — from MANOVA and factor analysis to full SEM.",
        "chapters": [
            {"num": 1, "title": "Course Orientation & Univariate Review", "lessons": [
                "Welcome to the Course — MAS 305a",
                "Hypothesis Testing & Distributions Review",
            ]},
            {"num": 2, "title": "Multivariate Data, MVN & Assumptions", "lessons": [
                "Understanding Multivariate Data Structure",
                "Multivariate Normality: Testing & Implications",
            ]},
            {"num": 3, "title": "Regression: MLR Review & Extensions", "lessons": [
                "Multiple Linear Regression — Deep Review",
                "MLR Extensions: MMR & Intro to Logistic Regression",
            ]},
            {"num": 4, "title": "MANOVA, Repeated Measures & Mixed Designs — Overview", "lessons": [
                "MANOVA: Rationale, Assumptions & Interpretation",
                "Repeated Measures ANOVA & Mixed Designs",
            ]},
            {"num": 5, "title": "Principal Component Analysis (PCA)", "lessons": [
                "PCA: Concepts, Components & Decisions",
                "PCA in SPSS & R: Full Output Walkthrough",
            ]},
            {"num": 6, "title": "Exploratory Factor Analysis (EFA)", "lessons": [
                "EFA Foundations: Model, Extraction & Rotation",
                "Determining Number of Factors & Reporting EFA",
            ]},
            {"num": 7, "title": "EFA Deep Dive: Reliability & Scale Validation", "lessons": [
                "Reliability Analysis: Alpha, Omega & Item Analysis",
                "The EFA \u2192 Reliability \u2192 CFA Pipeline",
            ]},
            {"num": 8, "title": "Cluster Analysis", "lessons": [
                "Cluster Analysis Foundations: Distance, Hierarchy & K-Means",
                "Cluster Validation, Profiling & Reporting",
            ]},
            {"num": 9, "title": "Confirmatory Factor Analysis (CFA)", "lessons": [
                "CFA: Model Specification, Identification & Fit",
                "CFA Validity Evidence, Model Refinement & Reporting",
            ]},
            {"num": 10, "title": "Structural Equation Modeling (SEM)", "lessons": [
                "SEM Foundations: Architecture, Effects & Output",
                "SEM in Practice: Model Comparison & the Full Worked Example",
            ]},
            {"num": 11, "title": "Integration: Technique Selection & Research Ethics", "lessons": [
                "Integration: Technique Selection & Research Ethics",
            ]},
        ],
    },
]


def flatten():
    """Returns a flat, ordered list of every lesson across all courses, with
    global (course-scoped) lesson numbers assigned continuously across
    chapters — e.g. AMA chapter 3's first lesson is global lesson 5."""
    out = []
    for course in COURSES:
        lesson_counter = 0
        for chapter in course["chapters"]:
            for title in chapter["lessons"]:
                lesson_counter += 1
                out.append({
                    "course_id": course["course_id"],
                    "course_code": course["course_code"],
                    "course_number": course["course_number"],
                    "course_name": course["course_name"],
                    "chapter_num": chapter["num"],
                    "chapter_title": chapter["title"],
                    "lesson_num": lesson_counter,
                    "lesson_title": title,
                })
    return out


if __name__ == "__main__":
    flat = flatten()
    print(f"{len(flat)} total lessons across {len(COURSES)} courses")
    for course in COURSES:
        total = sum(len(ch["lessons"]) for ch in course["chapters"])
        print(f"  {course['course_code']}: {len(course['chapters'])} chapters, {total} lessons")
