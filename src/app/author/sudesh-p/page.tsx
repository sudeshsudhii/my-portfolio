import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";
import { getAllPosts } from "@/lib/mdx";
import { ArticleCard } from "@/components/article-card";
import { PersonSchema } from "@/components/seo-schemas";

export const metadata: Metadata = {
  title: "Sudesh P (Sudhii) — AI Systems Engineer",
  description: "AI Systems Engineer specializing in Small Language Models, RAG architectures, and local-first AI. Creator of OmniSLM.",
};

export default function AuthorPage() {
  const posts = getAllPosts();

  return (
    <>
      <PersonSchema />
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Author Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-20">
          <div className="shrink-0">
            <Image
              src="/sudesh-profile.jpg"
              alt="Sudesh P"
              width={200}
              height={200}
              priority
              className="rounded-full border-4 border-[var(--bg-secondary)] shadow-lg"
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--fg-primary)] tracking-tight mb-2">
              Sudesh P <span className="text-[var(--fg-tertiary)] font-normal text-3xl">(Sudhii)</span>
            </h1>
            <p className="text-xl text-[var(--accent)] font-medium mb-6">
              AI Systems Engineer & Creator of OmniSLM
            </p>
            <p className="text-lg text-[var(--fg-secondary)] leading-relaxed max-w-2xl mb-8">
              I build production-ready AI applications that prioritize privacy, security, and unit economics. My current focus is on operationalizing Small Language Models (SLMs) and designing scalable RAG infrastructure.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href="https://github.com/sudeshsudhii" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-[var(--bg-secondary)] text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:bg-[var(--border-subtle)] transition-colors">
                <GithubIcon size={20} />
              </a>
              <a href="https://linkedin.com/in/sudesh-p-8a656b358/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-[var(--bg-secondary)] text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:bg-[var(--border-subtle)] transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://x.com/sudhii_dev" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-[var(--bg-secondary)] text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:bg-[var(--border-subtle)] transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="mailto:mrsudesh17@gmail.com" className="p-2.5 rounded-full bg-[var(--bg-secondary)] text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:bg-[var(--border-subtle)] transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-[var(--radius-md)] bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
            <h3 className="font-bold text-[var(--fg-primary)] mb-2">AI Architecture</h3>
            <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">Designing decoupled, resilient systems for LLM inference, continuous batching, and agent orchestration.</p>
          </div>
          <div className="p-6 rounded-[var(--radius-md)] bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
            <h3 className="font-bold text-[var(--fg-primary)] mb-2">Vector Search (RAG)</h3>
            <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">Implementing highly isolated, multi-tenant vector databases using FAISS, Qdrant, and Pinecone.</p>
          </div>
          <div className="p-6 rounded-[var(--radius-md)] bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
            <h3 className="font-bold text-[var(--fg-primary)] mb-2">Local Inference</h3>
            <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">Running optimized SLMs on edge devices and VPCs using Ollama, Llama.cpp, and vLLM.</p>
          </div>
        </div>

        {/* Published Articles */}
        <h2 className="text-3xl font-extrabold text-[var(--fg-primary)] tracking-tight mb-8">
          Published Notes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
