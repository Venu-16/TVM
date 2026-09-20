"use client";

import React, { useState } from "react";
import { faqsData } from "@/data/faqs";
import { ChevronDown, HelpCircle, MessageCircle, Filter } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "faq-1": true,
  });

  const categories = [
    "All",
    "General",
    "Development",
    "Documentation & Viva",
    "Pricing & Delivery",
  ];

  const filteredFaqs =
    activeCategory === "All"
      ? faqsData
      : faqsData.filter((f) => f.category === activeCategory);

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-dark-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono uppercase tracking-wider mb-3">
            Clear &amp; Transparent Answers
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
            Everything you need to know about our project development workflows, documentation mentorship, and defense coaching.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-brand-600 text-white shadow-sm border border-brand-400/40"
                  : "bg-dark-900 text-gray-400 hover:text-white border border-white/10 hover:bg-dark-850"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-white/20 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-brand-400 font-semibold px-2 py-0.5 rounded bg-brand-500/10 border border-brand-500/20 shrink-0">
                      {faq.category}
                    </span>
                    <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-brand-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Inquiry CTA */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-dark-900 border border-white/10 text-center space-y-3 shadow-xl">
          <p className="text-xs sm:text-sm text-gray-300">
            Have a question specific to your university department, guide, or submission deadline?
          </p>
          <a
            href={siteConfig.getWhatsAppUrl(
              "Hi BTech Project Hub, I have a specific question about my final year project requirements."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Us On WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
