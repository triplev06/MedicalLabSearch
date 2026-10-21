import type { Lab } from "../../domain/types";
import { researchLab } from "./research-entry";

// Research leads verified 2026-10-21. Scientific fit is editorial; it is not a hiring prediction.
// General invitations and trainee recruitment do not establish assistant vacancies.
export const columbusLabs: Lab[] = [
  researchLab({
    id: "osu-carson",
    name: "Carson Laboratory",
    institution:
      "The Ohio State University Wexner Medical Center / OSUCCC - James",
    pi: "William E. Carson III",
    city: "Columbus",
    state: "OH",
    fields: ["Cancer immunology", "Translational oncology"],
    description:
      "Studies immune suppression and combinations of targeted drugs and immune treatments, connecting laboratory findings with early clinical studies.",
    website:
      "https://cancer.osu.edu/for-cancer-researchers/research/research-labs/carson-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Immune-cell methods and flow cytometry require confirmation.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "William E. Carson III",
      email: "carson.77@osu.edu",
    },
    availability: "interest",
    sources: [
      {
        url: "https://cancer.osu.edu/for-cancer-researchers/research/research-labs/carson-lab",
        title: "Carson Laboratory - official research information",
        claims: ["research", "environment", "contact"],
        evidence:
          "Studies immune suppression and combinations of targeted drugs and immune treatments, connecting laboratory findings with early clinical studies. The page provides the listed research contact.",
      },
    ],
  }),
  researchLab({
    id: "osu-chan",
    applicationMethod:
      "Email the listed PI to inquire about opportunities, as invited by the lab. Confirm whether an assistant or technician role exists.",
    name: "Immunotherapy Engineering Laboratory",
    institution:
      "The Ohio State University Wexner Medical Center / OSUCCC - James",
    pi: "Wing Chan",
    city: "Columbus",
    state: "OH",
    fields: ["Cancer immunology", "Cell therapy"],
    description:
      "Engineers CAR T/NK cells and antibody treatments, including strategies to overcome immune suppression and develop clinical cell therapies.",
    website:
      "https://cancer.osu.edu/for-cancer-researchers/research/research-labs/chan-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Gene editing and cell-therapy manufacturing are additional training areas.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "Wing Chan",
      email: "wing.chan@osumc.edu",
    },
    availability: "inquiries",
    sources: [
      {
        url: "https://cancer.osu.edu/for-cancer-researchers/research/research-labs/chan-lab",
        title:
          "Immunotherapy Engineering Laboratory - official research information",
        claims: ["research", "environment", "contact", "availability"],
        evidence:
          "Engineers CAR T/NK cells and antibody treatments. The page gives the listed research contact and explicitly welcomes opportunities inquiries; it does not establish an assistant vacancy.",
      },
    ],
  }),
  researchLab({
    id: "osu-denko",
    name: "Denko Laboratory",
    institution:
      "The Ohio State University Wexner Medical Center / OSUCCC - James",
    pi: "Nicholas Denko",
    city: "Columbus",
    state: "OH",
    fields: ["Cancer metabolism", "Tumor microenvironment"],
    description:
      "Investigates how oxygen and nutrient limitation change tumor metabolism and treatment sensitivity.",
    website:
      "https://cancer.osu.edu/for-cancer-researchers/research/research-labs/denko-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Hypoxia models and animal work are not established strengths.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "Nicholas Denko",
      email: "denko.2@osu.edu",
    },
    availability: "interest",
    sources: [
      {
        url: "https://cancer.osu.edu/for-cancer-researchers/research/research-labs/denko-lab",
        title: "Denko Laboratory - official research information",
        claims: ["research", "environment", "contact"],
        evidence:
          "Investigates how oxygen and nutrient limitation change tumor metabolism and treatment sensitivity. The page provides the listed research contact.",
      },
    ],
  }),
  researchLab({
    id: "osu-guo",
    name: "Deliang Guo Laboratory",
    institution:
      "The Ohio State University Wexner Medical Center / OSUCCC - James",
    pi: "Deliang Guo",
    city: "Columbus",
    state: "OH",
    fields: ["Cancer metabolism", "Cancer signaling"],
    description:
      "Investigates glucose, glutamine and lipid metabolism and their connections to oncogenic signaling and therapeutic resistance.",
    website:
      "https://cancer.osu.edu/for-cancer-researchers/research/research-labs/deliang-guo-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Specialized metabolic assays may require training.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "Deliang Guo",
      email: "deliang.guo@osumc.edu",
    },
    availability: "interest",
    sources: [
      {
        url: "https://cancer.osu.edu/for-cancer-researchers/research/research-labs/deliang-guo-lab",
        title: "Deliang Guo Laboratory - official research information",
        claims: ["research", "environment", "contact"],
        evidence:
          "Investigates glucose, glutamine and lipid metabolism and their connections to oncogenic signaling and therapeutic resistance. The page provides the listed research contact.",
      },
    ],
  }),
  researchLab({
    id: "osu-fast",
    name: "Food, Activity, Sleep and Time Laboratory",
    institution:
      "The Ohio State University Wexner Medical Center / OSUCCC - James",
    pi: "Faiza Kalam",
    city: "Columbus",
    state: "OH",
    fields: ["Cancer survivorship", "Clinical research"],
    description:
      "Tests how meal timing, activity and sleep interventions influence cancer recovery, inflammation and metabolic health.",
    website:
      "https://cancer.osu.edu/for-cancer-researchers/research/research-labs/fast-lab",
    strengths: [
      "Clinical documentation and chart-review experience; Excel/Prism and manuscript work.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Behavioral intervention research is a shift from cancer cell biology.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "Faiza Kalam",
      email: "kalam.3@osu.edu",
    },
    availability: "interest",
    sources: [
      {
        url: "https://cancer.osu.edu/for-cancer-researchers/research/research-labs/fast-lab",
        title:
          "Food, Activity, Sleep and Time Laboratory - official research information",
        claims: ["research", "environment", "contact"],
        evidence:
          "Tests how meal timing, activity and sleep interventions influence cancer recovery, inflammation and metabolic health. The page provides the listed research contact.",
      },
    ],
  }),
  researchLab({
    id: "osu-chakravarti",
    name: "Chakravarti Laboratory",
    institution:
      "The Ohio State University Wexner Medical Center / OSUCCC - James",
    pi: "Arnab Chakravarti",
    city: "Columbus",
    state: "OH",
    fields: ["Cancer signaling", "Treatment resistance"],
    description:
      "Studies molecular and epigenetic mechanisms of treatment resistance, biomarkers and targeted therapies across cancers.",
    website:
      "https://cancer.osu.edu/for-cancer-researchers/research/research-labs/chakravarti-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "High-throughput profiling and tumor-model expertise would need assessment.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "Arnab Chakravarti",
      email: "chakravarti.7@osu.edu",
    },
    availability: "interest",
    sources: [
      {
        url: "https://cancer.osu.edu/for-cancer-researchers/research/research-labs/chakravarti-lab",
        title: "Chakravarti Laboratory - official research information",
        claims: ["research", "environment", "contact"],
        evidence:
          "Studies molecular and epigenetic mechanisms of treatment resistance, biomarkers and targeted therapies across cancers. The page provides the listed research contact.",
      },
    ],
  }),
  researchLab({
    id: "osu-bei-liu",
    name: "Bei Liu Laboratory",
    institution:
      "The Ohio State University Wexner Medical Center / OSUCCC - James",
    pi: "Bei Liu",
    city: "Columbus",
    state: "OH",
    fields: ["Cancer immunology", "Cellular stress"],
    description:
      "Studies protein chaperones, immune-cell function and microbial influences on inflammation and cancer therapy.",
    website:
      "https://cancer.osu.edu/for-cancer-researchers/research/research-labs/liu-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Mouse immunology and advanced immune profiling may require training.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "Bei Liu",
      email: "Bei.Liu@osumc.edu",
    },
    availability: "interest",
    sources: [
      {
        url: "https://cancer.osu.edu/for-cancer-researchers/research/research-labs/liu-lab",
        title: "Bei Liu Laboratory - official research information",
        claims: ["research", "environment", "contact"],
        evidence:
          "Studies protein chaperones, immune-cell function and microbial influences on inflammation and cancer therapy. The page provides the listed research contact.",
      },
    ],
  }),
  researchLab({
    id: "osu-englert",
    name: "Englert Laboratory",
    institution:
      "The Ohio State University Wexner Medical Center / OSUCCC - James",
    pi: "Joshua A. Englert",
    city: "Columbus",
    state: "OH",
    fields: ["Pulmonary biology", "Acute lung injury"],
    description:
      "Combines molecular biology, lung models and clinical biospecimens to investigate lung injury in critical illness.",
    website: "https://englertlab.org/",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Nanomedicine and engineered lung models extend beyond documented experience.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "Joshua A. Englert",
      email: "joshua.englert@osumc.edu",
    },
    availability: "interest",
    sources: [
      {
        url: "https://englertlab.org/",
        title: "Englert Laboratory - official research information",
        claims: ["research", "environment", "contact"],
        evidence:
          "Combines molecular biology, lung models and clinical biospecimens to investigate lung injury in critical illness. The page provides the listed research contact.",
      },
    ],
  }),
  researchLab({
    id: "osu-gowdy",
    name: "Gowdy Environmental Lung Laboratory",
    institution:
      "The Ohio State University Wexner Medical Center / OSUCCC - James",
    pi: "Kymberly Gowdy",
    city: "Columbus",
    state: "OH",
    fields: ["Pulmonary inflammation", "Environmental health"],
    description:
      "Investigates how environmental exposures and diet alter lung immunity, infection susceptibility and inflammatory disease.",
    website: "https://www.gowdyenvironmentallunglab.com/",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Environmental exposure models and specialized immune assays may require training.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    availability: "interest",
    sources: [
      {
        url: "https://www.gowdyenvironmentallunglab.com/",
        title:
          "Gowdy Environmental Lung Laboratory - official research information",
        claims: ["research", "environment"],
        evidence:
          "Investigates how environmental exposures and diet alter lung immunity, infection susceptibility and inflammatory disease.",
      },
    ],
  }),
  researchLab({
    id: "osu-mebratu",
    name: "Mebratu Laboratory",
    institution:
      "The Ohio State University Wexner Medical Center / OSUCCC - James",
    pi: "Yohannes A. Mebratu",
    city: "Columbus",
    state: "OH",
    fields: ["Pulmonary biology", "Host-pathogen interactions"],
    description:
      "Studies airway epithelial repair and host proteins involved in influenza and SARS-CoV-2 replication, including smoke-associated inflammation.",
    website:
      "https://medicine.osu.edu/departments/internal-medicine/pulmonary/research/research-labs/mebratu-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Respiratory virus work and air-liquid interface models require training.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    availability: "interest",
    sources: [
      {
        url: "https://medicine.osu.edu/departments/internal-medicine/pulmonary/research/research-labs/mebratu-lab",
        title: "Mebratu Laboratory - official research information",
        claims: ["research", "environment"],
        evidence:
          "Studies airway epithelial repair and host proteins involved in influenza and SARS-CoV-2 replication, including smoke-associated inflammation.",
      },
    ],
  }),
  researchLab({
    id: "osu-tsai",
    name: "Tsai Laboratory",
    institution:
      "The Ohio State University Wexner Medical Center / OSUCCC - James",
    pi: "MuChun Tsai",
    city: "Columbus",
    state: "OH",
    fields: ["Pulmonary inflammation", "Innate immunity"],
    description:
      "Investigates ubiquitin ligase MARCH10 and epithelial responses to influenza to identify lung injury treatments.",
    website:
      "https://medicine.osu.edu/departments/internal-medicine/pulmonary/research/research-labs/tsai-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Specialized viral assays and ubiquitin biology are learning areas.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "MuChun Tsai",
      email: "Muchun.tsai@osumc.edu",
    },
    availability: "interest",
    sources: [
      {
        url: "https://medicine.osu.edu/departments/internal-medicine/pulmonary/research/research-labs/tsai-lab",
        title: "Tsai Laboratory - official research information",
        claims: ["research", "environment", "contact"],
        evidence:
          "Investigates ubiquitin ligase MARCH10 and epithelial responses to influenza to identify lung injury treatments. The page provides the listed research contact.",
      },
    ],
  }),
  researchLab({
    id: "osu-mace",
    applicationMethod:
      "The official lab page invites a CV and cover letter to the listed PI. Ask whether a paid assistant or technician route is available.",
    name: "Mace Laboratory",
    institution:
      "The Ohio State University Wexner Medical Center / OSUCCC - James",
    pi: "Thomas Mace",
    city: "Columbus",
    state: "OH",
    fields: ["Cancer immunology", "Tumor microenvironment"],
    description:
      "Studies pancreatic tumor immune suppression and resistance to immunotherapy, including inflammatory signaling and nutritional interventions.",
    website: "https://u.osu.edu/macelab/",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Pancreatic models and immune-cell assays may require training.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "Thomas Mace",
      email: "thomas.mace@osumc.edu",
    },
    availability: "inquiries",
    sources: [
      {
        url: "https://u.osu.edu/macelab/",
        title: "Mace Laboratory - official research information",
        claims: ["research", "environment", "contact", "availability"],
        evidence:
          "Studies pancreatic tumor immune suppression and immunotherapy resistance. The official page invites a CV and cover letter to the listed PI; no assistant vacancy is specified.",
      },
    ],
  }),
  researchLab({
    id: "osu-spakowicz",
    name: "Spakowicz Laboratory",
    institution:
      "The Ohio State University Wexner Medical Center / OSUCCC - James",
    pi: "Daniel J. Spakowicz",
    city: "Columbus",
    state: "OH",
    fields: ["Lung cancer", "Cancer microbiome"],
    description:
      "Connects clinical cancer studies and experimental models to investigate how microbes influence immunotherapy response, including lung cancer.",
    website: "https://u.osu.edu/spakowiczlab/research/",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Microbiome sequencing and computational workflows are not documented strengths.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    availability: "interest",
    sources: [
      {
        url: "https://u.osu.edu/spakowiczlab/research/",
        title: "Spakowicz Laboratory - official research information",
        claims: ["research", "environment"],
        evidence:
          "Connects clinical cancer studies and experimental models to investigate how microbes influence immunotherapy response, including lung cancer.",
      },
    ],
  }),
  researchLab({
    id: "osu-roychowdhury",
    name: "Roychowdhury Laboratory",
    institution:
      "The Ohio State University Wexner Medical Center / OSUCCC - James",
    pi: "Sameek Roychowdhury",
    city: "Columbus",
    state: "OH",
    fields: ["Cancer genomics", "Precision oncology"],
    description:
      "Combines cancer biology, molecular diagnostics and genomics-driven trials to develop targeted treatments.",
    website:
      "https://cancer.osu.edu/for-cancer-researchers/research/research-labs/roychowdhury-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Sequencing analysis and bioinformatics need role-specific assessment.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "Sameek Roychowdhury",
      email: "roychowdhury.1@osu.edu",
    },
    availability: "interest",
    sources: [
      {
        url: "https://cancer.osu.edu/for-cancer-researchers/research/research-labs/roychowdhury-lab",
        title: "Roychowdhury Laboratory - official research information",
        claims: ["research", "environment", "contact"],
        evidence:
          "Combines cancer biology, molecular diagnostics and genomics-driven trials to develop targeted treatments. The page provides the listed research contact.",
      },
    ],
  }),
  researchLab({
    id: "nch-bishop",
    name: "Bishop Laboratory",
    institution: "Nationwide Children's Hospital",
    pi: "Alexander Bishop",
    city: "Columbus",
    state: "OH",
    fields: ["Cancer biology", "DNA repair"],
    description:
      "Investigates Ewing sarcoma, DNA repair and therapeutic approaches to pediatric cancer.",
    website:
      "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/bishop-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Sarcoma models and DNA-repair assays may require training.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    availability: "interest",
    sources: [
      {
        url: "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer",
        title: "Bishop Laboratory - official research information",
        claims: ["research", "environment"],
        evidence:
          "The official childhood-cancer center identifies the distinct Bishop Lab and its Ewing sarcoma and DNA-repair focus. The individual lab page timed out during verification.",
      },
    ],
  }),
  researchLab({
    id: "nch-cassady",
    name: "Cassady Laboratory",
    institution: "Nationwide Children's Hospital",
    pi: "Kevin A. Cassady",
    city: "Columbus",
    state: "OH",
    fields: ["Oncolytic virotherapy", "Cancer immunology"],
    description:
      "Investigates engineered herpes simplex viruses and antiviral immune responses to improve tumor-selective virotherapy.",
    website:
      "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/cassady-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Viral engineering and biosafety procedures are additional training areas.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "Kevin A. Cassady",
      email: "Kevin.Cassady@NationwideChildrens.org",
    },
    availability: "interest",
    sources: [
      {
        url: "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/cassady-lab",
        title: "Cassady Laboratory - official research information",
        claims: ["research", "environment", "contact"],
        evidence:
          "Investigates engineered herpes simplex viruses and antiviral immune responses to improve tumor-selective virotherapy. The page provides the listed research contact.",
      },
    ],
  }),
  researchLab({
    id: "nch-chang",
    name: "Chang Laboratory",
    institution: "Nationwide Children's Hospital",
    pi: "Long-Sheng Chang",
    city: "Columbus",
    state: "OH",
    fields: ["Tumor suppressors", "Targeted therapeutics"],
    description:
      "Uses tumor cell and animal models to study neurofibromatosis-associated tumors and sarcomas and evaluate targeted drug combinations.",
    website:
      "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/chang-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Neurofibromatosis models and drug screening would require orientation.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    availability: "interest",
    sources: [
      {
        url: "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/chang-lab",
        title: "Chang Laboratory - official research information",
        claims: ["research", "environment"],
        evidence:
          "Uses tumor cell and animal models to study neurofibromatosis-associated tumors and sarcomas and evaluate targeted drug combinations.",
      },
    ],
  }),
  researchLab({
    id: "nch-cripe",
    name: "Timothy Cripe Laboratory",
    institution: "Nationwide Children's Hospital",
    pi: "Timothy P. Cripe",
    city: "Columbus",
    state: "OH",
    fields: ["Cancer gene therapy", "Cancer immunology"],
    description:
      "Develops immuno-gene therapies, including AAV-based delivery of immune-cell engagers and combination treatments.",
    website:
      "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/timothy-cripe-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Gene-delivery engineering and immune-cell assays require further training.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    availability: "interest",
    sources: [
      {
        url: "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/timothy-cripe-lab",
        title: "Timothy Cripe Laboratory - official research information",
        claims: ["research", "environment"],
        evidence:
          "Develops immuno-gene therapies, including AAV-based delivery of immune-cell engagers and combination treatments.",
      },
    ],
  }),
  researchLab({
    id: "nch-drissi",
    name: "Drissi Laboratory",
    institution: "Nationwide Children's Hospital",
    pi: "Rachid Drissi",
    city: "Columbus",
    state: "OH",
    fields: ["Pediatric brain tumors", "DNA damage"],
    description:
      "Studies molecular drivers and treatment vulnerabilities in aggressive pediatric brain tumors, including telomere and BMI-1 biology.",
    website:
      "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/drissi-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Pediatric brain-tumor models differ from prior lung-cancer work.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "Rachid Drissi",
      email: "Rachid.Drissi@NationwideChildrens.org",
    },
    availability: "interest",
    sources: [
      {
        url: "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/drissi-lab",
        title: "Drissi Laboratory - official research information",
        claims: ["research", "environment", "contact"],
        evidence:
          "Studies molecular drivers and treatment vulnerabilities in aggressive pediatric brain tumors, including telomere and BMI-1 biology. The page provides the listed research contact.",
      },
    ],
  }),
  researchLab({
    id: "nch-kendall",
    applicationMethod:
      "The lab invites contact concerning a position. Email the listed PI and confirm whether an assistant or technician route exists.",
    name: "Kendall Laboratory",
    institution: "Nationwide Children's Hospital",
    pi: "Genevieve C. Kendall",
    city: "Columbus",
    state: "OH",
    fields: ["Sarcoma biology", "Cancer models"],
    description:
      "Uses cell culture and transgenic zebrafish to investigate fusion-driven rhabdomyosarcoma and identify therapeutic targets.",
    website:
      "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/kendall-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Zebrafish handling and developmental biology are new training areas.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "Genevieve C. Kendall",
      email: "Genevieve.Kendall@NationwideChildrens.org",
    },
    availability: "inquiries",
    sources: [
      {
        url: "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/kendall-lab",
        title: "Kendall Laboratory - official research information",
        claims: ["research", "environment", "contact", "availability"],
        evidence:
          "Uses cell culture and transgenic zebrafish to study rhabdomyosarcoma. The page provides the listed contact and invites inquiries concerning a position, without specifying an assistant vacancy.",
      },
    ],
  }),
  researchLab({
    id: "nch-lee",
    name: "Dean Lee Laboratory",
    institution: "Nationwide Children's Hospital",
    pi: "Dean A. Lee",
    city: "Columbus",
    state: "OH",
    fields: ["Cancer immunology", "Cell therapy"],
    description:
      "Develops engineered natural killer cell therapies and clinical correlative assays to improve immune treatment of cancer.",
    website:
      "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/lee-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Primary immune-cell engineering and flow cytometry require confirmation.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "Dean A. Lee",
      email: "Dean.Lee@NationwideChildrens.org",
    },
    availability: "interest",
    sources: [
      {
        url: "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/lee-lab",
        title: "Dean Lee Laboratory - official research information",
        claims: ["research", "environment", "contact"],
        evidence:
          "Develops engineered natural killer cell therapies and clinical correlative assays to improve immune treatment of cancer. The page provides the listed research contact.",
      },
    ],
  }),
  researchLab({
    id: "nch-roberts",
    name: "Roberts Laboratory",
    institution: "Nationwide Children's Hospital",
    pi: "Ryan D. Roberts",
    city: "Columbus",
    state: "OH",
    fields: ["Lung metastasis", "Tumor microenvironment"],
    description:
      "Investigates osteosarcoma spread to the lung using tumor-lung cell co-cultures, patient-derived models and gene-expression studies.",
    website:
      "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/roberts-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Direct transfer of lung-cancer cell biology to tumor-lung interactions.",
    ],
    gaps: [
      "Primary lung-cell co-culture and animal models may require training.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "Ryan D. Roberts",
      email: "Ryan.Roberts@NationwideChildrens.org",
    },
    availability: "interest",
    sources: [
      {
        url: "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/roberts-lab",
        title: "Roberts Laboratory - official research information",
        claims: ["research", "environment", "contact"],
        evidence:
          "Investigates osteosarcoma spread to the lung using tumor-lung cell co-cultures, patient-derived models and gene-expression studies. The page provides the listed research contact.",
      },
    ],
  }),
  researchLab({
    id: "nch-stanton",
    name: "Stanton Systems Epigenetics Laboratory",
    institution: "Nationwide Children's Hospital",
    pi: "Benjamin Z. Stanton",
    city: "Columbus",
    state: "OH",
    fields: ["Cancer epigenetics", "Genomics"],
    description:
      "Studies chromatin architecture and gene regulation to uncover vulnerabilities in pediatric cancer.",
    website:
      "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/stanton-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Advanced epigenomic assays and analysis are new learning areas.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "Benjamin Z. Stanton",
      email: "Benjamin.Stanton@NationwideChildrens.org",
    },
    availability: "interest",
    sources: [
      {
        url: "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/stanton-lab",
        title:
          "Stanton Systems Epigenetics Laboratory - official research information",
        claims: ["research", "environment", "contact"],
        evidence:
          "Studies chromatin architecture and gene regulation to uncover vulnerabilities in pediatric cancer. The page provides the listed research contact.",
      },
    ],
  }),
  researchLab({
    id: "nch-theisen",
    name: "Theisen Laboratory",
    institution: "Nationwide Children's Hospital",
    pi: "Emily R. Theisen",
    city: "Columbus",
    state: "OH",
    fields: ["Sarcoma biology", "Cancer epigenetics"],
    description:
      "Combines molecular biology, biochemistry and genomics to identify vulnerabilities in Ewing sarcoma and other fusion-driven tumors.",
    website:
      "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/theisen-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Fusion-oncogene and genomic assays require role-specific orientation.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    availability: "interest",
    sources: [
      {
        url: "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/theisen-lab",
        title: "Theisen Laboratory - official research information",
        claims: ["research", "environment"],
        evidence:
          "Combines molecular biology, biochemistry and genomics to identify vulnerabilities in Ewing sarcoma and other fusion-driven tumors.",
      },
    ],
  }),
  researchLab({
    id: "nch-wang",
    name: "Ruoning Wang Laboratory",
    institution: "Nationwide Children's Hospital",
    pi: "Ruoning Wang",
    city: "Columbus",
    state: "OH",
    fields: ["Immunometabolism", "Cancer biology"],
    description:
      "Investigates metabolic control of cell-cycle transitions, immune-cell fate and antitumor immunity in pediatric cancer.",
    website:
      "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/wang-lab",
    strengths: [
      "Actual lung-cancer cell culture and PCR/qPCR, Western blot, microscopy and immunostaining experience.",
      "Biology/medical-science education and manuscript experience support research collaboration.",
    ],
    gaps: [
      "Metabolic flux and primary T-cell methods may require training.",
      "Position requirements and employment eligibility remain unverified.",
    ],
    contact: {
      name: "Ruoning Wang",
      email: "Ruoning.Wang@NationwideChildrens.org",
    },
    availability: "interest",
    sources: [
      {
        url: "https://www.nationwidechildrens.org/research/areas-of-research/center-for-childhood-cancer/wang-lab",
        title: "Ruoning Wang Laboratory - official research information",
        claims: ["research", "environment", "contact"],
        evidence:
          "Investigates metabolic control of cell-cycle transitions, immune-cell fate and antitumor immunity in pediatric cancer. The page provides the listed research contact.",
      },
    ],
  }),
];
