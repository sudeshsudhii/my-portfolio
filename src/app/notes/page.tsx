import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Notes — AI Architecture & Design",
  description: "Technical deep dives, architecture decisions, and engineering lessons from building production AI systems with RAG, local LLMs, and agent patterns.",
  alternates: {
    canonical: "https://sudhii.in/notes",
  },
};

// Placeholder MDX structure. In the future, these can be pulled via `fs.readFileSync` 
// and parsed with `next-mdx-remote` or similar from a `/content/notes` directory.
const notes = [
  {
    slug: "why-i-built-omnislm",
    title: "Why I Built OmniSLM",
    excerpt: "The AI tooling ecosystem is fragmented. Every local LLM project requires stitching together RAG, memory, and agents from scratch. OmniSLM is my attempt at a unified framework.",
    date: "2026-06-10",
    readTime: "8 min read",
    tags: ["OmniSLM", "Architecture", "Python"]
  },
  {
    slug: "building-local-ai-systems",
    title: "Building Local AI Systems",
    excerpt: "Enterprise data privacy requires local execution. Exploring the tradeoffs between Ollama, vLLM, and Llama.cpp for production workloads on edge hardware.",
    date: "2026-05-22",
    readTime: "12 min read",
    tags: ["Local LLM", "Privacy", "Infrastructure"]
  },
  {
    slug: "designing-multi-tenant-ai-applications",
    title: "Designing Multi-Tenant AI Applications",
    excerpt: "How to isolate vector databases, manage tenant-specific model configurations, and handle billing boundaries in Spring Boot applications.",
    date: "2026-04-15",
    readTime: "10 min read",
    tags: ["Spring AI", "System Design", "Java"]
  },
  {
    slug: "lessons-from-spring-ai",
    title: "Lessons From Spring AI",
    excerpt: "Migrating enterprise Java teams to modern AI patterns. What Spring AI gets right, where it falls short compared to LangChain, and how to bridge the gaps.",
    date: "2026-03-08",
    readTime: "7 min read",
    tags: ["Spring Boot", "Enterprise Architecture"]
  },
  {
    slug: "rag-systems-beyond-tutorials",
    title: "RAG Systems Beyond Tutorials",
    excerpt: "Standard dense retrieval isn't enough for production. Deep dive into hybrid search (FAISS + BM25), cross-encoder re-ranking, and dynamic chunking strategies.",
    date: "2026-02-18",
    readTime: "15 min read",
    tags: ["RAG", "FAISS", "Machine Learning"]
  }
];

export default function NotesPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Sudesh P Engineering Notes",
    "url": "https://www.sudhii.in/notes",
    "description": "Technical deep dives, architecture decisions, and engineering lessons.",
    "blogPost": notes.map(note => ({
      "@type": "BlogPosting",
      "headline": note.title,
      "datePublished": note.date,
      "url": `https://www.sudhii.in/notes/${note.slug}`
    }))
  };

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--fg-primary)] mb-6">
          Engineering Notes
        </h1>
        <p className="text-xl text-[var(--fg-secondary)] leading-relaxed max-w-3xl">
          Technical deep dives, architecture decisions, and lessons learned while building production AI systems.
        </p>
      </div>

      {/* Notes List */}
      <div className="space-y-8">
        {notes.map((note) => (
          <article 
            key={note.slug} 
            className="group relative p-6 sm:p-8 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] hover:border-[var(--border)] transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-bold text-[var(--fg-tertiary)] uppercase tracking-wider mb-4">
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {new Date(note.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span className="hidden sm:inline">•</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {note.readTime}</span>
            </div>
            
            <h2 className="text-2xl font-bold text-[var(--fg-primary)] mb-3 transition-colors">
              {note.title}
            </h2>
            
            <p className="text-[var(--fg-secondary)] leading-relaxed mb-6">
              {note.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-2">
              {note.tags.map(tag => (
                <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-[var(--bg-primary)] text-[var(--fg-primary)] border border-[var(--border-subtle)]">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
      

    </div>
  );
}
