import type { Metadata } from "next";
import Link from "next/link";
import { 
  Award, 
  ArrowRight, 
  Shield, 
  Cloud, 
  Code2, 
  Blocks, 
  Cpu 
} from "lucide-react";
import { certifications } from "@/lib/data";

export const metadata: Metadata = {
  title: "Certifications \u2014 Oracle, IBM, Cisco",
  description:
    "Professional certifications of Sudesh P from IBM, Oracle, Cisco, NSE Academy, NPTEL, and Infosys \u2014 validating cloud, AI, and cybersecurity competency.",
  alternates: {
    canonical: "https://sudhii.in/certifications",
  },
};

const getIconForDomain = (domain: string) => {
  const d = domain.toLowerCase();
  if (d.includes("cyber") || d.includes("security")) return Shield;
  if (d.includes("cloud")) return Cloud;
  if (d.includes("full-stack") || d.includes("web")) return Code2;
  if (d.includes("blockchain")) return Blocks;
  if (d.includes("computer science") || d.includes("technology")) return Cpu;
  return Award;
};

export default function CertificationsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header Section */}
      <div className="max-w-2xl mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--fg-primary)] tracking-tight mb-4">
          Certifications
        </h1>
        <p className="text-base text-[var(--fg-secondary)] leading-relaxed">
          Verified achievements across cloud architecture, blockchain systems, full-stack engineering, and cybersecurity.
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert) => {
          const Icon = getIconForDomain(cert.domain);
          
          const CardContent = (
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-primary)] hover:border-[var(--border)] transition-colors h-full flex flex-col group">
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-[var(--bg-secondary)] flex items-center justify-center border border-[var(--border-subtle)] text-[var(--fg-primary)]">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                
                {cert.slug && (
                  <div className="text-[var(--fg-tertiary)] group-hover:text-[var(--fg-primary)] transition-colors">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>

              <h3 className="text-base font-semibold text-[var(--fg-primary)] mb-1.5 leading-snug">
                {cert.title}
              </h3>
              <p className="text-sm text-[var(--fg-secondary)] mb-6 flex-1">
                {cert.issuer}
              </p>

              <div className="mt-auto pt-4 border-t border-[var(--border-subtle)]">
                <span className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-[var(--radius-sm)] bg-[var(--bg-secondary)] text-[var(--fg-secondary)]">
                  {cert.domain}
                </span>
              </div>
            </div>
          );

          if (cert.slug) {
            return (
              <Link
                key={cert.slug}
                href={`/certifications/${cert.slug}`}
                className="block no-underline"
              >
                {CardContent}
              </Link>
            );
          }

          return <div key={cert.title}>{CardContent}</div>;
        })}
      </div>
    </div>
  );
}
