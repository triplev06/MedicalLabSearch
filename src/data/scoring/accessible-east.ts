import type { ScoreReview } from "../../domain/scoring";

export const accessibleEastReviews: Record<string, ScoreReview> = {
  "umbc-padmanabhan": {
    fit: {
      alignment: 3,
      methods: 2,
      preparation: 3,
      level: 4,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 3,
      mentorship: 2,
      collaboration: 1,
    },
    fitEvidence:
      "Culture, Western blots and imaging overlap; CRISPR, cytometry and mouse tumor work need training. The advertised bachelor's route treats prior research as a plus.",
    prestigeEvidence:
      "Mouse tumors, patient samples and screening support resources; an undergraduate route documents training, while influential contributions and sustained mentoring outcomes remain unverified.",
    requirementsVerified: true,
  },
  "uconn-hanlon": {
    fit: {
      alignment: 2,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 2,
    },
    prestige: {
      impact: 1,
      resources: 2,
      mentorship: 1,
      collaboration: 1,
    },
    fitEvidence:
      "Molecular and microscopy preparation provides a bridge; Drosophila genetics and cytogenetics need training. Technician inquiries are welcomed but no suitable vacancy is confirmed.",
    prestigeEvidence:
      "A defined chromosome model and molecular/genetic tools establish a specialized program; technician inquiry access alone does not establish structured mentoring or influential contributions.",
    requirementsVerified: false,
  },
  "uconn-vargas-rodriguez": {
    fit: {
      alignment: 2,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 2,
    },
    prestige: {
      impact: 2,
      resources: 2,
      mentorship: 1,
      collaboration: 1,
    },
    fitEvidence:
      "PCR and protein assays provide a foundation; tRNA engineering and translation biochemistry are unverified. General inquiry access does not establish job eligibility.",
    prestigeEvidence:
      "Named engineered-tRNA and deacylase publications establish contributions and specialized methods; the invitation alone does not verify structured mentoring outcomes.",
    requirementsVerified: false,
  },
  "temple-eunice-chen": {
    fit: {
      alignment: 2,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 2,
      resources: 2,
      mentorship: 2,
      collaboration: 1,
    },
    fitEvidence:
      "Clinical documentation, literature reviews and data handling transfer; behavioral assessment, imaging and coding need training. Postbaccalaureate volunteers are explicitly included.",
    prestigeEvidence:
      "The lab reports developed/tested psychosocial interventions and clinical/imaging methods; the volunteer route supports training, while sustained mentoring outcomes remain unknown.",
    requirementsVerified: false,
  },
  "dfci-barbie": {
    fit: {
      alignment: 3,
      methods: 2,
      preparation: 3,
      level: 4,
      transfer: 3,
    },
    prestige: {
      impact: 2,
      resources: 3,
      mentorship: 1,
      collaboration: 3,
    },
    fitEvidence:
      "Molecular assays and culture provide relevant preparation; animal work and cancer immunology need training. Bachelor's degree and no prior professional experience are explicit.",
    prestigeEvidence:
      "KRAS-directed translational studies and patient-derived tumor work support contributions, models and a clinical pipeline; technician instruction is described, with long-term mentoring outcomes unknown.",
    requirementsVerified: true,
  },
  "dfci-sethi": {
    fit: {
      alignment: 3,
      methods: 2,
      preparation: 3,
      level: 4,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 3,
      mentorship: 1,
      collaboration: 2,
    },
    fitEvidence:
      "Cell culture and molecular techniques transfer; mouse breeding/handling is strongly preferred or requires commitment to learn. Bachelor's entry and no prior professional experience are explicit.",
    prestigeEvidence:
      "Patient-derived profiling, engineered disease models and therapeutic platforms support resources and multidisciplinary work; specific impact and sustained mentoring outcomes are unverified.",
    requirementsVerified: true,
  },
  "dfci-shapiro": {
    fit: {
      alignment: 3,
      methods: 3,
      preparation: 3,
      level: 4,
      transfer: 3,
    },
    prestige: {
      impact: 2,
      resources: 3,
      mentorship: 1,
      collaboration: 3,
    },
    fitEvidence:
      "Advertised culture, drug treatment and Western blots align strongly; mouse procedures require training. Bachelor's degree and no prior professional experience are explicit.",
    prestigeEvidence:
      "Specific inhibitor development and early-phase clinical research document contributions and a translational pipeline; detailed task instruction does not establish sustained mentoring outcomes.",
    requirementsVerified: true,
  },
  "umass-thyme": {
    fit: {
      alignment: 1,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 2,
    },
    prestige: {
      impact: 2,
      resources: 3,
      mentorship: 2,
      collaboration: 1,
    },
    fitEvidence:
      "Microscopy and data organization transfer, but zebrafish work, behavioral phenotyping and single-cell analyses need training. Technician and medical-student inquiries are explicit; current vacancy, pay and role prerequisites are unverified.",
    prestigeEvidence:
      "A zebrafish forebrain atlas, mutant panels and a parallel behavior apparatus establish contributions and models; named undergraduate participation supports training. Long-term mentoring outcomes are unverified.",
    requirementsVerified: false,
  },
  "jefferson-lin-guo": {
    fit: {
      alignment: 2,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 2,
      resources: 2,
      mentorship: 1,
      collaboration: 1,
    },
    fitEvidence:
      "Molecular, cellular and protein assays transfer; phase-separation biophysics needs training. Technician applications are invited, but exact entry criteria and time compatibility remain unverified.",
    prestigeEvidence:
      "Kapβ2 disaggregation findings establish a contribution; biochemical/biophysical methods support resources. Application access alone does not establish structured mentorship.",
    requirementsVerified: false,
  },
  "columbia-mahat": {
    fit: {
      alignment: 3,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 2,
    },
    prestige: {
      impact: 1,
      resources: 2,
      mentorship: 2,
      collaboration: 1,
    },
    fitEvidence:
      "Molecular biology and data organization provide a bridge; single-cell assays, genomics and machine-learning pipelines require substantial training. Technician/career-transition inquiry is explicit.",
    prestigeEvidence:
      "A specialized enhancer/immune program and single-cell methods are described; experimental-design/data training is explicit. Influential contributions and sustained outcomes need separate evidence.",
    requirementsVerified: false,
  },
  "psu-lindner": {
    fit: {
      alignment: 2,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 2,
    },
    prestige: {
      impact: 2,
      resources: 3,
      mentorship: 1,
      collaboration: 2,
    },
    fitEvidence:
      "PCR, molecular and protein assays transfer; parasite/vector systems, animal work, structural biology and omics require training. BS technician inquiries are explicit.",
    prestigeEvidence:
      "Named translational-regulation and parasite-genome studies establish contributions; parasite models and structural approaches support resources and specific joint studies.",
    requirementsVerified: false,
  },
  "pitt-jay-tan": {
    fit: {
      alignment: 2,
      methods: 2,
      preparation: 3,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 3,
      mentorship: 2,
      collaboration: 1,
    },
    fitEvidence:
      "Mammalian culture and molecular/protein assays transfer; advanced biochemistry, genetics and mouse models need training. The lab explicitly recruits bachelor's technicians with 0–3 years experience.",
    prestigeEvidence:
      "Mammalian-cell and mouse approaches support resources; extensive technical and career mentoring is explicit. Influential contributions and long-term outcomes are unverified in these sources.",
    requirementsVerified: false,
  },
  "uva-khetarpal": {
    fit: {
      alignment: 2,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 2,
    },
    prestige: {
      impact: 1,
      resources: 1,
      mentorship: 1,
      collaboration: 1,
    },
    fitEvidence:
      "General molecular preparation and documentation transfer; cardiovascular physiology and metabolic methods are not documented in enough detail to verify overlap. Bachelor's technician inquiry is explicit.",
    prestigeEvidence:
      "An active cardiometabolic program is described, but specific contributions, infrastructure and structured mentoring outcomes are unverified; contact access is documented.",
    requirementsVerified: false,
  },
  "yale-mark-lee": {
    fit: {
      alignment: 3,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 2,
      mentorship: 1,
      collaboration: 1,
    },
    fitEvidence:
      "Molecular and cell assays offer a foundation; human immune assays and high-throughput genomics require training. Postgraduate/medical inquiries are explicit but role prerequisites remain unknown.",
    prestigeEvidence:
      "Human/cancer immunology and functional approaches support a specialized program; relevant contact access is documented, but major contributions and structured mentoring outcomes require more evidence.",
    requirementsVerified: false,
  },
  "yale-seo": {
    fit: {
      alignment: 2,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 3,
      mentorship: 2,
      collaboration: 2,
    },
    fitEvidence:
      "Clinical documentation, data handling and writing transfer; fMRI, psychophysiology and longitudinal behavioral modeling need training. Medical/postgraduate training inquiries are explicitly invited.",
    prestigeEvidence:
      "Access to Yale Stress Center/MRRC and named endocrinology collaborations establishes resources and joint work; training is explicit, while major contributions and long-term outcomes are unverified.",
    requirementsVerified: false,
  },
  "yale-zaidi": {
    fit: {
      alignment: 3,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 2,
      resources: 3,
      mentorship: 1,
      collaboration: 2,
    },
    fitEvidence:
      "Culture and molecular preparation transfer; genetic engineering, immune profiling, mouse models and bioinformatics need training. Medical/research-associate inquiry access is explicit; suitable employment criteria are unknown.",
    prestigeEvidence:
      "A named prostate-cancer heterogeneity study and advanced human/mouse models support contributions and resources; benchmarking to human tumors establishes multidisciplinary research, while inquiry access alone does not verify mentoring outcomes.",
    requirementsVerified: false,
  },
  "pitt-rizzo": {
    fit: {
      alignment: 2,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 2,
      mentorship: 2,
      collaboration: 2,
    },
    fitEvidence:
      "Clinical documentation and scientific writing transfer; glycobiology assays, critical-illness models and research protocols require training. Medical-trainee inquiries are explicit; time and institutional access remain conditional.",
    prestigeEvidence:
      "Mechanistic/human-subject and diagnostic research establish multidisciplinary work; explicit individual skills mentoring supports training, without independently verified outcomes or major contributions.",
    requirementsVerified: false,
  },
  "penn-nejadnik": {
    fit: {
      alignment: 3,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 2,
      resources: 3,
      mentorship: 2,
      collaboration: 3,
    },
    fitEvidence:
      "Clinical records, outcomes extraction and literature work transfer; advanced imaging, immune-cell engineering and AI methods need training. Medical students with no prior research can inquire; project access remains conditional.",
    prestigeEvidence:
      "Patented imaging technology and specialized cell-labeling/imaging models document contributions/resources; clinical immunotherapy research and a defined medical-trainee route support collaboration and training.",
    requirementsVerified: false,
  },
  "pitt-kolarcik": {
    fit: {
      alignment: 2,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 2,
      mentorship: 1,
      collaboration: 2,
    },
    fitEvidence:
      "Culture and molecular assays overlap; neural engineering and mouse models need training. A relevant technician inquiry is documented; exact prerequisites remain unknown.",
    prestigeEvidence:
      "Cellular and systems approaches support research resources and interdisciplinary work; specific influential contributions and sustained mentoring outcomes are unverified.",
    requirementsVerified: false,
  },
  "jhu-hungoo-lee": {
    fit: {
      alignment: 2,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 2,
      resources: 2,
      mentorship: 1,
      collaboration: 1,
    },
    fitEvidence:
      "Molecular assays and culture transfer; repeat engineering, stem-cell methods and genomics need training. Postbaccalaureate inquiry access is explicit, without verified job criteria.",
    prestigeEvidence:
      "The profile documents a repeat-contraction/Fragile X reactivation contribution and an epigenetics program; long-term trainee outcomes and current collaboration structure remain unverified.",
    requirementsVerified: false,
  },
  "vcu-guang-wei-zhang": {
    fit: {
      alignment: 1,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 2,
    },
    prestige: {
      impact: 2,
      resources: 3,
      mentorship: 1,
      collaboration: 2,
    },
    fitEvidence:
      "Microscopy and data documentation offer some transfer; animal behavior, electrophysiology and computational neuroscience are unverified. Technician inquiry is explicit; preparation criteria are unknown.",
    prestigeEvidence:
      "Named social-behavior studies document contributions; Neuropixels, imaging and molecular profiling document resources. Open collaboration on behavioral datasets is described; mentoring outcomes are unknown.",
    requirementsVerified: false,
  },
  "cornell-luke-dow": {
    fit: {
      alignment: 3,
      methods: 2,
      preparation: 3,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 2,
      resources: 3,
      mentorship: 2,
      collaboration: 2,
    },
    fitEvidence:
      "Culture and molecular biology transfer to cancer models; CRISPR/base editing, organoids and animal experiments need training. An explicit novice technician inquiry supports entry preparation, without an open vacancy guarantee.",
    prestigeEvidence:
      "The research page documents genetic-model and editing-tool contributions with specialized mouse/organoid resources; named trainee alumni document training, while broad mentoring outcomes remain unverified.",
    requirementsVerified: false,
  },
  "pitt-moatti": {
    fit: {
      alignment: 2,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 2,
    },
    prestige: {
      impact: 2,
      resources: 3,
      mentorship: 1,
      collaboration: 1,
    },
    fitEvidence:
      "Microscopy and quantitative documentation transfer; inner-ear delivery, pharmacokinetics and large-animal procedures need training. Technician inquiries are invited without verified entry criteria.",
    prestigeEvidence:
      "The lab describes its porcine delivery technique and translational anatomical measurements; porcine models and lightsheet imaging support resources. Sustained mentorship outcomes remain unverified.",
    requirementsVerified: false,
  },
  "pitt-hun-way-hwang": {
    fit: {
      alignment: 3,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 2,
      resources: 3,
      mentorship: 1,
      collaboration: 1,
    },
    fitEvidence:
      "Mammalian culture and molecular assays overlap; mouse models, CRISPR and sequencing need training. A technician inquiry route is explicit, but exact staff criteria remain unknown.",
    prestigeEvidence:
      "RNA-processing and PAPERCLIP contributions are documented alongside mouse/genomics resources. A separate graduate-profile page marks graduate intake unavailable; technician capacity must be confirmed directly.",
    requirementsVerified: false,
  },
  "jhu-pluznick": {
    fit: {
      alignment: 2,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 2,
    },
    prestige: {
      impact: 2,
      resources: 2,
      mentorship: 1,
      collaboration: 1,
    },
    fitEvidence:
      "Cell localization and molecular assays offer transfer; receptor pharmacology and whole-animal renal physiology need training. Technician inquiries are welcome without verified novice criteria.",
    prestigeEvidence:
      "The lab describes sensory-receptor discoveries and in vitro/in vivo experimental resources. Dedicated technician inquiries support access, while sustained mentoring outcomes and exceptional infrastructure are unverified.",
    requirementsVerified: false,
  },
  "uva-bon-trinh": {
    fit: {
      alignment: 3,
      methods: 2,
      preparation: 3,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 2,
      resources: 3,
      mentorship: 3,
      collaboration: 2,
    },
    fitEvidence:
      "Culture, PCR and molecular assays overlap; CRISPR, animals and computational drug screening need training. Explicit novice technician access supports preparation, but no current paid vacancy is verified.",
    prestigeEvidence:
      "The lab documents a myeloid regulatory-circuit study, experimental/computational resources and clinical collaborators. Named trainee publications and a six-month gap-year technician provide concrete training outcomes.",
    requirementsVerified: false,
  },
  "jhu-gour": {
    fit: {
      alignment: 3,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 2,
      resources: 2,
      mentorship: 1,
      collaboration: 2,
    },
    fitEvidence:
      "Molecular assays and disease biology transfer; immune-cell specialization and receptor mechanisms need training. The technician invitation establishes an inquiry route, not verified entry prerequisites.",
    prestigeEvidence:
      "Named neuropeptide/GPCR studies document contributions; molecular immune/cancer projects and a partner lab support research resources and collaboration. Trainee outcomes are unverified.",
    requirementsVerified: false,
  },
  "nyu-arciniega": {
    fit: {
      alignment: 2,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 3,
      mentorship: 2,
      collaboration: 2,
    },
    fitEvidence:
      "Clinical documentation, literature work and data handling transfer; neuroimaging and specialist assessments require training. The named assistant/medical-student invitation supports inquiry access without a job guarantee.",
    prestigeEvidence:
      "Multimodal imaging and clinical/epidemiologic integration support resources and collaboration; individualized trainee mentorship is explicitly offered. Broad influential contributions and long-term mentoring outcomes remain unverified.",
    requirementsVerified: false,
  },
  "vt-weger-lucarelli": {
    fit: {
      alignment: 2,
      methods: 2,
      preparation: 3,
      level: 4,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 3,
      mentorship: 2,
      collaboration: 2,
    },
    fitEvidence:
      "Cell culture, PCR and molecular assays overlap; virus containment, mosquitoes, sequencing and infected-animal work need training. Related-degree applicants can apply; a full year is mandatory.",
    prestigeEvidence:
      "The official lab page documents RNA-virus research, mouse/mosquito/cellular resources and interdisciplinary approaches. The job offers training and a conditional graduate-study pathway, without verified broad mentoring outcomes.",
    requirementsVerified: true,
  },
  "vt-lina-ni": {
    fit: {
      alignment: 1,
      methods: 1,
      preparation: 3,
      level: 4,
      transfer: 2,
    },
    prestige: {
      impact: 1,
      resources: 3,
      mentorship: 2,
      collaboration: 2,
    },
    fitEvidence:
      "Basic molecular lab preparation transfers; insect husbandry, electrophysiology and computational analysis need training. Bachelor-level criteria are explicit, but the role is 30 hours per week.",
    prestigeEvidence:
      "Imaging, electrophysiology, genetics and connectomics support resources; named trainees and an external vector-thermosensation collaboration document training/collaboration. Broad influential contribution evidence is limited.",
    requirementsVerified: true,
  },
  "vcu-zeleke": {
    fit: {
      alignment: 2,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 2,
      mentorship: 2,
      collaboration: 3,
    },
    fitEvidence:
      "Clinical documentation, literature synthesis and data handling transfer; community research and trauma/autism assessment methods require training. General volunteer access is documented without verified degree/experience criteria.",
    prestigeEvidence:
      "Defined community studies and international institutional partnerships document resources and collaboration. Named graduate researchers and presentations show training activity; broad influential contributions and sustained alumni outcomes are unverified.",
    requirementsVerified: false,
  },
  "dartmouth-van-citters": {
    fit: {
      alignment: 2,
      methods: 1,
      preparation: 3,
      level: 4,
      transfer: 3,
    },
    prestige: {
      impact: 2,
      resources: 4,
      mentorship: 3,
      collaboration: 3,
    },
    fitEvidence:
      "Clinical context, microscopy, documentation and data presentation transfer; materials testing and implant biomechanics need training. The actual novice role requires a full year and physical laboratory duties.",
    prestigeEvidence:
      "The faculty page documents patented device methods and a 23,000-plus implant retrieval collection, clinical/industry collaboration and mentoring recognition. These concrete resources support the resource score.",
    requirementsVerified: true,
  },
  "tufts-alfredo-hernandez": {
    fit: {
      alignment: 2,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 2,
    },
    prestige: {
      impact: 1,
      resources: 2,
      mentorship: 1,
      collaboration: 1,
    },
    fitEvidence:
      "Molecular preparation and data documentation transfer; purified-protein biochemistry and replication reconstitution need training. Technician inquiries are explicit without verified role prerequisites.",
    prestigeEvidence:
      "Purified-component replication and protein-interaction projects document biochemical resources; influential contributions, exceptional infrastructure and sustained trainee outcomes remain unverified.",
    requirementsVerified: false,
  },
  "penn-ridky": {
    fit: {
      alignment: 3,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 3,
      mentorship: 2,
      collaboration: 2,
    },
    fitEvidence:
      "Mammalian culture, imaging and molecular assays transfer; advanced tissue engineering and preclinical efficacy/toxicity work need training. The technical-staff invitation is explicit without verified job criteria.",
    prestigeEvidence:
      "Engineered epithelial systems and preclinical translational studies document resources; collaboration and intensive student research are described. Broad influential contribution and sustained trainee-outcome evidence are unverified.",
    requirementsVerified: false,
  },
  "georgetown-casey-brown": {
    fit: {
      alignment: 2,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 3,
      mentorship: 2,
      collaboration: 2,
    },
    fitEvidence:
      "Clinical context, data handling and documentation transfer; psychophysiology, eye tracking and neuroimaging need training. A general volunteer route is explicit but part-time, with priority for institutional students.",
    prestigeEvidence:
      "The lab combines autonomic physiology, eye tracking and MRI with clinical/behavioral research, documenting substantial resources. Graduate/postdoctoral training routes and interdisciplinary research are described; broad impact evidence is limited.",
    requirementsVerified: false,
  },
  "rutgers-reilly": {
    fit: {
      alignment: 2,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 2,
      mentorship: 2,
      collaboration: 2,
    },
    fitEvidence:
      "Clinical documentation, communication and data handling transfer; eating-disorder assessment, human-subjects coordination and computational methods need training. Staff inquiry is explicit; one-year-plus availability and prior research are preferred.",
    prestigeEvidence:
      "A defined neurocognitive treatment-response program and cross-institutional clinical affiliation document research activity and collaboration. Supervision of more than 35 trainees is reported, while sustained outcomes are unverified.",
    requirementsVerified: false,
  },
  "pitt-mazefsky": {
    fit: {
      alignment: 2,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 3,
      resources: 3,
      mentorship: 3,
      collaboration: 3,
    },
    fitEvidence:
      "Clinical context, documentation and data management transfer; autism-specific assessments and intervention research require training. An explicit postbaccalaureate assistant route and medical-student training support inquiry access.",
    prestigeEvidence:
      "An internationally used emotion-dysregulation measure, randomized/community trials and an Autism Center of Excellence document contributions/resources. Individual faculty/postdoctoral mentoring and project development are explicitly structured.",
    requirementsVerified: false,
  },
  "wvu-andy-chan": {
    fit: {
      alignment: 2,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 3,
      mentorship: 2,
      collaboration: 3,
    },
    fitEvidence:
      "Clinical organization, patient communication and documentation transfer; signal processing, intracranial EEG and device analysis need training. Medical-student inquiries are explicit with flexible scheduling; current project access is conditional.",
    prestigeEvidence:
      "Intracranial clinical datasets and lab-built EEG/BCI platforms document specialized resources. Direct PI mentoring, named industry partners and an inter-institutional mentorship network are described; broad influential outcomes remain unverified.",
    requirementsVerified: false,
  },
  "umass-rothstein-nundel": {
    fit: {
      alignment: 2,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 2,
      resources: 3,
      mentorship: 1,
      collaboration: 2,
    },
    fitEvidence:
      "Molecular assays, culture and immunostaining transfer; immune-cell models, nucleic-acid signaling and animal experiments need training. A dedicated technician application invitation is documented without novice-specific criteria.",
    prestigeEvidence:
      "Named STING/autoimmunity studies and mouse/immune-cell models support contributions and resources; cross-group publications show collaboration. Named technicians demonstrate staff participation, while mentoring outcomes remain unverified.",
    requirementsVerified: false,
  },
  "maryland-whitney-parker": {
    fit: {
      alignment: 2,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 2,
      mentorship: 1,
      collaboration: 1,
    },
    fitEvidence:
      "Molecular preparation, microscopy and clinical context offer transfer; fetal gene delivery, epilepsy models and focused ultrasound need training. Technician inquiries are explicit; novice criteria remain unknown.",
    prestigeEvidence:
      "Named developmental/epilepsy projects and gene-delivery/ultrasound approaches document a specialized program. Specific influential contributions and sustained trainee outcomes remain unverified.",
    requirementsVerified: false,
  },
  "penn-jiang-xie": {
    fit: {
      alignment: 1,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 2,
    },
    prestige: {
      impact: 2,
      resources: 3,
      mentorship: 1,
      collaboration: 1,
    },
    fitEvidence:
      "Data organization and general biomedical preparation transfer; Neuropixels, electrophysiology, fluid dynamics and computational neuroscience need training. The technician invitation establishes inquiry access without role criteria.",
    prestigeEvidence:
      "Recognized sleep/brain-clearance work and multimodal recording platforms document contributions/resources. This recently established group has limited verified sustained mentoring and collaboration outcomes.",
    requirementsVerified: false,
  },
  "rutgers-abraira": {
    fit: {
      alignment: 1,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 2,
    },
    prestige: {
      impact: 2,
      resources: 3,
      mentorship: 1,
      collaboration: 2,
    },
    fitEvidence:
      "Molecular preparation and microscopy transfer to sensory research; mouse genetics and neural-circuit methods need training. Technician and post-baccalaureate applications are explicitly invited, without published entry prerequisites.",
    prestigeEvidence:
      "Published touch-circuit discoveries and specialized genetic/imaging tools document contributions and resources. The Keck collaborative neuroscience setting is explicit; individual mentorship outcomes are not established.",
    requirementsVerified: false,
  },
  "mit-boyer": {
    fit: {
      alignment: 2,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 3,
      resources: 3,
      mentorship: 1,
      collaboration: 2,
    },
    fitEvidence:
      "Cell culture and molecular assays support stem-cell and gene-regulation work; cardiac differentiation, genomics and animal approaches require training. Explicit technician inquiries allow discussion of a proposed timeline.",
    prestigeEvidence:
      "The lab documents discoveries involving H2A.Z and Braveheart RNA, integrated stem-cell and genetic resources, and collaborative genetic studies. Specific technician mentorship outcomes are unverified.",
    requirementsVerified: false,
  },
  "harvard-whited": {
    fit: {
      alignment: 2,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 2,
    },
    prestige: {
      impact: 2,
      resources: 3,
      mentorship: 1,
      collaboration: 2,
    },
    fitEvidence:
      "Molecular assays and microscopy transfer to regeneration research; axolotl husbandry, transgenesis and animal procedures need training. Assistant/technician applications are invited but beginner eligibility is unverified.",
    prestigeEvidence:
      "The lab documents genetic tools and sequencing-based investigation of blastema biology, with specialized regeneration resources. Team composition supports a research environment; specific entry-level mentoring outcomes remain unverified.",
    requirementsVerified: false,
  },
  "dfci-haq": {
    fit: {
      alignment: 4,
      methods: 3,
      preparation: 3,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 3,
      resources: 3,
      mentorship: 2,
      collaboration: 2,
    },
    fitEvidence:
      "Cancer biology, molecular assays and cell-culture preparation align with melanoma research; CRISPR, murine models and specialized tumor profiling need training. The assistant invitation requests molecular experience rather than establishing a no-experience vacancy.",
    prestigeEvidence:
      "The research page documents published discoveries in metabolic adaptation and immunotherapy resistance, patient biopsies and murine resources. The recruiting page explicitly describes accessible PI mentorship and basic-clinical interactions.",
    requirementsVerified: false,
  },
  "penn-kathy-liu": {
    fit: {
      alignment: 4,
      methods: 3,
      preparation: 3,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 2,
      resources: 3,
      mentorship: 2,
      collaboration: 2,
    },
    fitEvidence:
      "Molecular and cancer preparation transfer to RNA regulation and cell-based therapeutic studies; RNA enzymology, functional genetics and genomic methods need training. Technician inquiries are explicit but role prerequisites are not verified.",
    prestigeEvidence:
      "The lab documents cancer-dependency and RNA-regulation research with biochemical and genomic resources. A former BS research specialist learned cellular approaches and led projects; named RNA-group and cross-disciplinary connections support collaboration.",
    requirementsVerified: false,
  },
  "jhu-xiao-yang": {
    fit: {
      alignment: 2,
      methods: 2,
      preparation: 2,
      level: 3,
      transfer: 2,
    },
    prestige: {
      impact: 2,
      resources: 3,
      mentorship: 1,
      collaboration: 2,
    },
    fitEvidence:
      "Cell-culture preparation provides a starting point, but the invitation specifically seeks organoid/stem-cell experience and the research includes device fabrication. These specialized requirements remain a gap to discuss before applying.",
    prestigeEvidence:
      "Published biointerface, electronic-scaffold and organoid-electronics work documents contributions. Dedicated bioengineering facilities and shared research resources are explicit; entry-level mentoring outcomes are unverified.",
    requirementsVerified: false,
  },
  "columbia-davachi": {
    fit: {
      alignment: 1,
      methods: 1,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 3,
      resources: 3,
      mentorship: 2,
      collaboration: 2,
    },
    fitEvidence:
      "Clinical communication, organization and data documentation transfer to recruitment and behavioral studies; memory paradigms, neuroimaging and analysis need training. RA inquiries are explicit without a published enrollment restriction.",
    prestigeEvidence:
      "The lab documents foundational memory-encoding and consolidation publications and multiple imaging modalities. Prior RAs have completed independent projects; interdisciplinary psychology and systems-neuroscience research is explicit.",
    requirementsVerified: false,
  },
  "bu-erica-pratt": {
    fit: {
      alignment: 4,
      methods: 3,
      preparation: 3,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 3,
      mentorship: 1,
      collaboration: 2,
    },
    fitEvidence:
      "Cancer and molecular preparation, PCR and sample documentation align with liquid-biopsy projects; digital PCR, multi-omics and microfluidic assay engineering need training. Full-time technician recruitment is explicit, while detailed prerequisites remain unavailable.",
    prestigeEvidence:
      "The lab describes digital PCR, sequencing, mass-spectrometry and single-cell profiling resources plus a transdisciplinary oncology approach. Broad research influence and technician mentorship outcomes are not established.",
    requirementsVerified: false,
  },
  "stonybrook-min-guk-cho": {
    fit: {
      alignment: 4,
      methods: 4,
      preparation: 3,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 2,
      mentorship: 2,
      collaboration: 2,
    },
    fitEvidence:
      "Cancer, molecular assays, PCR/qPCR, Western blot and imaging closely match listed activities; mouse studies and new protocol development require training. The early technician inquiry is explicit but is not an official vacancy.",
    prestigeEvidence:
      "A new lab documents mechanistic cancer-immunity projects and molecular/imaging resources. Trainee accounts describe learning new assays and cross-campus device collaborations; broad lab influence remains unverified.",
    requirementsVerified: false,
  },
  "harvard-ya-chieh-hsu": {
    fit: {
      alignment: 2,
      methods: 3,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 3,
      resources: 3,
      mentorship: 2,
      collaboration: 2,
    },
    fitEvidence:
      "Culture and imaging preparation transfer to cell communication and tissue repair; lineage tracing, mouse genetics, surgery and single-cell sequencing require training. The assistant inquiry is explicit, with entry prerequisites unverified.",
    prestigeEvidence:
      "The lab documents discoveries of stem-cell-progeny feedback and coordinated tissue growth, plus imaging and in vivo genetic resources. Independent trainee projects and a structured mentoring commitment are described.",
    requirementsVerified: false,
  },
  "temple-rich-gang-li": {
    fit: {
      alignment: 2,
      methods: 2,
      preparation: 3,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 2,
      mentorship: 2,
      collaboration: 2,
    },
    fitEvidence:
      "Molecular preparation supports cardiac-cell signaling work; ischemic animal models, transcriptomics and proteomics need training. Bachelor-level assistant inquiries are explicitly invited, with previous molecular experience preferred.",
    prestigeEvidence:
      "The new lab documents funded cardiac-renewal work and transcriptomic/proteomic approaches. Direct PI training, grant writing and project-to-publication mentoring are described; established lab-wide influence remains unverified.",
    requirementsVerified: false,
  },
  "rutgers-el-ouaamari": {
    fit: {
      alignment: 2,
      methods: 3,
      preparation: 2,
      level: 3,
      transfer: 3,
    },
    prestige: {
      impact: 2,
      resources: 2,
      mentorship: 1,
      collaboration: 2,
    },
    fitEvidence:
      "Cellular and molecular preparation transfers to beta-cell signaling and metabolic disease; integrated physiology, animal work and specialized islet assays require training. Assistant applications at all levels are explicit.",
    prestigeEvidence:
      "The lab describes mechanistic beta-cell and organ-crosstalk research in mouse and human models. Multidisciplinary methods and institutional endocrine connections support resources/collaboration; individual assistant mentorship outcomes are unverified.",
    requirementsVerified: false,
  },
  "yale-kirstin-meyer": {
    fit: {
      alignment: 2,
      methods: 3,
      preparation: 3,
      level: 4,
      transfer: 3,
    },
    prestige: {
      impact: 1,
      resources: 3,
      mentorship: 3,
      collaboration: 2,
    },
    fitEvidence:
      "Molecular, culture and microscopy preparation supports cell-fate studies; CRISPR, single-molecule imaging, optogenetics and stem-cell engineering need training. The advertised one-year bachelor-level role treats prior laboratory experience as desirable.",
    prestigeEvidence:
      "Advanced microscopy, optogenetics and stem-cell systems document resources. The role explicitly provides weekly PI meetings, experimental-design and communication mentorship, independent questions and career development.",
    requirementsVerified: true,
  },
};
