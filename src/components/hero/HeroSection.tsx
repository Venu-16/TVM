"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { ArchitectureVisual } from "./ArchitectureVisual";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero - Final Year Project Guidance & Support"
      className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden bg-grid-pattern"
    >
      {/* Ambient background depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-brand-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 right-4 w-[420px] h-[320px] bg-accent-violet/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Direct Audience & Service Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/25 text-brand-300 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>B.Tech Final Year Project Development &amp; Support</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.12]">
              Build Your Final Year Project{" "}
              <span className="text-gradient-accent block sm:inline">
                With Confidence.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Complete B.Tech project development support — from idea selection and development to documentation, demo preparation and viva guidance.
            </p>

            {/* Specialization Trust Line */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-mono text-gray-300">
              <span className="text-brand-400 font-semibold">Specializing in:</span>
              <span className="text-white font-medium">
                AI/ML • Generative AI • Full Stack • Data Science
              </span>
            </div>

            {/* Primary & Secondary Conversion Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <a href="#contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full sm:w-auto font-semibold"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  Get Project Guidance
                </Button>
              </a>

              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  variant="whatsapp"
                  className="w-full sm:w-auto font-semibold"
                  icon={<MessageCircle className="w-4 h-4" />}
                >
                  WhatsApp Us
                </Button>
              </a>

              <a href="#projects" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto font-medium text-gray-300"
                  icon={<Layers className="w-4 h-4" />}
                >
                  Explore Projects
                </Button>
              </a>
            </div>

            {/* Engineering Footnote Indicators */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-gray-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Industry-Grade Tech
              </span>
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-brand-400" />
                Clean Modular Codebase
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent-violet" />
                Viva Defense Coaching
              </span>
            </div>
          </div>

          {/* Right Column: High-Fidelity Engineering Visual */}
          <div className="lg:col-span-6 w-full">
            <ArchitectureVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
