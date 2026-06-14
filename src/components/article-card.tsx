import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar } from "lucide-react";
import { format, parseISO } from "date-fns";
import type { BlogPost } from "@/lib/mdx";

export function ArticleCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col border border-[var(--border-subtle)] rounded-[var(--radius-md)] overflow-hidden bg-[var(--bg-secondary)] hover:border-[var(--border)] transition-all hover:shadow-sm"
    >
      <div className="relative w-full aspect-[1200/630] overflow-hidden bg-[var(--bg-primary)]">
        <Image
          src={post.metadata.coverImage}
          alt={post.metadata.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-[var(--bg-primary)] text-[var(--fg-primary)] shadow-sm border border-[var(--border-subtle)]">
            {post.metadata.category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs font-medium text-[var(--fg-tertiary)] mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar size={14} />
            {format(parseISO(post.metadata.date), "MMM d, yyyy")}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} />
            {post.readingTime}
          </span>
        </div>
        <h3 className="text-lg font-bold text-[var(--fg-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
          {post.metadata.title}
        </h3>
        <p className="text-sm text-[var(--fg-secondary)] line-clamp-3 mb-4 flex-grow">
          {post.metadata.description}
        </p>
      </div>
    </Link>
  );
}
