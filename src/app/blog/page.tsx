import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import { ArticleCard } from "@/components/article-card";

export const metadata: Metadata = {
  title: "Blog | Insights on AI Systems Engineering",
  description: "Articles, tutorials, and insights on Small Language Models, RAG, and AI Infrastructure by Sudesh P.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--fg-primary)] tracking-tight mb-4">
          Notes on AI Engineering
        </h1>
        <p className="text-lg text-[var(--fg-secondary)] max-w-2xl">
          Deep dives into building production-ready systems with Small Language Models, designing robust RAG pipelines, and scaling AI infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
