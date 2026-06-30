import type {
  AboutCard,
  Achievement,
  BootStep,
  ContactLink,
  ExperienceItem,
  NavItem,
  Project,
  SkillCategory,
} from '@/types';

import aiCareerPilot from '@/assets/ai-career-pilot.png';
import catchUpLogo from '@/assets/culogo.png';
import projectPlaceholder from '@/assets/project-placeholder.svg';
import sp18Logo from '@/assets/sp18logo.png';
import traasdiImg from '@/assets/traasdi.png';
import zoophiiLogo from '@/assets/zoophiiLogo.png';

export const SITE = {
  name: 'Pratyush Srivastava',
  title: 'Software Development Engineer',
  company: 'Amazon',
  email: 'pratyush2503@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pratyush-srivastava-2a7b1512a/',
  github: 'https://github.com/ThePS25',
  resumeUrl: import.meta.env.VITE_RESUME_URL ?? '',
} as const;

export const HERO_SUBTITLES = [
  'Building Scalable Applications',
  'Frontend Engineering',
  'System Design Enthusiast',
  'AI Product Builder',
] as const;

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience', shortLabel: 'Exp' },
  { id: 'achievements', label: 'Stats' },
  { id: 'contact', label: 'Contact' },
];

export const BOOT_STEPS: BootStep[] = [
  { id: 'init', text: 'Initializing Portfolio...', duration: 900 },
  { id: 'projects', text: 'Loading Projects...', duration: 800 },
  { id: 'experience', text: 'Loading Experience...', duration: 800 },
  { id: 'ready', text: 'System Ready', duration: 600 },
];

