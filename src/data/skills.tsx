import React from 'react';
import { Monitor, Palette, BrainCircuit, Wrench, Heart } from 'lucide-react';
import { SkillVariant } from '../components/skills/SkillCategory';

interface Skill {
  id: string;
  name: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  variant: SkillVariant;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: <Monitor size={24} />,
    variant: 'web',
    skills: [
      { id: 'javascript', name: 'JavaScript (ES6+)' },
      { id: 'typescript', name: 'TypeScript' },
      { id: 'react', name: 'React' },
      { id: 'next', name: 'Next.js' },
      { id: 'vue', name: 'Vue.js' },
      { id: 'node', name: 'Node.js' },
      { id: 'graphql', name: 'GraphQL' },
      { id: 'tailwind', name: 'Tailwind CSS' },
      { id: 'css3', name: 'CSS3' },
      { id: 'html5', name: 'HTML5' },
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    icon: <Palette size={24} />,
    variant: 'design',
    skills: [
      { id: 'figma', name: 'Figma' },
      { id: 'responsive-design', name: 'Responsive Design' },
      { id: 'user-centered-design', name: 'User Centered Design' },
      { id: 'wireframing', name: 'Wireframing' },
      { id: 'prototyping', name: 'Prototyping' },
      { id: 'sketch', name: 'Sketch UI' },
    ],
  },
  {
    id: 'automation-ai',
    title: 'Automation & AI',
    icon: <BrainCircuit size={24} />,
    variant: 'ai',
    skills: [
      { id: 'python', name: 'Python' },
      { id: 'tensorflow', name: 'TensorFlow' },
      { id: 'nlp', name: 'NLP' },
      { id: 'ai-agents', name: 'AI Agents' },
      { id: 'computer-vision', name: 'Computer Vision' },
      { id: 'machine-learning', name: 'Machine Learning' },
    ],
  },
  {
    id: 'tools-platforms',
    title: 'Tools & Platforms',
    icon: <Wrench size={24} />,
    variant: 'tools',
    skills: [
      { id: 'git', name: 'Git & GitHub' },
      { id: 'docker', name: 'Docker' },
      { id: 'firebase', name: 'Firebase' },
      { id: 'aws', name: 'AWS' },
      { id: 'vercel', name: 'Vercel' },
      { id: 'ci-cd', name: 'CI/CD' },
    ],
  },
  {
    id: 'soft-skills',
    title: 'Soft Skills',
    icon: <Heart size={24} />,
    variant: 'soft',
    skills: [
      { id: 'problem-solving', name: 'Problem Solving' },
      { id: 'collaboration', name: 'Collaboration' },
      { id: 'communication', name: 'Communication' },
      { id: 'agile', name: 'Agile Methodologies' },
      { id: 'project-management', name: 'Project Management' },
    ],
  },
];