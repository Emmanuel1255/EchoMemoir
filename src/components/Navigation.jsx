import React from 'react';
import { motion } from 'framer-motion';

export const NavLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-600 hover:text-indigo-600"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);

export const MobileNavLink = ({ href, onClick, children }) => (
  <motion.a
    href={href}
    onClick={onClick}
    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.a>
);