import type { Lab } from "../../domain/types";
import { researchLab } from "./research-entry";

// Research groups verified from official pages; scores are coarse editorial judgments.
export const nationalSouthLabs: Lab[] = [
  researchLab({
    id: "national-south-allison",
    name: "Allison Laboratory",
    institution: "UT MD Anderson Cancer Center",
    pi: "James P. Allison",
    city: "Houston",
    state: "TX",
    fields: ["Cancer immunology", "Molecular biology"],
    description:
      "Studies T cell receptor regulation and immune checkpoint mechanisms to guide combination cancer immunotherapies.",
    website:
      "https://www.mdanderson.org/research/departments-labs-institutes/labs/allison-laboratory.html",
    strengths: [
      "Molecular assays and immunostaining support immune signaling studies.",
    ],
    gaps: [
      "CyTOF, spatial profiling and advanced immune phenotyping would require training.",
    ],
    evidence:
      "Studies T cell receptor regulation and immune checkpoint mechanisms to guide combination cancer immunotherapies. The official overview describes single-cell and spatial immune profiling alongside clinical oncology collaborations.",
  }),
  researchLab({
    id: "national-south-wargo",
    name: "Wargo Laboratory",
    institution: "UT MD Anderson Cancer Center",
    pi: "Jennifer Wargo",
    city: "Houston",
    state: "TX",
    fields: ["Translational cancer biology", "Molecular biology"],
    description:
      "Investigates melanoma genetics, immune evasion and microbiome influences on cancer treatment responses.",
    website:
      "https://www.mdanderson.org/research/departments-labs-institutes/labs/wargo-laboratory.html",
    strengths: [
      "Cancer biology and clinical documentation align with translational treatment studies.",
    ],
    gaps: [
      "Microbiome analysis and genomic profiling experience are unverified.",
    ],
    evidence:
      "Investigates melanoma genetics, immune evasion and microbiome influences on cancer treatment responses. The lab connects mechanistic melanoma research with clinical trials and its microbiome translational program.",
  }),
  researchLab({
    id: "national-south-schlacher",
    name: "Schlacher Laboratory",
    institution: "UT MD Anderson Cancer Center",
    pi: "Katharina Schlacher",
    city: "Houston",
    state: "TX",
    fields: ["DNA repair", "Molecular biology"],
    description:
      "Examines nuclear and mitochondrial replication stability using Fanconi anemia to understand cancer predisposition and therapeutic response.",
    website: "https://faculty.mdanderson.org/profiles/katharina_schlacher.html",
    strengths: [
      "PCR and protein assays provide a foundation for replication biology.",
    ],
    gaps: [
      "Single-molecule approaches and animal models would require training.",
    ],
    evidence:
      "Examines nuclear and mitochondrial replication stability using Fanconi anemia to understand cancer predisposition and therapeutic response. The profile describes an integrated single-molecule, single-cell and animal-model research program.",
  }),
  researchLab({
    id: "national-south-rezvani",
    name: "Rezvani Laboratory",
    institution: "UT MD Anderson Cancer Center",
    pi: "Katy Rezvani",
    city: "Houston",
    state: "TX",
    fields: ["Cancer immunotherapy", "Molecular biology"],
    description:
      "Studies natural killer cell protection against blood cancers and solid tumors and engineers improved cellular therapies.",
    website:
      "https://www.mdanderson.org/research/departments-labs-institutes/labs/rezvani-laboratory.html",
    strengths: [
      "Mammalian cell culture and molecular assays relate to immune-cell experiments.",
    ],
    gaps: ["CAR engineering, CRISPR and mass cytometry are unverified skills."],
    evidence:
      "Studies natural killer cell protection against blood cancers and solid tumors and engineers improved cellular therapies. The official lab page combines cellular engineering with receptor profiling and tumor immune-evasion studies.",
  }),
  researchLab({
    id: "national-south-kalluri",
    name: "Kalluri Laboratory",
    institution: "UT MD Anderson Cancer Center",
    pi: "Raghu Kalluri",
    city: "Houston",
    state: "TX",
    fields: ["Tumor microenvironment", "Molecular biology"],
    description:
      "Examines stromal responses, exosome biology and mechanisms of progression in pancreatic cancer, triple-negative breast cancer and glioblastoma.",
    website:
      "https://www.mdanderson.org/education-training/research-training/early-career-pathway-programs/upwards-undergraduate-academic-year-program/faculty-mentors.html",
    strengths: [
      "Cell culture, microscopy and protein analysis align with tumor-stroma questions.",
    ],
    gaps: [
      "Exosome methods and animal-model experience would need confirmation.",
    ],
    evidence:
      "Examines stromal responses, exosome biology and mechanisms of progression in pancreatic cancer, triple-negative breast cancer and glioblastoma. The detailed mentor research statement connects microenvironment and exosome discoveries to clinical translation.",
  }),
  researchLab({
    id: "national-south-sood",
    name: "Sood Laboratory",
    institution: "UT MD Anderson Cancer Center",
    pi: "Anil Sood",
    city: "Houston",
    state: "TX",
    fields: ["Translational cancer biology", "Molecular biology"],
    description:
      "Studies noncoding RNA, tumor microenvironment, chronic stress and therapeutic approaches connecting laboratory discoveries with clinical research.",
    website:
      "https://www.mdanderson.org/research/departments-labs-institutes/labs/sood-laboratory.dir.html/1000",
    strengths: [
      "PCR, cell culture and clinical research interests match RNA and translational work.",
    ],
    gaps: [
      "Extracellular-vesicle techniques and specialized tumor models require training.",
    ],
    evidence:
      "Studies noncoding RNA, tumor microenvironment, chronic stress and therapeutic approaches connecting laboratory discoveries with clinical research. The official overview integrates RNA therapeutics, microenvironment biology and bench-to-clinic investigation.",
  }),
  researchLab({
    id: "national-south-davies",
    name: "Davies Laboratory",
    institution: "UT MD Anderson Cancer Center",
    pi: "Michael A. Davies",
    city: "Houston",
    state: "TX",
    fields: ["Melanoma research", "Molecular biology"],
    description:
      "Studies melanoma signaling, targeted and immune therapy resistance, and central nervous system metastasis.",
    website: "https://faculty.mdanderson.org/profiles/michael_davies.html",
    strengths: [
      "Cancer cell assays and clinical documentation suit translational resistance studies.",
    ],
    gaps: [
      "Brain-metastasis models and genomic biomarker workflows are unverified.",
    ],
    evidence:
      "Studies melanoma signaling, targeted and immune therapy resistance, and central nervous system metastasis. The profile documents a translational laboratory linked to melanoma clinical trials and therapeutic development.",
  }),
  researchLab({
    id: "national-south-counter",
    name: "Counter Laboratory",
    institution: "Duke University School of Medicine",
    pi: "Christopher M. Counter",
    city: "Durham",
    state: "NC",
    fields: ["RAS cancer biology", "Molecular biology"],
    description:
      "Investigates RAS mutation patterns, codon usage and oncogenic signaling to understand cancer initiation and develop inhibitors.",
    website: "https://counter.labs.duke.edu/our-research/",
    strengths: [
      "PCR, cell culture and protein assays align with oncogenic signaling.",
    ],
    gaps: [
      "CRISPR screens, proximity proteomics and sensitive sequencing are unverified.",
    ],
    evidence:
      "Investigates RAS mutation patterns, codon usage and oncogenic signaling to understand cancer initiation and develop inhibitors. The research program combines mechanistic RAS studies with sequencing, functional screens and inhibitor development.",
  }),
  researchLab({
    id: "national-south-pendergast",
    name: "Pendergast Laboratory",
    institution: "Duke University School of Medicine",
    pi: "Ann Marie Pendergast",
    city: "Durham",
    state: "NC",
    fields: ["Cancer metastasis", "Molecular biology"],
    description:
      "Studies ABL kinase signaling and intercellular communication during cancer metastasis and lung injury regeneration.",
    website: "https://sites.duke.edu/pendergastlab/",
    strengths: [
      "Microscopy, immunostaining and protein assays fit migration and kinase biology.",
    ],
    gaps: [
      "Animal models and advanced metastasis methods would require training.",
    ],
    evidence:
      "Studies ABL kinase signaling and intercellular communication during cancer metastasis and lung injury regeneration. The official research overview integrates tyrosine kinase mechanisms with metastasis and lung regeneration models.",
  }),
  researchLab({
    id: "national-south-xiao-fan-wang",
    name: "Xiao-Fan Wang Laboratory",
    institution: "Duke University School of Medicine",
    pi: "Xiao-Fan Wang",
    city: "Durham",
    state: "NC",
    fields: ["Cancer immunology", "Molecular biology"],
    description:
      "Investigates interactions between tumor immune activity and nervous-system signaling, including tumor-derived GABA and lung cancer immunotherapy.",
    website: "https://pcb.duke.edu/wang-lab",
    strengths: ["Cell culture and molecular assays relate to tumor signaling."],
    gaps: [
      "Specialized immune profiling and neuroimmune model experience are unverified.",
    ],
    evidence:
      "Investigates interactions between tumor immune activity and nervous-system signaling, including tumor-derived GABA and lung cancer immunotherapy. The official page describes mechanistic tumor-neuroimmune work and combination immunotherapy research.",
  }),
  researchLab({
    id: "national-south-oliver",
    name: "Oliver Laboratory",
    institution: "Duke University School of Medicine",
    pi: "Trudy G. Oliver",
    city: "Durham",
    state: "NC",
    fields: ["Lung cancer", "Molecular biology"],
    description:
      "Investigates squamous and small cell lung cancer identity, lineage plasticity and treatment resistance using mouse and patient-derived models.",
    website: "https://www.theoliverlab.com/",
    strengths: [
      "Cell culture, microscopy and lung cancer interests fit the program.",
    ],
    gaps: [
      "Mouse husbandry, lineage tracing and single-cell analysis need training.",
    ],
    evidence:
      "Investigates squamous and small cell lung cancer identity, lineage plasticity and treatment resistance using mouse and patient-derived models. The lab overview describes patient-derived systems and genetically engineered models directed toward new lung cancer treatments.",
    availability: "inquiries",
    applicationMethod:
      "The lab invites interested people with tissue culture, molecular biology and related skills to email a cover letter, CV/resume and references. Confirm whether a suitable paid research role exists and its degree requirements.",
    contact: {
      name: "Trudy G. Oliver",
      email: "tgo@duke.edu",
    },
    sources: [
      {
        url: "https://www.theoliverlab.com/",
        title: "Oliver Laboratory · official research and invitation",
        claims: ["research", "environment", "availability", "contact"],
        evidence:
          "Investigates squamous and small cell lung cancer identity, lineage plasticity and treatment resistance using mouse and patient-derived models. The lab overview describes patient-derived systems and genetically engineered models directed toward new lung cancer treatments. The lab explicitly invites interested researchers to contact the group; no suitable vacancy is confirmed.",
      },
    ],
  }),
  researchLab({
    id: "national-south-wood",
    name: "Wood Laboratory",
    institution: "Duke University School of Medicine",
    pi: "Kris Cameron Wood",
    city: "Durham",
    state: "NC",
    fields: ["Cancer therapy resistance", "Molecular biology"],
    description:
      "Uses genomic and pharmacological methods to understand how tumor evolution and environmental factors shape survival dependencies.",
    website: "https://cbte.pratt.duke.edu/people/kris-wood",
    strengths: [
      "Experimental analysis and mammalian cell assays support drug-response work.",
    ],
    gaps: [
      "Genomic screening and systems-level analysis would require training.",
    ],
    evidence:
      "Uses genomic and pharmacological methods to understand how tumor evolution and environmental factors shape survival dependencies. The faculty research overview links genomic perturbation and pharmacology to evolving tumor vulnerabilities.",
  }),
  researchLab({
    id: "national-south-zou",
    name: "Zou Laboratory",
    institution: "Duke University School of Medicine",
    pi: "Lee Zou",
    city: "Durham",
    state: "NC",
    fields: ["DNA damage response", "Molecular biology"],
    description:
      "Investigates how DNA damage checkpoints detect genomic instability and how cancer repair dependencies can be therapeutically targeted.",
    website: "https://pcb.duke.edu/zou-lab",
    strengths: [
      "PCR and Western blotting align with DNA-damage signaling studies.",
    ],
    gaps: ["Specialized replication and repair assays would require training."],
    evidence:
      "Investigates how DNA damage checkpoints detect genomic instability and how cancer repair dependencies can be therapeutically targeted. The official research summary connects checkpoint mechanisms to cancer-selective therapeutic vulnerabilities.",
  }),
  researchLab({
    id: "national-south-sipkins",
    name: "Sipkins Laboratory",
    institution: "Duke University School of Medicine",
    pi: "Dorothy Anna Sipkins",
    city: "Durham",
    state: "NC",
    fields: ["Tumor microenvironment", "Molecular biology"],
    description:
      "Studies tissue niches regulating cancer-cell migration, survival and regeneration in leukemia and breast cancer.",
    website:
      "https://medicine.duke.edu/divisions/hematologic-malignancies-and-cellular-therapy/research/institutes-and-labs/sipkins-lab",
    strengths: [
      "Microscopy and cell biology experience fit niche-interaction studies.",
    ],
    gaps: ["Intravital multiphoton imaging and mouse models require training."],
    evidence:
      "Studies tissue niches regulating cancer-cell migration, survival and regeneration in leukemia and breast cancer. The official lab overview describes real-time in vivo imaging combined with classical molecular and cell biology.",
  }),
  researchLab({
    id: "national-south-minna",
    name: "Minna Laboratory",
    institution: "UT Southwestern Medical Center",
    pi: "John D. Minna",
    city: "Dallas",
    state: "TX",
    fields: ["Lung cancer", "Molecular biology"],
    description:
      "Studies lung cancer vulnerabilities, small cell lineage targets, predictive biomarkers and resistance to chemotherapy and targeted therapy.",
    website: "https://labs.utsouthwestern.edu/minna-lab",
    strengths: [
      "Mammalian culture and molecular assays closely match translational lung cancer.",
    ],
    gaps: [
      "Patient-derived models and specialized biomarker platforms need training.",
    ],
    evidence:
      "Studies lung cancer vulnerabilities, small cell lineage targets, predictive biomarkers and resistance to chemotherapy and targeted therapy. The lab documents lung cancer SPORE and consortium projects connecting molecular models with therapeutic development.",
  }),
  researchLab({
    id: "national-south-james-chen",
    name: "James Chen Laboratory",
    institution: "UT Southwestern Medical Center",
    pi: "Zhijian James Chen",
    city: "Dallas",
    state: "TX",
    fields: ["Innate immunity", "Molecular biology"],
    description:
      "Investigates cellular signaling and host defense mechanisms that detect harmful insults and restore homeostasis.",
    website: "https://labs.utsouthwestern.edu/chen-lab",
    strengths: [
      "PCR, protein analysis and culture support innate signaling experiments.",
    ],
    gaps: ["Advanced innate-immunity pathway methods need training."],
    evidence:
      "Investigates cellular signaling and host defense mechanisms that detect harmful insults and restore homeostasis. The lab overview documents the cGAS discovery program and an active cell signaling and host defense research group.",
    availability: "inquiries",
    applicationMethod:
      "The official lab invites motivated researchers to contact the team. Email the PI to ask whether a suitable paid research role exists and request the actual requirements.",
    contact: {
      name: "Zhijian James Chen",
      email: "Zhijian.Chen@UTSouthwestern.edu",
    },
    sources: [
      {
        url: "https://labs.utsouthwestern.edu/chen-lab",
        title: "James Chen Laboratory · official research and invitation",
        claims: ["research", "environment", "availability"],
        evidence:
          "Investigates cellular signaling and host defense mechanisms that detect harmful insults and restore homeostasis. The lab overview documents the cGAS discovery program and an active cell signaling and host defense research group. The lab explicitly invites interested researchers to contact the group; no suitable vacancy is confirmed.",
      },
      {
        url: "https://labs.utsouthwestern.edu/chen-lab/contact-us",
        title: "James Chen Lab · official contact",
        claims: ["contact", "availability"],
        evidence:
          "Official contact page lists Zhijian.Chen@UTSouthwestern.edu and invites motivated researchers to join the team.",
      },
    ],
  }),
  researchLab({
    id: "national-south-deberardinis",
    name: "DeBerardinis Laboratory",
    institution: "UT Southwestern Medical Center",
    pi: "Ralph DeBerardinis",
    city: "Dallas",
    state: "TX",
    fields: ["Cancer metabolism", "Molecular biology"],
    description:
      "Studies metabolic pathways supporting tumor growth and inherited metabolic disorders using metabolomics, flux analysis and disease models.",
    website: "https://cri.utsw.edu/faculty/ralph-deberardinis/",
    strengths: [
      "Cell biology and experimental analysis support metabolic cancer questions.",
    ],
    gaps: [
      "Isotope tracing, metabolomics and computational flux analysis are unverified.",
    ],
    evidence:
      "Studies metabolic pathways supporting tumor growth and inherited metabolic disorders using metabolomics, flux analysis and disease models. The detailed research page integrates patient metabolism measurements with cell and animal experiments and clinical genetics.",
  }),
  researchLab({
    id: "national-south-morrison",
    name: "Morrison Laboratory",
    institution: "UT Southwestern Medical Center",
    pi: "Sean J. Morrison",
    city: "Dallas",
    state: "TX",
    fields: ["Stem cells and cancer", "Molecular biology"],
    description:
      "Compares stem-cell self-renewal and cancer-cell replication to identify mechanisms governing regeneration and tumor formation.",
    website: "https://cri.utsw.edu/faculty/sean-morrison/",
    strengths: [
      "Molecular biology and microscopy relate to self-renewal mechanisms.",
    ],
    gaps: [
      "Stem-cell models and animal experimentation would require training.",
    ],
    evidence:
      "Compares stem-cell self-renewal and cancer-cell replication to identify mechanisms governing regeneration and tumor formation. The official page describes a sustained stem-cell and cancer program and documented trainee progression to independent research careers.",
  }),
  researchLab({
    id: "national-south-akbay",
    name: "Akbay Laboratory",
    institution: "UT Southwestern Medical Center",
    pi: "Esra Akbay",
    city: "Dallas",
    state: "TX",
    fields: ["Lung cancer immunology", "Molecular biology"],
    description:
      "Studies lung tumor initiation, immune evasion and metabolic pathways that limit antitumor immunity.",
    website: "https://labs.utsouthwestern.edu/akbay-lab",
    strengths: [
      "Cell culture and protein assays align with lung cancer immune escape.",
    ],
    gaps: [
      "Transgenic and humanized mouse models and flow cytometry need training.",
    ],
    evidence:
      "Studies lung tumor initiation, immune evasion and metabolic pathways that limit antitumor immunity. The research page integrates functional tumor-metabolism studies with clinically relevant lung cancer immune-resistance models.",
  }),
  researchLab({
    id: "national-south-balko",
    name: "Balko Laboratory",
    institution: "Vanderbilt University Medical Center",
    pi: "Justin Balko",
    city: "Nashville",
    state: "TN",
    fields: ["Translational breast cancer", "Molecular biology"],
    description:
      "Integrates genomic profiling, signaling assays, cell culture and clinical studies to improve breast cancer treatment outcomes.",
    website: "https://medsites.vumc.org/balkolab/home",
    strengths: [
      "Cell culture, molecular assays and clinical research interests strongly align.",
    ],
    gaps: [
      "Genomic analysis and in vivo models are unverified; advertised scientist roles may require substantial experience.",
    ],
    evidence:
      "Integrates genomic profiling, signaling assays, cell culture and clinical studies to improve breast cancer treatment outcomes. The official overview describes an integrated in silico, cell-based, histologic and human clinical research program.",
  }),
  researchLab({
    id: "national-south-jeff-rathmell",
    name: "Jeff Rathmell Laboratory",
    institution: "Vanderbilt University Medical Center",
    pi: "Jeffrey C. Rathmell",
    city: "Nashville",
    state: "TN",
    fields: ["Immunometabolism", "Molecular biology"],
    description:
      "Investigates how metabolic pathways and tissue environments determine lymphocyte fate in inflammation and antitumor immunity.",
    website: "https://www.vumc.org/jeff-rathmell-lab/welcome",
    strengths: [
      "Protein assays and cell culture relate to immune-cell metabolism.",
    ],
    gaps: [
      "Immune phenotyping and specialized metabolic measurements require training.",
    ],
    evidence:
      "Investigates how metabolic pathways and tissue environments determine lymphocyte fate in inflammation and antitumor immunity. The lab describes collaborative genetic and biochemical research spanning immunology, cancer biology and metabolism.",
  }),
  researchLab({
    id: "national-south-lovly",
    name: "Lovly Laboratory",
    institution: "Vanderbilt University Medical Center",
    pi: "Christine M. Lovly",
    city: "Nashville",
    state: "TN",
    fields: ["Translational lung cancer", "Molecular biology"],
    description:
      "Develops therapeutic strategies for clinically defined molecular subsets of lung cancer through laboratory and clinical investigation.",
    website: "https://medsites.vumc.org/vpoint/person/christine-m-lovly-md-phd",
    strengths: [
      "Cancer interests, molecular assays and clinical documentation support translational work.",
    ],
    gaps: [
      "Molecular-subtype analysis and specialized resistance models need development.",
    ],
    evidence:
      "Develops therapeutic strategies for clinically defined molecular subsets of lung cancer through laboratory and clinical investigation. The detailed official profile connects lung cancer laboratory research with physician-scientist clinical activity and multiple research funding programs.",
  }),
  researchLab({
    id: "national-south-philip",
    name: "Philip Laboratory",
    institution: "Vanderbilt University Medical Center",
    pi: "Mary Philip",
    city: "Nashville",
    state: "TN",
    fields: ["Tumor immunology", "Molecular biology"],
    description:
      "Studies how tumor-specific T cells become dysfunctional, tracking their functional, transcriptional and epigenetic changes during cancer development.",
    website:
      "https://medschool.vanderbilt.edu/cancer-biology/person/mary-philip-m-d-ph-d/",
    strengths: [
      "Molecular assays and immunostaining support immune dysfunction research.",
    ],
    gaps: [
      "Flow cytometry, next-generation sequencing and engineered mouse models are unverified.",
    ],
    evidence:
      "Studies how tumor-specific T cells become dysfunctional, tracking their functional, transcriptional and epigenetic changes during cancer development. The official profile describes longitudinal tumor-specific T-cell tracking integrated with functional and epigenetic characterization.",
  }),
  researchLab({
    id: "national-south-delgiorno",
    name: "DelGiorno Laboratory",
    institution: "Vanderbilt University",
    pi: "Kathleen DelGiorno",
    city: "Nashville",
    state: "TN",
    fields: ["Pancreatic cancer", "Molecular biology"],
    description:
      "Investigates pancreatic epithelial plasticity, extracellular vesicles, glycans and tumor-stroma communication in precancer and cancer.",
    website: "https://lab.vanderbilt.edu/delgiorno-lab/research/",
    strengths: [
      "Microscopy, immunostaining and cell culture align with epithelial and vesicle studies.",
    ],
    gaps: [
      "Organoids, genetically engineered models and single-cell genomics need training.",
    ],
    evidence:
      "Investigates pancreatic epithelial plasticity, extracellular vesicles, glycans and tumor-stroma communication in precancer and cancer. The research page integrates organoids and imaging with longitudinal human biospecimen collection and multidisciplinary clinical collaborations.",
  }),
  researchLab({
    id: "national-south-marcus",
    name: "Marcus Laboratory",
    institution: "Emory University / Winship Cancer Institute",
    pi: "Adam Marcus",
    city: "Atlanta",
    state: "GA",
    fields: ["Cancer cell biology", "Molecular biology"],
    description:
      "Studies cancer-cell cooperation, invasion and metastasis using molecular assays, imaging and image-guided genomic analysis.",
    website: "https://winshipcancer.emory.edu/profiles/marcus-adam.php",
    strengths: [
      "Microscopy, immunostaining and cell culture closely align with invasion research.",
    ],
    gaps: [
      "Image-guided genomics and mouse metastasis models require training.",
    ],
    evidence:
      "Studies cancer-cell cooperation, invasion and metastasis using molecular assays, imaging and image-guided genomic analysis. The detailed profile describes development of a live-cell image-guided genomics platform and therapeutic studies of invasive tumor populations.",
  }),
  researchLab({
    id: "national-south-ahmed",
    name: "Ahmed Laboratory",
    institution: "Emory University / Winship Cancer Institute",
    pi: "Rafi Ahmed",
    city: "Atlanta",
    state: "GA",
    fields: ["Immunological memory", "Molecular biology"],
    description:
      "Studies mechanisms governing B and T cell memory and cellular pathways controlling durable immunity.",
    website: "https://winshipcancer.emory.edu/profiles/ahmed-rafi.php",
    strengths: [
      "Molecular assays and immunostaining support mechanistic immune research.",
    ],
    gaps: [
      "Antigen-specific immune assays and murine or primate systems are unverified.",
    ],
    evidence:
      "Studies mechanisms governing B and T cell memory and cellular pathways controlling durable immunity. The official profile describes cellular and molecular studies across human and animal systems and a program connecting memory immunity with cancer immunotherapy.",
  }),
  researchLab({
    id: "national-south-paulos",
    name: "Paulos Laboratory",
    institution: "Emory University / Winship Cancer Institute",
    pi: "Chrystal M. Paulos",
    city: "Atlanta",
    state: "GA",
    fields: ["Cancer immunotherapy", "Molecular biology"],
    description:
      "Develops T cell-based therapies for melanoma and investigates mechanisms supporting protective immunity in solid tumors.",
    website: "https://winshipcancer.emory.edu/profiles/paulos-chrystal.php",
    strengths: [
      "Mammalian cell culture and molecular assays relate to T cell studies.",
    ],
    gaps: [
      "Adoptive transfer, CAR technologies and mouse immunology require training.",
    ],
    evidence:
      "Develops T cell-based therapies for melanoma and investigates mechanisms supporting protective immunity in solid tumors. The research profile integrates mechanistic T cell studies, human clinical research and investigator-initiated trials.",
  }),
  researchLab({
    id: "national-south-haura",
    name: "Haura Laboratory",
    institution: "Moffitt Cancer Center",
    pi: "Eric Haura",
    city: "Tampa",
    state: "FL",
    fields: ["Translational lung cancer", "Molecular biology"],
    description:
      "Uses cancer proteomics and molecular characterization to investigate signaling, treatment response and resistance in lung cancer.",
    website: "https://www.moffitt.org/providers/eric-haura/",
    strengths: [
      "Protein assays, cell culture and clinical research interests fit translational lung cancer.",
    ],
    gaps: [
      "Mass spectrometry proteomics and advanced molecular characterization need training.",
    ],
    evidence:
      "Uses cancer proteomics and molecular characterization to investigate signaling, treatment response and resistance in lung cancer. The detailed official profile links an established translational proteomics program with biomarker development and molecularly directed clinical trials.",
  }),
  researchLab({
    id: "national-south-cleveland",
    name: "Cleveland Laboratory",
    institution: "Moffitt Cancer Center",
    pi: "John Cleveland",
    city: "Tampa",
    state: "FL",
    fields: ["Molecular cancer biology", "Molecular biology"],
    description:
      "Investigates oncogenes and tumor suppressors controlling cancer-cell growth and survival to discover therapeutic vulnerabilities.",
    website:
      "https://www.moffitt.org/research-science/researchers/john-cleveland/",
    strengths: [
      "Western blotting, PCR and culture align with cancer signaling.",
    ],
    gaps: [
      "Specialized genetic cancer models and therapeutic development methods need training.",
    ],
    evidence:
      "Investigates oncogenes and tumor suppressors controlling cancer-cell growth and survival to discover therapeutic vulnerabilities. The official research profile documents sustained NIH-supported mechanistic research and extensive training of researchers who established independent careers.",
  }),
  researchLab({
    id: "national-south-paulo-rodriguez",
    name: "Rodriguez Laboratory",
    institution: "Moffitt Cancer Center",
    pi: "Paulo Rodriguez",
    city: "Tampa",
    state: "FL",
    fields: ["Tumor immunology", "Molecular biology"],
    description:
      "Investigates how tumor-associated myeloid cells suppress immune responses and how these mechanisms can be targeted to improve cancer immunotherapy.",
    website:
      "https://www.moffitt.org/research-science/researchers/paulo-rodriguez/",
    strengths: [
      "Molecular assays and cell culture support tumor-immune interaction studies.",
    ],
    gaps: [
      "Myeloid immunophenotyping and immune-cell therapeutic models require training.",
    ],
    evidence:
      "Investigates how tumor-associated myeloid cells suppress immune responses and how these mechanisms can be targeted to improve cancer immunotherapy. The official research profile describes mechanistic myeloid-cell immunosuppression research directed toward improved cancer treatment.",
  }),
];
