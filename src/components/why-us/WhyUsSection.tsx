import React from "react";
import {
  Code,
  Layers,
  CheckSquare,
  HelpCircle,
  FileCheck2,
  Presentation,
  MessageCircle,
  GitPullRequest,
} from "lucide-react";

export function WhyUsSection() {
  const points = [
    {
      title: "Practical AI & Software Development Experience",
      description:
        "Every project is engineered as a functional, production-style software system rather than a theoretical script or outdated clone.",
      icon: Code,
      accent: "text-blue-400",
    },
    {
      title: "Modern Technology Stack",
      description:
        "We build with FastAPI, PyTorch, LangChain, React, Next.js, and PostgreSQL — modern technologies that university evaluators respect.",
      icon: Layers,
      accent: "text-accent-violet",
    },
    {
      title: "End-to-End Project Support",
      description:
        "From early topic formulation and problem statement approval to final demonstration and report submission, we assist every phase.",
      icon: CheckSquare,
      accent: "text-emerald-400",
    },
    {
      title: "Clear Technical Explanation",
      description:
        "We walk you through the math, algorithms, code modules, and database structures so you understand every line you are presenting.",
      icon: HelpCircle,
      accent: "text-cyan-400",
    },
    {
      title: "Documentation Assistance",
      description:
        "Comprehensive report preparation strictly following IEEE or your university department template with citations and diagrams.",
      icon: FileCheck2,
      accent: "text-amber-400",
    },
    {
      title: "Demo & Viva Preparation",
      description:
        "Detailed mock viva sessions with 50+ anticipated examiner questions, edge-case troubleshooting, and live execution rehearsal.",
      icon: Presentation,
      accent: "text-rose-400",
    },
    {
      title: "Direct Communication",
      description:
        "Communicate directly with the technical engineers working on your project through WhatsApp rather than going through middle agents.",
      icon: MessageCircle,
      accent: "text-emerald-400",
    },
    {
      title: "Structured Development Process",
      description:
        "Defined milestone roadmaps, periodic progress check-ins, and version-controlled Git commits so you never face last-minute surprises.",
      icon: GitPullRequest,
      accent: "text-brand-400",
    },
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono uppercase tracking-wider mb-3">
            Grounded Engineering Standards
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Why Students Choose Us
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
            We focus on technical authenticity, engineering craftsmanship, and deep conceptual clarity — giving you the confidence to defend your project before any faculty panel.
          </p>
        </div>

        {/* 8 Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center mb-4">
                    <Icon className={`w-5 h-5 ${pt.accent}`} />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight mb-2">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed">
                    {pt.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
