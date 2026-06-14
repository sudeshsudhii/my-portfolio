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

  const canonicalUrl = `https://www.sudhii.in/projects/${slug}`;

  // Unique metadata for specific hero projects
  if (slug === "omnislm") {
    return {
      title: "OmniSLM — Open Source Small Language Model Framework",
      description:
        "OmniSLM is an open-source Python framework for building production AI apps with Small Language Models. Unified RAG, memory, agent orchestration, and local inference. By Sudesh P (Sudhii), SRMIST Chennai.",
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: "OmniSLM — Open Source SLM Framework | Sudesh P",
        description:
          "Unified Python framework for Small Language Model apps. RAG, memory, agents — all locally. Open source. By Sudesh P (Sudhii).",
        url: canonicalUrl,
        type: "article",
        images: [
          {
            url: "https://www.sudhii.in/og-omnislm.png",
            width: 1200,
            height: 630,
            alt: "OmniSLM — Open Source Small Language Model Framework by Sudesh P",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "OmniSLM — Open Source SLM Framework",
        description: "Unified Python framework for Small Language Model apps.",
        images: ["https://www.sudhii.in/og-omnislm.png"],
      },
    };
  }

  if (slug === "paathai") {
    return {
      title: "PaathAI — AI-Powered Lecture Intelligence Platform",
      description:
        "PaathAI automatically transcribes lectures, maps content to syllabus topics, and generates searchable summaries with progress analytics. Built with Java, Spring Boot, and AI/NLP by Sudesh P (Sudhii).",
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: "PaathAI — AI Lecture Intelligence Platform | Sudesh P",
        description:
          "AI platform that transcribes lectures, maps to syllabus, and builds searchable academic knowledge bases. By Sudesh P.",
        url: canonicalUrl,
        type: "article",
        images: [
          {
            url: "https://www.sudhii.in/og-paathai.png",
            width: 1200,
            height: 630,
            alt: "PaathAI — AI Lecture Intelligence by Sudesh P",
          },
        ],
      },
    };
  }

  return {
    title: `${project.title} — AI Engineering Case Study`,
    description: project.longDescription.slice(0, 160),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} — Case Study by Sudesh P`,
      description: project.description,
      type: "article",
      url: canonicalUrl,
    },
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Schemas
function BreadcrumbSchema({ slug, name }: { slug: string; name: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.sudhii.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://www.sudhii.in/projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: name,
        item: `https://www.sudhii.in/projects/${slug}`,
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function OmniSLMSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.sudhii.in/projects/omnislm#software",
        name: "OmniSLM",
        alternateName: ["Omni SLM", "OmniSLM Framework"],
        description:
          "OmniSLM is an open-source, extensible Python framework for building production-ready AI applications with Small Language Models. It provides unified RAG pipelines, vector-backed memory, agent orchestration, and pluggable inference — all designed to run locally without cloud dependencies.",
        url: "https://www.sudhii.in/projects/omnislm",
        codeRepository: "https://github.com/sudeshsudhii/OmniSLM",
        programmingLanguage: ["Python"],
        applicationCategory: "DeveloperApplication",
        applicationSubCategory: "AI Framework",
        operatingSystem: ["Linux", "macOS", "Windows"],
        license: "https://opensource.org/licenses/MIT",
        author: { "@id": "https://www.sudhii.in/#person" },
        creator: { "@id": "https://www.sudhii.in/#person" },
        keywords:
          "Small Language Model, SLM Framework, RAG, FAISS, Ollama, Local LLM, AI Infrastructure, Open Source AI, OmniSLM, Python AI Framework",
        dateCreated: "2026",
        featureList: [
          "Pluggable Runtime Layer for Ollama and local inference engines",
          "Vector-backed Memory Engine with FAISS and Qdrant support",
          "Built-in RAG Framework with document ingestion and chunking",
          "Agent SDK for autonomous multi-step tool execution",
          "Privacy-first local deployment — zero cloud dependencies",
        ],
        isAccessibleForFree: true,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is OmniSLM?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "OmniSLM is an open-source Python framework for building production-ready AI applications using Small Language Models (SLMs). It unifies RAG pipelines, memory management, agent orchestration, and local inference into a single extensible architecture. Created by Sudesh P (Sudhii) at SRMIST Chennai.",
            },
          },
          {
            "@type": "Question",
            name: "Is OmniSLM free and open source?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. OmniSLM is fully open source under the MIT license and available at github.com/sudeshsudhii/OmniSLM. It is free to use, modify, and distribute.",
            },
          },
          {
            "@type": "Question",
            name: "How does OmniSLM differ from LangChain?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "OmniSLM is specifically designed for Small Language Models and privacy-first local inference. Unlike LangChain which targets cloud-based LLMs, OmniSLM runs entirely on local hardware with zero cloud dependencies, using Ollama as the default inference backend.",
            },
          },
          {
            "@type": "Question",
            name: "What vector databases does OmniSLM support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "OmniSLM has built-in support for FAISS and Qdrant via a pluggable vector storage interface, allowing developers to swap backends without rewriting application logic.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function PaathAISchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["SoftwareApplication", "LearningResource"],
        name: "PaathAI",
        description:
          "PaathAI is an AI-powered academic intelligence platform that transcribes lectures, maps content to syllabus topics, and provides searchable summaries with progress analytics. Transforms passive lecture recordings into structured knowledge bases.",
        url: "https://www.sudhii.in/projects/paathai",
        applicationCategory: "EducationalApplication",
        author: { "@id": "https://www.sudhii.in/#person" },
        keywords:
          "AI learning platform, lecture transcription AI, syllabus mapping, academic analytics, AI tutor, personalized learning India, PaathAI",
        educationalUse: "Lecture review and syllabus tracking",
        learningResourceType: "AI Academic Platform",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
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
    author: { "@id": "https://www.sudhii.in/#person" },
    publisher: { "@id": "https://www.sudhii.in/#person" },
    mainEntityOfPage: `https://www.sudhii.in/projects/${slug}`,
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
      
      <BreadcrumbSchema slug={project.slug} name={project.title} />
      
      {slug === "omnislm" && <OmniSLMSchema />}
      {slug === "paathai" && <PaathAISchema />}

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
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold rounded-[var(--radius-sm)] bg-[var(--fg-primary)] text-[var(--bg-primary)] hover:bg-[var(--fg-secondary)] transition-colors no-underline"
            >
              <Github size={16} /> View Repository
            </a>
          )}
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
