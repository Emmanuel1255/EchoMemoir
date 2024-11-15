import React from 'react';
import { motion } from 'framer-motion';

export const StepCard = ({ number, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-sm"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="text-3xl font-bold text-indigo-600 mb-4">{number}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);