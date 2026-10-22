import React from 'react';
import { portfolioData } from '../data/portfolioData';
import Footer from '../components/layout/Footer';
import BioSection from '../components/sections/BioSection';
import EducationSection from '../components/sections/EducationSection';
import CurrentRoleSection from '../components/sections/CurrentRoleSection';
import TechnicalSkillsSection from '../components/sections/TechnicalSkillsSection';
import RelatedExperienceSection from '../components/sections/RelatedExperienceSection';
import PublicationsSection from '../components/sections/PublicationsSection';
// import ClassProjectsSection from '../components/sections/ClassProjectsSection';
// import TeachingSection from '../components/sections/TeachingSection';

const Home: React.FC = () => {
  const data = portfolioData;

  return (
    <>
      <main className="max-w-5xl mx-auto p-4 md:p-8">
        <CurrentRoleSection role={data.currentRole} />
        <BioSection bio={data.bio} />
        <TechnicalSkillsSection skills={data.technicalSkills} />
        <RelatedExperienceSection items={data.relatedExperience} />
        {/* <ClassProjectsSection items={data.projects} /> */}
        {/* <TeachingSection items={data.teaching} /> */}
        <PublicationsSection items={data.publications} />
        <EducationSection items={data.education} />
      </main>
      <Footer name={data.personalInfo.name} />
    </>
  );
};

export default Home;
