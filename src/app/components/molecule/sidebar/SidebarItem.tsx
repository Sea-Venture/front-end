import React from "react";
import SidebarIcon from "../../atom/sidebar/SidebarIcon";
import SidebarText from "../../atom/sidebar/SidebarText";

const SidebarItem = ({
  icon,
  text,
  href,
}: {
  icon: React.ReactNode;
  text: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
    >
      <SidebarIcon icon={icon} />
      <SidebarText text={text} />
    </a>
  );
};

export default SidebarItem;