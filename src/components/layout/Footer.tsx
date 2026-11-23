import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

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

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#FFFFFF] border-t border-[#DCE8D5] pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#DCE8D5]">
          {/* Brand & Introduction */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {/* Profile Picture Logo */}
              <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-[#526B50]/30 shadow-sm shrink-0 bg-[#DCE8D5]">
                <img
                  src="/zeenath-photo.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <span className="font-bold text-lg text-[#343D32]">
                  {personalInfo.name}
                </span>
                <p className="text-xs text-[#76946C]">
                  {personalInfo.professionalTitle}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#526B50] max-w-md leading-relaxed">
              Designed with a Light Sage Green Elegance aesthetic — crafted with modern frontend architecture, accessibility, and clean typography.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#F7F5EC] border border-[#DCE8D5] text-[#343D32] hover:text-[#526B50] hover:border-[#526B50] hover:bg-[#DCE8D5]/50 flex items-center justify-center transition-all"
                aria-label="GitHub profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#F7F5EC] border border-[#DCE8D5] text-[#343D32] hover:text-[#526B50] hover:border-[#526B50] hover:bg-[#DCE8D5]/50 flex items-center justify-center transition-all"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.email}
                className="w-9 h-9 rounded-xl bg-[#F7F5EC] border border-[#DCE8D5] text-[#343D32] hover:text-[#526B50] hover:border-[#526B50] hover:bg-[#DCE8D5]/50 flex items-center justify-center transition-all"
                aria-label="Send email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#343D32]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs font-medium text-[#526B50] hover:text-[#343D32] hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#343D32]">
              Portfolio Sections
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(4).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs font-medium text-[#526B50] hover:text-[#343D32] hover:underline transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#526B50]">
          <p className="flex items-center gap-1">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-[11px] text-[#76946C]">
              Light Sage Green Elegance Theme
            </span>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F7F5EC] border border-[#DCE8D5] text-[#343D32] hover:bg-[#DCE8D5] hover:text-[#526B50] transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
