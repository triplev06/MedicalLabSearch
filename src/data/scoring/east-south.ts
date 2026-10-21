import type { ScoreReview } from "../../domain/scoring";

// Source-specific reviews against the public qualification profile.
// Missing evidence limits a dimension; it does not establish poor lab quality.
export const eastSouthReviews: Record<string, ScoreReview> = {
  "ne-scott-lowe": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Cell culture and immunostaining support studies of senescence. Genetically engineered mouse models and functional screens require additional training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The Cancer Biology and Genetics group combines p53 biology, senescence interventions and preclinical cancer models. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-charles-sawyers": {
    fit: { alignment: 3, methods: 3, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 3, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Western blotting and molecular assays align with signaling and drug-response experiments. Prostate lineage models and resistance genomics extend beyond the verified skill set. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The Human Oncology and Pathogenesis setting links mechanistic signaling discoveries with development of clinically used inhibitors. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-elaine-fuchs": {
    fit: { alignment: 2, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 2, collaboration: 1 },
    fitEvidence:
      "Mammalian culture and microscopy align with epithelial stem-cell experiments. Skin stem-cell systems, mouse genetics and tissue engraftment need specialized training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The lab combines human and mouse epithelial cultures with genetics and tissue regeneration experiments. A training or mentor context is explicit; sustained trainee outcomes are unverified. Institutional brand adds no points.",
  },
  "ne-sohail-tavazoie": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 3, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Molecular assays and cancer interests support experimental metastasis projects. Systems analysis and in vivo metastasis models are unverified skills. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The metastasis research center setting connects mechanistic studies with metastasis-targeting compounds advanced into clinical trials. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-joan-massague": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Cell culture, immunostaining and signaling assays align with metastatic cell-state work. Quantitative biology and mouse metastasis models require further preparation. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The lab explicitly integrates biologists, data scientists and clinicians to translate metastatic niche mechanisms toward clinical studies. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-andrea-ventura": {
    fit: { alignment: 3, methods: 3, preparation: 2, level: 4, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "PCR and molecular biology match an explicitly advertised research technician role. Molecular research or mouse experience is preferred, not required; unverified CRISPR is a training gap, not a hard eligibility barrier. Degree requirements remain unspecified.",
    prestigeEvidence:
      "The group combines chromosome engineering, high-throughput genetic screens and cancer models within SKI. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-alexander-rudensky": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Molecular assays and immunostaining provide a foundation for T-cell biology. Specialized immune phenotyping and regulatory T-cell models need training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The Immunology Program and Ludwig Center setting supports mechanistic studies spanning tumor immunity, infection and tissue homeostasis. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-christine-mayr": {
    fit: { alignment: 2, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Microscopy, PCR and Western blots align with RNA-dependent protein-function experiments. Advanced RNA biology and spatial translation methods are unverified. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The cancer genetics environment supports fundamental studies connecting RNA structure and cytoplasmic organization with protein function. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-tyler-jacks": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Mammalian culture and cancer interests support organoid and molecular projects. Gene-targeted mouse models and tumor immunology require additional training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The Koch Institute and Ludwig Center connect sophisticated cancer models with preclinical testing of immunotherapies. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-michael-yaffe": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Western blotting and molecular assays are relevant to signaling experiments. Quantitative systems modeling and advanced phosphoproteomic work need training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The precision cancer medicine setting combines mechanistic signaling research with an investigator practicing surgical oncology. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-stefani-spranger": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 1, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Cell culture and immunostaining offer a base for experimental tumor immunology. Dendritic-cell and T-cell functional assays are not verified strengths. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The Koch Institute affiliation places tumor-immune interaction research in an interdisciplinary cancer research environment. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-william-kaelin": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Protein analysis and controlled molecular experiments align with tumor-suppressor biology. Specialized oxygen-sensing models and mechanistic genetics need further preparation. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The disease-oriented basic research program connects VHL mechanisms to cancer biology and emphasizes rigorous experimental controls. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-matthew-vander-heiden": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Mammalian culture and experimental analysis support cancer metabolism experiments. Metabolic flux analysis and metabolomics are unverified skills. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The Koch Institute program links biochemical mechanisms with cancer physiology and potential metabolism-directed therapies. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-michael-hemann": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 3, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Cell culture and molecular assays align with drug-response experiments. High-throughput genetics, computational analyses and mouse models need training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The precision cancer medicine and Ludwig Center affiliations support mechanistic work on rational drug combinations. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-omer-yilmaz": {
    fit: { alignment: 2, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Culture and microscopy provide a foundation for epithelial biology. Intestinal stem-cell systems and controlled dietary mouse studies require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The Koch Institute setting connects intestinal tissue biology with nutrition, immunity and cancer mechanisms. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-jacqueline-lees": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "PCR and protein analysis align with cancer gene regulation. Stem-cell models and functional cancer genetics need additional preparation. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The lab connects cancer gene regulation with the MIT Stem Cell Initiative and established RB/E2F expertise. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-andrew-ewald": {
    fit: { alignment: 3, methods: 3, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Microscopy and mammalian cell culture align closely with live invasion experiments. Three-dimensional tumor assays and quantitative migration analysis need training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The cell biology group develops specialized 3D assays connecting K14-positive invasion leaders with therapeutic hypotheses. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-cynthia-sears": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Clinical documentation and molecular assays fit the human-sample and translational components. Microbiome analysis, anaerobic bacteria and mouse studies require additional training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The program combines prospective human colonoscopy studies with mechanistic experiments in inflammation and microbiome-associated cancer. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-denis-wirtz": {
    fit: { alignment: 1, methods: 1, preparation: 1, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 2, collaboration: 2 },
    fitEvidence:
      "Microscopy and mammalian cell work support cell architecture experiments. Single-molecule manipulation, instrument development and engineering methods are unverified. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The NanoBioTechnology and cancer nanotechnology training environment connects engineering with cancer-cell biophysics. A training or mentor context is explicit; sustained trainee outcomes are unverified. Institutional brand adds no points.",
  },
  "ne-craig-hendrix": {
    fit: { alignment: 1, methods: 1, preparation: 1, level: 2, transfer: 3 },
    prestige: { impact: 2, resources: 4, mentorship: 0, collaboration: 4 },
    fitEvidence:
      "Clinical documentation and data analysis align with intensive pharmacology studies. Pharmacokinetic modeling and HIV-specific clinical protocols are new areas; cancer overlap is limited. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The lab supports pharmacology cores for multicenter HIV prevention networks and conducts human drug-distribution studies. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-peter-espenshade": {
    fit: { alignment: 2, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "PCR and Western blotting support mechanistic cell-homeostasis work. Multi-organism lipid-sensing models are a training area; direct cancer emphasis is less central. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The cell biology laboratory uses multiple organisms and disciplines to connect essential homeostatic mechanisms with human disease. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-ashani-weeraratna": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Cell culture and immunostaining align with stromal and melanoma interactions. Aging models, Wnt biology and in vivo metastasis assays need additional training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The cancer invasion and metastasis program connects molecular oncology with aging-related changes in tissue and immune environments. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-dario-altieri": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 3, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Protein assays and mammalian culture align with mitochondrial cancer mechanisms. Bioenergetics, xenografts and genetically engineered animals require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The program combines patient material and mechanistic models with a mitochondria-targeted compound advanced into first-in-human testing. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-david-weiner": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 3, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "PCR and molecular biology align with nucleic-acid immunotherapy research. Vaccine delivery, immune assays and clinical translation workflows require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The Vaccine and Immunotherapy Center supports synthetic nucleic-acid approaches that have progressed into human studies. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-alessandro-gardini": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "PCR, protein analysis and writing support mechanistic gene-regulation experiments. Genomics, proteomics and enhancer profiling require additional preparation. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The cancer center program combines biochemistry with genomics and proteomics to study normal and malignant gene regulation. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-nan-zhang-wistar": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Microscopy and immunostaining align with macrophage-tumor interaction studies. Single-cell sequencing, intravital imaging and novel mouse genetics require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The program integrates patient samples, advanced imaging and mouse models; the PI also directs the Imaging Facility. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-kathryn-wellen": {
    fit: { alignment: 2, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Mammalian culture and protein assays support nutrient-response and gene-regulation work. Metabolite profiling and specialized epigenetic assays need training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The Penn laboratory connects mechanistic nutrient sensing with signaling and chromatin regulation in a biomedical research setting. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-ben-stanger": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Cancer interests and molecular assays align with cellular plasticity research. Functional genomics and engineered mice require training; the official page reports no technician openings. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The pancreatic cancer research center setting combines human samples, epigenetics and engineered models to identify therapeutic vulnerabilities. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-maureen-murphy": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "PCR and protein assays align with p53 variant-function studies. Variant-specific disease models and personalized therapeutic screening need training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The oncogenesis program links tumor-suppressor mechanisms with cancer disparities and inherited-risk populations. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-paul-lieberman": {
    fit: { alignment: 2, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Molecular assays and cell culture align with viral genome and chromatin research. EBV/KSHV systems and viral chromosome architecture are specialized training areas. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The Center for Advanced Therapeutics and molecular screening capabilities connect viral latency mechanisms with drug discovery. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-greg-delgoffe": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Culture and experimental analysis support immune metabolism projects. Metabolic flux measurements and exhausted T-cell assays require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The Tumor Microenvironment Center connects mechanistic T-cell metabolism with Hillman basic cancer research and immunotherapy. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-dario-vignali": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Protein assays and immunostaining provide a base for checkpoint biology. Specialized T-cell models and immune profiling need further preparation. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The program combines tumor immunity with mechanistic studies of LAG3, PD1 and intratumoral regulatory T cells. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-olivera-finn": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 3, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Clinical research interests and molecular assays align with antigen and prevention studies. Immune repertoire analysis and vaccine-specific assays require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The laboratory connects tumor-antigen discovery with patient and prevention trials of MUC1-directed vaccination. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-lee-oesterreich": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Mammalian culture and protein assays align with hormone-response and breast cancer models. Single-cell profiling and advanced patient-derived models are development areas. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The joint laboratory links molecular breast cancer mechanisms with a dedicated lobular cancer program and patient-derived model development. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "ne-patricia-opresko": {
    fit: { alignment: 2, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Microscopy and molecular assays support DNA-damage and telomere experiments. Specialized telomere methods and oxidative DNA-damage models need training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The molecular pharmacology and genetics environment supports mechanistic DNA repair research linked to cancer and aging. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-allison": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Molecular assays and immunostaining support immune signaling studies. CyTOF, spatial profiling and advanced immune phenotyping would require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The official overview describes single-cell and spatial immune profiling alongside clinical oncology collaborations. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-wargo": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Cancer biology and clinical documentation align with translational treatment studies. Microbiome analysis and genomic profiling experience are unverified. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The lab connects mechanistic melanoma research with clinical trials and its microbiome translational program. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-schlacher": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 3, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "PCR and protein assays provide a foundation for replication biology. Single-molecule approaches and animal models would require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The profile describes an integrated single-molecule, single-cell and animal-model research program. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-rezvani": {
    fit: { alignment: 2, methods: 1, preparation: 1, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Mammalian cell culture and molecular assays relate to immune-cell experiments. CAR engineering, CRISPR and mass cytometry are unverified skills. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The official lab page combines cellular engineering with receptor profiling and tumor immune-evasion studies. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-kalluri": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 2, collaboration: 3 },
    fitEvidence:
      "Cell culture, microscopy and protein analysis align with tumor-stroma questions. Exosome methods and animal-model experience would need confirmation. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The detailed mentor research statement connects microenvironment and exosome discoveries to clinical translation. A training or mentor context is explicit; sustained trainee outcomes are unverified. Institutional brand adds no points.",
  },
  "national-south-sood": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "PCR, cell culture and clinical research interests match RNA and translational work. Extracellular-vesicle techniques and specialized tumor models require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The official overview integrates RNA therapeutics, microenvironment biology and bench-to-clinic investigation. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-davies": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Cancer cell assays and clinical documentation suit translational resistance studies. Brain-metastasis models and genomic biomarker workflows are unverified. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The profile documents a translational laboratory linked to melanoma clinical trials and therapeutic development. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-counter": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "PCR, cell culture and protein assays align with oncogenic signaling. CRISPR screens, proximity proteomics and sensitive sequencing are unverified. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The research program combines mechanistic RAS studies with sequencing, functional screens and inhibitor development. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-pendergast": {
    fit: { alignment: 3, methods: 3, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Microscopy, immunostaining and protein assays fit migration and kinase biology. Animal models and advanced metastasis methods would require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The official research overview integrates tyrosine kinase mechanisms with metastasis and lung regeneration models. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-xiao-fan-wang": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Cell culture and molecular assays relate to tumor signaling. Specialized immune profiling and neuroimmune model experience are unverified. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The official page describes mechanistic tumor-neuroimmune work and combination immunotherapy research. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-oliver": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 3, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 1, collaboration: 2 },
    fitEvidence:
      "Cell culture, microscopy and lung cancer interests fit the program. Mouse husbandry, lineage tracing and single-cell analysis need training. Academic requirements and a suitable assistant role remain unverified. The lab explicitly invites tissue-culture and molecular-biology applicants to inquire; paid-role eligibility remains unconfirmed.",
    prestigeEvidence:
      "The lab overview describes patient-derived systems and genetically engineered models directed toward new lung cancer treatments. A joining invitation documents team access; structured training outcomes are unverified. Institutional brand adds no points.",
  },
  "national-south-wood": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Experimental analysis and mammalian cell assays support drug-response work. Genomic screening and systems-level analysis would require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The faculty research overview links genomic perturbation and pharmacology to evolving tumor vulnerabilities. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-zou": {
    fit: { alignment: 3, methods: 3, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "PCR and Western blotting align with DNA-damage signaling studies. Specialized replication and repair assays would require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The official research summary connects checkpoint mechanisms to cancer-selective therapeutic vulnerabilities. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-sipkins": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 3, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Microscopy and cell biology experience fit niche-interaction studies. Intravital multiphoton imaging and mouse models require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The official lab overview describes real-time in vivo imaging combined with classical molecular and cell biology. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-minna": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 3, resources: 3, mentorship: 0, collaboration: 4 },
    fitEvidence:
      "Mammalian culture and molecular assays closely match translational lung cancer. Patient-derived models and specialized biomarker platforms need training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The lab documents lung cancer SPORE and consortium projects connecting molecular models with therapeutic development. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-james-chen": {
    fit: { alignment: 2, methods: 2, preparation: 2, level: 3, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 1, collaboration: 1 },
    fitEvidence:
      "PCR, protein analysis and culture support innate signaling experiments. Advanced innate-immunity pathway methods need training. Academic requirements and a suitable assistant role remain unverified. A general invitation to motivated researchers supports inquiry, not verified assistant eligibility.",
    prestigeEvidence:
      "The lab overview documents the cGAS discovery program and an active cell signaling and host defense research group. A joining invitation documents team access; structured training outcomes are unverified. Institutional brand adds no points.",
  },
  "national-south-deberardinis": {
    fit: { alignment: 3, methods: 1, preparation: 1, level: 2, transfer: 3 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Cell biology and experimental analysis support metabolic cancer questions. Isotope tracing, metabolomics and computational flux analysis are unverified. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The detailed research page integrates patient metabolism measurements with cell and animal experiments and clinical genetics. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-morrison": {
    fit: { alignment: 2, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 3, collaboration: 1 },
    fitEvidence:
      "Molecular biology and microscopy relate to self-renewal mechanisms. Stem-cell models and animal experimentation would require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The official page describes a sustained stem-cell and cancer program and documented trainee progression to independent research careers. The source documents trainee progression to independent research careers; sustained outcome counts are unverified. Institutional brand adds no points.",
  },
  "national-south-akbay": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 3, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Cell culture and protein assays align with lung cancer immune escape. Transgenic and humanized mouse models and flow cytometry need training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The research page integrates functional tumor-metabolism studies with clinically relevant lung cancer immune-resistance models. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-balko": {
    fit: { alignment: 3, methods: 3, preparation: 2, level: 1, transfer: 3 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Cell culture, molecular assays and clinical research interests strongly align. Genomic analysis and in vivo models are unverified; advertised scientist roles may require substantial experience. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The official overview describes an integrated in silico, cell-based, histologic and human clinical research program. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-jeff-rathmell": {
    fit: { alignment: 2, methods: 1, preparation: 1, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Protein assays and cell culture relate to immune-cell metabolism. Immune phenotyping and specialized metabolic measurements require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The lab describes collaborative genetic and biochemical research spanning immunology, cancer biology and metabolism. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-lovly": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Cancer interests, molecular assays and clinical documentation support translational work. Molecular-subtype analysis and specialized resistance models need development. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The detailed official profile connects lung cancer laboratory research with physician-scientist clinical activity and multiple research funding programs. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-philip": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Molecular assays and immunostaining support immune dysfunction research. Flow cytometry, next-generation sequencing and engineered mouse models are unverified. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The official profile describes longitudinal tumor-specific T-cell tracking integrated with functional and epigenetic characterization. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-delgiorno": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Microscopy, immunostaining and cell culture align with epithelial and vesicle studies. Organoids, genetically engineered models and single-cell genomics need training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The research page integrates organoids and imaging with longitudinal human biospecimen collection and multidisciplinary clinical collaborations. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-marcus": {
    fit: { alignment: 3, methods: 2, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Microscopy, immunostaining and cell culture closely align with invasion research. Image-guided genomics and mouse metastasis models require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The detailed profile describes development of a live-cell image-guided genomics platform and therapeutic studies of invasive tumor populations. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-ahmed": {
    fit: { alignment: 1, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 3, mentorship: 0, collaboration: 2 },
    fitEvidence:
      "Molecular assays and immunostaining support mechanistic immune research. Antigen-specific immune assays and murine or primate systems are unverified. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The official profile describes cellular and molecular studies across human and animal systems and a program connecting memory immunity with cancer immunotherapy. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-paulos": {
    fit: { alignment: 2, methods: 1, preparation: 1, level: 2, transfer: 3 },
    prestige: { impact: 2, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Mammalian cell culture and molecular assays relate to T cell studies. Adoptive transfer, CAR technologies and mouse immunology require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The research profile integrates mechanistic T cell studies, human clinical research and investigator-initiated trials. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-haura": {
    fit: { alignment: 3, methods: 1, preparation: 2, level: 2, transfer: 3 },
    prestige: { impact: 3, resources: 3, mentorship: 0, collaboration: 3 },
    fitEvidence:
      "Protein assays, cell culture and clinical research interests fit translational lung cancer. Mass spectrometry proteomics and advanced molecular characterization need training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The detailed official profile links an established translational proteomics program with biomarker development and molecularly directed clinical trials. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
  "national-south-cleveland": {
    fit: { alignment: 3, methods: 3, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 2, resources: 2, mentorship: 3, collaboration: 1 },
    fitEvidence:
      "Western blotting, PCR and culture align with cancer signaling. Specialized genetic cancer models and therapeutic development methods need training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The official research profile documents sustained NIH-supported mechanistic research and extensive training of researchers who established independent careers. The source documents trainee progression to independent research careers; sustained outcome counts are unverified. Institutional brand adds no points.",
  },
  "national-south-paulo-rodriguez": {
    fit: { alignment: 2, methods: 1, preparation: 2, level: 2, transfer: 2 },
    prestige: { impact: 1, resources: 2, mentorship: 0, collaboration: 1 },
    fitEvidence:
      "Molecular assays and cell culture support tumor-immune interaction studies. Myeloid immunophenotyping and immune-cell therapeutic models require training. Academic requirements and a suitable assistant role remain unverified.",
    prestigeEvidence:
      "The official research profile describes mechanistic myeloid-cell immunosuppression research directed toward improved cancer treatment. Mentorship outcomes are not documented in the reviewed evidence. Institutional brand adds no points.",
  },
};
