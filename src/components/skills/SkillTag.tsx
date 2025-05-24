import React from 'react';
import { SkillVariant } from './SkillCategory';

interface SkillTagProps {
  name: string;
  variant: SkillVariant;
}

const SkillTag: React.FC<SkillTagProps> = ({ name, variant }) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'web':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'design':
        return 'bg-purple-50 text-purple-600 border-purple-200';
      case 'ai':
        return 'bg-green-50 text-green-600 border-green-200';
      case 'tools':
        return 'bg-orange-50 text-orange-600 border-orange-200';
      case 'soft':
        return 'bg-teal-50 text-teal-600 border-teal-200';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className={`px-4 py-2 rounded-full border ${getVariantClasses()} text-sm font-medium`}>
      {name}
    </div>
  );
};

export default SkillTag;