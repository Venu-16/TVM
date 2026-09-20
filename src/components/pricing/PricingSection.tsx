"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import {
  CheckCircle2,
  MessageCircle,
  ArrowRight,
  Sparkles,
  HelpCircle,
  ShieldCheck,
  Clock,
} from "lucide-react";

export function PricingSection() {
  const packages = [
    {
      name: "Project Development",
      badge: "Core Engineering",
      turnaround: "7 — 12 Days Typical",
      tagline: "For students who only require hands-on software development and setup assistance.",
      features: [
        "Complete software / model development",
        "Clean, fully-commented source code repository",
        "Local machine environment & dependency setup",
        "Basic operational explanation session",
        "Sample testing dataset & instructions",
        "Git version-controlled repository",
      ],
      ctaText: "Discuss Development",
      popular: false,
      whatsappMsg:
        "Hi BTech Project Hub, I would like to discuss the Project Development package for my final year project.",
    },
    {
      name: "Project + Documentation",
      badge: "Most Popular For Reviews",
      turnaround: "10 — 16 Days Typical",
      tagline: "The ideal balance of complete engineering plus university-grade documentation & review slides.",
      features: [
        "Everything included in Project Development",
        "Comprehensive university-formatted report draft",
        "Architecture, UML, and DFD level 0-2 schematics",
        "20-25 slide professional PPT deck for reviews",
        "Live execution demo preparation rehearsal",
        "Abstract & literature survey write-up",
        "Module-by-module documentation walkthrough",
      ],
      ctaText: "Discuss Project + Docs",
      popular: true,
      whatsappMsg:
        "Hi BTech Project Hub, I would like to discuss the Project + Documentation package for my final year project.",
    },
    {
      name: "Complete Project Support",
      badge: "Full Defense Suite",
      turnaround: "Milestone-Paced",
      tagline: "End-to-end mentorship from initial concept to conference paper & viva defense mastery.",
      features: [
        "Everything in Project + Documentation",
        "Conference research paper support (IEEE format)",
        "Plagiarism & similarity report assistance",
        "50+ Viva Q&A defense document & coaching",
        "Line-by-line module explanation sessions",
        "Dedicated technical mentorship until final review",
        "Emergency viva troubleshooting support",
      ],
      ctaText: "Discuss Complete Support",
      popular: false,
      whatsappMsg:
        "Hi BTech Project Hub, I would like to discuss the Complete Project Support package for my final year project.",
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono uppercase tracking-wider mb-3">
            Transparent Engagement
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Tailored Project Packages
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
            Choose the level of technical development and academic support that matches your team&apos;s exact requirements.
          </p>

          {/* Explicit Transparency Notice */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-dark-900 border border-brand-500/25 text-xs sm:text-sm text-gray-200 max-w-2xl mx-auto flex items-start sm:items-center justify-center gap-3 shadow-lg">
            <HelpCircle className="w-5 h-5 text-brand-400 shrink-0 mt-0.5 sm:mt-0" />
            <div className="text-left">
              <strong className="text-white block sm:inline">Pricing Transparency: </strong>
              <span>
                Project pricing depends on domain, complexity, modules and required deliverables. We provide an exact, fixed quote after scoping your project requirements.
              </span>
            </div>
          </div>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.popular
                  ? "bg-dark-900 border-2 border-brand-500 shadow-2xl shadow-brand-500/15 lg:-translate-y-2"
                  : "bg-dark-900/85 border border-white/[0.08] hover:border-white/20 shadow-xl"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-brand-600 text-white text-[11px] font-bold tracking-wide uppercase font-mono shadow-md border border-brand-400/40">
                  Recommended For University Guidelines
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-brand-400 font-semibold uppercase tracking-wider">
                    {pkg.badge}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-gray-400">
                    <Clock className="w-3 h-3 text-brand-400" />
                    <span>{pkg.turnaround}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {pkg.name}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
                  {pkg.tagline}
                </p>

                <div className="my-6 pt-6 border-t border-white/5 space-y-3">
                  <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block">
                    Deliverables Included:
                  </span>
                  {pkg.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
                <a
                  href={siteConfig.getWhatsAppUrl(pkg.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block"
                >
                  <Button
                    size="md"
                    variant={pkg.popular ? "primary" : "secondary"}
                    className="w-full font-semibold"
                    icon={<MessageCircle className="w-4 h-4" />}
                  >
                    {pkg.ctaText}
                  </Button>
                </a>

                <a href="#contact" className="w-full block text-center">
                  <span className="text-xs text-gray-400 hover:text-gray-200 transition-colors inline-flex items-center gap-1">
                    <span>Submit details via project form</span>
                    <ArrowRight className="w-3 h-3 text-brand-400" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
