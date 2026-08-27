# Learning Journey Dashboard

A web-based presentation: cover screen → upload → live dashboard → 30-Day
Plan → closing screen. Built for Christopher Manjengwa's September 2026
board presentation. No backend, no database — the Active Projects
workbook is parsed entirely in the browser (SheetJS, vendored locally),
and charts render with Chart.js (also vendored locally — see "Why the
libraries are vendored" below).

## Flow

1. **Cover** — animated, mouse-reactive particle background. "Begin" →
2. **Upload** — drop `Daily_Service_Delivery_Dashboard.xlsx` (just needs
   its **Active Projects** sheet — the other sheets were removed on
   purpose and are no longer read). On a successful parse it auto-advances
   to the dashboard. There's also a "skip to the 30-Day Plan" link, since
   that tab doesn't need the upload at all.
3. **Dashboard tab** — Executive Overview KPIs, RAG chips, key findings,
   programme/training charts, risk trackers, and a filterable Active
   Projects table. Everything here is computed live from Active Projects.
4. **30-Day Plan tab** — two sub-views:
   - **Plan Overview**: the strategic plan document itself, presented
     section by section (purpose, roadmap, all 8 priorities, templates,
     weekly rhythm, KPIs, role, end-state) via a left-hand nav.
   - **Execution Tracker**: the plan's 67 actions as a live, filterable
     tracker — RAG and days-remaining recomputed against *today's* date,
     not hardcoded. This is embedded data (`js/data/september-actions.js`),
     not a second file upload.
5. **End Presentation** button (bottom-right, red, always visible in the
   app shell) → closing cover screen with a "Restart presentation" link.

## Why there's no more second file upload

The September Execution numbers used to come from a second workbook
(`September_dashboard.xlsx`). That file's Action Tracker is really just
the 30-Day Plan's own action list, operationalised with dates — so it's
now embedded directly as data instead of requiring a second upload on
presentation day. One less moving part, one less file to keep in sync.

## Why the risk trackers changed

The Recruitment/Training/Workplace Risk Tracker sheets were removed from
the workbook (only Active Projects remains). Since that manually-curated
risk narrative no longer exists as a data source, risk is now **computed**
from Active Projects' own dates and status fields:

- **Training Delay** — Programme Start Date has passed but training
  hasn't started.
- **Training Overrun** — Programme End Date has passed but training
  isn't marked Completed.
- **Workplace Transition** — Workplace Start Date has passed but the
  project hasn't moved to Workplace status (or training is done with no
  workplace date set at all).
- **Data Completeness** — missing Coordinator/Facilitator/Assessor, or a
  placeholder `PL9XX` ID.

**Heads up before presenting:** this computed view currently flags about
half of active projects Red, mostly on Workplace Transition. That's not
a bug — it means a lot of workplace-start dates in the sheet are already
in the past relative to today, which is a genuinely useful (if blunt)
finding. Worth a quick sanity pass on a few flagged rows before the
board sees it, in case some of those dates are simply stale rather than
truly overdue. There's no Recruitment Risk category anymore — that data
doesn't exist in Active Projects and isn't invented here.

## Why the libraries are vendored (not loaded from a CDN)

`js/vendor/xlsx.full.min.js` and `js/vendor/chart.umd.js` are the actual
library files, committed into the repo — not `<script src="https://...">`
tags. This is almost certainly what caused the "Could not read that
file" error on both tabs previously: if the CDN is blocked, slow, or
just not reachable at the moment someone opens the page, both `XLSX` and
`Chart` come back `undefined`, and the first thing that touches either
one throws — which the old code reported as a generic "bad file" error
instead of what was actually wrong. Vendoring removes that failure mode
entirely: the app works with no internet connection at all once loaded,
which matters for a live boardroom presentation.

## Deploying

1. Push this folder to a GitHub repo (as-is — nothing to build).
2. Vercel → **New Project → Import** the repo.
3. Framework preset: **Other**. Build command: none. Output directory: `.`
4. Deploy.

Re-deploy only when you change code. The presenter re-uploads the Excel
file live if numbers need refreshing — no redeploy needed for that.

## Structure

```
index.html                    4-screen shell (cover/upload/app/end)
css/styles.css                 design tokens, layout, screen transitions
js/vendor/xlsx.full.min.js     SheetJS, vendored (see above)
js/vendor/chart.umd.js         Chart.js, vendored (see above)
js/data/plan-content.js        static 30-Day Plan narrative content
js/data/september-actions.js   static 67-action list from the plan
js/utils.js                    sheet parsing, formatting, table builder
js/riskEngine.js               computed risk rules (see above)
js/coverCanvas.js              mouse-reactive particle background
js/parseServiceDelivery.js     Active Projects -> Dashboard tab
js/planPresentation.js         30-Day Plan -> Plan Overview sub-view
js/planExecution.js            30-Day Plan -> Execution Tracker sub-view
js/main.js                     screen flow, tab switching, file intake
```

Open `index.html` directly in a browser to test locally (works from
`file://` since everything is vendored — no CORS-blocked CDN calls).
