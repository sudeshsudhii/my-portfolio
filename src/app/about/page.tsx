import Image from "next/image";
import type { Metadata } from "next";
import { MapPin, GraduationCap } from "lucide-react";
import { siteConfig, educationTimeline, engineeringMilestones } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Background, education, and technical philosophy of Sudesh P — AI Systems Engineer.",
};

export default function AboutPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start gap-6 mb-12">
        <Image
          src={siteConfig.avatar}
          alt={siteConfig.name}
          width={120}
          height={120}
          className="rounded-full border border-[var(--border-subtle)] shadow-sm grayscale hover:grayscale-0 transition-all duration-500"
        />
        <div>
          <h1 className="text-3xl font-bold text-[var(--fg-primary)] tracking-tight mb-2">
            About Me
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--fg-secondary)]">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> {siteConfig.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap size={14} /> {siteConfig.education.degree}
            </span>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="prose-custom mb-16">
        <p className="text-base text-[var(--fg-secondary)] leading-relaxed mb-4">
          I&apos;m Sudesh P, an AI Systems Engineer and Full-Stack Developer
          currently pursuing my M.Tech in Computer Science at SRMIST, Chennai.
          My work sits at the intersection of artificial intelligence and
          production software engineering.
        </p>
        <p className="text-base text-[var(--fg-secondary)] leading-relaxed mb-4">
          I build <strong className="text-[var(--fg-primary)]">end-to-end AI applications</strong> —
          from data ingestion and retrieval pipelines to deployed, user-facing
          platforms. My focus is on systems that run locally, respect user
          privacy, and solve real problems for real users.
        </p>
        <p className="text-base text-[var(--fg-secondary)] leading-relaxed mb-4">
          What sets my work apart is the breadth: I&apos;m equally comfortable
          designing a <strong className="text-[var(--fg-primary)]">FAISS-based RAG pipeline</strong> in Python,
          building a <strong className="text-[var(--fg-primary)]">Spring AI backend</strong> in Java 21,
          writing <strong className="text-[var(--fg-primary)]">Ethereum smart contracts</strong> in
          Solidity, or shipping a <strong className="text-[var(--fg-primary)]">Next.js frontend</strong> to Vercel.
          I believe the best engineers are the ones who can own a problem from
          database to deployment.
        </p>
        <p className="text-base text-[var(--fg-secondary)] leading-relaxed">
          I don&apos;t just prototype — I ship. Every project in my portfolio is
          either deployed, open-sourced, or both.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-[var(--fg-primary)] mb-8 tracking-tight">
          Education & Professional Development
        </h2>
        <div className="space-y-0 relative before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--border-subtle)] before:to-transparent">
          {educationTimeline.map((entry, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-8">
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-3 h-3 rounded-full border border-white bg-[var(--fg-tertiary)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm" />
              
              {/* Content */}
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-primary)]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[var(--fg-tertiary)] uppercase tracking-wider">
                    {entry.year}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[var(--fg-primary)] mb-1">
                  {entry.title}
                </h3>
                <p className="text-xs font-medium text-[var(--fg-secondary)] mb-2">
                  {entry.subtitle}
                </p>
                <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Engineering Milestones */}
      <div>
        <h2 className="text-2xl font-bold text-[var(--fg-primary)] mb-8 tracking-tight">
          Engineering Milestones
        </h2>
        <div className="space-y-0 relative before:absolute before:inset-0 before:ml-[5px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--border-subtle)] before:to-transparent">
          {engineeringMilestones.map((entry, i) => (
            <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-8">
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-3 h-3 rounded-full border border-white bg-[var(--accent)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm" />
              
              {/* Content */}
              <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] shadow-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">
                    {entry.year}
                  </span>
                </div>
                <h3 className="text-base font-bold text-[var(--fg-primary)] mb-1">
                  {entry.title}
                </h3>
                <p className="text-xs font-medium text-[var(--fg-tertiary)] uppercase tracking-wider mb-2">
                  {entry.subtitle}
                </p>
                <p className="text-sm text-[var(--fg-secondary)] leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
