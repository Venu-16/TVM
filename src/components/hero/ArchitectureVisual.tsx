"use client";

import React, { useState } from "react";
import {
  Layers,
  Code2,
  Cpu,
  Database,
  CheckCircle2,
  Terminal,
  FileCode,
  Sparkles,
  Copy,
  Check,
  ChevronRight,
  ShieldCheck,
  Activity,
} from "lucide-react";

export function ArchitectureVisual() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "code">("pipeline");
  const [selectedNode, setSelectedNode] = useState<number>(2); // Default to RAG node
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const nodeDetails = [
    {
      id: 1,
      name: "Ingestion & ETL Pipeline",
      layer: "Phase 01: Preprocessing",
      metrics: [
        { label: "Document Format", value: "PDF / DOCX / LaTeX" },
        { label: "Chunk Strategy", value: "Semantic Sliding Window (512 tokens)" },
        { label: "Clean Repos", value: "Automated OCR & Normalization" },
      ],
      description:
        "Normalizes university datasets, research papers, and telemetry logs while stripping noise and formatting tabular references.",
    },
    {
      id: 2,
      name: "Hybrid Vector Search (768-D)",
      layer: "Phase 02: Retrieval & Indexing",
      metrics: [
        { label: "Vector Index", value: "ChromaDB / FAISS HNSW" },
        { label: "Top-k Retrieval", value: "k=3 with Cross-Encoder Rerank" },
        { label: "Cosine Threshold", value: "0.82 Similarity Cutoff" },
      ],
      description:
        "Generates dense semantic embeddings and executes hybrid sparse-dense retrieval to eliminate hallucination in viva demonstrations.",
    },
    {
      id: 3,
      name: "FastAPI Inference Engine",
      layer: "Phase 03: Synthesis & Serving",
      metrics: [
        { label: "Response Latency", value: "114ms (Asynchronous)" },
        { label: "Grounding Check", value: "Strict Parenthetical Citation" },
        { label: "Framework", value: "FastAPI + Pydantic v2" },
      ],
      description:
        "Serves asynchronous REST endpoints with input guardrails, citation metadata extraction, and SSE streaming for modern web clients.",
    },
  ];

  const pythonCode = `from fastapi import FastAPI, Depends, HTTPException
from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings
from pydantic import BaseModel, Field

app = FastAPI(title="Capstone Inference Engine", version="1.0.0")

class GuidanceRequest(BaseModel):
    query: str = Field(..., example="What are the soil remediation steps for blight?")
    top_k: int = Field(default=3, ge=1, le=10)

@app.post("/api/v1/infer")
async def execute_grounded_rag(payload: GuidanceRequest):
    """
    Production Capstone Module:
    Executes hybrid dense-retrieval and strictly bounded citation synthesis.
    """
    retriever = Chroma(collection_name="capstone_docs").as_retriever(
        search_kwargs={"k": payload.top_k}
    )
    relevant_chunks = await retriever.ainvoke(payload.query)
    
    # Grounded generation with citation verification
    return {
        "status": "success",
        "evidence_chunks": len(relevant_chunks),
        "verified_answer": "Analysis confirmed with ICAR publication guidelines.",
        "viva_defense_ready": True
    }`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(pythonCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto lg:max-w-none">
      {/* Subtle outer glow ambient lighting */}
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-600/25 via-accent-violet/20 to-cyan-500/15 rounded-2xl blur-xl opacity-60 pointer-events-none" />

      {/* Main Container Window */}
      <div className="relative rounded-2xl border border-white/[0.12] bg-dark-900/95 backdrop-blur-2xl shadow-2xl overflow-hidden">
        {/* Terminal / Code Window Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-white/[0.08] bg-dark-850/90">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs font-mono text-gray-300 flex items-center gap-1.5 font-medium">
              <Terminal className="w-3.5 h-3.5 text-brand-400" />
              <span className="hidden xs:inline text-gray-400">pipeline://</span>
              <span>capstone-ai-engine.py</span>
            </span>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center bg-dark-950/90 p-1 rounded-xl border border-white/5 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("pipeline")}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                activeTab === "pipeline"
                  ? "bg-brand-600 text-white shadow-sm border border-brand-400/40"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Architecture</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("code")}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                activeTab === "code"
                  ? "bg-brand-600 text-white shadow-sm border border-brand-400/40"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </button>
          </div>
        </div>

        {/* Tab 1: System Architecture Pipeline View */}
        {activeTab === "pipeline" ? (
          <div className="p-4 sm:p-6 space-y-4">
            {/* Top Telemetry Strip */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/[0.06] text-xs">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-mono text-gray-300 font-semibold text-[11px]">
                  STATUS: LIVE INFERENCE PIPELINE
                </span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[11px] text-gray-400">
                <span className="hidden sm:inline">
                  ENGINE: <span className="text-white">FASTAPI + CHROMA</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  LATENCY: 114MS
                </span>
              </div>
            </div>

            {/* Interactive Pipeline Steps */}
            <div className="space-y-2.5">
              {/* Step 1 */}
              <div
                onClick={() => setSelectedNode(1)}
                className={`cursor-pointer p-3.5 sm:p-4 rounded-xl transition-all duration-200 border ${
                  selectedNode === 1
                    ? "bg-dark-800 border-brand-500/50 shadow-glow-sm"
                    : "bg-dark-850/80 border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                        <span>01. Ingestion &amp; Preprocessing Layer</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-gray-400">
                          ETL
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5 line-clamp-1">
                        PDF/CSV parsing, tokenization, semantic chunk normalization
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      selectedNode === 1 ? "rotate-90 text-brand-400" : "text-gray-400"
                    }`}
                  />
                </div>
              </div>

              {/* Connector line */}
              <div className="flex items-center justify-center -my-1.5 py-0.5">
                <div className="h-3 w-px bg-gradient-to-b from-blue-500/60 to-accent-violet/60" />
              </div>

              {/* Step 2 */}
              <div
                onClick={() => setSelectedNode(2)}
                className={`cursor-pointer p-3.5 sm:p-4 rounded-xl transition-all duration-200 border ${
                  selectedNode === 2
                    ? "bg-dark-800 border-accent-violet/60 shadow-glow-sm"
                    : "bg-dark-850/80 border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center text-accent-violet shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                        <span>02. Hybrid Vector Search &amp; RAG Index</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-accent-violet/20 text-accent-violet font-semibold">
                          Dense 768-D
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5 line-clamp-1">
                        ChromaDB / FAISS similarity index with cross-encoder re-ranking
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      selectedNode === 2 ? "rotate-90 text-accent-violet" : "text-gray-400"
                    }`}
                  />
                </div>
              </div>

              {/* Connector line */}
              <div className="flex items-center justify-center -my-1.5 py-0.5">
                <div className="h-3 w-px bg-gradient-to-b from-accent-violet/60 to-cyan-500/60" />
              </div>

              {/* Step 3 */}
              <div
                onClick={() => setSelectedNode(3)}
                className={`cursor-pointer p-3.5 sm:p-4 rounded-xl transition-all duration-200 border ${
                  selectedNode === 3
                    ? "bg-dark-800 border-cyan-500/50 shadow-glow-sm"
                    : "bg-dark-850/80 border-white/5 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                        <span>03. Inference Engine &amp; API Service</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-gray-400">
                          FastAPI
                        </span>
                      </div>
                      <p className="text-[11px] sm:text-xs text-gray-400 mt-0.5 line-clamp-1">
                        Grounded LLM context generation, confidence scoring &amp; citations
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      selectedNode === 3 ? "rotate-90 text-cyan-400" : "text-gray-400"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Active Node Inspector Box */}
            <div className="p-4 rounded-xl bg-dark-950/70 border border-white/10 space-y-2 animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-brand-400 font-semibold uppercase tracking-wider">
                  Inspector: {nodeDetails[selectedNode - 1].layer}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Architecture Active
                </span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                {nodeDetails[selectedNode - 1].description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-white/5">
                {nodeDetails[selectedNode - 1].metrics.map((m, i) => (
                  <div key={i} className="p-2 rounded-lg bg-dark-900 border border-white/5">
                    <span className="text-[10px] font-mono text-gray-400 block uppercase">
                      {m.label}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-white block mt-0.5">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Deliverables Strip */}
            <div className="pt-1 grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-gray-400 block">DOCUMENTATION</span>
                <span className="text-white font-semibold mt-0.5 block">IEEE / Univ Standard</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-gray-400 block">SOURCE CODE</span>
                <span className="text-emerald-400 font-semibold mt-0.5 block">Modular &amp; Clean</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="text-gray-400 block">VIVA PREP</span>
                <span className="text-brand-400 font-semibold mt-0.5 block">50+ Defense Q&amp;As</span>
              </div>
            </div>
          </div>
        ) : (
          /* Tab 2: Clean Code Implementation Preview */
          <div className="p-4 sm:p-5 font-mono text-xs bg-dark-950/90 leading-relaxed text-gray-300 relative">
            <div className="flex items-center justify-between text-xs text-gray-400 mb-3 pb-2 border-b border-white/10">
              <div className="flex items-center gap-2 text-[11px]">
                <FileCode className="w-3.5 h-3.5 text-brand-400" />
                <span>app/api/endpoints/rag_inference.py</span>
              </div>
              <button
                type="button"
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors text-[11px]"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="overflow-x-auto max-h-[360px] custom-scrollbar">
              <pre className="text-[11px] sm:text-xs">
                <code>
                  <span className="text-violet-400">from</span> fastapi{" "}
                  <span className="text-violet-400">import</span> FastAPI, Depends, HTTPException
                  {"\n"}
                  <span className="text-violet-400">from</span> langchain_community.vectorstores{" "}
                  <span className="text-violet-400">import</span> Chroma
                  {"\n"}
                  <span className="text-violet-400">from</span> langchain_openai{" "}
                  <span className="text-violet-400">import</span> OpenAIEmbeddings
                  {"\n"}
                  <span className="text-violet-400">from</span> pydantic{" "}
                  <span className="text-violet-400">import</span> BaseModel, Field
                  {"\n\n"}
                  app = FastAPI(title=<span className="text-emerald-300">&quot;Capstone Inference Engine&quot;</span>)
                  {"\n\n"}
                  <span className="text-gray-400"># Validated Capstone Request Model</span>
                  {"\n"}
                  <span className="text-blue-400">class</span>{" "}
                  <span className="text-amber-300">GuidanceRequest</span>(BaseModel):
                  {"\n"}
                  {"    "}query: <span className="text-cyan-300">str</span> = Field(..., example=<span className="text-emerald-300">&quot;Soil blight remediation&quot;</span>)
                  {"\n"}
                  {"    "}top_k: <span className="text-cyan-300">int</span> = Field(default=3, ge=1, le=10)
                  {"\n\n"}
                  <span className="text-violet-400">@app.post</span>(<span className="text-emerald-300">&quot;/api/v1/infer&quot;</span>)
                  {"\n"}
                  <span className="text-blue-400">async def</span>{" "}
                  <span className="text-amber-300">execute_grounded_rag</span>(payload: GuidanceRequest):
                  {"\n"}
                  {"    "}retriever = Chroma(collection_name=<span className="text-emerald-300">&quot;capstone_docs&quot;</span>).as_retriever(
                  {"\n"}
                  {"        "}search_kwargs=&#123;<span className="text-emerald-300">&quot;k&quot;</span>: payload.top_k&#125;
                  {"\n"}
                  {"    "})
                  {"\n"}
                  {"    "}relevant_chunks = <span className="text-blue-400">await</span> retriever.ainvoke(payload.query)
                  {"\n"}
                  {"    "}<span className="text-violet-400">return</span> &#123;
                  {"\n"}
                  {"        "}<span className="text-emerald-300">&quot;evidence_chunks&quot;</span>: len(relevant_chunks),
                  {"\n"}
                  {"        "}<span className="text-emerald-300">&quot;verified_answer&quot;</span>: <span className="text-emerald-300">&quot;Analysis grounded on ICAR research.&quot;</span>,
                  {"\n"}
                  {"        "}<span className="text-emerald-300">&quot;viva_defense_ready&quot;</span>: <span className="text-blue-400">True</span>
                  {"\n"}
                  {"    "}&#125;
                </code>
              </pre>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" /> Annotated Clean Architecture
              </span>
              <span>Python 3.11 • Fast, Async &amp; Typed</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
