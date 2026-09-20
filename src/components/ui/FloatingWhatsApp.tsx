"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { MessageCircle, X } from "lucide-react";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show polite tooltip after 4 seconds of reading
    const timer = setTimeout(() => {
      if (!dismissed) setShowTooltip(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, [dismissed]);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end gap-3 pointer-events-auto">
      {/* Small floating tooltip callout */}
      {showTooltip && !dismissed && (
        <div className="hidden sm:flex items-center gap-2 p-3 rounded-2xl bg-dark-900/95 border border-emerald-500/30 text-xs shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-xs">
          <div className="flex-1">
            <span className="font-semibold text-white block">
              Have questions about your project?
            </span>
            <span className="text-gray-400 text-[11px] block mt-0.5">
              Chat directly with our software engineering team.
            </span>
          </div>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss message"
            className="text-gray-400 hover:text-white p-1 rounded-md"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Action Floating Bubble */}
      <a
        href={siteConfig.getWhatsAppUrl(
          "Hi BTech Project Hub, I would like to get guidance on my B.Tech final year project."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-lg shadow-emerald-900/40 hover:scale-105 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-dark-950 animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-300 rounded-full border-2 border-dark-950" />
        <MessageCircle className="w-7 h-7 text-white fill-current" />
      </a>
    </div>
  );
}
