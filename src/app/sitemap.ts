import type { MetadataRoute } from "next";
import { projects, certifications } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://sudhii.in";

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/architecture`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/open-source`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/notes`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/skills`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/certifications`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/resume`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p.tier === "hero" ? 0.9 : 0.7,
  }));

  const certPages: MetadataRoute.Sitemap = certifications
    .filter((c) => c.slug)
    .map((c) => ({
      url: `${base}/certifications/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    }));

  return [...staticPages, ...projectPages, ...certPages];
}
