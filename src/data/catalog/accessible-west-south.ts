import type { Lab } from "../../domain/types";
import { researchLab } from "./research-entry";

// These are individual paid staff routes, not assumed vacancies from faculty profiles.
const bcmRequirements = [
  "Bachelor's degree in a basic science or related field; the posting lists no required experience. Four years of related experience can substitute for the degree.",
  "Confirm full-time on-site availability and work authorization; this position does not provide visa sponsorship.",
];

function bcmEntry(input: {
  id: string;
  pi: string;
  name: string;
  website: string;
  job: string;
  description: string;
  fields: string[];
  methods: string;
  gap: string;
  preferred: string;
  evidence: string;
}): Lab {
  return researchLab({
    id: input.id,
    name: input.name,
    pi: input.pi,
    institution: "Baylor College of Medicine",
    city: "Houston",
    state: "TX",
    website: input.website,
    fields: input.fields,
    description: input.description,
    availability: "open",
    experience: "entry",
    eligibility: "unknown",
    requirements: [...bcmRequirements, input.preferred],
    eligibilityNote:
      "An entry education/experience minimum is documented. Work authorization, schedule, relocation, and preferred technical preparation require confirmation; acceptance is not assured.",
    applicationUrl: input.job,
    applicationMethod:
      "Apply through the official Research Technician II posting. The advertised annual salary is $35,591–$41,872. Review the full preferred criteria before applying.",
    strengths: [input.methods],
    gaps: [input.gap],
    pathway: {
      kind: "entry-role",
      compensation: "paid",
      audience: "general",
      time: "full-time",
      sourceUrl: input.job,
      evidence:
        "Official Research Technician II vacancy lists a basic-science bachelor's degree, no experience minimum, and $35,591–$41,872 annual salary; specialized preferences still apply.",
    },
    sources: [
      {
        url: input.website,
        title: `${input.name}: official research and PI`,
        claims: ["research", "environment"],
        evidence: input.evidence,
      },
      {
        url: input.job,
        title: `${input.name}: Research Technician II vacancy`,
        claims: ["research", "availability", "requirements"],
        evidence: `${input.preferred} ${input.methods} Bachelor's minimum, no required experience, salary $35,591–$41,872; U.S. work authorization required without sponsorship.`,
      },
    ],
  });
}

type InquiryEntry = {
  id: string;
  name: string;
  pi: string;
  institution: string;
  city: string;
  state: string;
  website: string;
  route: string;
  description: string;
  fields: string[];
  evidence: string;
  entryEvidence: string;
  strengths: string;
  gaps: string;
  audience?: "general" | "students";
  compensation?: "paid" | "unpaid" | "unknown";
  minimumMonths?: number;
  time?: "full-time" | "part-time" | "flexible" | "unknown";
};
function inquiry(input: InquiryEntry): Lab {
  return researchLab({
    id: input.id,
    name: input.name,
    pi: input.pi,
    institution: input.institution,
    city: input.city,
    state: input.state,
    website: input.website,
    fields: input.fields,
    description: input.description,
    availability: "inquiries",
    applicationUrl: input.route,
    experience: "unknown",
    eligibility: "unknown",
    applicationMethod: `Use the laboratory's explicit inquiry route: ${input.entryEvidence} Confirm project availability, prerequisites, compensation, authorization and schedule directly.`,
    eligibilityNote:
      "An explicit laboratory participation/contact route is documented; individual acceptance, external-student eligibility, funding and role-specific prerequisites remain unverified.",
    requirements: [
      input.entryEvidence,
      "Discuss role-specific qualifications and time commitment with the lab; this invitation is not a verified entry-level vacancy.",
    ],
    strengths: [input.strengths],
    gaps: [input.gaps],
    pathway: {
      kind: "inquiry",
      compensation: input.compensation ?? "unknown",
      audience: input.audience ?? "general",
      evidence: input.entryEvidence,
      sourceUrl: input.route,
      minimumMonths: input.minimumMonths ?? null,
      time: input.time ?? "unknown",
    },
    sources: [
      {
        url: input.website,
        title: `${input.name}: official PI and research`,
        claims: ["research", "environment"],
        evidence: input.evidence,
      },
      {
        url: input.route,
        title: `${input.name}: explicit participation inquiry`,
        claims: ["availability", "requirements"],
        evidence: input.entryEvidence,
      },
    ],
  });
}

