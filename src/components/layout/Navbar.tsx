"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import {
  Menu,
  X,
  Terminal,
  MessageCircle,
  ArrowRight,
  Sparkles,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-950/90 backdrop-blur-md border-b border-white/[0.08] shadow-lg shadow-black/50 py-3"
          : "bg-transparent py-4 sm:py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-2.5 group focus-visible:outline-none"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-brand-600 via-accent-violet to-brand-400 flex items-center justify-center p-0.5 shadow-glow-sm group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-dark-900 rounded-[10px] flex items-center justify-center">
                <Terminal className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-brand-400 group-hover:text-white transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                {siteConfig.name}
                {/* <span className="text-[10px] font-mono font-semibold px-1.5 py-0.2 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20">
                  STUDIO
                </span> */}
              </span>
              <span className="text-[11px] text-gray-400 font-medium -mt-0.5 hidden xs:block">
                Final Year Project Development &amp; Support
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs xl:text-sm font-medium text-gray-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct WhatsApp Consultation"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 hover:border-emerald-500/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp</span>
            </a>

            <a href="#contact">
              <Button
                size="sm"
                variant="primary"
                className="font-semibold"
                icon={<ArrowRight className="w-3.5 h-3.5" />}
                iconPosition="right"
              >
                Get Guidance
              </Button>
            </a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 sm:hidden">
            <a
              href={siteConfig.getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
              className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            >
              <MessageCircle className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2.5 rounded-xl text-gray-300 hover:text-white bg-dark-850 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Fullscreen Drawer Menu with Backdrop */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-50 lg:hidden bg-black/70 backdrop-blur-lg flex flex-col justify-between p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="rounded-2xl bg-dark-900 border border-white/10 p-5 shadow-2xl space-y-3">
            <div className="text-[11px] font-mono uppercase tracking-wider text-gray-400 border-b border-white/5 pb-2 mb-2 flex items-center justify-between">
              <span>Navigation Menu</span>
              <span className="text-brand-400 font-semibold">BTech Project Hub</span>
            </div>

            <nav className="flex flex-col space-y-1">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="text-base font-semibold text-gray-200 hover:text-white hover:bg-white/5 px-3.5 py-3 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={siteConfig.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-lg"
              >
                <MessageCircle className="w-4.5 h-4.5" />
                <span>Discuss on WhatsApp</span>
              </a>

              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-colors shadow-lg"
              >
                <Sparkles className="w-4.5 h-4.5" />
                <span>Request Project Guidance</span>
              </a>
            </div>

            {/* Social Link on Mobile */}
            <div className="pt-3 text-center">
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-pink-400 font-medium"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram: {siteConfig.instagram.handle}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
