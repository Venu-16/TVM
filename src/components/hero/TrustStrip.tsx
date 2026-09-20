import React from "react";
import { GitMerge, Code, FileText, Award } from "lucide-react";

export function TrustStrip() {
  const cards = [
    {
      title: "End-to-End Support",
      description: "From problem statement & architecture to implementation, test datasets & delivery.",
      icon: GitMerge,
      color: "text-blue-400",
      bg: "bg-blue-500/10 border-blue-500/20",
    },
    {
      title: "Industry-Ready Tech",
      description: "FastAPI, LangChain, PyTorch, React, and modern microservices — no legacy clones.",
      icon: Code,
      color: "text-accent-violet",
      bg: "bg-violet-500/10 border-violet-500/20",
    },
    {
      title: "Project Documentation",
      description: "University-compliant project reports, PPT presentation decks, and IEEE paper drafting.",
      icon: FileText,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10 border-cyan-500/20",
    },
    {
      title: "Viva Preparation",
      description: "Deep conceptual explanation sessions and 50+ anticipated examiner defense questions.",
      icon: Award,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10 border-emerald-500/20",
    },
  ];

  return (
    <section className="relative z-20 -mt-4 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group p-5 rounded-2xl bg-dark-900/80 border border-white/[0.08] hover:border-white/20 transition-all duration-300 shadow-md backdrop-blur-sm flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-10 h-10 rounded-xl ${card.bg} border flex items-center justify-center mb-3.5 group-hover:scale-105 transition-transform`}
                  >
                    <Icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-gray-300 mt-1.5 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
