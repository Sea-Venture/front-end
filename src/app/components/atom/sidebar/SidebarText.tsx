import React from "react";

const SidebarText = ({ text }: { text: string }) => {
  return <span className="flex-1 ms-3 whitespace-nowrap">{text}</span>;
};

export default SidebarText;