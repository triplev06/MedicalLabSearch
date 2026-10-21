import type { Lab } from "../../domain/types";
import { researchLab } from "./research-entry";

// Research targets verified against official institutional research descriptions on 2026-10-21.
// Research interest does not establish an advertised or funded position.
export const chicagoMidwestLabs: Lab[] = [
  researchLab({
    id: "uchicago-joyce-chen",
    name: "Joyce Chen Lab",
    institution: "University of Chicago",
    pi: "Huanhuan Joyce Chen",
    city: "Chicago",
    state: "IL",
    fields: ["Lung cancer", "Stem cell biology", "Tissue engineering"],
    description:
      "Human lung cells and miniature tissue models are used to study lung cancer and infection.",
    website:
      "https://pme.uchicago.edu/news-events/news/inside-lab-how-joyce-chen-protects-lungs-disease",
    strengths: [
      "Direct lung-cancer cell culture background; microscopy and molecular assays provide a useful foundation.",
    ],
    gaps: [
      "Pluripotent stem-cell differentiation and organoid engineering are not documented in the supplied profile.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    sources: [
      {
        url: "https://pme.uchicago.edu/news-events/news/inside-lab-how-joyce-chen-protects-lungs-disease",
        title: "Joyce Chen Lab — official research profile",
        claims: ["research", "environment"],
        evidence:
          "Human lung cells and miniature tissue models are used to study lung cancer and infection.",
      },
    ],
  }),
  researchLab({
    id: "uchicago-macleod",
    name: "Macleod Lab",
    institution: "University of Chicago",
    pi: "Kay Macleod",
    city: "Chicago",
    state: "IL",
    fields: ["Cancer metabolism", "Mitochondria", "Autophagy"],
    description:
      "Studies mitochondrial quality control, stress responses and their effects on cancer growth and metastasis.",
    website: "https://biologicalsciences.uchicago.edu/faculty/kay-macleod-phd",
    strengths: [
      "Cancer-cell molecular work and protein assays transfer to mechanistic mitochondrial research.",
    ],
    gaps: [
      "Mitophagy-specific assays, metabolic profiling and mouse-model work need training.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    contact: {
      name: "Kay Macleod",
      email: "kmacleod@uchicago.edu",
    },
    sources: [
      {
        url: "https://biologicalsciences.uchicago.edu/faculty/kay-macleod-phd",
        title: "Macleod Lab — official research profile",
        claims: ["research", "environment", "contact"],
        evidence:
          "Studies mitochondrial quality control, stress responses and their effects on cancer growth and metastasis. The official page also lists the PI's institutional email.",
      },
    ],
  }),
  researchLab({
    id: "uchicago-yu-ying-he",
    name: "Yu-Ying He Lab",
    institution: "University of Chicago",
    pi: "Yu-Ying He",
    city: "Chicago",
    state: "IL",
    fields: ["Cancer biology", "Epitranscriptomics", "DNA damage"],
    description:
      "Investigates RNA regulation, epigenetics and autophagy in environmental carcinogenesis and treatment resistance, emphasizing skin cancer.",
    website: "https://biologicalsciences.uchicago.edu/faculty/yu-ying-he-phd",
    strengths: [
      "Cell culture, PCR and protein assays support molecular cancer projects.",
    ],
    gaps: [
      "RNA-modification assays and skin-specific models are additional training areas.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    contact: {
      name: "Yu-Ying He",
      email: "yyhe@uchicago.edu",
    },
    sources: [
      {
        url: "https://biologicalsciences.uchicago.edu/faculty/yu-ying-he-phd",
        title: "Yu-Ying He Lab — official research profile",
        claims: ["research", "environment", "contact"],
        evidence:
          "Investigates RNA regulation, epigenetics and autophagy in environmental carcinogenesis and treatment resistance, emphasizing skin cancer. The official page also lists the PI's institutional email.",
      },
    ],
  }),
  researchLab({
    id: "uchicago-becker",
    name: "Becker Laboratory",
    institution: "University of Chicago",
    pi: "Lev Becker",
    city: "Chicago",
    state: "IL",
    fields: ["Macrophage biology", "Cancer biology", "Proteomics"],
    description:
      "Examines disease-specific macrophage dysfunction and develops cancer and inflammatory-disease therapies.",
    website: "https://biologicalsciences.uchicago.edu/faculty/lev-becker-0",
    strengths: [
      "Cancer-cell experimental experience and Western blotting support functional studies.",
    ],
    gaps: [
      "Macrophage isolation, proteomics and immune-cell assays are not documented strengths.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    contact: {
      name: "Lev Becker",
      email: "levb@uchicago.edu",
    },
    sources: [
      {
        url: "https://biologicalsciences.uchicago.edu/faculty/lev-becker-0",
        title: "Becker Laboratory — official research profile",
        claims: ["research", "environment", "contact"],
        evidence:
          "Examines disease-specific macrophage dysfunction and develops cancer and inflammatory-disease therapies. The official page also lists the PI's institutional email.",
      },
    ],
  }),
  researchLab({
    id: "uchicago-gajewski",
    name: "Gajewski Laboratory",
    institution: "University of Chicago",
    pi: "Thomas Gajewski",
    city: "Chicago",
    state: "IL",
    fields: ["Cancer immunology", "T-cell biology", "Immunotherapy"],
    description:
      "Studies T-cell activation and differentiation to improve antitumor immunity and translational immunotherapies.",
    website: "https://news.uchicago.edu/profile/thomas-gajewski?page=1",
    strengths: [
      "Molecular cancer experience and clinical documentation are useful for translational work.",
    ],
    gaps: [
      "T-cell functional assays and in vivo immunology are not established in the profile.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    contact: {
      name: "Thomas Gajewski",
      email: "tgajewsk@bsd.uchicago.edu",
    },
    sources: [
      {
        url: "https://news.uchicago.edu/profile/thomas-gajewski?page=1",
        title: "Gajewski Laboratory — official research profile",
        claims: ["research", "environment", "contact"],
        evidence:
          "Studies T-cell activation and differentiation to improve antitumor immunity and translational immunotherapies. The official page also lists the PI's institutional email.",
      },
    ],
  }),
  researchLab({
    id: "uchicago-jing-chen",
    name: "Jing Chen Lab",
    institution: "University of Chicago",
    pi: "Jing Chen",
    city: "Chicago",
    state: "IL",
    fields: ["Cancer metabolism", "Cell signaling", "Translational oncology"],
    description:
      "Investigates signaling and nutritional influences on cancer metabolism and therapeutic response.",
    website: "https://biologicalsciences.uchicago.edu/faculty/jing-chen-md",
    strengths: [
      "Cell-based cancer assays, molecular methods and Prism analysis transfer well.",
    ],
    gaps: [
      "Metabolomics instrumentation and specialized metabolic-flux methods need development.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    contact: {
      name: "Jing Chen",
      email: "jingchen@uchicago.edu",
    },
    sources: [
      {
        url: "https://biologicalsciences.uchicago.edu/faculty/jing-chen-md",
        title: "Jing Chen Lab — official research profile",
        claims: ["research", "environment", "contact"],
        evidence:
          "Investigates signaling and nutritional influences on cancer metabolism and therapeutic response. The official page also lists the PI's institutional email.",
      },
    ],
  }),
  researchLab({
    id: "uchicago-rosner",
    name: "Rosner Lab",
    institution: "University of Chicago",
    pi: "Marsha Rosner",
    city: "Chicago",
    state: "IL",
    fields: ["Metastasis", "Cancer signaling", "Breast cancer"],
    description:
      "Studies signaling mechanisms driving tumor progression and metastasis, especially triple-negative breast cancer.",
    website: "https://benmay.uchicago.edu/faculty/marsha-rosner-phd",
    strengths: [
      "Cell culture, immunostaining and protein assays fit experimental cancer-signaling work.",
    ],
    gaps: [
      "Systems proteomics, sequencing analysis and mouse models are not documented experience.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    contact: {
      name: "Marsha Rosner",
      email: "mrosner@uchicago.edu",
    },
    sources: [
      {
        url: "https://benmay.uchicago.edu/faculty/marsha-rosner-phd",
        title: "Rosner Lab — official research profile",
        claims: ["research", "environment", "contact"],
        evidence:
          "Studies signaling mechanisms driving tumor progression and metastasis, especially triple-negative breast cancer. The official page also lists the PI's institutional email.",
      },
    ],
  }),
  researchLab({
    id: "uchicago-mcnerney",
    name: "McNerney Lab",
    institution: "University of Chicago",
    pi: "Megan McNerney",
    city: "Chicago",
    state: "IL",
    fields: ["Leukemia", "Functional genomics", "Hematopoiesis"],
    description:
      "Uses functional genomics and model systems to uncover blood-cancer vulnerabilities and hematopoietic regulation.",
    website:
      "https://biologicalsciences.uchicago.edu/faculty/megan-mcnerney-md-phd",
    strengths: [
      "PCR, cell experiments and careful documentation support functional cancer research.",
    ],
    gaps: [
      "Blood-cell models, gene-editing screens and genomic analysis need training.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    contact: {
      name: "Megan McNerney",
      email: "mcnerney@uchicago.edu",
    },
    sources: [
      {
        url: "https://biologicalsciences.uchicago.edu/faculty/megan-mcnerney-md-phd",
        title: "McNerney Lab — official research profile",
        claims: ["research", "environment", "contact"],
        evidence:
          "Uses functional genomics and model systems to uncover blood-cancer vulnerabilities and hematopoietic regulation. The official page also lists the PI's institutional email.",
      },
    ],
  }),
  researchLab({
    id: "uchicago-savage",
    name: "Savage Lab",
    institution: "University of Chicago",
    pi: "Peter Savage",
    city: "Chicago",
    state: "IL",
    fields: ["Cancer immunology", "Regulatory T cells", "Immune tolerance"],
    description:
      "Studies regulatory T-cell development, antigen recognition and immune responses to cancer.",
    website: "https://biologicalsciences.uchicago.edu/faculty/peter-savage-phd",
    strengths: [
      "Molecular assays and microscopy offer a foundation for tumor-immunity studies.",
    ],
    gaps: [
      "Specialized T-cell assays, tetramers and mouse tumor models are not documented skills.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    contact: {
      name: "Peter Savage",
      email: "psavage@bsd.uchicago.edu",
    },
    sources: [
      {
        url: "https://biologicalsciences.uchicago.edu/faculty/peter-savage-phd",
        title: "Savage Lab — official research profile",
        claims: ["research", "environment", "contact"],
        evidence:
          "Studies regulatory T-cell development, antigen recognition and immune responses to cancer. The official page also lists the PI's institutional email.",
      },
    ],
  }),
  researchLab({
    id: "uchicago-weichselbaum",
    name: "Weichselbaum Lab",
    institution: "University of Chicago",
    pi: "Ralph Weichselbaum",
    city: "Chicago",
    state: "IL",
    fields: [
      "Radiation biology",
      "Cancer immunotherapy",
      "Translational oncology",
    ],
    description:
      "Investigates interactions between radiotherapy and cancer immunotherapy.",
    website:
      "https://timeportal.uchicago.edu/UME/ScholarlyOpportunities/Projects/168",
    strengths: [
      "Cancer-cell assays, microscopy and scientific writing support mechanistic treatment-response work.",
    ],
    gaps: [
      "Radiation experiments and immune-model techniques need project-specific training.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    sources: [
      {
        url: "https://timeportal.uchicago.edu/UME/ScholarlyOpportunities/Projects/168",
        title: "Weichselbaum Lab — official research profile",
        claims: ["research", "environment"],
        evidence:
          "Investigates interactions between radiotherapy and cancer immunotherapy.",
      },
    ],
  }),
  researchLab({
    id: "uchicago-sweis",
    name: "Sweis Lab",
    institution: "University of Chicago",
    pi: "Randy Sweis",
    city: "Chicago",
    state: "IL",
    fields: [
      "Cancer immunotherapy",
      "Tumor microenvironment",
      "Translational oncology",
    ],
    description:
      "Studies mechanisms of immunotherapy resistance through tumor-microenvironment research and preclinical cancer models.",
    website: "https://biologicalsciences.uchicago.edu/faculty/randy-f-sweis-md",
    strengths: [
      "Cancer molecular work and clinical chart documentation complement translational questions.",
    ],
    gaps: [
      "Bladder/skin tumor models and immune phenotyping are additional training areas.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    contact: {
      name: "Randy Sweis",
      email: "rsweis@uchicago.edu",
    },
    sources: [
      {
        url: "https://biologicalsciences.uchicago.edu/faculty/randy-f-sweis-md",
        title: "Sweis Lab — official research profile",
        claims: ["research", "environment", "contact"],
        evidence:
          "Studies mechanisms of immunotherapy resistance through tumor-microenvironment research and preclinical cancer models. The official page also lists the PI's institutional email.",
      },
    ],
  }),
  researchLab({
    id: "uchicago-labelle",
    name: "LaBelle Lab",
    institution: "University of Chicago",
    pi: "James LaBelle",
    city: "Chicago",
    state: "IL",
    fields: ["Apoptosis", "Cancer immunology", "Peptide therapeutics"],
    description:
      "Targets intracellular signaling and BCL-2-family proteins to induce cancer-cell death and modulate immunity.",
    website: "https://profiles.uchicago.edu/profiles/display/915378",
    strengths: [
      "Cancer-cell culture, Western blotting and immunostaining fit apoptosis and signaling experiments.",
    ],
    gaps: [
      "Peptide chemistry, nanoparticle delivery and immune-cell assays need training.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    sources: [
      {
        url: "https://profiles.uchicago.edu/profiles/display/915378",
        title: "LaBelle Lab — official research profile",
        claims: ["research", "environment"],
        evidence:
          "Targets intracellular signaling and BCL-2-family proteins to induce cancer-cell death and modulate immunity.",
      },
    ],
  }),
  researchLab({
    id: "nw-chandel",
    name: "Chandel Lab",
    institution: "Northwestern University",
    pi: "Navdeep Chandel",
    city: "Chicago",
    state: "IL",
    fields: ["Mitochondria", "Cancer metabolism", "Lung biology"],
    description:
      "Uses genetic perturbations in cellular and animal models to study mitochondrial control of signaling and disease.",
    website:
      "https://www.feinberg.northwestern.edu/sites/sqlifts/programs/discovery.html",
    strengths: [
      "Lung-cancer molecular experience provides a strong entry to cell-based metabolism studies.",
    ],
    gaps: [
      "Causal genetic models and metabolic assays require additional training.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    contact: {
      name: "Navdeep Chandel",
      email: "nav@northwestern.edu",
    },
    sources: [
      {
        url: "https://www.feinberg.northwestern.edu/sites/sqlifts/programs/discovery.html",
        title: "Chandel Lab — official research profile",
        claims: ["research", "environment", "contact"],
        evidence:
          "Uses genetic perturbations in cellular and animal models to study mitochondrial control of signaling and disease. The official page also lists the PI's institutional email.",
      },
    ],
  }),
  researchLab({
    id: "nw-singer",
    name: "Benjamin Singer Lab",
    institution: "Northwestern University",
    pi: "Benjamin D. Singer",
    city: "Chicago",
    state: "IL",
    fields: ["Lung injury", "Immunology", "Lung repair"],
    description:
      "Studies resolution and repair after acute lung inflammation and injury, aiming to improve ARDS therapies.",
    website: "https://labs.feinberg.northwestern.edu/singer/index.html",
    strengths: [
      "Lung-cell research, microscopy and clinical documentation offer transferable skills.",
    ],
    gaps: [
      "ARDS models, immune regulation and animal work differ from lung-cancer cell studies.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    contact: {
      name: "Benjamin D. Singer",
      email: "benjamin-singer@northwestern.edu",
    },
    sources: [
      {
        url: "https://labs.feinberg.northwestern.edu/singer/index.html",
        title: "Benjamin Singer Lab — official research profile",
        claims: ["research", "environment", "contact"],
        evidence:
          "Studies resolution and repair after acute lung inflammation and injury, aiming to improve ARDS therapies. The official page also lists the PI's institutional email.",
      },
    ],
  }),
  researchLab({
    id: "nw-budinger",
    name: "Budinger Lab",
    institution: "Northwestern University",
    pi: "G. R. Scott Budinger",
    city: "Chicago",
    state: "IL",
    fields: ["Lung biology", "Aging", "Macrophages"],
    description:
      "Examines aging-related proteostasis stress and tissue macrophage dysfunction, using pneumonia models.",
    website:
      "https://www.feinberg.northwestern.edu/sites/dgp/research-interests/index.html",
    strengths: [
      "Lung molecular biology and protein assays are relevant foundations.",
    ],
    gaps: [
      "Aging, pneumonia animal models and tissue-resident macrophage methods need training.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    contact: {
      name: "G. R. Scott Budinger",
      email: "s-buding@northwestern.edu",
    },
    sources: [
      {
        url: "https://www.feinberg.northwestern.edu/sites/dgp/research-interests/index.html",
        title: "Budinger Lab — official research profile",
        claims: ["research", "environment", "contact"],
        evidence:
          "Examines aging-related proteostasis stress and tissue macrophage dysfunction, using pneumonia models. The official page also lists the PI's institutional email.",
      },
    ],
  }),
  researchLab({
    id: "nw-mendillo",
    name: "Mendillo Lab",
    institution: "Northwestern University",
    pi: "Marc Mendillo",
    city: "Chicago",
    state: "IL",
    fields: ["Cancer biology", "Protein homeostasis", "Cellular stress"],
    description:
      "Uses biochemical, genetic and genomic approaches to understand how cancer cells exploit protein-homeostasis systems.",
    website:
      "https://www.cancer.northwestern.edu/research/membership/profile.html?id=c4215de07c2a979ce4ff8ab39f3a29d9",
    strengths: [
      "Western blotting and cancer-cell experiments support protein-stress mechanism studies.",
    ],
    gaps: [
      "High-throughput genetic screening and genomic pipelines need further experience.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    contact: {
      name: "Marc Mendillo",
      email: "mendillo@northwestern.edu",
    },
    sources: [
      {
        url: "https://www.cancer.northwestern.edu/research/membership/profile.html?id=c4215de07c2a979ce4ff8ab39f3a29d9",
        title: "Mendillo Lab — official research profile",
        claims: ["research", "environment", "contact"],
        evidence:
          "Uses biochemical, genetic and genomic approaches to understand how cancer cells exploit protein-homeostasis systems. The official page also lists the PI's institutional email.",
      },
    ],
  }),
  researchLab({
    id: "rush-borgia",
    name: "Borgia Laboratory",
    institution: "Rush University",
    pi: "Jeffrey A. Borgia",
    city: "Chicago",
    state: "IL",
    fields: ["Lung cancer", "Biomarkers", "Translational oncology"],
    description:
      "Develops lung-cancer biomarkers and studies progression, cachexia and cancer-associated immune changes.",
    website:
      "https://www.rushu.rush.edu/research-rush-university/departmental-research/anatomy-cell-biology-research/laboratory-jeffrey-borgia-phd",
    strengths: [
      "Direct lung-cancer background, protein assays and clinical chart work support the translational mix.",
    ],
    gaps: [
      "Targeted mass spectrometry and multiplex biomarker platforms are not established skills.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    contact: {
      name: "Jeffrey A. Borgia",
      email: "jeffrey_a_borgia@rush.edu",
    },
    sources: [
      {
        url: "https://www.rushu.rush.edu/research-rush-university/departmental-research/anatomy-cell-biology-research/laboratory-jeffrey-borgia-phd",
        title: "Borgia Laboratory — official research profile",
        claims: ["research", "environment", "contact"],
        evidence:
          "Develops lung-cancer biomarkers and studies progression, cachexia and cancer-associated immune changes. The official page also lists the PI's institutional email.",
      },
    ],
  }),
  researchLab({
    id: "rush-maki-duan",
    name: "Maki-Duan Cancer Research Lab",
    institution: "Rush University",
    pi: "Carl Maki and Lei Duan",
    city: "Chicago",
    state: "IL",
    fields: ["Lung cancer", "p53 signaling", "Cancer therapeutics"],
    description:
      "Studies p53-related signaling and therapeutic vulnerabilities in cancer, including non-small-cell lung cancer.",
    website:
      "https://www.rushu.rush.edu/research-rush-university/departmental-research/anatomy-cell-biology-research/laboratory-carl-maki-phd",
    strengths: [
      "Direct lung-cancer cell culture, immunostaining and protein assays align closely.",
    ],
    gaps: [
      "Specific p53/DREAM pathway expertise and in vivo drug testing need training.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    contact: {
      name: "Carl Maki and Lei Duan",
      email: "Carl_Maki@rush.edu",
    },
    sources: [
      {
        url: "https://www.rushu.rush.edu/research-rush-university/departmental-research/anatomy-cell-biology-research/laboratory-carl-maki-phd",
        title: "Maki-Duan Cancer Research Lab — official research profile",
        claims: ["research", "environment", "contact"],
        evidence:
          "Studies p53-related signaling and therapeutic vulnerabilities in cancer, including non-small-cell lung cancer. The official page also lists the PI's institutional email.",
      },
    ],
  }),
  researchLab({
    id: "loyola-jiwang-zhang",
    name: "Jiwang Zhang Lab",
    institution: "Loyola University Chicago",
    pi: "Jiwang Zhang",
    city: "Maywood",
    state: "IL",
    fields: ["Leukemia", "Stem cells", "Bone marrow microenvironment"],
    description:
      "Studies niche signaling in hematopoiesis and leukemia using culture assays, genetic screens and patient-derived models.",
    website:
      "https://www.luc.edu/stritch/cancerbiology/research/ourfaculty/profiles/zhangjiwang.shtml",
    strengths: [
      "Cell culture and PCR provide a foundation for functional disease-mechanism experiments.",
    ],
    gaps: [
      "Hematopoietic stem-cell techniques, CRISPR screening and xenografts need training.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    contact: {
      name: "Jiwang Zhang",
      email: "jzhang@luc.edu",
    },
    sources: [
      {
        url: "https://www.luc.edu/stritch/cancerbiology/research/ourfaculty/profiles/zhangjiwang.shtml",
        title: "Jiwang Zhang Lab — official research profile",
        claims: ["research", "environment", "contact"],
        evidence:
          "Studies niche signaling in hematopoiesis and leukemia using culture assays, genetic screens and patient-derived models. The official page also lists the PI's institutional email.",
      },
    ],
  }),
  researchLab({
    id: "loyola-denning",
    name: "Denning Laboratory",
    institution: "Loyola University Chicago",
    pi: "Mitchell Denning",
    city: "Maywood",
    state: "IL",
    fields: ["Cancer signaling", "Skin carcinogenesis", "Cell biology"],
    description:
      "Examines cell-fate regulation and protein kinase C signaling in skin biology and ultraviolet-induced carcinogenesis.",
    website:
      "https://www.luc.edu/stritch/molecularpharmacologyandneuroscience/people/faculty/profiles/denningmitchell.shtml",
    strengths: [
      "Cell culture, molecular assays and immunostaining transfer to epithelial cancer signaling.",
    ],
    gaps: [
      "Keratinocyte/melanocyte models and ultraviolet-response experiments need training.",
      "A suitable assistant or technician vacancy and its eligibility requirements have not been verified.",
    ],
    contact: {
      name: "Mitchell Denning",
      email: "mdennin@luc.edu",
    },
    sources: [
      {
        url: "https://www.luc.edu/stritch/molecularpharmacologyandneuroscience/people/faculty/profiles/denningmitchell.shtml",
        title: "Denning Laboratory — official research profile",
        claims: ["research", "environment", "contact"],
        evidence:
          "Examines cell-fate regulation and protein kinase C signaling in skin biology and ultraviolet-induced carcinogenesis. The official page also lists the PI's institutional email.",
      },
    ],
  }),
];
