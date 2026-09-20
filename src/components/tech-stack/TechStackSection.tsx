"use client";

import React, { useState } from "react";
import { technologiesData } from "@/data/technologies";
import { Badge } from "@/components/ui/Badge";
import { Code, Cpu, Database, Cloud, Terminal, Sparkles } from "lucide-react";

export function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Languages & Frameworks",
    "AI & ML Engines",
    "Databases & Storage",
    "DevOps & Cloud",
  ];

  const filteredTech =
    selectedCategory === "All"
      ? technologiesData
      : technologiesData.filter((t) => t.category === selectedCategory);

  return (
    <section id="tech-stack" className="py-20 md:py-28 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono uppercase tracking-wider mb-3">
            Industry Standard Ecosystem
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Built With Modern Technology
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
            We build and document projects using the same frameworks and toolchains used by top engineering teams and AI labs worldwide.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-brand-600 text-white shadow-sm border border-brand-400/40"
                  : "bg-dark-900 text-gray-400 hover:text-white border border-white/10 hover:bg-dark-850"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
          {filteredTech.map((item) => (
            <div
              key={item.name}
              className="group p-4 rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-brand-500/40 transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-mono text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:scale-125 transition-transform" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white tracking-tight group-hover:text-brand-300 transition-colors">
                  {item.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {item.role}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-white/5 text-[10px] font-mono text-brand-400 flex items-center justify-between">
                <span>Verified Stack</span>
                <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
