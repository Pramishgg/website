import React from 'react';
import { Brain, Code, Database, Zap } from 'lucide-react';
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
    id: 'machine-learning',
    title: 'Machine Learning & AI',
    icon: <Brain size={24} />,
    variant: 'ai',
    skills: [
      { id: 'deep-learning', name: 'Deep Learning' },
      { id: 'neural-networks', name: 'Neural Networks' },
      { id: 'nlp', name: 'Natural Language Processing' },
      { id: 'computer-vision', name: 'Computer Vision' },
      { id: 'reinforcement-learning', name: 'Reinforcement Learning' },
      { id: 'mlops', name: 'MLOps' },
    ],
  },
  {
    id: 'programming',
    title: 'Programming & Frameworks',
    icon: <Code size={24} />,
    variant: 'web',
    skills: [
      { id: 'python', name: 'Python' },
      { id: 'tensorflow', name: 'TensorFlow' },
      { id: 'pytorch', name: 'PyTorch' },
      { id: 'scikit-learn', name: 'Scikit-learn' },
      { id: 'huggingface', name: 'Hugging Face' },
      { id: 'fastapi', name: 'FastAPI' },
    ],
  },
  {
    id: 'data-tools',
    title: 'Data & Cloud Platforms',
    icon: <Database size={24} />,
    variant: 'tools',
    skills: [
      { id: 'aws', name: 'AWS SageMaker' },
      { id: 'gcp', name: 'Google Cloud AI' },
      { id: 'azure', name: 'Azure ML' },
      { id: 'docker', name: 'Docker' },
      { id: 'kubernetes', name: 'Kubernetes' },
      { id: 'spark', name: 'Apache Spark' },
    ],
  },
  {
    id: 'specializations',
    title: 'AI Specializations',
    icon: <Zap size={24} />,
    variant: 'design',
    skills: [
      { id: 'llm', name: 'Large Language Models' },
      { id: 'generative-ai', name: 'Generative AI' },
      { id: 'ai-strategy', name: 'AI Strategy' },
      { id: 'model-optimization', name: 'Model Optimization' },
      { id: 'ai-ethics', name: 'AI Ethics' },
      { id: 'ai-consulting', name: 'AI Consulting' },
    ],
  },
];