"use client";

import React from "react";
import { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { siteConfig } from "@/config/site";
import {
  ArrowRight,
  MessageCircle,
  Cpu,
  Layers,
  Sparkles,
  GitBranch,
  FileText,
  CheckCircle2,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export function ProjectCard({ project, onViewDetails }: ProjectCardProps) {
  const whatsappMsg = `Hi BTech Project Hub, I would like to get guidance on the project: "${project.title}" (${project.domain}).`;

  return (
    <article className="group relative rounded-2xl bg-dark-900 border border-white/[0.08] hover:border-brand-500/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-brand-950/40">
      {/* Top Section */}
      <div className="space-y-4">
        {/* Domain and Category Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge variant="primary" size="sm">
            {project.domain}
          </Badge>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-gray-400 border border-white/5">
              {project.projectType}
            </span>
            {project.badge && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-semibold">
                {project.badge}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-brand-300 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Tagline / Subtitle */}
        <p className="text-xs sm:text-[13px] text-gray-300 leading-relaxed font-normal">
          {project.tagline}
        </p>

        {/* Mini Architecture Flow Line */}
        <div className="p-3 rounded-xl bg-dark-850/90 border border-white/5 space-y-2">
          <div className="flex items-center justify-between text-[11px] font-mono text-gray-400">
            <span className="flex items-center gap-1.5 text-gray-300 font-medium">
              <GitBranch className="w-3.5 h-3.5 text-brand-400" />
              <span>Pipeline Architecture</span>
            </span>
            <span className="text-emerald-400 text-[10px]">
              {project.modules.length} Core Modules
            </span>
          </div>
          
          <div className="flex items-center justify-between gap-1 text-[10px] font-mono text-gray-400">
            <span className="px-2 py-0.5 rounded bg-white/5 truncate max-w-[85px] text-center">
              {project.systemArchitecture.pipeline[0]?.phase || "Input"}
            </span>
            <span className="text-gray-400">→</span>
            <span className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-300 border border-brand-500/20 truncate max-w-[95px] text-center">
              {project.systemArchitecture.pipeline[1]?.phase || "Engine"}
            </span>
            <span className="text-gray-400">→</span>
            <span className="px-2 py-0.5 rounded bg-white/5 truncate max-w-[85px] text-center">
              {project.systemArchitecture.pipeline[3]?.phase || "Client"}
            </span>
          </div>
        </div>

        {/* Technology Badges */}
        <div>
          <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider mb-2">
            Key Tech Stack
          </div>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-gray-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-400">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Deliverables Checklist Bar */}
        <div className="flex items-center gap-3 text-[11px] text-gray-400 pt-1 border-t border-white/5">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Source Code
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Report Docs
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Viva Q&amp;A
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onViewDetails(project)}
          className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-semibold text-white bg-dark-800 hover:bg-dark-750 border border-white/10 hover:border-brand-500/40 py-2.5 px-4 rounded-xl transition-all shadow-sm group-hover:border-brand-500/30"
        >
          <span>View Architecture &amp; Details</span>
          <ArrowRight className="w-3.5 h-3.5 text-brand-400 group-hover:translate-x-1 transition-transform" />
        </button>

        <a
          href={siteConfig.getWhatsAppUrl(whatsappMsg)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Discuss ${project.title} on WhatsApp`}
          className="p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 shrink-0"
          title="Discuss on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}
