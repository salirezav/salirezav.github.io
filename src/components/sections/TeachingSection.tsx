import React from 'react';
import { Users } from 'lucide-react';
import { Teaching } from '../../types/portfolio';
import Section from '../ui/Section';
import Card from '../ui/Card';

interface TeachingSectionProps {
  items: Teaching[];
}

const TeachingSection: React.FC<TeachingSectionProps> = ({ items }) => (
  <Section title="Teaching Assistantship" icon={Users}>
    <div className="space-y-4">
      {items.map((item, index) => (
        <Card key={index} className="border-l-4 border-gray-300">
          <h3 className="font-semibold text-gray-800">{item.course}</h3>
          <p className="text-sm text-gray-500 mb-2">{item.date}</p>
          <p className="text-gray-700">{item.role}</p>
        </Card>
      ))}
    </div>
  </Section>
);

export default TeachingSection;
