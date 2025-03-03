import React from 'react'
import Navbar from '../components/organism/navBar'
import Footer from '../components/organism/footer'
import HeroSection from '../components/organism/HeroSection'
import HeroSection2 from '../components/organism/hero2'

const landingPage = () => {
  return (
    <div className="sm:flex sm:flex-col sm:min-h-screen md:flex md:flex-col md:min-h-screen lg:flex lg:flex-col lg:min-h-screen">
      <main className="flex-grow">
        <Navbar />
          <HeroSection />
          <HeroSection2 />

        <Footer />
      </main>
    </div>
  )
}

export default landingPage