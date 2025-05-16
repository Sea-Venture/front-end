import React, { useState } from "react";
import AvatarMenu from "../../../molecule/dashboard/avatarMenu";

const AvatarContainer = ({
  propicUrl,
  onProfileClick,
}: {
  propicUrl: string;
  onProfileClick: () => void;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 p-2 rounded-full cursor-pointer bg-gray-100 dark:bg-gray-800"
        onClick={toggleMenu}
      >
        <img
          src={propicUrl}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
      {menuOpen && (
        <div className="absolute top-10 right-0 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <AvatarMenu menuItems={["Profile", "Settings", "Logout"]} onProfileClick={onProfileClick} />
        </div>
      )}
    </div>
  );
};

export default AvatarContainer;