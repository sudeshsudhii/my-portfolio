"use client";

import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    // Mocking an API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-secondary)] p-8 sm:p-10 text-center flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-[var(--bg-primary)] border border-[var(--border)] flex items-center justify-center mb-6 text-[var(--fg-primary)]">
        <Mail size={20} />
      </div>
      <h3 className="text-2xl font-bold text-[var(--fg-primary)] mb-3">Subscribe to AI Engineering Notes</h3>
      <p className="text-[var(--fg-secondary)] text-sm max-w-md mx-auto mb-8">
        Occasional insights on Small Language Models, RAG architectures, and building production-ready local AI systems. No spam, ever.
      </p>

      {status === "success" ? (
        <div className="flex items-center gap-2 text-emerald-500 font-medium p-3 bg-emerald-500/10 rounded-[var(--radius-sm)] border border-emerald-500/20">
          <CheckCircle size={18} />
          <span>Thanks for subscribing! Check your inbox soon.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="mrsudesh17@gmail.com"
            required
            className="flex-1 bg-[var(--bg-primary)] border border-[var(--border)] rounded-[var(--radius-sm)] px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all"
            disabled={status === "loading"}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 bg-[var(--fg-primary)] text-[var(--bg-primary)] px-6 py-3 rounded-[var(--radius-sm)] text-sm font-bold hover:bg-[var(--fg-secondary)] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
            {!status && <ArrowRight size={16} />}
          </button>
        </form>
      )}
    </div>
  );
}
