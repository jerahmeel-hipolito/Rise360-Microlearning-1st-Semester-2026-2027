# Dashboard Formulas — copy-paste ready

These reference the real Activity Log column letters as written by `Code.gs`'s `appendActivityRow()`:

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
| I | LessonID |
| J | LessonTitle |
| K | SessionID |
| L | AttemptNumber |
| M | Status |
| N | StartTime |
| O | EndTime |
| P | DurationSeconds |

Paste each formula into the cell noted, on the **Dashboard** tab. Each spills its own results downward and to the right — don't pre-format a table, just click the cell and paste.

**A note on syntax:** `QUERY()` uses the Google Visualization Query Language, which looks SQL-like but is its own thing — notably, it does **not** support `CASE WHEN`. Anywhere you need "count of X split by status," the right native tool is `pivot`, which breaks one aggregate into separate columns per distinct value of another column. That's what's used below instead of conditional aggregation.

## 1. Per-lesson attempts, split by status

**Cell A1:**
```
=QUERY('Activity Log'!A:P, "select G, J, count(M) where M is not null group by G, J pivot M", 1)
```

This returns one row per lesson (course name, lesson title), with **separate columns automatically created for each status value** — you'll get a "Completed" column and an "Incomplete" column side by side, each showing the count for that lesson. This is the cleanest native way to get both numbers without writing conditional logic GViz doesn't support.

To get a completion rate next to it, add a helper formula referencing whichever two columns the pivot produced (check the actual output — pivot column order follows alphabetical order of the distinct values, so "Completed" will come before "Incomplete"):

**In the column right after the pivot output spills (adjust the column letter to match where it actually lands):**
```
=ARRAYFORMULA(IF(C2:C="","", C2:C/(C2:C+D2:D)))
```
Format as a percentage (Format → Number → Percent). This divides Completed by (Completed + Incomplete) for each row.

## 2. Per-student attempts, split by status

**Cell A20** (leave a gap below block 1, since you don't know exactly how wide the pivot output above will be):
```
=QUERY('Activity Log'!A:P, "select B, C, E, count(M) where M is not null group by B, C, E pivot M", 1)
```

One row per student (ID, name, section), with Completed/Incomplete counts as separate columns. Sort by the Completed column ascending to see who's furthest behind.

## 3. Average completion time per lesson

```
=QUERY('Activity Log'!A:P, "select G, J, avg(P) where M='Completed' group by G, J label avg(P) 'Avg Seconds'", 1)
```

This one's a normal aggregate with a simple `where` filter (no conditional logic needed), so it's straightforward GViz and doesn't need a pivot. `P` is `DurationSeconds`, so results are in seconds — add a helper column next to it if you'd rather read minutes:
```
=ARRAYFORMULA(IF(C2:C="","", TEXT(C2:C/60, "0.0")&" min"))
```

## 4. Total attempts and completions per course (rolled up, not per-lesson)

```
=QUERY('Activity Log'!A:P, "select G, count(M) where M is not null group by G pivot M", 1)
```

Same pivot pattern as block 1, but grouped by course only instead of course+lesson — gives you the three-course rollup.

## 5. Section/program comparison

```
=QUERY('Activity Log'!A:P, "select E, G, count(M) where M is not null group by E, G pivot M", 1)
```

Breaks engagement down by Section × Course with Completed/Incomplete as separate columns — useful if you teach the same course across multiple sections and want to compare them.

## 6. Students who haven't touched anything yet

This can't be a single `QUERY` since it needs to compare against the full roster, not just what's already logged — `QUERY` only ever sees rows that exist, so a student with zero activity simply has no row to find. Use a `FILTER` against the roster instead, in a fresh area of Dashboard:

```
=FILTER('Student Roster'!A2:B, COUNTIF('Activity Log'!B:B, 'Student Roster'!A2:A)=0)
```

Lists StudentID and StudentName for anyone in the roster with zero Activity Log rows at all.

## Testing these before relying on them

A note on how confident to be in these: I checked each query string for valid GViz clause ordering, balanced quotes, and confirmed `pivot` (not `case when`) is the right tool — but I can't actually run these against a live Google Sheet from here, since I don't have access to your Sheet or a Google account. Treat these as "should work, verify on first use," not "guaranteed." If one throws an error, the Sheet's own error message is usually specific enough to fix directly (e.g. it'll tell you if a column letter or clause is invalid).

`QUERY` over a genuinely empty Activity Log (no attempts logged yet) will return an empty result rather than a zero — that's expected, not a bug. Before trusting any of these, log at least one real attempt first: open any lesson on the live site and use the placeholder's "Simulate lesson completion" button (or complete a real Rise lesson once you've swapped one in), then check the Activity Log tab got a new row, then come back and paste these formulas. If a formula still shows `#VALUE!` after that, the most likely cause is a typo in a column letter — double check it against the table at the top of this file, since adding or reordering a column anywhere upstream (in `Code.gs`'s `appendActivityRow`) shifts every letter after it.
