"use client";
import React, { useState } from "react";
import Navbar from "../../../components/organism/dashboard/user/navbar";
import CardContainer from "../../../components/organism/card/cardContainer";
import Profile from "../../../components/organism/profile/profile";

const Dashboard = () => {
  const [cardDetails, setCardDetails] = useState<any[]>([]); // State to hold card details
  const [view, setView] = useState<"cards" | "profile">("cards"); // State to manage the current view

  const handleShowProfile = () => {
    setView("profile"); // Show the Profile component
    setCardDetails([]); // Clear the card details
  };

  return (
    <>
      <Navbar setCardDetails={setCardDetails} onShowProfile={handleShowProfile} />
      {view === "cards" && <CardContainer cardDetails={cardDetails} />}
      {view === "profile" && <Profile />}
    </>
  );
};

export default Dashboard;