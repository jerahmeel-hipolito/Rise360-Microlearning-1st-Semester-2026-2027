# Apps Script Backend

`Code.gs` is the entire backend. There's intentionally only one file — this project doesn't need more than one script file at this scale, and splitting it up would just add navigation overhead for a single maintainer.

## Setup, step by step

1. Create a new Google Sheet (or use an existing one) — this becomes your analytics spreadsheet.
2. In that Sheet, open **Extensions → Apps Script**.
3. Delete the default empty `Code.gs` content and paste in this folder's `Code.gs` in full.
4. In the Apps Script editor's function dropdown (top toolbar), select `setupSpreadsheet`, then click **Run**. The first run will prompt you to authorize the script — approve it (it needs permission to edit the spreadsheet it's bound to).
5. Go back to your Sheet — you should now see six tabs: Student Roster, Course Catalog, Lesson Catalog, Activity Log, Dashboard, Settings. Course Catalog will have all 3 real courses (`biostatistics`, `ssa`, `ama`) and Lesson Catalog will have all **53 real lessons** across all 3 courses' full chapter/lesson masterlist already filled in (see `PROJECT_CONTINUITY.md` for the complete list). Student Roster gets exactly one sample test row (`TEST-0001`) — your real class roster has to be entered by hand, it's never guessed.

   **The Dashboard tab now builds itself** — `setupSpreadsheet()` calls `buildDashboardSheet()` automatically, which writes six live formula blocks (per-lesson completion by status, per-student progress, average completion time, course rollup, section comparison, and students with zero activity) laid out side by side so they can't collide as the Activity Log grows. See `dashboard-formulas.md` in this same folder for what each block does and why it's laid out that way — nothing there needs to be copy-pasted anymore, it's just documentation now.
6. Back in the Apps Script editor, select `testDoPostManually` from the function dropdown and **Run** it. Check **View → Logs** — you should see `{"success":true,"message":"Activity logged."}`. Check the Activity Log tab — you should see one new row using the `TEST-0001` sample student.
7. Once that works, deploy it as a real web app: **Deploy → New deployment**. Click the gear icon next to "Select type" and choose **Web app**.
   - **Execute as:** Me
   - **Who has access:** Anyone
8. Click **Deploy**, authorize again if prompted, and copy the **Web app URL** it gives you.
9. Paste that URL into `js/api.js` → `Api.ENDPOINT_URL` in the main site repo.

## After any future code change

Editing the script in the Apps Script editor does **not** automatically update what the live deployed URL serves. You must either:
- **Deploy → Manage deployments → (pencil icon on existing deployment) → New version**, or
- Create an entirely new deployment and update the URL in `api.js` again.

Forgetting this step is the single most common reason "I fixed the bug but it's still broken" happens with Apps Script web apps — the live URL is still running the old code until you push a new version.

## Replacing the sample test data

The Course Catalog and Lesson Catalog are pre-filled with your real 3 courses and 53 lessons — nothing to replace there unless content changes (see `js/course-catalog.js` covers exactly this masterlist; if you add a lesson later, update `data/catalog.py` and re-run `python3 generate_lessons.py`, then re-run `setupSpreadsheet` here so the Lesson Catalog picks up the new row). The only thing you must replace is the Student Roster's single `TEST-0001` placeholder row: delete it and enter your real class roster (StudentID, StudentName, Program, Section — one row per student). `setupSpreadsheet`/`seedRowsIfMissing` never duplicate or overwrite a row whose ID already exists, so it's always safe to re-run later if you add a new lesson and want the helper to fill in any catalog rows you haven't added by hand yet.

## Testing the live deployed URL directly (without touching the website)

```bash
curl -X POST "<your-deployed-web-app-url>" \
  -H "Content-Type: text/plain" \
  -d '{"timestamp":"2026-06-27T09:30:00Z","studentId":"TEST-0001","sessionId":"curl-test-001","courseId":"biostatistics","chapterId":"biostatistics-CH01","lessonId":"biostatistics-L01","attemptNumber":1,"status":"Completed","startTime":"2026-06-27T09:18:00Z","endTime":"2026-06-27T09:30:00Z","durationSeconds":720}'
```

If this works but the real website doesn't, the bug is in the frontend (`js/api.js`'s URL or the deployment's access settings), not in `Code.gs`.

## A note on courseId/chapterId/lessonId format

`courseId` is the URL folder name (`biostatistics` / `ssa` / `ama`), and `chapterId`/`lessonId` are globally-unique composite IDs the frontend builds itself from the URL (`js/tracking.js`'s `deriveLessonMetadata`) — e.g. `biostatistics-CH03` / `biostatistics-L05`. An earlier version of this project sent bare numbers ("01", "02"...) for chapter/lesson IDs, which collided across courses (every course's chapter 1 is "01") and caused the wrong lesson's title to get logged. If you're extending this backend, keep IDs globally unique — don't reintroduce bare per-course numbering as a primary key.
