"use client";
import React, { useState } from "react";
import Navbar from "../../../components/organism/dashboard/user/navbar";
import CardContainer from "../../../components/organism/card/cardContainer";
import Profile from "../../../components/organism/profile/profile";
import LocationsManager from "../../../components/organism/guide/LocationsManager";
import EventsManager from "../../../components/organism/guide/EventsManager";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser, FaHome } from "react-icons/fa";
import { CardDetail } from "../../../types/CardDetail"; // <-- Import the type

const TABS = [
  { key: "cards", label: "Dashboard", description: "Overview and quick actions", icon: <FaHome /> },
  { key: "profile", label: "Profile", description: "View and edit your profile", icon: <FaUser /> },
  { key: "locations", label: "Locations", description: "Manage your locations", icon: <FaMapMarkerAlt /> },
  { key: "events", label: "Events", description: "Manage your events", icon: <FaCalendarAlt /> },
] as const;

type ViewType = typeof TABS[number]["key"];

const Dashboard = () => {
  const [cardDetails, setCardDetails] = useState<CardDetail[]>([]); // <-- Use CardDetail[]
  const [view, setView] = useState<ViewType>("cards");
  const [hoveredTab, setHoveredTab] = useState<ViewType | null>(null);

  // Navigation bar for dashboard sections
  const SectionNav = () => (
    <div className="flex gap-1 sm:gap-2 justify-center my-4 flex-wrap">
      {TABS.map((tab) => (
        <button
          key={tab.key}
          className={`relative flex flex-col items-center px-3 py-2 sm:px-4 sm:py-2 rounded transition font-medium focus:outline-none
            ${view === tab.key
              ? "bg-blue-600 text-white shadow scale-105 dark:bg-blue-500"
              : "bg-gray-200 text-gray-800 hover:bg-blue-100 hover:scale-105 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-blue-900"}
          `}
          onClick={() => setView(tab.key)}
          onMouseEnter={() => setHoveredTab(tab.key)}
          onMouseLeave={() => setHoveredTab(null)}
        >
          <span className="text-lg sm:text-xl mb-1">{tab.icon}</span>
          <span className="text-xs">{tab.label}</span>
          {/* Tooltip on hover */}
          {hoveredTab === tab.key && (
            <span className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 text-xs bg-gray-700 text-white rounded shadow z-20 whitespace-nowrap">
              {tab.description}
            </span>
          )}
        </button>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar setCardDetails={setCardDetails} onShowProfile={() => setView("profile")} />
      <SectionNav />
      <div className="max-w-4xl mx-auto w-full px-2 sm:px-4 transition-all duration-300">
        {view === "cards" && (
          <div className="animate-fadein">
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">Guide Dashboard</h1>
            <CardContainer cardDetails={cardDetails} />
          </div>
        )}
        {view === "profile" && (
          <div className="animate-fadein">
            <h1 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">Profile</h1>
            <Profile />
          </div>
        )}
        {view === "locations" && (
          <div className="animate-fadein">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Manage Locations</h1>
              <button
                className="px-3 py-1 bg-gray-200 rounded hover:bg-blue-100 transition dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-blue-900"
                onClick={() => setView("cards")}
              >
                Back to Dashboard
              </button>
            </div>
            <LocationsManager />
            {/* Example Floating Action Button */}
            <button
              className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-700"
              title="Add Location"
              onClick={() => alert("Show add location modal")}
            >
              +
            </button>
          </div>
        )}
        {view === "events" && (
          <div className="animate-fadein">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Manage Events</h1>
              <button
                className="px-3 py-1 bg-gray-200 rounded hover:bg-blue-100 transition dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-blue-900"
                onClick={() => setView("cards")}
              >
                Back to Dashboard
              </button>
            </div>
            <EventsManager />
          </div>
        )}
      </div>
      <style jsx global>{`
        .animate-fadein {
          animation: fadein 0.4s;
        }
        @keyframes fadein {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
};

export default Dashboard;