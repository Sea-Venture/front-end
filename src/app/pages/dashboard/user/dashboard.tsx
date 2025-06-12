"use client";
import React, { useState } from "react";
import Navbar from "../../../components/organism/dashboard/user/navbar";
import CardContainer from "../../../components/organism/card/cardContainer";
import Profile from "../../../components/organism/profile/profile";
import { CardDetail } from "../../../types/CardDetail";

const Dashboard = () => {
  const [cardDetails, setCardDetails] = useState<CardDetail[]>([]);
  const [view, setView] = useState<"cards" | "profile">("cards");

  const handleShowProfile = () => {
    setView("profile");
    setCardDetails([]);
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