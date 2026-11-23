import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Subtle Sage Ambient Orbs */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#DCE8D5]/40 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute top-1/3 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#DCE8D5]/30 blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 25, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
        className="absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-[#A3B899]/20 blur-3xl"
      />

      {/* Delicate Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `radial-gradient(#A3B899 0.75px, transparent 0.75px)`,
          backgroundSize: '28px 28px',
        }}
      />
    </div>
  );
}
