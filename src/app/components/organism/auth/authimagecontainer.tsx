import React from 'react';

const AuthImageContainer = ({ authImage, className }: { authImage: string; className?: string }) => {
  return (
    <div className={`h-full ${className}`}>
      <img src={authImage} className="rounded-xl h-full w-full object-cover" alt="page img" />
    </div>
  );
};

export default AuthImageContainer;