import type { ScoreReview } from "../../domain/scoring";

// Evidence is limited to each catalog record and its cited official research source.
export const westChicagoReviews: Record<string, ScoreReview> = {
  "national-west-bivona": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Cell culture and protein assays transfer to solid-tumor signaling; resistance models and functional genetics remain unverified. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "An integrated genetic and cell biology program connects mechanisms of solid cancer growth with precision treatment. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-mccormick": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "PCR and Western blotting support RAS pathway experiments; RAS biochemistry is unverified. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The group centers on mechanistic dissection of RAS, a major cancer driver, and its disease-related effector pathways. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-weaver": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 3, resources: 3, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Culture and microscopy support tumor-matrix work, but engineered matrices and force measurements require training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The lab documents an NCI Outstanding Investigator Award and a program connecting tissue mechanics with cancer progression. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-krummel": {
    fit: { alignment: 2, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Microscopy is useful for immune-cell observation; advanced live imaging and immune phenotyping remain gaps. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The program combines tool development with real-time analysis of immune-cell cooperation in diseased tissues. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-karpen": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 1 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "PCR and imaging offer limited transfer to Drosophila chromatin work; organismal genetics and biophysics are unverified. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The group integrates organismal genetics and biophysics to test how chromatin organization protects genome function. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-raulet": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Culture and molecular assays transfer to cancer immunology, while NK-cell killing assays need training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The research program translates mechanistic work on NK recognition into combinations intended to enhance antitumor responses. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-doudna": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 1 },
    prestige: { impact: 3, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "PCR supports molecular work, but CRISPR, protein engineering and delivery design are not verified skills. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The official profile documents development of CRISPR interference and engineered Cas proteins with new functions. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-graeber": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Cancer-cell validation fits culture and protein assays; mass spectrometry and computational networks remain gaps. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The lab integrates proteomic and metabolomic profiling with mechanistic validation and supports the UCLA Metabolomics Center. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-rothenberg": {
    fit: { alignment: 2, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Molecular assays support gene regulation questions; T-cell precursor culture and lineage-state methods need training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The group combines developmental models and gene regulation to distinguish lineage activation from irreversible commitment. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-shaw": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Culture and protein assays support cancer signaling; mouse models and metabolic assays are unverified. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The program links a lung cancer tumor suppressor to an experimentally tractable metabolic signaling circuit. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-evans": {
    fit: { alignment: 2, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 4, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Molecular biology supports receptor experiments, with nuclear-receptor pharmacology and physiology still unverified. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The official profile credits nuclear hormone receptor discoveries and the Lasker Basic Medical Research Award. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-kaech": {
    fit: { alignment: 2, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 4, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Cancer and molecular interests overlap immune metabolism; T-cell differentiation assays need training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The program identified memory T-cell precursors and gene networks; the profile records NAS election in 2024. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-karlseder": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Culture and microscopy transfer to cancer-cell senescence; telomere assays and primary-cell models need training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The lab identified macroautophagy-mediated death in crisis as a tumor-suppressive mechanism. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-cheresh": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 3, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Cancer signaling fits protein assays and culture; angiogenesis models and therapeutic antibodies need training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The official overview describes therapeutic development arising from tumor antigen antibodies and receptor signaling studies. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-houghton": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Lung-cancer experiments and clinical documentation transfer to tissue-linked research; immune profiling and orthotopic models need training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The group established a human-tissue and mouse platform that revealed myeloid exclusion of tumor-reactive lymphocytes. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-holland": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 3, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Cancer biology offers thematic overlap; mouse brain-tumor models and longitudinal imaging dominate the method gap. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The official lab overview reports that its mouse-model work has led to clinical trials in glioma patients. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-macpherson": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 1, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Cancer-cell foundations transfer, but engineered models and genomic screens are unverified; reviewed recruitment describes graduate/postdoctoral routes. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The group specializes in preclinical small-cell lung cancer models and linking tumor mutations to treatment response. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-tapscott": {
    fit: { alignment: 2, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "PCR and protein assays support transcription research; DUX4 epigenetics and muscle models need training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The research connects DUX4 regulation with human disease and molecular biomarkers for muscular dystrophy. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-fong": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Clinical documentation and cancer experiments support patient-linked work; single-cell multiomics and immune analysis remain gaps. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The group explicitly integrates physicians, experimental scientists and bioinformaticians around patient-guided immunotherapy mechanisms. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-hsieh": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 1, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Protein assays and cancer culture support translation biology; RNA specialization, animal and computational methods are unverified, and recruitment describes advanced training routes. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The group bridges protein synthesis mechanisms with clinically difficult cancers using human material and experimental models. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-gujral": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Culture and cancer biology support tumor models; organotypic culture and computational pharmacology need training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The program combines preserved tumor architecture with systems pharmacology to identify actionable vulnerabilities in rare cancers. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-degregori": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Cancer molecular assays transfer to target validation; evolutionary modeling and genome-wide screening are unverified. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The lab developed an adaptive oncogenesis framework and validates genetic targets in combination with cancer therapies. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-clambey": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 3, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Molecular biology offers partial immune-research transfer; flow/mass cytometry and immune genetic models are not documented skills. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The lab couples host and target-cell genetics with single-cell cytometry and leadership of a cancer center flow resource. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-lydia-heasley": {
    fit: { alignment: 1, methods: 1, preparation: 2, level: 2, transfer: 1 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "PCR and analysis offer only adjacent transfer to yeast adaptation; yeast genetics and fungal resistance differ from cancer interests. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The group compares defined laboratory strains and wild isolates to connect chromosome structure with adaptive behavior. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-nemenoff": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Lung-cancer interests align with immune evasion, but orthotopic implantation and checkpoint models need substantial training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The lab's orthotopic platform permits genetic tests of immune evasion and tumor-host interactions in lung cancer. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-largaespada": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 4, resources: 3, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Cancer interests overlap driver discovery; CRISPR, transposon screens and preclinical modeling remain unverified. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The official profile documents pioneering Sleeping Beauty cancer screens and an American Cancer Society Research Professor Award. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-moriarity": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Molecular biology provides a foundation, but NK/B-cell engineering and CRISPR require substantial new methods. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The group develops both NK-cell cancer therapies and site-specific CRISPR engineering of B-cell therapeutic platforms. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-provenzano": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Culture and imaging support tumor-stroma research; engineering drug-delivery environments needs training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The lab combines engineered environments and imaging to test stromal mechanisms of metastasis and treatment resistance. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-hogquist": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 1 },
    prestige: { impact: 4, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "General molecular skills transfer partially to T-cell development; selection models and repertoire methods are specialized gaps. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The profile documents physiological models of negative selection and election to the National Academy of Sciences. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-baldridge": {
    fit: { alignment: 1, methods: 1, preparation: 2, level: 2, transfer: 1 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "PCR and analysis are adjacent skills; enteric infection, microbial sequencing and mouse models differ from the public profile. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The program combines in vivo infections with sequencing to dissect cross-kingdom regulation of intestinal immunity. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-longmore": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Cancer culture and protein assays transfer to invasion mechanisms; complex microenvironments and migration assays need training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The program ties mechanistic metastasis research to molecular oncology leadership and therapeutic target development. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-denardo": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Cancer bench skills and clinical documentation support translational work; pancreatic models and immune phenotyping require training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The lab connects human samples and mouse mechanisms with pancreatic cancer SPORE projects and clinical immunotherapy studies. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-stewart": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Cell culture and microscopy fit stromal mechanisms; aging models and secretory-phenotype assays need training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The profile lists mechanistic work linking stromal reprogramming with metastatic breast cancer immunotherapy response. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-schreiber": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 3, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Cancer biology overlaps immunoediting, but immunogenomics, neoantigen identification and vaccine assays are unverified. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The group proposed and experimentally established cancer immunoediting and pioneered therapeutic neoantigen identification. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "national-west-dantas": {
    fit: { alignment: 1, methods: 1, preparation: 2, level: 2, transfer: 1 },
    prestige: { impact: 1, resources: 2, mentorship: 2, collaboration: 2 },
    fitEvidence:
      "PCR and data analysis provide adjacent transfer; microbial ecology, metagenomics and computational engineering need substantial training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The profile describes an interdisciplinary program with extensive technician and trainee mentorship and microbial engineering applications. Explicit trainee/technician mentorship supports training evidence; sustained outcomes and national impact remain unverified.",
  },
  "uchicago-joyce-chen": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Culture and microscopy transfer to lung-cell research; pluripotent differentiation and organoid engineering are unverified, and the indexed inquiry invitation is unconfirmed. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "A specialized lung-modeling program bridging molecular engineering and cancer biology. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "uchicago-macleod": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 3, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Cancer-cell culture and protein assays support mitochondrial stress work; mitophagy assays, flux profiling and animal models need training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "An established Ben May cancer program using cell biology, animal models and human samples. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "uchicago-yu-ying-he": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 1, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Cancer molecular assays support carcinogenesis work; RNA modification and skin models need training, and reviewed advertisements concern students/postdocs. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "An interdisciplinary molecular carcinogenesis program within UChicago cancer biology. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "uchicago-becker": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Cancer biology offers overlap, but macrophage isolation, proteomics and immune assays exceed documented methods. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "A Ben May program connecting macrophage mechanisms with therapeutic development. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "uchicago-gajewski": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Cancer interests overlap antitumor immunity; T-cell functional assays and in vivo immunology are unverified. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The institutional profile documents cancer-immunology leadership and national professional service. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "uchicago-jing-chen": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 3, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Culture and protein assays support cancer metabolism validation; metabolomics and metabolic-flux instrumentation need training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The PI directs the Cancer Metabolomics Research Center and holds translational-science leadership roles. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "uchicago-rosner": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Cancer-cell assays transfer to breast-cancer signaling; systems proteomics, sequencing and mouse work are unverified. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "An established Ben May metastasis program combining molecular and systems methods. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "uchicago-mcnerney": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "PCR and culture offer foundations for blood-cancer research; hematopoietic models, gene editing and genomics remain substantial gaps. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "An active pathology program connecting cancer genomics to therapeutic vulnerabilities. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "uchicago-savage": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Cancer interests overlap regulatory immunity, with T-cell assays, tetramers and mouse tumor models unverified. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "An established cancer-immunology group led by the Committee on Immunology chair. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "uchicago-weichselbaum": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Cancer-treatment questions align broadly; radiation experiments and immune-model techniques require training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "An interdisciplinary radiation and cellular oncology environment with laboratory and clinical exchange. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "uchicago-sweis": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Cancer assays and clinical documentation transfer to translational resistance research; bladder/skin models and immune phenotyping need training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "A physician-scientist program connecting preclinical models and therapeutic development. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "uchicago-labelle": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Culture and Western blotting directly support apoptosis mechanisms; peptide chemistry and delivery assays need training, and the technician news snippet is unconfirmed. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "A translational pediatric and adult cancer program linking chemical biology with clinical research. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "nw-chandel": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 3, resources: 3, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Cell and protein assays support mitochondrial signaling; causal genetics, metabolic assays and animal models remain gaps. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "The official institute page describes foundational mitochondrial discoveries and major research leadership. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "nw-singer": {
    fit: { alignment: 2, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Microscopy and molecular assays transfer to lung repair; ARDS, immune regulation and animal models differ from documented skills. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "A dedicated lung-repair program integrated with the Simpson Querrey Lung Institute. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "nw-budinger": {
    fit: { alignment: 2, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Protein assays and microscopy support pulmonary mechanisms; aging, pneumonia models and tissue macrophage methods need training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "An established pulmonary research group within Northwestern's lung-biology community. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "nw-mendillo": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Western blotting and cancer-cell culture support protein-stress studies; high-throughput screens and genomics need training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "A cancer-center program combining molecular biochemistry with systematic discovery. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "rush-borgia": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 1, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Culture, protein assays and clinical documentation support lung-cancer biomarkers; mass spectrometry and multiplex platforms remain unverified. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "A dedicated thoracic biomarker laboratory with clinical collaborations and named research staff. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "rush-maki-duan": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Culture and protein assays transfer directly to cancer signaling; p53/DREAM expertise and in vivo drug testing need training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "A verified joint cancer laboratory with mechanistic lung-cancer research. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "loyola-jiwang-zhang": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 3, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Culture and PCR transfer to disease mechanisms; hematopoietic stem cells, CRISPR screens and xenografts are unverified. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "A focused translational leukemia laboratory within Loyola's Cancer Biology department. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
  "loyola-denning": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Culture, molecular assays and immunostaining transfer to epithelial signaling; keratinocyte models and ultraviolet experiments need training. No suitable entry-level staff role or eligibility is verified.",
    prestigeEvidence:
      "A molecular carcinogenesis program spanning cancer biology and pharmacology. Confidence is limited to the cited record; mentorship outcomes and broader impact are not established.",
  },
};
