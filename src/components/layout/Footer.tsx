import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Terminal, Instagram, MessageCircle, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/[0.08] text-gray-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-accent-violet flex items-center justify-center p-0.5 shadow-glow-sm">
                <div className="w-full h-full bg-dark-900 rounded-[6px] flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-brand-400" />
                </div>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                {siteConfig.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-md">
              Specialized technical guidance and development support for final-year B.Tech capstone projects. Helping engineering students understand, build, document, test, and defend cutting-edge software and AI architectures.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-pink-400 hover:text-pink-300 px-3 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/20 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram: {siteConfig.instagram.handle}</span>
                <ArrowUpRight className="w-3 h-3 text-pink-400" />
              </a>

              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#domains" className="hover:text-white transition-colors">
                  Engineering Domains
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Project Ideas
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Everything We Provide
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Development Process
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Packages & Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-4">
              Support & Inquiries
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Request Project Guidance
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.getWhatsAppUrl("Hi BTech Project Hub, I would like to discuss my final year project requirements.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>Instant WhatsApp Chat</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li className="pt-2 text-xs text-gray-400 leading-normal">
                Positioned for final-year students in CSE, IT, AI/DS, ECE across universities in India.
              </li>
            </ul>
          </div>
        </div>

        {/* Academic Integrity Disclaimer */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] text-[11px] text-gray-400 leading-relaxed">
          <p>
            <strong className="text-gray-400">Positioning & Academic Mentorship:</strong> BTech Project Hub provides technical software engineering assistance, conceptual explanations, architectural blueprints, and university-aligned documentation mentorship. We help students deeply understand their codebase and defend their own project successfully in viva voce examinations.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#domains" className="hover:text-gray-300">Domains</a>
            <a href="#projects" className="hover:text-gray-300">Projects</a>
            <a href="#faqs" className="hover:text-gray-300">FAQ</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
