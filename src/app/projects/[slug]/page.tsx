import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import { GithubIcon as Github } from "@/components/icons";
import { projects } from "@/lib/data";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };

  return {
    title: `${project.title} — AI Engineering Case Study`,
    description: project.longDescription.slice(0, 160),
    alternates: {
      canonical: `https://sudhii.in/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} — Case Study by Sudesh P`,
      description: project.description,
      type: "article",
    },
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const { caseStudy } = project;

  // Find related projects (same category, different slug)
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.slug !== project.slug)
    .slice(0, 3);

  // JSON-LD for case study
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${project.title} — AI Engineering Case Study`,
    description: project.description,
    author: { "@id": "https://sudhii.in/#person" },
    publisher: { "@id": "https://sudhii.in/#person" },
    mainEntityOfPage: `https://sudhii.in/projects/${slug}`,
    proficiencyLevel: "Expert",
  };

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-[var(--fg-tertiary)] mb-8">
        <Link href="/" className="hover:text-[var(--fg-primary)] transition-colors no-underline">Home</Link>
        <ChevronRight size={14} />
        <Link href="/projects" className="hover:text-[var(--fg-primary)] transition-colors no-underline">Projects</Link>
        <ChevronRight size={14} />
        <span className="text-[var(--fg-primary)] font-medium">{project.title}</span>
      </nav>

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

        {/* Related Projects — internal linking */}
        {relatedProjects.length > 0 && (
          <section className="pt-8 border-t border-[var(--border-subtle)]">
            <h2 className="text-xl font-bold text-[var(--fg-primary)] mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedProjects.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/projects/${rp.slug}`}
                  className="block p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] hover:border-[var(--border)] transition-colors no-underline"
                >
                  <h3 className="text-sm font-bold text-[var(--fg-primary)] mb-1">{rp.title}</h3>
                  <p className="text-xs text-[var(--fg-secondary)] line-clamp-2">{rp.description}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
