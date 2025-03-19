import React from 'react'
import Navbar from '../../components/organism/landingPage/navBar'
import Footer from '../../components/organism/landingPage/footer'
import HeroSection from '../../components/organism/landingPage/HeroSection'

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Navbar/>
        <HeroSection/>
        <Footer />
      </main>
    </div>
    
  )
}

export default LandingPage