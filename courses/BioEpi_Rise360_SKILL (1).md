---
name: bioepi-rise360-codeblock
description: Use this skill whenever generating, refining, or reviewing interactive HTML/CSS/JS "Code Block" components for the Biostatistics and Epidemiology (BioEpi) Rise360 course — the same course covered by the BioEpi_Rise360_Storyboard.xlsx and ch1–ch8 Word manuscripts. Trigger for any request to "build", "code", "create a code block / interaction / module / widget", or to turn a Section Content build prompt from the storyboard into actual HTML output, including three-tool (Excel/SPSS/R) comparison panels, epi curve builders, bathtub model simulators, 2×2 diagnostic calculators, variable classification drag-and-drop, probability tree builders, normal curve explorers, CLT simulations, and similar Rise360 interactives for Chapters 1–8. Before building any section, check whether a `lesson_reference.md` file is uploaded — it contains finalized production-standard HTML sections that define the interaction patterns, code rules, and visual standards all future sections must match.
---

# BioEpi Rise360 — Code Block Generator

Generates standalone, single-file interactive HTML/CSS/JS modules ("Code Blocks") for the **Biostatistics and Epidemiology (BioEpi)** Rise360 course — a 3-unit, 8-chapter, 16-lesson applied biostatistics and epidemiology course for BS Medical Technology / Medical Laboratory Science students, taught using Excel → SPSS → R in parallel across an 18-week semester.

The **code logic and frame architecture** are adapted from the SSA Code Block Design System (DOM order, flex layout discipline, animation follow-through/overlap, comment-banner organization, completion/postMessage pattern). The **visual design and navigation model** follow the same conventions: **white-background, navy-palette, minimalist** module with an **always-visible static header** and **self-paced, unlocked navigation** throughout.

**The defining structural difference from SSA:** BioEpi modules use a **triple software palette** (Excel → SPSS → R), not SSA's dual palette. Excel is the entry-point tool and always appears first. Modules also directly include **Philippine public health context** — PH Dengue Surveillance, DOH FHSIS, PSA, PhilHealth, and NDHS scenarios belong in Rise360 code blocks (this is different from SSA, where Philippine data was F2F-only).

---

## Workflow: One Section at a Time

The user calls this skill **one storyboard section per round**, in the form:

> "Chapter [N] Lesson [N] Section [Section Name]"

Example: *"Chapter 2 Lesson 4 Section: Building the Epi Curve"*

The **module header eyebrow** always follows this exact pattern: `Chapter [N] · [Lesson Title] · Section [N]`

Example: `Chapter 2 · Data Presentation in Epidemiology · Section 3`

Never substitute a lesson number for the lesson title, and never omit the section number.

Every session works on exactly one section. Each section goes through one of two build modes, declared at the start of the session.

### Mode A: Build from Scratch (Iterative Refinement)

Default when no existing HTML file is uploaded.

1. **First output is a lean foundation, not a finished product.** On the first build for any section, output a functional but deliberately minimal HTML: correct structure, real content and data, working interactions, and the full design system applied — without heavy polish or decorative flourishes. The storyboard prompt is a starting point; the real module is shaped through feedback rounds.
2. **Subsequent rounds are refinements.** After the user tests the first output and gives feedback, apply those changes precisely and regenerate the single HTML file. Do not rebuild unrelated parts unless asked.
3. **Refinement continues until the user is satisfied.** No fixed limit on revision rounds. Each round is one HTML file output.

### Mode B: Refine an Existing HTML (from Another AI or Prior Session)

If the user uploads an `.html` file built elsewhere or in a prior session:

1. **Read the uploaded HTML file first** via the bash/view tool before doing anything else.
2. **Identify what to keep and what to change** based on the user's request. Preserve working interactions, correct content, and layout choices that already match the design system. Update only what the user asks for, plus any clear design-system violations (wrong tool color, missing Excel panel, modal header instead of static header, timer-locked Next button, wrong dataset values, etc.).
3. **Do not silently rebuild the whole file** just because the incoming code style differs from the preferred structure. Make targeted edits; restructure only if the user asks or if the existing structure would prevent the requested changes from working correctly.
4. Output the updated file using the same naming convention (`chN_lN_section_name.html`) and present via `present_files`.

### Common Steps for Both Modes