export const ABOUT_CARDS: AboutCard[] = [
  {
    id: 'experience',
    title: 'Experience',
    icon: '◈',
    content:
      'Software Development Engineer at Amazon, Bangalore — building scalable backend systems and product-facing features on AWS. Previously Frontend Engineer at Spark Eighteen, delivering SaaS HR platforms for 5,000+ users.',
  },
  {
    id: 'technologies',
    title: 'Technologies',
    icon: '⬡',
    content:
      'React, TypeScript, Java, Node.js, AWS, PostgreSQL, MongoDB, and modern system design patterns. I ship across the stack — from polished UIs to resilient microservices.',
  },
  {
    id: 'interests',
    title: 'Interests',
    icon: '◎',
    content:
      'System design, AI product building, theatre, poetry, music, and business podcasts. I blend creative thinking with rigorous engineering.',
  },
  {
    id: 'journey',
    title: 'Career Journey',
    icon: '→',
    content:
      'B.Tech in Computer and Communication Engineering from LNMIIT Jaipur (2024). Led theatre society, managed hospitality for cultural events, and grew from intern to SDE at Amazon.',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'React', level: 92 },
      { name: 'TypeScript', level: 90 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'SCSS', level: 88 },
      { name: 'Framer Motion', level: 85 },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'Node.js', level: 82 },
      { name: 'REST APIs', level: 90 },
      { name: 'Microservices', level: 88 },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 82 },
      { name: 'DynamoDB', level: 78 },
      { name: 'Prisma', level: 80 },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud',
    skills: [
      { name: 'AWS', level: 88 },
      { name: 'Docker', level: 75 },
      { name: 'CI/CD', level: 82 },
      { name: 'Monitoring', level: 85 },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    skills: [
      { name: 'JavaScript', level: 93 },
      { name: 'TypeScript', level: 90 },
      { name: 'Java', level: 90 },
      { name: 'Python', level: 78 },
    ],
  },
  {
    id: 'system-design',
    title: 'System Design',
    skills: [
      { name: 'Distributed Systems', level: 85 },
      { name: 'Scalability', level: 88 },
      { name: 'API Design', level: 90 },
      { name: 'Architecture', level: 86 },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'ai-referral',
    title: 'AI Referral Copilot',
    description:
      'An AI-powered platform that generates personalized referral request messages based on resume, job description, company, and recruiter details.',
    image: projectPlaceholder,
    technologies: ['React', 'TypeScript', 'Gemini API', 'Vercel'],
    githubUrl: 'https://github.com/ThePS25/ai-referral-frontend',
    demoUrl: 'https://yourownreferralassistant.vercel.app/',
    highlights: [
      'Tailored outreach messaging',
      'Resume & JD parsing',
      'Improved referral success rates',
    ],
  },
  {
    id: 'pulseiq',
    title: 'PulseIQ',
    description:
      'Real-time website analytics platform with traffic monitoring, visitor insights, engagement tracking, and performance metrics.',
    image: projectPlaceholder,
    technologies: ['React', 'TypeScript', 'Node.js', 'Charts'],
    githubUrl: 'https://github.com/ThePS25/pulseiq-frontend',
    demoUrl: 'https://pulseiq-webstats.vercel.app/',
    highlights: [
      'Interactive analytics dashboard',
      'Real-time traffic monitoring',
      'Engagement & performance metrics',
    ],
  },
  {
    id: 'designscape',
    title: 'System Design Playground',
    description:
      'Interactive platform for learning and visualizing distributed systems, scalable architectures, and system design concepts.',
    image: projectPlaceholder,
    technologies: ['React', 'TypeScript', 'Canvas', 'Vercel'],
    githubUrl: 'https://github.com/ThePS25/system-design-playground-frontend',
    demoUrl: 'https://my-designscape-playground.vercel.app/',
    highlights: [
      'Visual system diagrams',
      'Interactive simulations',
      'Learning-focused UX',
    ],
  },
  {
    id: 'catchup',
    title: 'CatchUp',
    description:
      'Full-stack social platform with user profiles, posts, comments, and real-time engagement built on the MERN stack.',
    image: catchUpLogo,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/ThePS25/catchup-social-source-codes.git',
    demoUrl: 'https://catchupsocial.netlify.app/',
    highlights: [
      'Social feed & interactions',
      'Auth & user profiles',
      'Responsive MERN architecture',
    ],
  },
  {
    id: 'zoophii',
    title: 'Zoophii',
    description:
      'Pet supplies e-commerce platform built on the MERN stack with product listing, cart, checkout, and payment integration.',
    image: zoophiiLogo,
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/ThePS25/E-Commerce.git',
    demoUrl: 'https://zoophii.onrender.com/',
    highlights: [
      'Full e-commerce checkout flow',
      'Payment gateway integration',
      'Product catalog & cart management',
    ],
  },
  {
    id: 'ai-career',
    title: 'AI Career Copilot',
    description:
      'AI-powered career assistant with resume analysis, ATS feedback, job recommendations, and interview preparation reports.',
    image: aiCareerPilot,
    technologies: ['React', 'TypeScript', 'Gemini API', 'Vercel'],
    githubUrl: 'https://github.com/ThePS25/ai-career-frontend.git',
    demoUrl: 'https://yourowncareerguide.vercel.app/',
    highlights: [
      'ATS resume scoring',
      'Personalized job & course recommendations',
      'Interview prep report generation',
    ],
  },
  {
    id: 'traasdi',
    title: 'Traasdi',
    description:
      'React project presenting narratives from survivors of the India–Pakistan partition through collected stories and data.',
    image: traasdiImg,
    technologies: ['React', 'JavaScript', 'Netlify'],
    githubUrl: 'https://github.com/ThePS25/traasdi.git',
    demoUrl: 'https://velvety-narwhal-6512a0.netlify.app/',
    highlights: [
      'Story-driven data presentation',
      'Clean narrative-focused UI',
      'Responsive static deployment',
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'amazon',
    company: 'Amazon',
    role: 'Software Development Engineer',
    period: 'June 2025 — Present',
    location: 'Bangalore, India',
    logoIcon: 'amazon',
    featured: true,
    highlights: [
      'Built scalable ingestion architecture for AWS Q Business using Java microservices, aggregating 10+ enterprise datasets.',
      'Refactored legacy ingestion into a modular multi-layer pipeline, reducing onboarding effort by 40%.',
      'Expanded platform to Dublin and Sydney regions, reducing latency for global users.',
      'Modernized FBA backend services — 47% performance improvement and 30% test coverage increase.',
      'Owned deployments, monitoring, and on-call for distributed microservices.',
    ],
  },
  {
    id: 'spark18-fe',
    company: 'Spark Eighteen Lifestyle Pvt. Ltd.',
    role: 'Frontend Engineer',
    period: 'August 2024 — June 2025',
    location: 'India',
    logo: sp18Logo,
    highlights: [
      'Led SaaS HR platform development serving 5,000+ users.',
      'Built modular React + TypeScript components with Ant Design, reducing dev time by 20%.',
      'Refactored frontend for scalability, reducing bug reports by 55%.',
    ],
  },
  {
    id: 'spark18-intern',
    company: 'Spark Eighteen Lifestyle Pvt. Ltd.',
    role: 'Full Stack Engineering Intern',
    period: 'February 2024 — August 2024',
    location: 'India',
    logo: sp18Logo,
    highlights: [
      'Enhanced frontend modularity and scalability through codebase refactoring.',
      'Implemented responsive designs with React, TypeScript, and REST APIs.',
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'projects', label: 'Projects Built', value: 15, suffix: '+' },
  { id: 'tech', label: 'Technologies Used', value: 28, suffix: '+' },
  { id: 'years', label: 'Years Coding', value: 3, suffix: '+' },
  { id: 'problems', label: 'Problems Solved', value: 700, suffix: '+' },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'pratyush-srivastava',
    href: SITE.linkedin,
    type: 'link',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'ThePS25',
    href: SITE.github,
    type: 'link',
  },
  {
    id: 'email',
    label: 'Email',
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    type: 'email',
  },
  {
    id: 'resume',
    label: 'Resume',
    value: 'Download PDF',
    href: SITE.resumeUrl,
    type: 'download',
  },
];

export { aiCareerPilot };
