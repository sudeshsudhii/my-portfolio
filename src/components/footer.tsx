import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-subtle)] mt-auto">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight text-[var(--fg-primary)] hover:text-[var(--accent)] transition-colors no-underline"
            >
              sudesh<span className="text-[var(--accent)]">.</span>p
            </Link>
            <p className="mt-2 text-sm text-[var(--fg-secondary)] max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--fg-primary)] mb-3">
              Pages
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/projects", label: "Projects" },
                { href: "/about", label: "About" },
                { href: "/skills", label: "Skills" },
                { href: "/certifications", label: "Certifications" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--fg-secondary)] hover:text-[var(--accent)] transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-[var(--fg-primary)] mb-3">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-9 h-9 rounded-[var(--radius-sm)] text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center w-9 h-9 rounded-[var(--radius-sm)] text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="inline-flex items-center justify-center w-9 h-9 rounded-[var(--radius-sm)] text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--fg-tertiary)]">
            © {new Date().getFullYear()} Sudesh P. Built with Next.js.
          </p>
          <a
            href="#top"
            aria-label="Back to top"
            className="inline-flex items-center gap-1 text-xs text-[var(--fg-tertiary)] hover:text-[var(--accent)] transition-colors no-underline"
          >
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
