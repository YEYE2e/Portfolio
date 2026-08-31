export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  role?: string;
  year?: string;
  tags: string[];
  challenges?: string[];
  results?: string[];
  architecture?: string[];
  link?: string;
  repo?: string;
}

export interface Trait {
  number: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

