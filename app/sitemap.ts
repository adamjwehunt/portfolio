import { content } from '@/content';
import { getPostsMetadata } from '@/lib/mdx';

export const dynamic = 'force-static';
export const revalidate = false;

export default async function sitemap() {
  const posts = await getPostsMetadata();
  const baseUrl = content.metadata.siteUrl;

  // Blog posts
  const blogUrls = posts.map((post) => ({
    lastModified: post.publishDate,
    url: `${baseUrl}/blog/${post.slug}`,
  }));

  // Static pages
  const routes = [
    '',
    '/about',
    '/blog',
    '/projects',
  ].map((route) => ({
    lastModified: new Date().toISOString().split('T')[0],
    url: `${baseUrl}${route}`,
  }));

  return [...routes, ...blogUrls];
}
