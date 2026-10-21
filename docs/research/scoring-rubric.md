# Research Atlas scoring rubric — version 2

Reviewed October 21, 2026. Scores are development-reviewed evidence indexes, not acceptance percentages, institutional rankings or validated predictive measurements. Changing ranking weights does not change the underlying criterion reviews.

## Why calibration changed

The previous catalog assigned at least 80 fit points to 166/189 labs, while 126/189 prestige values were 90–95. Generic cell/molecular methods and institution names received excessive credit. Version 2 removes those aggregate guesses. Each lab now has nine explicit 0–4 criterion judgments, a specific fit explanation and a specific environment-evidence explanation in `src/data/scoring/`. There is no percentile transformation, target distribution or arbitrary score multiplier.

## Fit: demonstrated preparation for the work

| Criterion                    | Weight | Levels 0 → 4                                                                                                                                                                              |
| ---------------------------- | -----: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Research alignment           |     25 | Outside interests; adjacent biology; broad molecular/clinical overlap; direct disease/pathway overlap; same question/model                                                                |
| Demonstrated core methods    |     30 | No demonstrated overlap; generic transfer only; some core methods with substantial gaps; most core methods demonstrated; every role-required hands-on method demonstrated                 |
| Academic preparation         |     15 | Documented prerequisite unmet; specialist preparation unverified; broad biology foundation; specific academic match; all role-specific academic prerequisites documented                  |
| Experience-level suitability |     20 | Known unmet route prerequisite; specialist/advanced route only; assistant requirements unknown; relevant inquiry/training path documented; suitable entry-level role and route documented |
| Transferable workflow        |     10 | No relevant evidence; generic communication; useful documentation/analysis; directly relevant research/clinical workflow; same workflow demonstrated in prior projects                    |

Each criterion contributes `level / 4 × weight`. The sum rounds to the nearest five-point band; ties round upward. Evidence caps apply after rounding:

- Role prerequisites that are not fully documented (`requirementsVerified=false`, the default) cap fit at **75**, even if an inquiry invitation or technician title exists. Only explicitly documented entry requirements receive affirmative verification; current verified flags are Meyerson and Bernstein. This flag verifies the information available, not employment authorization or an acceptance outcome.
- Level 1–2 experience evidence also caps fit at **75**.
- Generic-only core methods or indirect interests cap fit at **55**.
- A known unmet academic or advertised-route prerequisite caps fit at **40**, with the eligibility warning still displayed separately.
- The strictest applicable cap wins. No prior lab employment is not automatically disqualifying; documented first-time/technician routes can receive credit.

Fit bands: **80+ strong direct alignment; 65–79 credible alignment with gaps; 50–64 transferable fit; 35–49 substantial stretch; below 35 distant fit**. A lower score can identify a useful learning direction; it is not a recommendation to apply to a closed or ineligible role. Optional/preferred CRISPR, programming or animal methods are not treated as mandatory disqualifications. Specialized required methods remain explicit gaps when unverified.

## Prestige evidence: documented research environment

This index answers “how much relevant research-environment strength is evidenced by the reviewed sources?” It does **not** independently measure a lab's full reputation. Missing documentation can lower it without establishing low quality. The UI labels it **Prestige evidence**, including cards and comparison, and shows awarded evidence anchors on profiles.

| Criterion         | Weight | Levels 0 → 4                                                                                                                                                             |
| ----------------- | -----: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Scientific impact |     40 | Not evidenced; active program description; specific contribution; multiple clear research/translational contributions; externally recognized field-defining contribution |
| Resources         |     25 | Not evidenced; standard methods; specialized methods; specialized cores/models/clinical access; exceptional national-scale infrastructure/center resources               |
| Mentorship        |     20 | Not evidenced; team/inquiry access; explicit trainee/mentoring route; structured mentoring or trainee outcomes; sustained independently recognized outcomes              |
| Collaboration     |     15 | Not evidenced; institutional affiliation alone; specific multidisciplinary work; joint clinical/translational pipeline; national/multi-institutional research leadership |

Institutional brand alone earns no extra points. Level 1 impact requires an actual research program description, not a famous affiliation. A general invitation earns at most limited training credit; publication output, mentorship and resources are not inferred from recruitment. Closed hiring status does not itself diminish scientific impact. Regional institutions with specific evidence can outscore famous labs with sparsely documented environments.

## Broader scientific and institutional choices

Twelve additional official-source groups add Georgia State, Temple, UMBC, UNLV, VCU, UNC Charlotte, UT San Antonio, Marquette, Wayne State and UMKC. Topics include antiviral discovery, marine and microbial ecology, structural virology, developmental biology, kidney physiology, neural regeneration, rehabilitation, epigenetics and computational evolution. They are research leads with unknown vacancies, not invented entry-level jobs.

The catalog now contains **201 entries across 20 states**. Current fit spans **25–85**, with **two at 80+**; prestige evidence spans **20–75**. These are observed consequences of criterion review, not imposed bounds or a desired histogram. Existing IDs and private tracker/backup data remain compatible. All-fit discovery uses `minFit=0`; its explicit button preserves the saved threshold rather than silently migrating preferences.

Profiles show the criterion levels, weighted contributions, before-rounding fit, caps, evidence anchors, strengths/gaps and official sources. Comparison includes fit categories and explanations. The broad ordinal thresholds remain editorial judgments; new role requirements, methods or outcome evidence should trigger a reviewed update rather than automatic keyword counting.
