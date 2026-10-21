import type { Lab } from "../../domain/types";
import { researchLab } from "./research-entry";

// Official research pages searched and opened on 2026-10-21.
// Research interest is not evidence of a vacancy. Scores are editorial, in five-point bands.
// The Lee/Oesterreich joint group is intentionally counted only once.
export const nationalNortheastLabs: Lab[] = [
  researchLab({
    id: "ne-scott-lowe",
    name: "Scott Lowe Laboratory",
    institution: "Memorial Sloan Kettering Cancer Center",
    pi: "Scott Lowe",
    city: "New York",
    state: "NY",
    fields: ["Cancer biology", "Molecular biology"],
    description:
      "Studies tumor suppression, p53 signaling, senescence and interactions between cancer cells and their environment.",
    website: "https://www.mskcc.org/research/ski/labs/scott-lowe",
    fit: 85,
    prestige: 95,
    strengths: [
      "Cell culture and immunostaining support studies of senescence.",
    ],
    gaps: [
      "Genetically engineered mouse models and functional screens require additional training.",
    ],
    prestigeReason:
      "The Cancer Biology and Genetics group combines p53 biology, senescence interventions and preclinical cancer models.",
    assessment:
      "Editorial assessment against the public qualification profile: Cell culture and immunostaining support studies of senescence. Genetically engineered mouse models and functional screens require additional training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies tumor suppression, p53 signaling, senescence and interactions between cancer cells and their environment. The Cancer Biology and Genetics group combines p53 biology, senescence interventions and preclinical cancer models.",
  }),
  researchLab({
    id: "ne-charles-sawyers",
    name: "Charles Sawyers Laboratory",
    institution: "Memorial Sloan Kettering Cancer Center",
    pi: "Charles Sawyers",
    city: "New York",
    state: "NY",
    fields: ["Translational research", "Cancer biology"],
    description:
      "Investigates abnormal cancer signaling and resistance to targeted therapies, including prostate cancer and leukemia.",
    website: "https://www.mskcc.org/research-areas/labs/charles-sawyers",
    fit: 90,
    prestige: 95,
    strengths: [
      "Western blotting and molecular assays align with signaling and drug-response experiments.",
    ],
    gaps: [
      "Prostate lineage models and resistance genomics extend beyond the verified skill set.",
    ],
    prestigeReason:
      "The Human Oncology and Pathogenesis setting links mechanistic signaling discoveries with development of clinically used inhibitors.",
    assessment:
      "Editorial assessment against the public qualification profile: Western blotting and molecular assays align with signaling and drug-response experiments. Prostate lineage models and resistance genomics extend beyond the verified skill set. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Investigates abnormal cancer signaling and resistance to targeted therapies, including prostate cancer and leukemia. The Human Oncology and Pathogenesis setting links mechanistic signaling discoveries with development of clinically used inhibitors.",
  }),
  researchLab({
    id: "ne-elaine-fuchs",
    name: "Elaine Fuchs Laboratory",
    institution: "The Rockefeller University",
    pi: "Elaine Fuchs",
    city: "New York",
    state: "NY",
    fields: ["Molecular biology", "Cancer biology"],
    description:
      "Studies epithelial stem cells, tissue niches, inflammation and regeneration, including mechanisms disrupted in skin cancer.",
    website: "https://www.rockefeller.edu/research/2374-fuchs-laboratory/",
    fit: 80,
    prestige: 95,
    strengths: [
      "Mammalian culture and microscopy align with epithelial stem-cell experiments.",
    ],
    gaps: [
      "Skin stem-cell systems, mouse genetics and tissue engraftment need specialized training.",
    ],
    prestigeReason:
      "The lab combines human and mouse epithelial cultures with genetics and tissue regeneration experiments.",
    assessment:
      "Editorial assessment against the public qualification profile: Mammalian culture and microscopy align with epithelial stem-cell experiments. Skin stem-cell systems, mouse genetics and tissue engraftment need specialized training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies epithelial stem cells, tissue niches, inflammation and regeneration, including mechanisms disrupted in skin cancer. The lab combines human and mouse epithelial cultures with genetics and tissue regeneration experiments.",
    availability: "inquiries",
    contact: {
      name: "Fuchs laboratory",
      email: "fuchslb@rockefeller.edu",
    },
    applicationUrl:
      "https://www.rockefeller.edu/research/2374-fuchs-laboratory/",
    applicationMethod:
      "The lab invites research-interest inquiries even though technical openings are rare. Email the listed laboratory address with a concise explanation of relevant interests; this is not a verified technician vacancy.",
    requirements: [
      "No current technical role requirements are verified.",
      "PhD students apply through Rockefeller's Graduate Program; postdocs/residents have separate CV and interest-letter instructions. These training routes do not establish technician eligibility.",
    ],
    sources: [
      {
        url: "https://www.rockefeller.edu/research/2374-fuchs-laboratory/",
        title: "Fuchs Laboratory — research and joining the lab",
        claims: [
          "research",
          "environment",
          "contact",
          "availability",
          "requirements",
        ],
        evidence:
          "Studies epithelial stem cells, tissue niches, inflammation and regeneration, including mechanisms disrupted in skin cancer. The page lists fuchslb@rockefeller.edu and invites inquiries about research interests, noting technical openings are rare. Graduate and postdoctoral routes are described separately.",
      },
    ],
  }),
  researchLab({
    id: "ne-sohail-tavazoie",
    name: "Sohail Tavazoie Laboratory",
    institution: "The Rockefeller University",
    pi: "Sohail Tavazoie",
    city: "New York",
    state: "NY",
    fields: ["Cancer biology", "Molecular biology"],
    description:
      "Investigates inherited and molecular determinants of metastasis, immune evasion and translational regulation.",
    website:
      "https://www.rockefeller.edu/our-scientists/heads-of-laboratories/973-sohail-tavazoie/",
    fit: 85,
    prestige: 95,
    strengths: [
      "Molecular assays and cancer interests support experimental metastasis projects.",
    ],
    gaps: [
      "Systems analysis and in vivo metastasis models are unverified skills.",
    ],
    prestigeReason:
      "The metastasis research center setting connects mechanistic studies with metastasis-targeting compounds advanced into clinical trials.",
    assessment:
      "Editorial assessment against the public qualification profile: Molecular assays and cancer interests support experimental metastasis projects. Systems analysis and in vivo metastasis models are unverified skills. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Investigates inherited and molecular determinants of metastasis, immune evasion and translational regulation. The metastasis research center setting connects mechanistic studies with metastasis-targeting compounds advanced into clinical trials.",
  }),
  researchLab({
    id: "ne-joan-massague",
    name: "Joan Massagué Laboratory",
    institution: "Memorial Sloan Kettering Cancer Center",
    pi: "Joan Massagué",
    city: "New York",
    state: "NY",
    fields: ["Cancer biology", "Molecular biology"],
    description:
      "Studies metastatic stem cells, dormancy and stromal niches, with attention to TGF-beta signaling and organ-specific metastasis.",
    website: "https://www.mskcc.org/research/ski/labs/joan-massague",
    fit: 90,
    prestige: 95,
    strengths: [
      "Cell culture, immunostaining and signaling assays align with metastatic cell-state work.",
    ],
    gaps: [
      "Quantitative biology and mouse metastasis models require further preparation.",
    ],
    prestigeReason:
      "The lab explicitly integrates biologists, data scientists and clinicians to translate metastatic niche mechanisms toward clinical studies.",
    assessment:
      "Editorial assessment against the public qualification profile: Cell culture, immunostaining and signaling assays align with metastatic cell-state work. Quantitative biology and mouse metastasis models require further preparation. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies metastatic stem cells, dormancy and stromal niches, with attention to TGF-beta signaling and organ-specific metastasis. The lab explicitly integrates biologists, data scientists and clinicians to translate metastatic niche mechanisms toward clinical studies.",
  }),
  researchLab({
    id: "ne-andrea-ventura",
    name: "Andrea Ventura Laboratory",
    institution: "Memorial Sloan Kettering Cancer Center",
    pi: "Andrea Ventura",
    city: "New York",
    state: "NY",
    fields: ["Molecular biology", "Cancer biology"],
    description:
      "Studies extrachromosomal DNA, chromosomal rearrangements and non-coding RNAs in cancer through genetic and biochemical experiments.",
    website: "https://www.mskcc.org/research/ski/labs/andrea-ventura",
    fit: 90,
    prestige: 90,
    strengths: [
      "PCR and molecular biology experience support the advertised technician research area.",
    ],
    gaps: [
      "CRISPR screens and mouse work are development areas; preferred experience is not a mandatory prerequisite in the lab notice.",
    ],
    prestigeReason:
      "The group combines chromosome engineering, high-throughput genetic screens and cancer models within SKI.",
    assessment:
      "Editorial assessment against the public qualification profile: PCR and molecular biology experience support the advertised technician research area. CRISPR screens and mouse work are development areas; preferred experience is not a mandatory prerequisite in the lab notice. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies extrachromosomal DNA, chromosomal rearrangements and non-coding RNAs in cancer through genetic and biochemical experiments. The group combines chromosome engineering, high-throughput genetic screens and cancer models within SKI.",
    availability: "open",
    experience: "entry",
    applicationUrl:
      "https://www.mskcc.org/research/ski/labs/andrea-ventura/career-opportunities",
    requirements: [
      "The lab advertises a research technician role in cancer and non-coding RNA molecular biology.",
      "Molecular biology research or mouse experience is preferred, not required.",
      "Degree, employment authorization and time commitment are not specified; confirm directly. Graduate rotations use named graduate programs and are a separate route.",
    ],
    applicationMethod:
      "Use the official career-opportunities page to inquire about the research technician opening and confirm the current institutional application process. The page does not provide a distinct technician submission checklist.",
    sources: [
      {
        url: "https://www.mskcc.org/research/ski/labs/andrea-ventura",
        title: "Ventura Laboratory — official research",
        claims: ["research", "environment"],
        evidence:
          "Studies extrachromosomal DNA, chromosomal rearrangements and non-coding RNAs in cancer through genetic and biochemical experiments. The group combines chromosome engineering, high-throughput genetic screens and cancer models within SKI.",
      },
      {
        url: "https://www.mskcc.org/research/ski/labs/andrea-ventura/career-opportunities",
        title: "Ventura Laboratory — career opportunities",
        claims: ["availability", "requirements"],
        evidence:
          "The laboratory explicitly recruits a research technician for cancer and non-coding RNA molecular biology. Molecular research or mouse experience is preferred but not required. Graduate students and postdoctoral fellows are described separately.",
      },
    ],
  }),
  researchLab({
    id: "ne-alexander-rudensky",
    name: "Alexander Rudensky Laboratory",
    institution: "Memorial Sloan Kettering Cancer Center",
    pi: "Alexander Rudensky",
    city: "New York",
    state: "NY",
    fields: ["Immunology", "Cancer biology"],
    description:
      "Investigates regulatory T-cell differentiation, Foxp3, immune tolerance and the control of tumor immunity.",
    website: "https://www.mskcc.org/research/ski/labs/alexander-rudensky",
    fit: 75,
    prestige: 95,
    strengths: [
      "Molecular assays and immunostaining provide a foundation for T-cell biology.",
    ],
    gaps: [
      "Specialized immune phenotyping and regulatory T-cell models need training.",
    ],
    prestigeReason:
      "The Immunology Program and Ludwig Center setting supports mechanistic studies spanning tumor immunity, infection and tissue homeostasis.",
    assessment:
      "Editorial assessment against the public qualification profile: Molecular assays and immunostaining provide a foundation for T-cell biology. Specialized immune phenotyping and regulatory T-cell models need training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Investigates regulatory T-cell differentiation, Foxp3, immune tolerance and the control of tumor immunity. The Immunology Program and Ludwig Center setting supports mechanistic studies spanning tumor immunity, infection and tissue homeostasis.",
  }),
  researchLab({
    id: "ne-christine-mayr",
    name: "Christine Mayr Laboratory",
    institution: "Memorial Sloan Kettering Cancer Center",
    pi: "Christine Mayr",
    city: "New York",
    state: "NY",
    fields: ["Molecular biology", "Cancer biology"],
    description:
      "Studies how mRNA untranslated regions regulate protein activity, localization and organization of the cytoplasm.",
    website: "https://www.mskcc.org/research/ski/labs/christine-mayr",
    fit: 80,
    prestige: 90,
    strengths: [
      "Microscopy, PCR and Western blots align with RNA-dependent protein-function experiments.",
    ],
    gaps: [
      "Advanced RNA biology and spatial translation methods are unverified.",
    ],
    prestigeReason:
      "The cancer genetics environment supports fundamental studies connecting RNA structure and cytoplasmic organization with protein function.",
    assessment:
      "Editorial assessment against the public qualification profile: Microscopy, PCR and Western blots align with RNA-dependent protein-function experiments. Advanced RNA biology and spatial translation methods are unverified. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies how mRNA untranslated regions regulate protein activity, localization and organization of the cytoplasm. The cancer genetics environment supports fundamental studies connecting RNA structure and cytoplasmic organization with protein function.",
  }),
  researchLab({
    id: "ne-tyler-jacks",
    name: "Tyler Jacks Laboratory",
    institution: "Massachusetts Institute of Technology",
    pi: "Tyler Jacks",
    city: "Cambridge",
    state: "MA",
    fields: ["Cancer biology", "Molecular biology"],
    description:
      "Uses engineered cancer models and organoids to study tumor development, immune escape and treatment responses.",
    website: "https://ki.mit.edu/people/faculty/tyler-jacks",
    fit: 85,
    prestige: 95,
    strengths: [
      "Mammalian culture and cancer interests support organoid and molecular projects.",
    ],
    gaps: [
      "Gene-targeted mouse models and tumor immunology require additional training.",
    ],
    prestigeReason:
      "The Koch Institute and Ludwig Center connect sophisticated cancer models with preclinical testing of immunotherapies.",
    assessment:
      "Editorial assessment against the public qualification profile: Mammalian culture and cancer interests support organoid and molecular projects. Gene-targeted mouse models and tumor immunology require additional training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Uses engineered cancer models and organoids to study tumor development, immune escape and treatment responses. The Koch Institute and Ludwig Center connect sophisticated cancer models with preclinical testing of immunotherapies.",
  }),
  researchLab({
    id: "ne-michael-yaffe",
    name: "Michael Yaffe Laboratory",
    institution: "Massachusetts Institute of Technology",
    pi: "Michael Yaffe",
    city: "Cambridge",
    state: "MA",
    fields: ["Molecular biology", "Cancer biology"],
    description:
      "Examines signaling networks governing cancer-cell responses, DNA damage and interactions between inflammation and cancer.",
    website: "https://ki.mit.edu/people/faculty/michael-yaffe",
    fit: 85,
    prestige: 90,
    strengths: [
      "Western blotting and molecular assays are relevant to signaling experiments.",
    ],
    gaps: [
      "Quantitative systems modeling and advanced phosphoproteomic work need training.",
    ],
    prestigeReason:
      "The precision cancer medicine setting combines mechanistic signaling research with an investigator practicing surgical oncology.",
    assessment:
      "Editorial assessment against the public qualification profile: Western blotting and molecular assays are relevant to signaling experiments. Quantitative systems modeling and advanced phosphoproteomic work need training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Examines signaling networks governing cancer-cell responses, DNA damage and interactions between inflammation and cancer. The precision cancer medicine setting combines mechanistic signaling research with an investigator practicing surgical oncology.",
  }),
  researchLab({
    id: "ne-stefani-spranger",
    name: "Stefani Spranger Laboratory",
    institution: "Massachusetts Institute of Technology",
    pi: "Stefani Spranger",
    city: "Cambridge",
    state: "MA",
    fields: ["Immunology", "Cancer biology"],
    description:
      "Studies how the immune system interacts with growing tumors to improve antitumor responses.",
    website: "https://biology.mit.edu/profile/stefani-spranger/",
    fit: 80,
    prestige: 90,
    strengths: [
      "Cell culture and immunostaining offer a base for experimental tumor immunology.",
    ],
    gaps: [
      "Dendritic-cell and T-cell functional assays are not verified strengths.",
    ],
    prestigeReason:
      "The Koch Institute affiliation places tumor-immune interaction research in an interdisciplinary cancer research environment.",
    assessment:
      "Editorial assessment against the public qualification profile: Cell culture and immunostaining offer a base for experimental tumor immunology. Dendritic-cell and T-cell functional assays are not verified strengths. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies how the immune system interacts with growing tumors to improve antitumor responses. The Koch Institute affiliation places tumor-immune interaction research in an interdisciplinary cancer research environment.",
  }),
  researchLab({
    id: "ne-william-kaelin",
    name: "William Kaelin Laboratory",
    institution: "Dana-Farber Cancer Institute",
    pi: "William Kaelin",
    city: "Boston",
    state: "MA",
    fields: ["Cancer biology", "Molecular biology"],
    description:
      "Studies tumor suppressors and oxygen sensing, including VHL-linked mechanisms relevant to tumor growth and angiogenesis.",
    website:
      "https://www.cancer.gov/about-nci/organization/dcb/progress/meet-investigators/bill-kaelin",
    fit: 85,
    prestige: 95,
    strengths: [
      "Protein analysis and controlled molecular experiments align with tumor-suppressor biology.",
    ],
    gaps: [
      "Specialized oxygen-sensing models and mechanistic genetics need further preparation.",
    ],
    prestigeReason:
      "The disease-oriented basic research program connects VHL mechanisms to cancer biology and emphasizes rigorous experimental controls.",
    assessment:
      "Editorial assessment against the public qualification profile: Protein analysis and controlled molecular experiments align with tumor-suppressor biology. Specialized oxygen-sensing models and mechanistic genetics need further preparation. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies tumor suppressors and oxygen sensing, including VHL-linked mechanisms relevant to tumor growth and angiogenesis. The disease-oriented basic research program connects VHL mechanisms to cancer biology and emphasizes rigorous experimental controls.",
  }),
  researchLab({
    id: "ne-matthew-vander-heiden",
    name: "Matthew Vander Heiden Laboratory",
    institution: "Massachusetts Institute of Technology",
    pi: "Matthew Vander Heiden",
    city: "Cambridge",
    state: "MA",
    fields: ["Cancer biology", "Molecular biology"],
    description:
      "Studies how nutrients, tissue context, genetics and whole-body metabolism support cancer initiation and progression.",
    website: "https://ki.mit.edu/people/faculty/matthew-vander-heiden",
    fit: 85,
    prestige: 95,
    strengths: [
      "Mammalian culture and experimental analysis support cancer metabolism experiments.",
    ],
    gaps: ["Metabolic flux analysis and metabolomics are unverified skills."],
    prestigeReason:
      "The Koch Institute program links biochemical mechanisms with cancer physiology and potential metabolism-directed therapies.",
    assessment:
      "Editorial assessment against the public qualification profile: Mammalian culture and experimental analysis support cancer metabolism experiments. Metabolic flux analysis and metabolomics are unverified skills. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies how nutrients, tissue context, genetics and whole-body metabolism support cancer initiation and progression. The Koch Institute program links biochemical mechanisms with cancer physiology and potential metabolism-directed therapies.",
  }),
  researchLab({
    id: "ne-michael-hemann",
    name: "Michael Hemann Laboratory",
    institution: "Massachusetts Institute of Technology",
    pi: "Michael Hemann",
    city: "Cambridge",
    state: "MA",
    fields: ["Translational research", "Cancer biology"],
    description:
      "Studies intrinsic and acquired cancer drug resistance using genetic screens, computational approaches and preclinical models.",
    website: "https://ki.mit.edu/people/faculty/michael-hemann",
    fit: 85,
    prestige: 90,
    strengths: [
      "Cell culture and molecular assays align with drug-response experiments.",
    ],
    gaps: [
      "High-throughput genetics, computational analyses and mouse models need training.",
    ],
    prestigeReason:
      "The precision cancer medicine and Ludwig Center affiliations support mechanistic work on rational drug combinations.",
    assessment:
      "Editorial assessment against the public qualification profile: Cell culture and molecular assays align with drug-response experiments. High-throughput genetics, computational analyses and mouse models need training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies intrinsic and acquired cancer drug resistance using genetic screens, computational approaches and preclinical models. The precision cancer medicine and Ludwig Center affiliations support mechanistic work on rational drug combinations.",
  }),
  researchLab({
    id: "ne-omer-yilmaz",
    name: "Omer H. Yilmaz Laboratory",
    institution: "Massachusetts Institute of Technology",
    pi: "Omer H. Yilmaz",
    city: "Cambridge",
    state: "MA",
    fields: ["Cancer biology", "Molecular biology"],
    description:
      "Investigates dietary effects on intestinal stem cells, immune responses and cancer.",
    website: "https://biology.mit.edu/profile/omer-h-yilmaz/",
    fit: 80,
    prestige: 90,
    strengths: [
      "Culture and microscopy provide a foundation for epithelial biology.",
    ],
    gaps: [
      "Intestinal stem-cell systems and controlled dietary mouse studies require training.",
    ],
    prestigeReason:
      "The Koch Institute setting connects intestinal tissue biology with nutrition, immunity and cancer mechanisms.",
    assessment:
      "Editorial assessment against the public qualification profile: Culture and microscopy provide a foundation for epithelial biology. Intestinal stem-cell systems and controlled dietary mouse studies require training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Investigates dietary effects on intestinal stem cells, immune responses and cancer. The Koch Institute setting connects intestinal tissue biology with nutrition, immunity and cancer mechanisms.",
  }),
  researchLab({
    id: "ne-jacqueline-lees",
    name: "Jacqueline Lees Laboratory",
    institution: "Massachusetts Institute of Technology",
    pi: "Jacqueline Lees",
    city: "Cambridge",
    state: "MA",
    fields: ["Cancer biology", "Molecular biology"],
    description:
      "Investigates genes controlling cancer development and progression, with particular interest in regulators of stem-cell function.",
    website: "https://ki.mit.edu/people/faculty/jacqueline-lees",
    fit: 80,
    prestige: 90,
    strengths: ["PCR and protein analysis align with cancer gene regulation."],
    gaps: [
      "Stem-cell models and functional cancer genetics need additional preparation.",
    ],
    prestigeReason:
      "The lab connects cancer gene regulation with the MIT Stem Cell Initiative and established RB/E2F expertise.",
    assessment:
      "Editorial assessment against the public qualification profile: PCR and protein analysis align with cancer gene regulation. Stem-cell models and functional cancer genetics need additional preparation. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Investigates genes controlling cancer development and progression, with particular interest in regulators of stem-cell function. The lab connects cancer gene regulation with the MIT Stem Cell Initiative and established RB/E2F expertise.",
  }),
  researchLab({
    id: "ne-andrew-ewald",
    name: "Andrew Ewald Laboratory",
    institution: "Johns Hopkins University",
    pi: "Andrew Ewald",
    city: "Baltimore",
    state: "MD",
    fields: ["Cancer biology", "Molecular biology"],
    description:
      "Studies breast cancer invasion using three-dimensional cultures and live analysis of cells that lead collective migration.",
    website:
      "https://www.hopkinsmedicine.org/research/labs/f/follow-the-leader-specialized-cancer-cells-lead-collective-invasion-ewald-lab",
    fit: 90,
    prestige: 90,
    strengths: [
      "Microscopy and mammalian cell culture align closely with live invasion experiments.",
    ],
    gaps: [
      "Three-dimensional tumor assays and quantitative migration analysis need training.",
    ],
    prestigeReason:
      "The cell biology group develops specialized 3D assays connecting K14-positive invasion leaders with therapeutic hypotheses.",
    assessment:
      "Editorial assessment against the public qualification profile: Microscopy and mammalian cell culture align closely with live invasion experiments. Three-dimensional tumor assays and quantitative migration analysis need training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies breast cancer invasion using three-dimensional cultures and live analysis of cells that lead collective migration. The cell biology group develops specialized 3D assays connecting K14-positive invasion leaders with therapeutic hypotheses.",
  }),
  researchLab({
    id: "ne-cynthia-sears",
    name: "Cynthia Sears Laboratory",
    institution: "Johns Hopkins University",
    pi: "Cynthia Sears",
    city: "Baltimore",
    state: "MD",
    fields: ["Translational research", "Cancer biology"],
    description:
      "Studies how bacteria, biofilms and the microbiome influence colorectal cancer and responses to cancer treatment.",
    website:
      "https://www.hopkinsmedicine.org/research/labs/c/cynthia-sears-laboratory",
    fit: 80,
    prestige: 90,
    strengths: [
      "Clinical documentation and molecular assays fit the human-sample and translational components.",
    ],
    gaps: [
      "Microbiome analysis, anaerobic bacteria and mouse studies require additional training.",
    ],
    prestigeReason:
      "The program combines prospective human colonoscopy studies with mechanistic experiments in inflammation and microbiome-associated cancer.",
    assessment:
      "Editorial assessment against the public qualification profile: Clinical documentation and molecular assays fit the human-sample and translational components. Microbiome analysis, anaerobic bacteria and mouse studies require additional training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies how bacteria, biofilms and the microbiome influence colorectal cancer and responses to cancer treatment. The program combines prospective human colonoscopy studies with mechanistic experiments in inflammation and microbiome-associated cancer.",
  }),
  researchLab({
    id: "ne-denis-wirtz",
    name: "Denis Wirtz Laboratory",
    institution: "Johns Hopkins University",
    pi: "Denis Wirtz",
    city: "Baltimore",
    state: "MD",
    fields: ["Molecular biology", "Cancer biology"],
    description:
      "Studies cell biophysics, cell architecture, nuclear shape and interactions between cells in health and disease.",
    website:
      "https://profiles.hopkinsmedicine.org/provider/denis-wirtz/2777143",
    fit: 70,
    prestige: 90,
    strengths: [
      "Microscopy and mammalian cell work support cell architecture experiments.",
    ],
    gaps: [
      "Single-molecule manipulation, instrument development and engineering methods are unverified.",
    ],
    prestigeReason:
      "The NanoBioTechnology and cancer nanotechnology training environment connects engineering with cancer-cell biophysics.",
    assessment:
      "Editorial assessment against the public qualification profile: Microscopy and mammalian cell work support cell architecture experiments. Single-molecule manipulation, instrument development and engineering methods are unverified. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies cell biophysics, cell architecture, nuclear shape and interactions between cells in health and disease. The NanoBioTechnology and cancer nanotechnology training environment connects engineering with cancer-cell biophysics.",
  }),
  researchLab({
    id: "ne-craig-hendrix",
    name: "Craig W. Hendrix Laboratory",
    institution: "Johns Hopkins University",
    pi: "Craig W. Hendrix",
    city: "Baltimore",
    state: "MD",
    fields: ["Clinical research", "Translational research"],
    description:
      "Investigates antiviral clinical pharmacology, HIV prevention and how drugs distribute through tissues.",
    website:
      "https://www.hopkinsmedicine.org/research/labs/c/craig-w-hendrix-lab",
    fit: 65,
    prestige: 85,
    strengths: [
      "Clinical documentation and data analysis align with intensive pharmacology studies.",
    ],
    gaps: [
      "Pharmacokinetic modeling and HIV-specific clinical protocols are new areas; cancer overlap is limited.",
    ],
    prestigeReason:
      "The lab supports pharmacology cores for multicenter HIV prevention networks and conducts human drug-distribution studies.",
    assessment:
      "Editorial assessment against the public qualification profile: Clinical documentation and data analysis align with intensive pharmacology studies. Pharmacokinetic modeling and HIV-specific clinical protocols are new areas; cancer overlap is limited. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Investigates antiviral clinical pharmacology, HIV prevention and how drugs distribute through tissues. The lab supports pharmacology cores for multicenter HIV prevention networks and conducts human drug-distribution studies.",
  }),
  researchLab({
    id: "ne-peter-espenshade",
    name: "Peter Espenshade Laboratory",
    institution: "Johns Hopkins University",
    pi: "Peter Espenshade",
    city: "Baltimore",
    state: "MD",
    fields: ["Molecular biology", "Cancer biology"],
    description:
      "Studies cellular sensing of cholesterol and oxygen and mechanisms maintaining lipid and gas homeostasis.",
    website: "https://www.hopkinsmedicine.org/research/labs/e/espenshade-lab",
    fit: 75,
    prestige: 85,
    strengths: [
      "PCR and Western blotting support mechanistic cell-homeostasis work.",
    ],
    gaps: [
      "Multi-organism lipid-sensing models are a training area; direct cancer emphasis is less central.",
    ],
    prestigeReason:
      "The cell biology laboratory uses multiple organisms and disciplines to connect essential homeostatic mechanisms with human disease.",
    assessment:
      "Editorial assessment against the public qualification profile: PCR and Western blotting support mechanistic cell-homeostasis work. Multi-organism lipid-sensing models are a training area; direct cancer emphasis is less central. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies cellular sensing of cholesterol and oxygen and mechanisms maintaining lipid and gas homeostasis. The cell biology laboratory uses multiple organisms and disciplines to connect essential homeostatic mechanisms with human disease.",
  }),
  researchLab({
    id: "ne-ashani-weeraratna",
    name: "Ashani Weeraratna Laboratory",
    institution: "Johns Hopkins University",
    pi: "Ashani Weeraratna",
    city: "Baltimore",
    state: "MD",
    fields: ["Cancer biology", "Molecular biology"],
    description:
      "Investigates how aging and the tumor microenvironment influence melanoma metastasis and treatment resistance.",
    website:
      "https://profiles.hopkinsmedicine.org/provider/ashani-tanuja-weeraratna/2777660",
    fit: 85,
    prestige: 90,
    strengths: [
      "Cell culture and immunostaining align with stromal and melanoma interactions.",
    ],
    gaps: [
      "Aging models, Wnt biology and in vivo metastasis assays need additional training.",
    ],
    prestigeReason:
      "The cancer invasion and metastasis program connects molecular oncology with aging-related changes in tissue and immune environments.",
    assessment:
      "Editorial assessment against the public qualification profile: Cell culture and immunostaining align with stromal and melanoma interactions. Aging models, Wnt biology and in vivo metastasis assays need additional training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Investigates how aging and the tumor microenvironment influence melanoma metastasis and treatment resistance. The cancer invasion and metastasis program connects molecular oncology with aging-related changes in tissue and immune environments.",
  }),
  researchLab({
    id: "ne-dario-altieri",
    name: "Dario C. Altieri Laboratory",
    institution: "The Wistar Institute",
    pi: "Dario C. Altieri",
    city: "Philadelphia",
    state: "PA",
    fields: ["Cancer biology", "Molecular biology"],
    description:
      "Investigates mitochondrial reprogramming, tumor plasticity and metastatic behavior, including therapies targeting mitochondrial Hsp90.",
    website: "https://www.wistar.org/our-scientists/dario-c-altieri/",
    fit: 85,
    prestige: 90,
    strengths: [
      "Protein assays and mammalian culture align with mitochondrial cancer mechanisms.",
    ],
    gaps: [
      "Bioenergetics, xenografts and genetically engineered animals require training.",
    ],
    prestigeReason:
      "The program combines patient material and mechanistic models with a mitochondria-targeted compound advanced into first-in-human testing.",
    assessment:
      "Editorial assessment against the public qualification profile: Protein assays and mammalian culture align with mitochondrial cancer mechanisms. Bioenergetics, xenografts and genetically engineered animals require training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Investigates mitochondrial reprogramming, tumor plasticity and metastatic behavior, including therapies targeting mitochondrial Hsp90. The program combines patient material and mechanistic models with a mitochondria-targeted compound advanced into first-in-human testing.",
  }),
  researchLab({
    id: "ne-david-weiner",
    name: "David B. Weiner Laboratory",
    institution: "The Wistar Institute",
    pi: "David B. Weiner",
    city: "Philadelphia",
    state: "PA",
    fields: ["Translational research", "Cancer biology"],
    description:
      "Develops nucleic-acid vaccines and immunotherapies for infectious diseases and cancer.",
    website: "https://www.wistar.org/our-scientists/david-weiner/",
    fit: 80,
    prestige: 90,
    strengths: [
      "PCR and molecular biology align with nucleic-acid immunotherapy research.",
    ],
    gaps: [
      "Vaccine delivery, immune assays and clinical translation workflows require training.",
    ],
    prestigeReason:
      "The Vaccine and Immunotherapy Center supports synthetic nucleic-acid approaches that have progressed into human studies.",
    assessment:
      "Editorial assessment against the public qualification profile: PCR and molecular biology align with nucleic-acid immunotherapy research. Vaccine delivery, immune assays and clinical translation workflows require training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Develops nucleic-acid vaccines and immunotherapies for infectious diseases and cancer. The Vaccine and Immunotherapy Center supports synthetic nucleic-acid approaches that have progressed into human studies.",
  }),
  researchLab({
    id: "ne-alessandro-gardini",
    name: "Alessandro Gardini Laboratory",
    institution: "The Wistar Institute",
    pi: "Alessandro Gardini",
    city: "Philadelphia",
    state: "PA",
    fields: ["Molecular biology", "Cancer biology"],
    description:
      "Investigates transcriptional complexes, enhancers and epigenetic regulation during differentiation and oncogenesis.",
    website: "https://www.wistar.org/our-scientists/alessandro-gardini/",
    fit: 80,
    prestige: 85,
    strengths: [
      "PCR, protein analysis and writing support mechanistic gene-regulation experiments.",
    ],
    gaps: [
      "Genomics, proteomics and enhancer profiling require additional preparation.",
    ],
    prestigeReason:
      "The cancer center program combines biochemistry with genomics and proteomics to study normal and malignant gene regulation.",
    assessment:
      "Editorial assessment against the public qualification profile: PCR, protein analysis and writing support mechanistic gene-regulation experiments. Genomics, proteomics and enhancer profiling require additional preparation. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Investigates transcriptional complexes, enhancers and epigenetic regulation during differentiation and oncogenesis. The cancer center program combines biochemistry with genomics and proteomics to study normal and malignant gene regulation.",
  }),
  researchLab({
    id: "ne-nan-zhang-wistar",
    name: "Nan Zhang Laboratory",
    institution: "The Wistar Institute",
    pi: "Nan Zhang",
    city: "Philadelphia",
    state: "PA",
    fields: ["Immunology", "Cancer biology"],
    description:
      "Studies macrophage subsets controlling peritoneal tumor growth and metastasis to develop macrophage-directed immunotherapies.",
    website: "https://www.wistar.org/our-scientists/nan-zhang/",
    fit: 80,
    prestige: 85,
    strengths: [
      "Microscopy and immunostaining align with macrophage-tumor interaction studies.",
    ],
    gaps: [
      "Single-cell sequencing, intravital imaging and novel mouse genetics require training.",
    ],
    prestigeReason:
      "The program integrates patient samples, advanced imaging and mouse models; the PI also directs the Imaging Facility.",
    assessment:
      "Editorial assessment against the public qualification profile: Microscopy and immunostaining align with macrophage-tumor interaction studies. Single-cell sequencing, intravital imaging and novel mouse genetics require training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies macrophage subsets controlling peritoneal tumor growth and metastasis to develop macrophage-directed immunotherapies. The program integrates patient samples, advanced imaging and mouse models; the PI also directs the Imaging Facility.",
  }),
  researchLab({
    id: "ne-kathryn-wellen",
    name: "Kathryn E. Wellen Laboratory",
    institution: "University of Pennsylvania",
    pi: "Kathryn E. Wellen",
    city: "Philadelphia",
    state: "PA",
    fields: ["Molecular biology", "Cancer biology"],
    description:
      "Studies communication between metabolic pathways, signaling networks and the epigenome in cellular growth and function.",
    website: "https://www.med.upenn.edu/wellenlab/",
    fit: 85,
    prestige: 90,
    strengths: [
      "Mammalian culture and protein assays support nutrient-response and gene-regulation work.",
    ],
    gaps: [
      "Metabolite profiling and specialized epigenetic assays need training.",
    ],
    prestigeReason:
      "The Penn laboratory connects mechanistic nutrient sensing with signaling and chromatin regulation in a biomedical research setting.",
    assessment:
      "Editorial assessment against the public qualification profile: Mammalian culture and protein assays support nutrient-response and gene-regulation work. Metabolite profiling and specialized epigenetic assays need training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies communication between metabolic pathways, signaling networks and the epigenome in cellular growth and function. The Penn laboratory connects mechanistic nutrient sensing with signaling and chromatin regulation in a biomedical research setting.",
  }),
  researchLab({
    id: "ne-ben-stanger",
    name: "Ben Z. Stanger Laboratory",
    institution: "University of Pennsylvania",
    pi: "Ben Z. Stanger",
    city: "Philadelphia",
    state: "PA",
    fields: ["Cancer biology", "Molecular biology"],
    description:
      "Studies pancreatic cancer plasticity, metastasis, immune microenvironments and vulnerabilities to treatment.",
    website: "https://www.med.upenn.edu/apps/faculty/index.php/g275/p8139400",
    fit: 85,
    prestige: 90,
    strengths: [
      "Cancer interests and molecular assays align with cellular plasticity research.",
    ],
    gaps: [
      "Functional genomics and engineered mice require training; the official page reports no technician openings.",
    ],
    prestigeReason:
      "The pancreatic cancer research center setting combines human samples, epigenetics and engineered models to identify therapeutic vulnerabilities.",
    assessment:
      "Editorial assessment against the public qualification profile: Cancer interests and molecular assays align with cellular plasticity research. Functional genomics and engineered mice require training; the official page reports no technician openings. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies pancreatic cancer plasticity, metastasis, immune microenvironments and vulnerabilities to treatment. The pancreatic cancer research center setting combines human samples, epigenetics and engineered models to identify therapeutic vulnerabilities.",
    availability: "closed",
    applicationMethod:
      "The official faculty page states, as of September 2026, that there are no open technician or postdoctoral positions and no additional rotation students this year. Monitor for a later update.",
    sources: [
      {
        url: "https://www.med.upenn.edu/apps/faculty/index.php/g275/p8139400",
        title:
          "Ben Stanger — official research profile and September 2026 availability",
        claims: ["research", "environment", "availability"],
        evidence:
          "Studies pancreatic cancer plasticity, metastasis, immune microenvironments and vulnerabilities to treatment. The profile explicitly reports no open technician or postdoctoral positions and no additional rotation students as of September 2026.",
      },
    ],
  }),
  researchLab({
    id: "ne-maureen-murphy",
    name: "Maureen E. Murphy Laboratory",
    institution: "The Wistar Institute",
    pi: "Maureen E. Murphy",
    city: "Philadelphia",
    state: "PA",
    fields: ["Cancer biology", "Molecular biology"],
    description:
      "Studies inherited p53 variants, cancer susceptibility and therapies tailored to genetically distinct tumors.",
    website: "https://www.wistar.org/our-scientists/maureen-murphy/",
    fit: 85,
    prestige: 90,
    strengths: [
      "PCR and protein assays align with p53 variant-function studies.",
    ],
    gaps: [
      "Variant-specific disease models and personalized therapeutic screening need training.",
    ],
    prestigeReason:
      "The oncogenesis program links tumor-suppressor mechanisms with cancer disparities and inherited-risk populations.",
    assessment:
      "Editorial assessment against the public qualification profile: PCR and protein assays align with p53 variant-function studies. Variant-specific disease models and personalized therapeutic screening need training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies inherited p53 variants, cancer susceptibility and therapies tailored to genetically distinct tumors. The oncogenesis program links tumor-suppressor mechanisms with cancer disparities and inherited-risk populations.",
  }),
  researchLab({
    id: "ne-paul-lieberman",
    name: "Paul M. Lieberman Laboratory",
    institution: "The Wistar Institute",
    pi: "Paul M. Lieberman",
    city: "Philadelphia",
    state: "PA",
    fields: ["Molecular biology", "Cancer biology"],
    description:
      "Studies latent cancer-associated viruses, viral genome maintenance and small molecules targeting viral persistence.",
    website: "https://www.wistar.org/our-scientists/paul-lieberman/",
    fit: 80,
    prestige: 90,
    strengths: [
      "Molecular assays and cell culture align with viral genome and chromatin research.",
    ],
    gaps: [
      "EBV/KSHV systems and viral chromosome architecture are specialized training areas.",
    ],
    prestigeReason:
      "The Center for Advanced Therapeutics and molecular screening capabilities connect viral latency mechanisms with drug discovery.",
    assessment:
      "Editorial assessment against the public qualification profile: Molecular assays and cell culture align with viral genome and chromatin research. EBV/KSHV systems and viral chromosome architecture are specialized training areas. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies latent cancer-associated viruses, viral genome maintenance and small molecules targeting viral persistence. The Center for Advanced Therapeutics and molecular screening capabilities connect viral latency mechanisms with drug discovery.",
  }),
  researchLab({
    id: "ne-greg-delgoffe",
    name: "Greg M. Delgoffe Laboratory",
    institution: "University of Pittsburgh / UPMC Hillman Cancer Center",
    pi: "Greg M. Delgoffe",
    city: "Pittsburgh",
    state: "PA",
    fields: ["Immunology", "Cancer biology"],
    description:
      "Investigates how metabolism and tumor microenvironment nutrients regulate T-cell function and antitumor immunity.",
    website: "https://www.immunology.pitt.edu/people/greg-m-delgoffe-phd",
    fit: 80,
    prestige: 90,
    strengths: [
      "Culture and experimental analysis support immune metabolism projects.",
    ],
    gaps: [
      "Metabolic flux measurements and exhausted T-cell assays require training.",
    ],
    prestigeReason:
      "The Tumor Microenvironment Center connects mechanistic T-cell metabolism with Hillman basic cancer research and immunotherapy.",
    assessment:
      "Editorial assessment against the public qualification profile: Culture and experimental analysis support immune metabolism projects. Metabolic flux measurements and exhausted T-cell assays require training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Investigates how metabolism and tumor microenvironment nutrients regulate T-cell function and antitumor immunity. The Tumor Microenvironment Center connects mechanistic T-cell metabolism with Hillman basic cancer research and immunotherapy.",
  }),
  researchLab({
    id: "ne-dario-vignali",
    name: "Dario A. A. Vignali Laboratory",
    institution: "University of Pittsburgh / UPMC Hillman Cancer Center",
    pi: "Dario A. A. Vignali",
    city: "Pittsburgh",
    state: "PA",
    fields: ["Immunology", "Cancer biology"],
    description:
      "Studies immune inhibitory mechanisms, regulatory T cells and checkpoint signaling in cancer.",
    website: "https://www.immunology.pitt.edu/people/dario-vignali-phd",
    fit: 80,
    prestige: 90,
    strengths: [
      "Protein assays and immunostaining provide a base for checkpoint biology.",
    ],
    gaps: [
      "Specialized T-cell models and immune profiling need further preparation.",
    ],
    prestigeReason:
      "The program combines tumor immunity with mechanistic studies of LAG3, PD1 and intratumoral regulatory T cells.",
    assessment:
      "Editorial assessment against the public qualification profile: Protein assays and immunostaining provide a base for checkpoint biology. Specialized T-cell models and immune profiling need further preparation. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies immune inhibitory mechanisms, regulatory T cells and checkpoint signaling in cancer. The program combines tumor immunity with mechanistic studies of LAG3, PD1 and intratumoral regulatory T cells.",
  }),
  researchLab({
    id: "ne-olivera-finn",
    name: "Olivera J. Finn Laboratory",
    institution: "University of Pittsburgh / UPMC Hillman Cancer Center",
    pi: "Olivera J. Finn",
    city: "Pittsburgh",
    state: "PA",
    fields: ["Translational research", "Cancer biology"],
    description:
      "Studies tumor antigens, human antitumor immunity and vaccines for cancer prevention, including MUC1.",
    website: "https://www.immunology.pitt.edu/people/olivera-j-finn-phd",
    fit: 80,
    prestige: 90,
    strengths: [
      "Clinical research interests and molecular assays align with antigen and prevention studies.",
    ],
    gaps: [
      "Immune repertoire analysis and vaccine-specific assays require training.",
    ],
    prestigeReason:
      "The laboratory connects tumor-antigen discovery with patient and prevention trials of MUC1-directed vaccination.",
    assessment:
      "Editorial assessment against the public qualification profile: Clinical research interests and molecular assays align with antigen and prevention studies. Immune repertoire analysis and vaccine-specific assays require training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies tumor antigens, human antitumor immunity and vaccines for cancer prevention, including MUC1. The laboratory connects tumor-antigen discovery with patient and prevention trials of MUC1-directed vaccination.",
  }),
  researchLab({
    id: "ne-lee-oesterreich",
    name: "Lee/Oesterreich Laboratory",
    institution: "University of Pittsburgh / UPMC Hillman Cancer Center",
    pi: "Adrian Lee and Steffi Oesterreich",
    city: "Pittsburgh",
    state: "PA",
    fields: ["Cancer biology", "Molecular biology"],
    description:
      "Studies breast cancer endocrine resistance, invasive lobular disease, metastasis and precision medicine.",
    website: "https://leeoesterreich.org/research",
    fit: 90,
    prestige: 90,
    strengths: [
      "Mammalian culture and protein assays align with hormone-response and breast cancer models.",
    ],
    gaps: [
      "Single-cell profiling and advanced patient-derived models are development areas.",
    ],
    prestigeReason:
      "The joint laboratory links molecular breast cancer mechanisms with a dedicated lobular cancer program and patient-derived model development.",
    assessment:
      "Editorial assessment against the public qualification profile: Mammalian culture and protein assays align with hormone-response and breast cancer models. Single-cell profiling and advanced patient-derived models are development areas. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies breast cancer endocrine resistance, invasive lobular disease, metastasis and precision medicine. The joint laboratory links molecular breast cancer mechanisms with a dedicated lobular cancer program and patient-derived model development.",
  }),
  researchLab({
    id: "ne-patricia-opresko",
    name: "Patricia Opresko Laboratory",
    institution: "University of Pittsburgh",
    pi: "Patricia Opresko",
    city: "Pittsburgh",
    state: "PA",
    fields: ["Molecular biology", "Cancer biology"],
    description:
      "Studies telomere damage and repair, genomic instability and strategies to preserve healthy cells or inhibit cancer-cell proliferation.",
    website: "https://www.gradbiomed.pitt.edu/person/patricia-opresko-phd",
    fit: 80,
    prestige: 85,
    strengths: [
      "Microscopy and molecular assays support DNA-damage and telomere experiments.",
    ],
    gaps: [
      "Specialized telomere methods and oxidative DNA-damage models need training.",
    ],
    prestigeReason:
      "The molecular pharmacology and genetics environment supports mechanistic DNA repair research linked to cancer and aging.",
    assessment:
      "Editorial assessment against the public qualification profile: Microscopy and molecular assays support DNA-damage and telomere experiments. Specialized telomere methods and oxidative DNA-damage models need training. Scores describe research alignment and environment, not selection likelihood.",
    evidence:
      "Studies telomere damage and repair, genomic instability and strategies to preserve healthy cells or inhibit cancer-cell proliferation. The molecular pharmacology and genetics environment supports mechanistic DNA repair research linked to cancer and aging.",
    requirements: [
      "No suitable staff-role requirements are verified.",
      "The official graduate profile says the lab accepts new students; this is a graduate-program route, not proof of an entry-level staff vacancy. Confirm program admission and enrollment requirements separately.",
    ],
  }),
];
