"use client";

import React, { useState, useMemo } from "react";
import { projectsData, getProjectFilterOptions } from "@/data/projects";
import { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { ProjectDetailModal } from "./ProjectDetailModal";
import {
  Search,
  Filter,
  Layers,
  RotateCcw,
  Sparkles,
  ArrowRight,
  Code2,
} from "lucide-react";

interface ProjectsSectionProps {
  selectedDomain?: string;
  onSelectForContact?: (project: Project) => void;
}

export function ProjectsSection({
  selectedDomain,
  onSelectForContact,
}: ProjectsSectionProps) {
  const [domainFilter, setDomainFilter] = useState<string>(selectedDomain || "All");
  const [techFilter, setTechFilter] = useState<string>("All");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  // Sync if prop selectedDomain changes
  React.useEffect(() => {
    if (selectedDomain) {
      setDomainFilter(selectedDomain);
    }
  }, [selectedDomain]);

  const { domains, technologies, projectTypes } = useMemo(
    () => getProjectFilterOptions(),
    []
  );

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchDomain =
        domainFilter === "All" || project.domain === domainFilter;
      const matchTech =
        techFilter === "All" || project.technologies.includes(techFilter);
      const matchType =
        typeFilter === "All" || project.projectType === typeFilter;
      const matchSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.problemStatement.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchDomain && matchTech && matchType && matchSearch;
    });
  }, [domainFilter, techFilter, typeFilter, searchQuery]);

  const isFiltered =
    domainFilter !== "All" ||
    techFilter !== "All" ||
    typeFilter !== "All" ||
    searchQuery.trim() !== "";

  const handleResetFilters = () => {
    setDomainFilter("All");
    setTechFilter("All");
    setTypeFilter("All");
    setSearchQuery("");
  };

  return (
    <section id="projects" className="py-20 md:py-28 bg-dark-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-mono uppercase tracking-wider mb-3">
            Production-Grade Implementations
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Popular Final Year Project Ideas
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
            Explore curated, industry-relevant capstone blueprints. Each project is engineered with modular architecture, full documentation, test datasets, and viva preparation.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-dark-900 border border-white/[0.08] shadow-lg mb-10 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-3 items-center">
            {/* Search Input */}
            <div className="sm:col-span-2 md:col-span-5 relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, keyword, or tech (e.g. RAG, FastAPI, BERT)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-xs sm:text-sm placeholder:text-gray-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
              />
            </div>

            {/* Tech Stack Filter Dropdown */}
            <div className="md:col-span-3">
              <select
                value={techFilter}
                onChange={(e) => setTechFilter(e.target.value)}
                aria-label="Filter by technology"
                className="w-full py-2.5 px-3 rounded-xl bg-dark-800 border border-white/10 text-xs sm:text-sm text-gray-200 focus:outline-none focus:border-brand-500"
              >
                <option value="All">All Technologies ({technologies.length})</option>
                {technologies.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Project Type Filter Dropdown */}
            <div className="md:col-span-3">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                aria-label="Filter by project type"
                className="w-full py-2.5 px-3 rounded-xl bg-dark-800 border border-white/10 text-xs sm:text-sm text-gray-200 focus:outline-none focus:border-brand-500"
              >
                <option value="All">All Project Types ({projectTypes.length})</option>
                {projectTypes.map((pt) => (
                  <option key={pt} value={pt}>
                    {pt}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset / Count Display */}
            <div className="md:col-span-1 flex items-center justify-end">
              {isFiltered ? (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  title="Reset all filters"
                  className="w-full md:w-auto h-full flex items-center justify-center p-2.5 rounded-xl bg-brand-500/10 hover:bg-brand-500/20 text-brand-400 border border-brand-500/20 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              ) : (
                <span className="text-[11px] font-mono text-gray-400 hidden md:inline-block">
                  {projectsData.length} Total
                </span>
              )}
            </div>
          </div>

          {/* Domain Chips Scrollable Bar */}
          <div className="pt-2 border-t border-white/5 flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" />
              <span>Domain:</span>
            </span>

            <button
              type="button"
              onClick={() => setDomainFilter("All")}
              className={`text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                domainFilter === "All"
                  ? "bg-brand-600 text-white shadow-sm"
                  : "bg-dark-800 text-gray-400 hover:text-gray-200 hover:bg-dark-750"
              }`}
            >
              All Domains ({projectsData.length})
            </button>

            {domains.map((dom) => {
              const count = projectsData.filter((p) => p.domain === dom).length;
              return (
                <button
                  key={dom}
                  type="button"
                  onClick={() => setDomainFilter(dom)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    domainFilter === dom
                      ? "bg-brand-600 text-white shadow-sm"
                      : "bg-dark-800 text-gray-400 hover:text-gray-200 hover:bg-dark-750"
                  }`}
                >
                  <span>{dom}</span>
                  <span className="text-[10px] opacity-75 font-mono">({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count Bar */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-6 px-1">
          <span>
            Showing <strong className="text-white">{filteredProjects.length}</strong> of {projectsData.length} blueprints
          </span>
          {isFiltered && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-brand-400 hover:text-brand-300 font-medium inline-flex items-center gap-1"
            >
              <RotateCcw className="w-3 h-3" /> Clear filters
            </button>
          )}
        </div>

        {/* Projects Cards Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onViewDetails={(proj) => setActiveModalProject(proj)}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 rounded-2xl bg-dark-900 border border-white/5 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-white/5 text-gray-400 flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">
              No projects matching your active criteria
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
              Try adjusting your technology or domain filters, or contact us directly to discuss custom engineering for your approved college topic.
            </p>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 px-4 py-2 rounded-xl bg-brand-500/10 border border-brand-500/20"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        )}

        {/* Extensible Project Addition Note / Custom Idea Banner */}
        <div className="mt-14 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-dark-900 via-dark-850 to-dark-900 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="text-sm sm:text-base font-semibold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-accent-violet shrink-0" />
              <span>Have an approved custom topic or IEEE base paper?</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 max-w-xl">
              We engineer custom project architectures from scratch according to your university guide&apos;s exact requirements and deliverables.
            </p>
          </div>

          <a href="#contact" className="shrink-0 w-full sm:w-auto">
            <button
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white transition-all shadow-sm"
            >
              <span>Submit Custom Topic</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onSelectForContact={onSelectForContact}
      />
    </section>
  );
}
