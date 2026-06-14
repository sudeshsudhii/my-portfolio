export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.sudhii.in/#person",
    "name": "Sudesh P",
    "alternateName": ["Sudhii", "Sudesh Sudhii", "sudhii"],
    "url": "https://www.sudhii.in",
    "image": "https://www.sudhii.in/sudesh-profile.jpg",
    "jobTitle": "AI Systems Engineer",
    "description": "Software Engineer specialising in Small Language Models, RAG pipelines, and local-first AI infrastructure. Creator of OmniSLM.",
    "sameAs": [
      "https://github.com/sudeshsudhii",
      "https://linkedin.com/in/sudesh-p-8a656b358/",
      "https://x.com/sudhii_dev"
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ArticleSchema({ post }: { post: any }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.metadata.title,
    "description": post.metadata.description,
    "image": [`https://www.sudhii.in${post.metadata.coverImage}`],
    "datePublished": new Date(post.metadata.date).toISOString(),
    "dateModified": new Date(post.metadata.date).toISOString(),
    "author": [{
      "@type": "Person",
      "name": post.metadata.author,
      "url": "https://www.sudhii.in/author/sudesh-p"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Sudhii",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.sudhii.in/og-image.png"
      }
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "OmniSLM",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "An open-source Python framework for building production AI applications with Small Language Models.",
    "author": {
      "@type": "Person",
      "name": "Sudesh P",
      "url": "https://www.sudhii.in/author/sudesh-p"
    }
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