const inquiryEntries: InquiryEntry[] = [
  {
    id: "utah-jorie-butler",
    name: "Butler Lab",
    pi: "Jorie M. Butler",
    institution: "University of Utah",
    city: "Salt Lake City",
    state: "UT",
    website: "https://psych.utah.edu/people/adjunct-faculty/butler-jorie.php",
    route: "https://joriebutlerlab.research.st/pages",
    description:
      "Health-services and biomedical-informatics research studies communication, clinical reasoning and shared decision making for older patients.",
    fields: ["Health services", "Geriatrics", "Biomedical informatics"],
    evidence:
      "Official university profile describes University of Utah/VA research on geriatric patient goals, communication and clinical decisions, with investigator funding.",
    entryEvidence:
      "The lab welcomes research assistants at all experience levels as volunteers, with training in data collection, reviews, participant communication and analysis. Minimum 10 hours weekly for three months to one year; paid roles are only occasional for specific skills, so this route is volunteer.",
    strengths:
      "Clinical documentation, communication and literature-review skills transfer to applied health research.",
    gaps: "Qualitative analysis, visualization and informatics require project-specific training; no full-time paid opening is verified.",
    compensation: "unpaid",
    time: "part-time",
    minimumMonths: 3,
  },
  {
    id: "berkeley-jan-engelmann",
    name: "Social Origins Lab",
    pi: "Jan Engelmann",
    institution: "University of California, Berkeley",
    city: "Berkeley",
    state: "CA",
    website: "https://psychology.berkeley.edu/people/jan-engelmann",
    route: "https://socialoriginslab.com/join/",
    description:
      "Developmental and comparative psychology investigates cooperation, social reasoning and the evolution of human cognition across species and cultures.",
    fields: ["Developmental psychology", "Social cognition"],
    evidence:
      "University profile names Engelmann and links the Social Origins Lab, describing comparative and cross-cultural studies of cooperation and cognition.",
    entryEvidence:
      "A separate Others section invites Bay Area applicants to email a CV and interest statement for volunteer research-assistant participation. Volunteers must be at least 18; visas cannot be sponsored. The nine-hour weekly minimum appears in the Berkeley-undergraduate section, so external-volunteer hours need confirmation.",
    strengths:
      "Participant communication, accurate records and scientific writing transfer to behavioral studies.",
    gaps: "Child-study recruitment, coding and developmental methods need training; projects are outside the main molecular interests. External-volunteer schedule requires confirmation.",
    compensation: "unpaid",
  },
  {
    id: "ohsu-benjamin-barad",
    name: "Barad Lab",
    pi: "Benjamin Barad",
    institution: "Oregon Health & Science University",
    city: "Portland",
    state: "OR",
    website: "https://baradlab.com/",
    route: "https://baradlab.com/join/",
    description:
      "Cellular cryo-electron tomography studies epithelial barriers and intracellular bacterial infection, with computational tools for quantitative cell architecture.",
    fields: ["Cell Biology", "Infectious Disease", "Structural Biology"],
    evidence:
      "The PI-led lab describes gut epithelial membranes, bacterial invasion and quantitative cryo-electron tomography.",
    entryEvidence:
      "Postbaccalaureate research assistants are explicitly welcome to inquire with CV/resume. The lab provides experimental/computational training and explicitly does not accept volunteer labor. No current assistant vacancy, salary or time minimum is published.",
    strengths:
      "Cell culture, imaging concepts and careful records provide experimental foundations.",
    gaps: "CryoET, bacterial infection models and computational image analysis require substantial training.",
    compensation: "paid",
  },
  {
    id: "uf-mark-moehle",
    name: "Moehle Lab",
    pi: "Mark Moehle",
    institution: "University of Florida",
    city: "Gainesville",
    state: "FL",
    website: "https://pharmacology.med.ufl.edu/research-2/the-moehle-lab/",
    route: "https://pharmacology.med.ufl.edu/the-team/",
    description:
      "Movement-disorder research examines basal-ganglia circuits and develops models of Parkinson-related disease and dystonia to guide therapy discovery.",
    fields: ["Neuroscience", "Neurodegeneration", "Pharmacology"],
    evidence:
      "The official lab describes alpha-synuclein and GNAL dystonia models with electrophysiology, optical neuroscience, behavior and fiber photometry.",
    entryEvidence:
      "Technicians are explicitly recruited at every experience level; contact Mark Moehle with CV/resume. The separate undergraduate route requires UF enrollment, while general technician minimums, pay and schedule remain unspecified.",
    strengths:
      "Imaging, molecular foundations and documentation transfer to experimental support.",
    gaps: "Disease-model animal work, electrophysiology, photometry and behavior require training.",
  },
  {
    id: "moffitt-inna-smalley",
    name: "Inna Smalley Lab",
    pi: "Inna Smalley",
    institution: "Moffitt Cancer Center",
    city: "Tampa",
    state: "FL",
    website: "https://lab.moffitt.org/smalley-inna/research/",
    route: "https://lab.moffitt.org/smalley-inna/research/",
    description:
      "Cancer-metastasis research studies leptomeningeal disease, central-nervous-system tumor microenvironments and metabolic interactions.",
    fields: ["Cancer Biology", "Metastasis", "Tumor Microenvironment"],
    evidence:
      "The official lab describes meningeal tumor/stroma interactions, diagnostic development, spatial multi-omics and cellular/animal CNS metastasis models.",
    entryEvidence:
      "The research page explicitly recruits research assistants. Contact the PI to clarify current staff opportunities; the separate opportunities page lists institutional graduate rotations and does not establish assistant minimums, pay or a vacancy.",
    strengths:
      "Cancer interests, culture, molecular assays and writing support translational tumor projects.",
    gaps: "Spatial/single-cell omics, metabolomics and CNS animal models need training.",
  },
  {
    id: "utsw-lenora-volk",
    name: "Volk Lab",
    pi: "Lenora Volk",
    institution: "UT Southwestern Medical Center",
    city: "Dallas",
    state: "TX",
    website: "https://labs.utsouthwestern.edu/volk-lab",
    route: "https://labs.utsouthwestern.edu/volk-lab/join-us",
    description:
      "Hippocampal research investigates how neural circuits support dynamic learning and persistent memory.",
    fields: ["Neuroscience", "Memory", "Cell Biology"],
    evidence:
      "The official PI-led lab describes hippocampal learning and memory, with biochemical, molecular, imaging and electrophysiology approaches in its recruitment page.",
    entryEvidence:
      "The lab explicitly accepts technician inquiries and encourages molecular, biochemical, imaging, animal-behavior and electrophysiology expertise. Email the PI; minimum preparation, compensation and current capacity need confirmation.",
    strengths:
      "Molecular assays, imaging and records provide transferable experimental foundations.",
    gaps: "Hippocampal physiology, animal behavior and in vivo imaging need training.",
  },
  {
    id: "utsw-jinfan-wang",
    name: "Jinfan Wang Lab",
    pi: "Jinfan Wang",
    institution: "UT Southwestern Medical Center",
    city: "Dallas",
    state: "TX",
    website: "https://labs.utsouthwestern.edu/wang-jinfan-lab",
    route: "https://labs.utsouthwestern.edu/wang-jinfan-lab",
    description:
      "Mitochondrial translation research examines how organelles synthesize membrane proteins and how failures contribute to metabolic and neurological disease.",
    fields: ["Molecular Biology", "Mitochondria", "Protein Biology"],
    evidence:
      "The official lab identifies Jinfan Wang and describes mitochondrial ribosomes, translation factors and OXPHOS protein synthesis.",
    entryEvidence:
      "The lab explicitly invites technicians at all levels to email a CV and brief cover letter covering experience and future interests. Formal prerequisites, pay and duration are unspecified.",
    strengths:
      "Molecular concepts, westerns and experimental documentation transfer to protein-synthesis research.",
    gaps: "Mitochondrial translation assays, membrane proteins and quantitative biophysical methods need preparation.",
  },
  {
    id: "utsw-ryan-butler",
    name: "Butler Lab",
    pi: "Ryan Butler",
    institution: "UT Southwestern Medical Center",
    city: "Dallas",
    state: "TX",
    website: "https://labs.utsouthwestern.edu/butler-lab",
    route: "https://labs.utsouthwestern.edu/butler-lab/join-us",
    description:
      "Neurological research studies adaptive pain and develops genetic therapies, including approaches to increase paternal UBE3A expression in Angelman syndrome.",
    fields: ["Gene Therapy", "Neuroscience", "Pain"],
    evidence:
      "The official lab identifies Ryan Butler and describes gene-therapy and chronic-pain projects.",
    entryEvidence:
      "The lab explicitly recruits technicians and student interns by email. Its older invitation establishes an inquiry route; current staffing, degree/experience minimums, pay and hours are not verified.",
    strengths:
      "Cell/molecular preparation and careful records support gene-therapy research foundations.",
    gaps: "Gene delivery, neuronal models, pain behavior and animal methods need training.",
  },
  {
    id: "utsw-glynnis-bann",
    name: "Bann Lab",
    pi: "Glynnis Garry Bann",
    institution: "UT Southwestern Medical Center",
    city: "Dallas",
    state: "TX",
    website: "https://labs.utsouthwestern.edu/bann-lab",
    route: "https://labs.utsouthwestern.edu/bann-lab/contact-us",
    description:
      "Cardiac regeneration research studies transcriptional and epigenetic control of cell-fate reprogramming as a strategy to repair heart injury.",
    fields: ["Regeneration", "Cell Biology", "Cardiovascular Disease"],
    evidence:
      "The PI-led lab describes reprogramming scar cells toward contractile cardiac cells and discovering heart-failure therapeutic targets.",
    entryEvidence:
      "The lab explicitly invites research-technician inquiries and directs applicants to contact the PI about open roles. Degree minimum, experience, compensation and appointment duration are not published.",
    strengths:
      "Culture, molecular assays and microscopy transfer to cell-fate research.",
    gaps: "Cardiac reprogramming, epigenetic analysis and heart-injury models need training.",
  },
  {
    id: "utsw-leo-buckley",
    name: "Buckley Lab",
    pi: "Leo F. Buckley",
    institution: "UT Southwestern Medical Center",
    city: "Dallas",
    state: "TX",
    website: "https://labs.utsouthwestern.edu/buckley-lab",
    route:
      "https://labs.utsouthwestern.edu/cardiovascular-pharmacotherapy-research-lab/join-us",
    description:
      "Cardiovascular pharmacotherapy research connects molecular epidemiology and clinical trials with precision prevention of heart failure.",
    fields: [
      "Clinical Research",
      "Cardiovascular Disease",
      "Precision Medicine",
    ],
    evidence:
      "The official lab identifies Leo Buckley and describes proteomic, metabolomic, pharmacogenomic and mechanistic clinical studies across multiple specialties.",
    entryEvidence:
      "Research assistants and clinical research coordinators are explicitly invited to contact the PI. Epidemiology, biostatistics, computational biology or trials experience is ideal; formal minimums, funding and duration are unspecified.",
    strengths:
      "Clinical documentation, literature review and analysis transfer to clinical-study support.",
    gaps: "Epidemiologic design, biostatistics and integrated-omics analysis require preparation.",
  },
  {
    id: "utsw-anthony-davis",
    name: "Anthony Davis Lab",
    pi: "Anthony J. Davis",
    institution: "UT Southwestern Medical Center",
    city: "Dallas",
    state: "TX",
    website: "https://labs.utsouthwestern.edu/davis-anthony-lab",
    route: "https://labs.utsouthwestern.edu/davis-anthony-lab/join-us",
    description:
      "Cancer-related DNA-repair research investigates double-strand-break responses and protein-phosphatase control of genome stability.",
    fields: ["Cancer Biology", "DNA Repair", "Cell Signaling"],
    evidence:
      "The official lab identifies Anthony Davis and describes defective DNA-break repair, tumorigenesis and potential selective therapeutic targeting.",
    entryEvidence:
      "Research-assistant inquiries are explicitly invited with a career-goal cover letter, CV and three references. This older invitation needs current confirmation; technician prerequisites, pay and commitment are not specified.",
    strengths:
      "Cancer interests, culture, westerns and molecular documentation provide useful foundations.",
    gaps: "DNA-damage assays, repair reporters and specialized phosphatase methods need training.",
  },
  {
    id: "utsw-tao-yue",
    name: "Yue Lab",
    pi: "Tao Yue",
    institution: "UT Southwestern Medical Center",
    city: "Dallas",
    state: "TX",
    website: "https://labs.utsouthwestern.edu/yue-lab",
    route: "https://labs.utsouthwestern.edu/yue-lab/join-us",
    description:
      "Kidney-cancer and osteosarcoma immunology research investigates resistance and develops targeted immune therapies and biomarkers.",
    fields: ["Cancer Immunology", "Biomarkers", "Translational Research"],
    evidence:
      "The official lab describes translational immunology platforms and PI contributions to tumor-suppressor discovery and tumor-focused IL-2 molecules.",
    entryEvidence:
      "Research assistants are explicitly invited to email Tao Yue about opportunities; the current lab home also identifies research-technician participation. Formal experience minimums, pay and schedule need verification.",
    strengths:
      "Cancer interests, molecular assays and cell biology support immune-model research foundations.",
    gaps: "Genetic screens, engineered cytokines, immune profiling and tumor models need training.",
  },
  {
    id: "utsw-nan-yan",
    name: "Yan Lab",
    pi: "Nan Yan",
    institution: "UT Southwestern Medical Center",
    city: "Dallas",
    state: "TX",
    website: "https://labs.utsouthwestern.edu/yan-lab",
    route: "https://labs.utsouthwestern.edu/yan-lab/lab-fun",
    description:
      "Innate-immunity studies investigate nucleic-acid sensing, inflammatory disorders, cancer immunity and neurodegeneration.",
    fields: ["Immunology", "Molecular Biology", "Translational Research"],
    evidence:
      "The official lab identifies Nan Yan and describes innate-immune disease mechanisms and preclinical therapeutic tests.",
    entryEvidence:
      "The lab explicitly welcomes research-assistant/associate inquiries on its lab page. The separate postdoctoral degree requirements do not establish assistant minimums; confirm suitable duties, funding and capacity with the PI.",
    strengths:
      "Cell culture, molecular assays and experimental records provide an immune-research foundation.",
    gaps: "Innate-sensing assays, immune disease models and any animal work need training.",
  },
  {
    id: "utsw-katherine-wert",
    name: "Wert Lab",
    pi: "Katherine J. Wert",
    institution: "UT Southwestern Medical Center",
    city: "Dallas",
    state: "TX",
    website: "https://labs.utsouthwestern.edu/wert-lab",
    route: "https://labs.utsouthwestern.edu/wert-lab/join-us",
    description:
      "Retinal cell biology investigates photoreceptor degeneration and develops therapeutic approaches for inherited and degenerative eye disease.",
    fields: ["Cell Biology", "Retinal Disease", "Regenerative Medicine"],
    evidence:
      "The official lab identifies Katherine Wert and its focus on retinal neurons, photoreceptor degeneration and therapeutic discovery.",
    entryEvidence:
      "Research-technician inquiries are explicitly invited with CV. Culture, transfection, stem-cell and mouse skills are preferred, and motivation to learn is explicitly considered. Confirm the role's degree minimum, funding and schedule.",
    strengths:
      "Culture, microscopy and molecular assays transfer to retinal-cell research.",
    gaps: "Pluripotent cells, gene editing, timed mouse breeding and surgical procedures need training.",
  },
  {
    id: "utsw-boyuan-wang",
    name: "Boyuan Wang Lab",
    pi: "Boyuan Wang",
    institution: "UT Southwestern Medical Center",
    city: "Dallas",
    state: "TX",
    website: "https://labs.utsouthwestern.edu/wang-boyuan-lab",
    route: "https://labs.utsouthwestern.edu/wang-boyuan-lab/join-us",
    description:
      "Chemical biology studies bacterial starvation signaling, metabolite–RNA interactions and protein chemistry to understand dormancy and persistence.",
    fields: ["Molecular Biology", "Microbiology", "Chemical Biology"],
    evidence:
      "The official PI page describes ppGpp targets, PAR-Seq metabolite-RNA capture and split-intein protein synthesis.",
    entryEvidence:
      "The laboratory explicitly seeks technicians and asks prospective technical staff to email a resume. No degree/experience minimum, compensation or commitment is specified.",
    strengths:
      "PCR, molecular concepts and quantitative records support bacterial molecular workflows.",
    gaps: "Protein chemistry, bacterial genetics, metabolite probes and specialized sequencing need training.",
  },
  {
    id: "utsw-nikolaos-louros",
    name: "Louros Lab",
    pi: "Nikolaos Louros",
    institution: "UT Southwestern Medical Center",
    city: "Dallas",
    state: "TX",
    website: "https://labs.utsouthwestern.edu/louros-lab",
    route: "https://labs.utsouthwestern.edu/louros-lab",
    description:
      "Protein biophysics research combines computational design and experimental validation to investigate amyloid assembly and neurodegenerative disease.",
    fields: ["Protein Biology", "Neurodegeneration", "Therapeutic Development"],
    evidence:
      "The official lab describes protein stability/misfolding, amyloid fibrils and AI-assisted protein engineering, with cellular and structural validation.",
    entryEvidence:
      "Technicians and research associates are explicitly invited to contact the PI about joining and expanding their skills. A separate experienced-associate notice is not an entry-level guarantee; confirm appropriate trainee-level duties, minimums and funding.",
    strengths:
      "Westerns, cell biology and careful analysis provide a foundation for protein-focused work.",
    gaps: "Advanced protein biophysics, structural methods and AI design are substantial specialist gaps.",
  },
  {
    id: "utsw-rachel-bailey",
    name: "Bailey Lab",
    pi: "Rachel Bailey",
    institution: "UT Southwestern Medical Center",
    city: "Dallas",
    state: "TX",
    website: "https://labs.utsouthwestern.edu/bailey-lab/people/meet-pi",
    route: "https://labs.utsouthwestern.edu/bailey-lab/opportunities",
    description:
      "Gene-therapy research engineers AAV vectors and tests cellular and animal treatments for neurological disorders.",
    fields: ["Gene Therapy", "Molecular Biology", "Neurodegeneration"],
    evidence:
      "The PI page documents AAV gene replacement/silencing, cellular proof-of-concept and preclinical neurological models, including prior clinical translation contributions.",
    entryEvidence:
      "The official opportunities page explicitly accepts technician inquiries, welcoming cell, molecular, biochemical, viral and animal expertise. This older undated invitation needs confirmation; no current staff posting, pay or minimum is established.",
    strengths:
      "Culture, molecular assays and microscopy transfer to cellular therapeutic studies.",
    gaps: "AAV engineering, viral delivery, animal studies and RNA-seq need training.",
  },
  {
    id: "utsw-vinod-mootha",
    name: "Mootha Lab",
    pi: "V. Vinod Mootha",
    institution: "UT Southwestern Medical Center",
    city: "Dallas",
    state: "TX",
    website: "https://labs.utsouthwestern.edu/mootha-lab/join-us",
    route: "https://labs.utsouthwestern.edu/mootha-lab/join-us",
    description:
      "Ocular genetics research studies repeat-RNA mechanisms in Fuchs endothelial corneal dystrophy and develops oligonucleotide therapeutics.",
    fields: ["Molecular Genetics", "Ocular Disease", "Translational Research"],
    evidence:
      "The official lab describes CUG-repeat RNA mechanisms, patient-derived models and antisense/duplex-RNA therapeutic collaboration.",
    entryEvidence:
      "Technicians are explicitly invited to email a CV for consideration. The separate PhD/MD postdoctoral criteria do not establish technician minimums; ask about staff qualifications, funding and time commitment.",
    strengths:
      "Culture, PCR, molecular concepts and clinical documentation transfer to patient-derived disease research.",
    gaps: "Repeat-expansion assays, oligonucleotide delivery, genomics and ocular mouse imaging need training.",
  },
  {
    id: "unlv-jefferson-kinney",
    name: "Kinney Lab",
    pi: "Jefferson W. Kinney",
    institution: "University of Nevada, Las Vegas",
    city: "Las Vegas",
    state: "NV",
    website: "https://kinneylab.org/",
    route: "https://kinneylab.org/joining-the-lab",
    description:
      "Neurodegeneration studies connect cell and animal mechanisms with human Alzheimer biomarker discovery and cerebral organoid models.",
    fields: ["Neurodegeneration", "Molecular Biology", "Biomarkers"],
    evidence:
      "The lab documents neuroinflammation, GABA signaling, culture/qPCR/western experiments and human biospecimen analysis.",
    entryEvidence:
      "The lab explicitly asks technicians and medical students seeking research rotations to email the PI. Its dated Spring 2026 volunteer cohort is not treated as a current opening; current role capacity, pay and any research-credit enrollment requirement must be clarified.",
    strengths:
      "Culture, qPCR, westerns, microscopy and clinical records connect with molecular and biomarker projects.",
    gaps: "Animal behavior, organoids, high-sensitivity biomarker assays and enrollment rules require clarification.",
  },
  {
    id: "asu-mary-burleson",
    name: "BioSocial Psychology Laboratory",
    pi: "Mary H. Burleson",
    institution: "Arizona State University",
    city: "Phoenix",
    state: "AZ",
    website: "https://www.asubiosocialpsychlab.com/",
    route: "https://www.asubiosocialpsychlab.com/participate",
    description:
      "Biobehavioral studies investigate interpersonal emotion regulation, physical affection, stress and links between social connection and health.",
    fields: ["Behavioral Health", "Psychophysiology", "Clinical Research"],
    evidence:
      "The PI-led ASU laboratory describes daily-diary and experimental studies using behavioral observations, reports and physiological recording.",
    entryEvidence:
      "The training laboratory explicitly works with postbaccalaureates and welcomes volunteers, with tasks tailored to skill level. Submit the RA application and resume for interview consideration; agree individual hours and confirm current availability.",
    strengths:
      "Clinical/interpersonal skills, literature searches, records and analysis support participant and questionnaire work.",
    gaps: "Psychophysiological recording, behavioral coding and project-specific analysis need training.",
    compensation: "unpaid",
  },
  {
    id: "uoregon-grimes",
    name: "Grimes Lab",
    pi: "Daniel T. Grimes",
    institution: "University of Oregon",
    city: "Eugene",
    state: "OR",
    website: "https://www.grimes-lab.com/",
    route: "https://www.grimes-lab.com/join-us",
    description:
      "Zebrafish genetics and imaging investigate embryonic left-right patterning, cilia-driven fluid flow and scoliosis.",
    fields: ["Developmental Biology", "Cell Biology", "Disease Models"],
    evidence:
      "The lab describes cilia/fluid-flow mechanisms of body asymmetry and scoliosis models, including genetic and imaging experiments; its members page identifies Daniel Grimes at Oregon.",
    entryEvidence:
      "Technician inquiries explicitly require a life-science bachelor's, previous lab experience, communication and organization. Zebrafish experience is desirable, not essential. Email CV, experience summary, contribution statement and three references; pay is unspecified.",
    strengths:
      "Molecular assays, microscopy and experimental records transfer to developmental research.",
    gaps: "Zebrafish husbandry, embryo work, CRISPR and micro-CT require training.",
  },
  {
    id: "unt-samuel-spencer",
    name: "Texas Intervention Development and Behavioral Science Lab",
    pi: "Samuel Spencer",
    institution: "University of North Texas",
    city: "Denton",
    state: "TX",
    website: "https://tidbs-lab.weebly.com/",
    route: "https://tidbs-lab.weebly.com/join.html",
    description:
      "Clinical psychology studies develop and test cognitive-behavioral interventions for mental-health challenges, including misophonia and obsessive-compulsive symptoms.",
    fields: ["Clinical Research", "Mental Health", "Behavioral Interventions"],
    evidence:
      "The lab identifies UNT PI Samuel Spencer and describes ACT/process-based interventions, measurement studies and a misophonia pilot collaboration.",
    entryEvidence:
      "Postbaccalaureate volunteer research assistants are explicitly welcome; email the PI a CV and short research-interest description. Tasks can span study design, data collection, writing and posters. Individual prerequisites and time commitment need confirmation.",
    strengths:
      "Clinical documentation, literature synthesis and writing support patient-centered research tasks.",
    gaps: "Psychometrics, behavioral intervention protocols and specialized statistics need training.",
    compensation: "unpaid",
  },
  {
    id: "fredhutch-xueqian-zhuang",
    name: "Zhuang Lab",
    pi: "Xueqian Zhuang",
    institution: "Fred Hutchinson Cancer Center",
    city: "Seattle",
    state: "WA",
    website: "https://research.fredhutch.org/zhuang/en.html",
    route: "https://research.fredhutch.org/zhuang/en/join-the-lab.html",
    description:
      "Aging, stem-cell and cancer research examines how aged cells and their microenvironments affect regeneration, tumor initiation and treatment response.",
    fields: ["Cancer Biology", "Stem Cells", "Aging"],
    evidence:
      "The lab describes primary organoid and genetic models linking physiologic aging with lung-cancer susceptibility and tissue repair.",
    entryEvidence:
      "Research-technician inquiries are explicitly invited with CV and brief interest statement; references optional. Culture, PCR/qPCR, westerns and microscopy are preferred; close mentorship and possible authorship are described. Pay and formal minimum are unspecified.",
    strengths:
      "Culture, qPCR, westerns, microscopy and molecular documentation overlap with preferred technician preparation.",
    gaps: "Organoids, mice, cloning and flow cytometry need further preparation.",
  },
  {
    id: "fredhutch-haolong-li",
    name: "Haolong Li Lab",
    pi: "Haolong Li",
    institution: "Fred Hutchinson Cancer Center",
    city: "Seattle",
    state: "WA",
    website: "https://research.fredhutch.org/haolong-li/en.html",
    route: "https://research.fredhutch.org/haolong-li/en/join-the-lab.html",
    description:
      "Prostate-cancer research uses functional-genomics screens to investigate oncogene regulation, drug resistance and immune-treatment targets.",
    fields: ["Cancer Biology", "Functional Genomics", "Cancer Immunology"],
    evidence:
      "The official lab describes CRISPR screens and prostate-cancer models within its clinical translation program.",
    entryEvidence:
      "The lab explicitly seeks Research Technician I or II candidates interested in cancer/immunology; techniques to be learned include culture, molecular biology, flow, CRISPR and mouse xenografts. Contact the PI to confirm qualifications, application route and funding.",
    strengths:
      "Cancer interests, culture and molecular assays provide a foundation for screening support.",
    gaps: "CRISPR screens, flow cytometry, xenografts and bioinformatics require training.",
  },
  {
    id: "fredhutch-lucas-sullivan",
    name: "Sullivan Lab",
    pi: "Lucas B. Sullivan",
    institution: "Fred Hutchinson Cancer Center",
    city: "Seattle",
    state: "WA",
    website: "https://research.fredhutch.org/sullivan/en.html",
    route: "https://research.fredhutch.org/sullivan/en/join-the-lab.html",
    description:
      "Metabolism research investigates the nutrient and biochemical constraints of cell proliferation to identify cancer vulnerabilities.",
    fields: ["Cancer Metabolism", "Cell Biology", "Translational Research"],
    evidence:
      "The lab describes mass spectrometry, isotope tracing, metabolic flux measurements and cancer models; its team page identifies Lucas B. Sullivan.",
    entryEvidence:
      "Technicians are explicitly invited to contact Lucas about projects spanning preclinical cancer models and basic discovery, depending on interests and existing expertise. No specific vacancy minimum, salary or commitment is published.",
    strengths:
      "Cell culture, molecular assays, analysis and writing transfer to cell-proliferation studies.",
    gaps: "Mass spectrometry, isotope tracing, flux analysis and animal cancer models need training.",
  },
  {
    id: "fredhutch-james-alvarez",
    name: "Alvarez Lab",
    pi: "James Alvarez",
    institution: "Fred Hutchinson Cancer Center",
    city: "Seattle",
    state: "WA",
    website: "https://research.fredhutch.org/alvarez/en.html",
    route: "https://research.fredhutch.org/alvarez/en/join-the-lab.html",
    description:
      "Breast-cancer recurrence research investigates dormant residual tumor cells and seeks therapies that prevent relapse.",
    fields: ["Breast Cancer", "Cell Biology", "Translational Research"],
    evidence:
      "The official lab describes molecular and cellular properties of dormant residual breast-cancer cells as a reservoir for relapse.",
    entryEvidence:
      "The laboratory explicitly recruits research technicians at all levels and provides James Alvarez's contact for inquiries. Specific degree/experience requirements, appointment length and pay remain unverified.",
    strengths:
      "Cancer interests, cell culture and molecular methods transfer to residual-cell research.",
    gaps: "Dormancy models, advanced tumor assays and any animal work require project-specific training.",
  },
  {
    id: "utaustin-beevers",
    name: "Mood Disorders Lab",
    pi: "Christopher G. Beevers",
    institution: "University of Texas at Austin",
    city: "Austin",
    state: "TX",
    website: "https://labs.la.utexas.edu/beevers/research/",
    route: "https://labs.la.utexas.edu/beevers/research-opportunities/",
    description:
      "Clinical research studies cognitive vulnerability to depression and develops attention-bias interventions, combining behavioral measures and brain imaging.",
    fields: ["Clinical Research", "Psychiatry", "Neuroscience"],
    evidence:
      "The lab describes depression attention-bias interventions and cognitive/neural mechanisms; its official inquiry page identifies Christopher Beevers and Austin location.",
    entryEvidence:
      "General volunteer research-assistant applications are invited through a form. Minimum 7–10 hours weekly for four months; two semesters preferred. Recruitment, data coding and scientific presentation are possible duties; openings are capacity-dependent.",
    strengths:
      "Clinical documentation, analysis and literature skills transfer to participant and data work.",
    gaps: "Behavioral protocols, psychophysics and neuroimaging analysis need training.",
    compensation: "unpaid",
    minimumMonths: 4,
    time: "part-time",
  },
  {
    id: "tamu-jun-wang",
    name: "Jun Wang Lab",
    pi: "Jun Wang",
    institution: "Texas A&M University",
    city: "Bryan",
    state: "TX",
    website: "https://neurowanglab.org/",
    route: "https://neurowanglab.org/contact",
    description:
      "Mouse and neural-circuit studies investigate basal-ganglia contributions to alcohol/opioid use disorders and Alzheimer's disease.",
    fields: ["Neuroscience", "Addiction", "Neurodegeneration"],
    evidence:
      "The official lab documents opposing striatal engrams controlling alcohol relapse and extinction, with recent 2026 research activity.",
    entryEvidence:
      "The laboratory explicitly states ongoing recruitment of research assistants; email the PI to discuss a suitable role. Its separate TAMU undergraduate-volunteer route does not establish the general assistant role's pay or prerequisites.",
    strengths:
      "Microscopy, molecular concepts and careful experimental records transfer to laboratory support.",
    gaps: "Mouse behavior, optogenetics, electrophysiology and circuit manipulation require substantial training.",
  },
  {
    id: "ucdavis-jie-zheng",
    name: "Z Lab",
    pi: "Jie Zheng",
    institution: "University of California, Davis",
    city: "Davis",
    state: "CA",
    website: "https://zlabcognition.org/",
    route: "https://zlabcognition.org/contact",
    description:
      "Human intracranial electrophysiology studies neural and computational mechanisms underlying memory and cognition.",
    fields: ["Neuroscience", "Human Cognition", "Clinical Research"],
    evidence:
      "The lab identifies UC Davis and its intracranial-electrophysiology approach to human memory.",
    entryEvidence:
      "Postbaccalaureate volunteers are explicitly welcome for small projects with at least ten hours weekly. Send a CV and a paragraph describing research interest and learning expectations.",
    strengths:
      "Clinical records, data handling and scientific writing support human-research tasks.",
    gaps: "Electrophysiology, signal processing and advanced computational analysis are unverified.",
    compensation: "unpaid",
    time: "part-time",
  },
  {
    id: "arizona-ging-jehli",
    name: "NAIADEL Lab",
    pi: "Nadja R. Ging-Jehli",
    institution: "University of Arizona",
    city: "Tucson",
    state: "AZ",
    website: "https://www.naiadel.com/",
    route: "https://www.naiadel.com/join-us",
    description:
      "A new interdisciplinary laboratory studies adaptive intelligence, decision-making and mental health using behavioral experiments and computational neuroscience.",
    fields: [
      "Computational Neuroscience",
      "Mental Health",
      "Behavioral Research",
    ],
    evidence:
      "The lab identifies its University of Arizona PI and Fall 2026 launch, with research on adaptive agency and learning across biological and artificial systems.",
    entryEvidence:
      "Postbaccalaureate research-assistant inquiries are explicitly accepted. A related bachelor's, Python or R proficiency, independent organization and at least one year are required. Send CV, interest/experience statement, availability and two references; funding is unspecified.",
    strengths:
      "Documentation, literature synthesis and careful data handling can support study coordination.",
    gaps: "Required Python/R proficiency is unverified and is a material barrier; computational modeling needs preparation.",
    minimumMonths: 12,
  },
  {
    id: "utsw-tamminga",
    name: "Tamminga Lab",
    pi: "Carol A. Tamminga",
    institution: "UT Southwestern Medical Center",
    city: "Dallas",
    state: "TX",
    website: "https://labs.utsouthwestern.edu/tamminga-lab",
    route: "https://labs.utsouthwestern.edu/tamminga-lab/join-us",
    description:
      "Clinical neuroscience research on schizophrenia, cognition and psychosis phenotypes, connecting disease mechanisms with treatment studies.",
    fields: ["Clinical Neuroscience", "Psychiatry", "Translational Research"],
    evidence:
      "The official laboratory describes schizophrenia cognition, phenotypic risk and psychopharmacologic treatment research under Carol Tamminga.",
    entryEvidence:
      "The lab explicitly hosts medical students and other clinical trainees; contact the lab about a suitable research placement. Compensation and external enrollment conditions are unspecified.",
    strengths:
      "Clinical documentation, literature review and careful data collection transfer to clinical neuroscience.",
    gaps: "Psychiatric phenotyping, study-specific clinical ratings and individual trainee prerequisites need confirmation.",
    audience: "students",
  },
  {
    id: "stanford-guolan-lu",
    name: "Guolan Lu Lab",
    pi: "Guolan Lu",
    institution: "Stanford University",
    city: "Stanford",
    state: "CA",
    website: "https://med.stanford.edu/guolanlulab/Joining.html",
    route: "https://med.stanford.edu/guolanlulab/Joining.html",
    description:
      "Cancer imaging research combines molecular probes, spatial analysis and computational approaches to improve tumor visualization and therapy delivery.",
    fields: ["Cancer Biology", "Molecular Imaging", "Translational Research"],
    evidence:
      "The lab describes clinical fluorescence imaging, cancer organoids and molecular/computational collaboration.",
    entryEvidence:
      "Medical students, residents and clinical fellows are explicitly welcome to inquire; send a cover letter, CV and three references. Deep expertise in at least one relevant field is preferred; no paid opening is established.",
    strengths:
      "Cancer interests, cell biology and microscopy offer a starting point for translational imaging.",
    gaps: "Imaging engineering, spatial omics and advanced computation are substantial unverified skills.",
    audience: "students",
  },
  {
    id: "emory-zachary-buchwald",
    name: "Buchwald Lab",
    pi: "Zachary S. Buchwald",
    institution: "Emory University",
    city: "Atlanta",
    state: "GA",
    website:
      "https://med.emory.edu/departments/radiation-oncology/research-laboratories/zachary-buchwald/index.html",
    route:
      "https://med.emory.edu/departments/radiation-oncology/research-laboratories/zachary-buchwald/index.html",
    description:
      "Translational studies examine how radiation shapes antitumor immunity and how immune interventions can improve cancer treatment.",
    fields: [
      "Cancer Immunology",
      "Radiation Oncology",
      "Translational Research",
    ],
    evidence:
      "The official Emory lab identifies Buchwald and describes radiation effects on tumor immune responses.",
    entryEvidence:
      "The laboratory invites prospective technicians, postbaccalaureate researchers and medical students at all levels to send a CV and inquiry. A current funded staff vacancy and minimum experience are not specified.",
    strengths:
      "Cancer biology, molecular assays and scientific writing transfer to translational immunology.",
    gaps: "Radiation experiments, animal tumor models and specialized immune profiling require training.",
  },
  {
    id: "unc-berfin-azizoglu",
    name: "Azizoglu Lab",
    pi: "D. Berfin Azizoglu",
    institution: "University of North Carolina at Chapel Hill",
    city: "Chapel Hill",
    state: "NC",
    website: "https://azizoglulab.org/",
    route: "https://azizoglulab.org/join-us/",
    description:
      "The laboratory investigates liver regeneration through vascular and neuronal network remodeling using genetic models, primary cells and advanced imaging.",
    fields: ["Regeneration", "Cell Biology", "Vascular Biology"],
    evidence:
      "The lab identifies UNC Chapel Hill and describes liver vascular plasticity, lineage tracing, primary cells and confocal/light-sheet imaging.",
    entryEvidence:
      "Research assistant inquiries are explicitly invited with a CV and preferably three references. The lab requests at least a one-year commitment; confirm funding, qualifications and project availability.",
    strengths:
      "Cell culture, microscopy and molecular assays connect with primary-cell and tissue research.",
    gaps: "Mouse lineage tracing, liver models and advanced imaging need training; a one-year commitment is requested.",
  },
  {
    id: "unc-tamara-baker",
    name: "Health Outcomes Baker Lab",
    pi: "Tamara A. Baker",
    institution: "University of North Carolina at Chapel Hill",
    city: "Chapel Hill",
    state: "NC",
    website: "https://www.healthoutcomesbaker.org/meet-the-team",
    route: "https://www.healthoutcomesbaker.org/join",
    description:
      "Health outcomes research studies chronic pain, psychosocial factors and health equity among older adults, including the Black Men in Pain study.",
    fields: ["Clinical Research", "Pain", "Health Equity"],
    evidence:
      "The laboratory identifies Tamara Baker as UNC Psychiatry professor and describes chronic-pain and health-disparities research.",
    entryEvidence:
      "The lab explicitly invites full-time or part-time research assistant inquiries through its project manager. Compensation, prerequisites and a specific vacancy are not published.",
    strengths:
      "Clinical documentation, literature synthesis and analysis transfer to patient-centered outcomes studies.",
    gaps: "Survey methodology, recruitment protocols and statistical tools require project-specific preparation.",
  },
  {
    id: "ucsd-hiu-chu",
    name: "Chu Lab",
    pi: "Hiu Chu",
    institution: "University of California, San Diego",
    city: "San Diego",
    state: "CA",
    website: "https://chulab.ucsd.edu/",
    route: "https://chulab.ucsd.edu/join/",
    description:
      "Research examines how intestinal commensal microbes shape immune development and maintenance in health and inflammatory disease.",
    fields: ["Immunology", "Microbiome", "Cell Biology"],
    evidence:
      "The UC San Diego lab describes mammalian gastrointestinal host-commensal interactions and immune-system regulation.",
    entryEvidence:
      "The lab explicitly invites technician inquiries with a CV and three references. Organization and communication are expected; independent projects and laboratory management are described, with minimum experience and pay unspecified.",
    strengths:
      "Cell culture, molecular assays and documentation provide a foundation for mechanistic immunology.",
    gaps: "Microbial models, animal work and independent laboratory management are unverified specialist responsibilities.",
  },
  {
    id: "ucsd-ina-stelzer",
    name: "Stelzer Lab",
    pi: "Ina Stelzer",
    institution: "University of California, San Diego",
    city: "San Diego",
    state: "CA",
    website: "https://pathology.ucsd.edu/research/labs/stelzer/index.html",
    route:
      "https://pathology.ucsd.edu/research/labs/stelzer/join-our-team.html",
    description:
      "Systems immunology research uses high-dimensional immune profiling and tissue imaging to investigate human health and disease.",
    fields: ["Immunology", "Translational Research", "Single-Cell Biology"],
    evidence:
      "UC San Diego identifies Ina Stelzer's laboratory and its mass-cytometry and imaging-mass-cytometry platforms.",
    entryEvidence:
      "Technician inquiries are explicitly welcome with a CV and three references. Organization, communication and independent project responsibilities are described; entry prerequisites and compensation need confirmation.",
    strengths:
      "Immunostaining, microscopy and careful data handling support a foundation for immune profiling.",
    gaps: "CyTOF, high-dimensional analysis and independent project leadership require additional preparation.",
  },
  {
    id: "bcm-ashley-chen",
    name: "Miao-Hsueh Chen Laboratory",
    pi: "Miao-Hsueh Chen",
    institution: "Baylor College of Medicine",
    city: "Houston",
    state: "TX",
    website:
      "https://www.bcm.edu/research/faculty-labs/miao-hsueh-chen-lab/research-projects",
    route:
      "https://www.bcm.edu/research/faculty-labs/miao-hsueh-chen-lab/lab-members",
    fields: ["Adipose Biology", "Metabolic Disease"],
    description:
      "Studies brown and beige adipocyte origins, thermogenesis and maternal-diet effects on fat-cell development.",
    evidence:
      "Official projects describe mouse supraclavicular brown fat discovery and lineage-tracing systems; team page names Miao-Hsueh Chen as PI and documents culture, western and qPCR work.",
    entryEvidence:
      "Lab explicitly invites research technician/assistant inquiries and medical-trainee research training inquiries to Dr. Chen. Undergraduate summer/credit pathways are separately described; no current staff salary or vacancy is verified.",
    strengths:
      "Culture, western blotting and qPCR are documented lab workflows.",
    gaps: "Mouse genetics, adipocyte lineage tracing and position-specific prerequisites are unverified.",
  },
  {
    id: "bcm-wooton-kee",
    name: "Wooton-Kee Laboratory",
    pi: "Clavia Ruth Wooton-Kee",
    institution: "Baylor College of Medicine",
    city: "Houston",
    state: "TX",
    website:
      "https://www.bcm.edu/research/faculty-labs/clavia-ruth-wooton-kee-lab",
    route:
      "https://www.bcm.edu/research/faculty-labs/clavia-ruth-wooton-kee-lab/join-us",
    fields: ["Liver Disease", "Nuclear Receptors"],
    description:
      "Investigates copper-related nuclear-receptor dysfunction and hepatic metabolism in Wilson's disease.",
    evidence:
      "Lab describes copper-mediated suppression of FXR/HNF4a/LRH-1 activity and Atp7b mouse and patient studies in Houston.",
    entryEvidence:
      "Explicitly welcomes medical students, residents and fellows for basic digestive-disease research; email wootenke@bcm.edu. The separately linked research associate vacancy is unavailable, so this record uses the medical-trainee inquiry route.",
    audience: "students",
    strengths:
      "Molecular assays and experimental records provide a base for mechanistic liver research.",
    gaps: "Hepatic physiology, mouse models and external medical-student participation conditions need confirmation.",
  },
  {
    id: "bcm-benham-pyle",
    name: "Benham-Pyle Laboratory",
    pi: "Blair Benham-Pyle",
    institution: "Baylor College of Medicine",
    city: "Houston",
    state: "TX",
    website: "https://www.bcm.edu/people-search/blair-benham-pyle-87171",
    route: "https://benhampylelab.org/joinus",
    fields: ["Stem Cell Biology", "Regeneration"],
    description:
      "Uses planarian flatworms to investigate wound-induced cell states, tissue repair, aging and cancer prevention.",
    evidence:
      "Official profile documents genomics, fluorescence imaging and regeneration-activated cell states in planarians.",
    entryEvidence:
      "Lab explicitly describes paid full-time technician work as a way to gain experience and invites a CV by email/contact form. Positions are usually advertised in spring; no current vacancy or salary is verified.",
    compensation: "paid",
    strengths:
      "Microscopy and molecular concepts transfer to regeneration questions.",
    gaps: "Planarian husbandry, genomics and a specific technician's prerequisites remain unknown.",
  },
  {
    id: "bcm-charles-lin",
    name: "Charles Lin Laboratory",
    pi: "Charles Lin",
    institution: "Baylor College of Medicine",
    city: "Houston",
    state: "TX",
    website: "https://www.charleslinlab.org/careers",
    route: "https://www.charleslinlab.org/careers",
    fields: ["Cancer Gene Regulation", "Molecular Biology"],
    description:
      "Investigates altered gene regulation in cancer through engineered mammalian cells and molecular biology.",
    evidence:
      "Lab careers page describes cancer gene regulation, cell engineering, nucleic-acid extraction, qPCR and culture; named Charles Lin lab identity appears in its domain/team navigation.",
    entryEvidence:
      "Explicitly encourages graduates seeking research experience before medical/graduate school and describes a supporting molecular biology technician role. Listed application links use an older hiring platform; confirm current openings with the lab before applying.",
    strengths:
      "Mammalian culture, qPCR, nucleic-acid extraction and research records overlap.",
    gaps: "Cloning, CRISPR and lentiviral techniques are gaps; current vacancy, salary and eligibility are unverified.",
  },
  {
    id: "bcm-bing-zhang",
    name: "Bing Zhang Laboratory",
    pi: "Bing Zhang",
    institution: "Baylor College of Medicine",
    city: "Houston",
    state: "TX",
    website: "https://www.zhang-lab.org/join/",
    route: "https://www.zhang-lab.org/join/",
    fields: ["Cancer Proteogenomics", "Computational Biology"],
    description:
      "Develops computational methods to interpret cancer proteomics and multi-omics data for biological and clinical research.",
    evidence:
      "Lab site identifies Bing Zhang's BCM cancer proteogenomics and computational-systems-proteomics group.",
    entryEvidence:
      "Lab explicitly welcomes research staff inquiries to Prof. Bing Zhang with CV and research interests. Student routes are separately listed; staff prerequisites, current vacancy and pay are not stated.",
    strengths:
      "Experimental interpretation and writing provide limited transferable support.",
    gaps: "Programming, statistical modeling and large-scale multi-omics analysis are unverified specialist gaps.",
  },
  {
    id: "ucsf-selleri",
    name: "Selleri Laboratory",
    pi: "Licia Selleri",
    institution: "University of California, San Francisco",
    city: "San Francisco",
    state: "CA",
    website: "https://selleri.ucsf.edu/principal-investigator",
    route: "https://selleri.ucsf.edu/join-us",
    fields: ["Developmental Genetics", "Human Birth Defects"],
    description:
      "Investigates transcriptional networks shaping craniofacial and limb development and congenital malformations.",
    evidence:
      "PI page identifies Licia Selleri and PBX developmental-regulator contributions, engineered mouse models and embryo multi-omics work.",
    entryEvidence:
      "Explicitly hosts medical/dental students for summer rotations and gap years; send cover letter and CV via the lab's published email link. Confirm external-student acceptance, timing and funding.",
    audience: "students",
    strengths:
      "PCR, microscopy and molecular concepts support developmental-genetics training.",
    gaps: "Embryology, animal genetics and multi-omics methods are unverified; no salary or staff vacancy established.",
  },
  {
    id: "uh-sajja",
    name: "Sajja MRI and Spectroscopy Laboratory",
    pi: "Aaryani Tipirneni-Sajja",
    institution: "University of Houston",
    city: "Houston",
    state: "TX",
    website: "https://sajja-mrisl.bme.uh.edu/",
    route: "https://sajja-mrisl.bme.uh.edu/",
    fields: ["Quantitative MRI", "Translational Imaging"],
    description:
      "Develops quantitative MRI for liver iron/fat and NMR spectroscopy methods for tissue metabolites.",
    evidence:
      "Official lab page identifies Dr. Sajja and research in noninvasive iron/fat measurement and automated biological-tissue metabolite quantification.",
    entryEvidence:
      "Official lab page explicitly welcomes medical students to explore summer research; use Contact us. External enrollment rules, current project capacity and compensation are unstated.",
    audience: "students",
    strengths:
      "Clinical documentation, analysis and writing offer a bridge to imaging research.",
    gaps: "MRI physics, quantitative image reconstruction and NMR spectroscopy are substantial new methods.",
  },
  {
    id: "fredhutch-yuyan-jiang",
    name: "Yuyan Jiang Laboratory",
    pi: "Yuyan Jiang",
    institution: "Fred Hutchinson Cancer Center / University of Washington",
    city: "Seattle",
    state: "WA",
    website: "https://research.fredhutch.org/jiang/en/lab-members.html",
    route: "https://research.fredhutch.org/jiang/en/join-the-lab.html",
    fields: ["Chemical Biology", "Therapeutic Development"],
    description:
      "Combines protein engineering, synthetic biology and nanomedicine to develop therapeutic strategies.",
    evidence:
      "Official pages identify Yuyan Jiang in Human Biology/Radiation Oncology and describe protein/antibody engineering, gene delivery and therapeutic development.",
    entryEvidence:
      "Explicit technician recruitment welcomes people considering graduate/medical school; email CV and interest statement to yjiang88@uw.edu. Culture, qPCR, westerns and microscopy are preferred; close mentorship is stated, but formal minimum and salary are absent.",
    strengths:
      "Culture, qPCR, westerns and fluorescence microscopy directly overlap with preferred methods.",
    gaps: "Protein engineering, gene delivery, flow cytometry and animal studies need training; prerequisites and pay unverified.",
  },
  {
    id: "ucsf-qili-liu",
    name: "Qili Liu Laboratory",
    pi: "Qili Liu",
    institution: "University of California, San Francisco",
    city: "San Francisco",
    state: "CA",
    website: "https://qililiulab.science/research",
    route: "https://qililiulab.science/join-us",
    fields: ["Feeding Behavior", "Cellular Neuroscience"],
    description:
      "Studies protein-specific feeding motivation and neuronal signaling through Drosophila genetics, behavior and imaging.",
    evidence:
      "Lab research page details molecular substrates of protein feeding, immunohistochemistry, functional imaging and electrophysiology; join page locates lab at UCSF in San Francisco and names Qili Liu.",
    entryEvidence:
      "Explicitly recruits junior-specialist research technicians; send cover letter, CV and two or three references to Qili.Liu@ucsf.edu. Gap-year applicants are especially encouraged, not stated as the only eligible group; current formal criteria/pay need confirmation.",
    strengths: "Immunostaining and microscopy offer some experimental overlap.",
    gaps: "Fly genetics, behavioral analysis, functional imaging and patch clamp are new methods.",
  },
  {
    id: "ohsu-rodda",
    name: "Rodda Laboratory",
    pi: "Lauren B. Rodda",
    institution: "Oregon Health & Science University",
    city: "Portland",
    state: "OR",
    website: "https://www.ohsu.edu/school-of-medicine/rodda-lab/projects",
    route: "https://www.ohsu.edu/school-of-medicine/rodda-lab/contact-us",
    fields: ["Mucosal Immunology", "Respiratory Disease"],
    description:
      "Studies lung memory B cells and plasma cells in antiviral protection and inflammatory lung disease.",
    evidence:
      "Official projects document respiratory tissue niches, mouse models, antigen-specific flow, high-parameter microscopy and transcriptomics; official team identifies Lauren B. Rodda.",
    entryEvidence:
      "Official contact page explicitly invites research assistants to join and gives rodda@ohsu.edu. No assistant degree/experience minimum, current formal vacancy or salary is verified.",
    strengths:
      "Imaging, molecular assays and records transfer to immunology workflows.",
    gaps: "Flow cytometry, tissue-resident lymphocyte experiments, mouse models and transcriptomics remain gaps.",
  },
  {
    id: "ohsu-ngo",
    name: "Ngo Laboratory",
    pi: "Thuy Ngo",
    institution: "Oregon Health & Science University",
    city: "Portland",
    state: "OR",
    website: "https://www.thuyngolab.org/pi.html",
    route: "https://www.thuyngolab.org/join-us.html",
    fields: ["Cancer Biomarkers", "Liquid Biopsy"],
    description:
      "Develops cell-free nucleic-acid and extracellular-vesicle measurements to track cancer and treatment response.",
    evidence:
      "Official PI page identifies Thuy Ngo at OHSU's Knight Cancer Research Building; join page describes cfRNA, cfDNA methylation, EV cargo and multi-omics biomarker projects.",
    entryEvidence:
      "Lab explicitly seeks research assistants and asks for CV and cover letter; molecular/cellular biology experience is preferred and eagerness to learn is required. A separate undergraduate paid internship exists, but pay for the general assistant route is unverified.",
    strengths:
      "PCR-related molecular work, cell biology and experimental analysis offer relevant preparation.",
    gaps: "Low-input sequencing, cfDNA methylation, EV assays and computational classification are unverified.",
  },
  {
    id: "uf-rob-maile",
    name: "Maile Burn Research Laboratory",
    pi: "Rob Maile",
    institution: "University of Florida",
    city: "Gainesville",
    state: "FL",
    website:
      "https://surgery.med.ufl.edu/research/inflammation-biology-and-surgical-science/burn-research-center/",
    route:
      "https://surgery.med.ufl.edu/research/inflammation-biology-and-surgical-science/burn-research-center/",
    fields: ["Burn Injury", "Immune Dysfunction"],
    description:
      "Investigates post-burn infection susceptibility, immune suppression and immunomodulatory extracellular vesicles.",
    evidence:
      "Official Burn Lab page identifies Rob Maile as PI, lists culture/immune assays/transcriptomics, clinical repository and burn/inhalation injury models.",
    entryEvidence:
      "Official lab page encourages researchers of various experience levels to apply and describes medical students and research assistants in its structure. Application instructions are marked forthcoming, so use the department's contact route to confirm next steps; no vacancy/pay verified.",
    strengths:
      "Cell culture, clinical documentation and analysis support burn-translational research.",
    gaps: "Burn/trauma models, immune-function assays and transcriptomics require training.",
  },
];