1. **Read `lesson_reference.md` first if it is uploaded.** This file documents finalized production-standard HTML sections — the closest thing the course has to a "gold standard" build. Before writing any new section, identify which pattern in the reference most closely matches the current build prompt, then match that pattern's implementation exactly — same state management, same animation approach, same completion logic.
2. **Check for an uploaded chapter manuscript next.** The user will typically also upload that chapter's Word-manuscript-derived JS file (`ch1_content.js` through `ch8_content.js`). Before building or editing anything, look in `/mnt/user-data/uploads/` for a file matching the chapter number referenced in the request. If present, **read it first**: it contains the canonical narrative text, exact wording, code snippets, statistics, and the `C` color object for that chapter. If no matching chapter JS is uploaded, proceed using `BioEpi_dataset-package-map.md` and `BioEpi_Rise360_design-system.md` alone, and note briefly that the chapter JS wasn't found.
3. Work on **only that section**: one HTML file, one Section Content build prompt from `BioEpi_Rise360_Storyboard.xlsx`.
4. Do not combine multiple sections/lessons/chapters into a single output.
5. Output exactly **one HTML file** per round, saved to `/mnt/user-data/outputs/` and presented via `present_files`.
6. Name the file by chapter/lesson/section (e.g., `ch2_l4_epi_curve_builder.html`).

---

## R Simulation Verification (Before Building R-Output Sections)

If the section's build prompt involves an **R panel showing output, console results, or computed statistics** (e.g., `t.test()`, `aov()`, `prop.table()`, `shapiro.test()`, `psych::describe()`, `chisq.test()`, `epitools::oddsratio()`), **run the actual R simulation first**:

