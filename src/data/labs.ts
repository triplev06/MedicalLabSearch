import type { Lab } from "../domain/types";
import { labSchema } from "../domain/schemas";

const md =
  "https://www.mdanderson.org/research/departments-labs-institutes/labs/";
const common = {
  verified: "2026-10-21",
  deadline: { kind: "unknown" as const },
  eligibility: "unknown" as const,
  eligibilityNote:
    "Work authorization, start date and time commitment must be confirmed directly. Academic alignment does not establish employment eligibility.",
};
type Entry = Omit<Lab, keyof typeof common | "sources"> &
  Partial<Pick<Lab, keyof typeof common>> & {
    evidence: string;
    extraSources?: Lab["sources"];
  };
function entry(e: Entry): Lab {
  const { evidence, extraSources = [], ...data } = e;
  return labSchema.parse({
    ...common,
    ...data,
    sources: [
      {
        url: data.applicationUrl ?? data.website,
        title: `${data.name} · official research and recruitment information`,
        claims: [
          "research",
          "availability",
          "requirements",
          "environment",
          "contact",
        ],
        evidence,
      },
      ...extraSources,
    ],
  });
}

// All descriptions and assessments are editorial paraphrases, not acceptance predictions.
// Unknown deadlines are intentional. Source pages did not verify a fixed deadline or rolling policy.
export const labs: Lab[] = [
  entry({
    id: "meyerson",
    name: "Meyerson Laboratory",
    institution: "Dana-Farber Cancer Institute",
    pi: "Matthew Meyerson",
    city: "Boston",
    state: "MA",
    fields: ["Cancer biology", "Genomics"],
    description:
      "Studies the molecular drivers of human cancers, including RNA splicing and therapeutic vulnerabilities in lung adenocarcinoma.",
    website: "https://labs.dana-farber.org/meyersonlab/contact",
    applicationUrl: "https://labs.dana-farber.org/meyersonlab/contact",
    contact: {
      name: "Hannah Delaney · lab contact",
      email: "hannah_delaney@dfci.harvard.edu",
    },
    availability: "open",
    experience: "entry",
    requirements: [
      "Biology or related bachelor’s degree; professional experience is not required for the technician role.",
    ],
    applicationMethod:
      "Use the research technician posting linked on the official contact page; direct questions to the listed lab contact. The separate postdoctoral roles have different requirements.",
    fit: 95,
    prestige: 95,
    strengths: [
      "Lung cancer cell-model experience directly supports the scientific focus.",
      "Cell culture, PCR and scientific writing offer a strong experimental foundation.",
    ],
    gaps: [
      "RNA-splicing assays and computational genomics are not documented.",
    ],
    prestigeReason:
      "The page documents a Dana-Farber/Broad research environment and alumni progression into research leadership.",
    assessment:
      "Strong subject and technician-level alignment; hiring remains competitive. Do not apply to the separate specialty-trained postdoctoral track.",
    evidence:
      "The official page advertises a lung-cancer-focused research technician opening and a biology bachelor’s-level entry route; a lab coordinator is listed.",
  }),
  entry({
    id: "bernstein",
    name: "Bernstein Laboratory",
    institution: "Dana-Farber Cancer Institute",
    pi: "Bradley Bernstein",
    city: "Boston",
    state: "MA",
    fields: ["Cancer biology", "Genomics"],
    description:
      "A technician project investigates viral-like genomic elements and lung cancer treatment response, with mentorship shared with the Oser laboratory.",
    website:
      "https://careers.dana-farber.org/job/2123/research-technician-bernstein-lab-research-laboratory-us-ma-boston-450-brookline-ave/",
    applicationUrl:
      "https://careers.dana-farber.org/job/2123/research-technician-bernstein-lab-research-laboratory-us-ma-boston-450-brookline-ave/",
    contact: null,
    availability: "open",
    experience: "entry",
    requirements: [
      "Life sciences bachelor’s degree or equivalent.",
      "Wet-lab experience is valued; gene editing and programming are advantages.",
      "Full-time, approximately 40 hours per week.",
    ],
    applicationMethod:
      "Apply through the official Research Technician posting, requisition JR-7283.",
    fit: 90,
    prestige: 95,
    strengths: [
      "Cancer cell biology and molecular assays align with the project.",
      "Experimental record keeping and data analysis support technician duties.",
    ],
    gaps: [
      "CRISPR, genomics and Python/R skills need development.",
      "Confirm full-time availability.",
    ],
    prestigeReason:
      "The posting describes cancer-genomics research, senior postdoctoral mentorship and collaboration between two laboratories in a specialist cancer center.",
    assessment:
      "Realistic technician-level qualifications with a competitive genomics learning curve.",
    evidence:
      "A live official requisition describes a full-time technician vacancy, bachelor’s-level qualifications and a lung cancer response project.",
  }),
  entry({
    id: "haolong-li",
    name: "Haolong Li Laboratory",
    institution: "Fred Hutch Cancer Center",
    pi: "Haolong Li",
    city: "Seattle",
    state: "WA",
    fields: ["Cancer biology", "Immunology"],
    description:
      "Uses prostate cancer models to study cancer progression, kinase targets and combination therapies through cell biology and functional screening.",
    website: "https://research.fredhutch.org/haolong-li/en/join-the-lab.html",
    applicationUrl:
      "https://research.fredhutch.org/haolong-li/en/join-the-lab.html",
    contact: { name: "Haolong Li", email: "haolongli@fredhutch.org" },
    availability: "open",
    experience: "entry",
    requirements: [
      "Research Technician I or II recruitment is explicitly advertised.",
      "Interest in cancer biology, immunology and CRISPR.",
      "Detailed degree and employment eligibility requirements are not stated on this page.",
    ],
    applicationMethod:
      "Read the technician section of the official Join the Lab page and contact the PI to confirm the application route.",
    fit: 85,
    prestige: 90,
    strengths: [
      "Cell culture and molecular biology are directly relevant.",
      "Cancer research and manuscript skills support project participation.",
    ],
    gaps: [
      "Flow cytometry, CRISPR and xenograft experience are not documented.",
    ],
    prestigeReason:
      "The lab describes integrated functional screening, translational therapy development and technician coauthorship opportunities at a specialist cancer center.",
    assessment:
      "Plausible technician pathway with substantial training needs in gene editing and animal work.",
    evidence:
      "The technician section explicitly recruits at levels I/II and describes cell culture, CRISPR, flow cytometry and mouse xenograft training. Continuous postdoctoral recruitment is not treated as a technician rolling policy.",
  }),
  entry({
    id: "koay",
    name: "Cancer Physics & Engineering Laboratory",
    institution: "MD Anderson Cancer Center",
    pi: "Eugene Koay",
    city: "Houston",
    state: "TX",
    fields: ["Translational research", "Cancer biology"],
    description:
      "Combines cancer biology, quantitative approaches and clinical investigation to understand treatment response and improve cancer care.",
    website: md + "koay-laboratory.html",
    applicationUrl: md + "koay-laboratory/join-our-lab.html",
    contact: { name: "Eugene Koay", email: "ekoay@mdanderson.org" },
    availability: "open",
    experience: "unknown",
    requirements: [
      "Research Assistant recruitment is stated; detailed role qualifications must be obtained from the lab.",
      "Surgical-resident fellowships and school-student internships are separate pathways.",
    ],
    applicationMethod:
      "Contact the PI about the advertised research assistant role and request the current formal application route.",
    fit: 80,
    prestige: 90,
    strengths: [
      "Clinical context and experimental biology can bridge translational projects.",
      "Scientific writing and data organization support collaborative research.",
    ],
    gaps: [
      "Quantitative modeling and engineering methods are not documented.",
      "Assistant-specific degree requirements need confirmation.",
    ],
    prestigeReason:
      "A dedicated cancer physics/engineering group offers an interdisciplinary environment within a specialist cancer center.",
    assessment:
      "An exploratory assistant application is reasonable; project allocation and technical requirements need a direct conversation.",
    evidence:
      "The official recruitment page lists a Research Assistant vacancy separately from trainee pathways.",
    extraSources: [
      {
        url: md + "koay-laboratory.html",
        title: "Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Official lab overview describes the cancer physics and engineering research program.",
      },
    ],
  }),
  entry({
    id: "kadara",
    name: "Kadara Laboratory",
    institution: "MD Anderson Cancer Center",
    pi: "Humam Kadara",
    city: "Houston",
    state: "TX",
    fields: ["Cancer biology", "Immunology"],
    description:
      "Investigates early lung cancer development, progenitor cells, host microbiome interactions and tumor–immune evolution.",
    website: md + "kadara-laboratory/join-our-lab.html",
    applicationUrl: md + "kadara-laboratory/join-our-lab.html",
    contact: { name: "Humam Kadara", email: "hkadara@mdanderson.org" },
    availability: "inquiries",
    experience: "unknown",
    requirements: [
      "Invites classified research personnel and trainees to contact the group.",
      "No specific assistant vacancy or degree threshold is verified.",
    ],
    applicationMethod:
      "Email the PI with a brief description of relevant experimental skills and ask whether a research personnel position is available.",
    fit: 90,
    prestige: 90,
    strengths: [
      "Lung cancer and cell biology align closely with the research.",
      "Manuscript preparation fits the stated scientific communication environment.",
    ],
    gaps: [
      "Immunogenomics and microbiome methods are not documented.",
      "Funding and a specific position remain unconfirmed.",
    ],
    prestigeReason:
      "The recruitment page describes collaboration among physicians, cancer biologists and immunogenomics researchers, plus writing and journal-club development.",
    assessment:
      "High scientific fit for an inquiry; an invitation to contact the lab is not a confirmed job offer or vacancy.",
    evidence:
      "The page welcomes research personnel and direct PI inquiries, while describing lung-cancer, microbiome and immune-evolution projects.",
  }),
  entry({
    id: "lissanu",
    name: "Lissanu Laboratory",
    institution: "MD Anderson Cancer Center",
    pi: "Yonathan Lissanu",
    city: "Houston",
    state: "TX",
    fields: ["Cancer biology", "Genomics"],
    description:
      "Studies cancer dependencies and therapeutic strategies with functional genomics, epigenetic profiling and small-molecule approaches.",
    website: md + "lissanu-laboratory.html",
    applicationUrl: md + "lissanu-laboratory.html",
    contact: { name: "Yonathan Lissanu", email: "ylissanu@mdanderson.org" },
    availability: "inquiries",
    experience: "unknown",
    requirements: [
      "Page invites graduate/postdoctoral inquiries and mentions internships for undergraduates or recent graduates.",
      "Medical-student or staff eligibility is not specified.",
    ],
    applicationMethod:
      "Ask the PI whether the available training routes accommodate your current enrollment and career stage; do not assume recent-graduate eligibility.",
    fit: 80,
    prestige: 90,
    strengths: [
      "Cancer cell models and molecular assays support experimental work.",
      "Mechanistic cancer interests align with therapeutic discovery.",
    ],
    gaps: [
      "Recent-graduate eligibility is uncertain.",
      "CRISPR screening, epigenomics and mouse models are not documented.",
    ],
    prestigeReason:
      "The official lab description combines therapeutic discovery, functional screens and epigenetic methods within thoracic cancer research.",
    assessment:
      "Good scientific overlap; a reach for the advertised training routes until eligibility is clarified.",
    evidence:
      "Official lab page describes functional-genomics research and specific graduate/postdoctoral and undergraduate/recent-graduate routes; no staff technician vacancy is established.",
  }),
  entry({
    id: "mchaourab",
    name: "Mchaourab Laboratory",
    institution: "Vanderbilt University",
    pi: "Hassane Mchaourab",
    city: "Nashville",
    state: "TN",
    fields: ["Molecular biology", "Structural biology"],
    description:
      "Explores protein dynamics, multidrug transport and the molecular basis of genetic disease using biochemical and structural methods.",
    website: "https://lab.vanderbilt.edu/mchaourab-lab/join-us/",
    applicationUrl: "https://lab.vanderbilt.edu/mchaourab-lab/join-us/",
    contact: {
      name: "Hassane Mchaourab",
      email: "hassane.mchaourab@vanderbilt.edu",
    },
    availability: "open",
    experience: "experienced",
    requirements: [
      "Related bachelor’s degree is required; master’s degree preferred.",
      "Protein expression/purification and molecular biology experience requested.",
    ],
    applicationMethod:
      "Email the PI through the official Research Assistant II application instructions.",
    fit: 75,
    prestige: 85,
    strengths: [
      "Cell culture and molecular techniques support laboratory duties.",
      "Academic training and experimental organization provide a solid foundation.",
    ],
    gaps: [
      "Protein purification and structural methods are not established in the profile.",
    ],
    prestigeReason:
      "The recruitment page describes access to cryo-EM, spectroscopy and other biophysical cores, with potential independent projects.",
    assessment:
      "A useful adjacent-field opportunity, but protein purification is a meaningful qualification gap.",
    evidence:
      "Official page advertises a Research Assistant II role, a related bachelor’s requirement and protein/molecular-biology responsibilities.",
  }),
  entry({
    id: "remy",
    name: "Remy Laboratory",
    institution: "Case Western Reserve University",
    pi: "Kenneth Remy",
    city: "Cleveland",
    state: "OH",
    fields: ["Clinical research", "Immunology"],
    description:
      "Connects immune biology to critical illness, including sepsis and acute lung injury, through laboratory and clinical-record research.",
    website:
      "https://case.edu/medicine/bhli/research-facilities/research-labs/remy-lab",
    applicationUrl:
      "https://case.edu/medicine/bhli/research-facilities/research-labs/remy-lab",
    contact: null,
    availability: "inquiries",
    experience: "unknown",
    requirements: [
      "Official page invites student engagement in wet- and dry-bench research.",
      "Specific employment availability and enrollment requirements are not stated.",
    ],
    applicationMethod:
      "Use the university laboratory page to identify the group and inquire through the institution about suitable student or assistant pathways.",
    fit: 85,
    prestige: 80,
    strengths: [
      "Clinical chart-review familiarity supports translational projects.",
      "Cell biology and patient-facing context span wet- and dry-bench work.",
    ],
    gaps: [
      "Critical-care immunology methods may require training.",
      "No paid position has been confirmed.",
    ],
    prestigeReason:
      "The official description links adult/pediatric critical care, immune biology and translational studies in an interdisciplinary medical-school center.",
    assessment:
      "Strong bridge between clinical and experimental interests; clarify the role and supervision before investing in an application.",
    evidence:
      "The official lab profile invites students and describes clinical EMR research plus wet- and dry-bench experiences, without a specific job requisition.",
  }),
  entry({
    id: "montaner",
    name: "Montaner Laboratory",
    institution: "The Wistar Institute",
    pi: "Luis Montaner",
    city: "Philadelphia",
    state: "PA",
    fields: ["Immunology", "Translational research"],
    description:
      "Studies human immunology, HIV cure strategies and cancer immunotherapy using experimental models and translational collaborations.",
    website: "https://www.wistar.org/our-scientists/luis-montaner/",
    applicationUrl: null,
    contact: { name: "Montaner lab", email: "montanerlab@wistar.org" },
    availability: "interest",
    experience: "doctoral",
    eligibility: "restricted",
    eligibilityNote:
      "The verified advertised position is postdoctoral and seeks a recent PhD or equivalent. The minimized profile does not establish this qualification; no assistant opening is confirmed.",
    requirements: [
      "Advertised postdoctoral track requests a recent PhD or equivalent with immunology/model-system experience.",
    ],
    applicationMethod:
      "Monitor official Wistar vacancies for assistant positions; the listed postdoctoral route does not match the documented career stage.",
    fit: 55,
    prestige: 85,
    strengths: [
      "Molecular methods and clinical research context are transferable.",
    ],
    gaps: [
      "Doctoral eligibility for the advertised role is not established.",
      "Advanced immunology and animal-model experience are not documented.",
    ],
    prestigeReason:
      "The official profile documents an NIH-supported, multi-institutional HIV-cure collaboration and translational immunology work.",
    assessment:
      "A longer-term laboratory of interest, not a verified assistant opening. The advertised postdoctoral pathway has an eligibility barrier.",
    evidence:
      "The official profile describes immunotherapy research and doctoral-level recruitment only; its staff list is not evidence of an assistant vacancy.",
  }),
  entry({
    id: "srivastava",
    name: "Srivastava Laboratory",
    institution: "The Wistar Institute",
    pi: "Avi Srivastava",
    city: "Philadelphia",
    state: "PA",
    fields: ["Genomics", "Cancer biology"],
    description:
      "Develops single-cell RNA isoform technologies to study drug-resistant melanoma and immune-cell dysregulation.",
    website: "https://www.wistar.org/our-scientists/avi-srivastava/",
    applicationUrl: null,
    contact: { name: "Avi Srivastava", email: "asrivastava@wistar.org" },
    availability: "interest",
    experience: "unknown",
    requirements: [
      "No role-specific opening or eligibility requirements verified.",
    ],
    applicationMethod:
      "Monitor the official institute careers page linked by the lab; no lab-specific application is currently verified.",
    fit: 65,
    prestige: 80,
    strengths: [
      "Cancer cell biology supports the biological context.",
      "Molecular assays provide an experimental starting point.",
    ],
    gaps: [
      "Computational single-cell analysis and sequencing methods are not documented.",
      "A specific suitable vacancy is unverified.",
    ],
    prestigeReason:
      "The official profile documents open-source genomics methods and collaborations across the Wistar/Penn/CHOP research environment.",
    assessment:
      "A reach toward computational genomics; prioritize groups with confirmed bench technician routes first.",
    evidence:
      "Official profile describes the research and links to general institute vacancies without confirming a lab-specific opening.",
  }),
  entry({
    id: "henderson",
    name: "Henderson Laboratory",
    institution: "Van Andel Institute",
    pi: "Michael Henderson",
    city: "Grand Rapids",
    state: "MI",
    fields: ["Molecular biology", "Neuroscience"],
    description:
      "Uses neuronal cultures and disease models to investigate neurodegenerative mechanisms and evaluate therapeutic targets.",
    website: "https://hendersonlab.vai.org/",
    applicationUrl: null,
    contact: null,
    availability: "interest",
    experience: "doctoral",
    eligibility: "restricted",
    eligibilityNote:
      "Only a postdoctoral vacancy is verified. A completed doctoral qualification is not established by the public profile; no technician opening is confirmed.",
    requirements: [
      "Only a postdoctoral fellowship is advertised on the verified lab page.",
    ],
    applicationMethod:
      "Monitor institute careers for technical roles; the current postdoctoral advertisement is outside the established qualification profile.",
    fit: 50,
    prestige: 80,
    strengths: [
      "Cell culture, microscopy and molecular assays may transfer to neuronal models.",
    ],
    gaps: [
      "Neuronal culture and neurodegeneration specialization are not documented.",
      "Current advertised career stage is a barrier.",
    ],
    prestigeReason:
      "The lab connects cellular pathways, primary-neuron systems and therapeutic development within a dedicated neurodegenerative science institute.",
    assessment:
      "A broader future research environment rather than an immediately suitable confirmed vacancy.",
    evidence:
      "Official lab page describes neuronal/animal disease models and a postdoctoral vacancy; it does not advertise a technician position.",
  }),
  entry({
    id: "barry",
    name: "Barry Laboratory",
    institution: "Fred Hutch Cancer Center",
    pi: "Kevin Barry",
    city: "Seattle",
    state: "WA",
    fields: ["Immunology", "Cancer biology"],
    description:
      "Examines innate immune recognition of cancer and the cellular mechanisms underlying effective immunotherapy.",
    website: "https://research.fredhutch.org/barry/en.html",
    applicationUrl: "https://research.fredhutch.org/barry/en/join-the-lab.html",
    contact: { name: "Kevin Barry", email: "kbarry@fredhutch.org" },
    availability: "closed",
    experience: "entry",
    requirements: [
      "The official page explicitly states there is no current research technician opening.",
    ],
    applicationMethod:
      "Recheck the official recruitment page later. Do not treat its postdoctoral openings as technician recruitment.",
    fit: 75,
    prestige: 90,
    strengths: [
      "Experimental cancer biology and molecular skills offer transferable foundations.",
    ],
    gaps: [
      "Flow cytometry and intravital imaging are not documented.",
      "The technician pathway is currently closed.",
    ],
    prestigeReason:
      "The research page describes human immunology, advanced imaging and single-cell approaches for cancer immunotherapy.",
    assessment:
      "Scientifically relevant but not currently actionable for a technician application.",
    evidence:
      "The recruitment page explicitly says no research technician opening. Postdoctoral vacancies are a distinct career track.",
    extraSources: [
      {
        url: "https://research.fredhutch.org/barry/en.html",
        title: "Barry laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Official overview describes innate cancer immunity, imaging and single-cell methods.",
      },
    ],
  }),
];
