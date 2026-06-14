import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Terminal, Blocks, Shield, Cpu } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { SoftwareApplicationSchema } from "@/components/seo-schemas";

export const metadata: Metadata = {
  title: "OmniSLM — The Open Source Small Language Model Framework",
  description: "OmniSLM is an open-source Python framework for building production AI applications with Small Language Models. Unifying RAG, memory, and local inference.",
};

export default function OmniSLMPage() {
  return (
    <>
      <SoftwareApplicationSchema />
      
      {/* Hero Section */}
      <section className="border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)] overflow-hidden">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32 pb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-xs font-bold uppercase tracking-widest text-[var(--accent)] shadow-sm">
            Open Source Project
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-[var(--fg-primary)] tracking-tight mb-6">
            OmniSLM
          </h1>
          <p className="text-xl sm:text-2xl text-[var(--fg-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            The production framework for Small Language Models. Build secure, local-first AI applications without the API overhead.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/sudeshsudhii/OmniSLM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-[var(--radius-sm)] bg-[var(--fg-primary)] text-[var(--bg-primary)] hover:bg-[var(--fg-secondary)] transition-colors w-full sm:w-auto"
            >
              <GithubIcon size={18} /> View on GitHub
            </a>
            <Link
              href="/architecture"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold rounded-[var(--radius-sm)] border border-[var(--border)] text-[var(--fg-primary)] bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] transition-colors w-full sm:w-auto"
            >
              <BookOpen size={18} /> Read the Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Problem Statement */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[var(--fg-primary)] mb-6">The Problem</h2>
          <div className="prose prose-neutral dark:prose-invert max-w-none text-lg text-[var(--fg-secondary)] leading-relaxed">
            <p>
              Current AI tooling forces a binary choice: either lock your enterprise data into expensive, opaque cloud APIs (like OpenAI), or spend months gluing together brittle, experimental open-source scripts to run models locally.
            </p>
            <p>
              OmniSLM bridges this gap. It provides a robust, Python-first architecture that treats local inference, vector databases, and multi-agent orchestration as first-class citizens.
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[var(--fg-primary)] mb-10">Core Architecture</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border)] flex items-center justify-center mb-5 text-[var(--fg-primary)]">
                <Terminal size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--fg-primary)] mb-3">Runtime Agnostic</h3>
              <p className="text-[var(--fg-secondary)] leading-relaxed">
                Hot-swap between Ollama, vLLM, or Llama.cpp with a single configuration flag. No need to rewrite your agent logic when you change your inference engine.
              </p>
            </div>
            
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border)] flex items-center justify-center mb-5 text-[var(--fg-primary)]">
                <Blocks size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--fg-primary)] mb-3">Native RAG Engine</h3>
              <p className="text-[var(--fg-secondary)] leading-relaxed">
                Built-in document ingestion, chunking strategies, and hybrid search integrations with FAISS and Qdrant.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border)] flex items-center justify-center mb-5 text-[var(--fg-primary)]">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--fg-primary)] mb-3">Privacy First</h3>
              <p className="text-[var(--fg-secondary)] leading-relaxed">
                Designed for VPCs and air-gapped environments. Zero telemetry, zero external API calls by default.
              </p>
            </div>

            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-[var(--bg-primary)] border border-[var(--border)] flex items-center justify-center mb-5 text-[var(--fg-primary)]">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold text-[var(--fg-primary)] mb-3">Agent SDK</h3>
              <p className="text-[var(--fg-secondary)] leading-relaxed">
                Tools for building autonomous agents capable of tool-use and multi-step reasoning using standard Python functions.
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[var(--fg-primary)] mb-8">Roadmap</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500 flex items-center justify-center shrink-0">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold text-[var(--fg-primary)] mb-1">v0.1: Core Inference Engine</h4>
                <p className="text-sm text-[var(--fg-secondary)]">Basic support for Ollama and initial RAG pipelines using FAISS.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
              <div className="mt-1 w-5 h-5 rounded-full bg-[var(--accent)]/20 border border-[var(--accent)] flex items-center justify-center shrink-0">
                <div className="w-2 h-2 bg-[var(--accent)] rounded-full animate-pulse"></div>
              </div>
              <div>
                <h4 className="font-bold text-[var(--fg-primary)] mb-1">v0.5: Agent Orchestration (Current)</h4>
                <p className="text-sm text-[var(--fg-secondary)]">Introduction of tool-calling, multi-agent communication, and advanced memory management.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-primary)] opacity-60">
              <div className="mt-1 w-5 h-5 rounded-full border border-[var(--border)] shrink-0"></div>
              <div>
                <h4 className="font-bold text-[var(--fg-primary)] mb-1">v1.0: Enterprise Readiness</h4>
                <p className="text-sm text-[var(--fg-secondary)]">Multi-tenant vector isolation, continuous batching integration, and comprehensive observability hooks.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Articles */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-[var(--fg-primary)]">Technical Deep Dives</h2>
            <Link href="/blog" className="text-sm font-bold text-[var(--accent)] hover:underline">
              View All Notes →
            </Link>
          </div>
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex flex-col sm:flex-row justify-between items-center gap-4">
             <div>
               <h3 className="font-bold text-[var(--fg-primary)] mb-1">Lessons Learned Building OmniSLM</h3>
               <p className="text-sm text-[var(--fg-secondary)]">The technical hurdles and architectural decisions behind the framework.</p>
             </div>
             <Link href="/blog/omnislm-lessons" className="shrink-0 px-4 py-2 rounded-[var(--radius-sm)] border border-[var(--border)] text-sm font-bold hover:bg-[var(--bg-primary)] transition-colors">
               Read Article
             </Link>
          </div>
        </section>

      </div>
    </>
  );
}
