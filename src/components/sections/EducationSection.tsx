import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, BookOpen, CheckCircle, MapPin, Award } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { educationData } from '../../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28 relative bg-[#FFFFFF]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ACADEMIC BACKGROUND"
          title="Education"
          subtitle="Foundational engineering studies, curriculum highlights, and key areas of academic focus."
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-sage rounded-3xl bg-[#FFFFFF] border border-[#DCE8D5] p-6 sm:p-9 shadow-card hover:shadow-card-hover relative overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#526B50] via-[#A3B899] to-[#DCE8D5]" />

              <div className="space-y-6">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#DCE8D5] text-[#526B50] flex items-center justify-center shrink-0 mt-1 shadow-subtle">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#DCE8D5] text-[#526B50] mb-1.5">
                        <Award className="w-3.5 h-3.5" />
                        {edu.status}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#343D32]">
                        {edu.institution}
                      </h3>
                      <p className="text-base font-semibold text-[#526B50] mt-0.5">
                        {edu.degree} — {edu.field}
                      </p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#F7F5EC] border border-[#DCE8D5] text-xs font-medium text-[#76946C] self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-[#526B50]" />
                    <span>{edu.academicYear}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#343D32]/85 leading-relaxed bg-[#F7F5EC]/50 p-4 rounded-2xl border border-[#DCE8D5]/60">
                  {edu.description}
                </p>

                {/* Coursework & Competencies */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#526B50]">
                    <BookOpen className="w-4 h-4" />
                    <span>Relevant Coursework &amp; Academic Focus</span>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {edu.coursework.map((course, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-medium bg-[#F7F5EC] text-[#343D32] border border-[#DCE8D5] hover:bg-[#DCE8D5]/70 transition-colors"
                      >
                        <CheckCircle className="w-3 h-3 text-[#526B50]" />
                        <span>{course}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
