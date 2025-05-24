import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-slate-800 inline-block">
        {children}
        <div className="h-1 w-12 bg-purple-600 mx-auto mt-2"></div>
      </h2>
    </div>
  );
};

export default SectionTitle;