import type { Metadata } from "next";
import Link from "next/link";
import { PersonSchema } from "@/components/seo-schemas";

export const metadata: Metadata = {
  title: "About | Sudesh P (Sudhii)",
  description: "Personal story, AI journey, and mission of Sudesh P, Software Engineer and creator of OmniSLM.",
};

export default function AboutPage() {
  return (
    <>
      <PersonSchema />
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--fg-primary)] tracking-tight mb-8">
          About Me
        </h1>
        
        <div className="prose prose-neutral dark:prose-invert max-w-none text-[var(--fg-secondary)]">
          <p className="text-lg leading-relaxed mb-6 font-medium text-[var(--fg-primary)]">
            I am a Software Engineer based in Chennai, currently pursuing my M.Tech in Computer Science at SRM Institute of Science and Technology. My engineering focus lies squarely at the intersection of AI architecture and production software systems.
          </p>

          <h2 className="text-2xl font-bold text-[var(--fg-primary)] mt-12 mb-4">My AI Journey</h2>
          <p className="leading-relaxed mb-4">
            The transition from traditional software engineering to AI engineering is often framed as learning to write good prompts. I quickly discovered that this is fundamentally incorrect. Real-world AI applications are 10% prompt engineering and 90% traditional systems engineering: dealing with state, memory, queuing, retry logic, and latency.
          </p>
          <p className="leading-relaxed mb-4">
            I began exploring the space of Small Language Models (SLMs) when I realized that most enterprise applications do not need a trillion-parameter model to perform narrow, well-defined tasks. 
          </p>

          <h2 className="text-2xl font-bold text-[var(--fg-primary)] mt-12 mb-4">The OmniSLM Vision</h2>
          <p className="leading-relaxed mb-4">
            This realization led to the creation of <Link href="/omnislm" className="text-[var(--accent)] font-semibold hover:underline">OmniSLM</Link>. It started as an internal tool to standardize how I connected local models to vector databases, and it has since evolved into an open-source framework designed to help developers build secure, privacy-first AI apps without relying on expensive APIs.
          </p>
          
          <h2 className="text-2xl font-bold text-[var(--fg-primary)] mt-12 mb-4">Mission Statement</h2>
          <p className="leading-relaxed mb-4">
            My goal is to democratize access to production-grade AI infrastructure. By focusing on local inference, efficient RAG pipelines, and open-source tooling, I want to enable developers and small teams to build intelligent systems that rival enterprise solutions in capability, without compromising user data.
          </p>

          <h2 className="text-2xl font-bold text-[var(--fg-primary)] mt-12 mb-4">Currently</h2>
          <ul className="list-disc list-inside space-y-2 mb-8">
            <li>Maintaining and expanding OmniSLM.</li>
            <li>Researching agent orchestration patterns.</li>
            <li>Building PaathAI, an academic intelligence platform.</li>
            <li>Looking for full-time opportunities as an AI Systems Engineer.</li>
          </ul>

          <hr className="border-[var(--border-subtle)] my-12" />
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link href="/contact" className="px-6 py-3 rounded-[var(--radius-sm)] bg-[var(--fg-primary)] text-[var(--bg-primary)] font-bold text-sm hover:bg-[var(--fg-secondary)] transition-colors text-center w-full sm:w-auto">
              Get in Touch
            </Link>
            <Link href="/blog" className="px-6 py-3 rounded-[var(--radius-sm)] border border-[var(--border)] text-[var(--fg-primary)] font-bold text-sm hover:bg-[var(--bg-secondary)] transition-colors text-center w-full sm:w-auto">
              Read My Notes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
