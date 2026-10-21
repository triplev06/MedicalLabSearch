import type { Lab } from "../../domain/types";
import { researchLab } from "./research-entry";

// Official sources reviewed 2026-10-21; research activity does not establish hiring.
export const broaderLabs: Lab[] = [
  researchLab({
    id: "gsu-plemper",
    name: "Plemper Laboratory",
    institution: "Georgia State University",
    pi: "Richard Plemper",
    city: "Atlanta",
    state: "GA",
    fields: ["Virology", "Antiviral Drug Discovery"],
    description:
      "Studies respiratory RNA viruses and develops antiviral candidates using biochemical assays, screening, animal models and human organoids.",
    website: "https://biomedical.gsu.edu/profile/plemper/",
    strengths: [
      "Cell culture, PCR and protein assays provide a foundation for experimental virology.",
    ],
    gaps: [
      "Viral biosafety, animal models and antiviral screening require training; no suitable vacancy or role requirements verified.",
    ],
    evidence:
      "Official profile names Richard Plemper and documents molnupiravir contributions, additional antiviral candidates, a high-throughput screening facility, organoid/animal models and leadership of the Georgia State/Emory AViDD center.",
  }),
  researchLab({
    id: "temple-cordes",
    name: "Cordes Laboratory",
    institution: "Temple University",
    pi: "Erik Cordes",
    city: "Philadelphia",
    state: "PA",
    fields: ["Marine Ecology", "Ocean Exploration"],
    description:
      "Investigates deep-sea coral and seep ecosystems and environmental change using ocean exploration, molecular ecology and habitat modeling.",
    website: "https://sites.temple.edu/cordeslab/",
    strengths: [
      "Scientific writing and experimental data organization offer general research support skills.",
    ],
    gaps: [
      "Marine fieldwork, oceanographic instruments, ecological statistics and habitat modeling are unverified; no suitable vacancy verified.",
    ],
    sources: [
      {
        url: "https://sites.temple.edu/cordeslab/",
        title: "Cordes Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Research includes corals, seeps and seamounts; methods include robotic/submersible exploration, marine aquaria, RNA sequencing and predictive habitat models.",
      },
      {
        url: "https://sites.temple.edu/cordeslab/people/",
        title: "Cordes Laboratory people",
        claims: ["research", "environment"],
        evidence:
          "Names Erik Cordes and lists graduate and undergraduate researchers and former members; no assistant vacancy is established.",
      },
    ],
  }),
  researchLab({
    id: "umbc-brewster",
    name: "Brewster Laboratory",
    institution: "University of Maryland, Baltimore County",
    pi: "Rachel Brewster",
    city: "Baltimore",
    state: "MD",
    fields: ["Developmental Biology", "Hypoxia Biology"],
    description:
      "Uses zebrafish embryos, genetics and microscopy to study neural-tube development and adaptation to low oxygen.",
    website: "https://brewsterlab.umbc.edu/research/",
    strengths: [
      "Microscopy and molecular assays transfer to cell-level developmental questions.",
    ],
    gaps: [
      "Zebrafish husbandry, embryo manipulation and developmental imaging require training; no suitable role requirements verified.",
    ],
    sources: [
      {
        url: "https://brewsterlab.umbc.edu/research/",
        title: "Brewster Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Describes zebrafish neural-tube and hypoxia work, high-resolution/time-lapse microscopy, and a published dynamic neurulation model.",
      },
      {
        url: "https://brewsterlab.umbc.edu/meet-the-lab/",
        title: "Brewster Laboratory team",
        claims: ["research", "environment"],
        evidence:
          "Names Rachel Brewster as principal investigator and describes graduate and undergraduate research projects; student participation does not verify paid assistant work.",
      },
    ],
  }),
  researchLab({
    id: "unlv-hedlund",
    name: "Hedlund Laboratory",
    institution: "University of Nevada, Las Vegas",
    pi: "Brian Hedlund",
    city: "Las Vegas",
    state: "NV",
    fields: ["Microbial Ecology", "Microbiome"],
    description:
      "Explores microbial diversity in springs and intestinal infection using cultivation, environmental genomics and isotope approaches.",
    website: "https://www.unlv.edu/people/brian-hedlund",
    strengths: [
      "PCR, microscopy and data documentation provide a general molecular research foundation.",
    ],
    gaps: [
      "Environmental sampling, microbial cultivation, metagenomics and isotope analysis are unverified; suitable recruitment is unknown.",
    ],
    evidence:
      "Official profile identifies Brian Hedlund, SeqCode co-authorship, an international PIRE project, environmental systems biology, isotope methods and animal models of C. difficile infection.",
  }),
  researchLab({
    id: "umbc-summers",
    name: "Summers Laboratory",
    institution: "University of Maryland, Baltimore County",
    pi: "Michael Summers",
    city: "Baltimore",
    state: "MD",
    fields: ["Structural Biology", "HIV Biology"],
    description:
      "Investigates retroviral assembly and genome packaging through structural and functional studies of viral proteins and RNA.",
    website: "https://chemistry.umbc.edu/faculty/michael-summers/",
    strengths: [
      "Protein assays and molecular biology provide background for mechanistic research.",
    ],
    gaps: [
      "NMR, structural analysis and protein/RNA preparation are unverified; undergraduate teaching does not establish assistant eligibility.",
    ],
    evidence:
      "Official profile documents HIV structural and RNA-packaging findings, NMR studies, undergraduate research teaching and AAAS, Biophysical Society and Presidential mentoring awards; suitable employment requirements are unverified.",
  }),
  researchLab({
    id: "vcu-ningjun-li",
    name: "Ningjun Li Laboratory",
    institution: "Virginia Commonwealth University",
    pi: "Ningjun Li",
    city: "Richmond",
    state: "VA",
    fields: ["Renal Biology", "Pharmacology"],
    description:
      "Investigates renal signaling in hypertension, chemotherapy-associated kidney injury and chronic kidney disease using cellular and animal systems.",
    website: "https://pharmtox.vcu.edu/about/directory/ningjun-li-md.html",
    strengths: [
      "Cell culture and molecular assays transfer to cell-signaling experiments.",
    ],
    gaps: [
      "Renal physiology, transgenic animals, telemetry and mass spectrometry require training; suitable assistant prerequisites are unknown.",
    ],
    evidence:
      "Official Richmond profile names Ningjun Li, renal signaling and cisplatin-injury projects, knockout models, in-vivo imaging and LC-MS/MS; selected studies report interventions in kidney injury and hypertension.",
  }),
  researchLab({
    id: "charlotte-chi",
    name: "Richard Chi Laboratory",
    institution: "University of North Carolina at Charlotte",
    pi: "Richard Chi",
    city: "Charlotte",
    state: "NC",
    fields: ["Cell Biology", "Membrane Trafficking"],
    description:
      "Studies membrane trafficking with yeast genetics, protein biochemistry, molecular biology and live-cell fluorescence microscopy.",
    website: "https://biology.charlotte.edu/directory/richard-chi-phd/",
    strengths: [
      "Microscopy, protein assays and molecular techniques overlap with listed research methods.",
    ],
    gaps: [
      "Yeast genetics and trafficking-specific assays are unverified; undergraduate-research leadership is not a suitable vacancy.",
    ],
    evidence:
      "Official Charlotte profile identifies Richard Chi, membrane-trafficking methods and undergraduate-research leadership; no lab-specific hiring or training outcomes are established.",
  }),
  researchLab({
    id: "utsa-hsieh",
    name: "Jenny Hsieh Laboratory",
    institution: "University of Texas at San Antonio",
    pi: "Jenny Hsieh",
    city: "San Antonio",
    state: "TX",
    fields: ["Neuroscience", "Stem Cells"],
    description: "Investigates epilepsy, neurogenesis and stem-cell biology.",
    website: "https://sciences.utsa.edu/faculty/profiles/hsieh-jenny.html",
    strengths: [
      "Cell culture and molecular biology provide a foundation for cellular neuroscience.",
    ],
    gaps: [
      "Neural stem-cell culture, epilepsy models and project-specific duties are unverified; no suitable vacancy or role criteria verified.",
    ],
    evidence:
      "Official San Antonio faculty page names Jenny Hsieh and lists epilepsy, neurogenesis and stem-cell interests and Brain Health Consortium leadership; it does not describe role-specific requirements or mentoring outcomes.",
  }),
  researchLab({
    id: "marquette-hyngstrom",
    name: "Allison Hyngstrom Research Group",
    institution: "Marquette University",
    pi: "Allison Hyngstrom",
    city: "Milwaukee",
    state: "WI",
    fields: ["Stroke Rehabilitation", "Exercise Physiology"],
    description:
      "Studies impaired exercise capacity after stroke, including muscle activation, blood-flow reflexes and ischemic conditioning.",
    website:
      "https://today.marquette.edu/2026/04/marquette-physical-therapy-professor-receives-1-7-million-nih-grant-to-study-exercise-capacity-in-stroke-survivors/",
    strengths: [
      "Clinical documentation and experimental data analysis may support human research workflows.",
    ],
    gaps: [
      "Exercise testing, neuromuscular physiology and clinical-trial operations are unverified; no suitable vacancy verified.",
    ],
    evidence:
      "April 2026 institutional report identifies Allison Hyngstrom and a jointly led NIH-funded metaboreflex project with Medical College of Wisconsin collaborators and a planned ischemic-conditioning clinical trial; funding is not staff recruitment.",
  }),
  researchLab({
    id: "wayne-pile",
    name: "Pile Laboratory",
    institution: "Wayne State University",
    pi: "Lori Pile",
    city: "Detroit",
    state: "MI",
    fields: ["Cancer Epigenetics", "Gene Regulation"],
    description:
      "Examines how the SIN3 histone deacetylase complex regulates transcription, proliferation and metabolism in Drosophila and lung cancer.",
    website: "https://cancerbiologyprogram.med.wayne.edu/profile/at1230",
    strengths: [
      "Cancer cell culture, PCR and Western blotting provide relevant molecular and biochemical skills.",
    ],
    gaps: [
      "Chromatin-specific assays, fly genetics and suitable role prerequisites are unverified.",
    ],
    evidence:
      "Official Detroit profile identifies Lori Pile and SIN3/chromatin work in Drosophila and lung cancer using biochemical, molecular and genetic approaches; no assistant recruitment or mentoring outcomes are documented.",
  }),
  researchLab({
    id: "umkc-wyckoff",
    name: "Gerald Wyckoff Research Group",
    institution: "University of Missouri-Kansas City",
    pi: "Gerald Wyckoff",
    city: "Kansas City",
    state: "MO",
    fields: ["Computational Biology", "Evolutionary Genetics"],
    description:
      "Develops bioinformatics tools for drug discovery, phylogenetics and detection of positive selection.",
    website:
      "https://net2.umkc.edu/intapps/ur-links/facultydetail.aspx?id=Y7IM4f9lG0XNcPL51cmS53HyeFdDr6tjO4xlq%2FPTftc%3D",
    strengths: [
      "Molecular biology concepts, data organization and scientific writing offer background for collaborative projects.",
    ],
    gaps: [
      "Programming, phylogenetic inference and computational drug-discovery workflows are unverified; the undergraduate connection page does not establish paid employment.",
    ],
    evidence:
      "Official UMKC UR-Linked faculty record identifies Gerald Wyckoff and molecular evolutionary genetics, drug-discovery and bioinformatics work; its student mentor-contact guidance does not establish an assistant vacancy.",
  }),
  researchLab({
    id: "umkc-mcgraw",
    name: "McGraw Laboratory",
    institution: "University of Missouri-Kansas City",
    pi: "Hillary McGraw",
    city: "Kansas City",
    state: "MO",
    fields: ["Developmental Biology", "Sensory Regeneration"],
    description:
      "Uses zebrafish to study sensory-cell development and regeneration, collective cell migration and ceramide transport.",
    website: "https://research.umkc.edu/mcgrawlab/research",
    strengths: [
      "Microscopy and molecular biology transfer to cellular developmental research.",
    ],
    gaps: [
      "Zebrafish handling, developmental genetics and regeneration assays require training; suitable role requirements are unknown.",
    ],
    sources: [
      {
        url: "https://research.umkc.edu/mcgrawlab/research",
        title: "McGraw Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Describes zebrafish sensory-cell development and regeneration, cell migration and ceramide-transfer protein research.",
      },
      {
        url: "https://research.umkc.edu/mcgrawlab/team",
        title: "McGraw Laboratory team",
        claims: ["research", "environment"],
        evidence:
          "Names Hillary McGraw as associate professor and lists a current and former graduate student.",
      },
      {
        url: "https://research.umkc.edu/mcgrawlab/about-us",
        title: "McGraw Laboratory location",
        claims: ["research", "environment"],
        evidence:
          "Locates the laboratory at 5007 Rockhill Road, Kansas City, Missouri; no employment opening is established.",
      },
    ],
  }),
];
