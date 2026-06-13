import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume \u2014 Sudesh P, Software Engineer",
  description:
    "Resume of Sudesh P \u2014 Software Engineer and creator of OmniSLM. Download PDF.",
  alternates: {
    canonical: "https://sudhii.in/resume",
  },
};

export default function ResumePage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-[var(--fg-primary)] tracking-tight mb-2">
          Resume
        </h1>
        <p className="text-base text-[var(--fg-secondary)]">
          Download my resume or view the highlights below.
        </p>
      </div>

      {/* Download CTA */}
      <div className="p-6 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] mb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-[var(--radius-md)] bg-[var(--accent-subtle)] flex items-center justify-center">
              <FileText size={24} className="text-[var(--accent)]" />
            </div>
            <div>
              <h2 className="text-base font-semibold text-[var(--fg-primary)]">
                Sudesh P — Resume
              </h2>
              <p className="text-xs text-[var(--fg-tertiary)]">
                PDF • Updated June 2026
              </p>
            </div>
          </div>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-[var(--radius-sm)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors no-underline"
          >
            <Download size={16} /> Download PDF
          </a>
        </div>
      </div>

      {/* Quick Highlights */}
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-semibold text-[var(--fg-primary)] mb-4">
            Highlights
          </h2>
          <div className="space-y-4">
            {[
              {
                title: "Education",
                items: [
                  "M.Tech Computer Science — SRMIST, Chennai (2024–Present)",
                  "B.Tech Information Technology (2020–2024)",
                ],
              },
              {
                title: "Technical Focus",
                items: [
                  "AI/ML: RAG pipelines, local LLMs, NLP, vector databases",
                  "Full-Stack: React, Next.js, Spring Boot, Node.js, MERN",
                  "Blockchain: Ethereum, Solidity, IPFS, smart contracts",
                  "Languages: Python, Java 21, TypeScript, JavaScript, Solidity",
                ],
              },
              {
                title: "Key Projects",
                items: [
                  "OmniSLM — Universal AI application framework for SLMs",
                  "SeedTracking — Blockchain supply chain with ML fraud detection",
                  "RAG System — Privacy-first retrieval-augmented generation pipeline",
                  "Local LLM Platform — Java 21 + Spring AI + Ollama",
                  "PaathAI — AI lecture intelligence platform",
                ],
              },
              {
                title: "Certifications",
                items: [
                  "IBM Professional Certification",
                  "Oracle Cloud Service Management",
                  "NSE Academy — Blockchain",
                  "NPTEL Course Completion",
                  "Infosys Springboard",
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-[var(--fg-primary)] mb-2">
                  {section.title}
                </h3>
                <ul className="space-y-1.5">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[var(--fg-secondary)] pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[var(--fg-tertiary)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] text-center">
        <p className="text-sm text-[var(--fg-secondary)] mb-4">
          Want to discuss opportunities?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-[var(--radius-sm)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors no-underline"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
