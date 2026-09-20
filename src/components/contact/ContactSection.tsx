"use client";

import React, { useState, useEffect } from "react";
import { domainsData } from "@/data/domains";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { ContactFormData } from "@/types";
import {
  Send,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Building,
  GraduationCap,
  Mail,
  Phone,
  User,
  FileText,
  X,
} from "lucide-react";

interface ContactSectionProps {
  initialDomain?: string;
  initialRequirement?: string;
}

export function ContactSection({
  initialDomain = "",
  initialRequirement = "",
}: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    college: "",
    branch: "",
    projectDomain: initialDomain || "Generative AI & LLMs",
    projectRequirement: initialRequirement || "",
    whatsappNumber: "",
    email: "",
  });

  const [hasPrefilledProject, setHasPrefilledProject] = useState(false);

  useEffect(() => {
    if (initialDomain) {
      setFormData((prev) => ({ ...prev, projectDomain: initialDomain }));
    }
    if (initialRequirement) {
      setFormData((prev) => ({
        ...prev,
        projectRequirement: initialRequirement,
      }));
      setHasPrefilledProject(true);
    }
  }, [initialDomain, initialRequirement]);

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim()) newErrors.name = "Full Name is required";
    if (!formData.college.trim()) newErrors.college = "College Name is required";
    if (!formData.branch.trim()) newErrors.branch = "Engineering Branch is required";
    if (!formData.projectRequirement.trim()) {
      newErrors.projectRequirement = "Please summarize your project idea or requirement";
    }

    // RFC compliant Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // WhatsApp validation (minimum 10 digits)
    const cleanPhone = formData.whatsappNumber.replace(/[^0-9]/g, "");
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = "WhatsApp number is required";
    } else if (cleanPhone.length < 10) {
      newErrors.whatsappNumber = "Please enter a valid 10-digit WhatsApp phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setIsSubmitted(true);
    } catch (err) {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Direct WhatsApp prefill message from form data
  const generateWhatsAppMessage = () => {
    const text = `Hi BTech Project Hub,
My name is ${formData.name || "Student"} from ${formData.college || "College"} (${formData.branch || "Branch"}).
Domain: ${formData.projectDomain}
Requirement: ${formData.projectRequirement || "Need final year project guidance"}
Email: ${formData.email || "N/A"}`;

    return siteConfig.getWhatsAppUrl(text);
  };

  const handleResetPrefill = () => {
    setHasPrefilledProject(false);
    setFormData((prev) => ({
      ...prev,
      projectRequirement: "",
      projectDomain: "Generative AI & LLMs",
    }));
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-dark-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono uppercase tracking-wider mb-3">
            Direct Technical Mentorship
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Request Project Guidance
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
            Fill in your project requirements below. Our technical team will review your specifications, evaluate feasibility, and connect with a tailored development plan.
          </p>
        </div>

        {/* Contact Form Container */}
        <div className="rounded-3xl bg-dark-900 border border-white/10 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Active Prefill Banner */}
          {hasPrefilledProject && !isSubmitted && (
            <div className="mb-6 p-3.5 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-between text-xs text-brand-300 animate-in fade-in duration-200">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-400 shrink-0" />
                <span>
                  <strong>Selected Blueprint:</strong> Requirements prefilled from project catalog.
                </span>
              </span>
              <button
                type="button"
                onClick={handleResetPrefill}
                className="text-gray-400 hover:text-white p-1 rounded transition-colors"
                title="Reset prefill"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-12 space-y-5 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Guidance Request Received
                </h3>
                <p className="text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your project requirement in <strong className="text-brand-300">{formData.projectDomain}</strong> has been logged. An engineering mentor will evaluate your scope and reach out via WhatsApp/Email shortly.
                </p>
              </div>

              {/* Instant WhatsApp alternative */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="md"
                    variant="whatsapp"
                    icon={<MessageCircle className="w-4 h-4" />}
                  >
                    Send Details on WhatsApp Instantly
                  </Button>
                </a>

                <Button
                  size="md"
                  variant="secondary"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      college: "",
                      branch: "",
                      projectDomain: "Generative AI & LLMs",
                      projectRequirement: "",
                      whatsappNumber: "",
                      email: "",
                    });
                    setHasPrefilledProject(false);
                  }}
                >
                  Submit Another Project
                </Button>
              </div>
            </div>
          ) : (
            /* Active Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-brand-400" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full px-4 py-2.5 rounded-xl bg-dark-800 border ${
                      errors.name ? "border-rose-500" : "border-white/10"
                    } text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-500`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </span>
                  )}
                </div>

                {/* College */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-brand-400" />
                    <span>College / University Name *</span>
                  </label>
                  <input
                    type="text"
                    value={formData.college}
                    onChange={(e) =>
                      setFormData({ ...formData, college: e.target.value })
                    }
                    placeholder="e.g. BITS Pilani / Anna University / VTU"
                    className={`w-full px-4 py-2.5 rounded-xl bg-dark-800 border ${
                      errors.college ? "border-rose-500" : "border-white/10"
                    } text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-500`}
                  />
                  {errors.college && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.college}
                    </span>
                  )}
                </div>

                {/* Branch */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-brand-400" />
                    <span>Engineering Branch *</span>
                  </label>
                  <input
                    type="text"
                    value={formData.branch}
                    onChange={(e) =>
                      setFormData({ ...formData, branch: e.target.value })
                    }
                    placeholder="e.g. Computer Science (CSE), AI & DS, IT, ECE"
                    className={`w-full px-4 py-2.5 rounded-xl bg-dark-800 border ${
                      errors.branch ? "border-rose-500" : "border-white/10"
                    } text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-500`}
                  />
                  {errors.branch && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.branch}
                    </span>
                  )}
                </div>

                {/* Project Domain */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-accent-violet" />
                    <span>Project Domain *</span>
                  </label>
                  <select
                    value={formData.projectDomain}
                    onChange={(e) =>
                      setFormData({ ...formData, projectDomain: e.target.value })
                    }
                    aria-label="Select project domain"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-sm text-white focus:outline-none focus:border-brand-500"
                  >
                    {domainsData.map((dom) => (
                      <option key={dom.id} value={dom.title}>
                        {dom.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* WhatsApp Number */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Number *</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsappNumber}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        whatsappNumber: e.target.value,
                      })
                    }
                    placeholder="e.g. +91 98765 43210"
                    className={`w-full px-4 py-2.5 rounded-xl bg-dark-800 border ${
                      errors.whatsappNumber
                        ? "border-rose-500"
                        : "border-white/10"
                    } text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-500`}
                  />
                  {errors.whatsappNumber && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" />{" "}
                      {errors.whatsappNumber}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-brand-400" />
                    <span>Email Address *</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="e.g. rahul@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-dark-800 border ${
                      errors.email ? "border-rose-500" : "border-white/10"
                    } text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-500`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Project Requirement Textarea */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-brand-400" />
                    <span>Project Requirement / Problem Statement / Base Paper Details *</span>
                  </label>
                  <span className="text-[11px] font-mono text-gray-400">
                    {formData.projectRequirement.length} chars
                  </span>
                </div>
                <textarea
                  rows={4}
                  value={formData.projectRequirement}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      projectRequirement: e.target.value,
                    })
                  }
                  placeholder="Describe your project topic, preferred technology stack, specific modules, base paper link/title (if any), or tell us if you need help choosing a topic..."
                  className={`w-full px-4 py-3 rounded-xl bg-dark-800 border ${
                    errors.projectRequirement
                      ? "border-rose-500"
                      : "border-white/10"
                  } text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-brand-500 resize-y`}
                />
                {errors.projectRequirement && (
                  <span className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3 h-3" />{" "}
                    {errors.projectRequirement}
                  </span>
                )}
              </div>

              {/* Submit Button & WhatsApp Alternative */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  isLoading={isSubmitting}
                  className="w-full sm:w-auto font-semibold"
                  icon={<Send className="w-4 h-4" />}
                >
                  Request Project Guidance
                </Button>

                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>Prefer immediate discussion?</span>
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
