"use client";

import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="data-theme" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-9 h-9" />;

  const cycle = () => {
    const order = ["light", "dark", "system"];
    // theme can be undefined initially in next-themes, fallback to system
    const currentTheme = theme || "system";
    const next = order[(order.indexOf(currentTheme) + 1) % order.length];
    setTheme(next);
  };

  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;
  const label = theme === "light" ? "Light" : theme === "dark" ? "Dark" : "System";

  return (
    <button
      onClick={cycle}
      aria-label={`Theme: ${label}. Click to change.`}
      title={`Theme: ${label}`}
      className="inline-flex items-center justify-center w-9 h-9 rounded-[var(--radius-sm)] transition-colors hover:bg-[var(--bg-tertiary)] text-[var(--fg-secondary)] hover:text-[var(--fg-primary)] cursor-pointer"
    >
      <Icon size={18} strokeWidth={1.8} />
    </button>
  );
}
