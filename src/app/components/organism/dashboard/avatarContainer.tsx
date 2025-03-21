import React, { useState } from 'react';
import Hamicon from '../../atom/dashboard/avatar/hamIcon';
import DropDownMenu from '../../molecule/dashboard/dropDownMenu';

const AvatarContainer = ({ propicUrl, menuItems,}: { propicUrl: string; menuItems: { itemName: string }[];}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (itemName: string) => {
    alert(`You clicked on ${itemName}`);
    setMenuOpen(false);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 p-2 rounded-full cursor-pointer bg-gray-100 dark:bg-gray-800"
        onClick={handleMenuToggle}
      >
        <Hamicon />
        <img
          src={propicUrl}
          alt="Profile"
          className="w-6 h-6 rounded-full object-cover"
        />
      </div>

      {menuOpen && (
        <DropDownMenu
          menuItems={menuItems}
          onMenuItemClick={handleMenuItemClick}
        />
      )}
    </div>
  );
};

export default AvatarContainer;