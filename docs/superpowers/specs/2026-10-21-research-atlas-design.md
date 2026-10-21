# Research Atlas design

## Purpose and acceptance criteria

Build the full application specified in the project brief: a nationwide research laboratory directory with explainable recommendations and a private, persistent application workflow. The supplied résumé supports a profile oriented toward molecular biology, oncology, translational research, and clinical research. It documents actual bench experience; entry-level eligibility must not be confused with absence of experience.

All requested pages and controls must function. Completion requires successful lint, type checks, unit/integration tests, representative browser tests, production build, responsive and accessibility review, and a privacy review of source and generated assets. Deployment targets Vercel Hobby without a backend or paid API.

## Architecture and alternatives

Recommended: a static React/TypeScript/Vite SPA, curated version-controlled catalog, and Dexie IndexedDB for private records. It satisfies the requested stack and gives explicit boundaries between public research data and local activity.

A server-backed application would enable synchronization but adds infrastructure outside the initial scope. A localStorage-only implementation would be simpler but does not satisfy the requested structured persistence and transactional restore behavior. Neither alternative is selected.

Use React Router for Dashboard, Discover, Tracker, Compare, Preferences, and stable lab detail URLs. Use Tailwind, shadcn/ui primitives, and Lucide for a consistent interface. Use dnd-kit for board interactions and Recharts for compact analytics. Keep domain functions independent of React.

## Published and private data

Published lab records have stable IDs, institution, PI, field, research description, city/state, official URLs, verified contacts where available, source-specific evidence, verification date, availability, requirements, eligibility caveats, deadline type, and development-generated fit/prestige assessments.

Only broad qualification categories may appear publicly. Exclude the original résumé, identifiers, education institutions/dates, former employers, and publication titles. Do not transmit résumé content to research services. Generic research searches use scientific interests and techniques only. Private references remain ignored by Git and outside public assets.

IndexedDB stores one tracking record per catalog lab ID, status, priority, favorite, notes, application date, follow-up date, contact records, communication notes, events, and append-only status history. Preferences and comparison selections persist separately. Unknown or invalid lab IDs cannot create new curated records.

## Research integrity and matching

Research official sources nationwide, balancing specialist institutes, hospitals, medical centers, and universities. Initial research already identifies official technician recruitment and inquiry pages; further verification and geographic breadth remain required before catalog release.

Availability has four explicit categories: confirmed open, accepting inquiries, interest only, closed. Page existence alone cannot establish availability. Unknown deadline is distinct from rolling; no stated deadline never implies rolling. Closed and expired entries remain inspectable but do not appear as actionable recommendations.

Fit assessment explains interest alignment, documented bench skills, academic foundation, transferable clinical/manuscript skills, gaps, experience suitability, and hard eligibility restrictions. Unknown citizenship, work authorization, time commitment, and enrollment eligibility remain unknown. Do not infer them from schooling.

Prestige is an editorial rubric grounded in sourced research environment, relevant specialization, scientific output and training resources. Use coarse score increments and explain limited numerical precision. Neither fit nor combined scores represent acceptance probability.

Combined score = fit × fitWeight + prestige × (1 − fitWeight). Defaults are 0.6 fit weight and minimum fit 50. Hard eligibility flags remain visible independently of scores.

## Interface and behavior

Use a restrained warm-neutral interface with an ink/navy accent, spacious cards, clear typography, desktop sidebar, mobile navigation, and system/light/dark themes. Keyboard focus and reduced motion are first-class behaviors.

Dashboard balances top recommendations with a prominent Closing Soon panel, tracking totals, due follow-ups, recent history, status distribution, and submission activity. Empty deadline panels explain when no verified upcoming fixed deadlines exist. They never display fabricated dates.

Discover combines text search, multiselect states with nationwide reset, field, institution, fit threshold, prestige range, availability, deadline window, local application status, favorites, priority, and supported experience eligibility. Implement all requested sorting modes. Public filters may be encoded in URL parameters; private status/favorite/priority values stay local.

Lab detail presents all research metadata, evidence, strengths/gaps, eligibility flags, scoring explanations, and real official links. Save creates a unique tracker record immediately. Favorite, priority, comparison selection, and tracker controls work across views.

Comparison supports two or more labs, score and qualification comparisons, research environment, location, availability, deadlines, and application methods. Explain tradeoffs instead of naming an objective winner. Use horizontal scrolling or stacked rows on small screens.

Tracker stages are Saved, In Progress, Applied, Interview, Offer, Rejected. Dragging and a labeled move menu use the same transition function. Every changed status appends history, including corrections. Editing notes/dates/contact events persists and exposes saving failures. Removing a saved record requires deliberate confirmation because it removes private tracking details.

Preferences includes ranking controls, theme, storage limitations, validated JSON backup export/restore, and deliberate local-data reset. Restore validates schema/version, IDs, dates, length limits and record uniqueness before transactional writes. Preview affected record counts; merge duplicates by lab ID using explicit replacement behavior and preserve existing history through deduplication. Backup cannot import labs. Report invalid files without partially changing the database.

## Deadlines and reliability

Use calendar-day arithmetic with an explicit documented deadline timezone policy; date-only deadlines remain actionable through their stated calendar date. Within seven days is urgent, within fourteen approaching, beyond fourteen normal. Windows include today through their selected horizon. Unknown/rolling entries do not enter fixed-deadline windows. Personal follow-ups never masquerade as official deadlines.

The SPA provides loading, empty and failure states, an error boundary, persistent-write errors, accessible labels, announcements for tracker moves, focus-managed dialogs, and responsive navigation. Storage failures must not silently discard edits. Reminders exist only while visiting the application.

## Verification and deployment

Use Vitest/React Testing Library and fake-indexeddb for domain and persistence behavior. Test weighted ranking, sliders, combined filters, states, date boundaries, rolling/unknown/expired cases, eligibility flags, status history, duplicates, favorites, notes/dates, backup validation/transactionality, comparison and navigation.

Use Playwright for discovery to saved application to edited notes/status to refresh persistence, backup restore, comparison, keyboard movement, mobile navigation and theme. Validate catalog schemas and official source metadata. Manually inspect desktop/mobile light/dark views and investigate browser errors.

Vercel builds with npm run build and publishes dist, with SPA rewrites. Document npm setup, verification commands, data refresh process, score rubric, local storage limitations, privacy boundaries and deployment steps.

## Review checklist

- Repository inspected: contains only a private résumé and an empty Git history.
- Résumé read locally; no original text written to application assets.
- Initial official-source research started; full catalog verification remains implementation work.
- No product code or dependencies installed before design review.
- Scope and data boundaries reviewed against the full user specification.
- Implementation plan and execution selection follow written-design approval under the requested Superpowers workflow.
