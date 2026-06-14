"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button
      disabled={!text}
      onClick={copy}
      className="absolute right-3 top-3 z-10 inline-flex items-center justify-center rounded-[var(--radius-sm)] p-2 text-[var(--fg-tertiary)] hover:bg-[var(--bg-primary)] hover:text-[var(--fg-primary)] focus:outline-none transition-colors border border-transparent hover:border-[var(--border-subtle)]"
    >
      <span className="sr-only">Copy</span>
      {isCopied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
    </button>
  );
}
