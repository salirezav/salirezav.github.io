import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, subtitle, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg mb-4 shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
      >
        <span className="font-semibold text-lg text-gray-700">{title}</span>
        <div className="flex items-center">
          <span className="text-sm text-gray-500 mr-4">{subtitle}</span>
          {isOpen ? <ChevronUp size={20} className="text-gray-600" /> : <ChevronDown size={20} className="text-gray-600" />}
        </div>
      </button>
      {isOpen && (
        <div className="p-4 border-t border-gray-200 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
