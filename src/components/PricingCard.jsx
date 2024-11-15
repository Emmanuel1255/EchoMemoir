import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const PricingCard = ({ tier, price, features, highlighted = false }) => (
  <motion.div
    className={`${
      highlighted ? 'bg-indigo-50 border-indigo-500' : 'bg-white'
    } p-6 rounded-lg shadow-sm border-2`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <h3 className="text-xl font-semibold mb-2">{tier}</h3>
    <p className="text-3xl font-bold mb-6">{price}</p>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <ArrowRight className="h-5 w-5 text-indigo-600 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <motion.button 
      className={`w-full py-2 rounded-md ${
        highlighted ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      Get Started
    </motion.button>
  </motion.div>
);