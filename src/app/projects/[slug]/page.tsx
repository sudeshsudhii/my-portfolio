import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "@/components/icons";
import { projects } from "@/lib/data";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} | Case Study`,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectCaseStudy({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm font-medium text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors mb-10 no-underline"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--fg-primary)]">
            Case Study
          </span>
          <span className="px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-full bg-[var(--accent)] bg-opacity-10 text-[var(--accent)] border border-[var(--accent)] border-opacity-20">
            {project.category}
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--fg-primary)] mb-6">
          {project.title}
        </h1>
        
        <p className="text-xl text-[var(--fg-secondary)] leading-relaxed mb-8">
          {project.longDescription}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-[var(--radius-sm)] bg-[var(--fg-primary)] text-[var(--bg-primary)] hover:bg-[var(--fg-secondary)] transition-colors no-underline"
          >
            <Github size={16} /> View Repository
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-[var(--radius-sm)] border border-[var(--border)] text-[var(--fg-primary)] hover:bg-[var(--bg-secondary)] transition-colors no-underline"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-16 p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
        <h3 className="text-sm font-bold text-[var(--fg-tertiary)] uppercase tracking-wider mb-4">Tech Stack & Infrastructure</h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="px-3 py-1.5 text-sm font-semibold rounded-[var(--radius-sm)] bg-[var(--bg-primary)] text-[var(--fg-primary)] border border-[var(--border-subtle)] shadow-sm">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="prose-custom space-y-16">
        
        {/* The Basics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-[var(--fg-primary)] mb-4">The Problem</h2>
            <p className="text-[var(--fg-secondary)] leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[var(--fg-primary)] mb-4">The Solution</h2>
            <p className="text-[var(--fg-secondary)] leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {caseStudy ? (
          <>
            <section>
              <h2 className="text-2xl font-bold text-[var(--fg-primary)] mb-4 border-b border-[var(--border-subtle)] pb-2">Architecture Overview</h2>
              <p className="text-[var(--fg-secondary)] leading-relaxed">{caseStudy.architecture}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--fg-primary)] mb-4 border-b border-[var(--border-subtle)] pb-2">Engineering Decisions</h2>
              <p className="text-[var(--fg-secondary)] leading-relaxed">{caseStudy.decisions}</p>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                <h3 className="text-lg font-bold text-[var(--fg-primary)] mb-3">Key Tradeoffs</h3>
                <p className="text-[var(--fg-secondary)] text-sm leading-relaxed">{caseStudy.tradeoffs}</p>
              </div>
              <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                <h3 className="text-lg font-bold text-[var(--fg-primary)] mb-3">Core Challenges</h3>
                <p className="text-[var(--fg-secondary)] text-sm leading-relaxed">{caseStudy.challenges}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--fg-primary)] mb-4 border-b border-[var(--border-subtle)] pb-2">Results & Impact</h2>
              <p className="text-[var(--fg-secondary)] leading-relaxed">{caseStudy.results}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[var(--fg-primary)] mb-4 border-b border-[var(--border-subtle)] pb-2">Future Roadmap</h2>
              <p className="text-[var(--fg-secondary)] leading-relaxed">{caseStudy.futureRoadmap}</p>
            </section>
          </>
        ) : (
          <section>
            <h2 className="text-2xl font-bold text-[var(--fg-primary)] mb-4 border-b border-[var(--border-subtle)] pb-2">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2 text-[var(--fg-secondary)]">
              {project.features.map(f => <li key={f}>{f}</li>)}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
