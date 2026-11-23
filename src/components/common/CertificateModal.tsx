import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Building2, Award, FileText, CheckCircle2 } from 'lucide-react';
import { CertificateItem } from '../../data/portfolioData';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  isOpen,
  onClose,
}: CertificateModalProps) {
  const [activeTab, setActiveTab] = useState<'original' | 'harmonized'>('original');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setActiveTab('original');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !certificate) return null;

  const currentImg =
    activeTab === 'harmonized' && certificate.realDocPath
      ? certificate.realDocPath
      : certificate.imagePath;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#343D32]/60 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#FFFFFF] rounded-2xl md:rounded-3xl shadow-2xl border border-[#DCE8D5] overflow-hidden z-10 my-8"
        >
          {/* Modal Header */}
          <div className="flex items-center justify-between px-6 py-4.5 border-b border-[#DCE8D5] bg-[#F7F5EC]/90">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#DCE8D5] text-[#526B50] flex items-center justify-center shadow-xs">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#526B50] uppercase tracking-wider">
                  {certificate.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#343D32] line-clamp-1">
                  {certificate.title}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-xl text-[#526B50] hover:text-[#343D32] hover:bg-[#DCE8D5]/60 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-8 space-y-6">
            {/* View Switcher Tabs (Original Scan vs Harmonized Sage Edition) */}
            {certificate.realDocPath && (
              <div className="flex items-center gap-2 p-1.5 bg-[#F7F5EC] rounded-2xl border border-[#DCE8D5] max-w-md">
                <button
                  type="button"
                  onClick={() => setActiveTab('original')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'original'
                      ? 'bg-[#526B50] text-[#FFFFFF] shadow-xs'
                      : 'text-[#343D32] hover:text-[#526B50]'
                  }`}
                >
                  Official Original Certificate
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('harmonized')}
                  className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'harmonized'
                      ? 'bg-[#526B50] text-[#FFFFFF] shadow-xs'
                      : 'text-[#343D32] hover:text-[#526B50]'
                  }`}
                >
                  Harmonized Sage Edition
                </button>
              </div>
            )}

            {/* Visual Preview Box */}
            <div className="relative rounded-2xl overflow-hidden border border-[#DCE8D5] bg-[#F7F5EC] shadow-inner flex items-center justify-center aspect-[16/10] max-h-[480px]">
              <img
                src={currentImg}
                alt={certificate.title}
                className="w-full h-full object-contain p-2"
                loading="lazy"
              />
            </div>

            {/* Certificate Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F7F5EC] p-4.5 rounded-2xl border border-[#DCE8D5]">
              <div className="flex items-start gap-3">
                <Building2 className="w-5 h-5 text-[#526B50] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-medium text-[#76946C]">Issuing Organization</div>
                  <div className="text-sm font-bold text-[#343D32]">{certificate.issuer}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#526B50] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-medium text-[#76946C]">Date of Issuance / Timeline</div>
                  <div className="text-sm font-bold text-[#343D32]">{certificate.date}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#526B50] mb-1.5">
                Credential Verification &amp; Scope
              </h4>
              <p className="text-sm text-[#343D32] leading-relaxed bg-[#F7F5EC]/50 p-4 rounded-xl border border-[#DCE8D5]/60">
                {certificate.description}
              </p>
            </div>

            {/* Candidate Verification Note */}
            <div className="flex items-center gap-2 text-xs font-semibold text-[#526B50] bg-[#DCE8D5]/50 px-4 py-2.5 rounded-xl border border-[#A3B899]/40">
              <CheckCircle2 className="w-4 h-4 text-[#526B50] shrink-0" />
              <span>Certified Recipient: <strong>Zeenath Ziyan</strong></span>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#F7F5EC]/90 border-t border-[#DCE8D5]">
            <a
              href={currentImg}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#526B50] hover:text-[#343D32] transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Open Document In New Tab
            </a>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#526B50] text-[#FFFFFF] text-xs font-bold hover:bg-[#343D32] transition-colors"
            >
              Close Preview
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
