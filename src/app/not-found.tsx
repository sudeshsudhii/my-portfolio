import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <p className="text-6xl font-bold text-[var(--fg-tertiary)] mb-4">404</p>
      <h1 className="text-2xl font-semibold text-[var(--fg-primary)] mb-3">
        Page not found
      </h1>
      <p className="text-base text-[var(--fg-secondary)] mb-8">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-[var(--radius-sm)] bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] transition-colors no-underline"
      >
        Go Home
      </Link>
    </div>
  );
}
