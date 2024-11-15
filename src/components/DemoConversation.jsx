import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const DemoConversation = ({ conversations, activeDemo, setActiveDemo }) => (
  <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="p-6">
      {conversations.map((conv, index) => (
        <motion.div
          key={index}
          className="mb-6 last:mb-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            className={`w-full text-left p-4 rounded-lg border ${
              activeDemo === index ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
            }`}
            onClick={() => setActiveDemo(activeDemo === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <p className="font-medium">{conv.question}</p>
            <AnimatePresence>
              {activeDemo === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="mt-4 text-gray-600"
                >
                  {conv.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      ))}
    </div>
  </div>
);