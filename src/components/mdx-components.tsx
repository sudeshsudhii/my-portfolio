import Image from "next/image";
import Link from "next/link";
import { CopyButton } from "./copy-button"; // Assuming I need to create this, or I can inline it.

function CustomLink(props: any) {
  const href = props.href;
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  if (href.startsWith("#")) {
    return <a {...props} />;
  }
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function CustomImage(props: any) {
  return (
    <div className="my-8 relative w-full aspect-video rounded-[var(--radius-md)] overflow-hidden border border-[var(--border-subtle)]">
      <Image
        alt={props.alt}
        src={props.src}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
      />
    </div>
  );
}

export const components = {
  Image: CustomImage,
  a: CustomLink,
  h1: (props: any) => (
    <h1 className="text-3xl font-extrabold mt-10 mb-4 text-[var(--fg-primary)] tracking-tight" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-2xl font-bold mt-10 mb-4 text-[var(--fg-primary)] tracking-tight" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl font-bold mt-8 mb-3 text-[var(--fg-primary)] tracking-tight" {...props} />
  ),
  p: (props: any) => (
    <p className="leading-relaxed text-[var(--fg-secondary)] mb-6 text-[15px] sm:text-base" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-inside mb-6 text-[var(--fg-secondary)] space-y-2 text-[15px] sm:text-base" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside mb-6 text-[var(--fg-secondary)] space-y-2 text-[15px] sm:text-base" {...props} />
  ),
  li: (props: any) => <li className="leading-relaxed" {...props} />,
  strong: (props: any) => <strong className="font-semibold text-[var(--fg-primary)]" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-[var(--accent)] pl-4 italic text-[var(--fg-tertiary)] mb-6 bg-[var(--bg-secondary)] py-2 pr-4 rounded-r-[var(--radius-sm)]" {...props} />
  ),
  pre: (props: any) => {
    return (
      <div className="relative group my-6">
        {/* We can add CopyButton here if we extract the raw code string, but rehype-pretty-code wraps code in pre */}
        <pre className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-[var(--radius-md)] p-4 overflow-x-auto text-sm" {...props} />
      </div>
    );
  },
  code: (props: any) => {
    // If it's inline code
    if (!props.className) {
      return <code className="bg-[var(--bg-secondary)] border border-[var(--border-subtle)] rounded-[var(--radius-sm)] px-1.5 py-0.5 text-[0.9em] font-mono text-[var(--fg-primary)]" {...props} />;
    }
    return <code {...props} />;
  },
};
