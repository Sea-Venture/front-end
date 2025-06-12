import React from "react";
import MenuItem from "../../atom/dashboard/avatar/menuItem";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";

const AvatarMenu = ({
  menuItems,
  onProfileClick,
}: {
  menuItems: string[];
  onProfileClick: () => void;
}) => {
  const handleItemClick = (itemName: string) => {
    if (itemName === "Profile") {
      onProfileClick();
    }
    if (itemName === "Logout") {
      console.log("Logging out...");
    }
    if (itemName === "Settings") {
      console.log("Navigating to settings...");
    }
  };

  const menuIcons: { [key: string]: React.ReactNode } = {
    Profile: <FaUser />,
    Settings: <FaCog />,
    Logout: <FaSignOutAlt />,
  };

  return (
    <div className="absolute top-5 right-5 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2">
      {menuItems.map((item: string, index: number) => (
        <MenuItem
          key={index}
          itemName={item}
          icon={menuIcons[item]}
          onClick={() => handleItemClick(item)}
        />
      ))}
    </div>
  );
};

export default AvatarMenu;