type SpecialistEntry = {
  // Individual OMRF staff advertisements; their recent-degree scholar programs are not substituted for staff eligibility.
  id: string;
  name: string;
  pi: string;
  institution: string;
  city: string;
  website: string;
  job: string;
  fields: string[];
  description: string;
  researchEvidence: string;
  requirements: string;
  salary: string;
  window: string;
  deadline: string;
  strengths: string;
  gaps: string;
  fullTime?: boolean;
  minimumMonths?: number;
};
const specialistEntries: SpecialistEntry[] = [
  {
    id: "ucsf-paredes",
    name: "Paredes Lab",
    pi: "Mercedes Paredes",
    institution: "University of California, San Francisco",
    city: "San Francisco",
    website: "https://paredeslab.ucsf.edu/",
    job: "https://aprecruit.ucsf.edu/JPF05922",
    fields: ["Neurodevelopment", "Cell Biology", "Translational Research"],
    description:
      "Perinatal brain-development research investigates neuronal migration using human tissue and gyrencephalic models relevant to neurodevelopmental disorders.",
    researchEvidence:
      "The official lab identifies Mercedes Paredes and its human/piglet developmental-brain models and epilepsy/autism questions.",
    requirements:
      "Relevant bachelor's with basic-method knowledge/experience; familiarity with immunohistochemistry and cryosectioning, medical terminology, organization and communication required. Training is provided for study procedures.",
    salary: "Advertised annual salary $55,000–$58,600.",
    window:
      "Final July 12, 2027; priority review passed January 27, 2026, so later applications depend on an unfilled position.",
    deadline: "2027-07-12",
    strengths:
      "Immunostaining, microscopy and clinical documentation overlap with tissue and participant work.",
    gaps: "Cryosectioning, stereology and animal/human brain tissue workflows need verification.",
  },
  {
    id: "ucdavis-brostoff",
    name: "Brostoff Lab",
    pi: "Terza Brostoff",
    institution: "University of California, Davis",
    city: "Davis",
    website: "https://immunology.ucdavis.edu/people/faculty",
    job: "https://recruit.ucdavis.edu/JPF07880",
    fields: ["Immunology", "Infectious Disease", "Cancer Biology"],
    description:
      "Comparative immune research develops diagnostics and vaccines using infectious-disease and cancer models, including feline coronavirus and canine osteosarcoma.",
    researchEvidence:
      "The official directory identifies Terza Brostoff and her diagnostic/vaccine lab, Raman methods, feline coronavirus and canine osteosarcoma models.",
    requirements:
      "Biology/biomedical bachelor's and previous laboratory experience required. Duties include independent PBMC culture, cytokine staining, flow cytometry and Raman sample analysis; flow and Raman preparation need confirmation.",
    salary: "Annual salary $57,000–$60,700 or $27.30–$29.08/hour.",
    window:
      "Final November 30, 2026; priority review passed September 29, so confirm vacancy remains unfilled.",
    deadline: "2026-11-30",
    strengths:
      "Culture, immunostaining, sample records and molecular skills connect with immune and repository work.",
    gaps: "Independent flow cytometry, PBMC isolation, Raman spectroscopy and machine learning are unverified.",
  },
  {
    id: "ucdavis-carvajal-carmona",
    name: "Carvajal-Carmona Lab",
    pi: "Luis G. Carvajal-Carmona",
    institution: "University of California, Davis",
    city: "Davis",
    website:
      "https://environmentalhealth.ucdavis.edu/people/luis-carvajal-carmona",
    job: "https://recruit.ucdavis.edu/JPF07951",
    fields: ["Cancer Genetics", "Molecular Biology", "Precision Medicine"],
    description:
      "Cancer genetics and functional-genomics studies connect molecular models and biospecimen research with precision medicine in diverse populations.",
    researchEvidence:
      "UC Davis identifies Carvajal-Carmona's cancer susceptibility and population-genomics group.",
    requirements:
      "Relevant biology bachelor's; PCR, cloning, DNA manipulation, gel electrophoresis, laboratory records/database experience and organization required. Genome editing and clinical-biospecimen skills are preferred.",
    salary: "Annual salary $57,000.",
    window: "Apply by the final and review deadline October 28, 2026.",
    deadline: "2026-10-28",
    strengths:
      "Cancer interests, PCR, culture and clinical documentation match several research-support duties.",
    gaps: "Required cloning/DNA-manipulation experience and independent database work are not established; CRISPR is a further gap.",
  },
  {
    id: "ucdavis-christopher-fraser",
    name: "Fraser Lab",
    pi: "Christopher S. Fraser",
    institution: "University of California, Davis",
    city: "Davis",
    website: "https://fraserlab.faculty.ucdavis.edu/people/",
    job: "https://recruit.ucdavis.edu/JPF07648",
    fields: ["Molecular Biology", "Protein Biology", "Cell Signaling"],
    description:
      "Biochemical and cell-based studies investigate how protein kinases and signaling pathways regulate eukaryotic translation initiation.",
    researchEvidence:
      "The PI/team page identifies Christopher Fraser and documents former junior specialists progressing to medical and graduate study; the recruitment details translation regulation research.",
    requirements:
      "Related bachelor's and previous molecular/cell/protein laboratory research required, with independent organization and detailed records. Recombinant protein purification and insect-cell expression are strongly preferred.",
    salary: "Annual salary $57,000–$60,700 or $27.30–$29.08/hour.",
    window:
      "Final December 31, 2026; priority review passed September 24, so confirm vacancy remains unfilled.",
    deadline: "2026-12-31",
    strengths:
      "Westerns, mammalian culture, molecular assays and documentation overlap with listed workflows.",
    gaps: "Protein-complex purification, baculovirus/insect cells and cloning need further preparation.",
  },
  {
    id: "ucdavis-aijun-wang",
    name: "Wang Surgical Bioengineering Lab",
    pi: "Aijun Wang",
    institution: "University of California, Davis",
    city: "Sacramento",
    website:
      "https://bme.ucdavis.edu/news/biomedical-engineering-professor-aijun-wang-part-groundbreaking-fetal-spina-bifida-treatment",
    job: "https://recruit.ucdavis.edu/JPF07447",
    fields: ["Cell Therapy", "Translational Research", "Regenerative Medicine"],
    description:
      "The CuRe team develops stem-cell products for fetal spina-bifida repair, linking cell manufacturing and molecular assays with a clinical trial.",
    researchEvidence:
      "UC Davis describes Aijun Wang and Diana Farmer's surgical bioengineering work, placenta-derived stromal-cell patches and clinical CuRe translation.",
    requirements:
      "Relevant bachelor's plus prior research-lab sterile cell culture and basic molecular/cell knowledge required. Independent assays and GMP records are duties; one year, preferably two, is the ideal commitment.",
    salary: "Advertised annual salary $55,000–$58,600 or $26.35–$28.07/hour.",
    window:
      "Final January 9, 2027; priority review passed June 10, 2026, so confirm vacancy remains unfilled.",
    deadline: "2027-01-09",
    strengths:
      "Mammalian culture, PCR, immunostaining and careful clinical records overlap with cell-product support.",
    gaps: "GMP manufacture, flow cytometry, Luminex and regulatory SOPs need training; confirm a one-year appointment is acceptable.",
  },
];

