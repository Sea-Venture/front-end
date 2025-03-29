import React from "react";
import SidebarItem from "./SidebarItem";

const SidebarList = ({
  items,
  onItemClick,
}: {
  items: { name: string; icon: React.ReactNode; href: string }[];
  onItemClick: (name: string) => void; // Callback function to handle item clicks
}) => {
  return (
    <ul className="space-y-2 font-medium">
      {items.map((item, index) => (
        <li key={index}>
          <button
            onClick={() => onItemClick(item.name)} // Trigger the callback with the item's name
            className="w-full text-left"
          >
            <SidebarItem icon={item.icon} text={item.name} href={item.href} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SidebarList;