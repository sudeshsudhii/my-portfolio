import type { Metadata } from "next";
import { Star, GitBranch, Terminal, Shield, Code, Map as MapIcon, Users } from "lucide-react";
import { GithubIcon as Github } from "@/components/icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Open Source | Sudesh P",
  description: "Open source contributions, OmniSLM, and repository highlights.",
};

export default function OpenSourcePage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--fg-primary)] mb-6">
          Open Source
        </h1>
        <p className="text-xl text-[var(--fg-secondary)] leading-relaxed mb-6">
          I believe the future of AI is open, local, and accessible. My open-source work focuses on creating tools and frameworks that empower developers to build intelligent systems without relying on walled gardens.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/sudeshsudhii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-[var(--radius-sm)] bg-[var(--fg-primary)] text-[var(--bg-primary)] hover:bg-[var(--fg-secondary)] transition-colors no-underline"
          >
            <Github size={16} /> GitHub Profile
          </a>
        </div>
      </div>

      <div className="space-y-16">
        
        {/* OmniSLM Highlight */}
        <section className="p-8 rounded-[var(--radius-lg)] border-2 border-[var(--border-subtle)] bg-[var(--bg-secondary)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Github size={200} />
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-xs font-bold uppercase tracking-widest text-[var(--fg-primary)]">
              Flagship Project
            </div>
            <h2 className="text-3xl font-bold text-[var(--fg-primary)] mb-4">OmniSLM</h2>
            <p className="text-[var(--fg-secondary)] leading-relaxed mb-6 max-w-xl">
              OmniSLM is an open-source framework designed to streamline the creation of production-ready AI applications powered by small, locally-hosted language models.
            </p>
            <div className="flex items-center gap-6 mb-8 text-sm font-medium text-[var(--fg-secondary)]">
              <span className="flex items-center gap-2"><Star size={16} className="text-yellow-500" /> Starred</span>
              <span className="flex items-center gap-2"><GitBranch size={16} /> MIT License</span>
              <span className="flex items-center gap-2"><Terminal size={16} /> Python</span>
            </div>
            <div className="flex gap-4">
              <Link
                href="/projects/omnislm"
                className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:text-[var(--fg-primary)] transition-colors"
              >
                Read Case Study →
              </Link>
            </div>
          </div>
        </section>

        {/* Contribution Philosophy */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--fg-primary)] mb-6 border-b border-[var(--border-subtle)] pb-2">Contribution Philosophy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border border-[var(--border-subtle)] rounded-[var(--radius-md)] bg-[var(--bg-secondary)]">
              <Shield className="text-[var(--fg-primary)] mb-4" size={24} />
              <h3 className="font-bold text-[var(--fg-primary)] mb-2">Privacy First</h3>
              <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">Code should run locally by default. I prioritize architectures that don&apos;t require sending sensitive data to third-party APIs.</p>
            </div>
            <div className="p-6 border border-[var(--border-subtle)] rounded-[var(--radius-md)] bg-[var(--bg-secondary)]">
              <Code className="text-[var(--fg-primary)] mb-4" size={24} />
              <h3 className="font-bold text-[var(--fg-primary)] mb-2">Developer Experience</h3>
              <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">Documentation is a feature, not an afterthought. I strive to provide clear examples, comprehensive type hints, and robust testing.</p>
            </div>
          </div>
        </section>

        {/* Future Roadmap & Planned Features */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--fg-primary)] mb-6 border-b border-[var(--border-subtle)] pb-2">Roadmap & Planned Features</h2>
          <div className="space-y-4">
            <div className="p-5 border border-[var(--border-subtle)] rounded-[var(--radius-md)] bg-[var(--bg-secondary)] flex gap-4">
              <MapIcon className="text-[var(--fg-tertiary)] shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-bold text-[var(--fg-primary)] mb-1">vLLM Native Integration for OmniSLM</h3>
                <p className="text-sm text-[var(--fg-secondary)]">Moving beyond Ollama to support high-throughput, paged-attention inference via vLLM directly within the OmniSLM runtime layer.</p>
              </div>
            </div>
            <div className="p-5 border border-[var(--border-subtle)] rounded-[var(--radius-md)] bg-[var(--bg-secondary)] flex gap-4">
              <MapIcon className="text-[var(--fg-tertiary)] shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-bold text-[var(--fg-primary)] mb-1">Visual Agent Builder</h3>
                <p className="text-sm text-[var(--fg-secondary)]">A React Flow based graphical interface for connecting OmniSLM agents, tools, and memory stores without writing code.</p>
              </div>
            </div>
            <div className="p-5 border border-[var(--border-subtle)] rounded-[var(--radius-md)] bg-[var(--bg-secondary)] flex gap-4">
              <MapIcon className="text-[var(--fg-tertiary)] shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-bold text-[var(--fg-primary)] mb-1">Spring AI Enterprise Extensions</h3>
                <p className="text-sm text-[var(--fg-secondary)]">Publishing open-source Java libraries that add advanced RAG re-ranking capabilities to the Spring AI ecosystem.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Community Goals */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--fg-primary)] mb-6 border-b border-[var(--border-subtle)] pb-2">Community Goals</h2>
          <div className="p-6 border border-[var(--border-subtle)] rounded-[var(--radius-md)] bg-[var(--bg-secondary)]">
            <div className="flex gap-4 items-start">
              <Users className="text-[var(--fg-primary)] shrink-0 mt-1" size={24} />
              <div>
                <p className="text-[var(--fg-secondary)] leading-relaxed mb-4">
                  My long-term goal is to build a community around OmniSLM that bridges the gap between academic AI research and production engineering. I actively welcome contributions in the form of:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--fg-secondary)]">
                  <li>New Agent Tool integrations (APIs, calculators, shells)</li>
                  <li>Vector Database adapters (Milvus, Pinecone, Chroma)</li>
                  <li>Performance optimizations for the memory retrieval layer</li>
                  <li>Documentation improvements and tutorial creation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Repository Highlights */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--fg-primary)] mb-6 border-b border-[var(--border-subtle)] pb-2">Repository Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="https://github.com/sudeshsudhii/SeedTracking" target="_blank" rel="noopener noreferrer" className="block p-5 border border-[var(--border-subtle)] rounded-[var(--radius-md)] hover:border-[var(--border)] bg-[var(--bg-secondary)] transition-colors no-underline">
              <h3 className="font-bold text-[var(--fg-primary)] mb-2 flex items-center gap-2"><Github size={16}/> SeedTracking</h3>
              <p className="text-sm text-[var(--fg-secondary)]">Blockchain-based supply chain with ML fraud detection.</p>
            </a>
            <a href="https://github.com/sudeshsudhii/Local-LLM-Application" target="_blank" rel="noopener noreferrer" className="block p-5 border border-[var(--border-subtle)] rounded-[var(--radius-md)] hover:border-[var(--border)] bg-[var(--bg-secondary)] transition-colors no-underline">
              <h3 className="font-bold text-[var(--fg-primary)] mb-2 flex items-center gap-2"><Github size={16}/> Local LLM Platform</h3>
              <p className="text-sm text-[var(--fg-secondary)]">Java 21, Spring AI, and WebFlux platform.</p>
            </a>
            <a href="https://github.com/sudeshsudhii/RAG-SYSTEM-FOR-LOCAL-LLM" target="_blank" rel="noopener noreferrer" className="block p-5 border border-[var(--border-subtle)] rounded-[var(--radius-md)] hover:border-[var(--border)] bg-[var(--bg-secondary)] transition-colors no-underline">
              <h3 className="font-bold text-[var(--fg-primary)] mb-2 flex items-center gap-2"><Github size={16}/> RAG System</h3>
              <p className="text-sm text-[var(--fg-secondary)]">Privacy-first pipeline using FAISS and local models.</p>
            </a>
            <a href="https://github.com/sudeshsudhii/PaathAI" target="_blank" rel="noopener noreferrer" className="block p-5 border border-[var(--border-subtle)] rounded-[var(--radius-md)] hover:border-[var(--border)] bg-[var(--bg-secondary)] transition-colors no-underline">
              <h3 className="font-bold text-[var(--fg-primary)] mb-2 flex items-center gap-2"><Github size={16}/> PaathAI</h3>
              <p className="text-sm text-[var(--fg-secondary)]">AI academic intelligence platform.</p>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
