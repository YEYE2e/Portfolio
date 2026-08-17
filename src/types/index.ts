export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
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
