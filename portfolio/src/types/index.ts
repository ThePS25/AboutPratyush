export interface NavItem {
  id: string;
  label: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  highlights: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  logo?: string;
  logoIcon?: 'amazon';
  featured?: boolean;
  highlights: string[];
}

export interface AboutCard {
  id: string;
  title: string;
  content: string;
  icon: string;
}

export interface Achievement {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href: string;
  type: 'email' | 'link' | 'download';
}

export interface BootStep {
  id: string;
  text: string;
  duration: number;
}
