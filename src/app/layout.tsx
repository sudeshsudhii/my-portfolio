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
    default: "Sudesh P — Software Engineer | Creator of OmniSLM",
    template: "%s | Sudesh P — Software Engineer",
  },
  description:
    "Sudesh P is an Software Engineer building production-ready applications with Small Language Models. Creator of OmniSLM. RAG pipelines, local LLMs, agent architectures. M.Tech CS @ SRMIST.",
  keywords: [
    "Sudesh P",
    "Software Engineer",
    "OmniSLM",
    "Small Language Models",
    "SLM Framework",
    "AI Engineer",
    "LLM Engineer",
    "RAG Pipeline",
    "Local LLM",
    "FAISS",
    "Ollama",
    "Spring AI",
    "Agent Architecture",
    "Privacy-First AI",
    "AI Infrastructure",
    "Python AI Framework",
  ],
  authors: [{ name: "Sudesh P", url: "https://sudhii.in" }],
  creator: "Sudesh P",
  alternates: {
    canonical: "https://sudhii.in",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sudhii.in",
    siteName: "Sudesh P — Software Engineer",
    title: "Sudesh P — Software Engineer | Creator of OmniSLM",
    description:
      "Software Engineer building production-ready applications with Small Language Models. Creator of OmniSLM framework.",
    images: [
      {
        url: "https://sudhii.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sudesh P — Software Engineer | Creator of OmniSLM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudesh P — Software Engineer | Creator of OmniSLM",
    description:
      "Software Engineer building production-ready applications with Small Language Models. Creator of OmniSLM framework.",
    images: ["https://sudhii.in/og-image.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://sudhii.in/#person",
    name: "Sudesh P",
    givenName: "Sudesh",
    familyName: "P",
    jobTitle: "Software Engineer",
    description:
      "Software Engineer building production-ready applications with Small Language Models. Creator of OmniSLM.",
    url: "https://sudhii.in",
    image: "https://sudhii.in/og-image.png",
    email: "mrsudesh17@gmail.com",
    sameAs: [
      "https://github.com/sudeshsudhii",
      "https://linkedin.com/in/sudesh-p-8a656b358/",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "SRM Institute of Science and Technology",
        url: "https://www.srmist.edu.in",
      },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Small Language Models",
      "Retrieval-Augmented Generation",
      "RAG Pipelines",
      "FAISS",
      "Ollama",
      "Python",
      "Java",
      "Spring AI",
      "Agent Architecture",
      "Vector Databases",
      "Privacy-First AI",
      "Local LLM Deployment",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationalCategory: "15-1252.00",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://sudhii.in/#website",
    name: "Sudesh P — Software Engineer",
    url: "https://sudhii.in",
    description:
      "Portfolio and technical writing by Sudesh P, Software Engineer and creator of OmniSLM.",
    publisher: { "@id": "https://sudhii.in/#person" },
    inLanguage: "en-US",
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
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
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
