import type { Metadata } from "next";
import { Layers, Database, Cpu, Lock, Share2, Workflow, Link as LinkIcon, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Architecture | Sudesh P",
  description: "Systems architecture documentation for OmniSLM, RAG pipelines, and enterprise AI platforms.",
};

export default function ArchitecturePage() {
  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--fg-primary)] mb-6">
          Architecture
        </h1>
        <p className="text-xl text-[var(--fg-secondary)] leading-relaxed max-w-3xl">
          High-level system diagrams and structural documentation for my core engineering projects. 
          Focusing on modularity, local execution, and scalable AI infrastructure.
        </p>
      </div>

      <div className="space-y-24">
        
        {/* OmniSLM Architecture */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--fg-primary)]">
              <Layers size={20} />
            </div>
            <h2 className="text-2xl font-bold text-[var(--fg-primary)]">OmniSLM Architecture</h2>
          </div>
          
          <div className="p-8 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] mb-8 overflow-x-auto">
            <div className="min-w-[600px] space-y-4 font-mono text-sm">
              {/* API Layer */}
              <div className="flex justify-center">
                <div className="w-full max-w-md p-4 text-center border border-[var(--border-subtle)] bg-[var(--bg-primary)] rounded-[var(--radius-md)] text-[var(--fg-primary)] shadow-sm">
                  REST API (FastAPI) / WebSocket Gateway
                </div>
              </div>
              <div className="flex justify-center text-[var(--fg-tertiary)]">↓</div>
              
              {/* Orchestration Layer */}
              <div className="flex justify-center">
                <div className="w-full max-w-2xl p-4 border border-[var(--accent)] bg-[var(--accent)] bg-opacity-5 rounded-[var(--radius-md)]">
                  <div className="text-center font-bold text-[var(--accent)] mb-4">Core Orchestrator</div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-3 text-center border border-[var(--border-subtle)] bg-[var(--bg-primary)] rounded-[var(--radius-sm)] text-[var(--fg-secondary)]">
                      Routing Engine
                    </div>
                    <div className="p-3 text-center border border-[var(--border-subtle)] bg-[var(--bg-primary)] rounded-[var(--radius-sm)] text-[var(--fg-secondary)]">
                      Agent Runtime
                    </div>
                    <div className="p-3 text-center border border-[var(--border-subtle)] bg-[var(--bg-primary)] rounded-[var(--radius-sm)] text-[var(--fg-secondary)]">
                      Tool Registry
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center text-[var(--fg-tertiary)]">↓</div>

              {/* Data & Model Layer */}
              <div className="flex justify-center gap-8">
                <div className="w-64 p-4 text-center border border-[var(--border-subtle)] bg-[var(--bg-primary)] rounded-[var(--radius-md)]">
                  <div className="font-bold text-[var(--fg-primary)] mb-2">Memory Engine</div>
                  <div className="text-xs text-[var(--fg-tertiary)]">Vector Store (FAISS) + SQLite Context</div>
                </div>
                <div className="w-64 p-4 text-center border border-[var(--border-subtle)] bg-[var(--bg-primary)] rounded-[var(--radius-md)]">
                  <div className="font-bold text-[var(--fg-primary)] mb-2">Inference Engine</div>
                  <div className="text-xs text-[var(--fg-tertiary)]">Ollama / Local LLM Bridge</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="prose-custom max-w-none">
            <p className="text-[var(--fg-secondary)] leading-relaxed">
              OmniSLM uses a layered architecture designed for extensibility. The Core Orchestrator sits between the API gateway and the underlying inference/memory engines. By abstracting the Vector Store and Inference Engine behind unified interfaces, developers can swap out FAISS for Qdrant, or Ollama for vLLM, without altering their agent logic.
            </p>
          </div>
        </section>

        {/* RAG Pipeline */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--fg-primary)]">
              <Database size={20} />
            </div>
            <h2 className="text-2xl font-bold text-[var(--fg-primary)]">RAG Pipeline Architecture</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <h3 className="font-bold text-[var(--fg-primary)] mb-4 border-b border-[var(--border-subtle)] pb-2">Ingestion Flow</h3>
              <ul className="space-y-3 text-sm text-[var(--fg-secondary)]">
                <li className="flex items-center gap-2"><span className="text-[var(--accent)] font-bold">1.</span> Document Loaders (PDF, TXT, MD)</li>
                <li className="flex items-center gap-2"><span className="text-[var(--accent)] font-bold">2.</span> Semantic Text Splitters (Overlap allowed)</li>
                <li className="flex items-center gap-2"><span className="text-[var(--accent)] font-bold">3.</span> Local Embedding (SentenceTransformers)</li>
                <li className="flex items-center gap-2"><span className="text-[var(--accent)] font-bold">4.</span> Vector Indexing (FAISS / Pinecone)</li>
              </ul>
            </div>
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <h3 className="font-bold text-[var(--fg-primary)] mb-4 border-b border-[var(--border-subtle)] pb-2">Retrieval Flow</h3>
              <ul className="space-y-3 text-sm text-[var(--fg-secondary)]">
                <li className="flex items-center gap-2"><span className="text-[var(--accent)] font-bold">1.</span> Query Expansion & Rewriting</li>
                <li className="flex items-center gap-2"><span className="text-[var(--accent)] font-bold">2.</span> Hybrid Search (Dense Vector + Sparse Keyword)</li>
                <li className="flex items-center gap-2"><span className="text-[var(--accent)] font-bold">3.</span> Cross-Encoder Re-ranking</li>
                <li className="flex items-center gap-2"><span className="text-[var(--accent)] font-bold">4.</span> Context Injection & Prompt Construction</li>
              </ul>
            </div>
          </div>
          
          <p className="text-[var(--fg-secondary)] leading-relaxed">
            The RAG system focuses on <strong>Hybrid Retrieval</strong> to maximize accuracy. Relying solely on dense embeddings often misses exact keyword matches (like acronyms or IDs). By combining dense vector search with sparse retrieval (e.g., BM25) and passing the combined results through a cross-encoder for re-ranking, the pipeline ensures the LLM receives the most relevant context possible.
          </p>
        </section>

        {/* Agent Runtime */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--fg-primary)]">
              <Bot size={20} />
            </div>
            <h2 className="text-2xl font-bold text-[var(--fg-primary)]">Agent Runtime Architecture</h2>
          </div>
          <p className="text-[var(--fg-secondary)] leading-relaxed mb-6">
            Built using a ReAct (Reasoning and Acting) paradigm tailored for smaller context windows. Instead of overwhelming an 8B model with 50 tools, the agent runtime uses a hierarchical routing architecture. A lightweight classifier model selects a specialized sub-agent, which is then provisioned with only the 3-5 tools necessary for its specific domain.
          </p>
        </section>

        {/* Multi-Tenant & Spring AI */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--fg-primary)]">
              <Share2 size={20} />
            </div>
            <h2 className="text-2xl font-bold text-[var(--fg-primary)]">Spring AI Multi-Tenant Platform</h2>
          </div>
          
          <div className="p-8 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] mb-8 overflow-x-auto">
            <div className="min-w-[600px] flex items-center justify-between font-mono text-sm">
              <div className="w-48 p-4 text-center border border-[var(--border-subtle)] bg-[var(--bg-primary)] rounded-[var(--radius-md)]">
                Tenant Context Filter
              </div>
              <div className="text-[var(--fg-tertiary)]">→</div>
              <div className="w-48 p-4 text-center border border-[var(--border-subtle)] bg-[var(--bg-primary)] rounded-[var(--radius-md)]">
                Spring AI Client<br/>(Dynamic Routing)
              </div>
              <div className="text-[var(--fg-tertiary)]">→</div>
              <div className="w-48 space-y-3">
                <div className="p-3 text-center border border-[var(--border-subtle)] bg-[var(--bg-primary)] rounded-[var(--radius-sm)]">Ollama (Local)</div>
                <div className="p-3 text-center border border-[var(--border-subtle)] bg-[var(--bg-primary)] rounded-[var(--radius-sm)]">OpenAI (Fallback)</div>
              </div>
            </div>
          </div>
          <p className="text-[var(--fg-secondary)] leading-relaxed">
            In the Java ecosystem, the Local LLM Platform leverages Spring Boot&apos;s ThreadLocal context (or Reactor Context for WebFlux) to inject tenant IDs into every AI request. This guarantees isolated vector searches and allows per-tenant model configurations (e.g., Tenant A uses local Llama 3 for privacy, Tenant B uses GPT-4 for complex reasoning).
          </p>
        </section>

        {/* Blockchain + AI */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--fg-primary)]">
              <LinkIcon size={20} />
            </div>
            <h2 className="text-2xl font-bold text-[var(--fg-primary)]">Blockchain + AI Architecture</h2>
          </div>
          <p className="text-[var(--fg-secondary)] leading-relaxed mb-6">
            Used in SeedTracking. The architecture creates a clear separation between deterministic consensus and probabilistic inference. Smart contracts on Ethereum govern state transitions (e.g., transferring seed ownership), while an off-chain Python microservice listens to contract events. When a transfer occurs, the Python service fetches the IPFS metadata, runs an ML fraud-detection model, and writes a risk-score back to the blockchain via an Oracle pattern.
          </p>
        </section>

      </div>
    </div>
  );
}
