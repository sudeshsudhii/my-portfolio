import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { format, parseISO } from "date-fns";
import { Clock, Calendar, ArrowLeft } from "lucide-react";

import { getPostBySlug, getPostSlugs, getRelatedPosts } from "@/lib/mdx";
import { components } from "@/components/mdx-components";
import { ArticleSchema } from "@/components/seo-schemas";
import { ArticleCard } from "@/components/article-card";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  try {
    const post = getPostBySlug(resolvedParams.slug);
    return {
      title: post.metadata.title,
      description: post.metadata.description,
      openGraph: {
        title: post.metadata.title,
        description: post.metadata.description,
        type: "article",
        publishedTime: post.metadata.date,
        authors: ["Sudesh P"],
        images: [
          {
            url: `https://www.sudhii.in${post.metadata.coverImage}`,
            width: 1200,
            height: 630,
            alt: post.metadata.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.metadata.title,
        description: post.metadata.description,
        images: [`https://www.sudhii.in${post.metadata.coverImage}`],
      },
    };
  } catch (e) {
    return {};
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let post;
  try {
    post = getPostBySlug(resolvedParams.slug);
  } catch (e) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.metadata.category);

  return (
    <>
      <ArticleSchema post={post} />
      <article className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--fg-tertiary)] hover:text-[var(--fg-primary)] transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Back to all notes
        </Link>

        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-[var(--fg-tertiary)] mb-4">
            <span className="px-2.5 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--fg-primary)]">
              {post.metadata.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {format(parseISO(post.metadata.date), "MMM d, yyyy")}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              {post.readingTime}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--fg-primary)] tracking-tight mb-6 leading-[1.1]">
            {post.metadata.title}
          </h1>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-[var(--border-subtle)]">
              <Image
                src="/sudesh-profile.jpg"
                alt="Sudesh P"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--fg-primary)]">
                <Link href="/author/sudesh-p" className="hover:underline">
                  {post.metadata.author}
                </Link>
              </p>
              <p className="text-xs text-[var(--fg-tertiary)]">AI Systems Engineer</p>
            </div>
          </div>
        </header>

        <div className="relative w-full aspect-[1200/630] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--border-subtle)] mb-12 bg-[var(--bg-secondary)]">
          <Image
            src={post.metadata.coverImage}
            alt={post.metadata.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 800px) 100vw, 800px"
          />
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MDXRemote
            source={post.content}
            components={components}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  rehypeSlug,
                  [rehypePrettyCode, { theme: "github-dark" }],
                ],
              },
            }}
          />
        </div>

        {/* Author Bio Section */}
        <hr className="my-12 border-[var(--border-subtle)]" />
        <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-[var(--radius-md)] bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
          <Image
            src="/sudesh-profile.jpg"
            alt="Sudesh P"
            width={80}
            height={80}
            className="rounded-full shrink-0 border border-[var(--border)]"
          />
          <div>
            <h3 className="text-lg font-bold text-[var(--fg-primary)] mb-2">About the Author</h3>
            <p className="text-sm text-[var(--fg-secondary)] mb-4 leading-relaxed">
              Sudesh P is a Software Engineer specialising in Small Language Models and local AI infrastructure. He is the creator of OmniSLM.
            </p>
            <Link
              href="/author/sudesh-p"
              className="text-sm font-bold text-[var(--accent)] hover:text-[var(--fg-primary)] transition-colors"
            >
              Read full bio →
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-2xl font-bold text-[var(--fg-primary)] mb-8">Related Notes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <ArticleCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
