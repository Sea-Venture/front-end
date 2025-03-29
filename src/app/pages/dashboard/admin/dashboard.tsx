"use client";
import React, { useState } from "react";
import Sidebar from "../../../components/organism/dashboard/admin/sidebar";
import Navbar from "../../../components/organism/dashboard/admin/navbar";
import AddContent from "../../../components/organism/content/addContent";
import DashboardContent from "../../../components/organism/content/dashboardContent";
import InboxContent from "../../../components/organism/content/inboxContent";
import UserContent from "../../../components/organism/content/userContent";

const Dashboard = () => {
  const [activeContent, setActiveContent] = useState("Dashboard");

  const renderContent = () => {
    switch (activeContent) {
      case "Add":
        return <AddContent />;
      case "Dashboard":
        return <DashboardContent />;
      case "Inbox":
        return <InboxContent />;
      case "Users":
        return <UserContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar setActiveContent={setActiveContent} />

        <div className="flex-1 overflow-y-auto bg-gray-100 dark:bg-gray-900 p-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;