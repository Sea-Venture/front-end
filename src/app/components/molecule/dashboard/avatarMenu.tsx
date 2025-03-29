import React from "react";
import MenuItem from "../../atom/dashboard/avatar/menuItem";
import { FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";

const AvatarMenu = ({ menuItems }: { menuItems: string[] }) => {
  const handleItemClick = (itemName: string) => {
    alert(`You clicked on ${itemName}`);
  };

  const menuIcons: { [key: string]: React.ReactNode } = {
    Profile: <FaUser />,
    Settings: <FaCog />,
    Logout: <FaSignOutAlt />,
    "Admin Dashboard": <MdAdminPanelSettings />,
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
      <div className="border-t border-gray-200 dark:border-gray-700 mt-2"></div>
      <p className="text-xs text-center text-gray-400 mt-2">
        © 2025 SeaVentures
      </p>
    </div>
  );
};

export default AvatarMenu;