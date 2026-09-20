"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";

export function LeadBanner() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[250px] bg-brand-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-dark-900/90 border border-white/10 p-8 sm:p-12 md:p-14 text-center shadow-2xl backdrop-blur-md">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-accent-violet" />
            <span>Ready To Start Your Capstone?</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Have a Project Idea?
          </h2>

          {/* Subheading */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Send us your project idea or requirements and let&apos;s discuss the right technology, scope and development plan.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.getWhatsAppUrl(
                "Hi BTech Project Hub, I have a project idea for my final year project and would like to discuss it."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="whatsapp"
                className="w-full sm:w-auto"
                icon={<MessageCircle className="w-4 h-4" />}
              >
                WhatsApp Us
              </Button>
            </a>

            <a href="#contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="primary"
                className="w-full sm:w-auto"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Get Project Guidance
              </Button>
            </a>
          </div>

          {/* Subtext */}
          <p className="mt-5 text-[11px] text-gray-400 font-mono">
            Fast response on WhatsApp • Direct communication with software engineers
          </p>
        </div>
      </div>
    </section>
  );
}
