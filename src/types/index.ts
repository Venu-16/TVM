export type DomainType =
  | "Generative AI & LLMs"
  | "Artificial Intelligence & ML"
  | "Full Stack Development"
  | "Data Science"
  | "Computer Vision"
  | "Natural Language Processing"
  | "Cloud & Backend Systems"
  | "Emerging Technologies";

export type ProjectCategoryType =
  | "Research & Implementation"
  | "Production AI System"
  | "Enterprise Web Platform"
  | "Applied Data Engineering"
  | "Algorithmic System";

export interface ProjectModule {
  title: string;
  description: string;
  deliverable: string;
}

export interface ProjectArchitectureStep {
  step: number;
  phase: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  domain: DomainType;
  projectType: ProjectCategoryType;
  tagline: string;
  problemStatement: string;
  existingSystem: {
    limitations: string[];
    gaps: string;
  };
  proposedSystem: {
    overview: string;
    advantages: string[];
    innovations: string[];
  };
  keyFeatures: string[];
  modules: ProjectModule[];
  technologies: string[];
  systemArchitecture: {
    overview: string;
    pipeline: ProjectArchitectureStep[];
  };
  expectedWorkflow: string[];
  suitableFor: string[];
  badge?: "Featured" | "Trending" | "High Impact" | "Popular";
}

export interface Domain {
  id: string;
  title: DomainType;
  description: string;
  icon: string;
  exampleTech: string[];
  accentColor: string;
  popularTopics: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: "Architecture & Development" | "Documentation & Research" | "Demo & Viva Readiness";
  description: string;
  deliverable: string;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Development" | "Documentation & Viva" | "Pricing & Delivery";
}

export interface TechItem {
  name: string;
  category: "Languages & Frameworks" | "AI & ML Engines" | "Databases & Storage" | "DevOps & Cloud";
  role: string;
  tag?: string;
}

export interface ContactFormData {
  name: string;
  college: string;
  branch: string;
  projectDomain: string;
  projectRequirement: string;
  whatsappNumber: string;
  email: string;
}
