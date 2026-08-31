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
