import cssLogo from '@/assets/skills/css.png';
import htmlLogo from '@/assets/skills/html.png';
import javascriptLogo from '@/assets/skills/javascript.png';
import mongodbLogo from '@/assets/skills/mongodb.png';
import nodeLogo from '@/assets/skills/node.png';
import prismaLogo from '@/assets/skills/prisma-white.svg';
import reactLogo from '@/assets/skills/react.png';
import typescriptLogo from '@/assets/skills/typescript.png';

export interface TechLogo {
  id: string;
  name: string;
  logo: string;
}

export const TECH_STACK_LOGOS: TechLogo[] = [
  { id: 'html', name: 'HTML', logo: htmlLogo },
  { id: 'css', name: 'CSS', logo: cssLogo },
  { id: 'javascript', name: 'JavaScript', logo: javascriptLogo },
  { id: 'typescript', name: 'TypeScript', logo: typescriptLogo },
  { id: 'react', name: 'React', logo: reactLogo },
  { id: 'node', name: 'Node.js', logo: nodeLogo },
  { id: 'mongodb', name: 'MongoDB', logo: mongodbLogo },
  { id: 'prisma', name: 'Prisma', logo: prismaLogo },
];

/** Maps skill names in portfolio data to logo assets */
export const SKILL_LOGO_BY_NAME: Record<string, string> = {
  React: reactLogo,
  TypeScript: typescriptLogo,
  JavaScript: javascriptLogo,
  'HTML/CSS': htmlLogo,
  SCSS: cssLogo,
  'Node.js': nodeLogo,
  MongoDB: mongodbLogo,
  Prisma: prismaLogo,
};

export function getSkillLogo(skillName: string): string | undefined {
  return SKILL_LOGO_BY_NAME[skillName];
}
