import React, { useState } from "react";
import SidebarButton from "../../../atom/sidebar/sidebarButton";
import SidebarList from "../../../molecule/sidebar/SidebarList";
import { MdSpaceDashboard, MdMessage } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

const Sidebar = ({ setActiveContent }: { setActiveContent: (content: string) => void }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarItems = [
    { name: "Add", icon: <IoIosAddCircle />, href: "#" },
    { name: "Dashboard", icon: <MdSpaceDashboard />, href: "#" },
    { name: "Inbox", icon: <MdMessage />, href: "#" },
    { name: "Users", icon: <FaUsers />, href: "#" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      <SidebarButton onClick={toggleSidebar} />

      <aside
        id="default-sidebar"
        className={`fixed top-20 left-0 z-40 w-64 h-[calc(100vh-4rem)] transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 bg-gray-50 dark:bg-gray-800`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <button
            onClick={toggleSidebar}
            className="sm:hidden mb-4 flex items-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            Back
          </button>

          <SidebarList
            items={sidebarItems}
            onItemClick={(name) => {
              setActiveContent(name); // Update the active content in the parent component
              if (!isSidebarOpen) toggleSidebar(); // Close the sidebar on smaller devices
            }}
          />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;