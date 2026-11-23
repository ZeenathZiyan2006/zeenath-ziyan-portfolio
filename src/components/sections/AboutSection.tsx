import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Cpu, Users, GraduationCap, Target, Compass, BookOpen } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { aboutData, personalInfo } from '../../data/portfolioData';

export default function AboutSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Sparkles: <Sparkles className="w-5 h-5 text-[#526B50]" />,
    Cpu: <Cpu className="w-5 h-5 text-[#526B50]" />,
    Users: <Users className="w-5 h-5 text-[#526B50]" />,
  };

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="GET TO KNOW ME"
          title="About Me"
          subtitle={aboutData.sectionSubtitle}
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Personal Introduction Card */}
            <div className="card-sage p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#DCE8D5]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#DCE8D5] text-[#526B50] flex items-center justify-center">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-[#343D32]">Personal Introduction</h3>
              </div>
              <p className="text-[#343D32]/85 text-base leading-relaxed">
                {aboutData.personalIntro}
              </p>
            </div>

            {/* Educational Background & Passion for Tech */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Educational Background Card */}
              <div className="card-sage p-6 rounded-2xl bg-[#FFFFFF] border border-[#DCE8D5]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#DCE8D5] text-[#526B50] flex items-center justify-center">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-[#343D32]">Education</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#526B50] leading-relaxed">
                  {aboutData.educationalBackground}
                </p>
              </div>

              {/* Career Goals Card */}
              <div className="card-sage p-6 rounded-2xl bg-[#FFFFFF] border border-[#DCE8D5]">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#DCE8D5] text-[#526B50] flex items-center justify-center">
                    <Target className="w-4 h-4" />
                  </div>
                  <h4 className="text-base font-bold text-[#343D32]">Career Goals</h4>
                </div>
                <p className="text-xs sm:text-sm text-[#526B50] leading-relaxed">
                  {aboutData.careerGoals}
                </p>
              </div>
            </div>

            {/* Passion for Learning Card */}
            <div className="card-sage p-6 rounded-2xl bg-[#FFFFFF] border border-[#DCE8D5]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-[#DCE8D5] text-[#526B50] flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h4 className="text-base font-bold text-[#343D32]">Passion for Technology</h4>
              </div>
              <p className="text-sm text-[#343D32]/85 leading-relaxed">
                {aboutData.passionForTech}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Key Pillars & Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Core Values / Highlights */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#526B50] px-1">
                Core Strengths &amp; Mindset
              </h3>
              {aboutData.highlights.map((item, index) => (
                <div
                  key={index}
                  className="card-sage p-5 rounded-2xl bg-[#FFFFFF] border border-[#DCE8D5] flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#DCE8D5] flex items-center justify-center shrink-0 mt-0.5">
                    {iconMap[item.iconName] || <Sparkles className="w-5 h-5 text-[#526B50]" />}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#343D32] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#526B50] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Interests */}
            <div className="card-sage p-6 rounded-3xl bg-[#F7F5EC] border border-[#DCE8D5]">
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#343D32] mb-3">
                Key Focus &amp; Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {aboutData.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold bg-[#FFFFFF] border border-[#DCE8D5] text-[#343D32] shadow-xs"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
