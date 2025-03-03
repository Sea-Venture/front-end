import React from 'react'
import Navbar from '../components/organism/navBar'
import Footer from '../components/organism/footer'
import HeroSection from '../components/organism/HeroSection'

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