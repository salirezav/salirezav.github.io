import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Education } from '../../types/portfolio';
import Section from '../ui/Section';
import Card from '../ui/Card';

interface EducationSectionProps {
  items: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ items }) => (
  <Section title="Education" icon={GraduationCap}>
    {items.map((item, index) => (
      <Card key={index} className="border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold text-gray-800">{item.degree}</h3>
        <p className="text-lg text-gray-600">{item.institution}</p>
        <p className="text-sm text-gray-500 mb-2">{item.date} | {item.location} | GPA: {item.gpa}</p>
        {item.thesis && <p className="text-gray-700 italic">Thesis title: {item.thesis}</p>}
      </Card>
    ))}
  </Section>
);

export default EducationSection;
