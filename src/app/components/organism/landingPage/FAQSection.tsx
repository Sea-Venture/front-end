import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: 'What is Seaventures?',
    answer: 'Seaventures is a coastal adventure platform designed to help you plan and experience exciting activities like surfing, diving, and other water-based adventures.'
  },
  {
    question: 'What adventures can I book through Seaventures?',
    answer: 'Seaventures allows you to explore and book a wide range of coastal experiences including surfing lessons, scuba diving tours, snorkeling trips, and guided marine excursions.'
  },
  {
    question: 'How do I get started with Seaventures?',
    answer: 'Download the Seaventures app or visit our website, create an account, and browse available adventures based on your location and interests.'
  },
  {
    question: 'What should I do if I face issues while using Seaventures?',
    answer: 'If you encounter any problems, our customer support team is here to help—just reach out through the app or our website contact page.'
  }
];


const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="text-center p-8">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h3>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, idx) => (
          <motion.div
            key={faq.question}
            className="mb-4 bg-white rounded-lg shadow transition"
            initial={false}
            animate={{ scale: openFaq === idx ? 1.02 : 1, boxShadow: openFaq === idx ? "0 8px 32px rgba(59,130,246,0.10)" : undefined }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-700 focus:outline-none"
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <span>{faq.question}</span>
              {openFaq === idx ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <AnimatePresence initial={false}>
              {openFaq === idx && (
                <motion.div
                  key="faq-content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-gray-600 text-left overflow-hidden"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;