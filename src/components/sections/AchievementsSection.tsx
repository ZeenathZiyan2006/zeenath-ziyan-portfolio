import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Calendar, MapPin, CheckCircle2, Award, ExternalLink, Sparkles } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { achievementsData, certificationsData, CertificateItem } from '../../data/portfolioData';

interface AchievementsSectionProps {
  onOpenCertificate: (certificate: CertificateItem) => void;
}

export default function AchievementsSection({ onOpenCertificate }: AchievementsSectionProps) {
  const handleOpenCertById = (certId?: string) => {
    if (!certId) return;
    const cert = certificationsData.find((c) => c.id === certId);
    if (cert) {
      onOpenCertificate(cert);
    }
  };

  const topAchievement = achievementsData.find((a) => a.isTopAward) || achievementsData[0];
  const otherAchievements = achievementsData.filter((a) => a.id !== topAchievement.id);

  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="HONORS & MILESTONES"
          title="Key Achievements"
          subtitle="Notable accomplishments, competitive hackathon recognitions, and milestone distinctions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* FEATURED ACHIEVEMENT: Hackathon Premier League 2nd Runner-Up */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 card-sage rounded-3xl bg-[#FFFFFF] border-2 border-[#A3B899]/70 p-6 sm:p-9 relative overflow-hidden flex flex-col justify-between shadow-card hover:shadow-card-hover"
          >
            {/* Soft decorative background accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#DCE8D5]/35 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-6">
              {/* Badge & Year Row */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#DCE8D5] text-[#526B50] border border-[#A3B899]/60">
                  <Trophy className="w-4 h-4 text-[#526B50]" />
                  <span>{topAchievement.badgeText}</span>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#76946C]">
                  <Calendar className="w-4 h-4 text-[#526B50]" />
                  <span>{topAchievement.year}</span>
                </div>
              </div>

              {/* Title & Event */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#343D32] tracking-tight leading-snug">
                  {topAchievement.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-[#526B50] font-semibold mt-2">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>{topAchievement.event}</span>
                </div>
              </div>

              {/* Description quote box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#F7F5EC] border border-[#DCE8D5] text-[#343D32] text-sm sm:text-base leading-relaxed">
                "{topAchievement.description}"
              </div>

              {/* Key Highlights list */}
              <div className="space-y-3 pt-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#526B50]">
                  Key Highlights &amp; Significance
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {topAchievement.highlights.map((pt, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#343D32]/85 bg-[#F7F5EC]/60 p-2.5 rounded-xl border border-[#DCE8D5]/70"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#526B50] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action footer */}
            <div className="relative z-10 mt-8 pt-6 border-t border-[#DCE8D5] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#76946C]">
                <Sparkles className="w-4 h-4 text-[#526B50]" />
                <span>Verified Certificate Available</span>
              </div>

              <button
                type="button"
                onClick={() => handleOpenCertById(topAchievement.certificateId)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#526B50] text-[#FFFFFF] font-semibold text-xs sm:text-sm hover:bg-[#343D32] shadow-sm transition-all"
              >
                <span>View Certificate</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* SECONDARY ACHIEVEMENTS / RECOGNITION */}
          <div className="lg:col-span-4 space-y-6">
            {otherAchievements.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.15 * (index + 1) }}
                className="card-sage rounded-3xl bg-[#FFFFFF] border border-[#DCE8D5] p-6 flex flex-col justify-between shadow-card hover:shadow-card-hover"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#DCE8D5] text-[#526B50]">
                      <Award className="w-3.5 h-3.5" />
                      {item.badgeText}
                    </span>
                    <span className="text-xs text-[#76946C] font-mono">{item.year}</span>
                  </div>

                  <h4 className="text-lg font-bold text-[#343D32] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs font-medium text-[#526B50]">{item.event}</p>

                  <p className="text-xs text-[#343D32]/80 leading-relaxed">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <ul className="space-y-1.5 pt-2 border-t border-[#DCE8D5]">
                      {item.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#343D32]/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#526B50] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {item.certificateId && (
                  <div className="pt-5 mt-4 border-t border-[#DCE8D5]">
                    <button
                      type="button"
                      onClick={() => handleOpenCertById(item.certificateId)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-[#DCE8D5] bg-[#F7F5EC] text-xs font-semibold text-[#526B50] hover:bg-[#DCE8D5] hover:text-[#343D32] transition-colors"
                    >
                      <span>View Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Quick Summary Pill Card */}
            <div className="p-5 rounded-2xl bg-[#DCE8D5]/50 border border-[#A3B899]/50 text-[#343D32] text-xs space-y-1.5">
              <span className="font-bold text-[#526B50] uppercase tracking-wider block">
                Continuous Improvement
              </span>
              <p className="leading-relaxed">
                Active involvement in competitive software challenges and hackathons demonstrates team leadership, quick adaptability, and end-to-end project execution under tight timelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
