import { ServiceItem } from "@/types";

export const servicesData: ServiceItem[] = [
  // Pillar 1: Architecture & Development
  {
    id: "serv-1",
    title: "Project Idea Selection",
    category: "Architecture & Development",
    description:
      "Guidance in selecting a technically sound, current-generation project topic aligned with your academic department requirements and career aspirations.",
    deliverable: "Curated feasibility brief & project scope definition document.",
    badge: "Ideation",
  },
  {
    id: "serv-2",
    title: "Problem Statement Formulation",
    category: "Architecture & Development",
    description:
      "Framing a rigorous, academic-grade problem statement that articulates the societal/industrial challenge and motivates technical intervention.",
    deliverable: "Clear 1-page formalized problem statement specification.",
  },
  {
    id: "serv-3",
    title: "Existing System Analysis",
    category: "Architecture & Development",
    description:
      "Deep-dive technical review of current commercial tools, baseline algorithms, and published approaches highlighting tangible research gaps.",
    deliverable: "Literature comparison matrix and limitations breakdown.",
  },
  {
    id: "serv-4",
    title: "Proposed System Design",
    category: "Architecture & Development",
    description:
      "Architecting a structured solution that addresses existing limitations with quantifiable algorithmic and structural advantages.",
    deliverable: "Proposed system advantages, feature breakdown, and scope.",
  },
  {
    id: "serv-5",
    title: "Architecture & UML Design",
    category: "Architecture & Development",
    description:
      "Comprehensive system architecture diagrams, data flow diagrams (DFD Level 0-2), sequence diagrams, ER models, and component flowcharts.",
    deliverable: "High-resolution vector diagrams in IEEE/college documentation format.",
    badge: "Architecture",
  },
  {
    id: "serv-6",
    title: "Complete Software Development",
    category: "Architecture & Development",
    description:
      "Full hands-on engineering assistance to build your application using modern, industry-standard languages, frameworks, and database architectures.",
    deliverable: "Fully working application with backend, frontend, and data pipeline.",
    badge: "Core Engineering",
  },
  {
    id: "serv-7",
    title: "Clean, Well-Commented Source Code",
    category: "Architecture & Development",
    description:
      "Structured repository containing clean, modular code with thorough inline docstrings and PEP8/ESLint formatting to make review effortless.",
    deliverable: "Version-controlled Git repository with structured folders.",
  },
  {
    id: "serv-8",
    title: "Project Setup & Environment Support",
    category: "Architecture & Development",
    description:
      "Assistance in setting up dependencies, virtual environments (conda, venv), Docker containers, and database connections on your local machine.",
    deliverable: "Step-by-step README, setup scripts, and remote setup verification.",
  },

  // Pillar 2: Documentation & Research
  {
    id: "serv-9",
    title: "Abstract Preparation",
    category: "Documentation & Research",
    description:
      "Precise, publication-standard project abstract summarizing the motivation, methodology, experimental results, and conclusion.",
    deliverable: "300-word polished abstract adhering to university formatting.",
    badge: "Academic Writing",
  },
  {
    id: "serv-10",
    title: "Project Documentation Support",
    category: "Documentation & Research",
    description:
      "End-to-end guidance in compiling your university final-year project report, following strict university guidelines (IEEE / Anna Univ / VTU / JNTU / KTU).",
    deliverable: "Editable report draft (DOCX/LaTeX) with references and index.",
    badge: "Documentation",
  },
  {
    id: "serv-11",
    title: "PPT Presentation Preparation",
    category: "Documentation & Research",
    description:
      "Professional slide deck designed with modern typography, crisp architecture visuals, tabular results, and structured speaking notes for project reviews.",
    deliverable: "Editable 20-25 slide presentation with presenter cues.",
  },
  {
    id: "serv-12",
    title: "Conference Paper Support",
    category: "Documentation & Research",
    description:
      "Mentorship in structuring, formatting, and drafting an IEEE-format research paper based on your project's methodology and experimental results.",
    deliverable: "IEEE double-column paper template draft with mathematical formulations.",
    badge: "Research",
  },
  {
    id: "serv-13",
    title: "Plagiarism Report Assistance",
    category: "Documentation & Research",
    description:
      "Assistance with similarity indexing and rephrasing guidance to ensure your written documentation adheres to academic integrity thresholds.",
    deliverable: "Similarity percentage breakdown and citation improvement guide.",
  },

  // Pillar 3: Demo & Viva Readiness
  {
    id: "serv-14",
    title: "Live Project Demo Guidance",
    category: "Demo & Viva Readiness",
    description:
      "Rehearsal coaching for your live project execution during the final review, including edge-case handling and smooth presentation transitions.",
    deliverable: "Step-by-step demonstration walkthrough script and troubleshooting guide.",
    badge: "Demonstration",
  },
  {
    id: "serv-15",
    title: "Viva Questions & Answers Preparation",
    category: "Demo & Viva Readiness",
    description:
      "Curated repository of the top 50+ prospective viva voce questions covering algorithmic complexity, architectural trade-offs, and design patterns.",
    deliverable: "Comprehensive Viva Q&A defense document with technical justifications.",
    badge: "Viva Defense",
  },
  {
    id: "serv-16",
    title: "Technical Deep-Dive Explanation",
    category: "Demo & Viva Readiness",
    description:
      "One-on-one conceptual explanation sessions explaining how the algorithms work, why specific frameworks were chosen, and how data flows through the system.",
    deliverable: "Interactive review session and concept summary sheet.",
  },
  {
    id: "serv-17",
    title: "Module-Wise Code Walkthrough",
    category: "Demo & Viva Readiness",
    description:
      "Detailed, line-by-line understanding of your codebase so you can answer any examiner question regarding specific functions, libraries, or database queries.",
    deliverable: "Annotated code architecture guide explaining key functions and models.",
  },
];
