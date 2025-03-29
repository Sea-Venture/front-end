import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const SidebarButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      data-drawer-target="default-sidebar"
      data-drawer-toggle="default-sidebar"
      aria-controls="default-sidebar"
      type="button"
      className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    >
      <GiHamburgerMenu className="w-6 h-6" />
    </button>
  );
};

export default SidebarButton;