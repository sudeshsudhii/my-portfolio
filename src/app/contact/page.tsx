import type { Metadata } from "next";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Sudesh P — Software Engineer",
  description:
    "Get in touch with Sudesh P for AI engineering roles, collaboration on open-source AI projects, or technical consulting.",
  alternates: {
    canonical: "https://sudhii.in/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-lg mb-10">
        <h1 className="text-3xl font-bold text-[var(--fg-primary)] tracking-tight mb-2">
          Contact
        </h1>
        <p className="text-base text-[var(--fg-secondary)]">
          I&apos;m open to full-time AI engineering positions, research
          collaborations, and open-source partnerships. Let&apos;s connect.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="space-y-5">
          <div>
            <h2 className="text-base font-semibold text-[var(--fg-primary)] mb-4">
              Reach out directly
            </h2>
            <div className="space-y-3">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] hover:border-[var(--border)] hover:shadow-[var(--shadow-sm)] transition-all no-underline group"
              >
                <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--accent-subtle)] flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-[var(--accent)]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--fg-primary)] group-hover:text-[var(--accent)] transition-colors">
                    Email
                  </div>
                  <div className="text-xs text-[var(--fg-secondary)]">
                    {siteConfig.email}
                  </div>
                </div>
              </a>

              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] hover:border-[var(--border)] hover:shadow-[var(--shadow-sm)] transition-all no-underline group"
              >
                <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--bg-tertiary)] flex items-center justify-center shrink-0">
                  <GithubIcon size={16} className="text-[var(--fg-secondary)]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--fg-primary)] group-hover:text-[var(--accent)] transition-colors">
                    GitHub
                  </div>
                  <div className="text-xs text-[var(--fg-secondary)]">
                    sudeshsudhii
                  </div>
                </div>
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-[var(--radius-md)] border border-[var(--border-subtle)] hover:border-[var(--border)] hover:shadow-[var(--shadow-sm)] transition-all no-underline group"
              >
                <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-[var(--accent-subtle)] flex items-center justify-center shrink-0">
                  <LinkedinIcon size={16} className="text-[var(--accent)]" />
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--fg-primary)] group-hover:text-[var(--accent)] transition-colors">
                    LinkedIn
                  </div>
                  <div className="text-xs text-[var(--fg-secondary)]">
                    Connect with me
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-[var(--fg-tertiary)]">
            <MapPin size={14} />
            {siteConfig.location}
          </div>

          <div className="p-4 rounded-[var(--radius-md)] bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium text-[var(--fg-primary)]">
                Available for opportunities
              </span>
            </div>
            <p className="text-xs text-[var(--fg-tertiary)]">
              Typically responds within 24 hours
            </p>
          </div>
        </div>

        {/* Contact Form (mailto fallback) */}
        <div>
          <h2 className="text-base font-semibold text-[var(--fg-primary)] mb-4">
            Send a message
          </h2>
          <form
            action={`mailto:${siteConfig.email}`}
            method="GET"
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-[var(--fg-primary)] mb-1.5"
              >
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="subject"
                placeholder="Your name"
                required
                className="w-full px-3 py-2.5 text-sm rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--fg-primary)] placeholder:text-[var(--fg-tertiary)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-[var(--fg-primary)] mb-1.5"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="body"
                rows={5}
                placeholder="Tell me about the opportunity or project..."
                required
                className="w-full px-3 py-2.5 text-sm rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--bg-primary)] text-[var(--fg-primary)] placeholder:text-[var(--fg-tertiary)] focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] outline-none transition-colors resize-y min-h-[120px]"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-[var(--radius-sm)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors cursor-pointer"
            >
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
