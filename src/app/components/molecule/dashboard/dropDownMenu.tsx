import React from 'react';
import MenuItem from '../../atom/dashboard/menu/menuItem';

const DropDownMenu = ({
  menuItems,
  onMenuItemClick,
}: {
  menuItems: { itemName: string }[];
  onMenuItemClick: (itemName: string) => void;
}) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <ul className="py-2">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <MenuItem
              itemName={menuItem.itemName}
              onClick={() => onMenuItemClick(menuItem.itemName)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownMenu;