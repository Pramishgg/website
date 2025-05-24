import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import SkillTag from './SkillTag';

export type SkillVariant = 'web' | 'design' | 'ai' | 'tools' | 'soft';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; id: string }>;
  variant: SkillVariant;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, icon, skills, variant }) => {
  return (
    <div className="relative">
      <div className="flex items-center mb-6">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md text-primary-500 mr-4">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-3 ml-16">
        {skills.map((skill) => (
          <SkillTag key={skill.id} name={skill.name} variant={variant} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;