const omrfEntries = [
  {
    id: "omrf-ahamed",
    name: "Ahamed Lab",
    pi: "Jasimuddin Ahamed",
    website: "https://omrf.org/scientist/jasimuddin-ahamed-ph-d/",
    job: "https://omrf.hrmdirect.com/employment/job-opening.php?jbsrc=1014&req=3798314&req_loc=1454450",
    fields: ["Molecular Biology", "Cardiovascular Disease", "Fibrosis"],
    description:
      "TGF-beta and platelet research investigates cardiac fibrosis, thrombosis and valve disease with cellular assays and mouse models.",
    researchEvidence:
      "The official PI page documents shear activation of latent TGF-beta, platelet contributions, conditional mouse models and fibrosis mitigation studies.",
    entryEvidence:
      "Current Research Technician I/II/III staff recruitment requires biological-science bachelor's/equivalent with no years minimum; willing mouse handling, basic computers, calculations and communication. Typical Monday–Friday8:30–5 schedule; salary amount/duration unspecified.",
    application:
      "Apply through official Research Technician I/II/III3798314. Confirm compensation, appointment length and mouse procedures; no closing date is published.",
    strengths:
      "Culture, molecular assays, westerns and records transfer to signaling/fibrosis experiments.",
    gaps: "Mouse injections, colony management, venipuncture and cardiac-specific assays need training.",
  },
  {
    id: "omrf-srinivasan",
    name: "Srinivasan Lab",
    pi: "Sathish Srinivasan",
    website: "https://omrf.org/scientist/sathish-srinivasan-ph-d/",
    job: "https://omrf.hrmdirect.com/employment/job-opening.php?jbsrc=1014&req=3796620&req_loc=1444856",
    fields: ["Vascular Biology", "Cell Biology", "Translational Research"],
    description:
      "Developmental and disease studies investigate lymphatic vessels and cardiovascular valves using genetic, imaging and molecular approaches.",
    researchEvidence:
      "The official PI profile and vacancy describe lymphatic/valve development, vascular disease models and molecular-imaging investigations.",
    entryEvidence:
      "Current Research Technician I/II/III posting requires relevant bachelor's/equivalent and willingness to handle mice; model/imaging/genomics experience desirable, not required. Weekday8:30–5 schedule, salaries and employee benefits described without an amount.",
    application:
      "Apply through official3796620 and email the PI a CV, research interests/experience and career goals, plus three references. Confirm salary and appointment duration.",
    strengths:
      "Microscopy, PCR, molecular foundations and records overlap with preferred methods.",
    gaps: "Mouse handling, histology, single-cell/spatial genomics and vascular models need training.",
  },
];

