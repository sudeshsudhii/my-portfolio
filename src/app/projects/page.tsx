"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { projects, categoryLabels } from "@/lib/data";
import { ProjectCard } from "@/components/project-card";
import type { ProjectCategory } from "@/lib/data";

const categories: ("all" | ProjectCategory)[] = [
  "all",
  "ai",
  "fullstack",
  "blockchain",
  "security",
];

const categoryFilterLabels: Record<"all" | ProjectCategory, string> = {
  all: "All",
  ...categoryLabels,
};

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  // Sort: hero first, then strong, then supporting
  const tierOrder = { hero: 0, strong: 1, supporting: 2 };
  const sorted = [...filtered].sort(
    (a, b) => tierOrder[a.tier] - tierOrder[b.tier]
  );

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[var(--fg-primary)] tracking-tight mb-2">
          Projects
        </h1>
        <p className="text-base text-[var(--fg-secondary)] max-w-lg">
          A collection of AI systems, full-stack applications, and blockchain
          platforms I&apos;ve designed and shipped.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 text-sm font-medium rounded-[var(--radius-full)] transition-colors cursor-pointer ${
              filter === cat
                ? "bg-[var(--accent)] text-white"
                : "bg-[var(--bg-secondary)] text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] border border-[var(--border-subtle)]"
            }`}
          >
            {categoryFilterLabels[cat]}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {sorted.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {sorted.length === 0 && (
        <p className="text-center text-[var(--fg-tertiary)] py-12">
          No projects in this category yet.
        </p>
      )}
    </div>
  );
}
