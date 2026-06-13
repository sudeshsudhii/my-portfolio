import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sudhii.in"),
  title: {
    default: "Sudesh P — AI/LLM Engineer & Full-Stack Developer",
    template: "%s — Sudesh P",
  },
  description:
    "Portfolio of Sudesh P. Building production AI systems with RAG, local LLMs, and full-stack web platforms. M.Tech CS @ SRMIST.",
  keywords: [
    "Sudesh P",
    "AI Engineer",
    "LLM Engineer",
    "Full-Stack Developer",
    "RAG",
    "Spring AI",
    "React",
    "Next.js",
    "Blockchain",
    "SRMIST",
  ],
  authors: [{ name: "Sudesh P" }],
  creator: "Sudesh P",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sudhii.in",
    siteName: "Sudesh P",
    title: "Sudesh P — AI/LLM Engineer & Full-Stack Developer",
    description:
      "Building production AI systems with RAG, local LLMs, and full-stack web platforms.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/144050211?v=4",
        width: 400,
        height: 400,
        alt: "Sudesh P",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Sudesh P — AI/LLM Engineer & Full-Stack Developer",
    description:
      "Building production AI systems with RAG, local LLMs, and full-stack web platforms.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sudesh P",
    jobTitle: "AI/LLM Engineer & Full-Stack Developer",
    url: "https://sudhii.in",
    sameAs: [
      "https://github.com/sudeshsudhii",
      "https://linkedin.com/in/sudesh-p-8a656b358/",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "SRMIST",
    },
    knowsAbout: [
      "RAG",
      "LLM",
      "Spring Boot",
      "React",
      "Blockchain",
      "FAISS",
      "Python",
      "Java",
    ],
  };

  return (
    <html
      lang="en"
      id="top"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[var(--accent)] focus:text-white focus:rounded-[var(--radius-sm)]"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
