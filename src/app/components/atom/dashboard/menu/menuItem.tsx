import React from 'react';

const MenuItem = ({ itemName, onClick }: { itemName: string; onClick: () => void }) => {
  return (
    <div
      className="flex items-center px-4 py-2 dark:text-gray-200 text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
      onClick={onClick}
    >
      <span>{itemName}</span>
    </div>
  );
};

export default MenuItem;