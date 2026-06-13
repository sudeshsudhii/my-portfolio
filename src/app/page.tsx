import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Mail,
  MapPin,
  GraduationCap,
  Code2,
  Brain,
  Blocks,
  Terminal,
  FileText,
  Map,
  Eye
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig, projects } from "@/lib/data";

export default function HomePage() {
  const selectedWorkSlugs = [
    "omnislm",
    "seedtracking",
    "local-llm",
    "paathai",
    "rag-system"
  ];
  const selectedWork = selectedWorkSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean) as typeof projects;
  
  const metrics = [
    "Creator of OmniSLM",
    "Software Engineer",
    "M.Tech CS @ SRMIST",
    "Python + Java AI Engineering",
    "RAG & Agent Architectures",
    "Open Source Contributor",
  ];

  return (
    <>
      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16">
        <div className="flex flex-col-reverse md:flex-row items-start gap-10 md:gap-16">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--fg-primary)] leading-[1.1] mb-6">
              Sudesh P <span className="text-[var(--fg-secondary)]">—</span> Software Engineer
            </h1>
            <p className="text-lg sm:text-xl text-[var(--fg-secondary)] leading-relaxed max-w-2xl mb-2">
              Creator of OmniSLM. Building production-ready AI applications with Small Language Models.
            </p>
            <p className="text-base text-[var(--fg-tertiary)] leading-relaxed max-w-2xl mb-8">
              Focused on RAG pipelines, local-first LLM platforms, agent architectures, and privacy-first AI infrastructure.
            </p>


            {/* Location + Education */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--fg-tertiary)] mb-8">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} /> {siteConfig.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap size={14} /> {siteConfig.education.degree},{" "}
                {siteConfig.education.institution}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-[var(--radius-sm)] bg-[var(--fg-primary)] text-[var(--bg-primary)] hover:bg-[var(--fg-secondary)] transition-colors no-underline"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-[var(--radius-sm)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors no-underline"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to AI Engineering Roles
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-[var(--radius-sm)] border border-[var(--border)] text-[var(--fg-primary)] hover:bg-[var(--bg-secondary)] transition-colors no-underline"
              >
                Download Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-8">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:border-[var(--border)] transition-colors"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:border-[var(--border)] transition-colors"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="inline-flex items-center justify-center w-10 h-10 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:border-[var(--border)] transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="shrink-0 hidden sm:block">
            <Image
              src={siteConfig.avatar}
              alt={siteConfig.name}
              width={160}
              height={160}
              priority
              className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] shadow-sm grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </section>

      {/* ── Metrics Bar ──────────────────────────────────── */}
      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)] overflow-x-auto">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center gap-x-8 gap-y-4 whitespace-nowrap">
            {metrics.map((m, i) => (
              <div key={i} className="flex items-center gap-3 text-sm font-bold text-[var(--fg-primary)] tracking-wide">
                {i > 0 && <span className="w-1.5 h-1.5 rounded-full bg-[var(--border)] hidden sm:block" />}
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OmniSLM Flagship Showcase ────────────────────── */}
      <section className="border-b border-[var(--border-subtle)] relative overflow-hidden bg-[var(--bg-secondary)]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-xs font-bold uppercase tracking-widest text-[var(--fg-primary)] shadow-sm">
                Flagship Framework
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--fg-primary)] mb-6">
                OmniSLM
              </h2>
              
              <p className="text-lg text-[var(--fg-secondary)] leading-relaxed mb-6">
                An open-source, extensible framework for building production-ready AI applications with Small Language Models. OmniSLM eliminates the fragmented tooling problem by unifying RAG, memory, inference, and agent patterns into a single architecture.
              </p>

              <div className="space-y-3 mb-10">
                <div className="flex items-center gap-3 text-sm font-bold text-[var(--fg-primary)]">
                  <div className="w-2 h-2 bg-[var(--accent)] rounded-sm"></div> Modular Architecture
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[var(--fg-primary)]">
                  <div className="w-2 h-2 bg-[var(--accent)] rounded-sm"></div> Built for Local & Edge Inference
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-[var(--fg-primary)]">
                  <div className="w-2 h-2 bg-[var(--accent)] rounded-sm"></div> Privacy-First Design
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <Link
                  href="/projects/omnislm"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-[var(--radius-sm)] bg-[var(--fg-primary)] text-[var(--bg-primary)] hover:bg-[var(--fg-secondary)] transition-colors no-underline"
                >
                  View Full OmniSLM Case Study <ArrowRight size={16} />
                </Link>
                <a
                  href="https://github.com/sudeshsudhii/OmniSLM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-[var(--radius-sm)] border border-[var(--border)] text-[var(--fg-primary)] hover:bg-[var(--bg-primary)] transition-colors no-underline bg-[var(--bg-secondary)]"
                >
                  <GithubIcon size={16} /> GitHub Repository
                </a>
              </div>

              {/* Documentation & Roadmap links */}
              <div className="flex flex-wrap gap-6 text-sm">
                <Link href="/architecture" className="inline-flex items-center gap-2 text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] font-medium transition-colors">
                  <FileText size={16} /> Documentation
                </Link>
                <Link href="/open-source" className="inline-flex items-center gap-2 text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] font-medium transition-colors">
                  <Map size={16} /> Roadmap
                </Link>
                <Link href="/open-source" className="inline-flex items-center gap-2 text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] font-medium transition-colors">
                  <Eye size={16} /> Future Vision
                </Link>
              </div>
            </div>
            
            <div className="w-full lg:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-primary)] shadow-sm">
                <div className="w-10 h-10 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] flex items-center justify-center mb-4 text-[var(--fg-primary)] bg-[var(--bg-secondary)]">
                  <Terminal size={18} />
                </div>
                <h3 className="font-bold text-[var(--fg-primary)] mb-2">Runtime Layer</h3>
                <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">Pluggable execution environments for local models (Ollama) and lightweight inference systems.</p>
              </div>
              
              <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-primary)] shadow-sm">
                <div className="w-10 h-10 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] flex items-center justify-center mb-4 text-[var(--fg-primary)] bg-[var(--bg-secondary)]">
                  <Brain size={18} />
                </div>
                <h3 className="font-bold text-[var(--fg-primary)] mb-2">Memory Engine</h3>
                <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">Vector-backed and stateful memory management for context-aware multi-turn conversations.</p>
              </div>
              
              <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-primary)] shadow-sm">
                <div className="w-10 h-10 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] flex items-center justify-center mb-4 text-[var(--fg-primary)] bg-[var(--bg-secondary)]">
                  <Blocks size={18} />
                </div>
                <h3 className="font-bold text-[var(--fg-primary)] mb-2">RAG Framework</h3>
                <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">Built-in document ingestion, chunking, and hybrid vector search integrations (FAISS, Qdrant).</p>
              </div>
              
              <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-primary)] shadow-sm">
                <div className="w-10 h-10 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] flex items-center justify-center mb-4 text-[var(--fg-primary)] bg-[var(--bg-secondary)]">
                  <Code2 size={18} />
                </div>
                <h3 className="font-bold text-[var(--fg-primary)] mb-2">Agent SDK</h3>
                <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">Tools for building autonomous agents capable of tool-use, multi-step reasoning, and API integration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Selected Engineering Work ───────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-[var(--fg-primary)] tracking-tight">
            Selected Engineering Work
          </h2>
          <p className="text-base text-[var(--fg-secondary)] mt-3 max-w-2xl">
            Detailed case studies of production architectures, ranging from blockchain supply chains to local AI ecosystems.
          </p>
        </div>

        <div className="space-y-6">
          {selectedWork.map((project) => (
            <div 
              key={project.slug} 
              className="group flex flex-col md:flex-row border border-[var(--border-subtle)] rounded-[var(--radius-md)] overflow-hidden bg-[var(--bg-secondary)] hover:border-[var(--border)] transition-colors"
            >
              {/* Left Column: Title & Tech */}
              <div className="md:w-1/3 p-6 md:p-8 border-b md:border-b-0 md:border-r border-[var(--border-subtle)] bg-[var(--bg-primary)]">
                <h3 className="text-xl font-bold text-[var(--fg-primary)] mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--fg-secondary)] mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="px-2 py-1 text-xs font-semibold rounded-[var(--radius-sm)] bg-[var(--bg-secondary)] text-[var(--fg-primary)] border border-[var(--border-subtle)]">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:text-[var(--fg-primary)] transition-colors"
                >
                  Read Case Study <ArrowRight size={14} />
                </Link>
              </div>

              {/* Right Column: Execution Details */}
              <div className="md:w-2/3 p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-bold text-[var(--fg-tertiary)] uppercase tracking-wider mb-2">Problem</h4>
                  <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[var(--fg-tertiary)] uppercase tracking-wider mb-2">Outcome</h4>
                  <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                    {project.impact}
                  </p>
                </div>
                <div className="md:col-span-2 pt-4 border-t border-[var(--border-subtle)]">
                  <h4 className="text-xs font-bold text-[var(--fg-tertiary)] uppercase tracking-wider mb-2">Architecture Highlights</h4>
                  <p className="text-sm text-[var(--fg-primary)] font-medium leading-relaxed">
                    {project.caseStudy?.architecture || project.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
