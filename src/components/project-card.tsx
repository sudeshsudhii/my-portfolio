import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import type { Project } from "@/lib/data";
import { categoryLabels } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  const isHero = project.tier === "hero";

  return (
    <article
      className="group relative flex flex-col rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] overflow-hidden transition-all duration-200 hover:border-[var(--border)] hover:shadow-[var(--shadow-md)]"
    >
      {/* Thumbnail for projects with a custom image or a demo link */}
      {(project.image || project.demo) && (
        <div className="w-full h-48 bg-[var(--bg-tertiary)] border-b border-[var(--border-subtle)] overflow-hidden shrink-0">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <img
              src={`https://api.microlink.io/?url=${encodeURIComponent(project.demo!)}&screenshot=true&meta=false&embed=screenshot.url`}
              alt={`${project.title} preview`}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          )}
        </div>
      )}

      <div className="flex flex-col flex-1 p-5 sm:p-6">
        {/* Category + Tier badges */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-[var(--radius-full)] bg-[var(--accent-subtle)] text-[var(--accent)]">
            {categoryLabels[project.category]}
          </span>
          {isHero && (
            <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-[var(--radius-full)] bg-[var(--bg-tertiary)] text-[var(--fg-secondary)]">
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[var(--fg-primary)] group-hover:text-[var(--accent)] transition-colors mb-1.5">
          <Link href={`/projects/${project.slug}`} className="no-underline text-inherit after:absolute after:inset-0">
            {project.title}
          </Link>
        </h3>

        {/* Description */}
        <p className="text-sm text-[var(--fg-secondary)] leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, isHero ? 6 : 4).map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-2 py-0.5 text-xs font-mono font-medium rounded-[var(--radius-sm)] bg-[var(--bg-tertiary)] text-[var(--fg-secondary)]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 mt-auto pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors no-underline"
          >
            <GithubIcon size={14} /> Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] transition-colors no-underline"
            >
              <ExternalLink size={14} /> Demo
            </a>
          )}
          <span className="ml-auto inline-flex items-center text-xs text-[var(--fg-tertiary)] group-hover:text-[var(--accent)] transition-colors">
            Details <ArrowRight size={12} className="ml-1" />
          </span>
        </div>
      </div>
    </article>
  );
}
