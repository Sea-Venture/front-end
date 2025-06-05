import React from 'react'
import LogoImage from '../../atom/dashboard/navbar/logoImage'
import LogoText from '../../atom/dashboard/navbar/logoText'

const LogoContainer = ({ logoName, imageUrl }: { logoName: string; imageUrl: string }) => {
  return (
    <div
      className="flex items-center gap-2 group transition-all duration-200 cursor-pointer"
      tabIndex={0}
      aria-label={logoName}
    >
      <LogoImage imageUrl={imageUrl} />
      <span className="hidden md:inline-flex transition-colors duration-200 group-hover:text-cyan-600 group-focus:text-cyan-600">
        <LogoText logoName={logoName} />
      </span>
    </div>
  );
};

export default LogoContainer;