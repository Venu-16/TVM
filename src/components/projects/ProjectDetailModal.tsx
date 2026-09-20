"use client";

import React, { useState } from "react";
import { Project } from "@/types";
import { Modal } from "@/components/ui/Modal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import {
  Layers,
  Cpu,
  AlertTriangle,
  CheckCircle2,
  GitBranch,
  Workflow,
  GraduationCap,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Code2,
  HelpCircle,
  BookOpen,
} from "lucide-react";

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectForContact?: (project: Project) => void;
}

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
  onSelectForContact,
}: ProjectDetailModalProps) {
  const [modalTab, setModalTab] = useState<"architecture" | "problem" | "defense">("architecture");

  if (!project) return null;

  const handleContactForm = () => {
    onClose();
    if (onSelectForContact) {
      onSelectForContact(project);
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappMessage = `Hi BTech Project Hub, I would like to get guidance on the project: "${project.title}" (${project.domain}).`;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="4xl">
      <div className="space-y-6">
        {/* Header Block */}
        <div className="border-b border-white/10 pb-5">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="primary">{project.domain}</Badge>
            <Badge variant="accent">{project.projectType}</Badge>
            {project.badge && <Badge variant="warning">{project.badge}</Badge>}
            <span className="text-[11px] font-mono text-emerald-400 ml-auto flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Capstone Ready
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>

          <p className="mt-2 text-xs sm:text-sm text-gray-300 font-normal leading-relaxed">
            {project.tagline}
          </p>

          {/* Modal Tab Switcher */}
          <div className="flex items-center gap-2 mt-5 border-t border-white/5 pt-4 overflow-x-auto no-scrollbar">
            <button
              type="button"
              onClick={() => setModalTab("architecture")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                modalTab === "architecture"
                  ? "bg-brand-600 text-white shadow-sm"
                  : "bg-dark-800 text-gray-400 hover:text-white"
              }`}
            >
              <GitBranch className="w-3.5 h-3.5" />
              <span>Architecture &amp; Modules</span>
            </button>

            <button
              type="button"
              onClick={() => setModalTab("problem")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                modalTab === "problem"
                  ? "bg-brand-600 text-white shadow-sm"
                  : "bg-dark-800 text-gray-400 hover:text-white"
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Problem &amp; System Comparison</span>
            </button>

            <button
              type="button"
              onClick={() => setModalTab("defense")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                modalTab === "defense"
                  ? "bg-brand-600 text-white shadow-sm"
                  : "bg-dark-800 text-gray-400 hover:text-white"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Tech Stack &amp; Viva Defense</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Architecture & Modules */}
        {modalTab === "architecture" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* System Architecture Pipeline */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono uppercase tracking-wider text-brand-400 font-semibold flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-brand-400" />
                  <span>4-Phase Execution Pipeline</span>
                </h3>
                <span className="text-[11px] font-mono text-gray-400">
                  Data Flow Schema
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed bg-dark-850 p-3.5 rounded-xl border border-white/5">
                {project.systemArchitecture.overview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                {project.systemArchitecture.pipeline.map((step) => (
                  <div
                    key={step.step}
                    className="p-3.5 rounded-xl bg-dark-800 border border-white/5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs font-mono text-brand-400 mb-1.5">
                        <span>Phase 0{step.step}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                      </div>
                      <div className="text-xs font-semibold text-white mb-1">
                        {step.phase}
                      </div>
                      <p className="text-[11px] text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/5 flex flex-wrap gap-1">
                      {step.technologies.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-gray-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modular Project Architecture */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-brand-400 font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Modular Code Breakdown &amp; Deliverables</span>
              </h3>
              <div className="space-y-3">
                {project.modules.map((mod, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-dark-850/90 border border-white/5 space-y-1.5"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h4 className="text-sm font-semibold text-white">
                        {mod.title}
                      </h4>
                      <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 w-fit">
                        Deliverable: {mod.deliverable}
                      </span>
                    </div>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {mod.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Workflow */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-brand-400 font-semibold flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-accent-violet" />
                <span>Step-by-Step Runtime Workflow</span>
              </h3>
              <ol className="space-y-2 text-xs sm:text-sm text-gray-300">
                {project.expectedWorkflow.map((step, idx) => (
                  <li
                    key={idx}
                    className="p-3 rounded-lg bg-dark-850 border border-white/5 flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-md bg-brand-500/10 text-brand-400 flex items-center justify-center shrink-0 text-xs font-mono font-semibold">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}

        {/* Tab 2: Problem & System Comparison */}
        {modalTab === "problem" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Problem Statement */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-brand-400 font-semibold flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Problem Statement</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 bg-dark-850 p-4 rounded-xl border border-white/5 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            {/* Existing System vs Proposed System Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Existing System */}
              <div className="p-4 sm:p-5 rounded-xl bg-dark-850/90 border border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs sm:text-sm uppercase tracking-wide font-mono">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  Existing System Limitations
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                  {project.existingSystem.limitations.map((lim, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-rose-400 mt-0.5">•</span>
                      <span>{lim}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2 border-t border-white/5 text-xs text-gray-300">
                  <strong className="text-rose-400 font-medium">Research Gap:</strong>{" "}
                  {project.existingSystem.gaps}
                </div>
              </div>

              {/* Proposed System */}
              <div className="p-4 sm:p-5 rounded-xl bg-dark-850/90 border border-brand-500/20 space-y-3 shadow-glow-sm">
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs sm:text-sm uppercase tracking-wide font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Proposed System Advantages
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {project.proposedSystem.overview}
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                  {project.proposedSystem.advantages.map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-brand-400 font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-violet" />
                <span>Key Engineering Features</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg bg-dark-850 border border-white/5 text-xs sm:text-sm text-gray-300 flex items-start gap-2.5"
                  >
                    <span className="w-5 h-5 rounded bg-brand-500/10 text-brand-400 flex items-center justify-center shrink-0 text-xs font-mono">
                      {idx + 1}
                    </span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Tech Stack & Viva Defense */}
        {modalTab === "defense" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* Tech Stack */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-brand-400 font-semibold flex items-center gap-2">
                <Code2 className="w-4 h-4 text-accent-violet" />
                <span>Complete Technology Stack</span>
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" size="md">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Target Academic Departments */}
            <div className="p-4 rounded-xl bg-dark-850 border border-white/5 flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-gray-300 font-semibold block">
                  Recommended Academic Disciplines
                </span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.suitableFor.map((dept) => (
                    <span
                      key={dept}
                      className="text-xs text-gray-200 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 font-medium"
                    >
                      {dept}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sample Viva Defense Questions Coaching */}
            <div className="p-4 sm:p-5 rounded-xl bg-dark-850/90 border border-brand-500/20 space-y-3">
              <div className="flex items-center gap-2 text-brand-300 font-semibold text-xs sm:text-sm font-mono uppercase">
                <HelpCircle className="w-4 h-4 text-brand-400" />
                <span>Sample Viva Examiner Questions We Coach You For</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
                <li className="p-2.5 rounded-lg bg-dark-900 border border-white/5">
                  <strong className="text-white block mb-0.5">
                    1. Why did you choose this specific framework/model over alternatives?
                  </strong>
                  <span className="text-gray-400 text-xs">
                    We provide the exact comparative benchmarks and complexity trade-offs you should explain to the examiner.
                  </span>
                </li>
                <li className="p-2.5 rounded-lg bg-dark-900 border border-white/5">
                  <strong className="text-white block mb-0.5">
                    2. How does your system handle latency bottlenecks or data drift?
                  </strong>
                  <span className="text-gray-400 text-xs">
                    We provide architectural justifications based on chunking strategies, asynchronous task queues, and vector indexing.
                  </span>
                </li>
                <li className="p-2.5 rounded-lg bg-dark-900 border border-white/5">
                  <strong className="text-white block mb-0.5">
                    3. What is the mathematical formulation of your loss/similarity metric?
                  </strong>
                  <span className="text-gray-400 text-xs">
                    We supply full mathematical derivations and formulas ready for your project report and slide presentation.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Sticky Modal Bottom Action Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-gray-400 text-center sm:text-left">
            Need customized modules or a specific IEEE base paper implemented?
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={siteConfig.getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial"
            >
              <Button
                size="md"
                variant="whatsapp"
                className="w-full sm:w-auto"
                icon={<MessageCircle className="w-4 h-4" />}
              >
                Discuss on WhatsApp
              </Button>
            </a>

            <Button
              size="md"
              variant="primary"
              onClick={handleContactForm}
              className="flex-1 sm:flex-initial"
              icon={<Sparkles className="w-4 h-4" />}
            >
              Request Guidance
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