1. Before writing the HTML, use the bash tool to run the equivalent R code (install packages if needed; if R isn't available, fall back to pre-verified figures from `BioEpi_dataset-package-map.md` or the chapter JS, in that priority order).
2. Use the **real computed output** verbatim in the R panel and any paired interpretation text.
3. If a number from `BioEpi_dataset-package-map.md` is already cross-referenced from another chapter, prefer that pre-verified figure. Re-running should reproduce it, but consistency with prior chapters takes precedence if there is any discrepancy.
4. For SVG plots (epi curves, normal curves, CLT histograms, Q-Q plots), the simulation helps even though the visual is hand-built in SVG/HTML — use real computed values (quantiles, bin edges, axis ranges) to make SVGs numerically accurate.
5. Skip simulation only for purely conceptual/UI sections with no computed R output displayed (e.g., course roadmap infographic, drag-and-drop variable sort shells, menu-path decision trees without result tables).

## Excel Formula Verification (Before Building Excel-Output Sections)

If the section shows Excel output with computed values:

1. Cross-check all formula results against `BioEpi_dataset-package-map.md` (verified values listed per chapter).
2. Use the exact Excel function names from the chapter JS: `AVERAGE`, `MEDIAN`, `STDEV.S`, `VAR.S`, `QUARTILE.INC`, `COUNTIF`, `BINOM.DIST`, `NORM.DIST`, `NORM.S.DIST`, `T.TEST`, `CORREL`, etc.
3. If a formula value is not in the map, compute it from the known dataset values (e.g., mean bwt from `birthwt` = 2944.6 g) rather than estimating.
4. Formula bar mockups must show the exact Excel formula in `Courier New`, not a plain-language description.

---

## Core Workflow (Step-by-Step)

1. **Read `lesson_reference.md` first** (if uploaded): identifies production-standard interaction patterns and all critical code rules.
2. **Read `BioEpi_Rise360_design-system.md` next**: contains the full color palette (Navy/Blue/White UI plus Excel-green/SPSS-teal/R-purple triple software palette), typography, frame architecture, DOM structure, header rules, navigation model, and module format patterns (Sections 12.1–12.17).
3. **Identify the chapter context.** Each chapter uses a specific dataset set and has a scaffolding level (Guided / Semi-guided / Semi-independent / Independent). See `BioEpi_dataset-package-map.md` for exact dataset variable names and values.
4. **Identify the module format** from the build prompt and cross-reference against the format patterns in `BioEpi_Rise360_design-system.md` Section 12. If a format matches the lesson reference, replicate its implementation.
5. **Apply the triple-palette rule**: the module shell, header, buttons, and instructional UI use **Navy/Blue/White**. Any **Excel output** (spreadsheet tables, PivotTable, formula bar, chart builder dialogs) uses the **Excel panel theme** (green accent, `#217346` / `#E2EFDA`). Any **SPSS output** uses the **SPSS panel theme** (teal-green, `#1A7A6E` / `#D4EFEC`). Any **R code or console output** uses the **R panel theme** (dark code panel, purple accent, `#5B2D8E` / `#EDE7F6`). Excel always appears first.
6. **Build the header as a static, always-visible top band**: title, section label, and a short instruction line, part of the normal layout flow. No intro modal, no blur overlay, no "Start" button, no idle overlay.
7. **Navigation is always self-paced and unlocked.** The Next button on any sequential panel is **immediately clickable** — no reading timer, no wave-fill lock, no `cursor: not-allowed` gate.
8. **Build the single HTML file** following the mandatory DOM structure (Section 4 of design-system) and LMS completion logic (Section 9 of design-system).
9. **Output**: a single self-contained `.html` file (inline `<style>` and `<script>`), saved to `/mnt/user-data/outputs/` and presented via `present_files`.

---

## Key Differences from SSA

- **Triple software palette, not dual.** SSA had SPSS (teal) + R (purple). BioEpi adds Excel (green, `#217346`) as the primary entry-point tool. Excel appears first in every three-tool tab or comparison layout. The Excel panel mimics a spreadsheet look: grid cells, a formula bar with `fx` label, Calibri/Arial font, `#E2EFDA` header rows.
- **Excel is the priority tool for Chs 1–3 (Midterm, early).** In these chapters, the Excel tab opens by default, SPSS and R are secondary. From Ch 4 onward, all three tools get equal weight in their respective tabs.
- **Philippine public health context IS in Rise360 modules.** PH Dengue Surveillance dataset, DOH FHSIS examples, PSA vital statistics, PhilHealth, and NDHS references appear directly in Rise360 code blocks. This is the opposite of SSA policy (where Philippine data was F2F-only). The PH Dengue Surveillance dataset is a first-class Rise360 dataset for Chs 2, 4, and 6–7.
- **Epidemiology-specific module formats exist.** SSA modules were pure statistics (t-tests, ANOVA, regression). BioEpi adds epidemiology-specific patterns: Epi Curve Builder (Section 12.2), Bathtub Model Simulator (Section 12.3), Interactive 2×2 Calculator (12.4), PPV/NPV Prevalence Slider (12.5), Probability Tree Builder (12.6), Study Design Classifier (12.11). These have no SSA equivalent.
- **Different dataset roster.** BioEpi uses `esoph` and `infert` (base R), `birthwt` (MASS package), and the PH Dengue Surveillance instructor dataset — not `iris`, `airquality`, `penguins`, `mtcars`, or `gapminder`.
- **Scaffolding level changes by chapter** and is architecturally enforced in modules. Ch 1–3: completed outputs, labeled numbers, fill-in-the-blank interpretation sentences. Ch 4–5: partial templates with one completed example. Ch 6–7: rubric only, students write their own. Ch 8: minimal scaffolding, capstone communication emphasis.
- **Gold accent color for epidemiologic formulas and key points.** BioEpi uses `--gold` (#B8860B / #FFF3CC) as a third semantic accent (in addition to `--success`/`--warning`/`--error`) for callout boxes highlighting epi formulas (incidence, CFR, OR, Sensitivity), key clinical interpretation points, and APA sentence templates.
- **Audience is BS Medical Technology students.** Tone is supportive but precise, grounded in laboratory medicine and public health practice. Concepts are introduced via clinical scenarios first (a patient's test result, a dengue outbreak, a lab QC comparison) before formulas appear. Avoid purely mathematical framings without a clinical anchor.
- **No cross-chapter numeric continuity** in the same way as SSA (where Ch7–8 intentionally reused exact Ch5–6 statistics). BioEpi chapters are more self-contained, though the four anchor datasets recur.

---

## Storyboard Section Inventory

Use this to identify which chapter/lesson/section a build prompt belongs to and which module format and dataset to apply.

| Ch | Lesson | Week | Sections | Primary Dataset | Format Pattern |
|---|---|---|---|---|---|
| 1 | 1 | 1 | Course Roadmap; Biostatistics vs. Epidemiology; The Broad Street Cholera Map; Your Three Software Tools; Assessment Overview | — (conceptual) | Dashboard / Infographic |
| 1 | 2 | 2 | Sort the Variable; The Measurement Ladder; Philippine Health Data Sources; Sampling Methods Decision Tree; Meet Your Datasets: esoph & infert | esoph, infert | Drag-and-drop Sort; Decision Tree; Dashboard |
| 2 | 3 | 3 | Building a Frequency Table Step by Step; The Line Listing; Finding the Errors; Same Table Three Tools | birthwt | Step-by-Step Explainer; Three-Tool Tab Panel |
| 2 | 4 | 4 | Choosing the Right Chart; Building the Epi Curve; Spot the Misleading Chart; Gray-and-Highlight; Charts in Excel, SPSS & R | PH Dengue, birthwt, esoph | Decision Tree; Epi Curve Builder; Flip Cards; Three-Tool Tab Panel |
| 3 | 5 | 5 | Mean, Median, Mode — and When Each Lies; Spread: SD, Variance & IQR; Skewness & Shape; Descriptives Three Ways; Building Table 1 | birthwt | Flip Cards; Slider; Three-Tool Tab Panel |
| 3 | 6 | 6 | Probability Building Blocks; Addition, Multiplication & Complement Rules; Conditional Probability with esoph; Bayes' the Diagnostic Detective; Risk vs. Odds | esoph | Step-by-Step; Probability Tree; Flip Cards |
| 3 | 7 | 7 | The Binomial Distribution; The Normal Curve & Empirical Rule; Z-Scores in Practice; Is It Normal? (Q-Q Plots & Shapiro-Wilk); The CLT, Simulated | birthwt | Slider / Normal Curve Explorer; CLT Simulation; Three-Tool Tab Panel |
| 4 | 8 | 8 | Ratio, Proportion, Rate; The Bathtub Model; Epi Measures Calculator; CFR & Attack Rate; Philippine Data Sources Matched to Measures | PH Dengue | Step-by-Step; Bathtub Simulator; Three-Tool Tab Panel; Dashboard |
| 5 | 9 | 10 | Hypothesis Testing as a Courtroom Trial; Writing H0 and Ha; p-Value Misconceptions; Type I & II Errors; Confidence Intervals | birthwt (conceptual) | Step-by-Step Explainer; 2×2 Matrix (error types); Three-Tool Tab Panel |
| 5 | 10 | 11 | Choosing the Right t-Test; Assumption Checking; Interpreting the Output; Effect Size: Cohen's d; APA Results Sentence Builder | birthwt | Decision Tree; Three-Tool Tab Panel (annotated); Step-by-Step |
| 5 | 11 | 12 | Why Not Multiple t-Tests?; Reading the ANOVA Table; Post-Hoc Tests: Tukey HSD; Effect Size: η²; Kruskal-Wallis as Alternative | birthwt | Step-by-Step; Annotated Output; Three-Tool Tab Panel |
| 6 | 12 | 13 | The Chi-Square Test; The 2×2 Table; Relative Risk vs. Odds Ratio; Which Study Design — Which Measure?; Confidence Intervals for RR/OR | esoph, infert | Interactive 2×2 Calculator; Decision Tree; Three-Tool Tab Panel |
| 6 | 13 | 14 | Pearson r vs. Spearman ρ; Reading a Correlation Matrix; Simple Linear Regression; R-Squared; Logistic Regression Preview | birthwt | Slider / Scatterplot Explorer; Annotated Output; Three-Tool Tab Panel |
| 7 | 14 | 15 | Diagnostic vs. Screening Tests; The 2×2 Evaluation Table; Sensitivity & Specificity (SnNout/SpPin); PPV/NPV — Prevalence Changes Everything; ROC Curves & AUC | Diagnostic scenario | Interactive 2×2 Calc; PPV/NPV Slider; Three-Tool Tab Panel |
| 7 | 15 | 16 | Study Design Overview; Strengths, Limitations, Hierarchy of Evidence; Sampling Methods Revisited; Sample Size & Power; Bias & Confounding; Design → Test Matching | esoph, infert, birthwt | Study Design Classifier; Decision Tree; Comprehensive Matching Guide |
| 8 | 16 | 17 | Anatomy of a Research Paper; Reading the Methods & Results; Statistical Red Flags; Evidence Appraisal (PICO); Peer Review; From Reading to Writing | student capstone data | Flip Cards (red flags); Accordion; Step-by-Step |

---

## Quick Checklist Before Delivering Output

- [ ] **Read `lesson_reference.md`** (if uploaded) — identify which reference pattern matches this section's interaction type before writing any code
- [ ] Build mode confirmed: Mode A (from scratch, lean first pass) or Mode B (uploaded existing HTML)
- [ ] One section only (per user's "Chapter N Lesson N Section [name]" request); one HTML file output
- [ ] Checked `/mnt/user-data/uploads/` for that chapter's `chN_content.js` manuscript file and read it first if present
- [ ] If the section shows R output/statistics, ran the R simulation first and used the real computed values; pre-verified figures from `BioEpi_dataset-package-map.md` take precedence for cross-chapter consistency
- [ ] If the section shows Excel output, formula bar and cell values match `BioEpi_dataset-package-map.md` and use exact Excel function names
- [ ] Mode A first pass: output is intentionally lean (correct structure and data, working interactions, design system applied, minimal decoration)
- [ ] Mode B: read the uploaded HTML before editing; preserved what already works; made targeted edits only
- [ ] Single HTML file, inline CSS/JS, FontAwesome 6.4.0 via CDN, Inter (body) + Montserrat (headers) + Fira Code (R/console) via Google Fonts
- [ ] **Fira Code ligature suppression applied** — `font-variant-ligatures: none; font-feature-settings: "liga" 0, "dlig" 0, "calt" 0, "hlig" 0` at `body` AND on every Fira Code element — prevents `<-` rendering as left-arrow
- [ ] `.module-wrapper` max-width ~960px, white background (`var(--surface)`), top border in `var(--primary)` (dark navy)
- [ ] `.module-header` is a static, always-visible top band: title, chapter/lesson/section label, and instructions — NOT a modal, pop-up, or hover/click-to-reveal
- [ ] **Header eyebrow follows exact format: `Chapter [N] · [Lesson Title] · Section [N]`** — e.g., `Chapter 2 · Data Presentation in Epidemiology · Section 3`
- [ ] No `.alps-intro-screen`, `.content-blur`, `#idleOverlay`, `#reviewModal`, or tip/reminder bars
- [ ] **Next button is always immediately clickable — no timer lock, no wave-fill, no `cursor: not-allowed`**
- [ ] Any **Excel** output/table/dialog uses the Excel panel (green accent, `#217346` / `#E2EFDA`, Calibri/Arial font, formula bar)
- [ ] Any **SPSS** output/table/dialog uses the SPSS panel (teal-green accent, `#1A7A6E` / `#D4EFEC`, Arial/Tahoma font)
- [ ] Any **R** code/console uses the R dark code panel (purple accent, `#5B2D8E` / `#EDE7F6`, Fira Code font)
- [ ] **Excel tab is first** when three-tool tabs are used — tab order is always Excel → SPSS → R
- [ ] `.module-footer` hidden until interaction completes, animates in with `slideUp` keyframe
- [ ] **Completion banner** present: `background: #1F467A`, centered flex, "Section Complete! You are ready to proceed to the next topic." in Montserrat uppercase, pulsing `fa-circle-check`
- [ ] `markComplete()` guarded with `window._moduleComplete`, fires `window.parent.postMessage({ type: 'complete' }, '*')`, smooth-scrolls footer into view
- [ ] No external nav links; no "Next Lesson" or "Return to Dashboard" links
- [ ] Dataset, variable names, and statistical values match `BioEpi_dataset-package-map.md` for the relevant chapter
- [ ] **No placeholder statistics** — all values are real and verified
- [ ] Philippine public health context included where relevant (PH Dengue Surveillance data, DOH/PSA/PhilHealth/NDHS examples)
- [ ] Scaffolding level matches the chapter (Guided Ch1–3 / Semi-guided Ch4–5 / Semi-independent Ch6–7 / Independent Ch8)

---

## Reference Files

- `lesson_reference.md`: **read first before building any section if uploaded** — documents finalized production-standard HTML sections, maps each to a named interaction pattern, and lists all critical non-negotiable code rules (ligature suppression, completion banner, no-timer rule, Excel-first ordering, assignment operator display).
- `BioEpi_Rise360_design-system.md`: full color system (Navy/Blue/White UI plus Excel-green/SPSS-teal/R-purple triple software palette), typography, frame architecture, static header rules, DOM/component templates, module format patterns (Sections 12.1–12.17), and BioEpi-specific module types.
- `BioEpi_dataset-package-map.md`: per-chapter R dataset, Excel formula, SPSS menu path, and key-statistic reference so generated modules stay consistent with the `ch1–8_content.js` manuscripts and `BioEpi_Rise360_Storyboard.xlsx`.
- `BioEpi_Rise360_Storyboard.xlsx`: the master storyboard — Section Content build prompts in column K; section titles in column D; chapter and lesson structure.
- `chN_content.js` (chapter-specific, uploaded by user): the canonical Word-manuscript-derived JS file with exact narrative text, code snippets, verified statistics, and the `C` color object for that chapter.
