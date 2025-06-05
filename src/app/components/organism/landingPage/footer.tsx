"use client";

import React from "react";
import FooterLinks from "../../molecule/landingPage/footerLinks";
import AppLinks from "../../molecule/auth/AppLinks";
import FooterText from "../../atom/landingPage/FooterText";

const Footer = () => (
  <footer className="bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white py-8 rounded-t-3xl mt-12 shadow-lg">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center px-6 gap-y-8">
      <div className="text-center md:text-left max-w-sm">
        <h1 className="text-2xl font-bold">Sea Ventures</h1>
        <FooterText footertext="Discover the perfect beach getaway. 🌊 Your adventure begins with us." />
      </div>
      <FooterLinks />
      <AppLinks />
    </div>
    <hr className="border-blue-300/30 my-6 mx-6" />
    <div className="text-center">
      <FooterText footertext="© 2025 Sea Ventures. All rights reserved." />
    </div>
  </footer>
);

export default Footer;
