import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2, Layers, ArrowUpRight, Sparkles } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { projectsData } from '../../data/portfolioData';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="PORTFOLIO WORK"
          title="Featured Projects"
          subtitle="A showcase of technical architecture, design execution, and problem solving."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-sage rounded-3xl bg-[#FFFFFF] border border-[#DCE8D5] flex flex-col overflow-hidden group hover:border-[#A3B899]"
            >
              {/* Project Screenshot / Visual Mockup */}
              <div className="relative aspect-[16/10] bg-[#F7F5EC] border-b border-[#DCE8D5] overflow-hidden group-hover:bg-[#EEF4EA] transition-colors">
                {project.imagePath ? (
                  <div className="relative w-full h-full">
                    <img
                      src={project.imagePath}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                    {/* Top glass pill with category */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 bg-[#FFFFFF]/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-[#DCE8D5] shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-[#526B50]" />
                        <span className="text-[10px] font-mono font-semibold text-[#343D32]">GitHub Repo</span>
                      </div>
                      <span className="text-[11px] font-bold text-[#526B50] px-3 py-1 rounded-full bg-[#FFFFFF]/95 backdrop-blur-sm border border-[#DCE8D5] shadow-xs">
                        {project.category}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full p-4 flex flex-col justify-between">
                    {/* Browser-style Top Bar */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#DCE8D5] border border-[#A3B899]/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#DCE8D5] border border-[#A3B899]/60" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#DCE8D5] border border-[#A3B899]/60" />
                      </div>
                      <span className="text-[11px] font-semibold text-[#526B50] px-2.5 py-0.5 rounded-full bg-[#FFFFFF] border border-[#DCE8D5]">
                        {project.category}
                      </span>
                    </div>

                    {/* Center Icon & Placeholder Tag */}
                    <div className="flex flex-col items-center justify-center my-auto space-y-2 text-center">
                      <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#DCE8D5] text-[#526B50] flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300">
                        <FolderGit2 className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-[#343D32] tracking-wide">
                        {project.imagePlaceholderText}
                      </span>
                    </div>

                    {/* Bottom Mock Details */}
                    <div className="flex items-center justify-between text-[11px] text-[#76946C] pt-2 border-t border-[#DCE8D5]/60">
                      <span>Production Build</span>
                      <span className="font-mono">v1.0</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Project Details Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold text-[#343D32] group-hover:text-[#526B50] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#526B50] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#F7F5EC] border border-[#DCE8D5] text-[#343D32]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links Row */}
                  <div className="flex items-center gap-3 pt-3 border-t border-[#DCE8D5]">
                    {/* GitHub Link */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#343D32] hover:text-[#526B50] transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                      <span>Repository</span>
                    </a>

                    {/* Live Demo Link */}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#526B50] hover:text-[#343D32] transition-colors ml-auto"
                        title="View Live Application"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[11px] text-[#A3B899] font-medium ml-auto">
                        Demo link ready
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informational Guidance Box */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#526B50]">
            Explore all open-source repositories and engineering implementations directly on{' '}
            <a
              href="https://github.com/ZeenathZiyan2006"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-[#343D32] hover:text-[#526B50] underline decoration-[#A3B899] underline-offset-2 transition-colors"
            >
              <Github className="w-3.5 h-3.5 inline" />
              Zeenath Ziyan's GitHub Profile
              <ArrowUpRight className="w-3.5 h-3.5 inline" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
