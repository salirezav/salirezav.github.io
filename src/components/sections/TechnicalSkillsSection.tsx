import React from 'react';
import { Brain } from 'lucide-react';
import { SkillGroup } from '../../types/portfolio';
import Section from '../ui/Section';
import Card from '../ui/Card';
import SkillBar from '../ui/SkillBar';

interface TechnicalSkillsSectionProps {
  skills: SkillGroup[];
}

const TechnicalSkillsSection: React.FC<TechnicalSkillsSectionProps> = ({ skills }) => (
  <Section title="Technical Skills" icon={Brain}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((group) => {
        const IconComponent = group.icon;
        return (
          <Card key={group.category} className="flex-1">
            <div className="flex items-center mb-4">
              <span className="text-blue-500 mr-2"><IconComponent size={20} /></span>
              <h3 className="text-xl font-semibold text-gray-800">{group.category}</h3>
            </div>
            <div>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </Card>
        );
      })}
    </div>
  </Section>
);

export default TechnicalSkillsSection;
