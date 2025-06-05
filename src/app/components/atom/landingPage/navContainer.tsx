import React from 'react';

const navContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full">{children}</div>
  );
};

export default navContainer;
