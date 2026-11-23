import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import WelcomeLoginPage from './components/welcome/WelcomeLoginPage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import CertificationsSection from './components/sections/CertificationsSection';
import AchievementsSection from './components/sections/AchievementsSection';
import EducationSection from './components/sections/EducationSection';
import ContactSection from './components/sections/ContactSection';
import BackgroundPattern from './components/common/BackgroundPattern';
import CertificateModal from './components/common/CertificateModal';
import { CertificateItem } from './data/portfolioData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'portfolio'>('welcome');
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Handle URL hash changes
  useEffect(() => {
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash && hash !== '#welcome') {
        setCurrentPage('portfolio');
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleOpenCertificate = (cert: CertificateItem) => {
    setSelectedCertificate(cert);
    setIsModalOpen(true);
  };

  const handleCloseCertificate = () => {
    setIsModalOpen(false);
  };

  const handleExplorePortfolio = () => {
    setCurrentPage('portfolio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToWelcome = () => {
    setCurrentPage('welcome');
    window.location.hash = '#welcome';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F7F5EC] text-[#343D32]">
      <AnimatePresence mode="wait">
        {currentPage === 'welcome' ? (
          /* =========================================================================
             PREMIUM WELCOME / LOGIN ENTRY PAGE (DARK NAVY / PURPLE-BLUE GRADIENTS)
             ========================================================================= */
          <motion.div
            key="welcome-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.4 } }}
            className="w-full"
          >
            <WelcomeLoginPage onExplorePortfolio={handleExplorePortfolio} />
          </motion.div>
        ) : (
          /* =========================================================================
             MAIN PORTFOLIO WEBSITE (LIGHT SAGE GREEN ELEGANCE)
             ========================================================================= */
          <motion.div
            key="portfolio-page"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-screen bg-[#F7F5EC] text-[#343D32] flex flex-col selection:bg-[#DCE8D5] selection:text-[#343D32]"
          >
            {/* Ambient Light Sage Background Texture & Orbs */}
            <BackgroundPattern />

            {/* Sticky Modern Glass Navigation Header */}
            <Navbar onGoToWelcome={handleBackToWelcome} />

            {/* Main Content Sections */}
            <main className="flex-1 relative z-10">
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <CertificationsSection onOpenCertificate={handleOpenCertificate} />
              <AchievementsSection onOpenCertificate={handleOpenCertificate} />
              <EducationSection />
              <ContactSection />
            </main>

            {/* Footer */}
            <Footer />

            {/* Full Resolution Certificate Modal Preview */}
            <CertificateModal
              certificate={selectedCertificate}
              isOpen={isModalOpen}
              onClose={handleCloseCertificate}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
