export interface Project {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  role: string;
  techStack: string[];
  whatIBuilt: string[];
  outcome: string[];
  whyItMatters: string;
  github?: string;
  live?: string;
  npm?: string;
  demo?: string;
  featured?: boolean;
  status?: "published" | "in-development";
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  techStack?: string[];
}

export interface Publication {
  authors: string;
  year: number;
  title: string;
  venue: string;
  details?: string;
  url?: string;
}

export interface TeachingEntry {
  institution: string;
  period: string;
  courses: string[];
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface NavItem {
  label: string;
  href: string;
}
