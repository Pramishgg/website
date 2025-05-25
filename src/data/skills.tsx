import React from 'react';
import { Newspaper, PenTool, BrainCircuit, Presentation, MessageSquare } from 'lucide-react';
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
    id: 'journalism',
    title: 'Journalism',
    icon: <Newspaper size={24} />,
    variant: 'web',
    skills: [
      { id: 'investigative', name: 'Investigative Journalism' },
      { id: 'tech-writing', name: 'Technology Writing' },
      { id: 'data-journalism', name: 'Data Journalism' },
      { id: 'feature-writing', name: 'Feature Writing' },
      { id: 'news-analysis', name: 'News Analysis' },
      { id: 'editorial', name: 'Editorial Writing' },
    ],
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    icon: <PenTool size={24} />,
    variant: 'design',
    skills: [
      { id: 'multimedia', name: 'Multimedia Storytelling' },
      { id: 'data-viz', name: 'Data Visualization' },
      { id: 'video-production', name: 'Video Production' },
      { id: 'podcasting', name: 'Podcasting' },
      { id: 'social-media', name: 'Social Media' },
    ],
  },
  {
    id: 'ai-expertise',
    title: 'AI Knowledge',
    icon: <BrainCircuit size={24} />,
    variant: 'ai',
    skills: [
      { id: 'ml-fundamentals', name: 'ML Fundamentals' },
      { id: 'nlp', name: 'Natural Language Processing' },
      { id: 'ai-ethics', name: 'AI Ethics' },
      { id: 'ai-policy', name: 'AI Policy' },
      { id: 'emerging-tech', name: 'Emerging Technologies' },
    ],
  },
  {
    id: 'research',
    title: 'Research',
    icon: <Presentation size={24} />,
    variant: 'tools',
    skills: [
      { id: 'data-analysis', name: 'Data Analysis' },
      { id: 'fact-checking', name: 'Fact Checking' },
      { id: 'source-verification', name: 'Source Verification' },
      { id: 'academic-research', name: 'Academic Research' },
      { id: 'trend-analysis', name: 'Trend Analysis' },
    ],
  },
  {
    id: 'communication',
    title: 'Communication',
    icon: <MessageSquare size={24} />,
    variant: 'soft',
    skills: [
      { id: 'interviewing', name: 'Expert Interviewing' },
      { id: 'public-speaking', name: 'Public Speaking' },
      { id: 'storytelling', name: 'Storytelling' },
      { id: 'technical-translation', name: 'Technical Translation' },
      { id: 'audience-engagement', name: 'Audience Engagement' },
    ],
  },
];