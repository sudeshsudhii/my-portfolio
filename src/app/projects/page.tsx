import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects-grid";

export const metadata: Metadata = {
  title: "AI Engineering Projects",
  description:
    "Explore AI engineering projects by Sudesh P: OmniSLM framework, RAG pipelines, blockchain platforms, and local LLM applications with full case studies.",
  alternates: {
    canonical: "https://www.sudhii.in/projects",
  },
};

export default function ProjectsPage() {
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

      <ProjectsGrid />
    </div>
  );
}
