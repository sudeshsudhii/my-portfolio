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
  metadataBase: new URL("https://www.sudhii.in"),
  title: {
    default: "Sudesh P (Sudhii) — AI Systems Engineer | Creator of OmniSLM",
    template: "%s | Sudesh P — Sudhii",
  },
  description:
    "Sudesh P, also known as Sudhii, is a Software Engineer at SRMIST Chennai building production AI apps with Small Language Models. Creator of OmniSLM — open-source SLM framework. Expert in RAG, FAISS, Ollama, Spring AI, local LLM.",
  keywords: [
    "Sudesh P",
    "Sudhii",
    "sudhii.in",
    "OmniSLM",
    "Small Language Model Framework",
    "AI Systems Engineer",
    "RAG Pipeline",
    "Local LLM",
    "FAISS",
    "Ollama",
    "Spring AI",
    "AI Engineer Chennai",
    "SRMIST",
    "PaathAI",
    "open source AI framework",
    "SLM framework",
    "AI infrastructure",
  ],
  authors: [{ name: "Sudesh P", url: "https://www.sudhii.in" }],
  creator: "Sudesh P",
  publisher: "Sudesh P",
  alternates: {
    canonical: "https://www.sudhii.in",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sudhii.in",
    siteName: "Sudhii — Sudesh P",
    title: "Sudesh P (Sudhii) — AI Systems Engineer | Creator of OmniSLM",
    description:
      "Software Engineer building production AI apps with Small Language Models. Creator of OmniSLM. RAG, FAISS, Ollama, Spring AI. M.Tech CS @ SRMIST Chennai.",
    images: [
      {
        url: "https://www.sudhii.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sudesh P (Sudhii) — AI Systems Engineer | Creator of OmniSLM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sudhii_dev",
    creator: "@sudhii_dev",
    title: "Sudesh P (Sudhii) — AI Systems Engineer | Creator of OmniSLM",
    description:
      "Software Engineer building production AI apps with Small Language Models. Creator of OmniSLM.",
    images: ["https://www.sudhii.in/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "vjF9AHJmP1L4hXp-uDrfn6t3KcrHgABaRJzlo6w9qzs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.sudhii.in/#person",
        name: "Sudesh P",
        alternateName: [
          "Sudhii",
          "Sudesh Sudhii",
          "sudhii",
          "SudeshP",
          "Sudesh P SRMIST",
        ],
        url: "https://www.sudhii.in",
        image: {
          "@type": "ImageObject",
          url: "https://www.sudhii.in/sudesh-profile.jpg",
          width: 400,
          height: 400,
        },
        jobTitle: "Software Engineer & AI Systems Engineer",
        description:
          "Sudesh P (also known as Sudhii) is a Software Engineer and AI researcher at SRMIST Chennai, specialising in Small Language Models, RAG pipelines, and local-first AI infrastructure. Creator of OmniSLM, an open-source Python framework for building production AI applications with Small Language Models.",
        email: "mrsudesh17@gmail.com",
        gender: "Male",
        nationality: "Indian",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chennai",
          addressRegion: "Tamil Nadu",
          addressCountry: "IN",
        },
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "SRM Institute of Science and Technology",
          alternateName: "SRMIST",
          url: "https://www.srmist.edu.in",
        },
        knowsAbout: [
          "Small Language Models",
          "Retrieval-Augmented Generation",
          "AI Infrastructure",
          "Python",
          "Java",
          "Spring AI",
          "FAISS",
          "Ollama",
          "Agent Architecture",
          "Local LLM",
          "Next.js",
          "Blockchain",
          "Ethereum",
          "Spring Boot",
          "RAG Pipeline",
        ],
        sameAs: [
          "https://github.com/sudeshsudhii",
          "https://linkedin.com/in/sudesh-p-8a656b358/",
          "https://huggingface.co/sudeshsudhii",
          "https://dev.to/sudhii",
          "https://medium.com/@sudhii",
          "https://x.com/sudhii_dev",
        ],
        mainEntityOfPage: "https://www.sudhii.in",
      },
      {
        "@type": "WebSite",
        "@id": "https://www.sudhii.in/#website",
        url: "https://www.sudhii.in",
        name: "Sudhii — Sudesh P Portfolio",
        alternateName: "sudhii.in",
        description:
          "Portfolio of Sudesh P (Sudhii), AI Engineer and creator of OmniSLM. Software Engineer specialising in Small Language Models, RAG, and local AI.",
        author: { "@id": "https://www.sudhii.in/#person" },
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.sudhii.in/notes?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      id="top"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
      suppressHydrationWarning
    >
      <head>
        <link rel="me" href="https://github.com/sudeshsudhii" />
        <link
          rel="me"
          href="https://linkedin.com/in/sudesh-p-8a656b358/"
        />
        <link rel="me" href="https://x.com/sudhii_dev" />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteSchema).replace(/</g, "\\u003c"),
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
