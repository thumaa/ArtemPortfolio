
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  stack: string[];
  highlights: string[];
  link?: string;
  image?: string;
  videoUrl?: string; // Loom or YouTube embed URL
  featured?: boolean;
  status?: string; // e.g., "Active", "Prototype", "In Development"
}

export interface CaseStudy {
  id: string;
  title: string;
  problem: string;
  approach: string;
  keyLevers: string[];
  outcome: string;
  improvement: string;
  metric?: string; // Short stat for display (e.g. "+22% ARPU")
}

export interface Note {
  id: string;
  title: string;
  date: string;
  summary: string;
  readTime: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  path: string;
}
