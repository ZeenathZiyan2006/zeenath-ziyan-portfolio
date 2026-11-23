import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, Building2, Eye, ExternalLink, FileCheck } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { certificationsData, CertificateItem } from '../../data/portfolioData';

interface CertificationsSectionProps {
  onOpenCertificate: (certificate: CertificateItem) => void;
}

export default function CertificationsSection({
  onOpenCertificate,
}: CertificationsSectionProps) {
  return (
    <section id="certifications" className="py-20 md:py-28 relative bg-[#FFFFFF]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="VERIFIED CREDENTIALS"
          title="Certifications &amp; Memberships"
          subtitle="Accredited workshops, professional memberships, and technical assessments."
        />

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-sage rounded-3xl bg-[#FFFFFF] border border-[#DCE8D5] overflow-hidden flex flex-col group hover:border-[#A3B899]"
            >
              {/* Card Image / Preview Banner */}
              <div 
                onClick={() => onOpenCertificate(cert)}
                className="relative aspect-[16/10] bg-[#F7F5EC] border-b border-[#DCE8D5] cursor-pointer overflow-hidden p-3 sm:p-4 flex items-center justify-center group-hover:bg-[#EEF4EA] transition-colors"
              >
                {/* Official Certificate Framed Mount with Light Sage Accents */}
                <div className="relative w-full h-full rounded-2xl bg-[#FFFFFF] border border-[#DCE8D5] p-2 flex items-center justify-center shadow-xs overflow-hidden group-hover:border-[#A3B899] transition-all">
                  <img
                    src={cert.imagePath}
                    alt={cert.title}
                    className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                {/* Top Floating Badge with Light Sage Coordination */}
                <div className="absolute top-5 left-5 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFFFFF]/95 backdrop-blur-sm border border-[#DCE8D5] shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#526B50]" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#343D32]">
                    Original Certificate
                  </span>
                </div>

                {/* Hover Overlay with Preview Pill */}
                <div className="absolute inset-0 bg-[#343D32]/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFFFF] text-[#343D32] text-xs font-bold shadow-md">
                    <Eye className="w-4 h-4 text-[#526B50]" />
                    Click to View Full Document
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Category Pill */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold bg-[#DCE8D5] text-[#343D32]">
                      <FileCheck className="w-3.5 h-3.5 text-[#526B50]" />
                      {cert.category}
                    </span>
                    <span className="text-xs font-medium text-[#76946C] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {cert.date}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-xl font-bold text-[#343D32] group-hover:text-[#526B50] transition-colors">
                    {cert.title}
                  </h3>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#526B50]">
                    <Building2 className="w-4 h-4 shrink-0" />
                    <span>{cert.issuer}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#343D32]/80 leading-relaxed pt-1">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-[#DCE8D5] flex items-center justify-between">
                  <button
                    onClick={() => onOpenCertificate(cert)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-[#FFFFFF] bg-[#526B50] hover:bg-[#41553F] transition-colors shadow-xs"
                  >
                    <Eye className="w-4 h-4" />
                    View Certificate
                  </button>

                  <a
                    href={cert.imagePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-[#526B50] hover:text-[#343D32] inline-flex items-center gap-1"
                  >
                    <span>Direct Link</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Upload Guidance Info */}
        <div className="mt-12 p-6 rounded-3xl bg-[#F7F5EC] border border-[#DCE8D5] max-w-3xl mx-auto text-left">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#DCE8D5] text-[#526B50] flex items-center justify-center shrink-0 mt-0.5">
              <Award className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-[#343D32]">
                Authentic Verified Documents &amp; Accreditations
              </h4>
              <p className="text-xs text-[#526B50] leading-relaxed">
                All certificates displayed above are the original credentials awarded to Zeenath Ziyan by LearnTube.ai, be10x, IEEE, and Shri Madhwa Vadiraja Institute of Technology &amp; Management (SMVITM), framed and coordinated in the Light Sage Green theme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
