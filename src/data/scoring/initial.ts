import type { ScoreReview } from "../../domain/scoring";
function review(
  f: number[],
  p: number[],
  fitEvidence: string,
  prestigeEvidence: string,
  requirementsVerified = false,
): ScoreReview {
  return {
    fit: {
      alignment: f[0],
      methods: f[1],
      preparation: f[2],
      level: f[3],
      transfer: f[4],
    },
    prestige: {
      impact: p[0],
      resources: p[1],
      mentorship: p[2],
      collaboration: p[3],
    },
    fitEvidence,
    prestigeEvidence,
    requirementsVerified,
  };
}
export const initialReviews: Record<string, ScoreReview> = {
  meyerson: review(
    [4, 3, 3, 4, 3],
    [3, 3, 3, 3],
    "Lung-cancer cell models and the documented bachelor's-level technician route align directly. RNA-splicing and computational genomics remain training gaps; strong alignment does not mean complete method coverage.",
    "The recorded evidence supports a translational cancer/Broad environment and alumni progression. This supports several dimensions, not a maximum score or an institutional-name bonus.",
    true,
  ),
  bernstein: review(
    [4, 2, 3, 4, 3],
    [2, 3, 2, 3],
    "Direct lung-cancer relevance and an entry-level role support fit. The genomic-element project extends beyond the documented hands-on methods; gene editing and programming are unverified advantages rather than automatic disqualifications.",
    "The role documents a genomics project with shared Oser mentorship and an oncology setting. Specific long-term training outcomes and field-defining impact are not verified by this posting.",
    true,
  ),
  "haolong-li": review(
    [3, 2, 2, 3, 3],
    [2, 3, 2, 2],
    "Technician I/II recruitment and molecular-cancer skills support a plausible pathway. Detailed degree requirements, CRISPR and animal-model skills are unverified, so complete qualification coverage is not established.",
    "Official research and technician coauthorship opportunities document specialized resources and a training route. Broad institutional reputation does not establish sustained mentoring outcomes.",
  ),
  koay: review(
    [3, 1, 2, 2, 3],
    [2, 3, 0, 3],
    "Clinical documentation and research analysis transfer to radiation-oncology studies. Quantitative imaging, modeling and exact assistant requirements are unverified; technical retraining is substantial.",
    "The official group connects imaging, experimental models and clinical translation. Mentorship outcomes are not documented in the reviewed sources.",
  ),
  kadara: review(
    [3, 2, 2, 3, 3],
    [2, 3, 1, 3],
    "Lung-cancer relevance and molecular assays offer a base for an inquiry. Single-cell, spatial and computational methods remain gaps; an inquiry invitation does not establish role eligibility.",
    "The lung-cancer program describes advanced profiling and clinical samples. General inquiry access earns limited training credit; sustained mentoring outcomes are unknown.",
  ),
  lissanu: review(
    [3, 2, 2, 3, 3],
    [2, 3, 1, 2],
    "Cancer-cell and protein assays transfer to metabolic signaling work. Specialized metabolism methods and employment requirements remain unverified despite the inquiry route.",
    "The recorded evidence supports specialized metabolic cancer experiments. An invitation to inquire is not evidence of exceptional mentorship outcomes or field-defining scientific impact.",
  ),
  mchaourab: review(
    [2, 1, 3, 1, 2],
    [2, 3, 2, 2],
    "The advertised role requests protein-expression/purification experience, with a related bachelor's degree required and a master's preferred. That hands-on expertise is unverified; general PCR and cell culture do not establish it.",
    "Specialized structural-biophysics methods and a technician training route support the environment score. The current evidence does not establish maximum impact, collaboration or trainee outcomes.",
  ),
  remy: review(
    [3, 2, 2, 3, 3],
    [2, 3, 1, 3],
    "Clinical documentation and molecular assays support critical-illness research. Immunophenotyping and exact assistant qualifications remain unverified; contact is an inquiry pathway.",
    "The program combines immune biology, clinical records and critical-care collaboration. Structured mentorship outcomes are not verified by a general engagement invitation.",
  ),
  montaner: review(
    [2, 1, 2, 0, 3],
    [2, 3, 0, 4],
    "Clinical documentation transfers to HIV immunology, but immune-cell methods are unverified and the advertised postdoctoral route requires a doctorate. That eligibility barrier is separate from scientific interest.",
    "The official profile documents an NIH-supported multi-institutional HIV-cure collaboration. Structured mentoring outcomes remain unverified; institutional brand adds no credit.",
  ),
  srivastava: review(
    [2, 1, 1, 2, 2],
    [2, 2, 0, 2],
    "Cancer interests and analysis provide a broad bridge to computational genomics. Advanced programming, statistical genomics and a suitable assistant route are unverified, making this a substantial retraining option.",
    "The profile documents open-source genomics methods and Wistar/Penn/CHOP collaborations. Specific training outcomes and exceptional infrastructure are not established.",
  ),
  henderson: review(
    [1, 1, 2, 0, 2],
    [2, 3, 2, 2],
    "Neurodegenerative research is a broader-field stretch. Primary-neuron and specialized disease-model methods are unverified, and only a doctoral fellowship is advertised; no assistant route is confirmed.",
    "The group links cellular pathways, primary-neuron models and therapeutic development in neurodegeneration. A postdoctoral route is documented, but sustained mentoring outcomes are unknown.",
  ),
  barry: review(
    [3, 1, 2, 2, 2],
    [2, 3, 0, 2],
    "Cancer biology is relevant, but advanced immune imaging and single-cell methods are unverified. The technician route is explicitly closed; this remains a scientific lead rather than an actionable application.",
    "Advanced imaging and single-cell approaches document specialized resources. The reviewed evidence does not establish mentoring outcomes; a closed vacancy does not itself lower scientific prestige.",
  ),
};
