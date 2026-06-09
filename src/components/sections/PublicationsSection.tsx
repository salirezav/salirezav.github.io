import React from 'react';
import { BookOpen } from 'lucide-react';
import { Publication } from '../../types/portfolio';
import Section from '../ui/Section';
import Card from '../ui/Card';

interface PublicationsSectionProps {
  items: Publication[];
}

const PublicationsSection: React.FC<PublicationsSectionProps> = ({ items }) => (
  <Section title="Academic Publications" icon={BookOpen}>
    <div className="space-y-6">
      {items.map((item, index) => (
        <Card key={index}>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h3>
          <p className="text-sm text-gray-600 mb-2">{item.authors}</p>
          <p className="text-sm text-gray-500 mb-3 italic">{item.venue}</p>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-sm transition-colors"
            >
              {item.linkText || 'Read More'} &rarr;
            </a>
          )}
        </Card>
      ))}
    </div>
  </Section>
);

export default PublicationsSection;
