"use client";

import React, { useState } from "react";
import { servicesData } from "@/data/services";
import { Badge } from "@/components/ui/Badge";
import {
  Code2,
  FileText,
  Award,
  CheckCircle2,
  Layers,
  Sparkles,
  GitBranch,
  FileCode,
  Laptop,
  GraduationCap,
  Presentation,
  ShieldCheck,
  Search,
} from "lucide-react";

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<
    "All" | "Architecture & Development" | "Documentation & Research" | "Demo & Viva Readiness"
  >("All");

  const filteredServices =
    activeTab === "All"
      ? servicesData
      : servicesData.filter((s) => s.category === activeTab);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Architecture & Development":
        return <Code2 className="w-4 h-4 text-brand-400" />;
      case "Documentation & Research":
        return <FileText className="w-4 h-4 text-accent-violet" />;
      case "Demo & Viva Readiness":
        return <GraduationCap className="w-4 h-4 text-emerald-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-brand-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono uppercase tracking-wider mb-3">
            Comprehensive Deliverables
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Everything You Need To Complete Your Project
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
            From initial system architecture formulation to modular code delivery, publication-aligned documentation assistance, and rigorous viva defense coaching.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {(
            [
              "All",
              "Architecture & Development",
              "Documentation & Research",
              "Demo & Viva Readiness",
            ] as const
          ).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`text-xs sm:text-sm font-medium px-4 py-2 rounded-xl transition-all whitespace-nowrap ${
                activeTab === tab
                  ? "bg-brand-600 text-white shadow-sm border border-brand-400/40"
                  : "bg-dark-900 text-gray-400 hover:text-white border border-white/10 hover:bg-dark-850"
              }`}
            >
              {tab === "All" ? "All Deliverables (17)" : tab}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-5 sm:p-6 rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-brand-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-dark-800 border border-white/10 flex items-center justify-center">
                      {getCategoryIcon(service.category)}
                    </div>
                    <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>
                  {service.badge && (
                    <Badge variant="primary" size="sm">
                      {service.badge}
                    </Badge>
                  )}
                </div>

                <h3 className="text-base font-bold text-white tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs sm:text-[13px] text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/5 flex items-start gap-2 text-xs bg-dark-850/50 p-2.5 rounded-xl">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-gray-200 font-medium text-[11px] leading-snug">
                  <strong className="text-gray-400 font-normal">Deliverable:</strong> {service.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Transparency Note */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-dark-900 border border-white/10 text-center text-xs sm:text-[13px] text-gray-300 max-w-2xl mx-auto shadow-lg">
          <p>
            <strong className="text-white">Academic Transparency:</strong> We provide technical development assistance, conceptual explanations, and documentation mentorship. Academic grading is decided exclusively by your university faculty evaluation committee.
          </p>
        </div>
      </div>
    </section>
  );
}
