import { Feed } from "feed";
import { getAllPosts } from "@/lib/mdx";

export async function GET() {
  const posts = getAllPosts();

  const siteUrl = "https://www.sudhii.in";

  const feed = new Feed({
    title: "Sudesh P (Sudhii) — AI Engineering Notes",
    description: "Insights on Small Language Models, RAG architectures, and AI systems engineering.",
    id: siteUrl,
    link: siteUrl,
    language: "en",
    image: `${siteUrl}/og-image.png`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Sudesh P`,
    author: {
      name: "Sudesh P",
      email: "mrsudesh17@gmail.com",
      link: `${siteUrl}/author/sudesh-p`,
    },
  });

  posts.forEach((post) => {
    feed.addItem({
      title: post.metadata.title,
      id: `${siteUrl}/blog/${post.slug}`,
      link: `${siteUrl}/blog/${post.slug}`,
      description: post.metadata.description,
      content: post.metadata.description, // simplified for RSS
      author: [
        {
          name: "Sudesh P",
          email: "mrsudesh17@gmail.com",
          link: `${siteUrl}/author/sudesh-p`,
        },
      ],
      date: new Date(post.metadata.date),
      image: `${siteUrl}${post.metadata.coverImage}`,
    });
  });

  return new Response(feed.rss2(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=86400, stale-while-revalidate",
    },
  });
}
