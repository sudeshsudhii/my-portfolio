import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proof of Work",
  description: "Case studies and proof of work.",
};

export default function ProofOfWorkPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--fg-primary)] tracking-tight mb-4">
          Proof of Work
        </h1>
        <p className="text-base text-[var(--fg-secondary)] leading-relaxed mb-8">
          Detailed case studies, execution details, and tangible outcomes.
        </p>
        <div className="p-8 rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] flex items-center justify-center text-sm text-[var(--fg-tertiary)] text-center">
          Proof of work case studies are being assembled.
        </div>
      </div>
    </div>
  );
}
