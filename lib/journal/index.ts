import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { cache } from 'react';

import { content } from '@/content';
import { formatPublishDate, getPostsMetadata, renderMdx } from '@/lib/mdx';

import { getFeedEntries } from './feeds';
import { ArticleEntry, JournalEntry, PostEntry, SocialEntry } from './types';

export * from './types';

const journalDirectory = path.join(process.cwd(), 'content', 'journal');

function toIsoDate(value: unknown): string | undefined {
	if (!value) {
		return undefined;
	}
	const date = new Date(value as string);
	return isNaN(date.getTime()) ? undefined : date.toISOString().slice(0, 10);
}

const formatDate = (isoDate: string) => formatPublishDate(isoDate) ?? isoDate;

/**
 * Curated external entries live in content/journal/*.mdx.
 * Frontmatter holds the entry details and the (optional) MDX body is a personal comment.
 */
export const getCuratedEntries = cache(
	async (): Promise<(ArticleEntry | SocialEntry)[]> => {
		if (!fs.existsSync(journalDirectory)) {
			return [];
		}

		const files = fs
			.readdirSync(journalDirectory)
			.filter((file) => file.endsWith('.mdx'));

		const entries = await Promise.all(
			files.map(async (file) => {
				const id = file.replace(/\.mdx$/, '');
				const raw = fs.readFileSync(path.join(journalDirectory, file), 'utf8');
				const { data, content: body } = matter(raw);
				const date = toIsoDate(data.publishDate);

				if (!date || !data.url || !data.author) {
					console.warn(
						`Skipping journal entry ${file}: publishDate, url and author are required`
					);
					return undefined;
				}

				const comment = body.trim() ? await renderMdx(body) : undefined;
				const base = {
					author: String(data.author),
					comment,
					date,
					id,
					image: data.image,
					publishDate: formatDate(date),
					url: String(data.url),
				};

				if (data.type === 'social' && data.text) {
					return {
						...base,
						handle: data.handle?.replace(/^@/, ''),
						source: String(data.source ?? 'x').toLowerCase(),
						text: String(data.text),
						type: 'social',
					} satisfies SocialEntry;
				}

				if (data.type === 'article' && data.title) {
					return {
						...base,
						excerpt: data.excerpt,
						source: data.source,
						title: String(data.title),
						type: 'article',
					} satisfies ArticleEntry;
				}

				console.warn(
					`Skipping journal entry ${file}: type must be "article" (with title) or "social" (with text)`
				);
				return undefined;
			})
		);

		return entries.filter((entry) => entry !== undefined);
	}
);

const getPostEntries = async (): Promise<PostEntry[]> => {
	const posts = await getPostsMetadata();

	return posts.map(({ slug, title = '', tags, rawPublishDate }) => {
		const date = toIsoDate(rawPublishDate) ?? '';
		return {
			date,
			id: slug,
			publishDate: date ? formatDate(date) : '',
			slug,
			tags,
			title,
			type: 'post',
		};
	});
};

/** All journal entries (original posts, curated links, feed items), newest first */
export const getJournalEntries = cache(async (): Promise<JournalEntry[]> => {
	const [posts, curated, feedItems] = await Promise.all([
		getPostEntries(),
		getCuratedEntries(),
		getFeedEntries(content.page.journal.feeds, formatDate),
	]);

	// Hand-curated entries win over the same link coming from a feed
	const curatedUrls = new Set(curated.map((entry) => entry.url));
	const feeds = feedItems.filter((entry) => !curatedUrls.has(entry.url));

	return [...posts, ...curated, ...feeds].sort((a, b) =>
		b.date.localeCompare(a.date)
	);
});
