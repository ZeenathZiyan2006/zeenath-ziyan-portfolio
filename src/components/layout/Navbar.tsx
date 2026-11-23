import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface NavbarProps {
  onGoToWelcome?: () => void;
}

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onGoToWelcome }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
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
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F5EC]/90 backdrop-blur-md shadow-sm border-b border-[#DCE8D5]/80 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Initials Placeholder */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="flex items-center gap-3 group"
          >
            {/* Profile Picture Logo */}
            <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-[#526B50]/30 shadow-sm shrink-0 bg-[#DCE8D5] group-hover:ring-[#526B50] transition-all duration-200">
              <img
                src="/zeenath-photo.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base text-[#343D32] tracking-tight group-hover:text-[#526B50] transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-medium text-[#76946C] tracking-wide">
                Portfolio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#FFFFFF]/80 border border-[#DCE8D5] px-3 py-1.5 rounded-full shadow-subtle backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-[#526B50] text-[#FFFFFF] shadow-xs'
                      : 'text-[#343D32] hover:text-[#526B50] hover:bg-[#DCE8D5]/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-2.5">
            {onGoToWelcome && (
              <button
                type="button"
                onClick={onGoToWelcome}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold text-[#526B50] bg-[#FFFFFF] hover:bg-[#DCE8D5]/70 border border-[#DCE8D5] transition-all shadow-xs"
                title="Return to Welcome Screen"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#526B50]" />
                <span>Welcome Page</span>
              </button>
            )}

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-full text-xs font-bold text-[#FFFFFF] bg-[#526B50] hover:bg-[#41553F] transition-colors shadow-sm"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-[#FFFFFF] border border-[#DCE8D5] text-[#343D32] hover:bg-[#DCE8D5]/50 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#DCE8D5] shadow-lg px-4 pt-3 pb-6 space-y-1.5 animate-fadeIn">
          <div className="grid grid-cols-2 gap-1.5 pt-2 pb-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#526B50] text-[#FFFFFF]'
                      : 'text-[#343D32] bg-[#F7F5EC] hover:bg-[#DCE8D5]/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {onGoToWelcome && (
            <button
              type="button"
              onClick={onGoToWelcome}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-semibold text-[#526B50] bg-[#DCE8D5]/60 hover:bg-[#DCE8D5] border border-[#A3B899]/50 transition-colors mb-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#526B50]" />
              <span>Back to Welcome Page</span>
            </button>
          )}

          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, '#contact')}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-[#FFFFFF] bg-[#526B50] hover:bg-[#41553F] transition-colors shadow-sm"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
