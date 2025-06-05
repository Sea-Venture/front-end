"use client";

import React from 'react';
import NavBar from '../../components/organism/landingPage/navBar';
import HeroSection from '../../components/organism/landingPage/HeroSection';
import PartnersSection from '../../components/organism/landingPage/PartnersSection';
import DestinationsSection from '../../components/organism/landingPage/DestinationsSection';
import JourneySection from '../../components/organism/landingPage/JourneySection';
import CTASection from '../../components/organism/landingPage/CTASection';
import FAQSection from '../../components/organism/landingPage/FAQSection';
import Footer from '../../components/organism/landingPage/footer';
import Team from '../../components/organism/landingPage/team';

const LandingPage = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <NavBar />
      <HeroSection />
      <PartnersSection />
      <DestinationsSection />
      <JourneySection />
      <CTASection />
      <FAQSection />
      <Team />
      <Footer />
    </div>
  );
};

export default LandingPage;