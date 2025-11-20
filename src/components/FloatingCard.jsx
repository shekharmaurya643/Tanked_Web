import React from 'react';
import { motion } from 'framer-motion';

const FloatingCard = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ y: 0 }} // Start at normal position
      animate={{ y: [0, -5, 0] }} // Float up 5px, then back down
      transition={{
        duration: 1, // Cycle takes 3 seconds
        repeat: Infinity, // Loop forever
        ease: "easeInOut", // Smooth start/end
        delay: delay, // Stagger animation start
        repeatDelay: 1 // Pause 1 sec between loops
      }}
      className="h-full" // Ensure div takes full height
    >
      {children}
    </motion.div>
  );
};


export default FloatingCard;