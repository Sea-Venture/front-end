"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavContainer from '../../atom/landingPage/navContainer'
import LogoText from '../../atom/landingPage/logoText';
import NavMenuItems from '../../molecule/landingPage/navMenuItems';

const navItems = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about" },
  { name: "Blog", url: "#" },
  { name: "Contact Us", url: "/contact" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavContainer>
      <nav className="w-full bg-gradient-to-br from-blue-50 to-blue-100 shadow rounded-b-2xl fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
          <LogoText logoname="SeaVentures"/>
          <button
            className="lg:hidden text-blue-700"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes className="w-8 h-8" /> : <FaBars className="w-8 h-8" />}
          </button>
          <div className="hidden lg:flex items-center space-x-10">
            <NavMenuItems
              navItems={navItems}
            />
            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-8 py-3 rounded-xl shadow font-semibold text-lg">
              Get Started Now
            </button>
          </div>
        </div>
        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-blue-900/80 z-40 flex flex-col items-center justify-center">
            <ul className="space-y-8 text-2xl font-bold text-white">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.url}
                    className="hover:text-blue-300 transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  className="w-full bg-blue-500 hover:bg-blue-600 transition text-white px-10 py-4 rounded-xl shadow font-semibold text-2xl"
                  onClick={() => setMenuOpen(false)}
                >
                  Booking Now
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20"></div>
    </NavContainer>
  );
};

export default NavBar;