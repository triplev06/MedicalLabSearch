import type { Lab } from "../../domain/types";
import { researchLab } from "./research-entry";

// Official research sources searched and opened on 2026-10-21.
// Research-interest records do not establish hiring or eligibility.
export const nationalWestLabs: Lab[] = [
  researchLab({
    id: "national-west-bivona",
    name: "Bivona Laboratory",
    institution: "University of California, San Francisco",
    pi: "Trever Bivona",
    city: "San Francisco",
    state: "CA",
    fields: ["Cancer biology", "Cell signaling"],
    description:
      "Studies signaling mechanisms that drive solid tumor initiation, progression and resistance to targeted therapies.",
    website: "https://bms.ucsf.edu/people/trever-bivona-md-phd",
    fit: 90,
    prestige: 90,
    strengths: [
      "Cancer signaling and molecular experiments align with lung cancer research interests.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Drug resistance models and functional genetics require project-specific training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "An integrated genetic and cell biology program connects mechanisms of solid cancer growth with precision treatment.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-mccormick",
    name: "McCormick Laboratory",
    institution: "University of California, San Francisco",
    pi: "Frank McCormick",
    city: "San Francisco",
    state: "CA",
    fields: ["Cancer biology", "RAS signaling"],
    description:
      "Investigates RAS regulation and downstream signaling in cancer and developmental disorders.",
    website: "https://mccormicklab.ucsf.edu/",
    fit: 85,
    prestige: 95,
    strengths: [
      "Molecular biology foundations support interest in oncogenic signaling.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "RAS biochemistry and pathway-specific assays are additional training areas.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The group centers on mechanistic dissection of RAS, a major cancer driver, and its disease-related effector pathways.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-weaver",
    name: "Weaver Laboratory",
    institution: "University of California, San Francisco",
    pi: "Valerie M. Weaver",
    city: "San Francisco",
    state: "CA",
    fields: ["Cancer biology", "Mechanobiology"],
    description:
      "Studies how extracellular matrix composition, organization and force regulate cell fate, mammary development and tumor progression.",
    website: "https://weaverlabsurgery.ucsf.edu/",
    fit: 85,
    prestige: 95,
    strengths: [
      "Cell and cancer biology overlap with tumor microenvironment research.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Matrix mechanics and engineered three-dimensional systems require training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The lab documents an NCI Outstanding Investigator Award and a program connecting tissue mechanics with cancer progression.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-krummel",
    name: "Krummel Laboratory",
    institution: "University of California, San Francisco",
    pi: "Matthew Krummel",
    city: "San Francisco",
    state: "CA",
    fields: ["Immunology", "Cancer immunology"],
    description:
      "Uses live microscopy to study lymphocyte activation and collective immune behavior in lung disease and immune-evasive tumors.",
    website: "https://pathology.ucsf.edu/about/faculty/matthew-krummel-phd",
    fit: 80,
    prestige: 90,
    strengths: [
      "Lung and cancer interests intersect with immune regulation.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Advanced live imaging and immune-cell phenotyping need training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The program combines tool development with real-time analysis of immune-cell cooperation in diseased tissues.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-karpen",
    name: "Karpen Laboratory",
    institution: "University of California, Berkeley",
    pi: "Gary Karpen",
    city: "Berkeley",
    state: "CA",
    fields: ["Chromatin biology", "DNA repair"],
    description:
      "Uses Drosophila, imaging and biophysical approaches to study chromatin organization, heterochromatin and genome stability.",
    website: "https://sites.google.com/berkeley.edu/karpenlab/research",
    fit: 75,
    prestige: 85,
    strengths: [
      "Molecular genetics is relevant to chromatin and DNA repair questions.",
      "PCR/qPCR and experimental data analysis provide transferable foundations.",
    ],
    gaps: [
      "Drosophila genetics and condensate biophysics are specialized areas.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The group integrates organismal genetics and biophysics to test how chromatin organization protects genome function.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-raulet",
    name: "Raulet Laboratory",
    institution: "University of California, Berkeley",
    pi: "David Raulet",
    city: "Berkeley",
    state: "CA",
    fields: ["Immunology", "Cancer immunotherapy"],
    description:
      "Investigates recognition and killing of cancer and infected cells by natural killer cells and T cells, including immune inhibition and desensitization.",
    website: "https://mcb.berkeley.edu/faculty/IMM/rauletd.html",
    fit: 80,
    prestige: 90,
    strengths: [
      "Cancer biology provides a basis for learning immune recognition mechanisms.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "NK-cell assays and immunotherapy combinations need specialized training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The research program translates mechanistic work on NK recognition into combinations intended to enhance antitumor responses.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-doudna",
    name: "Doudna Laboratory",
    institution: "University of California, Berkeley",
    pi: "Jennifer A. Doudna",
    city: "Berkeley",
    state: "CA",
    fields: ["Genome engineering", "RNA biology"],
    description:
      "Studies CRISPR-associated proteins and develops genome editing, gene regulation and delivery technologies.",
    website: "https://mcb.berkeley.edu/faculty/bbs/doudnaj.html",
    fit: 75,
    prestige: 95,
    strengths: [
      "Molecular biology foundations are relevant to genome engineering.",
      "PCR/qPCR and experimental data analysis provide transferable foundations.",
    ],
    gaps: [
      "Protein engineering, metagenomics and delivery design extend beyond basic bench skills.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The official profile documents development of CRISPR interference and engineered Cas proteins with new functions.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-graeber",
    name: "Graeber Laboratory",
    institution: "University of California, Los Angeles",
    pi: "Thomas Graeber",
    city: "Los Angeles",
    state: "CA",
    fields: ["Cancer metabolism", "Systems biology"],
    description:
      "Combines broad molecular profiling, computational analysis and targeted validation to study cancer signaling, metabolism and drug resistance.",
    website: "https://crump.ucla.edu/research/our-labs/graeber-lab",
    fit: 85,
    prestige: 90,
    strengths: [
      "Cancer signaling and experimental validation match molecular research interests.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Mass spectrometry and network-scale computational analysis need training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The lab integrates proteomic and metabolomic profiling with mechanistic validation and supports the UCLA Metabolomics Center.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-rothenberg",
    name: "Rothenberg Laboratory",
    institution: "California Institute of Technology",
    pi: "Ellen V. Rothenberg",
    city: "Pasadena",
    state: "CA",
    fields: ["Immunology", "Gene regulation"],
    description:
      "Dissects the transcription factors and signaling networks that commit hematopoietic precursors to the T-cell lineage.",
    website: "https://rothenberglab.caltech.edu/",
    fit: 80,
    prestige: 90,
    strengths: [
      "Cell differentiation and molecular genetics overlap with biomedical training.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "High-resolution developmental state analysis and T-cell precursor culture require training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The group combines developmental models and gene regulation to distinguish lineage activation from irreversible commitment.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-shaw",
    name: "Shaw Laboratory",
    institution: "Salk Institute for Biological Studies",
    pi: "Reuben Shaw",
    city: "San Diego",
    state: "CA",
    fields: ["Lung cancer", "Cancer metabolism"],
    description:
      "Studies LKB1-AMPK signaling and how nutrient sensing connects metabolism, cell growth and tumor suppression.",
    website: "https://shaw.salk.edu/homepage-alternative/",
    fit: 90,
    prestige: 90,
    strengths: [
      "Lung cancer and molecular signaling are especially relevant research themes.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Genetically engineered mouse work and metabolic assays need training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The program links a lung cancer tumor suppressor to an experimentally tractable metabolic signaling circuit.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-evans",
    name: "Evans Laboratory",
    institution: "Salk Institute for Biological Studies",
    pi: "Ronald Evans",
    city: "San Diego",
    state: "CA",
    fields: ["Molecular biology", "Metabolism"],
    description:
      "Investigates nuclear hormone receptors and their roles in metabolic regulation, inflammation and cancer-related therapeutic targets.",
    website:
      "https://www.salk.edu/scientist/ronald-evans/?wpmobileexternal=true",
    fit: 80,
    prestige: 95,
    strengths: [
      "Molecular biology interests connect with receptor signaling in disease.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Nuclear receptor pharmacology and metabolic physiology are additional areas.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The official profile credits nuclear hormone receptor discoveries and the Lasker Basic Medical Research Award.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-kaech",
    name: "Kaech Laboratory",
    institution: "Salk Institute for Biological Studies",
    pi: "Susan Kaech",
    city: "San Diego",
    state: "CA",
    fields: ["Immunology", "Cancer immunology"],
    description:
      "Studies memory T-cell differentiation and how tissue nutrients and tumor metabolism regulate protective immunity.",
    website: "https://www.salk.edu/scientist/susan-kaech/",
    fit: 80,
    prestige: 95,
    strengths: [
      "Molecular and cancer biology support interest in immune-cell metabolism.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "T-cell differentiation and metabolic immune assays require training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The program identified memory T-cell precursors and gene networks; the profile records NAS election in 2024.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-karlseder",
    name: "Karlseder Laboratory",
    institution: "Salk Institute for Biological Studies",
    pi: "Jan Karlseder",
    city: "San Diego",
    state: "CA",
    fields: ["Cancer biology", "Telomeres"],
    description:
      "Studies telomere damage, senescence and cellular crisis to understand the earliest barriers to cancer formation.",
    website: "https://www.salk.edu/scientist/jan-karlseder/",
    fit: 85,
    prestige: 90,
    strengths: [
      "Cancer and molecular biology interests align with genome integrity research.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Telomere-specific methods and primary-cell senescence models need training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The lab identified macroautophagy-mediated death in crisis as a tumor-suppressive mechanism.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-cheresh",
    name: "Cheresh Laboratory",
    institution: "University of California, San Diego",
    pi: "David Cheresh",
    city: "San Diego",
    state: "CA",
    fields: ["Cancer biology", "Angiogenesis"],
    description:
      "Examines receptors and signaling pathways that promote angiogenesis, tumor invasion and metastasis to identify therapeutic strategies.",
    website:
      "https://pathology.ucsd.edu/research/labs/cheresh/about/index.html",
    fit: 90,
    prestige: 90,
    strengths: [
      "Cell signaling and cancer biology offer strong scientific overlap.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Angiogenesis models and therapeutic antibody studies require training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The official overview describes therapeutic development arising from tumor antigen antibodies and receptor signaling studies.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-houghton",
    name: "Houghton Laboratory",
    institution: "Fred Hutch Cancer Center",
    pi: "McGarry Houghton",
    city: "Seattle",
    state: "WA",
    fields: ["Lung cancer", "Tumor immunology"],
    description:
      "Combines human lung cancer tissue and mouse models to study neutrophil-driven immune exclusion, treatment resistance and early detection.",
    website: "https://research.fredhutch.org/houghton/en.html",
    fit: 95,
    prestige: 90,
    strengths: [
      "Direct lung cancer and translational molecular research overlap.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Human immune profiling and orthotopic cancer models require training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The group established a human-tissue and mouse platform that revealed myeloid exclusion of tumor-reactive lymphocytes.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-holland",
    name: "Holland Laboratory",
    institution: "Fred Hutch Cancer Center",
    pi: "Eric Holland",
    city: "Seattle",
    state: "WA",
    fields: ["Brain cancer", "Translational oncology"],
    description:
      "Develops mouse brain tumor models and imaging methods to investigate tumor biology and test therapeutic strategies.",
    website: "https://research.fredhutch.org/holland/en.html",
    fit: 85,
    prestige: 90,
    strengths: [
      "Cancer biology and experimental research provide transferable foundations.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Brain tumor models and longitudinal imaging are specialized methods.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The official lab overview reports that its mouse-model work has led to clinical trials in glioma patients.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-macpherson",
    name: "MacPherson Laboratory",
    institution: "Fred Hutch Cancer Center",
    pi: "David MacPherson",
    city: "Seattle",
    state: "WA",
    fields: ["Lung cancer", "Cancer genetics"],
    description:
      "Uses preclinical small-cell lung cancer models to connect gene mutations, therapeutic vulnerabilities and exceptional treatment responses.",
    website: "https://www.fredhutch.org/en/people/m/david-macpherson.html",
    fit: 95,
    prestige: 90,
    strengths: [
      "Small-cell lung cancer and molecular mechanisms match priority interests.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Functional genomic screens and engineered animal models require training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
      "The reviewed recruitment page concerns graduate or postdoctoral routes; these are not evidence of an entry-level staff opening.",
    ],
    prestigeReason:
      "The group specializes in preclinical small-cell lung cancer models and linking tumor mutations to treatment response.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements. Advertised postdoctoral routes require doctoral preparation; staff-role requirements remain unknown.",
    sources: [
      {
        url: "https://www.fredhutch.org/en/people/m/david-macpherson.html",
        title: "MacPherson Laboratory official research overview",
        claims: ["research", "environment"],
        evidence:
          "Uses preclinical small-cell lung cancer models to connect gene mutations, therapeutic vulnerabilities and exceptional treatment responses.",
      },
      {
        url: "https://research.fredhutch.org/macpherson/en/join-the-lab.html",
        title: "Graduate and postdoctoral recruitment",
        claims: ["requirements"],
        evidence:
          "The page describes graduate students and postdoctoral fellows, including SCLC functional screens. These routes do not establish an entry-level staff vacancy.",
      },
    ],
  }),
  researchLab({
    id: "national-west-tapscott",
    name: "Tapscott Laboratory",
    institution: "Fred Hutch Cancer Center",
    pi: "Stephen Tapscott",
    city: "Seattle",
    state: "WA",
    fields: ["Gene regulation", "Cell biology"],
    description:
      "Studies chromatin-dependent transcription, DUX4 and cell specification in development, muscular dystrophy and cancer.",
    website: "https://research.fredhutch.org/tapscott/en/research.html",
    fit: 75,
    prestige: 85,
    strengths: [
      "Molecular biology aligns with transcription and disease mechanisms.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Muscle disease models and DUX4 epigenetics are specialized areas.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The research connects DUX4 regulation with human disease and molecular biomarkers for muscular dystrophy.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-fong",
    name: "Fong Laboratory",
    institution: "Fred Hutch Cancer Center",
    pi: "Lawrence Fong",
    city: "Seattle",
    state: "WA",
    fields: ["Cancer immunotherapy", "Translational oncology"],
    description:
      "Uses patient samples, preclinical models and single-cell approaches to understand immunotherapy response, resistance and toxicity.",
    website: "https://research.fredhutch.org/fong/en.html",
    fit: 85,
    prestige: 90,
    strengths: [
      "Cancer and translational research interests align with patient-oriented immune studies.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Single-cell multiomics and immune-response analysis need training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The group explicitly integrates physicians, experimental scientists and bioinformaticians around patient-guided immunotherapy mechanisms.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-hsieh",
    name: "Hsieh Laboratory",
    institution: "Fred Hutch Cancer Center",
    pi: "Andrew Hsieh",
    city: "Seattle",
    state: "WA",
    fields: ["Cancer biology", "RNA biology"],
    description:
      "Investigates how altered protein synthesis drives cancer using cellular approaches, primary human samples, animal models and computation.",
    website: "https://research.fredhutch.org/hsieh/en/join-the-lab.html",
    fit: 85,
    prestige: 90,
    strengths: [
      "Molecular and cancer biology align with translation machinery research.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "RNA biology, animal modeling and computational integration require training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
      "The reviewed recruitment page concerns graduate or postdoctoral routes; these are not evidence of an entry-level staff opening.",
    ],
    prestigeReason:
      "The group bridges protein synthesis mechanisms with clinically difficult cancers using human material and experimental models.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements. Advertised postdoctoral routes require doctoral preparation; staff-role requirements remain unknown.",
    sources: [
      {
        url: "https://research.fredhutch.org/hsieh/en/join-the-lab.html",
        title: "Hsieh Laboratory official research overview",
        claims: ["research", "environment"],
        evidence:
          "Investigates how altered protein synthesis drives cancer using cellular approaches, primary human samples, animal models and computation.",
      },
      {
        url: "https://research.fredhutch.org/hsieh/en/join-the-lab.html",
        title: "Graduate and postdoctoral recruitment",
        claims: ["requirements"],
        evidence:
          "Postdoctoral candidates need a recent PhD and/or MD. Graduate rotations require enrollment in named UW programs; no suitable entry-level staff vacancy is verified.",
      },
    ],
  }),
  researchLab({
    id: "national-west-gujral",
    name: "Gujral Laboratory",
    institution: "Fred Hutch Cancer Center",
    pi: "Taran Gujral",
    city: "Seattle",
    state: "WA",
    fields: ["Cancer biology", "Systems pharmacology"],
    description:
      "Develops patient-derived tumor models and computational kinase approaches to study tumor-host signaling and repurpose therapies for rare cancers.",
    website: "https://www.fredhutch.org/en/people/g/taran-gujral.html",
    fit: 85,
    prestige: 90,
    strengths: [
      "Cancer signaling and experimental drug testing match translational interests.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Organotypic tissue culture and computational pharmacology need training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The program combines preserved tumor architecture with systems pharmacology to identify actionable vulnerabilities in rare cancers.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-degregori",
    name: "DeGregori Laboratory",
    institution: "University of Colorado Anschutz Medical Campus",
    pi: "James DeGregori",
    city: "Aurora",
    state: "CO",
    fields: ["Cancer genetics", "Lung cancer"],
    description:
      "Studies adaptive oncogenesis and uses mouse models and functional screens to investigate leukemia and lung cancer treatment strategies.",
    website:
      "https://medschool.cuanschutz.edu/biochemistry/people/primary-faculty/degregori-james/degregori-lab/home",
    fit: 90,
    prestige: 90,
    strengths: [
      "Lung cancer and molecular mechanisms strongly overlap with research interests.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Evolutionary modeling and genome-wide functional screening require training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The lab developed an adaptive oncogenesis framework and validates genetic targets in combination with cancer therapies.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-clambey",
    name: "Clambey Laboratory",
    institution: "University of Colorado Anschutz Medical Campus",
    pi: "Eric T. Clambey",
    city: "Aurora",
    state: "CO",
    fields: ["Immunology", "Cancer biology"],
    description:
      "Uses single-cell analysis and genetic manipulation to study antiviral and antitumor immune responses and therapeutic modulation.",
    website:
      "https://medschool.cuanschutz.edu/anesthesiology/research/basic-research-pis/clambey-lab",
    fit: 80,
    prestige: 85,
    strengths: [
      "Cancer and cell biology support learning immune heterogeneity.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Flow cytometry, mass cytometry and immune genetic models need training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The lab couples host and target-cell genetics with single-cell cytometry and leadership of a cancer center flow resource.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-lydia-heasley",
    name: "Lydia Heasley Laboratory",
    institution: "University of Colorado Anschutz Medical Campus",
    pi: "Lydia Heasley",
    city: "Aurora",
    state: "CO",
    fields: ["Cell biology", "Genome stability"],
    description:
      "Studies how chromosome changes help yeast populations adapt to environmental stress and develop antifungal drug resistance.",
    website:
      "https://medschool.cuanschutz.edu/basic-sciences/meet-the-scientists-basic-sciences/heasley--lydia",
    fit: 70,
    prestige: 80,
    strengths: [
      "Molecular genetics and disease mechanisms provide transferable interests.",
      "PCR/qPCR and experimental data analysis provide transferable foundations.",
    ],
    gaps: [
      "Yeast genetics and fungal adaptation are less direct cancer matches.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The group compares defined laboratory strains and wild isolates to connect chromosome structure with adaptive behavior.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-nemenoff",
    name: "Nemenoff Laboratory",
    institution: "University of Colorado Anschutz Medical Campus",
    pi: "Raphael Nemenoff",
    city: "Aurora",
    state: "CO",
    fields: ["Lung cancer", "Cancer immunology"],
    description:
      "Uses orthotopic lung cancer models to study tumor-microenvironment signaling, antigen presentation and immunotherapy resistance.",
    website: "https://nemenofflab.wixsite.com/website",
    fit: 95,
    prestige: 85,
    strengths: [
      "Direct lung cancer and molecular tumor biology overlap.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Syngeneic mouse implantation and immune checkpoint studies need training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The lab's orthotopic platform permits genetic tests of immune evasion and tumor-host interactions in lung cancer.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-largaespada",
    name: "Largaespada Laboratory",
    institution: "University of Minnesota",
    pi: "David Largaespada",
    city: "Minneapolis",
    state: "MN",
    fields: ["Cancer genetics", "Genome engineering"],
    description:
      "Uses Sleeping Beauty mutagenesis, CRISPR and preclinical models to identify cancer drivers and therapeutic vulnerabilities, including NF1-associated tumors.",
    website:
      "https://vetmed.umn.edu/bio/college-of-veterinary-medicine/david-largaespada",
    fit: 85,
    prestige: 90,
    strengths: [
      "Cancer and molecular genetics align with functional gene discovery.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Transposon screens and immune-cell engineering require training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The official profile documents pioneering Sleeping Beauty cancer screens and an American Cancer Society Research Professor Award.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-moriarity",
    name: "Moriarity Laboratory",
    institution: "University of Minnesota",
    pi: "Branden Moriarity",
    city: "Minneapolis",
    state: "MN",
    fields: ["Genome engineering", "Cell therapy"],
    description:
      "Engineers immune cells using genome editing, including natural killer cell cancer approaches and therapeutic protein production in B cells.",
    website:
      "https://med.umn.edu/pediatrics/research/research-laboratories-and-programs/moriarity-lab",
    fit: 80,
    prestige: 85,
    strengths: [
      "Cell and molecular biology are relevant to engineered immune therapies.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Primary immune-cell editing and therapeutic vector methods require training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The group develops both NK-cell cancer therapies and site-specific CRISPR engineering of B-cell therapeutic platforms.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-provenzano",
    name: "Provenzano Laboratory",
    institution: "University of Minnesota",
    pi: "Paolo Provenzano",
    city: "Minneapolis",
    state: "MN",
    fields: ["Cancer biology", "Bioengineering"],
    description:
      "Studies physical and molecular tumor-stroma interactions and engineers strategies to improve drug delivery and antitumor immunity.",
    website: "https://provenzanolab.umn.edu/",
    fit: 85,
    prestige: 90,
    strengths: [
      "Tumor biology and experimental research overlap with microenvironment studies.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Nonlinear imaging, mechanics and quantitative modeling need training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The lab combines engineered environments and imaging to test stromal mechanisms of metastasis and treatment resistance.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-hogquist",
    name: "Hogquist Laboratory",
    institution: "University of Minnesota",
    pi: "Kristin Hogquist",
    city: "Minneapolis",
    state: "MN",
    fields: ["Immunology", "T-cell biology"],
    description:
      "Studies thymic selection, maturation and repertoire formation to explain effective, self-tolerant T-cell responses.",
    website:
      "https://vetmed.umn.edu/bio/college-of-veterinary-medicine/kristin-hogquist",
    fit: 75,
    prestige: 90,
    strengths: [
      "Molecular and cell biology support learning immune development.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Thymic selection models and T-cell repertoire analysis require training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The profile documents physiological models of negative selection and election to the National Academy of Sciences.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-baldridge",
    name: "Baldridge Laboratory",
    institution: "Washington University in St. Louis",
    pi: "Megan Baldridge",
    city: "St. Louis",
    state: "MO",
    fields: ["Immunology", "Microbiology"],
    description:
      "Investigates interactions among commensal microbes, host immunity and enteric pathogens using sequencing and mouse infection models.",
    website: "https://profiles.wustl.edu/en/persons/megan-baldridge/",
    fit: 75,
    prestige: 85,
    strengths: [
      "Molecular biology and disease mechanisms offer a transferable foundation.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Microbiome analysis and enteric infection methods need training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The program combines in vivo infections with sequencing to dissect cross-kingdom regulation of intestinal immunity.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-longmore",
    name: "Longmore Laboratory",
    institution: "Washington University in St. Louis",
    pi: "Gregory D. Longmore",
    city: "St. Louis",
    state: "MO",
    fields: ["Cancer biology", "Metastasis"],
    description:
      "Studies tumor-environment communication and molecular pathways that enable cancer invasion and metastatic spread.",
    website: "https://oncology.wustl.edu/people/gregory-d-longmore-md/",
    fit: 85,
    prestige: 90,
    strengths: [
      "Cancer cell biology aligns with invasion and metastasis questions.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Complex microenvironment models and live migration assays need training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The program ties mechanistic metastasis research to molecular oncology leadership and therapeutic target development.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-denardo",
    name: "DeNardo Laboratory",
    institution: "Washington University in St. Louis",
    pi: "David DeNardo",
    city: "St. Louis",
    state: "MO",
    fields: ["Cancer immunology", "Pancreatic cancer"],
    description:
      "Studies how dendritic cells, macrophages and fibroblasts shape pancreatic cancer immunity and therapeutic response across metastatic sites.",
    website: "https://denardolabwusm.org/",
    fit: 90,
    prestige: 90,
    strengths: [
      "Cancer and translational biology match tumor-immune interaction research.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Immune phenotyping and pancreatic cancer models require training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The lab connects human samples and mouse mechanisms with pancreatic cancer SPORE projects and clinical immunotherapy studies.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-stewart",
    name: "Stewart Laboratory",
    institution: "Washington University in St. Louis",
    pi: "Sheila A. Stewart",
    city: "St. Louis",
    state: "MO",
    fields: ["Cancer biology", "Cellular senescence"],
    description:
      "Examines how aging stromal cells, senescence-associated secretions and fibroblasts influence immunity, dormant tumors and cancer progression.",
    website: "https://cellbiology.wustl.edu/people/stewart/",
    fit: 85,
    prestige: 90,
    strengths: [
      "Cell and cancer biology overlap with senescence mechanisms.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Stromal aging models and secretory phenotype assays need training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The profile lists mechanistic work linking stromal reprogramming with metastatic breast cancer immunotherapy response.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-schreiber",
    name: "Schreiber Laboratory",
    institution: "Washington University in St. Louis",
    pi: "Robert Schreiber",
    city: "St. Louis",
    state: "MO",
    fields: ["Cancer immunology", "Immunotherapy"],
    description:
      "Investigates cancer immunoediting and tumor-specific neoantigens to improve therapeutic immune responses and neoantigen vaccines.",
    website: "https://pathology.wustl.edu/people/robert-schreiber-phd/",
    fit: 85,
    prestige: 95,
    strengths: [
      "Cancer biology provides a basis for tumor immunity research.",
      "Mammalian cell culture, PCR/qPCR, Western blotting and microscopy provide transferable experimental foundations.",
    ],
    gaps: [
      "Immunogenomics, neoantigen identification and vaccine assays need training.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The group proposed and experimentally established cancer immunoediting and pioneered therapeutic neoantigen identification.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
  researchLab({
    id: "national-west-dantas",
    name: "Dantas Laboratory",
    institution: "Washington University in St. Louis",
    pi: "Gautam Dantas",
    city: "St. Louis",
    state: "MO",
    fields: ["Microbial genomics", "Systems biology"],
    description:
      "Studies antibiotic resistance across microbial communities and engineers microbial functions with genomic and systems approaches.",
    website: "https://profiles.wustl.edu/en/persons/gautam-dantas/",
    fit: 70,
    prestige: 90,
    strengths: [
      "Molecular biology offers transferable bench foundations.",
      "PCR/qPCR and experimental data analysis provide transferable foundations.",
    ],
    gaps: [
      "Microbial ecology, metagenomics and computational analysis are less direct cancer matches.",
      "No suitable role-specific vacancy or eligibility requirements have been verified.",
    ],
    prestigeReason:
      "The profile describes an interdisciplinary program with extensive technician and trainee mentorship and microbial engineering applications.",
    assessment:
      "Research-interest assessment based on the public qualification profile and official research description; scores are broad judgments, not hiring probability. Confirm project, supervision and role requirements.",
  }),
];
