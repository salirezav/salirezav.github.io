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
        <BioSection bio={data.bio} />
        <EducationSection items={data.education} />
        <CurrentRoleSection role={data.currentRole} />
        <TechnicalSkillsSection skills={data.technicalSkills} />
        <RelatedExperienceSection items={data.relatedExperience} />
        <PublicationsSection items={data.publications} />
        {/* <ClassProjectsSection items={data.projects} /> */}
        {/* <TeachingSection items={data.teaching} /> */}
      </main>
      <Footer name={data.personalInfo.name} />
    </>
  );
};

export default Home;
