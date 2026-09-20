"use client";

import React from "react";
import { MessageSquare, ClipboardCheck, Code2, GraduationCap, CheckCircle2 } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discuss",
      subtitle: "Ideation & Scope Formulation",
      description:
        "Tell us your requirements, chosen domain, college guidelines, and any specific project ideas or base research papers you want to implement.",
      icon: MessageSquare,
      deliverables: ["Requirement audit", "Feasibility check", "Domain alignment"],
    },
    {
      number: "02",
      title: "Plan",
      subtitle: "Architecture & Tech Stack",
      description:
        "We finalize the system architecture, database schema, module breakdown, and modern technology stack ensuring rigorous academic standards.",
      icon: ClipboardCheck,
      deliverables: ["Module roadmap", "UML/DFD schematics", "Milestone timeline"],
    },
    {
      number: "03",
      title: "Develop",
      subtitle: "Engineering & Verification",
      description:
        "The project is engineered with clean, modular, well-commented source code, complete with test datasets and iterative progress updates.",
      icon: Code2,
      deliverables: ["Clean Git repository", "Modular codebase", "Test runs & screenshots"],
    },
    {
      number: "04",
      title: "Explain & Deliver",
      subtitle: "Demo, Docs & Viva Coaching",
      description:
        "Receive end-to-end local environment setup, IEEE-aligned documentation, presentation slides, and 1-on-1 viva defense preparation sessions.",
      icon: GraduationCap,
      deliverables: ["Local environment setup", "University documentation", "50+ Viva Q&A defense pack"],
    },
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono uppercase tracking-wider mb-3">
            Structured Workflow
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            How It Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
            A transparent 4-stage engineering lifecycle designed to ensure technical rigor, timely milestone delivery, and confident university defense.
          </p>
        </div>

        {/* 4 Steps Grid with connecting indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative p-6 rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-brand-500/30 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-mono font-extrabold text-white/20 group-hover:text-brand-500/40 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-dark-800 border border-white/10 flex items-center justify-center text-brand-400 group-hover:border-brand-500/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="text-xs font-mono text-brand-400 font-semibold mb-1">
                    {step.subtitle}
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Deliverables */}
                <div className="mt-6 pt-4 border-t border-white/5 space-y-1.5">
                  {step.deliverables.map((item, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-center gap-2 text-[11px] text-gray-300 font-mono"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
