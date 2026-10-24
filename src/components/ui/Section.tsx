import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useRevealOnce } from '../../hooks/useRevealOnce';

interface SectionProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon: Icon, children }) => {
  const sectionRef = useRevealOnce<HTMLElement>();

  return (
    <section ref={sectionRef} className="mb-12">
      <div className="flex items-center mb-6">
        <span className="mr-3 inline-flex rounded-[10px] bg-[#eff6ff] p-1.5 text-[#2563eb] shadow-[inset_0_0_0_1px_#dbeafe]">
          <Icon size={28} strokeWidth={2} />
        </span>
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
      </div>
      <div className="section-rail pl-10 border-l-2 border-blue-100">
        {children}
      </div>
    </section>
  );
};

export default Section;
