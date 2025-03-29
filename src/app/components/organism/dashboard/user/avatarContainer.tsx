import React, { useState } from "react";
import Hamicon from "../../../atom/dashboard/avatar/hamIcon";
import AvatarMenu from "../../../molecule/dashboard/avatarMenu";

const AvatarContainer = ({ propicUrl }: { propicUrl: string }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navMenuItems = ["Profile", "Settings", "Logout"];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 p-2 rounded-full cursor-pointer bg-gray-100 dark:bg-gray-800"
        onClick={toggleMenu}
      >
        <Hamicon />
        <img
          src={propicUrl}
          alt="Profile"
          className="w-6 h-6 rounded-full object-cover"
        />
      </div>
      {menuOpen && (
        <div className="absolute top-10 right-0 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <AvatarMenu menuItems={navMenuItems} />
        </div>
      )}
    </div>
  );
};

export default AvatarContainer;