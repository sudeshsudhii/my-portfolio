import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Award, Calendar, ExternalLink, ShieldCheck } from "lucide-react";
import { certifications } from "@/lib/data";

export async function generateStaticParams() {
  return certifications
    .filter((c) => c.slug)
    .map((cert) => ({
      slug: cert.slug,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const cert = certifications.find((c) => c.slug === resolvedParams.slug);
  if (!cert) return { title: "Certification Not Found" };

  return {
    title: `${cert.title} | Certifications`,
    description: cert.description || `Certification from ${cert.issuer} in ${cert.domain}.`,
  };
}

export default async function CertificationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const cert = certifications.find((c) => c.slug === resolvedParams.slug);

  if (!cert) {
    notFound();
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-8">
        <Link
          href="/certifications"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--fg-tertiary)] hover:text-[var(--fg-primary)] transition-colors no-underline mb-8"
        >
          <ArrowLeft size={16} /> Back to Certifications
        </Link>
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Column: Details */}
          <div className="flex-1 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-4 text-xs font-medium rounded-[var(--radius-full)] bg-[var(--accent-subtle)] text-[var(--accent)]">
                <Award size={14} />
                {cert.domain}
              </div>
              <h1 className="text-3xl font-bold text-[var(--fg-primary)] tracking-tight mb-4">
                {cert.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--fg-secondary)]">
                <span className="font-medium text-[var(--fg-primary)]">
                  Issued by {cert.issuer}
                </span>
                {cert.date && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={14} /> {cert.date}
                    </span>
                  </>
                )}
                {cert.credentialId && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-[var(--border)]" />
                    <span className="inline-flex items-center gap-1.5">
                      <ShieldCheck size={14} /> ID: {cert.credentialId}
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="prose-custom">
              <h2 className="text-xl font-semibold text-[var(--fg-primary)] mb-3">
                Overview
              </h2>
              <p className="text-base text-[var(--fg-secondary)] leading-relaxed">
                {cert.description || "Official certification validating professional competency and technical skills."}
              </p>
            </div>

            {cert.skills && cert.skills.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-[var(--fg-primary)] mb-4">
                  Skills Validated
                </h2>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[var(--fg-primary)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {cert.file && (
              <div className="pt-4">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-[var(--radius-sm)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors no-underline"
                >
                  <ExternalLink size={16} /> Open Full PDF
                </a>
              </div>
            )}
          </div>

          {/* Right Column: PDF Preview */}
          {cert.file && (
            <div className="w-full lg:w-[500px] xl:w-[600px] shrink-0">
              <div className="aspect-[4/3] w-full rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg-secondary)] overflow-hidden shadow-[var(--shadow-sm)]">
                <iframe
                  src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0`}
                  className="w-full h-full border-none"
                  title={`${cert.title} Certificate`}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
