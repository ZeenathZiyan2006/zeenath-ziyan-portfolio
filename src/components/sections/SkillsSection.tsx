import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Terminal,
  Coffee,
  FileCode2,
  Database,
  Layers,
  Layout,
  Palette,
  Network,
  Smartphone,
  GitBranch,
  Code,
  Zap,
  TerminalSquare,
  Bot,
  CheckSquare,
  Sparkles,
  Binary,
  Users2,
  Brain,
  Flame,
  MessageSquareQuote,
  Clock,
  Info,
} from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import { skillsData } from '../../data/portfolioData';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const iconComponents: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-[#526B50]" />,
    Terminal: <Terminal className="w-5 h-5 text-[#526B50]" />,
    Coffee: <Coffee className="w-5 h-5 text-[#526B50]" />,
    FileCode2: <FileCode2 className="w-5 h-5 text-[#526B50]" />,
    Database: <Database className="w-5 h-5 text-[#526B50]" />,
    Layers: <Layers className="w-5 h-5 text-[#526B50]" />,
    Layout: <Layout className="w-5 h-5 text-[#526B50]" />,
    Palette: <Palette className="w-5 h-5 text-[#526B50]" />,
    Network: <Network className="w-5 h-5 text-[#526B50]" />,
    Smartphone: <Smartphone className="w-5 h-5 text-[#526B50]" />,
    GitBranch: <GitBranch className="w-5 h-5 text-[#526B50]" />,
    Code: <Code className="w-5 h-5 text-[#526B50]" />,
    Zap: <Zap className="w-5 h-5 text-[#526B50]" />,
    TerminalSquare: <TerminalSquare className="w-5 h-5 text-[#526B50]" />,
    Bot: <Bot className="w-5 h-5 text-[#526B50]" />,
    CheckSquare: <CheckSquare className="w-5 h-5 text-[#526B50]" />,
    Sparkles: <Sparkles className="w-5 h-5 text-[#526B50]" />,
    Binary: <Binary className="w-5 h-5 text-[#526B50]" />,
    Users2: <Users2 className="w-5 h-5 text-[#526B50]" />,
    Brain: <Brain className="w-5 h-5 text-[#526B50]" />,
    Flame: <Flame className="w-5 h-5 text-[#526B50]" />,
    MessageSquareQuote: <MessageSquareQuote className="w-5 h-5 text-[#526B50]" />,
    Clock: <Clock className="w-5 h-5 text-[#526B50]" />,
  };

  const filteredCategories = activeTab === 'all'
    ? skillsData
    : skillsData.filter((cat) => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#FFFFFF]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="TECHNICAL TOOLKIT"
          title="Skills &amp; Capabilities"
          subtitle="Organized across core engineering domains with customizable skill slots."
        />

        {/* Tab Filter Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4.5 py-2 rounded-full text-xs font-bold transition-all ${
              activeTab === 'all'
                ? 'bg-[#526B50] text-[#FFFFFF] shadow-sm'
                : 'bg-[#FFFFFF] border border-[#DCE8D5] text-[#343D32] hover:bg-[#DCE8D5]/50'
            }`}
          >
            All Categories
          </button>
          {skillsData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === category.id
                  ? 'bg-[#526B50] text-[#FFFFFF] shadow-sm'
                  : 'bg-[#FFFFFF] border border-[#DCE8D5] text-[#343D32] hover:bg-[#DCE8D5]/50'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Categories Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 border-b border-[#DCE8D5] pb-2">
                <h3 className="text-xl font-bold text-[#343D32]">
                  {category.title}
                </h3>
                <span className="text-xs text-[#76946C]">
                  {category.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: sIdx * 0.04 }}
                    className="card-sage p-4 rounded-2xl bg-[#FFFFFF] border border-[#DCE8D5] flex items-start gap-3.5 group hover:border-[#A3B899]"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F7F5EC] border border-[#DCE8D5] group-hover:bg-[#DCE8D5] flex items-center justify-center shrink-0 transition-colors">
                      {iconComponents[skill.iconName || 'Code2'] || <Code2 className="w-5 h-5 text-[#526B50]" />}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-bold text-[#343D32] group-hover:text-[#526B50] transition-colors truncate">
                        {skill.name}
                      </h4>
                      {skill.level && (
                        <p className="text-xs text-[#76946C] mt-0.5 font-medium">
                          {skill.level}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Customization Tip Note */}
        <div className="mt-12 p-4 rounded-2xl bg-[#F7F5EC] border border-[#DCE8D5] flex items-center gap-3 text-xs text-[#526B50] max-w-2xl mx-auto">
          <Info className="w-5 h-5 text-[#526B50] shrink-0" />
          <p>
            <span className="font-semibold text-[#343D32]">Customizing your skills:</span>
            {" "}To modify, add, or confirm specific proficiencies, simply edit the <code className="bg-[#FFFFFF] px-1.5 py-0.5 rounded text-[11px] font-mono text-[#343D32]">skillsData</code> array in <code className="bg-[#FFFFFF] px-1.5 py-0.5 rounded text-[11px] font-mono text-[#343D32]">src/data/portfolioData.ts</code>.
          </p>
        </div>
      </div>
    </section>
  );
}
