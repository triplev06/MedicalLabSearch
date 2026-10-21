# Research Atlas

A nationwide research laboratory discovery and application workspace. Built with React, TypeScript, Vite, Tailwind CSS, shadcn-style owned Radix primitives, Lucide, dnd-kit, Dexie/IndexedDB and Recharts. The app runs entirely in the browser; no account, backend, database service, paid API or resume upload is required.

## Run locally

Use **Node.js 24 LTS** and npm. `.nvmrc` and `package.json` identify the deployment runtime. Older odd-numbered Node releases may produce dependency engine warnings.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite (normally http://127.0.0.1:5173).

```sh
npm run lint
npm run typecheck
npm test
npx playwright install chromium
npm run test:e2e
npm run build
npm run preview
```

Playwright runs Chromium at desktop and Pixel 7 viewport sizes. It exercises discovery, combined filtering, saving, comparison, application movement, editing, reload persistence, themes, export/restore and responsive navigation. Desktop tests exercise pointer dragging; both sizes exercise the explicit status control. Axe checks WCAG A/AA rules on each primary route. Unit/integration tests use real Dexie with fake-indexeddb, and test ranking, deadlines, filtering, status history, duplicates and backup rejection. Automated accessibility checks supplement keyboard and visual review; they cannot certify all accessibility requirements.

## Deploy on Vercel

1. Commit the application files to your own repository. Check `git status` first: private references must remain ignored.
2. Import the repository into Vercel and select its root as the project root.
3. Use the Vite framework preset, Node.js **24.x**, build command `npm run build` and output directory `dist`.
4. Deploy. No environment variables, server functions or external database are needed.
5. Verify `/discover`, `/tracker` and `/labs/meyerson` directly in a fresh tab. `vercel.json` supplies SPA routing and basic response headers.

The architecture uses static hosting and is compatible with the Hobby tier. Vercel account/deployment actions are separate from building this repository; this project does not claim to have been published automatically. See [Vercel Node.js versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions) for runtime availability.

## What is included

- Dashboard with fit-focused recommendations, prominent verified-deadline section, follow-ups, recent status activity, stage and submission charts, and interview/offer milestones.
- Discover with search, public bookmarkable filter URLs, multiselect states, nationwide reset, field/institution/availability/experience filters, prestige bounds, fit threshold, deadline windows, eight sort modes and local status/favorite/priority filters. Entry-route, compensation, audience, hours and minimum-duration filters combine with these controls.
- Source-backed laboratory profiles with role-specific availability, requirements, qualification gaps, contacts where verified and official links.
- Comparison of two or more labs, including research context, eligibility, location and application process.
- Six-stage tracker with dnd-kit pointer/keyboard support and an explicit Move to control. Desktop uses a horizontal board; phone layouts stack stages vertically for dependable focus and tap behavior. Notes, dates, priorities, favorites, contact records, communication notes, status timelines and events persist locally.
- System/light/dark appearance, responsive navigation, reduced-motion styling, accessible Radix dialogs, and JSON backup/restore.

## Published catalog and verification

`src/data/labs.ts` assembles **366 official-source entries across 33 states**, checked on **October 21, 2026**: 362 laboratory groups and four clearly identified OhioHealth clinical research/training programs. This stable checkpoint contains **165 of the requested 300 entry-pathway additions**; the remaining 135 are still being researched. The catalog balances advertised technician/assistant roles with inquiry and monitoring targets. Geographic coverage is nationwide in scope, not exhaustive of all states or research fields.

The Ohio/Chicago expansion added 14 OSU Wexner/James labs, 11 Nationwide Children's labs, 25 Cleveland Clinic labs, three additional Case Western Reserve labs, 12 UChicago labs, four Northwestern labs, two Rush labs, two Loyola labs and four OhioHealth programs. A further **100 distinct labs across 18 major metros** cover western/midwestern, northeastern and southern research centers. Original stable IDs remain unchanged. The earlier release contained 29 Columbus entries and 58 Ohio entries; subsequent entry-pathway batches expand this coverage. Research modules live in `src/data/catalog/` and remain separate from browser-private tracking records. See [nationwide selection and economic-area evidence](docs/research/nationwide-selection.md) for the original city distribution, sources and interpretation of the location preference.

Discover includes Columbus, Ohio and Chicago regional shortcuts, a city selector, multi-state filtering and city-aware text search. All represented states appear automatically using a full U.S. state-name map. Region, research query and other filters combine; public city/state selections can be bookmarked without sharing private notes or application statuses. Equivalent research-field labels are normalized across modules. Discovery shows 24 initial cards and an accessible Show more control; filtering or reranking resets the batch while the total match count remains visible.

Availability totals as verified: **37 confirmed role/training advertisements, 143 inquiry pathways, 184 research-interest targets and two explicitly closed technician routes**. Research-interest entries do not establish job vacancies. OhioHealth clinical trial pages describe research programs, not staff recruitment; its externship has enrollment restrictions and no verified upcoming cycle deadline.

Each record contains stable ID, PI, institution, location, research fields, official URL(s), verified contact or `null`, source evidence/claim categories, verification date, requirements, experience/eligibility caveats, application method and editorial fit/prestige assessments. Never infer a position from an existing lab page or a staff list.

Availability is specific to the relevant assistant/technician or inquiry pathway:

| Category                   | Meaning                                                                                                                           |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Confirmed opening          | An official page explicitly advertises a relevant role as of verification. It can still change after verification.                |
| Accepting inquiries        | The group invites inquiries or student engagement; a paid vacancy is not established.                                             |
| Lab of interest            | Relevant science, but no suitable opening confirmed. Some pages advertise only doctoral roles, flagged as an eligibility barrier. |
| Closed / no suitable opening | An official source explicitly states the relevant route is closed or unavailable. Separate postdoctoral openings do not change this category. |

The entry-pathway expansion includes verified fixed deadlines. Closing Soon calculates the next sixty days dynamically; its empty state appears when no confirmed date falls within that window. Unknown deadlines remain intentional. Tests also exercise fixed, rolling, unknown and expired dates with fixtures that are never production opportunities.

### Finding a first research role

**First research role** selects documented routes, excludes institution-only programs, known part-time roles and documented minimum commitments over twelve months, and sorts confirmed paid staff roles first. It keeps the chosen scientific-fit threshold and geography. Roles with unspecified hours or duration remain visible with explicit uncertainty; use **Verified full time** and **Verified up to 12 months** for stricter evidence. The shortcut changes the public view without overwriting saved ranking preferences.

A documented inquiry is permission to ask about capacity, not proof of a paid vacancy or likely acceptance. Compensation is paid only when an official source says so. Public restrictions, required skills and preferred skills remain visible separately. The dataset includes no applicant citizenship, original résumé text or identifying details.

`pathway` evidence records the route, compensation, applicant audience, hours, minimum commitment and official source. Existing labs default to **Entry route unverified** until reviewed; a high fit score never establishes accessibility. Every new route must have a matching availability/requirements source claim. Do not pad expansions with closed programs, institution-only undergraduate routes or old mentor lists that do not fit the intended applicant.

To refresh the catalog:

1. Open the official lab/recruitment pages, verify the research and exact role, and confirm location, PI and contacts.
2. Update `sources`, concise paraphrased `evidence`, `verified`, `availability` and requirements. Label unknown information explicitly.
3. Add a fixed date only when the source verifies it; add a `deadline` source claim. A missing date is `unknown`, never automatically `rolling`.
4. Reassess suitability and explanation when role requirements change. A doctoral role must not hide behind a high fit score.
5. Keep IDs stable so local applications continue to join the public catalog. Do not remove IDs without a migration strategy for existing backups.
6. Run catalog/domain tests and the build; check real external links manually. HTTP success alone does not confirm recruitment.

## Recommendation rubric

Version 2 replaces inflated aggregate guesses with explicit 0–4 evidence reviews for every lab. Fit weights are research alignment 25, demonstrated methods 30, academic preparation 15, experience-level suitability 20 and transferable workflow 10. Unknown role prerequisites cap fit at 75; generic-only methods or indirect interests cap it at 55; known unmet prerequisites cap it at 40. Optional advantages are distinguished from mandatory requirements. Lack of prior lab employment is not an automatic disqualification.

The UI labels the second index **Prestige evidence**. It weights documented impact 40, resources 25, mentorship 20 and collaboration 15. A famous institution earns no automatic bonus. Missing documentation can lower this evidence index without establishing poor quality or weak overall reputation. Profiles show each awarded evidence level, weighted contribution, explanation and cap. All reviews remain editorial, not validated probabilities or official rankings.

Twelve additional regional-institution and adjacent-field labs broaden the research mix. Current observed fit spans 25–85 (three labs at 80+); prestige evidence spans 20–75. No target distribution, percentile rescaling or arbitrary score multiplier is applied. See [complete criterion anchors, caps and audit](docs/research/scoring-rubric.md).

```text
Combined recommendation = fit × fitWeight + prestigeEvidence × (1 − fitWeight)
Default: 60% fit / 40% prestige evidence; minimum fit: 50
```

The minimum slider displays points out of 100. **Explore all fit levels** sets the public view to zero without overwriting the saved minimum. Sliders continue to save explicit preference changes. Public filter URLs override saved preferences for that bookmarked view. Eligibility barriers and availability remain separate. Dashboard recommendations exclude closed/expired and explicitly restricted tracks; all records remain inspectable in Discover. Comparisons explain tradeoffs rather than declare an objectively superior lab.

## Deadline policy

Date-only deadlines use the visitor's local calendar day, including the entire stated date. Calendar arithmetic uses UTC day ordinals to avoid daylight-saving hour errors. If an official cutoff time/timezone exists, check the source before applying: the current schema stores dates, not precise time instants. Within seven calendar days is urgent; within fourteen is approaching; later is normal. Expired opportunities do not enter Closing Soon or dashboard recommendations. Deadline windows include today through the chosen horizon. Personal follow-ups are explicitly separate and never substituted for official deadlines.

The app refreshes date calculations each minute while open. Follow-up reminders are visible only when visiting the site; there are no background, email or closed-browser notifications.

## Browser-local data and backups

Dexie stores applications and preferences in the `research-atlas` IndexedDB database. A unique lab-ID key prevents duplicate applications. Every changed status appends an event; corrections preserve earlier events. Moving to Applied records an application date if absent. Submission charts count the first submission per laboratory, not every correction.

Export downloads a versioned JSON backup containing notes, contacts, history, preferences and comparison selections. **Backups contain private information: store them privately.** They are not uploaded by the application.

Restore validates the app marker, schema version, catalog IDs, dates, enums, lengths and duplicate identifiers before writes. Files must be under 5 MB. A preview requires confirmation. Matching records take the backup's scalar fields; history/contact events merge by event ID. Identical events deduplicate; conflicting content under an existing event ID rejects the entire restore to preserve history. Existing records absent from the backup remain. Status changes caused by restore append a correction event. Merged records are validated and the complete restore occurs in one Dexie transaction; failures roll back all changes. Restore never imports laboratories. Restore and reset errors remain visible inside their dialogs for retry.

Data does **not** synchronize across browsers, origins, devices or Vercel preview deployments. Browser clearing, private-mode restrictions or eviction can remove it. Export regularly and restore on the intended origin. This is not encrypted storage; another person using the same browser profile can access its data.

## Privacy boundaries

The original reference document stays outside `public` and is excluded through `.gitignore`, along with document formats and private notes. The frontend includes only broad skill/interest categories and necessary matching explanations. No name, private email/phone/address, education/employment chronology, publication title or original resume text is intentionally included. There is no resume uploader or remote matching API.

The catalog, broad qualification profile and generated scores are public deployment assets. Personal applications, notes, contacts and preferences are local. Public discovery URL parameters omit private status/favorite/priority selections. No analytics or tracking service is integrated. Official source links and email links open only on user action.

## Code organization

| Directory        | Responsibility                                                         |
| ---------------- | ---------------------------------------------------------------------- |
| `src/data`       | Published lab catalog and minimized qualification categories           |
| `src/domain`     | Runtime schemas, types, ranking, filters, deadlines, analytics         |
| `src/storage`    | Dexie schema, transactional tracking and backup logic                  |
| `src/app`        | Routes, shell, error boundary and reactive local state                 |
| `src/components` | Shared cards, scores, editor, charts and owned shadcn-style primitives |
| `src/pages`      | Dashboard, directory, profiles, board, comparison and preferences      |
| `src/test`       | Unit and integration tests                                             |
| `tests/e2e`      | Complete browser workflows and accessibility checks                    |

Superpowers guided design, planning, test-driven implementation, debugging and verification. ECC skills are not used for this project.
