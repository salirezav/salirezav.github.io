import React from 'react';

interface RoleSubsectionProps {
  title: string;
  children: React.ReactNode;
}

const RoleSubsection: React.FC<RoleSubsectionProps> = ({ title, children }) => (
  <div className="rounded-lg border border-blue-200 bg-blue-50/60 p-5 shadow-sm">
    <h4 className="text-lg font-bold text-blue-900 border-b border-blue-200 pb-2 mb-4">
      {title}
    </h4>
    {children}
  </div>
);

export default RoleSubsection;
