import React from 'react';
import { Code } from 'lucide-react';
import { Project } from '../../types/portfolio';
import Section from '../ui/Section';
import Card from '../ui/Card';

interface ClassProjectsSectionProps {
  items: Project[];
}

const ClassProjectsSection: React.FC<ClassProjectsSectionProps> = ({ items }) => (
  <Section title="Class Projects" icon={Code}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item, index) => (
        <Card key={index}>
          <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
          <p className="text-md text-gray-500 mb-3">{item.course} ({item.date})</p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {item.points.map((point, pIndex) => (
              <li key={pIndex}>{point}</li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  </Section>
);

export default ClassProjectsSection;
