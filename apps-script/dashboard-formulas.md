# Dashboard — how it's built and what it shows

**As of this build, the Dashboard tab builds itself.** Running `setupSpreadsheet()` (or manually running `buildDashboardSheet()`) writes all six blocks below directly into the **Dashboard** tab as live formulas — nothing here needs to be copy-pasted by hand anymore. This file now documents what got written and why, so you can read/adjust the Dashboard confidently instead of treating it as a black box.

Re-running `setupSpreadsheet()` (safe to do any time) refreshes these formulas in place. It never touches the Activity Log or any other tab.

## Column letters these formulas assume

Matches `appendActivityRow()` in `Code.gs` exactly — if you ever add or reorder an Activity Log column, update both:

| Col | Field |
|---|---|
| A | Timestamp |
| B | StudentID |
| C | StudentName |
| D | Program |
| E | Section |
| F | CourseID |
| G | CourseName |
| H | ChapterID |
| I | **ChapterTitle** (new — see "What changed" below) |
| J | LessonID |
| K | LessonTitle |
| L | SessionID *(dedup key — `ACTIVITY_LOG_SESSION_ID_COL` in Code.gs)* |
| M | AttemptNumber |
| N | Status |
| O | StartTime |
| P | EndTime |
| Q | DurationSeconds |

## Why six blocks are laid out side-by-side, not stacked

Each block's formula output grows downward as the Activity Log grows (more lessons, more students, more sections) — there's no way to know in advance how many rows any one block will need. Stacking them vertically means a bigger class or a busier semester eventually makes one block's output spill into the label of the block below it. Laying them out in separate **column bands** instead (block 1 in columns A–C, block 2 in F–H, and so on, each separated by at least one blank buffer column) means growth is always vertical *within* a band and can never collide with the band next to it, no matter how large the Activity Log gets.

## The six blocks

**1. Per-Lesson Completion by Status** (columns A–C, header row 1, formula row 3)
```
=QUERY('Activity Log'!A:Q, "select K, count(K) group by K pivot N label count(K) 'Attempts'", 1)
```
One row per lesson title, with a separate `Completed` and `Incomplete` column created automatically by `pivot N` (see the CASE WHEN note below).

**2. Per-Student Progress (Completed Lessons)** (columns F–H)
```
=QUERY('Activity Log'!A:Q, "select B, C, count(K) where N = 'Completed' group by B, C order by count(K) desc label count(K) 'Completed Lessons'", 1)
```
One row per student, sorted with the most lessons completed first — flip to `asc` if you'd rather see who's furthest behind at the top.

**3. Average Duration per Lesson, Completed only** (columns J–K)
```
=QUERY('Activity Log'!A:Q, "select K, avg(Q) where N = 'Completed' group by K label avg(Q) 'Avg Duration (sec)'", 1)
```
`Q` is `DurationSeconds`. Add a helper column next to the output if you'd rather read minutes: `=ARRAYFORMULA(IF(B4:B="","",TEXT(B4:B/60,"0.0")&" min"))` (adjust the row/column reference to wherever this block's output actually lands).

**4. Course-Level Rollup by Status** (columns M–O)
```
=QUERY('Activity Log'!A:Q, "select G, count(K) group by G pivot N label count(K) 'Attempts'", 1)
```
Same pivot pattern as block 1, grouped by course instead of lesson — the three-course summary.

**5. Section Comparison by Course** (columns Q–T)
```
=QUERY('Activity Log'!A:Q, "select E, G, count(K) group by E, G pivot N label count(K) 'Attempts'", 1)
```
Useful if the same course runs across multiple sections and you want to compare engagement.

**6. Students with Zero Activity** (column V)
```
=FILTER('Student Roster'!A2:B, COUNTIF('Activity Log'!B2:B, 'Student Roster'!A2:A) = 0)
```
This is the one block that **can't** be a `QUERY` — `QUERY` only ever sees rows that already exist in the Activity Log, so a student with zero logged attempts simply has no row for it to find. This is a plain spreadsheet `FILTER`/`COUNTIF` anti-join against the Student Roster instead, which is why it's syntactically different from the other five.

Every formula is wrapped in `IFERROR(..., "No activity logged yet.")` (or the roster-specific equivalent) so a brand-new, empty Activity Log shows a clear message instead of a `#VALUE!` error before the first real attempt is logged.

## A note on "CASE WHEN"

An early draft of these formulas used SQL-style `CASE WHEN` inside `QUERY()`. That is **not valid** in Google's Visualization Query Language — GViz looks SQL-like but is its own dialect, and `CASE WHEN` isn't part of it. Every "split a count by status" formula above uses `pivot N` instead, which is the native GViz way to break one aggregate into separate columns per distinct value of another column (here, `Status`, which is always exactly `Completed` or `Incomplete` per `validatePayload()` in `Code.gs`).

## What changed since the previous version of this file

The previous version of this file was a set of copy-paste instructions only — the Dashboard tab itself was created empty by `setupSpreadsheet()`, so a fresh spreadsheet had no working dashboard until an instructor manually pasted formulas in. Three things changed:

1. **The Dashboard now builds itself** via `buildDashboardSheet()`, called automatically from `setupSpreadsheet()`.
2. **A `ChapterTitle` column (I) was added** to the Activity Log, and every column letter from I onward shifted by one versus the previous version of this file (`SessionID` moved from K to L, `DurationSeconds` from P to Q, etc.) — this is part of the same fix described in `Code.gs` for the ChapterID/LessonID/LessonTitle accuracy bug (see `PROJECT_CONTINUITY.md`).
3. **Layout changed from stacked to side-by-side** blocks, for the collision reason explained above.

## Testing these before relying on them

Every formula here was checked for valid GViz clause ordering, balanced quotes, and correct column letters against `appendActivityRow()` — but, like the rest of this codebase, it has not been executed against a live Google Sheet, since this environment has no way to open a real Sheet or Google account. Treat it as "should work, verify on first use." Log at least one real attempt first (open any lesson and use the placeholder's "Simulate lesson completion" button, or complete a real Rise lesson once one is swapped in), confirm a new row lands in the Activity Log, then check the Dashboard tab picks it up. If a formula shows an error after that, the Sheet's own error message is usually specific enough to fix directly — most likely cause is a column letter mismatch if `Code.gs`'s column order was edited without updating this file to match.
