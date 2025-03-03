'use client';
import Container from "@/app/components/atom/login&register/container";
import TitleText from "@/app/components/atom/login&register/titleText";
import LoginRegisterForm from "@/app/components/organism/login&register/login&RegisterForm";
import Navbar from "@/app/components/organism/nav-bar/navBar";
import HeroSection from "@/app/components/organism/hero/HeroSection";
import HeroSection2 from "@/app/components/organism/hero/hero2";
import Footer from "@/app/components/organism/footer";
import React from "react";

const Registerpage = () => {
  return <div className="flex flex-col min-h-screen">
    <main className="flex-grow">
      <Navbar/>
      <HeroSection/>
      <HeroSection2/>
      <Footer/>
    </main>
  </div>
}

export default Registerpage;