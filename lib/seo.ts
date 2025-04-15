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
    headline: title,
    datePublished: publishDate,
    author: {
      "@type": "Person",
      name: author || "Adam Wehunt",
    },
    url: canonicalUrl,
  };
}

export function generatePersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: `${content.components.name.firstName} ${content.components.name.lastName}`,
    url: content.metadata.siteUrl,
    sameAs: content.components.socialLinks
      .map(link => link.href)
      .filter(href => !href.includes('mailto:')),
    jobTitle: "Software Engineer",
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
    url: content.metadata.siteUrl,
    name: `${content.components.name.firstName} ${content.components.name.lastName}`,
    description: content.metadata.description,
  };
}
