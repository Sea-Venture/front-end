import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const getStarted = () => {
    window.location.href = "/register"; // Redirect to the get started page
  };

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center p-12 bg-cover bg-center text-white flex flex-col items-center justify-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-500/40 z-0 rounded-b-3xl" />
        <div className="relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg"
          >
            Effortless Planning for Your Dream Adventure Awaits You!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg md:text-xl drop-shadow"
          >
            Discover the fastest and most enjoyable way to plan your dream trip with practical and intuitive solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 mt-8 justify-center"
          >
            <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-2 rounded font-semibold shadow" onClick={getStarted}>Get Started</button>
            <button className="bg-white hover:bg-blue-100 transition text-blue-600 px-6 py-2 rounded font-semibold shadow border border-blue-200">Learn More</button>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default HeroSection;
