import React from "react";
import { motion } from "framer-motion";
import { SiAirbnb, SiAfterpay } from 'react-icons/si';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

const partnerIcons = [
  { name: 'All', icon: <SiAirbnb className="w-8 h-8 text-pink-500" /> },
  { name: 'Sponsers', icon: <SiAfterpay className="w-8 h-8 text-green-500" /> },
  { name: 'Are', icon: <MdOutlineTravelExplore className="w-8 h-8 text-blue-500" /> },
  { name: 'Welcomed', icon: <SiAfterpay className="w-8 h-8 text-blue-700" /> },
  { name: 'Seaevntures', icon: <FaStar className="w-8 h-8 text-red-500" /> },
];

const PartnersSection = () => (
  <section className="text-center p-8">
    <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Partners</h3>
    <motion.div
      className="flex justify-center space-x-8 mt-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15 }
        }
      }}
    >
      {partnerIcons.map((partner, i) => (
        <motion.div
          key={partner.name}
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          {partner.icon}
          <span className="mt-2 text-gray-600 text-sm">{partner.name}</span>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default PartnersSection;