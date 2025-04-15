import { content } from '@/content';

export type JsonLdAuthor = {
  "@type": "Person";
  name: string;
  url?: string;
};

export function generateBlogPostJsonLd({
  title,
  publishDate,
  author,
  slug,
}: {
  title: string;
  publishDate?: string;
  author?: string;
  slug: string;
}) {
  const canonicalUrl = `${content.metadata.siteUrl}/blog/${slug}`;
  
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    author: {
      "@type": "Person",
      name: author || "Adam Wehunt",
    },
    datePublished: publishDate,
    headline: title,
    url: canonicalUrl,
  };
}

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    jobTitle: "Software Engineer",
    name: `${content.components.name.firstName} ${content.components.name.lastName}`,
    sameAs: content.components.socialLinks
      .map(link => link.href)
      .filter(href => !href.includes('mailto:')),
    url: content.metadata.siteUrl,
    worksFor: {
      "@type": "Organization",
      name: "Motortrend"
    }
  };
}

export function generateWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    description: content.metadata.description,
    name: `${content.components.name.firstName} ${content.components.name.lastName}`,
    url: content.metadata.siteUrl,
  };
}
