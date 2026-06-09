import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon: Icon, children }) => (
  <section className="mb-12">
    <div className="flex items-center mb-6">
      <span className="text-blue-500 mr-3"><Icon size={28} strokeWidth={2} /></span>
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
    </div>
    <div className="pl-10 border-l-4 border-blue-100">
      {children}
    </div>
  </section>
);

export default Section;
