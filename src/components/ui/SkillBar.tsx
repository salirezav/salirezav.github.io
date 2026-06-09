import React from 'react';
import { SkillLevel } from '../../types/portfolio';

interface SkillBarProps {
  name: string;
  level: SkillLevel;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level }) => {
  const levelMap: Record<SkillLevel, { width: string; color: string }> = {
    Advanced: { width: 'w-full', color: 'bg-blue-500' },
    Intermediate: { width: 'w-2/3', color: 'bg-blue-400' },
    Basic: { width: 'w-1/3', color: 'bg-blue-300' },
  };
  const { width, color } = levelMap[level] || levelMap.Basic;

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700">{name}</span>
        <span className="text-sm font-medium text-gray-500">{level}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className={`h-2.5 rounded-full ${color} ${width}`} style={{ transition: 'width 0.5s ease-in-out' }} />
      </div>
    </div>
  );
};

export default SkillBar;
