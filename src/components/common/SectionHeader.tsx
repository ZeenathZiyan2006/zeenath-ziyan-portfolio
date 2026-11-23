import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = 'center',
}: SectionHeaderProps) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-3xl`}
    >
      {/* Pill Badge */}
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCE8D5] border border-[#A3B899]/40 text-[#343D32] text-xs font-semibold tracking-wider uppercase mb-3.5 ${isCenter ? 'mx-auto' : ''}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-[#526B50] animate-pulse" />
        {badge}
      </div>

      {/* Main Section Heading */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#343D32] tracking-tight leading-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className="mt-3.5 text-base md:text-lg text-[#526B50] font-normal leading-relaxed">
          {subtitle}
        </p>
      )}

      {/* Subtle decorative underline */}
      <div className={`mt-4 h-1 w-16 bg-[#526B50]/30 rounded-full ${isCenter ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}
