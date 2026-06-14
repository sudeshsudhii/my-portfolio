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
  Eye,
  Zap,
  Cpu
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig, projects } from "@/lib/data";
import { getAllPosts } from "@/lib/mdx";
import { ArticleCard } from "@/components/article-card";
import { Newsletter } from "@/components/newsletter";

function HomepageFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Sudhii?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sudhii is the personal brand of Sudesh P, an AI Systems Engineer and M.Tech Computer Science student at SRMIST Chennai, India. He is the creator of OmniSLM, an open-source Python framework for building production AI applications with Small Language Models.",
        },
      },
      {
        "@type": "Question",
        name: "What is OmniSLM?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OmniSLM is an open-source Python framework created by Sudesh P (Sudhii) for building production-ready AI apps with Small Language Models. It unifies RAG pipelines, vector memory, agent orchestration, and local inference in one extensible architecture.",
        },
      },
      {
        "@type": "Question",
        name: "What is PaathAI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PaathAI is an AI-powered academic intelligence platform built by Sudesh P that automatically transcribes lectures, maps content to syllabus topics, and generates searchable summaries with progress analytics.",
        },
      },
      {
        "@type": "Question",
        name: "Is Sudesh P available for AI Engineering roles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Sudesh P (Sudhii) is open to AI Engineering roles. Contact via sudhii.in/contact or email mrsudesh17@gmail.com.",
        },
      },
      {
        "@type": "Question",
        name: "Where can I find OmniSLM source code?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "OmniSLM is open source on GitHub at github.com/sudeshsudhii/OmniSLM under the MIT license.",
        },
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

function HomepageSitelinksSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "OmniSLM Hub",
        "url": "https://www.sudhii.in/omnislm"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI Engineering Blog",
        "url": "https://www.sudhii.in/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About Author",
        "url": "https://www.sudhii.in/author/sudesh-p"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "PaathAI Platform",
        "url": "https://www.sudhii.in/projects/paathai"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "View All Projects",
        "url": "https://www.sudhii.in/projects"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 3);
  
  const selectedWorkSlugs = [
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
    "AI Systems Engineer",
    "M.Tech CS @ SRMIST",
    "Python + Go AI Engineering",
    "RAG & Agent Architectures",
    "Open Source Contributor",
  ];

  return (
    <>
      <HomepageFAQSchema />
      <HomepageSitelinksSchema />
      {/* ── Hero Section ─────────────────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-16">
        <div className="flex flex-col-reverse md:flex-row items-start gap-10 md:gap-16">
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--fg-primary)] leading-[1.1] mb-6">
              Sudesh P <span className="text-[var(--fg-secondary)]">—</span> AI Systems Engineer
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <Link
                href="/omnislm"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-[var(--radius-sm)] bg-[var(--fg-primary)] text-[var(--bg-primary)] hover:bg-[var(--fg-secondary)] transition-colors no-underline"
              >
                Discover OmniSLM
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-[var(--radius-sm)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors no-underline"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open to AI Engineering Roles
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-[var(--radius-sm)] border border-[var(--border)] text-[var(--fg-primary)] hover:bg-[var(--bg-secondary)] transition-colors no-underline"
              >
                Read My Notes
              </Link>
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
      <section className="border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)] overflow-hidden">
        <div className="py-5">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {/* First Set */}
            <div className="flex items-center gap-8 px-4 whitespace-nowrap">
              {metrics.map((m, i) => (
                <div key={i} className="flex items-center gap-8 text-sm font-bold text-[var(--fg-primary)] tracking-wide">
                  {m}
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--border)] shrink-0" />
                </div>
              ))}
            </div>
            {/* Second Set */}
            <div className="flex items-center gap-8 px-4 whitespace-nowrap" aria-hidden="true">
              {metrics.map((m, i) => (
                <div key={i} className="flex items-center gap-8 text-sm font-bold text-[var(--fg-primary)] tracking-wide">
                  {m}
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--border)] shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured OmniSLM Update Banner ───────────────── */}
      <section className="bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-[var(--radius-md)] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap size={18} className="text-[var(--accent)]" />
                <span className="text-sm font-bold text-[var(--accent)] uppercase tracking-wider">Featured Release</span>
              </div>
              <h2 className="text-2xl font-bold text-[var(--fg-primary)] mb-2">OmniSLM v0.5 is now available</h2>
              <p className="text-[var(--fg-secondary)] max-w-2xl">
                Introducing native agent orchestration, seamless vLLM continuous batching integration, and enhanced memory providers for complex multi-turn workflows.
              </p>
            </div>
            <Link
              href="/omnislm"
              className="shrink-0 px-6 py-3 rounded-[var(--radius-sm)] bg-[var(--accent)] text-white font-bold text-sm hover:bg-[var(--accent-hover)] transition-colors"
            >
              Explore OmniSLM
            </Link>
          </div>
        </div>
      </section>

      {/* ── Latest Insights & Notes ──────────────────────── */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold text-[var(--fg-primary)] tracking-tight">
              Latest Insights
            </h2>
            <p className="text-base text-[var(--fg-secondary)] mt-3 max-w-2xl">
              Thoughts on building production-grade AI infrastructure and the shift towards Small Language Models.
            </p>
          </div>
          <Link href="/blog" className="shrink-0 text-sm font-bold text-[var(--accent)] hover:text-[var(--fg-primary)] transition-colors inline-flex items-center gap-2">
            View all notes <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {latestPosts.map((post) => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Short AI Engineering Notes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
            <h3 className="text-lg font-bold text-[var(--fg-primary)] mb-4 flex items-center gap-2">
              <Terminal size={18} /> Engineering Note: Vector Isolation
            </h3>
            <p className="text-sm text-[var(--fg-secondary)] leading-relaxed italic">
              "Never trust the LLM prompt to filter tenant data. In multi-tenant RAG architectures, isolation must happen at the physical or metadata layer before the retrieved context ever reaches the inference engine."
            </p>
          </div>
          <div className="p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
            <h3 className="text-lg font-bold text-[var(--fg-primary)] mb-4 flex items-center gap-2">
              <Cpu size={18} /> Engineering Note: Async Inference
            </h3>
            <p className="text-sm text-[var(--fg-secondary)] leading-relaxed italic">
              "Synchronous HTTP requests to an LLM endpoint will eventually bring down your system. Always decouple the web tier from the inference tier using a robust message queue like RabbitMQ."
            </p>
          </div>
        </div>

        {/* Newsletter CTA */}
        <Newsletter />
      </section>

      {/* ── Selected Engineering Work ───────────────────────── */}
      <section className="bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold text-[var(--fg-primary)] tracking-tight">
                Other Engineering Work
              </h2>
              <p className="text-base text-[var(--fg-secondary)] mt-3 max-w-2xl">
                Case studies of production architectures, from academic intelligence platforms to Web3 supply chains.
              </p>
            </div>
            <Link href="/projects" className="shrink-0 text-sm font-bold text-[var(--accent)] hover:text-[var(--fg-primary)] transition-colors inline-flex items-center gap-2">
              View all projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="space-y-6">
            {selectedWork.map((project) => (
              <div 
                key={project.slug} 
                className="group flex flex-col md:flex-row border border-[var(--border-subtle)] rounded-[var(--radius-md)] overflow-hidden bg-[var(--bg-primary)] hover:border-[var(--border)] transition-colors"
              >
                <div className="md:w-1/3 p-6 md:p-8 border-b md:border-b-0 md:border-r border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
                  <h3 className="text-xl font-bold text-[var(--fg-primary)] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--fg-secondary)] mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 4).map(t => (
                      <span key={t} className="px-2 py-1 text-xs font-semibold rounded-[var(--radius-sm)] bg-[var(--bg-primary)] text-[var(--fg-primary)] border border-[var(--border-subtle)]">
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
        </div>
      </section>
    </>
  );
}
