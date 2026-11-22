import { content } from '@/content';
import { getPostsMetadata } from '@/lib/mdx';

export const dynamic = 'force-static';
export const revalidate = false;

export default async function sitemap() {
  const posts = await getPostsMetadata();
  const baseUrl = content.metadata.siteUrl;

  // Journal posts
  const journalUrls = posts.map((post) => ({
    lastModified: post.publishDate,
    url: `${baseUrl}/journal/${post.slug}`,
  }));

  // Static pages
  const routes = [
    '',
    '/about',
    '/journal',
    '/projects',
  ].map((route) => ({
    lastModified: new Date().toISOString().split('T')[0],
    url: `${baseUrl}${route}`,
  }));

  return [...routes, ...journalUrls];
}
