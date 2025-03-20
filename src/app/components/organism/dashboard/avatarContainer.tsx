import React, { useState } from "react";
import Hamicon from "../../atom/dashboard/avatar/hamIcon";

const AvatarContainer = ({ propicUrl }: { propicUrl: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 p-2 rounded-full cursor-pointer bg-gray-100 dark:bg-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        
        <Hamicon />
        <img
          src={propicUrl}
          alt="Profile"
          className="w-6 h-6 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default AvatarContainer;