import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Award, Globe, Code2 } from 'lucide-react';

interface WelcomeLoginPageProps {
  onExplorePortfolio: () => void;
}

export default function WelcomeLoginPage({ onExplorePortfolio }: WelcomeLoginPageProps) {
  return (
    <div className="relative min-h-screen w-full bg-[#F7F5EC] text-[#343D32] flex items-center justify-center p-4 sm:p-6 overflow-hidden select-none font-sans">
      {/* =========================================================================
          DYNAMIC BACKGROUND: Light Sage Green Elegance Ambient Glow
         ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Sage Ambient Orb Top-Left */}
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -30, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-32 -left-32 w-[32rem] h-[32rem] rounded-full bg-[#DCE8D5]/60 blur-[110px]"
        />

        {/* Forest / Muted Sage Ambient Orb Bottom-Right */}
        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 35, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
          className="absolute -bottom-32 -right-32 w-[34rem] h-[34rem] rounded-full bg-[#A3B899]/35 blur-[120px]"
        />

        {/* Center Sage Glow */}
        <motion.div
          animate={{
            opacity: [0.25, 0.45, 0.25],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#DCE8D5]/50 blur-[100px]"
        />

        {/* Subtle Geometric Texture */}
        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage: `radial-gradient(#A3B899 0.8px, transparent 0.8px)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* =========================================================================
          LIGHT SAGE GREEN GLASSMORPHISM LOGIN / WELCOME CARD
         ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-lg"
      >
        {/* Soft Decorative Sage Glow Backing */}
        <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-tr from-[#DCE8D5] via-[#A3B899]/40 to-[#526B50]/20 blur-xl opacity-80" />

        {/* Card Surface */}
        <div className="relative rounded-[2.25rem] bg-[#FFFFFF]/90 backdrop-blur-2xl border border-[#DCE8D5] p-7 sm:p-10 shadow-2xl shadow-[#526B50]/10 flex flex-col items-center text-center overflow-hidden">
          
          {/* Top Delicate Highlight */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-[#DCE8D5]/50 to-transparent blur-xl pointer-events-none" />

          {/* Top Welcome Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DCE8D5] border border-[#A3B899]/60 text-[#343D32] text-xs font-bold tracking-wider uppercase mb-7 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#526B50] animate-pulse" />
            <span>Welcome to My Portfolio</span>
          </motion.div>

          {/* =====================================================================
              PHOTOGRAPH PLACEMENT: Original Photograph in Light Sage Glowing Frame
             ===================================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-6"
          >
            {/* Outer Breathing Ring in Soft Sage & Forest Green */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.55, 0.85, 0.55],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#526B50]/30 via-[#A3B899]/40 to-[#DCE8D5] blur-md"
            />

            {/* Photo Container Frame */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl p-1.5 bg-gradient-to-tr from-[#526B50] via-[#A3B899] to-[#DCE8D5] shadow-lg overflow-hidden">
              <div className="w-full h-full rounded-[1.35rem] bg-[#F7F5EC] overflow-hidden relative">
                {/* Original Uploaded Photograph - No Alterations, Clean Top Framing */}
                <img
                  src="/zeenath-photo.jpg"
                  alt="Zeenath Ziyan"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
              </div>
            </div>

            {/* Floating Status Indicator */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.65, type: 'spring', stiffness: 260, damping: 20 }}
              className="absolute -bottom-2 -right-2 px-3.5 py-1 rounded-full bg-[#FFFFFF] border border-[#DCE8D5] shadow-md flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-[#526B50] animate-pulse" />
              <span className="text-[11px] font-bold text-[#343D32]">Active</span>
            </motion.div>
          </motion.div>

          {/* =====================================================================
              NAME & INTRODUCTORY HEADINGS
             ===================================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="space-y-3 mb-6"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#343D32]">
              Hi, I'm{' '}
              <span className="text-[#526B50] underline decoration-[#DCE8D5] decoration-wavy underline-offset-6">
                Zeenath Ziyan
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#526B50] font-medium max-w-sm mx-auto leading-relaxed">
              Explore my journey, achievements, projects, and passion for technology.
            </p>
          </motion.div>

          {/* Highlight Distinction Tags */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-8"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F7F5EC] border border-[#DCE8D5] text-[11px] font-semibold text-[#343D32] shadow-xs">
              <Award className="w-3.5 h-3.5 text-[#526B50]" />
              <span>HPL 2nd Runner-Up</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F7F5EC] border border-[#DCE8D5] text-[11px] font-semibold text-[#343D32] shadow-xs">
              <Globe className="w-3.5 h-3.5 text-[#526B50]" />
              <span>IEEE Student Member</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F7F5EC] border border-[#DCE8D5] text-[11px] font-semibold text-[#343D32] shadow-xs">
              <Code2 className="w-3.5 h-3.5 text-[#526B50]" />
              <span>AI &amp; Data Science</span>
            </span>
          </motion.div>

          {/* =====================================================================
              ACTION BUTTON: Explore Portfolio
             ===================================================================== */}
          <motion.button
            type="button"
            onClick={onExplorePortfolio}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative w-full sm:w-auto min-w-[240px] px-8 py-4 rounded-2xl bg-[#526B50] hover:bg-[#343D32] text-[#FFFFFF] font-bold text-base shadow-lg shadow-[#526B50]/25 transition-all flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>Explore Portfolio</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </motion.button>

          {/* Subtext under button */}
          <p className="text-[11px] text-[#76946C] mt-5 tracking-wide font-medium">
            Personal Portfolio Showcase • Light Sage Green Elegance
          </p>
        </div>
      </motion.div>
    </div>
  );
}
