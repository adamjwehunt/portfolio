import { getPostsMetadata } from '@/lib/mdx';
import { content } from '@/content';

export default async function sitemap() {
  const posts = await getPostsMetadata();
  const baseUrl = content.metadata.siteUrl;

  // Blog posts
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.publishDate,
  }));

  // Static pages
  const routes = [
    '',
    '/about',
    '/blog',
    '/projects',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }));

  return [...routes, ...blogUrls];
}
