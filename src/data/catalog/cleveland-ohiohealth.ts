import type { Lab } from "../../domain/types";
import { researchLab } from "./research-entry";

// Official research pages reviewed 2026-10-21. Scores are editorial, not hiring claims.
export const clevelandOhioHealthLabs: Lab[] = [
  {
    id: "cc-bao",
    name: "Shideng Bao Lab",
    institution: "Cleveland Clinic",
    pi: "Shideng Bao",
    city: "Cleveland",
    state: "OH",
    fields: ["Cancer Biology", "Neuro-Oncology"],
    description:
      "Glioblastoma stem cells and their interactions with macrophages and vascular pericytes; also studies brain metastases of lung cancer.",
    website: "https://www.lerner.ccf.org/cancer-sciences/bao/",
    fit: 90,
    prestige: 85,
    strengths: [
      "Cancer cell culture and signaling experience transfer well; lung-cancer brain metastasis is an additional thematic link.",
    ],
    gaps: [
      "Glioma stem-cell and animal-model techniques need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Directs the Center for Cancer Stem Cell Research; lab page documents mechanistic discoveries and translation to a clinical trial.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-chakraborty",
    name: "Abhishek Chakraborty Lab",
    institution: "Cleveland Clinic",
    pi: "Abhishek Chakraborty",
    city: "Cleveland",
    state: "OH",
    fields: ["Cancer Biology", "Metabolism"],
    description:
      "Investigates oxygen-sensing proteins and metabolic adaptations that allow hypoxic cancer cells to survive.",
    website: "https://www.lerner.ccf.org/cancer-sciences/chakraborty/",
    fit: 85,
    prestige: 75,
    strengths: [
      "PCR, Western blotting and cancer cell culture support molecular hypoxia research.",
    ],
    gaps: [
      "Hypoxia-specific assays and metabolic methods need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Main-campus molecular cancer research group and member of the Genitourinary Malignancies Research Center.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-chan",
    name: "Timothy Chan Lab",
    institution: "Cleveland Clinic",
    pi: "Timothy Chan",
    city: "Cleveland",
    state: "OH",
    fields: ["Cancer Genomics", "Immunology"],
    description:
      "Combines genomic analysis with functional studies to investigate tumor development, treatment response and immunotherapy.",
    website: "https://www.lerner.ccf.org/cancer-sciences/chan/",
    fit: 80,
    prestige: 90,
    strengths: [
      "Cancer biology experience supports functional validation work.",
    ],
    gaps: [
      "Large-scale genomic analysis requires additional computational training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Chairs Cancer Sciences and the immunotherapy center; official page documents an NCI Outstanding Investigator Award.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-peiwen-chen",
    name: "Peiwen Chen Lab",
    institution: "Cleveland Clinic",
    pi: "Peiwen Chen",
    city: "Cleveland",
    state: "OH",
    fields: ["Cancer Biology", "Immunology"],
    description:
      "Studies cancer stem-cell and immune-cell interactions in glioblastoma and metastatic brain cancer to develop therapies.",
    website: "https://www.lerner.ccf.org/cancer-sciences/peiwen-chen/",
    fit: 85,
    prestige: 80,
    strengths: [
      "Cancer cell culture and molecular assays transfer to tumor-immune signaling.",
    ],
    gaps: [
      "Brain-tumor and immune co-culture models need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Main-campus translational group links mechanistic tumor-immune studies to therapeutic development.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-aronica",
    name: "Mark Aronica Lab",
    institution: "Cleveland Clinic",
    pi: "Mark Aronica",
    city: "Cleveland",
    state: "OH",
    fields: ["Pulmonary Biology", "Inflammation"],
    description:
      "Studies extracellular-matrix contributions to asthma and the resolution of airway inflammation.",
    website: "https://www.lerner.ccf.org/inflammation-immunity/aronica/",
    fit: 80,
    prestige: 75,
    strengths: [
      "Lung-focused cell biology and microscopy provide a useful foundation.",
    ],
    gaps: [
      "Asthma models and extracellular-matrix assays are additional skills.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Main-campus physician-scientist group combines pulmonary medicine with experimental asthma research.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-asosingh",
    name: "Kewal Asosingh Lab",
    institution: "Cleveland Clinic",
    pi: "Kewal Asosingh",
    city: "Cleveland",
    state: "OH",
    fields: ["Pulmonary Biology", "Immunology"],
    description:
      "Uses preclinical asthma and pulmonary-hypertension models, functional lung imaging and spectral flow cytometry.",
    website: "https://www.lerner.ccf.org/inflammation-immunity/asosingh/",
    fit: 80,
    prestige: 80,
    strengths: [
      "Lung biology and microscopy offer a foundation for preclinical work.",
    ],
    gaps: [
      "Animal physiology and high-dimensional flow cytometry need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Directs the Preclinical Lung Physiology Shared Resource and serves as scientific director of flow cytometry.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-comhair",
    name: "Suzy Comhair Lab",
    institution: "Cleveland Clinic",
    pi: "Suzy Comhair",
    city: "Cleveland",
    state: "OH",
    fields: ["Pulmonary Biology", "Biomarkers"],
    description:
      "Investigates asthma biomarkers, oxidative stress and metabolism; the laboratory also processes clinical biospecimens and supplies primary pulmonary cells.",
    website: "https://www.lerner.ccf.org/inflammation-immunity/comhair/",
    fit: 90,
    prestige: 80,
    strengths: [
      "Cell culture, sample documentation and molecular assays bridge the laboratory and clinical-sample work.",
    ],
    gaps: [
      "Metabolomics and primary-cell handling may require training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Directs the BioRepository Core; official page documents biospecimen support for clinical trials and NIH awards.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-diaz",
    name: "C. Marcela Diaz Lab",
    institution: "Cleveland Clinic",
    pi: "C. Marcela Diaz",
    city: "Cleveland",
    state: "OH",
    fields: ["Immunology", "Cancer Biology"],
    description:
      "Studies anti-tumor T-cell responses, suppressor myeloid cells and resistance to immunotherapy using tumor models and patient-derived materials.",
    website: "https://www.lerner.ccf.org/cancer-sciences/diaz/",
    fit: 85,
    prestige: 80,
    strengths: [
      "Cancer cell culture and immunostaining transfer to functional tumor-immunity assays.",
    ],
    gaps: [
      "T-cell expansion and immunophenotyping need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Scientific director of the Immunomonitoring Lab with translational immunophenotyping and biobanking infrastructure.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-gladson",
    name: "Candece Gladson Lab",
    institution: "Cleveland Clinic",
    pi: "Candece Gladson",
    city: "Cleveland",
    state: "OH",
    fields: ["Cancer Biology", "Angiogenesis"],
    description:
      "Investigates angiogenesis and pro-survival signaling in malignant glioma, including TNF-R1 and FIP200.",
    website: "https://www.lerner.ccf.org/cancer-sciences/gladson/",
    fit: 85,
    prestige: 75,
    strengths: [
      "Western blotting, cell culture and microscopy align with mechanistic protein studies.",
    ],
    gaps: [
      "Glioma and endothelial models require onboarding.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Main-campus molecular oncology group led by an endowed chair in molecular medicine.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-gong",
    name: "Zihua Gong Lab",
    institution: "Cleveland Clinic",
    pi: "Zihua Gong",
    city: "Cleveland",
    state: "OH",
    fields: ["DNA Repair", "Cancer Biology"],
    description:
      "Investigates DNA repair pathway choice and mechanisms of PARP-inhibitor resistance in BRCA-mutant cancers.",
    website: "https://www.lerner.ccf.org/cancer-sciences/gong/",
    fit: 85,
    prestige: 75,
    strengths: [
      "Molecular cancer assays and microscopy provide a foundation for repair studies.",
    ],
    gaps: [
      "DNA damage and repair-specific assays need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Main-campus experimental cancer group focuses on therapeutic resistance in genetically defined tumors.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-heemers",
    name: "Hannelore Heemers Lab",
    institution: "Cleveland Clinic",
    pi: "Hannelore Heemers",
    city: "Cleveland",
    state: "OH",
    fields: ["Cancer Biology", "Cell Signaling"],
    description:
      "Studies androgen-receptor mechanisms and new selective therapeutic targets in treatment-resistant prostate cancer.",
    website: "https://www.lerner.ccf.org/cancer-sciences/heemers/",
    fit: 85,
    prestige: 80,
    strengths: [
      "Cancer cell culture, PCR and protein assays transfer to receptor signaling.",
    ],
    gaps: [
      "Prostate-specific and androgen-response models need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Member of the Genitourinary Malignancies Research Center with a translational prostate-cancer focus.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-jha",
    name: "Babal Kant Jha Lab",
    institution: "Cleveland Clinic",
    pi: "Babal Kant Jha",
    city: "Cleveland",
    state: "OH",
    fields: ["Cancer Biology", "Epigenetics"],
    description:
      "Investigates cancer-promoting genetic and epigenetic defects to develop strategies that selectively eliminate malignant cells.",
    website: "https://www.lerner.ccf.org/cancer-sciences/jha/",
    fit: 85,
    prestige: 75,
    strengths: [
      "Molecular cancer methods support functional studies of cellular defects.",
    ],
    gaps: [
      "Project-specific epigenetic methods need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Main-campus translational cancer group connects molecular defects to therapeutic strategies.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-karaayvaz",
    name: "Mihriban Karaayvaz Lab",
    institution: "Cleveland Clinic",
    pi: "Mihriban Karaayvaz",
    city: "Cleveland",
    state: "OH",
    fields: ["Cancer Biology", "Cancer Prevention"],
    description:
      "Studies early breast-cancer development in BRCA1/2 carriers, using patient samples to build and test experimental models.",
    website: "https://www.lerner.ccf.org/cancer-sciences/karaayvaz/",
    fit: 85,
    prestige: 75,
    strengths: [
      "Cancer cell culture and careful clinical documentation fit patient-informed experimental work.",
    ],
    gaps: [
      "Breast models and inherited-risk biology need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Main-campus group connects patient-sample observations to experimental prevention research.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-keri",
    name: "Ruth Keri Lab",
    institution: "Cleveland Clinic",
    pi: "Ruth Keri",
    city: "Cleveland",
    state: "OH",
    fields: ["Cancer Biology", "Epigenetics"],
    description:
      "Uses in-vitro and in-vivo approaches to study breast cancer, transcription factors, epigenetics and therapeutic resistance.",
    website: "https://www.lerner.ccf.org/cancer-sciences/keri/",
    fit: 90,
    prestige: 85,
    strengths: [
      "Cell culture, PCR and Western blotting closely match mechanistic cancer work.",
    ],
    gaps: [
      "Breast-specific models and animal work need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Co-directs the Women's Cancers Program and explicitly describes scientific training and regional-to-international collaboration.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-lathia",
    name: "Justin Lathia Lab",
    institution: "Cleveland Clinic",
    pi: "Justin Lathia",
    city: "Cleveland",
    state: "OH",
    fields: ["Cancer Biology", "Neuro-Oncology"],
    description:
      "Studies glioblastoma stem cells, adhesion, cell communication, tumor-immune interactions and sex differences.",
    website: "https://www.lerner.ccf.org/cancer-sciences/lathia/",
    fit: 85,
    prestige: 85,
    strengths: [
      "Cancer-cell assays and immunostaining transfer to stem-cell and microenvironment work.",
    ],
    gaps: [
      "Glioma stem-cell systems and immune techniques need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Directs the Neuro-Oncology Program and holds an endowed chair in neuro-oncology research.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-lee",
    name: "Jeongwu Lee Lab",
    institution: "Cleveland Clinic",
    pi: "Jeongwu Lee",
    city: "Cleveland",
    state: "OH",
    fields: ["Cancer Biology", "Senescence"],
    description:
      "Combines cell biology, molecular biology and genomics to study glioblastoma resistance, cellular senescence and senolytic therapies.",
    website: "https://www.lerner.ccf.org/cancer-sciences/lee/",
    fit: 90,
    prestige: 80,
    strengths: [
      "Cell culture and molecular assays offer direct methodological relevance.",
    ],
    gaps: [
      "Senescence assays and genomic methods need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Member of the Center for Cancer Stem Cell Research with a therapeutically focused experimental program.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-melenhorst",
    name: "Jos Melenhorst Lab",
    institution: "Cleveland Clinic",
    pi: "Jos Melenhorst",
    city: "Cleveland",
    state: "OH",
    fields: ["Immunotherapy", "Cell Therapy"],
    description:
      "Develops T-cell immunotherapies and gene-based cellular therapies for cancer and viral disease.",
    website: "https://www.lerner.ccf.org/cancer-sciences/melenhorst/",
    fit: 80,
    prestige: 85,
    strengths: [
      "Cell culture and cancer biology form a useful experimental base.",
    ],
    gaps: [
      "T-cell engineering and specialized immune assays are substantial training areas.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Directs the Cell Therapy and Immuno-Engineering Program and is vice chair of the immunotherapy center.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-reizes",
    name: "Ofer Reizes Lab",
    institution: "Cleveland Clinic",
    pi: "Ofer Reizes",
    city: "Cleveland",
    state: "OH",
    fields: ["Cancer Biology", "Therapeutics"],
    description:
      "Investigates new therapeutic pathways for triple-negative breast and gynecologic cancers.",
    website: "https://www.lerner.ccf.org/cancer-sciences/reizes/",
    fit: 85,
    prestige: 80,
    strengths: [
      "Cancer cell culture and protein assays are transferable to target validation.",
    ],
    gaps: [
      "Disease-specific systems and therapeutic models need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Endowed chair in uterine cancer research with a main-campus translational laboratory.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-silver",
    name: "Natalie Silver Lab",
    institution: "Cleveland Clinic",
    pi: "Natalie Silver",
    city: "Cleveland",
    state: "OH",
    fields: ["Cancer Biology", "Immunology"],
    description:
      "Uses preclinical models and patient tissues to investigate head-and-neck cancer and reprogram the tumor immune microenvironment.",
    website: "https://www.lerner.ccf.org/cancer-sciences/silver/",
    fit: 85,
    prestige: 80,
    strengths: [
      "Immunostaining, microscopy and clinical documentation fit translational tissue research.",
    ],
    gaps: [
      "Head-and-neck models and immune profiling need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Directs Head and Neck Cancer Research and leads a translational lab in the immunotherapy center.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-dweik",
    name: "Raed Dweik Lab",
    institution: "Cleveland Clinic",
    pi: "Raed Dweik",
    city: "Cleveland",
    state: "OH",
    fields: ["Pulmonary Biology", "Biomarkers"],
    description:
      "Studies pulmonary physiology and disease, including exhaled nitric oxide and other breath biomarkers.",
    website: "https://www.lerner.ccf.org/inflammation-immunity/dweik/",
    fit: 80,
    prestige: 85,
    strengths: [
      "Lung research and clinical documentation support biomarker-oriented projects.",
    ],
    gaps: [
      "Breath analysis and pulmonary physiology methods need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Official page identifies Respiratory Institute leadership and a main-campus research laboratory.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-erzurum",
    name: "Serpil Erzurum Lab",
    institution: "Cleveland Clinic",
    pi: "Serpil Erzurum",
    city: "Cleveland",
    state: "OH",
    fields: ["Pulmonary Biology", "Cell Signaling"],
    description:
      "Studies lung inflammation and remodeling through redox balance, signaling, arginine metabolism and nitric-oxide biology.",
    website: "https://www.lerner.ccf.org/inflammation-immunity/erzurum/",
    fit: 90,
    prestige: 90,
    strengths: [
      "Lung biology, PCR and protein assays align with molecular inflammatory pathways.",
    ],
    gaps: [
      "Metabolic flux and pulmonary vascular methods need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Chief of Cleveland Clinic Research; laboratory connects molecular lung mechanisms to diagnostics and therapeutics.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-finke",
    name: "James Finke Lab",
    institution: "Cleveland Clinic",
    pi: "James Finke",
    city: "Cleveland",
    state: "OH",
    fields: ["Cancer Biology", "Immunology"],
    description:
      "Studies tumor-mediated suppression of T-cell immunity and myeloid suppressor-cell roles in renal-cancer treatment resistance.",
    website: "https://www.lerner.ccf.org/inflammation-immunity/finke/",
    fit: 80,
    prestige: 75,
    strengths: [
      "Cancer cell biology and molecular assays provide a relevant base.",
    ],
    gaps: [
      "Primary immune-cell assays and renal-cancer systems need training; suitable recruitment unverified.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Main-campus tumor-immunology laboratory with patient-oriented renal-cancer investigations.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-mccurry",
    name: "Kenneth McCurry Lab",
    institution: "Cleveland Clinic",
    pi: "Kenneth McCurry",
    city: "Cleveland",
    state: "OH",
    fields: ["Pulmonary Biology", "Transplantation"],
    description:
      "Investigates mechanisms of complications following lung transplantation.",
    website: "https://www.lerner.ccf.org/inflammation-immunity/mccurry/",
    fit: 75,
    prestige: 80,
    strengths: [
      "Lung-focused biology and clinical record skills could support translational work.",
    ],
    gaps: [
      "Transplant-specific models and a suitable role require clarification.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Main-campus clinician-led lung-transplant research environment documented by the official laboratory page.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-olman",
    name: "Mitchell Olman Lab",
    institution: "Cleveland Clinic",
    pi: "Mitchell Olman",
    city: "Cleveland",
    state: "OH",
    fields: ["Pulmonary Biology", "Fibrosis"],
    description:
      "Studies activation of scar-forming fibroblasts in idiopathic pulmonary fibrosis to identify treatment targets.",
    website: "https://www.lerner.ccf.org/inflammation-immunity/olman/",
    fit: 90,
    prestige: 80,
    strengths: [
      "Cell culture, microscopy and molecular assays transfer well to fibroblast activation research.",
    ],
    gaps: [
      "Fibrosis-specific assays and primary lung cells need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Main-campus pulmonary laboratory focused on cell mechanisms and therapeutic targets.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cc-scheraga",
    name: "Rachel Scheraga Lab",
    institution: "Cleveland Clinic",
    pi: "Rachel Scheraga",
    city: "Cleveland",
    state: "OH",
    fields: ["Pulmonary Biology", "Immunology"],
    description:
      "Investigates macrophage activation, calcium-channel signaling and pulmonary inflammation in acute lung injury and fibrosis.",
    website: "https://www.lerner.ccf.org/inflammation-immunity/scheraga/",
    fit: 85,
    prestige: 80,
    strengths: [
      "Lung biology and molecular methods align with inflammatory signaling.",
    ],
    gaps: [
      "Macrophage functional assays and lung-injury models need training.",
      "No suitable vacancy or entry route verified.",
    ],
    prestigeReason:
      "Physician-scientist laboratory connects intensive-care lung injury with experimental immunology.",
    assessment:
      "Editorial assessment based on the broad supplied skills profile. Research relevance does not establish employment availability or eligibility.",
  },
  {
    id: "cwru-schiemann",
    name: "William P. Schiemann Lab",
    institution: "Case Western Reserve University",
    pi: "William P. Schiemann",
    city: "Cleveland",
    state: "OH",
    fields: ["Cancer Biology", "Metastasis"],
    description:
      "Studies breast-cancer dormancy, recurrence and metastatic progression, including TGF-beta signaling, noncoding RNA and epigenetic regulation.",
    website:
      "https://case.edu/medicine/pharmacology/people/william-p-schiemann",
    contact: {
      name: "William P. Schiemann",
      email: "William.Schiemann@case.edu",
    },
    fit: 90,
    prestige: 85,
    strengths: [
      "Cell culture, PCR, Western blotting and immunostaining transfer to mechanistic metastasis studies.",
    ],
    gaps: [
      "Breast-specific models and dormancy assays need training; no suitable vacancy verified.",
    ],
    prestigeReason:
      "Goodman-Blum Professor in Cancer Research and member of the Case Comprehensive Cancer Center's Molecular Oncology Program.",
    assessment:
      "Strong transferable cancer-biology fit; role availability and eligibility remain unverified.",
    sources: [
      {
        url: "https://case.edu/medicine/pharmacology/people/william-p-schiemann",
        title: "William P. Schiemann — CWRU",
        claims: ["research", "environment", "contact"],
        evidence:
          "Official profile documents breast-cancer metastatic dormancy research, molecular-oncology membership and the listed institutional email.",
      },
    ],
  },
  {
    id: "cwru-mark-jackson",
    name: "Mark Jackson Lab",
    institution: "Case Western Reserve University",
    pi: "Mark W. Jackson",
    city: "Cleveland",
    state: "OH",
    fields: ["Cancer Biology", "Immunology"],
    description:
      "Studies FAM83 oncogenes, EGFR/RAS signaling, immune-checkpoint resistance and cytokine regulation of breast-cancer cell plasticity.",
    website: "https://case.edu/medicine/pathology/faculty/mark-jackson",
    contact: {
      name: "Mark W. Jackson",
      email: "mark.w.jackson@case.edu",
    },
    fit: 90,
    prestige: 85,
    strengths: [
      "Cancer cell culture and molecular assays align with signaling and plasticity studies.",
    ],
    gaps: [
      "Forward genetic screens and in-vivo immune-resistance models need training; no suitable role verified.",
    ],
    prestigeReason:
      "Directs the Cancer Biology Training Program and is a member of the Case Comprehensive Cancer Center's Molecular Oncology Program.",
    assessment:
      "Strong mechanistic cancer fit; a training leadership role is not evidence of a vacancy.",
    sources: [
      {
        url: "https://case.edu/medicine/pathology/faculty/mark-jackson",
        title: "Mark Jackson — CWRU Pathology",
        claims: ["research", "environment", "contact"],
        evidence:
          "Profile describes FAM83, cytokine and checkpoint-resistance research, training-program leadership and the listed email.",
      },
    ],
  },
  {
    id: "cwru-montano",
    name: "Monica Montano Lab",
    institution: "Case Western Reserve University",
    pi: "Monica Montano",
    city: "Cleveland",
    state: "OH",
    fields: ["Cancer Biology", "Therapeutics"],
    description:
      "Investigates hormone-dependent breast and prostate cancer, HEXIM1 tumor-suppressor mechanisms, treatment resistance and metastasis.",
    website: "https://case.edu/medicine/pharmacology/research/montano-lab",
    contact: {
      name: "Monica Montano",
      email: "monica.montano@case.edu",
    },
    fit: 85,
    prestige: 75,
    strengths: [
      "Cancer cell culture, protein assays and microscopy offer transferable skills.",
    ],
    gaps: [
      "Hormonal cancer models and animal experiments need training; no suitable role verified.",
    ],
    prestigeReason:
      "Official laboratory overview describes mechanistic tumor research and collaborative imaging and drug-delivery projects at CWRU.",
    assessment:
      "Relevant experimental cancer interest; the page's postdoctoral heading supplies no suitable entry-role evidence.",
    sources: [
      {
        url: "https://case.edu/medicine/pharmacology/research/montano-lab",
        title: "Montano Lab — CWRU Pharmacology",
        claims: ["research", "environment", "contact"],
        evidence:
          "Official overview names the PI and email and describes hormonal cancer mechanisms, animal models and CWRU collaborations.",
      },
    ],
  },
  {
    id: "ohiohealth-cancer-clinical-trials",
    name: "Cancer Clinical Trials Program",
    institution: "OhioHealth",
    pi: "Not specified by official source",
    city: "Columbus",
    state: "OH",
    fields: ["Clinical Research", "Oncology"],
    description:
      "Conducts cancer clinical trials through OhioHealth's clinical care network.",
    website:
      "https://www.ohiohealth.com/services/cancer/cancer-clinical-trials",
    fit: 80,
    prestige: 70,
    strengths: [
      "Cancer research knowledge, chart review and documentation offer a foundation for clinical research support.",
    ],
    gaps: [
      "Patient enrollment information is not an employment application. Confirm any role's credential and research-coordination requirements.",
    ],
    prestigeReason:
      "The official program documents access to oncology clinical trials and clinical teams supporting research.",
    assessment:
      "Actual clinical research program, rather than a PI wet laboratory. Editorial fit relates to clinical research skills; no employment opening is claimed.",
  },
  {
    id: "ohiohealth-heart-vascular-trials",
    name: "Heart and Vascular Clinical Trials Program",
    institution: "OhioHealth",
    pi: "Not specified by official source",
    city: "Columbus",
    state: "OH",
    fields: ["Clinical Research", "Cardiovascular"],
    description:
      "Conducts heart and vascular clinical research, including structural-heart valve studies.",
    website:
      "https://www.ohiohealth.com/services/heart-vascular/research-clinical-trials",
    fit: 75,
    prestige: 70,
    strengths: [
      "Clinical documentation, Excel and scientific writing can transfer to research support.",
    ],
    gaps: [
      "Cardiology knowledge and trial operations require training; patient recruitment is not staff recruitment.",
    ],
    prestigeReason:
      "The official research program documents interventional valve studies supported by the OhioHealth Research Institute.",
    assessment:
      "Actual clinical research program, rather than a PI wet laboratory. Editorial fit relates to clinical research skills; no employment opening is claimed.",
  },
  {
    id: "ohiohealth-neuroscience-research",
    name: "Neuroscience Center at Riverside — Clinical Research",
    institution: "OhioHealth",
    pi: "Not specified by official source",
    city: "Columbus",
    state: "OH",
    fields: ["Clinical Research", "Neuroscience"],
    description:
      "The Riverside Neuroscience Center in Columbus includes research clinical trials alongside neurological treatment and education.",
    website:
      "https://www.ohiohealth.com/locations/neuroscience/ohiohealth-neuroscience-center",
    fit: 75,
    prestige: 70,
    strengths: [
      "Chart review, data organization and scientific writing could support clinical research.",
    ],
    gaps: [
      "Neurology knowledge and trial procedures require training; no staff or student opening verified.",
    ],
    prestigeReason:
      "The official Columbus center page documents an integrated clinical-trials and neuroscience-care environment.",
    assessment:
      "Actual clinical research program, rather than a PI wet laboratory. Editorial fit relates to clinical research skills; no employment opening is claimed.",
  },
  {
    id: "ohiohealth-summer-research-externship",
    name: "Summer Research Externship Program",
    institution: "OhioHealth",
    pi: "Not specified by official source",
    city: "Columbus",
    state: "OH",
    fields: ["Clinical Research", "Quality Improvement"],
    description:
      "Mentored clinical research and quality-improvement program for medical students entering their second year; includes presentations and manuscript preparation.",
    website:
      "https://www.ohiohealth.com/medical-education/summer-research-externship-program",
    fit: 80,
    prestige: 70,
    strengths: [
      "Chart review, Excel and scientific writing match listed clinical research examples.",
    ],
    gaps: [
      "Second-year-entry medical-student status and acceptance of an externally enrolled applicant must be confirmed.",
      "No year-specific future cycle has been verified.",
    ],
    prestigeReason:
      "Official program provides teaching-hospital mentorship, research didactics and a Student Research Day.",
    assessment:
      "Conditional training-program interest. A biology or medical-science background alone does not establish eligibility.",
    requirements: [
      "Medical students entering their second year of training.",
      "Full-time participation for eight weeks; required first-week didactics and final presentations.",
    ],
    eligibility: "unknown",
    eligibilityNote:
      "Official page requires medical students entering second year. It does not explicitly confirm eligibility for this applicant or an externally enrolled medical student. Displayed dates have no cycle year.",
    applicationMethod:
      "Official page lists applications November 20–January 10 and directs interested applicants to SREP@OhioHealth.com during that period. It lists May 26–July 17 for the program but no cycle year; confirm the upcoming cycle directly.",
    contact: {
      name: "Summer Research Externship Program",
      email: "SREP@OhioHealth.com",
    },
    sources: [
      {
        url: "https://www.ohiohealth.com/medical-education/summer-research-externship-program",
        title: "OhioHealth Summer Research Externship Program",
        claims: [
          "research",
          "environment",
          "requirements",
          "contact",
          "deadline",
        ],
        evidence:
          "Page describes a stipended full-time eight-week program for medical students entering second year, required didactics/presentations, applications November 20–January 10, and SREP email. No cycle year is given.",
      },
    ],
  },
].map((entry) => researchLab(entry as Parameters<typeof researchLab>[0]));