export const accessibleWestSouthLabs: Lab[] = [
  ...omrfEntries.map((e) =>
    researchLab({
      id: e.id,
      name: e.name,
      pi: e.pi,
      institution: "Oklahoma Medical Research Foundation",
      city: "Oklahoma City",
      state: "OK",
      website: e.website,
      fields: e.fields,
      description: e.description,
      availability: "open",
      experience: "entry",
      eligibility: "unknown",
      eligibilityNote:
        "Official Research Technician I/II/III route requires a biological-science bachelor's/equivalent without a years minimum; willingness to handle mice and specific duties require verification.",
      requirements: [
        "Biological-science bachelor's or equivalent lab experience; willing and able to handle mice, including breeding and procedures.",
        "Basic computers, laboratory calculations, precise protocol following and communication required. Confirm proposed appointment duration.",
      ],
      applicationUrl: e.job,
      applicationMethod: e.application,
      strengths: [e.strengths],
      gaps: [e.gaps],
      pathway: {
        kind: "entry-role",
        compensation: "paid",
        audience: "general",
        time: "full-time",
        minimumMonths: null,
        sourceUrl: e.job,
        evidence: e.entryEvidence,
      },
      sources: [
        {
          url: e.website,
          title: `${e.name}: official research`,
          claims: ["research", "environment"],
          evidence: e.researchEvidence,
        },
        {
          url: e.job,
          title: `${e.name}: technician vacancy`,
          claims: ["availability", "requirements", "research"],
          evidence: e.entryEvidence,
        },
      ],
    }),
  ),
  researchLab({
    id: "emory-anita-devineni",
    name: "Devineni Lab",
    pi: "Anita V. Devineni",
    institution: "Emory University",
    city: "Atlanta",
    state: "GA",
    website: "https://devinenilab.org/",
    fields: ["Neuroscience", "Cell Biology", "Behavior"],
    description:
      "Fruit-fly neural-circuit research investigates how sensory and internal-state information shapes flexible behavior.",
    availability: "open",
    experience: "entry",
    eligibility: "unknown",
    eligibilityNote:
      "Scientific bachelor's and previous research are documented; confirm the proposed one-year appointment, fly/neuroscience preparation and in-person schedule.",
    requirements: [
      "Scientific bachelor's or equivalent training; prior research experience and STEM background requested.",
      "One- to two-year commitment expected; organization and problem-solving required. Fly, neuroscience and programming experience are favorable.",
      "PI requests applicants write their own inquiry and cover-letter text; AI-generated emails will not receive a response.",
    ],
    applicationUrl:
      "https://staff-emory.icims.com/jobs/163843/research-specialist%2C-biology---emory-college-of-arts-and-sciences/job",
    applicationMethod:
      "Apply to Research Specialist163843 with a cover letter and CV, then follow the PI's lab instructions. The official posting verifies regular full-time staff employment; salary is not shown.",
    strengths: [
      "Immunostaining, microscopy, records and analysis transfer to defined experiments under supervision.",
    ],
    gaps: [
      "Fly husbandry, dissections, optogenetics, functional imaging and any software/hardware work need training.",
    ],
    pathway: {
      kind: "entry-role",
      compensation: "paid",
      audience: "general",
      time: "full-time",
      minimumMonths: 12,
      sourceUrl:
        "https://staff-emory.icims.com/jobs/163843/research-specialist%2C-biology---emory-college-of-arts-and-sciences/job",
      evidence:
        "Current regular full-time Research Specialist staff posting names the Devineni Lab, requires a scientific bachelor's/equivalent with prior research requested, and expects one to two years.",
    },
    sources: [
      {
        url: "https://devinenilab.org/",
        title: "Devineni Lab research",
        claims: ["research", "environment"],
        evidence:
          "Describes fly taste circuits, internal-state integration, optogenetics, behavior and functional imaging.",
      },
      {
        url: "https://staff-emory.icims.com/jobs/163843/research-specialist%2C-biology---emory-college-of-arts-and-sciences/job",
        title: "Devineni Research Specialist163843",
        claims: ["research", "availability", "requirements"],
        evidence:
          "Regular full-time staff vacancy; scientific bachelor's/equivalent, prior research requested, one- to two-year commitment; fly/neuroscience/programming preferred.",
      },
      {
        url: "https://devinenilab.org/join-us",
        title: "Devineni technician instructions and mentoring",
        claims: ["availability", "requirements", "environment"],
        evidence:
          "PI requests independently written applications, provides training and mentoring philosophy, and reports all seven previous technicians of at least one year coauthored publications.",
      },
    ],
  }),
  researchLab({
    id: "csu-santangelo",
    name: "Santangelo Lab",
    pi: "Thomas J. Santangelo",
    institution: "Colorado State University",
    city: "Fort Collins",
    state: "CO",
    website: "https://santangelolab.colostate.edu/research/",
    fields: ["Molecular Biology", "DNA Repair", "Microbiology"],
    description:
      "Archaeal molecular-biology studies investigate chromatin, DNA repair, replication and transcription using genetically tractable extremophile models.",
    availability: "open",
    experience: "entry",
    eligibility: "unknown",
    eligibilityNote:
      "The lab explicitly accepts nonstudents and requires no experience for its part-time operations role. Confirm current staffing need, compensation and schedule directly.",
    requirements: [
      "Reliable, punctual and self-motivated; no prior experience necessary. Approximately 10–20 hours weekly.",
      "Follow laboratory protocols; media/reagent preparation, sterilization and operations are the main duties, with experimental assistance as needed.",
    ],
    applicationUrl: "https://santangelolab.colostate.edu/opportunities/",
    applicationMethod:
      "Email Tom Santangelo a resume and cover letter for Lab Operations Assistant. Pay depends on experience and qualifications; no amount or deadline is given.",
    strengths: [
      "Reagent preparation, pipetting, records and laboratory familiarity support the listed operations duties.",
    ],
    gaps: [
      "Part-time operations support offers limited independent project work; archaeal/anaerobic culture requires training.",
    ],
    pathway: {
      kind: "entry-role",
      compensation: "paid",
      audience: "general",
      time: "part-time",
      minimumMonths: null,
      sourceUrl: "https://santangelolab.colostate.edu/opportunities/",
      evidence:
        "Explicit paid Lab Operations Assistant advertisement accepts undergraduates or nonstudents, states no experience necessary, and requests 10–20 hours weekly; pay based on qualifications.",
    },
    sources: [
      {
        url: "https://santangelolab.colostate.edu/research/",
        title: "Santangelo Lab archaeal research",
        claims: ["research", "environment"],
        evidence:
          "Describes Thermococcus genetic manipulation, anaerobic culture and molecular research platforms.",
      },
      {
        url: "https://santangelolab.colostate.edu/opportunities/",
        title: "Lab Operations Assistant and participation routes",
        claims: ["availability", "requirements"],
        evidence:
          "Nonstudents accepted; entry level with no experience; 10–20 hours weekly; compensation based on qualifications. Resume and cover letter to Tom Santangelo required.",
      },
      {
        url: "https://santangelolab.colostate.edu/people/",
        title: "Santangelo PI and team",
        claims: ["research", "environment"],
        evidence:
          "Identifies Tom Santangelo as Colorado State biochemistry/molecular-biology professor and documents staff/student training outcomes.",
      },
    ],
  }),
  bcmEntry({
    id: "bcm-corradetti",
    name: "Corradetti Laboratory",
    pi: "Bruna Corradetti",
    website: "https://www.bcm.edu/people-search/bruna-corradetti-105806",
    job: "https://jobs.bcm.edu/job/Houston-Research-Technician-II-TX-77001/26210-en_US/",
    fields: ["Regenerative Medicine", "Stem Cell Biology"],
    description:
      "Develops regenerative approaches involving stem cells and extracellular vesicles, including preclinical spina bifida repair research.",
    methods:
      "Cell culture, PCR, immunostaining and experimental documentation overlap with the advertised work.",
    gap: "Extracellular-vesicle isolation, flow cytometry and preclinical animal procedures need training or confirmation.",
    preferred:
      "Although the formal minimum says no experience, the summary seeks research experience and a strong cell/molecular background; master's preparation and advanced EV/animal techniques are preferred.",
    evidence:
      "Official profile identifies Bruna Corradetti in CPEH and describes stem-cell regenerative and immunomodulatory research through selected publications; the vacancy details stem-cell, EV and spina bifida experiments.",
  }),
  bcmEntry({
    id: "bcm-bround",
    name: "Bround Laboratory",
    pi: "Michael Bround",
    website: "https://www.bcm.edu/research/faculty-labs/michael-bround-lab",
    job: "https://jobs.bcm.edu/job/Houston-Research-Technician-II-TX-77001/26368-en_US/",
    fields: ["Mitochondrial Biology", "Cardiovascular Biology"],
    description:
      "Investigates mitochondrial signaling, metabolism and cell death in heart, skeletal muscle and neurodegenerative disease models.",
    methods:
      "Culture, western blotting, qPCR, staining and microscopy directly overlap with several technician duties.",
    gap: "Mouse husbandry, surgery, echocardiography and muscle physiology are not demonstrated skills.",
    preferred:
      "Must be willing to work with mice; rodent husbandry or surgical experience is a strong preference. The posting explicitly allows learning animal surgery.",
    evidence:
      "Lab overview documents mitochondrial calcium signaling, ANT permeability-pore research and molecular, cellular and animal disease models.",
  }),
  bcmEntry({
    id: "bcm-alexandra-stevens",
    name: "Stevens Pediatric Leukemia Laboratory",
    pi: "Alexandra Mclean Stevens",
    website: "https://www.bcm.edu/people-search/alexandra-stevens-31201",
    job: "https://jobs.bcm.edu/job/Research-Technician-II-Pediatrics-Oncology/26403-en_US/",
    fields: ["Pediatric Leukemia", "Chemotherapy Resistance"],
    description:
      "Studies pediatric acute myeloid leukemia treatment resistance and evaluates agents targeting leukemia-initiating cells.",
    methods:
      "qPCR, immunoblotting, experimental records and clinical communication transfer to leukemia research.",
    gap: "Mouse models, flow cytometry, apoptosis assays and handling irreplaceable primary samples require additional training.",
    preferred:
      "Mouse work comfort and excellent spoken/written English are required; flow cytometry, qPCR and murine-model experience are helpful but not required. The posting explicitly provides training for flow and primary samples.",
    evidence:
      "Official profile identifies the pediatric hematology/oncology PI in Houston; the vacancy describes AML drug-resistance mechanisms, leukemia-initiating cells and clinical-team interfaces.",
  }),
  bcmEntry({
    id: "bcm-holder",
    name: "Holder Laboratory",
    pi: "Jimmy Lloyd Holder Jr.",
    website:
      "https://www.texaschildrens.org/find-a-provider/jimmy-lloyd-holder-jr-md-phd",
    job: "https://jobs.bcm.edu/job/Research-Technician-II-Pediatrics-Neurology-NRI/26350-en_US",
    fields: ["Neurodevelopmental Disorders", "Molecular Genetics"],
    description:
      "Uses molecular and mouse approaches to investigate the genetic and neurologic mechanisms of developmental and psychiatric disorders.",
    methods:
      "PCR, qPCR, protein extraction, western blotting and documentation overlap with the listed duties.",
    gap: "Mouse handling and behavioral experiments are unverified; the preferred section specifically says mouse-handling experience is needed.",
    preferred:
      "The minimum says no experience, but the preferred section states the candidate must have mouse-handling experience. Resolve that apparent stronger preference before applying; CV and three references requested.",
    evidence:
      "Texas Children's identifies Holder as a Duncan NRI principal investigator; the official vacancy specifies neurodevelopmental/neuropsychiatric genetics, tissue molecular assays and mouse behavior.",
  }),
  bcmEntry({
    id: "bcm-hajjar",
    name: "Hajjar Laboratory",
    pi: "Ihab Hajjar",
    website: "https://www.bcm.edu/people-search/ihab-hajjar-205690",
    job: "https://jobs.bcm.edu/job/Research-Technician-II-Alzheimer%26apos%3Bs-Disease-and-Neurodegenerative-Disorders/26309-en_US",
    fields: ["Alzheimer's Disease", "Clinical Biorepository"],
    description:
      "Supports Alzheimer's and neurodegenerative disease research through human biospecimens, biomarker testing and vascular assessments.",
    methods:
      "Clinical documentation, data organization and laboratory records transfer to biorepository operations.",
    gap: "PBMC/blood fractionation, OpenSpecimen, Lumipulse testing and vascular assessment methods are unverified.",
    preferred:
      "Prior processing of blood-derived biospecimens is preferred; responsibilities include human sample handling, inventory, Lumipulse and pulse-wave testing.",
    evidence:
      "Official BCM profile identifies Ihab Hajjar as professor of neurology and medicine in Houston; the vacancy names the Hajjar Lab and its Alzheimer's biorepository and biomarker work.",
  }),
  researchLab({
    id: "bcm-xia-gao",
    name: "Xia Gao Laboratory",
    pi: "Xia Gao",
    institution: "Baylor College of Medicine",
    city: "Houston",
    state: "TX",
    website:
      "https://jobs.bcm.edu/job/Research-Technician-II-Metabolism/21976-en_US/",
    fields: ["Cancer Metabolism", "Obesity"],
    description:
      "Studies amino-acid metabolism in cancer and obesity using cellular assays, metabolomics and dietary interventions in mice.",
    availability: "open",
    experience: "entry",
    eligibility: "unknown",
    eligibilityNote:
      "Bachelor-level minimum and explicit laboratory training are documented; confirm funding, work authorization, current availability and full-time schedule with the employer.",
    applicationUrl:
      "https://jobs.bcm.edu/job/Research-Technician-II-Metabolism/21976-en_US/",
    applicationMethod:
      "Use Apply now on requisition 21976. Annual salary is $35,591–$41,872; the older posting remains accessible with an application link, so reconfirm vacancy status before preparing a full application.",
    requirements: [
      "Bachelor's in a basic science or related field; no experience required. Four years of related experience may substitute.",
      "On-site Monday–Friday schedule. Cell culture and mouse-handling experience are desired; laboratory training is explicitly provided.",
    ],
    strengths: [
      "Culture, western blotting and qPCR are specifically named duties.",
    ],
    gaps: [
      "Dietary mouse experiments, metabolomics and work authorization need confirmation.",
    ],
    pathway: {
      kind: "entry-role",
      compensation: "paid",
      audience: "general",
      sourceUrl:
        "https://jobs.bcm.edu/job/Research-Technician-II-Metabolism/21976-en_US/",
      evidence:
        "Official posting has Apply now, bachelor's/no-experience minimum, explicit laboratory training and $35,591–$41,872 annual salary; older listing needs employer reconfirmation.",
    },
    sources: [
      {
        url: "https://jobs.bcm.edu/job/Research-Technician-II-Metabolism/21976-en_US/",
        title:
          "Xia Gao Research Technician II: research, training and qualifications",
        claims: ["research", "availability", "requirements", "environment"],
        evidence:
          "Names Xia Gao, cancer/obesity amino-acid metabolism, culture/western/qPCR and mouse diet studies. Offers training and salary $35,591–$41,872, bachelor's minimum with no experience, and Apply now; no deadline stated.",
      },
    ],
  }),
  researchLab({
    id: "uf-eshraghi",
    name: "Eshraghi Laboratory",
    pi: "Aria Eshraghi",
    institution: "University of Florida",
    city: "Gainesville",
    state: "FL",
    website: "https://experts.ufl.edu/experts/aria.eshraghi/",
    fields: ["Bacterial Pathogenesis", "Host-Pathogen Interactions"],
    description:
      "Studies bacterial virulence, immune evasion and Francisella adaptation, with antimicrobial and vaccine applications.",
    availability: "open",
    experience: "entry",
    eligibility: "unknown",
    eligibilityNote:
      "A biology/life-science bachelor's is the stated minimum. Confirm authorization and suitability for infectious-disease and vector work; the staff appointment is time-limited.",
    deadline: { kind: "fixed", date: "2026-11-03" },
    applicationUrl:
      "https://explore.jobs.ufl.edu/cw/en-us/job/541763/biological-scientist-i",
    applicationMethod:
      "Apply to Biological Scientist I 541763 with cover letter and resume by 11:55 p.m. ET on November 3, 2026. Advertised pay is $22.03/hour.",
    requirements: [
      "Bachelor's degree in biology or closely related life science.",
      "PCR, culture, microbiology, analysis and scientific-writing experience are preferred; full-time time-limited role and health assessment required.",
    ],
    strengths: [
      "PCR, nucleic-acid work, mammalian culture, writing and analysis overlap with preferred duties.",
    ],
    gaps: [
      "Bacterial genetic screens, arthropod culture, vector infection and pathogen protocols require further preparation.",
    ],
    pathway: {
      kind: "entry-role",
      compensation: "paid",
      audience: "general",
      sourceUrl:
        "https://explore.jobs.ufl.edu/cw/en-us/job/541763/biological-scientist-i",
      time: "full-time",
      evidence:
        "Current full-time Biological Scientist I posting names the PI, requires a relevant bachelor's without a years-of-experience minimum, and pays $22.03/hour.",
    },
    sources: [
      {
        url: "https://experts.ufl.edu/experts/aria.eshraghi/",
        title: "Aria Eshraghi: official research profile",
        claims: ["research", "environment"],
        evidence:
          "Documents bacterial toxins, immune evasion and Francisella pathogenesis research in Gainesville.",
      },
      {
        url: "https://explore.jobs.ufl.edu/cw/en-us/job/541763/biological-scientist-i",
        title: "Eshraghi Laboratory Biological Scientist I 541763",
        claims: ["availability", "requirements", "deadline", "research"],
        evidence:
          "Posted October 20, 2026; closes November 3 at 11:55 p.m. ET. Bachelor's minimum, $22.03/hour, full-time time-limited; PCR/culture/data/writing preferred; cover letter and resume required.",
      },
    ],
  }),
  ...specialistEntries.map((e) =>
    researchLab({
      id: e.id,
      name: e.name,
      pi: e.pi,
      institution: e.institution,
      city: e.city,
      state: "CA",
      website: e.website,
      fields: e.fields,
      description: e.description,
      availability: "open",
      experience: "entry",
      eligibility: "unknown",
      eligibilityNote:
        "Bachelor-level staff route is documented. Required technical experience and appointment duration need individual verification; late applications are considered only if the position remains unfilled.",
      requirements: [
        e.requirements,
        "Submit the official posting's requested documents and references. Confirm whether the position remains unfilled and the proposed appointment length.",
      ],
      applicationUrl: e.job,
      applicationMethod: `Apply through the official Junior Specialist recruitment. ${e.salary} ${e.window}`,
      deadline: { kind: "fixed", date: e.deadline },
      strengths: [e.strengths],
      gaps: [e.gaps],
      pathway: {
        kind: "entry-role",
        compensation: "paid",
        audience: "general",
        sourceUrl: e.job,
        evidence: `${e.requirements} ${e.salary} ${e.window}`,
        time: e.fullTime ? "full-time" : "unknown",
        minimumMonths: e.minimumMonths ?? null,
      },
      sources: [
        {
          url: e.website,
          title: `${e.name}: PI and research`,
          claims: ["research", "environment"],
          evidence: e.researchEvidence,
        },
        {
          url: e.job,
          title: `${e.name}: Junior Specialist recruitment`,
          claims: ["research", "availability", "requirements", "deadline"],
          evidence: `${e.requirements} ${e.salary} ${e.window}`,
        },
      ],
    }),
  ),
  ...inquiryEntries.map(inquiry),
];
