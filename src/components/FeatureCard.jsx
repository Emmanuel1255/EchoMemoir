import React from 'react';
import { motion } from 'framer-motion';

export const FeatureCard = ({ icon, title, description, index }) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    whileHover={{ y: -5 }}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);