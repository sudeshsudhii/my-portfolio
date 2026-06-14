"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-provider";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/certifications", label: "Certifications" },
  { href: "/architecture", label: "Architecture" },
  { href: "/open-source", label: "Open Source" },
  { href: "/notes", label: "Notes" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-[var(--border-subtle)]"
      style={{ background: "var(--bg-primary)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-[var(--fg-primary)] hover:text-[var(--accent)] transition-colors no-underline"
          >
            SUDESH<span className="text-[var(--accent)]">.</span>P
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-3 py-2 text-sm font-medium rounded-[var(--radius-sm)] transition-colors no-underline ${
                    isActive
                      ? "text-[var(--accent)] bg-[var(--accent-subtle)]"
                      : "text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:bg-[var(--bg-tertiary)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="/resume"
              className="hidden lg:inline-flex items-center px-4 py-2 text-sm font-medium rounded-[var(--radius-sm)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors no-underline"
            >
              Resume
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-[var(--radius-sm)] text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:bg-[var(--bg-tertiary)] transition-colors cursor-pointer"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-[var(--border-subtle)] py-3 px-4" aria-label="Mobile navigation">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-3 py-2.5 text-sm font-medium rounded-[var(--radius-sm)] transition-colors no-underline ${
                    isActive
                      ? "text-[var(--accent)] bg-[var(--accent-subtle)]"
                      : "text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] hover:bg-[var(--bg-tertiary)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="/resume"
              className="mt-2 inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium rounded-[var(--radius-sm)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors no-underline"
            >
              Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
