export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Aplicações Web' | 'Landing Pages' | 'Sites Institucionais' | 'Automações';
  shortDescription: string;
  fullDescription: string;
  problem: string;
  challenge?: string;
  solution: string;
  technologies: string[];
  tags: string[];
  metrics?: string;
  year?: string;
  clientType?: string;
  featured?: boolean;
  demoUrl?: string;
  aspectRatio?: 'wide' | 'standard';
  keyFeatures: string[];
  mockupTheme: {
    accentColor: string;
    bgStyle: string;
    tagline: string;
  };
  relatedSlugs?: string[];
}

export interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  icon: string;
  estimatedTimeline: string;
}

export interface TechCategory {
  category: string;
  description: string;
  items: Array<{
    name: string;
    level: string;
    experience: string;
    highlight?: boolean;
  }>;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverable: string;
  details: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
