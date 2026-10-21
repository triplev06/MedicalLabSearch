import type { Lab } from "../../domain/types";
import { researchLab } from "./research-entry";

// Official sources checked 2026-10-21. Inquiries do not establish a job offer.
export const accessibleEastLabs: Lab[] = [
  researchLab({
    id: "umbc-padmanabhan",
    name: "Padmanabhan Laboratory",
    pi: "Achuth Padmanabhan",
    institution: "University of Maryland, Baltimore County",
    city: "Baltimore",
    state: "MD",
    fields: ["Cancer Biology", "Ovarian Cancer"],
    description:
      "Studies ovarian cancer metastasis, mutant p53, proteostasis and experimental therapies.",
    website: "https://padmanabhanlab.umbc.edu/research/",
    availability: "open",
    experience: "entry",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "entry-role",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Research technician/lab manager opening: relevant bachelor's degree, master's preferred; prior research is a plus. Email a CV and cover letter. Compensation is not stated on the official page.",
      sourceUrl: "https://padmanabhanlab.umbc.edu/433-2/",
    },
    applicationUrl: "https://padmanabhanlab.umbc.edu/433-2/",
    requirements: [
      "Research technician/lab manager opening: relevant bachelor's degree, master's preferred; prior research is a plus. Email a CV and cover letter.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Culture, Western blots and imaging overlap"],
    gaps: [
      "Culture, Western blots and imaging overlap; CRISPR, cytometry and mouse tumor work need training. The advertised bachelor's route treats prior research as a plus.",
    ],
    sources: [
      {
        url: "https://padmanabhanlab.umbc.edu/research/",
        title: "Padmanabhan Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies ovarian cancer metastasis, mutant p53, proteostasis and experimental therapies.",
      },
      {
        url: "https://padmanabhanlab.umbc.edu/433-2/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Research technician/lab manager opening: relevant bachelor's degree, master's preferred; prior research is a plus. Email a CV and cover letter.",
      },
    ],
  }),
  researchLab({
    id: "uconn-hanlon",
    name: "Hanlon Laboratory",
    pi: "Stacey L. Hanlon",
    institution: "University of Connecticut",
    city: "Storrs",
    state: "CT",
    fields: ["Chromosome Biology", "Genetics"],
    description:
      "Uses fruit-fly molecular genetics to study B-chromosome formation, evolution and segregation.",
    website: "https://hanlon.lab.uconn.edu/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Research technicians at all levels, including recent graduates seeking training, are invited to inquire about current openings.",
      sourceUrl: "https://hanlon.lab.uconn.edu/join-us/",
    },
    applicationUrl: "https://hanlon.lab.uconn.edu/join-us/",
    requirements: [
      "Research technicians at all levels, including recent graduates seeking training, are invited to inquire about current openings.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Molecular and microscopy preparation provides a bridge"],
    gaps: [
      "Molecular and microscopy preparation provides a bridge; Drosophila genetics and cytogenetics need training. Technician inquiries are welcomed but no suitable vacancy is confirmed.",
    ],
    sources: [
      {
        url: "https://hanlon.lab.uconn.edu/",
        title: "Hanlon Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Uses fruit-fly molecular genetics to study B-chromosome formation, evolution and segregation.",
      },
      {
        url: "https://hanlon.lab.uconn.edu/join-us/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Research technicians at all levels, including recent graduates seeking training, are invited to inquire about current openings.",
      },
    ],
  }),
  researchLab({
    id: "uconn-vargas-rodriguez",
    name: "Vargas-Rodriguez Laboratory",
    pi: "Oscar Vargas-Rodriguez",
    institution: "UConn Health",
    city: "Farmington",
    state: "CT",
    fields: ["RNA Biology", "Protein Translation"],
    description:
      "Investigates tRNA, aminoacyl-tRNA synthetases and translation regulation in disease.",
    website: "https://health.uconn.edu/vargas-rodriguez-lab/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Scientists at all training levels and undergraduate/postgraduate students seeking experience are invited to contact Oscar. The paid UConn summer route is separate.",
      sourceUrl: "https://health.uconn.edu/vargas-rodriguez-lab/join-us/",
    },
    applicationUrl: "https://health.uconn.edu/vargas-rodriguez-lab/join-us/",
    requirements: [
      "Scientists at all training levels and undergraduate/postgraduate students seeking experience are invited to contact Oscar. The paid UConn summer route is separate.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["PCR and protein assays provide a foundation"],
    gaps: [
      "PCR and protein assays provide a foundation; tRNA engineering and translation biochemistry are unverified. General inquiry access does not establish job eligibility.",
    ],
    sources: [
      {
        url: "https://health.uconn.edu/vargas-rodriguez-lab/",
        title: "Vargas-Rodriguez Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Investigates tRNA, aminoacyl-tRNA synthetases and translation regulation in disease.",
      },
      {
        url: "https://health.uconn.edu/vargas-rodriguez-lab/join-us/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Scientists at all training levels and undergraduate/postgraduate students seeking experience are invited to contact Oscar. The paid UConn summer route is separate.",
      },
    ],
  }),
  researchLab({
    id: "temple-eunice-chen",
    name: "Chen Laboratory",
    pi: "Eunice Chen",
    institution: "Temple University",
    city: "Philadelphia",
    state: "PA",
    fields: ["Clinical Research", "Eating Disorders"],
    description:
      "Studies eating/weight disorders using clinical trials, behavioral assessment, psychophysiology and imaging.",
    website: "https://sites.temple.edu/tedp/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unpaid",
      audience: "general",
      evidence:
        "Undergraduates and postbaccalaureates may apply for volunteer/credit research assistance, committing one year; send cover letter, CV and three telephone references.",
      sourceUrl: "https://sites.temple.edu/tedp/join-our-team/",
    },
    applicationUrl: "https://sites.temple.edu/tedp/join-our-team/",
    requirements: [
      "Undergraduates and postbaccalaureates may apply for volunteer/credit research assistance, committing one year; send cover letter, CV and three telephone references.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Clinical documentation, literature reviews and data handling transfer",
    ],
    gaps: [
      "Clinical documentation, literature reviews and data handling transfer; behavioral assessment, imaging and coding need training. Postbaccalaureate volunteers are explicitly included.",
    ],
    sources: [
      {
        url: "https://sites.temple.edu/tedp/",
        title: "Chen Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies eating/weight disorders using clinical trials, behavioral assessment, psychophysiology and imaging.",
      },
      {
        url: "https://sites.temple.edu/tedp/join-our-team/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Undergraduates and postbaccalaureates may apply for volunteer/credit research assistance, committing one year; send cover letter, CV and three telephone references.",
      },
    ],
  }),
  researchLab({
    id: "dfci-barbie",
    name: "Barbie Laboratory",
    pi: "David A. Barbie",
    institution: "Dana-Farber Cancer Institute",
    city: "Boston",
    state: "MA",
    fields: ["Lung Cancer", "Cancer Immunology"],
    description:
      "Investigates KRAS-driven lung cancer and innate immune signaling to refine combination therapies.",
    website: "https://www.dana-farber.org/find-a-doctor/david-a-barbie",
    availability: "open",
    experience: "entry",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "entry-role",
      compensation: "paid",
      audience: "general",
      evidence:
        "Current full-time research technician posting lists a bachelor's degree, no prior professional experience and $47,500–$51,300 annual pay; apply through the official portal.",
      sourceUrl:
        "https://careers.dana-farber.org/job/2077/research-technician-barbie-lab-research-laboratory-us-ma-boston-450-brookline-ave/",
      time: "full-time",
    },
    applicationUrl:
      "https://careers.dana-farber.org/job/2077/research-technician-barbie-lab-research-laboratory-us-ma-boston-450-brookline-ave/",
    requirements: [
      "Current full-time research technician posting lists a bachelor's degree, no prior professional experience and $47,500–$51,300 annual pay; apply through the official portal.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Molecular assays and culture provide relevant preparation"],
    gaps: [
      "Molecular assays and culture provide relevant preparation; animal work and cancer immunology need training. Bachelor's degree and no prior professional experience are explicit.",
    ],
    sources: [
      {
        url: "https://www.dana-farber.org/find-a-doctor/david-a-barbie",
        title: "Barbie Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Investigates KRAS-driven lung cancer and innate immune signaling to refine combination therapies.",
      },
      {
        url: "https://careers.dana-farber.org/job/2077/research-technician-barbie-lab-research-laboratory-us-ma-boston-450-brookline-ave/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Current full-time research technician posting lists a bachelor's degree, no prior professional experience and $47,500–$51,300 annual pay; apply through the official portal.",
      },
    ],
  }),
  researchLab({
    id: "dfci-sethi",
    name: "Sethi Laboratory",
    pi: "Nikhil Sethi",
    institution: "Dana-Farber Cancer Institute",
    city: "Boston",
    state: "MA",
    fields: ["Gastrointestinal Cancer", "Cancer Biology"],
    description:
      "Combines patient-derived molecular data, disease models and experimental dependency testing in gastrointestinal cancer.",
    website: "https://labs.dana-farber.org/sethilab/",
    availability: "open",
    experience: "entry",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "entry-role",
      compensation: "paid",
      audience: "general",
      evidence:
        "Current full-time research technician posting lists a bachelor's degree, no prior professional experience and $47,500–$51,300 annual pay; apply through the official portal.",
      sourceUrl:
        "https://careers.dana-farber.org/job/595/research-technician-sethi-lab-research-laboratory-us-ma-boston-450-brookline-ave/",
      time: "full-time",
    },
    applicationUrl:
      "https://careers.dana-farber.org/job/595/research-technician-sethi-lab-research-laboratory-us-ma-boston-450-brookline-ave/",
    requirements: [
      "Current full-time research technician posting lists a bachelor's degree, no prior professional experience and $47,500–$51,300 annual pay; apply through the official portal.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Cell culture and molecular techniques transfer"],
    gaps: [
      "Cell culture and molecular techniques transfer; mouse breeding/handling is strongly preferred or requires commitment to learn. Bachelor's entry and no prior professional experience are explicit.",
    ],
    sources: [
      {
        url: "https://labs.dana-farber.org/sethilab/",
        title: "Sethi Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Combines patient-derived molecular data, disease models and experimental dependency testing in gastrointestinal cancer.",
      },
      {
        url: "https://careers.dana-farber.org/job/595/research-technician-sethi-lab-research-laboratory-us-ma-boston-450-brookline-ave/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Current full-time research technician posting lists a bachelor's degree, no prior professional experience and $47,500–$51,300 annual pay; apply through the official portal.",
      },
    ],
  }),
  researchLab({
    id: "dfci-shapiro",
    name: "Shapiro Laboratory",
    pi: "Geoffrey Shapiro",
    institution: "Dana-Farber Cancer Institute",
    city: "Boston",
    state: "MA",
    fields: ["Cancer Therapeutics", "DNA Repair"],
    description:
      "Studies cell-cycle and DNA-repair inhibitors through laboratory experiments and early-phase cancer trials.",
    website: "https://www.dana-farber.org/find-a-doctor/geoffrey-shapiro",
    availability: "open",
    experience: "entry",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "entry-role",
      compensation: "paid",
      audience: "general",
      evidence:
        "Current full-time research technician posting lists a bachelor's degree, no prior professional experience and $47,500–$51,300 annual pay; apply through the official portal.",
      sourceUrl:
        "https://careers.dana-farber.org/job/2205/research-technician-shapiro-lab-research-laboratory-us-ma-boston-450-brookline-ave/",
      time: "full-time",
    },
    applicationUrl:
      "https://careers.dana-farber.org/job/2205/research-technician-shapiro-lab-research-laboratory-us-ma-boston-450-brookline-ave/",
    requirements: [
      "Current full-time research technician posting lists a bachelor's degree, no prior professional experience and $47,500–$51,300 annual pay; apply through the official portal.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Advertised culture, drug treatment and Western blots align strongly",
    ],
    gaps: [
      "Advertised culture, drug treatment and Western blots align strongly; mouse procedures require training. Bachelor's degree and no prior professional experience are explicit.",
    ],
    sources: [
      {
        url: "https://www.dana-farber.org/find-a-doctor/geoffrey-shapiro",
        title: "Shapiro Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies cell-cycle and DNA-repair inhibitors through laboratory experiments and early-phase cancer trials.",
      },
      {
        url: "https://careers.dana-farber.org/job/2205/research-technician-shapiro-lab-research-laboratory-us-ma-boston-450-brookline-ave/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Current full-time research technician posting lists a bachelor's degree, no prior professional experience and $47,500–$51,300 annual pay; apply through the official portal.",
      },
    ],
  }),
  researchLab({
    id: "umass-thyme",
    name: "Thyme Laboratory",
    pi: "Summer Thyme",
    institution: "UMass Chan Medical School",
    city: "Worcester",
    state: "MA",
    fields: ["Neurodevelopment", "Genetics"],
    description:
      "Uses zebrafish and large-scale genetic analyses to study Down syndrome and other neurodevelopmental disorders.",
    website: "https://www.umassmed.edu/thymelab/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "The PI invites technician inquiries even without posted jobs, including people straight from undergraduate study; medical students may also inquire about summer research.",
      sourceUrl: "https://www.umassmed.edu/thymelab/join-us/",
    },
    applicationUrl: "https://www.umassmed.edu/thymelab/join-us/",
    requirements: [
      "The PI invites technician inquiries even without posted jobs, including people straight from undergraduate study; medical students may also inquire about summer research.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Microscopy and data organization transfer, but zebrafish work, behavioral phenotyping and single-cell analyses need training. Technician and medical-student inquiries are explicit",
    ],
    gaps: [
      "Microscopy and data organization transfer, but zebrafish work, behavioral phenotyping and single-cell analyses need training. Technician and medical-student inquiries are explicit; current vacancy, pay and role prerequisites are unverified.",
    ],
    sources: [
      {
        url: "https://www.umassmed.edu/thymelab/",
        title: "Thyme Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Uses zebrafish and large-scale genetic analyses to study Down syndrome and other neurodevelopmental disorders.",
      },
      {
        url: "https://www.umassmed.edu/thymelab/join-us/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "The PI invites technician inquiries even without posted jobs, including people straight from undergraduate study; medical students may also inquire about summer research.",
      },
    ],
  }),
  researchLab({
    id: "jefferson-lin-guo",
    name: "Guo Laboratory",
    pi: "Lin Guo",
    institution: "Thomas Jefferson University",
    city: "Philadelphia",
    state: "PA",
    fields: ["Protein Biology", "Neurodegeneration"],
    description:
      "Studies protein phase transitions and therapeutic strategies for ALS and related neurodegeneration.",
    website: "https://research.jefferson.edu/labs/researcher/guo-research.html",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Invites specialist/technician applications from recent graduates and more senior researchers for 1–2 years full-time; email cover letter and CV. Exact degree prerequisites and compensation are not specified.",
      sourceUrl:
        "https://research.jefferson.edu/labs/researcher/guo-research/job-opening.html",
    },
    applicationUrl:
      "https://research.jefferson.edu/labs/researcher/guo-research/job-opening.html",
    requirements: [
      "Invites specialist/technician applications from recent graduates and more senior researchers for 1–2 years full-time; email cover letter and CV. Exact degree prerequisites and compensation are not specified.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Molecular, cellular and protein assays transfer"],
    gaps: [
      "Molecular, cellular and protein assays transfer; phase-separation biophysics needs training. Technician applications are invited, but exact entry criteria and time compatibility remain unverified.",
    ],
    sources: [
      {
        url: "https://research.jefferson.edu/labs/researcher/guo-research.html",
        title: "Guo Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies protein phase transitions and therapeutic strategies for ALS and related neurodegeneration.",
      },
      {
        url: "https://research.jefferson.edu/labs/researcher/guo-research/job-opening.html",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Invites specialist/technician applications from recent graduates and more senior researchers for 1–2 years full-time; email cover letter and CV. Exact degree prerequisites and compensation are not specified.",
      },
    ],
  }),
  researchLab({
    id: "columbia-mahat",
    name: "Mahat Laboratory",
    pi: "Dig Bijay Mahat",
    institution: "Columbia University",
    city: "New York",
    state: "NY",
    fields: ["Cancer Biology", "Gene Regulation"],
    description:
      "Investigates enhancers, tumor immune states and autoimmune risk using single-cell transcription methods.",
    website: "https://systemsbiology.columbia.edu/faculty/dig-bijay-mahat",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Invites applicants for research staff and technician roles, including career transitions; prior biomedical/lab-management experience is desirable. Contact the lab about current capacity.",
      sourceUrl: "https://mahatlab.com/join-us/",
    },
    applicationUrl: "https://mahatlab.com/join-us/",
    requirements: [
      "Invites applicants for research staff and technician roles, including career transitions; prior biomedical/lab-management experience is desirable. Contact the lab about current capacity.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Molecular biology and data organization provide a bridge"],
    gaps: [
      "Molecular biology and data organization provide a bridge; single-cell assays, genomics and machine-learning pipelines require substantial training. Technician/career-transition inquiry is explicit.",
    ],
    sources: [
      {
        url: "https://systemsbiology.columbia.edu/faculty/dig-bijay-mahat",
        title: "Mahat Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Investigates enhancers, tumor immune states and autoimmune risk using single-cell transcription methods.",
      },
      {
        url: "https://mahatlab.com/join-us/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Invites applicants for research staff and technician roles, including career transitions; prior biomedical/lab-management experience is desirable. Contact the lab about current capacity.",
      },
    ],
  }),
  researchLab({
    id: "psu-lindner",
    name: "Lindner Laboratory",
    pi: "Scott E. Lindner",
    institution: "Pennsylvania State University",
    city: "University Park",
    state: "PA",
    fields: ["Malaria Biology", "RNA Regulation"],
    description:
      "Studies parasite development and transmission through molecular parasitology, RNA regulation and structural biology.",
    website: "https://science.psu.edu/bmb/people/sel27",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Invites BS/MS-level research technicians to email a CV and specific interests; positions are described as often available, without a current suitable job posting.",
      sourceUrl: "https://www.lindnerlab.org/join-us",
    },
    applicationUrl: "https://www.lindnerlab.org/join-us",
    requirements: [
      "Invites BS/MS-level research technicians to email a CV and specific interests; positions are described as often available, without a current suitable job posting.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["PCR, molecular and protein assays transfer"],
    gaps: [
      "PCR, molecular and protein assays transfer; parasite/vector systems, animal work, structural biology and omics require training. BS technician inquiries are explicit.",
    ],
    sources: [
      {
        url: "https://science.psu.edu/bmb/people/sel27",
        title: "Lindner Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies parasite development and transmission through molecular parasitology, RNA regulation and structural biology.",
      },
      {
        url: "https://www.lindnerlab.org/join-us",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Invites BS/MS-level research technicians to email a CV and specific interests; positions are described as often available, without a current suitable job posting.",
      },
    ],
  }),
  researchLab({
    id: "pitt-jay-tan",
    name: "Tan Laboratory",
    pi: "Jay Xiaojun Tan",
    institution: "University of Pittsburgh",
    city: "Pittsburgh",
    state: "PA",
    fields: ["Cell Biology", "Aging"],
    description:
      "Investigates lysosomal repair, organelle stress and cellular resilience in aging and neurodegeneration.",
    website: "https://www.cellbiology.pitt.edu/people/jay-tan-phd",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Recruits research technicians with a bachelor's degree and 0–3 years research experience; extensive training is offered. Email cover letter, CV and three references.",
      sourceUrl: "https://jaytanlab.org/join",
    },
    applicationUrl: "https://jaytanlab.org/join",
    requirements: [
      "Recruits research technicians with a bachelor's degree and 0–3 years research experience; extensive training is offered. Email cover letter, CV and three references.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Mammalian culture and molecular/protein assays transfer"],
    gaps: [
      "Mammalian culture and molecular/protein assays transfer; advanced biochemistry, genetics and mouse models need training. The lab explicitly recruits bachelor's technicians with 0–3 years experience.",
    ],
    sources: [
      {
        url: "https://www.cellbiology.pitt.edu/people/jay-tan-phd",
        title: "Tan Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Investigates lysosomal repair, organelle stress and cellular resilience in aging and neurodegeneration.",
      },
      {
        url: "https://jaytanlab.org/join",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Recruits research technicians with a bachelor's degree and 0–3 years research experience; extensive training is offered. Email cover letter, CV and three references.",
      },
    ],
  }),
  researchLab({
    id: "uva-khetarpal",
    name: "Khetarpal Laboratory",
    pi: "Sumeet Khetarpal",
    institution: "University of Virginia",
    city: "Charlottesville",
    state: "VA",
    fields: ["Cardiovascular Biology", "Metabolism"],
    description:
      "Studies exercise, cardiometabolic stress and lipid disorders to understand cardiac metabolism and inter-organ signaling.",
    website: "https://www.cvrc.virginia.edu/Khetarpal/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Invites research technician inquiries, describing the route as ideal after a bachelor's degree before graduate/medical school; email the PI. No specific vacancy or pay is verified.",
      sourceUrl: "https://www.cvrc.virginia.edu/Khetarpal/join-us.php",
    },
    applicationUrl: "https://www.cvrc.virginia.edu/Khetarpal/join-us.php",
    requirements: [
      "Invites research technician inquiries, describing the route as ideal after a bachelor's degree before graduate/medical school; email the PI. No specific vacancy or pay is verified.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["General molecular preparation and documentation transfer"],
    gaps: [
      "General molecular preparation and documentation transfer; cardiovascular physiology and metabolic methods are not documented in enough detail to verify overlap. Bachelor's technician inquiry is explicit.",
    ],
    sources: [
      {
        url: "https://www.cvrc.virginia.edu/Khetarpal/",
        title: "Khetarpal Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies exercise, cardiometabolic stress and lipid disorders to understand cardiac metabolism and inter-organ signaling.",
      },
      {
        url: "https://www.cvrc.virginia.edu/Khetarpal/join-us.php",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Invites research technician inquiries, describing the route as ideal after a bachelor's degree before graduate/medical school; email the PI. No specific vacancy or pay is verified.",
      },
    ],
  }),
  researchLab({
    id: "yale-mark-lee",
    name: "Lee Human and Cancer Immunology Laboratory",
    pi: "Mark N. Lee",
    institution: "Yale University",
    city: "New Haven",
    state: "CT",
    fields: ["Cancer Immunology", "Human Immunology"],
    description:
      "Investigates human immune recognition and cancer immunology using functional genomic and cellular approaches.",
    website: "https://medicine.yale.edu/lab/mlee/research/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Invites postgraduate research assistant applicants and medical trainees. Email a research/career cover letter, CV and 1–3 references; entry-role pay and precise prerequisites are not specified.",
      sourceUrl: "https://medicine.yale.edu/lab/mlee/jobs/",
    },
    applicationUrl: "https://medicine.yale.edu/lab/mlee/jobs/",
    requirements: [
      "Invites postgraduate research assistant applicants and medical trainees. Email a research/career cover letter, CV and 1–3 references; entry-role pay and precise prerequisites are not specified.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Molecular and cell assays offer a foundation"],
    gaps: [
      "Molecular and cell assays offer a foundation; human immune assays and high-throughput genomics require training. Postgraduate/medical inquiries are explicit but role prerequisites remain unknown.",
    ],
    sources: [
      {
        url: "https://medicine.yale.edu/lab/mlee/research/",
        title: "Lee Human and Cancer Immunology Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Investigates human immune recognition and cancer immunology using functional genomic and cellular approaches.",
      },
      {
        url: "https://medicine.yale.edu/lab/mlee/jobs/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Invites postgraduate research assistant applicants and medical trainees. Email a research/career cover letter, CV and 1–3 references; entry-role pay and precise prerequisites are not specified.",
      },
    ],
  }),
  researchLab({
    id: "yale-seo",
    name: "Laboratory for Healthy Minds",
    pi: "Dongju Seo",
    institution: "Yale University",
    city: "New Haven",
    state: "CT",
    fields: ["Clinical Neuroscience", "Addiction"],
    description:
      "Studies stress and addiction with neuroimaging, physiological measures and longitudinal behavioral research.",
    website: "https://medicine.yale.edu/lab/lhm/about/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Provides training inquiries for undergraduate, graduate and medical students and postgraduate candidates seeking clinical-neuroscience experience; contact Dr. Seo.",
      sourceUrl: "https://medicine.yale.edu/lab/lhm/participate/join/",
    },
    applicationUrl: "https://medicine.yale.edu/lab/lhm/participate/join/",
    requirements: [
      "Provides training inquiries for undergraduate, graduate and medical students and postgraduate candidates seeking clinical-neuroscience experience; contact Dr. Seo.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Clinical documentation, data handling and writing transfer"],
    gaps: [
      "Clinical documentation, data handling and writing transfer; fMRI, psychophysiology and longitudinal behavioral modeling need training. Medical/postgraduate training inquiries are explicitly invited.",
    ],
    sources: [
      {
        url: "https://medicine.yale.edu/lab/lhm/about/",
        title: "Laboratory for Healthy Minds research",
        claims: ["research", "environment"],
        evidence:
          "Studies stress and addiction with neuroimaging, physiological measures and longitudinal behavioral research.",
      },
      {
        url: "https://medicine.yale.edu/lab/lhm/participate/join/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Provides training inquiries for undergraduate, graduate and medical students and postgraduate candidates seeking clinical-neuroscience experience; contact Dr. Seo.",
      },
    ],
  }),
  researchLab({
    id: "yale-zaidi",
    name: "Zaidi Laboratory",
    pi: "Samir Zaidi",
    institution: "Yale University",
    city: "New Haven",
    state: "CT",
    fields: ["Cancer Biology", "Tumor Microenvironment"],
    description:
      "Investigates cancer plasticity and tumor-immune/fibroblast interactions that drive treatment resistance.",
    website: "https://medicine.yale.edu/lab/zaidi/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Invites medical students and research associates to email the PI; the stated $68,000 salary and doctoral criteria apply only to the separate postdoctoral opening.",
      sourceUrl: "https://medicine.yale.edu/lab/zaidi/join-us/",
    },
    applicationUrl: "https://medicine.yale.edu/lab/zaidi/join-us/",
    requirements: [
      "Invites medical students and research associates to email the PI; the stated $68,000 salary and doctoral criteria apply only to the separate postdoctoral opening.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Culture and molecular preparation transfer"],
    gaps: [
      "Culture and molecular preparation transfer; genetic engineering, immune profiling, mouse models and bioinformatics need training. Medical/research-associate inquiry access is explicit; suitable employment criteria are unknown.",
    ],
    sources: [
      {
        url: "https://medicine.yale.edu/lab/zaidi/",
        title: "Zaidi Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Investigates cancer plasticity and tumor-immune/fibroblast interactions that drive treatment resistance.",
      },
      {
        url: "https://medicine.yale.edu/lab/zaidi/join-us/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Invites medical students and research associates to email the PI; the stated $68,000 salary and doctoral criteria apply only to the separate postdoctoral opening.",
      },
    ],
  }),
  researchLab({
    id: "pitt-rizzo",
    name: "Rizzo Laboratory for Translational Glycobiology",
    pi: "Alicia N. Rizzo",
    institution: "University of Pittsburgh",
    city: "Pittsburgh",
    state: "PA",
    fields: ["Critical Illness", "Translational Glycobiology"],
    description:
      "Develops glycan-targeted precision medicine for ARDS, pneumonia and sepsis through mechanistic and human-subject research.",
    website: "https://rizzolab.pitt.edu/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "students",
      evidence:
        "Welcomes medical students, residents and fellows to pursue projects alongside clinical training; email Dr. Rizzo. One-on-one scientific writing and presentation training is described.",
      sourceUrl: "https://rizzolab.pitt.edu/join-our-team",
    },
    applicationUrl: "https://rizzolab.pitt.edu/join-our-team",
    requirements: [
      "Welcomes medical students, residents and fellows to pursue projects alongside clinical training; email Dr. Rizzo. One-on-one scientific writing and presentation training is described.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Clinical documentation and scientific writing transfer"],
    gaps: [
      "Clinical documentation and scientific writing transfer; glycobiology assays, critical-illness models and research protocols require training. Medical-trainee inquiries are explicit; time and institutional access remain conditional.",
    ],
    sources: [
      {
        url: "https://rizzolab.pitt.edu/",
        title: "Rizzo Laboratory for Translational Glycobiology research",
        claims: ["research", "environment"],
        evidence:
          "Develops glycan-targeted precision medicine for ARDS, pneumonia and sepsis through mechanistic and human-subject research.",
      },
      {
        url: "https://rizzolab.pitt.edu/join-our-team",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Welcomes medical students, residents and fellows to pursue projects alongside clinical training; email Dr. Rizzo. One-on-one scientific writing and presentation training is described.",
      },
    ],
  }),
  researchLab({
    id: "penn-nejadnik",
    name: "INSIGHT Laboratory",
    pi: "Hossein Nejadnik",
    institution: "University of Pennsylvania",
    city: "Philadelphia",
    state: "PA",
    fields: ["Neuro-Oncology", "Translational Imaging"],
    description:
      "Develops visible therapeutic cells, quantitative imaging biomarkers and AI-supported assessment of immunotherapy.",
    website:
      "https://departments.med.upenn.edu/academic-departments/department-of-radiology/research/labs-and-centers/insight-lab",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "students",
      evidence:
        "Welcomes medical students for flexible-duration clinical/translational research. Prior research is helpful, not required; consistent time is expected. Email the PI a CV and research-interest letter.",
      sourceUrl:
        "https://departments.med.upenn.edu/academic-departments/department-of-radiology/research/labs-and-centers/insight-lab",
    },
    applicationUrl:
      "https://departments.med.upenn.edu/academic-departments/department-of-radiology/research/labs-and-centers/insight-lab",
    requirements: [
      "Welcomes medical students for flexible-duration clinical/translational research. Prior research is helpful, not required; consistent time is expected. Email the PI a CV and research-interest letter.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Clinical records, outcomes extraction and literature work transfer",
    ],
    gaps: [
      "Clinical records, outcomes extraction and literature work transfer; advanced imaging, immune-cell engineering and AI methods need training. Medical students with no prior research can inquire; project access remains conditional.",
    ],
    sources: [
      {
        url: "https://departments.med.upenn.edu/academic-departments/department-of-radiology/research/labs-and-centers/insight-lab",
        title: "INSIGHT Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Develops visible therapeutic cells, quantitative imaging biomarkers and AI-supported assessment of immunotherapy.",
      },
      {
        url: "https://departments.med.upenn.edu/academic-departments/department-of-radiology/research/labs-and-centers/insight-lab",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Welcomes medical students for flexible-duration clinical/translational research. Prior research is helpful, not required; consistent time is expected. Email the PI a CV and research-interest letter.",
      },
    ],
  }),
  researchLab({
    id: "pitt-kolarcik",
    name: "Kolarcik Laboratory",
    pi: "Christi Kolarcik",
    institution: "University of Pittsburgh",
    city: "Pittsburgh",
    state: "PA",
    fields: ["Neurodegeneration", "Molecular Biology"],
    description:
      "Investigates molecular mechanisms of ALS motor-neuron dysfunction using cellular and neural-engineering approaches.",
    website: "https://www.kolarciklab.pitt.edu/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Seeks research assistants/technicians with molecular biology, cell culture and/or mouse-model expertise. Contact the PI to clarify the role, degree criteria, compensation and duration.",
      sourceUrl: "https://www.kolarciklab.pitt.edu/positions",
    },
    applicationUrl: "https://www.kolarciklab.pitt.edu/positions",
    requirements: [
      "Seeks research assistants/technicians with molecular biology, cell culture and/or mouse-model expertise. Contact the PI to clarify the role, degree criteria, compensation and duration.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Culture and molecular assays overlap"],
    gaps: [
      "Culture and molecular assays overlap; neural engineering and mouse models need training. A relevant technician inquiry is documented; exact prerequisites remain unknown.",
    ],
    sources: [
      {
        url: "https://www.kolarciklab.pitt.edu/",
        title: "Kolarcik Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Investigates molecular mechanisms of ALS motor-neuron dysfunction using cellular and neural-engineering approaches.",
      },
      {
        url: "https://www.kolarciklab.pitt.edu/positions",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Seeks research assistants/technicians with molecular biology, cell culture and/or mouse-model expertise. Contact the PI to clarify the role, degree criteria, compensation and duration.",
      },
    ],
  }),
  researchLab({
    id: "jhu-hungoo-lee",
    name: "H. Lee Laboratory",
    pi: "Hungoo Lee",
    institution: "Johns Hopkins University",
    city: "Baltimore",
    state: "MD",
    fields: ["Epigenetics", "Repeat Expansion Diseases"],
    description:
      "Studies repeat instability, transcription and epigenetic mechanisms in Fragile X and related diseases.",
    website: "https://profiles.hopkinsmedicine.org/provider/hungoo-lee/3192851",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Explicitly recruits research technicians and welcomes postbaccalaureate researchers to contact the PI. Degree criteria, duration and compensation are not specified.",
      sourceUrl: "https://www.hungooleelab.org/new-page-1",
    },
    applicationUrl: "https://www.hungooleelab.org/new-page-1",
    requirements: [
      "Explicitly recruits research technicians and welcomes postbaccalaureate researchers to contact the PI. Degree criteria, duration and compensation are not specified.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Molecular assays and culture transfer"],
    gaps: [
      "Molecular assays and culture transfer; repeat engineering, stem-cell methods and genomics need training. Postbaccalaureate inquiry access is explicit, without verified job criteria.",
    ],
    sources: [
      {
        url: "https://profiles.hopkinsmedicine.org/provider/hungoo-lee/3192851",
        title: "H. Lee Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies repeat instability, transcription and epigenetic mechanisms in Fragile X and related diseases.",
      },
      {
        url: "https://www.hungooleelab.org/new-page-1",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Explicitly recruits research technicians and welcomes postbaccalaureate researchers to contact the PI. Degree criteria, duration and compensation are not specified.",
      },
    ],
  }),
  researchLab({
    id: "vcu-guang-wei-zhang",
    name: "Guang-Wei Zhang Laboratory",
    pi: "Guang-Wei Zhang",
    institution: "Virginia Commonwealth University",
    city: "Richmond",
    state: "VA",
    fields: ["Neuroscience", "Social Behavior"],
    description:
      "Connects social behavior with neural circuits using mouse recordings, circuit manipulation and computational analysis.",
    website: "https://guangweizhang.com/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "The lab homepage names research-technician opportunities and a PI contact. Inquire about requirements, training, compensation and duration; no suitable staff vacancy criteria are documented.",
      sourceUrl: "https://guangweizhang.com/",
    },
    applicationUrl: "https://guangweizhang.com/",
    requirements: [
      "The lab homepage names research-technician opportunities and a PI contact. Inquire about requirements, training, compensation and duration; no suitable staff vacancy criteria are documented.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Microscopy and data documentation offer some transfer"],
    gaps: [
      "Microscopy and data documentation offer some transfer; animal behavior, electrophysiology and computational neuroscience are unverified. Technician inquiry is explicit; preparation criteria are unknown.",
    ],
    sources: [
      {
        url: "https://guangweizhang.com/",
        title: "Guang-Wei Zhang Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Connects social behavior with neural circuits using mouse recordings, circuit manipulation and computational analysis.",
      },
      {
        url: "https://guangweizhang.com/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "The lab homepage names research-technician opportunities and a PI contact. Inquire about requirements, training, compensation and duration; no suitable staff vacancy criteria are documented.",
      },
    ],
  }),
  researchLab({
    id: "cornell-luke-dow",
    name: "Dow Laboratory",
    pi: "Lukas Edward Dow",
    institution: "Weill Cornell Medicine",
    city: "New York",
    state: "NY",
    fields: ["Cancer Biology", "Cancer Genetics"],
    description:
      "Uses engineered mouse and organoid models to study colorectal-cancer drivers, therapeutic response and resistance.",
    website: "https://www.dowlab.org/research",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Welcomes Research Technician I candidates without experience and Technician II candidates with experience to contact the lab. No linked vacancy, salary or duration is verified.",
      sourceUrl: "https://www.dowlab.org/about",
    },
    applicationUrl: "https://www.dowlab.org/about",
    requirements: [
      "Welcomes Research Technician I candidates without experience and Technician II candidates with experience to contact the lab. No linked vacancy, salary or duration is verified.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Culture and molecular biology transfer to cancer models"],
    gaps: [
      "Culture and molecular biology transfer to cancer models; CRISPR/base editing, organoids and animal experiments need training. An explicit novice technician inquiry supports entry preparation, without an open vacancy guarantee.",
    ],
    sources: [
      {
        url: "https://www.dowlab.org/research",
        title: "Dow Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Uses engineered mouse and organoid models to study colorectal-cancer drivers, therapeutic response and resistance.",
      },
      {
        url: "https://www.dowlab.org/about",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Welcomes Research Technician I candidates without experience and Technician II candidates with experience to contact the lab. No linked vacancy, salary or duration is verified.",
      },
    ],
  }),
  researchLab({
    id: "pitt-moatti",
    name: "Moatti Laboratory",
    pi: "Adele Moatti",
    institution: "University of Pittsburgh",
    city: "Pittsburgh",
    state: "PA",
    fields: ["Translational Research", "Drug Delivery"],
    description:
      "Develops inner-ear therapeutic delivery systems using porcine models, imaging and pharmacokinetic measurements.",
    website: "https://moattilab.pitt.edu/about",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Explicitly invites technicians to contact the PI about joining the group. Degree, experience, compensation and duration criteria are not published.",
      sourceUrl: "https://moattilab.pitt.edu/available-positions",
    },
    applicationUrl: "https://moattilab.pitt.edu/available-positions",
    requirements: [
      "Explicitly invites technicians to contact the PI about joining the group. Degree, experience, compensation and duration criteria are not published.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Microscopy and quantitative documentation transfer"],
    gaps: [
      "Microscopy and quantitative documentation transfer; inner-ear delivery, pharmacokinetics and large-animal procedures need training. Technician inquiries are invited without verified entry criteria.",
    ],
    sources: [
      {
        url: "https://moattilab.pitt.edu/about",
        title: "Moatti Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Develops inner-ear therapeutic delivery systems using porcine models, imaging and pharmacokinetic measurements.",
      },
      {
        url: "https://moattilab.pitt.edu/available-positions",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Explicitly invites technicians to contact the PI about joining the group. Degree, experience, compensation and duration criteria are not published.",
      },
    ],
  }),
  researchLab({
    id: "pitt-hun-way-hwang",
    name: "Hun-Way Hwang Laboratory",
    pi: "Hun-Way Hwang",
    institution: "University of Pittsburgh",
    city: "Pittsburgh",
    state: "PA",
    fields: ["RNA Biology", "Molecular Disease Mechanisms"],
    description:
      "Studies abnormal mRNA processing in neurological disorders, hematological malignancies and liver disease.",
    website: "https://cmsb.pitt.edu/people/hun-way-hwang-phd",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "The lab explicitly recruits technicians and asks prospective applicants to send a CV to discuss opportunities. No novice criteria, compensation or duration is specified.",
      sourceUrl: "https://www.hwangrnalab.org/blank-4",
    },
    applicationUrl: "https://www.hwangrnalab.org/blank-4",
    requirements: [
      "The lab explicitly recruits technicians and asks prospective applicants to send a CV to discuss opportunities. No novice criteria, compensation or duration is specified.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Mammalian culture and molecular assays overlap"],
    gaps: [
      "Mammalian culture and molecular assays overlap; mouse models, CRISPR and sequencing need training. A technician inquiry route is explicit, but exact staff criteria remain unknown.",
    ],
    sources: [
      {
        url: "https://cmsb.pitt.edu/people/hun-way-hwang-phd",
        title: "Hun-Way Hwang Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies abnormal mRNA processing in neurological disorders, hematological malignancies and liver disease.",
      },
      {
        url: "https://www.hwangrnalab.org/blank-4",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "The lab explicitly recruits technicians and asks prospective applicants to send a CV to discuss opportunities. No novice criteria, compensation or duration is specified.",
      },
    ],
  }),
  researchLab({
    id: "jhu-pluznick",
    name: "Pluznick Laboratory",
    pi: "Jennifer Pluznick",
    institution: "Johns Hopkins University",
    city: "Baltimore",
    state: "MD",
    fields: ["Renal Physiology", "Cell Signaling"],
    description:
      "Investigates how sensory receptors regulate kidney and cardiovascular physiology using receptor localization, ligand screening and animal experiments.",
    website: "https://www.hopkinsmedicine.org/research/labs/p/pluznick-lab",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "A dedicated research-technician section explicitly asks candidates to inquire about openings before applying. Staff prerequisites, pay and duration are unspecified; paid summer student work is a separate route.",
      sourceUrl: "https://pluznicklab.johnshopkins.edu/join-us/",
    },
    applicationUrl: "https://pluznicklab.johnshopkins.edu/join-us/",
    requirements: [
      "A dedicated research-technician section explicitly asks candidates to inquire about openings before applying. Staff prerequisites, pay and duration are unspecified; paid summer student work is a separate route.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Cell localization and molecular assays offer transfer"],
    gaps: [
      "Cell localization and molecular assays offer transfer; receptor pharmacology and whole-animal renal physiology need training. Technician inquiries are welcome without verified novice criteria.",
    ],
    sources: [
      {
        url: "https://www.hopkinsmedicine.org/research/labs/p/pluznick-lab",
        title: "Pluznick Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Investigates how sensory receptors regulate kidney and cardiovascular physiology using receptor localization, ligand screening and animal experiments.",
      },
      {
        url: "https://pluznicklab.johnshopkins.edu/join-us/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "A dedicated research-technician section explicitly asks candidates to inquire about openings before applying. Staff prerequisites, pay and duration are unspecified; paid summer student work is a separate route.",
      },
    ],
  }),
  researchLab({
    id: "uva-bon-trinh",
    name: "Trinh Laboratory",
    pi: "Bon Q. Trinh",
    institution: "University of Virginia",
    city: "Charlottesville",
    state: "VA",
    fields: ["Cancer Biology", "Epigenetics"],
    description:
      "Studies chromatin-level protein and RNA regulation in myeloid cells, cancer drug responses and innate immune function.",
    website: "https://sites.google.com/view/trinhlab/home",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Technician inquiries are welcome even without science experience; molecular/cell skills are advantageous. Any-degree research volunteers are also welcome under UVA policy. Send CV, references and an interest statement; paid staff capacity and duration need confirmation.",
      sourceUrl: "https://sites.google.com/view/trinhlab/join-us",
    },
    applicationUrl: "https://sites.google.com/view/trinhlab/join-us",
    requirements: [
      "Technician inquiries are welcome even without science experience; molecular/cell skills are advantageous. Any-degree research volunteers are also welcome under UVA policy. Send CV, references and an interest statement; paid staff capacity and duration need confirmation.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Culture, PCR and molecular assays overlap"],
    gaps: [
      "Culture, PCR and molecular assays overlap; CRISPR, animals and computational drug screening need training. Explicit novice technician access supports preparation, but no current paid vacancy is verified.",
    ],
    sources: [
      {
        url: "https://sites.google.com/view/trinhlab/home",
        title: "Trinh Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies chromatin-level protein and RNA regulation in myeloid cells, cancer drug responses and innate immune function.",
      },
      {
        url: "https://sites.google.com/view/trinhlab/join-us",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Technician inquiries are welcome even without science experience; molecular/cell skills are advantageous. Any-degree research volunteers are also welcome under UVA policy. Send CV, references and an interest statement; paid staff capacity and duration need confirmation.",
      },
    ],
  }),
  researchLab({
    id: "jhu-gour",
    name: "Gour Laboratory",
    pi: "Naina Gour",
    institution: "Johns Hopkins University",
    city: "Baltimore",
    state: "MD",
    fields: ["Cancer Immunology", "Neuroimmune Signaling"],
    description:
      "Studies neuropeptide regulation of neutrophil states and GPCR signaling in invasive melanoma.",
    website: "https://gourlab.org/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "The lab explicitly invites research-technician inquiries via the PI email. No degree, experience, compensation or time-commitment criteria are provided.",
      sourceUrl: "https://gourlab.org/",
    },
    applicationUrl: "https://gourlab.org/",
    requirements: [
      "The lab explicitly invites research-technician inquiries via the PI email. No degree, experience, compensation or time-commitment criteria are provided.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Molecular assays and disease biology transfer"],
    gaps: [
      "Molecular assays and disease biology transfer; immune-cell specialization and receptor mechanisms need training. The technician invitation establishes an inquiry route, not verified entry prerequisites.",
    ],
    sources: [
      {
        url: "https://gourlab.org/",
        title: "Gour Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies neuropeptide regulation of neutrophil states and GPCR signaling in invasive melanoma.",
      },
      {
        url: "https://gourlab.org/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "The lab explicitly invites research-technician inquiries via the PI email. No degree, experience, compensation or time-commitment criteria are provided.",
      },
    ],
  }),
  researchLab({
    id: "nyu-arciniega",
    name: "Arciniega Laboratory",
    pi: "Hector Arciniega",
    institution: "New York University Grossman School of Medicine",
    city: "New York",
    state: "NY",
    fields: ["Clinical Neuroscience", "Brain Injury"],
    description:
      "Studies long-term head-injury consequences using neuroimaging, behavioral assessments and epidemiology.",
    website: "https://www.arciniegalab.com/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Explicitly welcomes research assistants, medical students and visiting students. Email a CV and cover letter covering experience, project interests, goals and funding; references may follow. Compensation and prerequisites need confirmation.",
      sourceUrl: "https://www.arciniegalab.com/join",
    },
    applicationUrl: "https://www.arciniegalab.com/join",
    requirements: [
      "Explicitly welcomes research assistants, medical students and visiting students. Email a CV and cover letter covering experience, project interests, goals and funding; references may follow. Compensation and prerequisites need confirmation.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Clinical documentation, literature work and data handling transfer",
    ],
    gaps: [
      "Clinical documentation, literature work and data handling transfer; neuroimaging and specialist assessments require training. The named assistant/medical-student invitation supports inquiry access without a job guarantee.",
    ],
    sources: [
      {
        url: "https://www.arciniegalab.com/",
        title: "Arciniega Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies long-term head-injury consequences using neuroimaging, behavioral assessments and epidemiology.",
      },
      {
        url: "https://www.arciniegalab.com/join",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Explicitly welcomes research assistants, medical students and visiting students. Email a CV and cover letter covering experience, project interests, goals and funding; references may follow. Compensation and prerequisites need confirmation.",
      },
    ],
  }),
  researchLab({
    id: "vt-weger-lucarelli",
    name: "Viral Genetics and Host Interactions Laboratory",
    pi: "James Weger-Lucarelli",
    institution: "Virginia Tech",
    city: "Blacksburg",
    state: "VA",
    fields: ["Virology", "Host-Pathogen Interactions"],
    description:
      "Studies viral and host determinants of mosquito-borne RNA-virus disease, evolution and transmission.",
    website:
      "https://research.vetmed.vt.edu/labs/faculty-labs/weger-lucarelli-lab.html",
    availability: "open",
    experience: "entry",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "entry-role",
      compensation: "paid",
      audience: "general",
      evidence:
        "Open 40-hour technician role requires a related bachelor's/master's degree, computer skills and organization; bench/animal experience is preferred. One-year commitment required. Salary starts at $36,501; review began October 1, with no closing date listed.",
      sourceUrl:
        "https://careers.pageuppeople.com/968/cw/en-us/job/537583/research-laboratory-technician",
      time: "full-time",
      minimumMonths: 12,
    },
    applicationUrl:
      "https://careers.pageuppeople.com/968/cw/en-us/job/537583/research-laboratory-technician",
    requirements: [
      "Open 40-hour technician role requires a related bachelor's/master's degree, computer skills and organization; bench/animal experience is preferred. One-year commitment required. Salary starts at $36,501; review began October 1, with no closing date listed.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Cell culture, PCR and molecular assays overlap"],
    gaps: [
      "Cell culture, PCR and molecular assays overlap; virus containment, mosquitoes, sequencing and infected-animal work need training. Related-degree applicants can apply; a full year is mandatory.",
    ],
    sources: [
      {
        url: "https://research.vetmed.vt.edu/labs/faculty-labs/weger-lucarelli-lab.html",
        title: "Viral Genetics and Host Interactions Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies viral and host determinants of mosquito-borne RNA-virus disease, evolution and transmission.",
      },
      {
        url: "https://careers.pageuppeople.com/968/cw/en-us/job/537583/research-laboratory-technician",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Open 40-hour technician role requires a related bachelor's/master's degree, computer skills and organization; bench/animal experience is preferred. One-year commitment required. Salary starts at $36,501; review began October 1, with no closing date listed.",
      },
    ],
  }),
  researchLab({
    id: "vt-lina-ni",
    name: "Ni Laboratory",
    pi: "Lina Ni",
    institution: "Virginia Tech",
    city: "Blacksburg",
    state: "VA",
    fields: ["Sensory Neuroscience", "Molecular Neuroscience"],
    description:
      "Studies insect thermosensation and sensory integration using genetics, molecular biology, behavior, imaging and electrophysiology.",
    website: "https://www.ni.neuroscience.vt.edu/research/",
    availability: "open",
    experience: "entry",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "entry-role",
      compensation: "paid",
      audience: "general",
      evidence:
        "Open hourly-wage technician role requires a related BS/equivalent, basic lab/chemistry familiarity and comfort with live fruit flies. Drosophila, electrophysiology, microscopy and coding experience are preferred. Weekday commitment is 30 hours/week; salary and minimum duration are unspecified.",
      sourceUrl:
        "https://careers.pageuppeople.com/968/cw/en-us/job/536768/lab-technician-ni-lab",
      time: "part-time",
    },
    applicationUrl:
      "https://careers.pageuppeople.com/968/cw/en-us/job/536768/lab-technician-ni-lab",
    requirements: [
      "Open hourly-wage technician role requires a related BS/equivalent, basic lab/chemistry familiarity and comfort with live fruit flies. Drosophila, electrophysiology, microscopy and coding experience are preferred. Weekday commitment is 30 hours/week; salary and minimum duration are unspecified.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Basic molecular lab preparation transfers"],
    gaps: [
      "Basic molecular lab preparation transfers; insect husbandry, electrophysiology and computational analysis need training. Bachelor-level criteria are explicit, but the role is 30 hours per week.",
    ],
    sources: [
      {
        url: "https://www.ni.neuroscience.vt.edu/research/",
        title: "Ni Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies insect thermosensation and sensory integration using genetics, molecular biology, behavior, imaging and electrophysiology.",
      },
      {
        url: "https://careers.pageuppeople.com/968/cw/en-us/job/536768/lab-technician-ni-lab",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Open hourly-wage technician role requires a related BS/equivalent, basic lab/chemistry familiarity and comfort with live fruit flies. Drosophila, electrophysiology, microscopy and coding experience are preferred. Weekday commitment is 30 hours/week; salary and minimum duration are unspecified.",
      },
    ],
  }),
  researchLab({
    id: "vcu-zeleke",
    name: "HEARTFUL Laboratory",
    pi: "Waganesh A. Zeleke",
    institution: "Virginia Commonwealth University",
    city: "Richmond",
    state: "VA",
    fields: ["Clinical Research", "Mental Health Equity"],
    description:
      "Studies trauma-informed mental health care, autism services and access to care through community-based research.",
    website: "https://rehab.chp.vcu.edu/about-us/research/heartful/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unpaid",
      audience: "general",
      evidence:
        "Accepts applications for volunteers and student research assistants throughout the year via its lab-interest form. Volunteer entry is explicit; prerequisites, supervision arrangements and time commitment need confirmation.",
      sourceUrl: "https://rehab.chp.vcu.edu/about-us/research/heartful/",
    },
    applicationUrl: "https://rehab.chp.vcu.edu/about-us/research/heartful/",
    requirements: [
      "Accepts applications for volunteers and student research assistants throughout the year via its lab-interest form. Volunteer entry is explicit; prerequisites, supervision arrangements and time commitment need confirmation.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Clinical documentation, literature synthesis and data handling transfer",
    ],
    gaps: [
      "Clinical documentation, literature synthesis and data handling transfer; community research and trauma/autism assessment methods require training. General volunteer access is documented without verified degree/experience criteria.",
    ],
    sources: [
      {
        url: "https://rehab.chp.vcu.edu/about-us/research/heartful/",
        title: "HEARTFUL Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies trauma-informed mental health care, autism services and access to care through community-based research.",
      },
      {
        url: "https://rehab.chp.vcu.edu/about-us/research/heartful/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Accepts applications for volunteers and student research assistants throughout the year via its lab-interest form. Volunteer entry is explicit; prerequisites, supervision arrangements and time commitment need confirmation.",
      },
    ],
  }),
  researchLab({
    id: "dartmouth-van-citters",
    name: "Dartmouth Biomedical Engineering Center for Orthopaedics",
    pi: "Douglas W. Van Citters",
    institution: "Dartmouth College",
    city: "Hanover",
    state: "NH",
    fields: ["Translational Research", "Orthopaedic Biomaterials"],
    description:
      "Analyzes retrieved joint implants, material wear and biomechanics to improve orthopaedic devices.",
    website:
      "https://engineering.dartmouth.edu/community/faculty/douglas-van-citters",
    availability: "open",
    experience: "entry",
    eligibility: "unknown",
    pathway: {
      kind: "entry-role",
      compensation: "paid",
      audience: "general",
      time: "full-time",
      minimumMonths: 12,
      evidence:
        "Open one-year full-time entry-level lab technician role pays $17.50–18/hour. High-school diploma/equivalent, computer/quantitative skills, protocol compliance and lifting up to 50 pounds are required; lab/materials experience is preferred. Submit resume and cover letter.",
      sourceUrl: "https://searchjobs.dartmouth.edu/postings/87211",
    },
    applicationUrl: "https://searchjobs.dartmouth.edu/postings/87211",
    requirements: [
      "Open one-year full-time entry-level lab technician role pays $17.50–18/hour. High-school diploma/equivalent, computer/quantitative skills, protocol compliance and lifting up to 50 pounds are required; lab/materials experience is preferred. Submit resume and cover letter.",
    ],
    applicationMethod: "Apply using the official vacancy instructions.",
    strengths: ["Clinical documentation and data presentation transfer."],
    gaps: [
      "Clinical context, microscopy, documentation and data presentation transfer; materials testing and implant biomechanics need training. The actual novice role requires a full year and physical laboratory duties.",
    ],
    sources: [
      {
        url: "https://engineering.dartmouth.edu/community/faculty/douglas-van-citters",
        title: "Official research profile",
        claims: ["research", "environment"],
        evidence:
          "Analyzes retrieved joint implants, material wear and biomechanics to improve orthopaedic devices.",
      },
      {
        url: "https://searchjobs.dartmouth.edu/postings/87211",
        title: "Official entry-level vacancy",
        claims: ["availability", "requirements"],
        evidence:
          "Open one-year full-time entry-level lab technician role pays $17.50–18/hour. High-school diploma/equivalent, computer/quantitative skills, protocol compliance and lifting up to 50 pounds are required; lab/materials experience is preferred. Submit resume and cover letter.",
      },
    ],
  }),
  researchLab({
    id: "tufts-alfredo-hernandez",
    name: "Hernandez Laboratory",
    pi: "Alfredo Hernandez",
    institution: "Tufts University",
    city: "Medford",
    state: "MA",
    fields: ["Molecular Biology", "Mitochondrial Disease"],
    description:
      "Studies mitochondrial and phage DNA replication, replisome dynamics and disease-associated replication defects.",
    website: "https://as.tufts.edu/biology/hernandez-lab/research",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Explicitly seeks technicians and lab members at all training levels via direct PI email. No novice-specific prerequisites, salary, vacancy or duration are verified.",
      sourceUrl:
        "https://as.tufts.edu/biology/hernandez-lab/about/join-our-lab",
    },
    applicationUrl:
      "https://as.tufts.edu/biology/hernandez-lab/about/join-our-lab",
    requirements: [
      "Explicitly seeks technicians and lab members at all training levels via direct PI email. No novice-specific prerequisites, salary, vacancy or duration are verified.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Molecular preparation and data documentation transfer"],
    gaps: [
      "Molecular preparation and data documentation transfer; purified-protein biochemistry and replication reconstitution need training. Technician inquiries are explicit without verified role prerequisites.",
    ],
    sources: [
      {
        url: "https://as.tufts.edu/biology/hernandez-lab/research",
        title: "Hernandez Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies mitochondrial and phage DNA replication, replisome dynamics and disease-associated replication defects.",
      },
      {
        url: "https://as.tufts.edu/biology/hernandez-lab/about/join-our-lab",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Explicitly seeks technicians and lab members at all training levels via direct PI email. No novice-specific prerequisites, salary, vacancy or duration are verified.",
      },
    ],
  }),
  researchLab({
    id: "penn-ridky",
    name: "Ridky Laboratory",
    pi: "Todd Ridky",
    institution: "University of Pennsylvania",
    city: "Philadelphia",
    state: "PA",
    fields: ["Cancer Biology", "Tissue Engineering"],
    description:
      "Uses engineered epithelial tissues to study cancer, immune responses, pigmentation and targeted therapeutic development.",
    website: "https://www.med.upenn.edu/ridkylab/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Welcomes research-technician applicants; technical candidates should check Penn HR positions and send the PI an interest letter. No specific suitable vacancy, prerequisites, pay or duration is verified.",
      sourceUrl: "https://www.med.upenn.edu/ridkylab/join-us.html",
    },
    applicationUrl: "https://www.med.upenn.edu/ridkylab/join-us.html",
    requirements: [
      "Welcomes research-technician applicants; technical candidates should check Penn HR positions and send the PI an interest letter. No specific suitable vacancy, prerequisites, pay or duration is verified.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Mammalian culture, imaging and molecular assays transfer"],
    gaps: [
      "Mammalian culture, imaging and molecular assays transfer; advanced tissue engineering and preclinical efficacy/toxicity work need training. The technical-staff invitation is explicit without verified job criteria.",
    ],
    sources: [
      {
        url: "https://www.med.upenn.edu/ridkylab/",
        title: "Ridky Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Uses engineered epithelial tissues to study cancer, immune responses, pigmentation and targeted therapeutic development.",
      },
      {
        url: "https://www.med.upenn.edu/ridkylab/join-us.html",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Welcomes research-technician applicants; technical candidates should check Penn HR positions and send the PI an interest letter. No specific suitable vacancy, prerequisites, pay or duration is verified.",
      },
    ],
  }),
  researchLab({
    id: "georgetown-casey-brown",
    name: "Clinical Aging and Relational Emotion Science Laboratory",
    pi: "Casey Kenyon Brown",
    institution: "Georgetown University",
    city: "Washington",
    state: "DC",
    fields: ["Clinical Research", "Aging and Mental Health"],
    description:
      "Studies interpersonal emotion, depression and neurodegenerative disease through behavioral, physiological and imaging methods.",
    website: "https://careslab.facultysite.georgetown.edu/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unpaid",
      audience: "general",
      evidence:
        "Anyone may apply to volunteer; Georgetown undergraduates receive priority. Minimum commitment is 6–10 hours/week. Email the lab to express interest; project capacity and experience criteria require confirmation.",
      sourceUrl: "https://careslab.facultysite.georgetown.edu/join-the-lab",
      time: "part-time",
    },
    applicationUrl: "https://careslab.facultysite.georgetown.edu/join-the-lab",
    requirements: [
      "Anyone may apply to volunteer; Georgetown undergraduates receive priority. Minimum commitment is 6–10 hours/week. Email the lab to express interest; project capacity and experience criteria require confirmation.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Clinical context, data handling and documentation transfer"],
    gaps: [
      "Clinical context, data handling and documentation transfer; psychophysiology, eye tracking and neuroimaging need training. A general volunteer route is explicit but part-time, with priority for institutional students.",
    ],
    sources: [
      {
        url: "https://careslab.facultysite.georgetown.edu/",
        title:
          "Clinical Aging and Relational Emotion Science Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies interpersonal emotion, depression and neurodegenerative disease through behavioral, physiological and imaging methods.",
      },
      {
        url: "https://careslab.facultysite.georgetown.edu/join-the-lab",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Anyone may apply to volunteer; Georgetown undergraduates receive priority. Minimum commitment is 6–10 hours/week. Email the lab to express interest; project capacity and experience criteria require confirmation.",
      },
    ],
  }),
  researchLab({
    id: "rutgers-reilly",
    name: "READ Laboratory",
    pi: "Erin Reilly",
    institution: "Rutgers University",
    city: "Piscataway",
    state: "NJ",
    fields: ["Clinical Research", "Eating Disorders"],
    description:
      "Studies learning, uncertainty and treatment response in eating disorders using neurocognitive testing and computational modeling.",
    website: "https://sites.rutgers.edu/read-lab/people/erin-reilly/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Seeks staff postbaccalaureate research coordinators through its interest form. Related bachelor's, human-subjects experience and analysis skills are preferred; one-year-plus availability is preferred. No individual vacancy or compensation is verified.",
      sourceUrl: "https://sites.rutgers.edu/read-lab/how-to-join/",
      minimumMonths: 12,
    },
    applicationUrl: "https://sites.rutgers.edu/read-lab/how-to-join/",
    requirements: [
      "Seeks staff postbaccalaureate research coordinators through its interest form. Related bachelor's, human-subjects experience and analysis skills are preferred; one-year-plus availability is preferred. No individual vacancy or compensation is verified.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Clinical documentation, communication and data handling transfer",
    ],
    gaps: [
      "Clinical documentation, communication and data handling transfer; eating-disorder assessment, human-subjects coordination and computational methods need training. Staff inquiry is explicit; one-year-plus availability and prior research are preferred.",
    ],
    sources: [
      {
        url: "https://sites.rutgers.edu/read-lab/people/erin-reilly/",
        title: "READ Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies learning, uncertainty and treatment response in eating disorders using neurocognitive testing and computational modeling.",
      },
      {
        url: "https://sites.rutgers.edu/read-lab/how-to-join/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Seeks staff postbaccalaureate research coordinators through its interest form. Related bachelor's, human-subjects experience and analysis skills are preferred; one-year-plus availability is preferred. No individual vacancy or compensation is verified.",
      },
    ],
  }),
  researchLab({
    id: "pitt-mazefsky",
    name: "REAACT Research Program",
    pi: "Carla Mazefsky",
    institution: "University of Pittsburgh",
    city: "Pittsburgh",
    state: "PA",
    fields: ["Clinical Research", "Autism and Mental Health"],
    description:
      "Develops measures and interventions for emotion dysregulation and mental-health difficulties in autistic people.",
    website: "https://reaact.pitt.edu/people/carla-mazefsky-phd",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Invites interest in occasional postbaccalaureate research-assistant/specialist opportunities with clinical-assessment, protocol and study-coordination training. Medical-student research training is also described. Complete the training-interest form; pay, capacity and prerequisites need confirmation.",
      sourceUrl: "https://www.reaact.pitt.edu/contact-us/student-training",
    },
    applicationUrl: "https://www.reaact.pitt.edu/contact-us/student-training",
    requirements: [
      "Invites interest in occasional postbaccalaureate research-assistant/specialist opportunities with clinical-assessment, protocol and study-coordination training. Medical-student research training is also described. Complete the training-interest form; pay, capacity and prerequisites need confirmation.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Clinical context, documentation and data management transfer"],
    gaps: [
      "Clinical context, documentation and data management transfer; autism-specific assessments and intervention research require training. An explicit postbaccalaureate assistant route and medical-student training support inquiry access.",
    ],
    sources: [
      {
        url: "https://reaact.pitt.edu/people/carla-mazefsky-phd",
        title: "REAACT Research Program research",
        claims: ["research", "environment"],
        evidence:
          "Develops measures and interventions for emotion dysregulation and mental-health difficulties in autistic people.",
      },
      {
        url: "https://www.reaact.pitt.edu/contact-us/student-training",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Invites interest in occasional postbaccalaureate research-assistant/specialist opportunities with clinical-assessment, protocol and study-coordination training. Medical-student research training is also described. Complete the training-interest form; pay, capacity and prerequisites need confirmation.",
      },
    ],
  }),
  researchLab({
    id: "wvu-andy-chan",
    name: "Neural Circuits and Neurotechnology Laboratory",
    pi: "Ho Wing (Andy) Chan",
    institution: "West Virginia University",
    city: "Morgantown",
    state: "WV",
    fields: ["Clinical Neuroscience", "Neurotechnology"],
    description:
      "Studies human neural circuits, epilepsy, neuromodulation and digital biomarkers using intracranial recordings and brain-computer interfaces.",
    website: "https://chanlab26.github.io/website/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "students",
      evidence:
        "Explicit medical-student track accepts summer, dedicated research-year and clerkship-era involvement without prior neuroscience experience. Email the PI your track and project interest; CV optional initially. Enrollment/access, compensation and capacity must be confirmed.",
      sourceUrl: "https://chanlab26.github.io/website/join.html",
      time: "flexible",
    },
    applicationUrl: "https://chanlab26.github.io/website/join.html",
    requirements: [
      "Explicit medical-student track accepts summer, dedicated research-year and clerkship-era involvement without prior neuroscience experience. Email the PI your track and project interest; CV optional initially. Enrollment/access, compensation and capacity must be confirmed.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Clinical organization, patient communication and documentation transfer",
    ],
    gaps: [
      "Clinical organization, patient communication and documentation transfer; signal processing, intracranial EEG and device analysis need training. Medical-student inquiries are explicit with flexible scheduling; current project access is conditional.",
    ],
    sources: [
      {
        url: "https://chanlab26.github.io/website/",
        title: "Neural Circuits and Neurotechnology Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies human neural circuits, epilepsy, neuromodulation and digital biomarkers using intracranial recordings and brain-computer interfaces.",
      },
      {
        url: "https://chanlab26.github.io/website/join.html",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Explicit medical-student track accepts summer, dedicated research-year and clerkship-era involvement without prior neuroscience experience. Email the PI your track and project interest; CV optional initially. Enrollment/access, compensation and capacity must be confirmed.",
      },
    ],
  }),
  researchLab({
    id: "umass-rothstein-nundel",
    name: "Rothstein-Nündel Laboratory",
    pi: "Ann Marshak-Rothstein and Kerstin Nündel",
    institution: "UMass Chan Medical School",
    city: "Worcester",
    state: "MA",
    fields: ["Immunology", "Autoimmune Disease"],
    description:
      "Studies autoreactive B cells, nucleic-acid sensing and Fas-ligand signaling in autoimmune and inflammatory disease.",
    website: "https://www.umassmed.edu/rothsteinnundellab/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Explicitly invites research-technician applicants to email either PI a CV and three references. No suitable individual vacancy, entry prerequisites, salary or commitment duration is verified.",
      sourceUrl: "https://www.umassmed.edu/rothsteinnundellab/people/",
    },
    applicationUrl: "https://www.umassmed.edu/rothsteinnundellab/people/",
    requirements: [
      "Explicitly invites research-technician applicants to email either PI a CV and three references. No suitable individual vacancy, entry prerequisites, salary or commitment duration is verified.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Molecular assays, culture and immunostaining transfer"],
    gaps: [
      "Molecular assays, culture and immunostaining transfer; immune-cell models, nucleic-acid signaling and animal experiments need training. A dedicated technician application invitation is documented without novice-specific criteria.",
    ],
    sources: [
      {
        url: "https://www.umassmed.edu/rothsteinnundellab/",
        title: "Rothstein-Nündel Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Studies autoreactive B cells, nucleic-acid sensing and Fas-ligand signaling in autoimmune and inflammatory disease.",
      },
      {
        url: "https://www.umassmed.edu/rothsteinnundellab/people/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Explicitly invites research-technician applicants to email either PI a CV and three references. No suitable individual vacancy, entry prerequisites, salary or commitment duration is verified.",
      },
    ],
  }),
  researchLab({
    id: "maryland-whitney-parker",
    name: "Parker Laboratory",
    pi: "Whitney E. Parker",
    institution: "University of Maryland School of Medicine",
    city: "Baltimore",
    state: "MD",
    fields: ["Neurodevelopment", "Translational Neuroscience"],
    description:
      "Investigates disrupted cortical development and epileptic-network formation to develop preventive therapies for pediatric epilepsy.",
    website: "https://www.wparker-lab.com/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Names lab-technician opportunities and asks interested candidates to email a brief introduction and CV/resume to the program manager. No specific suitable vacancy, degree criteria, pay or duration is verified.",
      sourceUrl: "https://www.wparker-lab.com/",
    },
    applicationUrl: "https://www.wparker-lab.com/",
    requirements: [
      "Names lab-technician opportunities and asks interested candidates to email a brief introduction and CV/resume to the program manager. No specific suitable vacancy, degree criteria, pay or duration is verified.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Molecular preparation, microscopy and clinical context offer transfer",
    ],
    gaps: [
      "Molecular preparation, microscopy and clinical context offer transfer; fetal gene delivery, epilepsy models and focused ultrasound need training. Technician inquiries are explicit; novice criteria remain unknown.",
    ],
    sources: [
      {
        url: "https://www.wparker-lab.com/",
        title: "Parker Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Investigates disrupted cortical development and epileptic-network formation to develop preventive therapies for pediatric epilepsy.",
      },
      {
        url: "https://www.wparker-lab.com/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Names lab-technician opportunities and asks interested candidates to email a brief introduction and CV/resume to the program manager. No specific suitable vacancy, degree criteria, pay or duration is verified.",
      },
    ],
  }),
  researchLab({
    id: "penn-jiang-xie",
    name: "Jiang-Xie Laboratory",
    pi: "Li-Feng Jiang-Xie",
    institution: "University of Pennsylvania",
    city: "Philadelphia",
    state: "PA",
    fields: ["Neuroscience", "Sleep Biology"],
    description:
      "Investigates sleep function and brain clearance using multimodal electrophysiology and experimental/computational approaches.",
    website: "https://www.med.upenn.edu/jiangxielab/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "The official lab homepage explicitly seeks research specialists and technicians and supplies a PI contact. Inquire about current capacity, novice training, duration and compensation; the separate opportunities page specifies student/postdoctoral routes only.",
      sourceUrl: "https://www.med.upenn.edu/jiangxielab/",
    },
    applicationUrl: "https://www.med.upenn.edu/jiangxielab/",
    requirements: [
      "The official lab homepage explicitly seeks research specialists and technicians and supplies a PI contact. Inquire about current capacity, novice training, duration and compensation; the separate opportunities page specifies student/postdoctoral routes only.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Data organization and general biomedical preparation transfer",
    ],
    gaps: [
      "Data organization and general biomedical preparation transfer; Neuropixels, electrophysiology, fluid dynamics and computational neuroscience need training. The technician invitation establishes inquiry access without role criteria.",
    ],
    sources: [
      {
        url: "https://www.med.upenn.edu/jiangxielab/",
        title: "Jiang-Xie Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Investigates sleep function and brain clearance using multimodal electrophysiology and experimental/computational approaches.",
      },
      {
        url: "https://www.med.upenn.edu/jiangxielab/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "The official lab homepage explicitly seeks research specialists and technicians and supplies a PI contact. Inquire about current capacity, novice training, duration and compensation; the separate opportunities page specifies student/postdoctoral routes only.",
      },
    ],
  }),
  researchLab({
    id: "rutgers-abraira",
    name: "Abraira Lab",
    pi: "Victoria Abraira",
    institution: "Rutgers University",
    city: "Piscataway",
    state: "NJ",
    fields: ["Neuroscience", "Molecular biology"],
    description:
      "Uses mouse molecular genetics and imaging to investigate touch, pain and sensory circuits from skin to brain.",
    website:
      "https://molbiosci.rutgers.edu/faculty-research/faculty/faculty-detail/490-abraira-victoria",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "The lab explicitly seeks research technicians/associates and post-baccalaureate or gap-year students through role-specific application links. Prerequisites, compensation and commitment length are not specified.",
      sourceUrl: "https://www.abrairalab.org/join-our-team.html",
    },
    applicationUrl: "https://www.abrairalab.org/join-our-team.html",
    requirements: [
      "The lab explicitly seeks research technicians/associates and post-baccalaureate or gap-year students through role-specific application links. Prerequisites, compensation and commitment length are not specified.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Molecular preparation and microscopy transfer to sensory research",
    ],
    gaps: [
      "Molecular preparation and microscopy transfer to sensory research; mouse genetics and neural-circuit methods need training. Technician and post-baccalaureate applications are explicitly invited, without published entry prerequisites.",
    ],
    sources: [
      {
        url: "https://molbiosci.rutgers.edu/faculty-research/faculty/faculty-detail/490-abraira-victoria",
        title: "Abraira Lab research",
        claims: ["research", "environment"],
        evidence:
          "Uses mouse molecular genetics and imaging to investigate touch, pain and sensory circuits from skin to brain.",
      },
      {
        url: "https://www.abrairalab.org/join-our-team.html",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "The lab explicitly seeks research technicians/associates and post-baccalaureate or gap-year students through role-specific application links. Prerequisites, compensation and commitment length are not specified.",
      },
    ],
  }),
  researchLab({
    id: "mit-boyer",
    name: "Boyer Lab",
    pi: "Laurie A. Boyer",
    institution: "Massachusetts Institute of Technology",
    city: "Cambridge",
    state: "MA",
    fields: ["Stem cells", "Cardiovascular biology", "Gene regulation"],
    description:
      "Studies chromatin, noncoding RNA and gene networks in cardiac development and regeneration using stem-cell differentiation and animal models.",
    website: "https://boyerlab.mit.edu/research/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "A dedicated research-technician section invites a CV, prior-experience summary, research interests and expected timeline directly to the PI. No minimum experience, salary or mandatory commitment is listed.",
      sourceUrl: "https://boyerlab.mit.edu/join/",
    },
    applicationUrl: "https://boyerlab.mit.edu/join/",
    requirements: [
      "A dedicated research-technician section invites a CV, prior-experience summary, research interests and expected timeline directly to the PI. No minimum experience, salary or mandatory commitment is listed.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Cell culture and molecular assays support stem-cell and gene-regulation work",
    ],
    gaps: [
      "Cell culture and molecular assays support stem-cell and gene-regulation work; cardiac differentiation, genomics and animal approaches require training. Explicit technician inquiries allow discussion of a proposed timeline.",
    ],
    sources: [
      {
        url: "https://boyerlab.mit.edu/research/",
        title: "Boyer Lab research",
        claims: ["research", "environment"],
        evidence:
          "Studies chromatin, noncoding RNA and gene networks in cardiac development and regeneration using stem-cell differentiation and animal models.",
      },
      {
        url: "https://boyerlab.mit.edu/join/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "A dedicated research-technician section invites a CV, prior-experience summary, research interests and expected timeline directly to the PI. No minimum experience, salary or mandatory commitment is listed.",
      },
    ],
  }),
  researchLab({
    id: "harvard-whited",
    name: "Whited Lab",
    pi: "Jessica Whited",
    institution: "Harvard University",
    city: "Cambridge",
    state: "MA",
    fields: ["Regenerative biology", "Molecular biology"],
    description:
      "Investigates axolotl limb regeneration and blastema cells using sequencing, transgenesis and gene-function perturbations.",
    website: "https://hscrb.harvard.edu/labs/whited-lab/research/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "The official people page explicitly lists research-assistant and technician openings and requests a CV and research-interest letter. No role-specific degree, experience, salary or duration is published; confirm current capacity directly.",
      sourceUrl: "https://hscrb.harvard.edu/labs/whited-lab/people/",
    },
    applicationUrl: "https://hscrb.harvard.edu/labs/whited-lab/people/",
    requirements: [
      "The official people page explicitly lists research-assistant and technician openings and requests a CV and research-interest letter. No role-specific degree, experience, salary or duration is published; confirm current capacity directly.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Molecular assays and microscopy transfer to regeneration research",
    ],
    gaps: [
      "Molecular assays and microscopy transfer to regeneration research; axolotl husbandry, transgenesis and animal procedures need training. Assistant/technician applications are invited but beginner eligibility is unverified.",
    ],
    sources: [
      {
        url: "https://hscrb.harvard.edu/labs/whited-lab/research/",
        title: "Whited Lab research",
        claims: ["research", "environment"],
        evidence:
          "Investigates axolotl limb regeneration and blastema cells using sequencing, transgenesis and gene-function perturbations.",
      },
      {
        url: "https://hscrb.harvard.edu/labs/whited-lab/people/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "The official people page explicitly lists research-assistant and technician openings and requests a CV and research-interest letter. No role-specific degree, experience, salary or duration is published; confirm current capacity directly.",
      },
    ],
  }),
  researchLab({
    id: "dfci-haq",
    name: "Haq Lab",
    pi: "Rizwan Haq",
    institution: "Dana-Farber Cancer Institute",
    city: "Boston",
    state: "MA",
    fields: ["Cancer biology", "Molecular biology"],
    description:
      "Studies uveal melanoma metastasis and therapeutic resistance through mouse models, functional genomics and patient biopsies.",
    website: "https://labs.dana-farber.org/haqlab/research",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "The lab explicitly recruits technicians/research assistants with prior molecular-biology experience and welcomes medical-student inquiries with some lab experience. A cover letter and CV go to the PI; compensation and duration require confirmation.",
      sourceUrl: "https://labs.dana-farber.org/haqlab/join-us",
    },
    applicationUrl: "https://labs.dana-farber.org/haqlab/join-us",
    requirements: [
      "The lab explicitly recruits technicians/research assistants with prior molecular-biology experience and welcomes medical-student inquiries with some lab experience. A cover letter and CV go to the PI; compensation and duration require confirmation.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Cancer biology, molecular assays and cell-culture preparation align with melanoma research",
    ],
    gaps: [
      "Cancer biology, molecular assays and cell-culture preparation align with melanoma research; CRISPR, murine models and specialized tumor profiling need training. The assistant invitation requests molecular experience rather than establishing a no-experience vacancy.",
    ],
    sources: [
      {
        url: "https://labs.dana-farber.org/haqlab/research",
        title: "Haq Lab research",
        claims: ["research", "environment"],
        evidence:
          "Studies uveal melanoma metastasis and therapeutic resistance through mouse models, functional genomics and patient biopsies.",
      },
      {
        url: "https://labs.dana-farber.org/haqlab/join-us",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "The lab explicitly recruits technicians/research assistants with prior molecular-biology experience and welcomes medical-student inquiries with some lab experience. A cover letter and CV go to the PI; compensation and duration require confirmation.",
      },
    ],
  }),
  researchLab({
    id: "penn-kathy-liu",
    name: "Kathy Liu Lab",
    pi: "Kathy Fange Liu",
    institution: "University of Pennsylvania",
    city: "Philadelphia",
    state: "PA",
    fields: ["Cancer biology", "RNA biology", "Biochemistry"],
    description:
      "Investigates RNA regulatory enzymes, sex-chromosome homologs and molecular dependencies that expose cancer therapeutic vulnerabilities.",
    website: "https://www.med.upenn.edu/kathyliulab/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "The official lab site lists two research-technician openings at Specialist A/B levels and explicitly invites contact with Dr. Liu. Role-specific qualifications, salary and commitment length are not supplied.",
      sourceUrl: "https://www.med.upenn.edu/kathyliulab/lab-members.html",
    },
    applicationUrl: "https://www.med.upenn.edu/kathyliulab/lab-members.html",
    requirements: [
      "The official lab site lists two research-technician openings at Specialist A/B levels and explicitly invites contact with Dr. Liu. Role-specific qualifications, salary and commitment length are not supplied.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Molecular and cancer preparation transfer to RNA regulation and cell-based therapeutic studies",
    ],
    gaps: [
      "Molecular and cancer preparation transfer to RNA regulation and cell-based therapeutic studies; RNA enzymology, functional genetics and genomic methods need training. Technician inquiries are explicit but role prerequisites are not verified.",
    ],
    sources: [
      {
        url: "https://www.med.upenn.edu/kathyliulab/",
        title: "Kathy Liu Lab research",
        claims: ["research", "environment"],
        evidence:
          "Investigates RNA regulatory enzymes, sex-chromosome homologs and molecular dependencies that expose cancer therapeutic vulnerabilities.",
      },
      {
        url: "https://www.med.upenn.edu/kathyliulab/lab-members.html",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "The official lab site lists two research-technician openings at Specialist A/B levels and explicitly invites contact with Dr. Liu. Role-specific qualifications, salary and commitment length are not supplied.",
      },
    ],
  }),
  researchLab({
    id: "jhu-xiao-yang",
    name: "Xiao Yang Lab",
    pi: "Xiao Yang",
    institution: "Johns Hopkins University",
    city: "Baltimore",
    state: "MD",
    fields: ["Bioengineering", "Regenerative medicine", "Neuroscience"],
    description:
      "Develops bioelectronics and biomaterials for body-machine interfaces, regenerative medicine and human neural organoids.",
    website: "https://xiaoyanglab.com/research/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Research-assistant and technician applicants with organoid, stem-cell and tissue-culture experience are invited to email an introduction, experience summary and CV. Confirm whether general culture experience suffices; no compensation or duration is specified.",
      sourceUrl: "https://xiaoyanglab.com/openings/",
    },
    applicationUrl: "https://xiaoyanglab.com/openings/",
    requirements: [
      "Research-assistant and technician applicants with organoid, stem-cell and tissue-culture experience are invited to email an introduction, experience summary and CV. Confirm whether general culture experience suffices; no compensation or duration is specified.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Cell-culture preparation provides a starting point, but the invitation specifically seeks organoid/stem-cell experience and the research includes device fabrication. These specialized requirements remain a gap to discuss before applying.",
    ],
    gaps: [
      "Cell-culture preparation provides a starting point, but the invitation specifically seeks organoid/stem-cell experience and the research includes device fabrication. These specialized requirements remain a gap to discuss before applying.",
    ],
    sources: [
      {
        url: "https://xiaoyanglab.com/research/",
        title: "Xiao Yang Lab research",
        claims: ["research", "environment"],
        evidence:
          "Develops bioelectronics and biomaterials for body-machine interfaces, regenerative medicine and human neural organoids.",
      },
      {
        url: "https://xiaoyanglab.com/openings/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Research-assistant and technician applicants with organoid, stem-cell and tissue-culture experience are invited to email an introduction, experience summary and CV. Confirm whether general culture experience suffices; no compensation or duration is specified.",
      },
    ],
  }),
  researchLab({
    id: "columbia-davachi",
    name: "Davachi Memory Lab",
    pi: "Lila Davachi",
    institution: "Columbia University",
    city: "New York",
    state: "NY",
    fields: ["Cognitive neuroscience", "Human research"],
    description:
      "Studies human memory encoding, consolidation and knowledge building using behavioral studies, fMRI, MEG and intracranial recordings.",
    website: "https://davachilab.psychology.columbia.edu/research-projects",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Prospective research assistants may email the PI and current lab manager with interests/experience, a CV and availability. Duties include recruitment, scheduling, behavioral data collection and basic analysis. Capacity depends on project needs; the invitation is not a confirmed vacancy.",
      sourceUrl: "https://davachilab.psychology.columbia.edu/content/join-us",
    },
    applicationUrl:
      "https://davachilab.psychology.columbia.edu/content/join-us",
    requirements: [
      "Prospective research assistants may email the PI and current lab manager with interests/experience, a CV and availability. Duties include recruitment, scheduling, behavioral data collection and basic analysis. Capacity depends on project needs; the invitation is not a confirmed vacancy.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Clinical communication, organization and data documentation transfer to recruitment and behavioral studies",
    ],
    gaps: [
      "Clinical communication, organization and data documentation transfer to recruitment and behavioral studies; memory paradigms, neuroimaging and analysis need training. RA inquiries are explicit without a published enrollment restriction.",
    ],
    sources: [
      {
        url: "https://davachilab.psychology.columbia.edu/research-projects",
        title: "Davachi Memory Lab research",
        claims: ["research", "environment"],
        evidence:
          "Studies human memory encoding, consolidation and knowledge building using behavioral studies, fMRI, MEG and intracranial recordings.",
      },
      {
        url: "https://davachilab.psychology.columbia.edu/content/join-us",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Prospective research assistants may email the PI and current lab manager with interests/experience, a CV and availability. Duties include recruitment, scheduling, behavioral data collection and basic analysis. Capacity depends on project needs; the invitation is not a confirmed vacancy.",
      },
    ],
  }),
  researchLab({
    id: "bu-erica-pratt",
    name: "Pratt Laboratory",
    pi: "Erica Pratt",
    institution: "Boston University",
    city: "Boston",
    state: "MA",
    fields: ["Cancer biology", "Bioengineering", "Molecular diagnostics"],
    description:
      "Develops liquid-biopsy cancer monitoring assays using digital PCR, sequencing, mass spectrometry and functional biomarker tools.",
    website: "https://ericaprattlab.com/research/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "The official join page explicitly recruits a full-time technician for liquid-biopsy projects. Its linked detailed position document could not be read, so degree, experience, compensation and minimum duration remain unverified; inquire with the PI before relying on eligibility.",
      sourceUrl: "https://ericaprattlab.com/join/",
      time: "full-time",
    },
    applicationUrl: "https://ericaprattlab.com/join/",
    requirements: [
      "The official join page explicitly recruits a full-time technician for liquid-biopsy projects. Its linked detailed position document could not be read, so degree, experience, compensation and minimum duration remain unverified; inquire with the PI before relying on eligibility.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Cancer and molecular preparation, PCR and sample documentation align with liquid-biopsy projects",
    ],
    gaps: [
      "Cancer and molecular preparation, PCR and sample documentation align with liquid-biopsy projects; digital PCR, multi-omics and microfluidic assay engineering need training. Full-time technician recruitment is explicit, while detailed prerequisites remain unavailable.",
    ],
    sources: [
      {
        url: "https://ericaprattlab.com/research/",
        title: "Pratt Laboratory research",
        claims: ["research", "environment"],
        evidence:
          "Develops liquid-biopsy cancer monitoring assays using digital PCR, sequencing, mass spectrometry and functional biomarker tools.",
      },
      {
        url: "https://ericaprattlab.com/join/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "The official join page explicitly recruits a full-time technician for liquid-biopsy projects. Its linked detailed position document could not be read, so degree, experience, compensation and minimum duration remain unverified; inquire with the PI before relying on eligibility.",
      },
    ],
  }),
  researchLab({
    id: "stonybrook-min-guk-cho",
    name: "Cho Lab",
    pi: "Min-Guk Cho",
    institution: "Stony Brook University",
    city: "Stony Brook",
    state: "NY",
    fields: ["Cancer biology", "Immunology", "DNA damage"],
    description:
      "Studies how damaged cancer genomes activate innate immune signaling and influence tumor immunity, including cGAS-STING and therapy-induced DNA damage.",
    website: "https://www.mgcholab.org/page/team",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "A June 2026 early recruitment notice invites technician candidates to send a CV and short availability/experience note. Wet-lab experience is preferred and training is described. It explicitly requires a later official university posting for any formal appointment; no salary or duration is provided.",
      sourceUrl: "https://www.mgcholab.org/post/1",
    },
    applicationUrl: "https://www.mgcholab.org/post/1",
    requirements: [
      "A June 2026 early recruitment notice invites technician candidates to send a CV and short availability/experience note. Wet-lab experience is preferred and training is described. It explicitly requires a later official university posting for any formal appointment; no salary or duration is provided.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Cancer, molecular assays, PCR/qPCR, Western blot and imaging closely match listed activities",
    ],
    gaps: [
      "Cancer, molecular assays, PCR/qPCR, Western blot and imaging closely match listed activities; mouse studies and new protocol development require training. The early technician inquiry is explicit but is not an official vacancy.",
    ],
    sources: [
      {
        url: "https://www.mgcholab.org/page/team",
        title: "Cho Lab research",
        claims: ["research", "environment"],
        evidence:
          "Studies how damaged cancer genomes activate innate immune signaling and influence tumor immunity, including cGAS-STING and therapy-induced DNA damage.",
      },
      {
        url: "https://www.mgcholab.org/post/1",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "A June 2026 early recruitment notice invites technician candidates to send a CV and short availability/experience note. Wet-lab experience is preferred and training is described. It explicitly requires a later official university posting for any formal appointment; no salary or duration is provided.",
      },
    ],
  }),
  researchLab({
    id: "harvard-ya-chieh-hsu",
    name: "Hsu Lab",
    pi: "Ya-Chieh Hsu",
    institution: "Harvard University",
    city: "Cambridge",
    state: "MA",
    fields: ["Stem cells", "Cell biology", "Regenerative biology"],
    description:
      "Studies cell communication and systemic regulation of skin stem cells during development, injury repair and regeneration.",
    website: "https://hsulaboratory.org/hsu-lab-research/",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "A dedicated research-assistant section lists a current opening and directs prospective applicants to Emily Andrews for details. No degree, prior-experience, salary or minimum commitment is stated; obtain the actual role requirements before applying.",
      sourceUrl: "https://hsulaboratory.org/join-the-hsu-lab/",
    },
    applicationUrl: "https://hsulaboratory.org/join-the-hsu-lab/",
    requirements: [
      "A dedicated research-assistant section lists a current opening and directs prospective applicants to Emily Andrews for details. No degree, prior-experience, salary or minimum commitment is stated; obtain the actual role requirements before applying.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Culture and imaging preparation transfer to cell communication and tissue repair",
    ],
    gaps: [
      "Culture and imaging preparation transfer to cell communication and tissue repair; lineage tracing, mouse genetics, surgery and single-cell sequencing require training. The assistant inquiry is explicit, with entry prerequisites unverified.",
    ],
    sources: [
      {
        url: "https://hsulaboratory.org/hsu-lab-research/",
        title: "Hsu Lab research",
        claims: ["research", "environment"],
        evidence:
          "Studies cell communication and systemic regulation of skin stem cells during development, injury repair and regeneration.",
      },
      {
        url: "https://hsulaboratory.org/join-the-hsu-lab/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "A dedicated research-assistant section lists a current opening and directs prospective applicants to Emily Andrews for details. No degree, prior-experience, salary or minimum commitment is stated; obtain the actual role requirements before applying.",
      },
    ],
  }),
  researchLab({
    id: "temple-rich-gang-li",
    name: "Rich Gang Li Lab",
    pi: "Rich Gang Li",
    institution: "Temple University",
    city: "Philadelphia",
    state: "PA",
    fields: ["Cardiovascular biology", "Regeneration", "Molecular biology"],
    description:
      "Investigates cardiac microenvironments after ischemic injury and signals between muscle and non-muscle cells that support heart repair.",
    website: "https://medicine.temple.edu/directory/rich-gang-li-phd",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "Research-assistant applicants need a BS/BA/MS in a biomedical research major; molecular-biology or physiology experience is preferred. The lab invites a CV/resume to the PI. Salary and duration are not listed, and this is a lab invitation rather than an official HR vacancy.",
      sourceUrl: "https://www.rgl-lab.com/open-positions",
    },
    applicationUrl: "https://www.rgl-lab.com/open-positions",
    requirements: [
      "Research-assistant applicants need a BS/BA/MS in a biomedical research major; molecular-biology or physiology experience is preferred. The lab invites a CV/resume to the PI. Salary and duration are not listed, and this is a lab invitation rather than an official HR vacancy.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: ["Molecular preparation supports cardiac-cell signaling work"],
    gaps: [
      "Molecular preparation supports cardiac-cell signaling work; ischemic animal models, transcriptomics and proteomics need training. Bachelor-level assistant inquiries are explicitly invited, with previous molecular experience preferred.",
    ],
    sources: [
      {
        url: "https://medicine.temple.edu/directory/rich-gang-li-phd",
        title: "Rich Gang Li Lab research",
        claims: ["research", "environment"],
        evidence:
          "Investigates cardiac microenvironments after ischemic injury and signals between muscle and non-muscle cells that support heart repair.",
      },
      {
        url: "https://www.rgl-lab.com/open-positions",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "Research-assistant applicants need a BS/BA/MS in a biomedical research major; molecular-biology or physiology experience is preferred. The lab invites a CV/resume to the PI. Salary and duration are not listed, and this is a lab invitation rather than an official HR vacancy.",
      },
    ],
  }),
  researchLab({
    id: "rutgers-el-ouaamari",
    name: "El Ouaamari Lab",
    pi: "Abdelfattah El Ouaamari",
    institution: "Rutgers University",
    city: "New Brunswick",
    state: "NJ",
    fields: ["Diabetes", "Cell biology", "Integrative physiology"],
    description:
      "Investigates organ-to-organ signals regulating pancreatic insulin-producing beta cells in mouse and human models of obesity and diabetes.",
    website:
      "https://molbiosci.rutgers.edu/faculty-research/faculty/faculty-detail/25-program-faculty/482-el-ouaamari-abdelfattah",
    availability: "inquiries",
    experience: "unknown",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "inquiry",
      compensation: "unknown",
      audience: "general",
      evidence:
        "The lab accepts research-assistant applications and explicitly seeks people at all levels in life sciences. An application form requests a CV and cover letter. Specific experience, pay and minimum duration are not published.",
      sourceUrl: "https://elouaamari.org/positions/",
    },
    applicationUrl: "https://elouaamari.org/positions/",
    requirements: [
      "The lab accepts research-assistant applications and explicitly seeks people at all levels in life sciences. An application form requests a CV and cover letter. Specific experience, pay and minimum duration are not published.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Cellular and molecular preparation transfers to beta-cell signaling and metabolic disease",
    ],
    gaps: [
      "Cellular and molecular preparation transfers to beta-cell signaling and metabolic disease; integrated physiology, animal work and specialized islet assays require training. Assistant applications at all levels are explicit.",
    ],
    sources: [
      {
        url: "https://molbiosci.rutgers.edu/faculty-research/faculty/faculty-detail/25-program-faculty/482-el-ouaamari-abdelfattah",
        title: "El Ouaamari Lab research",
        claims: ["research", "environment"],
        evidence:
          "Investigates organ-to-organ signals regulating pancreatic insulin-producing beta cells in mouse and human models of obesity and diabetes.",
      },
      {
        url: "https://elouaamari.org/positions/",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "The lab accepts research-assistant applications and explicitly seeks people at all levels in life sciences. An application form requests a CV and cover letter. Specific experience, pay and minimum duration are not published.",
      },
    ],
  }),
  researchLab({
    id: "yale-kirstin-meyer",
    name: "Meyer Lab",
    pi: "Kirstin Meyer",
    institution: "Yale University",
    city: "West Haven",
    state: "CT",
    fields: ["Gene regulation", "Stem cells", "Developmental biology"],
    description:
      "Studies signaling dynamics and chromatin mechanics controlling embryonic cell decisions with imaging, optogenetics and synthetic systems.",
    website: "https://meyerlab.yale.edu/",
    availability: "open",
    experience: "entry",
    eligibility: "unknown",
    eligibilityNote:
      "Confirm current capacity, prerequisites, compensation and required time commitment directly.",
    pathway: {
      kind: "entry-role",
      compensation: "paid",
      audience: "general",
      evidence:
        "A June 2026 official university advertisement offers a one-year full-time postgraduate associate appointment at $44,400, with flexible later start dates. A biology-related undergraduate degree is required; culture/molecular/imaging experience is desirable. Apply to the PI with a cover letter, CV and two references; confirm it remains unfilled.",
      sourceUrl:
        "https://scienceeducation.fas.harvard.edu/listings-post-bac-positions",
      time: "full-time",
      minimumMonths: 12,
    },
    applicationUrl:
      "https://scienceeducation.fas.harvard.edu/listings-post-bac-positions",
    requirements: [
      "A June 2026 official university advertisement offers a one-year full-time postgraduate associate appointment at $44,400, with flexible later start dates. A biology-related undergraduate degree is required; culture/molecular/imaging experience is desirable. Apply to the PI with a cover letter, CV and two references; confirm it remains unfilled.",
    ],
    applicationMethod:
      "Follow the official pathway instructions; confirm current capacity and eligibility.",
    strengths: [
      "Molecular, culture and microscopy preparation supports cell-fate studies",
    ],
    gaps: [
      "Molecular, culture and microscopy preparation supports cell-fate studies; CRISPR, single-molecule imaging, optogenetics and stem-cell engineering need training. The advertised one-year bachelor-level role treats prior laboratory experience as desirable.",
    ],
    sources: [
      {
        url: "https://meyerlab.yale.edu/",
        title: "Meyer Lab research",
        claims: ["research", "environment"],
        evidence:
          "Studies signaling dynamics and chromatin mechanics controlling embryonic cell decisions with imaging, optogenetics and synthetic systems.",
      },
      {
        url: "https://scienceeducation.fas.harvard.edu/listings-post-bac-positions",
        title: "Official entry pathway",
        claims: ["availability", "requirements"],
        evidence:
          "A June 2026 official university advertisement offers a one-year full-time postgraduate associate appointment at $44,400, with flexible later start dates. A biology-related undergraduate degree is required; culture/molecular/imaging experience is desirable. Apply to the PI with a cover letter, CV and two references; confirm it remains unfilled.",
      },
    ],
  }),
];
