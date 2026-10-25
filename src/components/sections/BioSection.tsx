import React from 'react';
import { BookOpen } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';

interface BioSectionProps {
  bio: string;
}

const BioSection: React.FC<BioSectionProps> = ({ bio }) => (
  <Section title="Bio" icon={BookOpen}>
    <Card>
      <p className="text-gray-700 leading-relaxed">{bio}</p>
    </Card>
  </Section>
);

export default BioSection;
