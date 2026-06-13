import type { Metadata } from "next";
import { skillGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "Technical Skills \u2014 AI, RAG, LLM, Spring AI",
  description:
    "Technical skills of Sudesh P across AI/ML, backend, frontend, blockchain, and DevOps \u2014 organized by category with project context.",
  alternates: {
    canonical: "https://sudhii.in/skills",
  },
};

export default function SkillsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-lg mb-10">
        <h1 className="text-3xl font-bold text-[var(--fg-primary)] tracking-tight mb-2">
          Skills
        </h1>
        <p className="text-base text-[var(--fg-secondary)]">
          Technologies I work with, organized by domain. Each skill is backed by
          real project work — no percentages, just context.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)]"
          >
            <h2 className="text-base font-semibold text-[var(--fg-primary)] mb-4">
              {group.category}
            </h2>
            <ul className="space-y-3">
              {group.skills.map((skill) => (
                <li key={skill.name}>
                  <div className="text-sm font-medium text-[var(--fg-primary)]">
                    {skill.name}
                  </div>
                  <div className="text-xs text-[var(--fg-tertiary)] mt-0.5">
                    {skill.context}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
