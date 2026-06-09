import React from 'react';
import { Briefcase, Globe, Users } from 'lucide-react';
import { CurrentRole } from '../../types/portfolio';
import Section from '../ui/Section';
import Card from '../ui/Card';
import LabeledBulletList from '../ui/LabeledBulletList';
import RoleSubsection from '../ui/RoleSubsection';
import ImageCarousel from '../ui/ImageCarousel';

interface CurrentRoleSectionProps {
  role: CurrentRole;
}

const CurrentRoleSection: React.FC<CurrentRoleSectionProps> = ({ role }) => (
  <Section title="Current Role" icon={Briefcase}>
    <Card>
      <h3 className="text-2xl font-semibold text-gray-800">{role.title}</h3>
      <p className="text-lg text-gray-600 mb-1">{role.institution}</p>
      <p className="text-md text-gray-500 mb-8">{role.date} | {role.location}</p>

      <div className="space-y-6">
        <RoleSubsection title="Leadership & Project Management">
          <LabeledBulletList items={role.leadership} />
        </RoleSubsection>

        <RoleSubsection title="Principal Duties & Strategic Impact">
          <LabeledBulletList items={role.principalDuties} />
        </RoleSubsection>

        <RoleSubsection title="Active Projects">
          <p className="text-gray-800 font-medium mb-3">{role.activeProject.title}</p>
          <LabeledBulletList items={role.activeProject.points} />
        </RoleSubsection>
      </div>

      {role.industryOutreach && role.industryOutreach.length > 0 && (
        <div className="mt-8 pt-6 border-t-2 border-green-300">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border-2 border-green-200 shadow-lg">
            <div className="flex items-center mb-4">
              <Users size={24} className="text-green-600 mr-3" />
              <h4 className="text-xl font-bold text-gray-800">Industry Outreach</h4>
            </div>
            {role.industryOutreach.map((outreach, index) => (
              <div key={index} className="bg-white rounded-lg p-5 shadow-md border-l-4 border-green-500">
                <h5 className="text-lg font-semibold text-gray-800 mb-2">{outreach.title}</h5>
                <p className="text-md text-gray-700 mb-1">
                  <span className="font-semibold">Organization:</span> {outreach.organization}
                </p>
                <p className="text-sm text-gray-600 mb-3">{outreach.date} | {outreach.location}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {outreach.role}
                  </span>
                  <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                    {outreach.topic}
                  </span>
                </div>
                {outreach.highlights && outreach.highlights.length > 0 && (
                  <div className="mb-4">
                    <h6 className="text-sm font-semibold text-gray-700 mb-2">Highlights:</h6>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                      {outreach.highlights.map((highlight, hIndex) => (
                        <li key={hIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {outreach.images && outreach.images.length > 0 && (
                  <ImageCarousel images={outreach.images} />
                )}
                {outreach.links && outreach.links.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <h6 className="text-sm font-semibold text-gray-700 mb-2">Coverage:</h6>
                    <div className="flex flex-wrap gap-2">
                      {outreach.links.map((link, lIndex) => (
                        <a
                          key={lIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline text-sm font-medium transition-colors"
                        >
                          <Globe size={14} className="mr-1" />
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  </Section>
);

export default CurrentRoleSection;
