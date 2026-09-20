"use client";

import React from "react";
import { domainsData } from "@/data/domains";
import { Badge } from "@/components/ui/Badge";
import {
  Brain,
  Sparkles,
  Layout,
  BarChart3,
  Scan,
  MessageSquareText,
  Server,
  Cpu,
  ArrowRight,
} from "lucide-react";

interface DomainsSectionProps {
  onSelectDomain?: (domainTitle: string) => void;
}

export function DomainsSection({ onSelectDomain }: DomainsSectionProps) {
  const iconMap: Record<string, React.ReactNode> = {
    Brain: <Brain className="w-5 h-5 text-blue-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-accent-violet" />,
    Layout: <Layout className="w-5 h-5 text-emerald-400" />,
    BarChart3: <BarChart3 className="w-5 h-5 text-amber-400" />,
    Scan: <Scan className="w-5 h-5 text-rose-400" />,
    MessageSquareText: <MessageSquareText className="w-5 h-5 text-indigo-400" />,
    Server: <Server className="w-5 h-5 text-cyan-400" />,
    Cpu: <Cpu className="w-5 h-5 text-teal-400" />,
  };

  const handleExplore = (domainTitle: string) => {
    if (onSelectDomain) {
      onSelectDomain(domainTitle);
    }
    const projectsEl = document.getElementById("projects");
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="domains" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono uppercase tracking-wider mb-3">
            Core Engineering Specializations
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Choose Your Project Domain
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
            We provide targeted development and documentation support across 8 major technical disciplines. Pick your area of interest to explore corresponding architectures and project ideas.
          </p>
        </div>

        {/* 8 Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domainsData.map((domain) => {
            return (
              <div
                key={domain.id}
                className="group relative rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-brand-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center group-hover:border-brand-500/30 transition-colors">
                      {iconMap[domain.icon] || <Brain className="w-5 h-5 text-brand-400" />}
                    </div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                      B.Tech Capstone
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-brand-300 transition-colors">
                    {domain.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-[13px] text-gray-300 leading-relaxed">
                    {domain.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.exampleTech.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-gray-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-3">
                  <button
                    type="button"
                    onClick={() => handleExplore(domain.title)}
                    className="w-full inline-flex items-center justify-between text-xs font-semibold text-brand-400 group-hover:text-brand-300 transition-colors py-2 px-3 rounded-lg bg-brand-500/5 group-hover:bg-brand-500/10 border border-brand-500/15"
                  >
                    <span>Explore Projects</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
