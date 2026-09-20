"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/hero/HeroSection";
import { TrustStrip } from "@/components/hero/TrustStrip";
import { DomainsSection } from "@/components/domains/DomainsSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { ServicesSection } from "@/components/services/ServicesSection";
import { ProcessSection } from "@/components/process/ProcessSection";
import { WhyUsSection } from "@/components/why-us/WhyUsSection";
import { TechStackSection } from "@/components/tech-stack/TechStackSection";
import { PricingSection } from "@/components/pricing/PricingSection";
import { FAQSection } from "@/components/faq/FAQSection";
import { LeadBanner } from "@/components/contact/LeadBanner";
import { ContactSection } from "@/components/contact/ContactSection";
import { Project } from "@/types";

export default function HomePage() {
  const [selectedDomain, setSelectedDomain] = useState<string>("All");
  const [contactInitialDomain, setContactInitialDomain] = useState<string>("");
  const [contactInitialRequirement, setContactInitialRequirement] = useState<string>("");

  const handleDomainSelect = (domainTitle: string) => {
    setSelectedDomain(domainTitle);
  };

  const handleSelectProjectForContact = (project: Project) => {
    setContactInitialDomain(project.domain);
    setContactInitialRequirement(
      `Interested in project guidance for: "${project.title}". Need assistance with modular implementation, documentation, and viva preparation.`
    );
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Trust Strip (4 compact value cards immediately below hero) */}
      <TrustStrip />

      {/* 3. Domains Section */}
      <DomainsSection onSelectDomain={handleDomainSelect} />

      {/* 4. Featured Projects Ideas with Filtering & Modal */}
      <ProjectsSection
        selectedDomain={selectedDomain}
        onSelectForContact={handleSelectProjectForContact}
      />

      {/* 5. What We Provide (17 deliverables in 3 pillars) */}
      <ServicesSection />

      {/* 6. How It Works (4-step lifecycle) */}
      <ProcessSection />

      {/* 7. Why Students Choose Us (8 grounded engineering points) */}
      <WhyUsSection />

      {/* 8. Modern Technology Ecosystem Wall */}
      <TechStackSection />

      {/* 9. Tailored Packages & Pricing */}
      <PricingSection />

      {/* 10. FAQ Accordion */}
      <FAQSection />

      {/* 11. Lead Generation Banner */}
      <LeadBanner />

      {/* 12. Contact Form with Validation */}
      <ContactSection
        initialDomain={contactInitialDomain}
        initialRequirement={contactInitialRequirement}
      />
    </div>
  );
}
