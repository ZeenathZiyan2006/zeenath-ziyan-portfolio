import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FileText, Github, Linkedin, Mail, Sparkles, Award, Code2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export default function HeroSection() {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Primary Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#FFFFFF] border border-[#DCE8D5] shadow-subtle text-xs font-semibold text-[#343D32]">
              <span className="w-2 h-2 rounded-full bg-[#526B50] animate-pulse" />
              <span>{personalInfo.statusBadge}</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <span className="text-sm md:text-base font-semibold tracking-wider uppercase text-[#526B50]">
                Welcome to my portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#343D32] tracking-tight leading-[1.12]">
                Hi, I'm <br className="hidden sm:inline" />
                <span className="text-[#526B50] underline decoration-[#DCE8D5] decoration-wavy underline-offset-8">
                  {personalInfo.name}
                </span>
              </h1>
            </div>

            {/* Professional Title */}
            <p className="text-lg sm:text-xl font-medium text-[#526B50] tracking-tight">
              {personalInfo.professionalTitle}
            </p>

            {/* Short Bio */}
            <p className="text-base text-[#343D32]/85 max-w-xl leading-relaxed">
              {personalInfo.shortBio}
            </p>

            {/* Call to Actions & Social Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {/* Primary: Explore My Work */}
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#526B50] hover:bg-[#41553F] text-[#FFFFFF] text-sm font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Secondary: Download Resume */}
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeUrl.endsWith('.pdf') ? true : undefined}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFFFFF] border border-[#DCE8D5] hover:border-[#526B50] hover:bg-[#DCE8D5]/40 text-[#343D32] text-sm font-semibold shadow-subtle transition-all transform hover:-translate-y-0.5"
                title="Download Resume (Replace with your resume.pdf)"
              >
                <FileText className="w-4 h-4 text-[#526B50]" />
                <span>Download Resume</span>
              </a>

              {/* Social Media Icons */}
              <div className="flex items-center gap-2.5 pl-1">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#FFFFFF] border border-[#DCE8D5] text-[#343D32] hover:text-[#526B50] hover:border-[#526B50] hover:bg-[#DCE8D5]/40 flex items-center justify-center transition-all shadow-subtle"
                  aria-label="GitHub profile"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>

                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-[#FFFFFF] border border-[#DCE8D5] text-[#343D32] hover:text-[#526B50] hover:border-[#526B50] hover:bg-[#DCE8D5]/40 flex items-center justify-center transition-all shadow-subtle"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>

                <a
                  href={personalInfo.socials.email}
                  className="w-11 h-11 rounded-full bg-[#FFFFFF] border border-[#DCE8D5] text-[#343D32] hover:text-[#526B50] hover:border-[#526B50] hover:bg-[#DCE8D5]/40 flex items-center justify-center transition-all shadow-subtle"
                  aria-label="Email address"
                >
                  <Mail className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

            {/* Quick Metrics / Highlights Bar */}
            <div className="pt-6 grid grid-cols-3 gap-3 max-w-lg border-t border-[#DCE8D5]/80">
              <div className="bg-[#FFFFFF]/70 p-3 rounded-xl border border-[#DCE8D5]">
                <div className="text-xl font-bold text-[#343D32]">2026</div>
                <div className="text-[11px] text-[#526B50] font-medium">HPL 2nd Runner-Up</div>
              </div>
              <div className="bg-[#FFFFFF]/70 p-3 rounded-xl border border-[#DCE8D5]">
                <div className="text-xl font-bold text-[#343D32]">IEEE</div>
                <div className="text-[11px] text-[#526B50] font-medium">Student Member</div>
              </div>
              <div className="bg-[#FFFFFF]/70 p-3 rounded-xl border border-[#DCE8D5]">
                <div className="text-xl font-bold text-[#343D32]">be10x</div>
                <div className="text-[11px] text-[#526B50] font-medium">AI Certified</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Photo Placeholder & Interactive Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 sm:w-80 md:w-96">
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#DCE8D5] to-[#A3B899]/50 -rotate-3 scale-105 opacity-80" />

              {/* Main Avatar Container */}
              <div className="relative rounded-3xl bg-[#FFFFFF] border-2 border-[#DCE8D5] p-3 shadow-card overflow-hidden">
                <div className="relative w-full aspect-square rounded-2xl bg-[#F7F5EC] border border-[#DCE8D5] flex flex-col items-center justify-center p-6 text-center overflow-hidden group">
                  {personalInfo.avatarUrl ? (
                    <img
                      src={personalInfo.avatarUrl}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover object-top rounded-xl shadow-inner"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-4">
                      {/* Initials Placeholder */}
                      <div className="w-24 h-24 rounded-2xl bg-[#DCE8D5] text-[#526B50] flex items-center justify-center text-3xl font-extrabold shadow-inner">
                        {personalInfo.initials || 'YN'}
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-[#343D32] uppercase tracking-wider block">
                          Profile Photo Placeholder
                        </span>
                        <p className="text-[11px] text-[#76946C] max-w-[200px] leading-tight">
                          Add your photo as <code className="bg-[#FFFFFF] px-1 py-0.5 rounded text-[10px] text-[#343D32]">profile-photo.jpg</code> in the public folder.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating Badge 1: Top Right */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-4 -right-4 bg-[#FFFFFF] border border-[#DCE8D5] px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-lg bg-[#DCE8D5] text-[#526B50] flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-[#76946C] font-semibold uppercase">Hackathon</div>
                  <div className="text-xs font-bold text-[#343D32]">2nd Runner-Up</div>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-[#FFFFFF] border border-[#DCE8D5] px-3.5 py-2 rounded-xl shadow-md flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-lg bg-[#DCE8D5] text-[#526B50] flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-[#76946C] font-semibold uppercase">Tech &amp; AI</div>
                  <div className="text-xs font-bold text-[#343D32]">Continuous Learner</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
