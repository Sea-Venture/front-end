import React from "react";
import { motion } from "framer-motion";

const CTASection = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="text-center p-8"
  >
    <h3 className="text-2xl font-bold mb-2 text-gray-800">Ready to Embark on Your Next Adventure?</h3>
    <p className="mb-6 text-gray-700">Discover the fastest and most enjoyable way to plan your dream trip with practical solutions.</p>
    <div className="flex flex-col md:flex-row gap-4 justify-center">
      <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-6 py-2 rounded font-semibold shadow">Booking Now</button>
      <button className="bg-white hover:bg-blue-100 transition text-blue-600 px-6 py-2 rounded font-semibold shadow border border-blue-200">Learn More</button>
    </div>
  </motion.section>
);

export default CTASection;