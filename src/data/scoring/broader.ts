import type { ScoreReview } from "../../domain/scoring";

function review(
  fit: [number, number, number, number, number],
  prestige: [number, number, number, number],
  fitEvidence: string,
  prestigeEvidence: string,
): ScoreReview {
  const [alignment, methods, preparation, level, transfer] = fit;
  const [impact, resources, mentorship, collaboration] = prestige;
  return {
    fit: { alignment, methods, preparation, level, transfer },
    prestige: { impact, resources, mentorship, collaboration },
    fitEvidence,
    prestigeEvidence,
  };
}

export const broaderReviews: Record<string, ScoreReview> = {
  "gsu-plemper": review(
    [2, 1, 2, 2, 2],
    [3, 4, 0, 4],
    "Culture and PCR transfer to virology, but viral safety, screening and animal methods are unverified; assistant requirements are unknown.",
    "Molnupiravir and other antiviral contributions, a screening facility and leadership in the federal AViDD network document substantial impact and infrastructure; lab-specific mentoring outcomes are unknown.",
  ),
  "temple-cordes": review(
    [0, 1, 1, 2, 1],
    [1, 3, 2, 1],
    "Writing and basic data skills transfer generally; marine ecology, oceanographic operations and habitat modeling have no documented preparation. Assistant requirements remain unknown.",
    "Submersibles, marine aquaria and molecular ecology support specialized resources; student participation establishes a training route, while influential contributions, specific joint projects and structured outcomes remain unverified.",
  ),
  "umbc-brewster": review(
    [2, 2, 2, 2, 3],
    [2, 3, 2, 1],
    "Microscopy and molecular assays overlap, but zebrafish manipulation and developmental imaging are unverified; documented student projects do not establish assistant eligibility.",
    "A published dynamic neurulation model and zebrafish imaging support contribution and resources; graduate/undergraduate projects establish training, while sustained mentoring outcomes and specific joint work are unverified.",
  ),
  "unlv-hedlund": review(
    [1, 1, 2, 2, 2],
    [2, 3, 0, 2],
    "PCR and microscopy transfer broadly; environmental microbiology, metagenomics and isotope methods are unverified, as are assistant prerequisites.",
    "SeqCode co-authorship documents a contribution; specialized systems-biology methods and an international PIRE project support resources and collaboration. Classroom teaching does not verify laboratory mentoring outcomes.",
  ),
  "umbc-summers": review(
    [2, 1, 1, 2, 2],
    [3, 3, 3, 2],
    "Protein assays provide background, but NMR, structural analysis and purified protein/RNA workflows are unverified; suitable assistant criteria are unknown.",
    "Multiple HIV structural and packaging findings document contributions, and national mentoring awards provide strong mentoring evidence. NMR resources and collaborative publications are documented; sustained individual alumni outcomes are unverified.",
  ),
  "vcu-ningjun-li": review(
    [2, 2, 2, 2, 3],
    [2, 3, 0, 2],
    "Cell culture and molecular analysis transfer to renal signaling; animal physiology, telemetry and LC-MS/MS are unverified, as are entry-role requirements.",
    "Specific renal-injury and hypertension studies document contributions; knockout models, imaging and mass spectrometry support resources and multidisciplinary methods. Structured mentorship is unknown.",
  ),
  "charlotte-chi": review(
    [2, 2, 2, 2, 3],
    [1, 2, 0, 1],
    "Microscopy and protein/molecular assays overlap with trafficking work; yeast genetics, live-cell protocols and assistant requirements remain unverified.",
    "Membrane trafficking and fluorescence microscopy establish a specialized program; an undergraduate-director title alone does not establish lab mentoring outcomes, major contributions or specific collaborations.",
  ),
  "utsa-hsieh": review(
    [2, 1, 2, 2, 2],
    [1, 1, 0, 1],
    "Culture and molecular biology provide a bridge to neurogenesis, but neural stem-cell systems, epilepsy methods and suitable role requirements are unknown.",
    "The official profile verifies research interests and consortium affiliation; specific infrastructure, scientific contributions and mentoring outcomes are not described and earn no inferred credit.",
  ),
  "marquette-hyngstrom": review(
    [2, 1, 2, 2, 3],
    [1, 3, 0, 3],
    "Clinical documentation and analysis transfer to human research, but exercise testing, stroke physiology and trial operations are unverified; staff prerequisites are unknown.",
    "A jointly led stroke project and planned clinical trial support specialized clinical resources and collaboration. NIH funding documents support, not completed scientific impact or mentoring outcomes.",
  ),
  "wayne-pile": review(
    [3, 2, 2, 2, 3],
    [1, 3, 0, 1],
    "Cancer culture, PCR and protein assays align with lung-cancer gene regulation; chromatin assays, fly genetics and suitable assistant criteria remain unverified.",
    "Lung-cancer and Drosophila systems support specialized mechanistic research; the profile describes aims rather than specific discoveries and does not establish structured mentoring or joint programs.",
  ),
  "umkc-wyckoff": review(
    [2, 1, 1, 2, 2],
    [1, 2, 2, 1],
    "Molecular concepts and writing transfer, but programming, phylogenetics and computational drug-discovery skills are unverified; student mentor guidance does not establish assistant suitability.",
    "Bioinformatics tool development supports specialized methods and a documented undergraduate connection route. Major scientific contributions, structured mentoring outcomes and specific joint projects are unverified.",
  ),
  "umkc-mcgraw": review(
    [2, 2, 2, 2, 3],
    [1, 3, 1, 1],
    "Microscopy and molecular skills support cell-level questions; zebrafish manipulation and regeneration assays are unverified, as are assistant requirements.",
    "Zebrafish sensory and lipid-transport models support specialized resources; a student roster establishes team participation, while influential discoveries, structured mentoring outcomes and specific joint work are unverified.",
  ),
};
