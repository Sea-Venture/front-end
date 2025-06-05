import React from "react";
import { motion } from "framer-motion";

const JourneySection = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="text-center p-8 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl mx-4 my-8 shadow"
  >
    <h3 className="text-2xl font-bold mb-2 text-gray-800">The journey outweighs the destination.</h3>
    <p className="mb-6 text-gray-700">Encapsulates the experience of travel that merges the serenity of nature with the dynamism of city.</p>
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-2 rounded font-semibold shadow">Explore Destination</button>
      <button className="bg-gray-500 hover:bg-gray-600 transition text-white px-6 py-2 rounded font-semibold shadow">Select A Tour Plan</button>
      <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-2 rounded font-semibold shadow">Booking Now</button>
    </div>
  </motion.section>
);

export default JourneySection;