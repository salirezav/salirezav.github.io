import React from 'react';
import { Briefcase } from 'lucide-react';
import { RelatedExperience } from '../../types/portfolio';
import Section from '../ui/Section';
import Accordion from '../ui/Accordion';

interface RelatedExperienceSectionProps {
  items: RelatedExperience[];
}

const RelatedExperienceSection: React.FC<RelatedExperienceSectionProps> = ({ items }) => (
  <Section title="Related Experience" icon={Briefcase}>
    {items.map((item, index) => (
      <Accordion
        key={index}
        title={item.title}
        subtitle={`${item.institution}${item.location ? `, ${item.location}` : ''}`}
      >
        <div className="p-4">
          {item.supervisor && (
            <p className="text-md text-gray-600 mb-4">Under the Direction of {item.supervisor}</p>
          )}
          {item.department && <p className="text-md text-gray-600 mb-4">{item.department}</p>}
          {item.periods.map((period, pIndex) => (
            <div key={pIndex} className={pIndex > 0 ? 'mt-6 pt-4 border-t border-gray-200' : ''}>
              <p className="text-sm font-semibold text-gray-500 mb-3">{period.date}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {period.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Accordion>
    ))}
  </Section>
);

export default RelatedExperienceSection;
