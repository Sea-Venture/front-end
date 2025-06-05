import React from "react";

const menuItem = ({
  itemName,
  onClick,
  icon,
}: {
  itemName: string;
  onClick: () => void;
  icon?: React.ReactNode; // Optional icon
}) => {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2 text-gray-500 text-sm dark:text-gray-100 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-500 rounded-lg"
      onClick={onClick}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{itemName}</span>
    </div>
  );
};

export default menuItem;