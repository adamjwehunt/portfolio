import { ArticleEntry, FeedSource } from './types';

const FEED_REVALIDATE_SECONDS = 60 * 60 * 24; // refresh feeds daily
const FEED_TIMEOUT_MS = 5000;
const EXCERPT_LENGTH = 220;

const ENTITIES: Record<string, string> = {
	'&amp;': '&',
	'&apos;': "'",
	'&gt;': '>',
	'&lt;': '<',
	'&nbsp;': ' ',
	'&quot;': '"',
};

function decode(value: string): string {
	return value
		.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
		.replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
		.replace(/&#x([0-9a-f]+);/gi, (_, code) =>
			String.fromCharCode(parseInt(code, 16))
		)
		.replace(/&(amp|apos|gt|lt|nbsp|quot);/g, (entity) => ENTITIES[entity]);
}

function getTag(xml: string, ...tags: string[]): string | undefined {
	for (const tag of tags) {
		const match = xml.match(
			new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'i')
		);
		if (match) {
			return decode(match[1]).trim();
		}
	}
	return undefined;
}

function getLink(xml: string): string | undefined {
	// Atom: <link rel="alternate" href="..."/> (or a bare <link href="..."/>)
	const atomLinks = Array.from(xml.matchAll(/<link\b([^>]*?)\/?>/gi)).map(
		(match) => match[1]
	);
	const alternate =
		atomLinks.find((attrs) => /rel=["']alternate["']/i.test(attrs)) ??
		atomLinks.find((attrs) => !/rel=/i.test(attrs));
	const href = alternate?.match(/href=["']([^"']+)["']/i)?.[1];
	if (href) {
		return decode(href);
	}
	// RSS: <link>...</link>
	return getTag(xml, 'link');
}

function toExcerpt(html?: string): string | undefined {
	if (!html) {
		return undefined;
	}
	const text = decode(html.replace(/<[^>]+>/g, ' '))
		.replace(/\s+/g, ' ')
		.replace(/ ([.,;:!?)])/g, '$1')
		.trim();
	return text.length > EXCERPT_LENGTH
		? `${text.slice(0, EXCERPT_LENGTH).replace(/\s+\S*$/, '')}…`
		: text || undefined;
}

export function parseFeed(
	xml: string,
	feed: FeedSource,
	formatDate: (date: string) => string
): ArticleEntry[] {
	const items = Array.from(xml.matchAll(/<(item|entry)\b[\s\S]*?<\/\1>/gi)).map(
		(match) => match[0]
	);

	return items
		.map((item): ArticleEntry | undefined => {
			const title = getTag(item, 'title');
			const url = getLink(item);
			const rawDate = getTag(item, 'pubDate', 'published', 'updated', 'dc:date');
			const date = rawDate ? new Date(rawDate) : undefined;

			if (!title || !url || !date || isNaN(date.getTime())) {
				return undefined;
			}

			const isoDate = date.toISOString().slice(0, 10);

			return {
				author: feed.author,
				date: isoDate,
				excerpt: toExcerpt(
					getTag(item, 'summary', 'description', 'content', 'content:encoded')
				),
				id: url,
				image: feed.image,
				publishDate: formatDate(isoDate),
				source: feed.source,
				title: toExcerpt(title) ?? title,
				type: 'article',
				url,
			};
		})
		.filter((entry): entry is ArticleEntry => Boolean(entry))
		.slice(0, feed.limit ?? 3);
}

export async function getFeedEntries(
	feeds: FeedSource[],
	formatDate: (date: string) => string
): Promise<ArticleEntry[]> {
	const results = await Promise.all(
		feeds.map(async (feed) => {
			try {
				const response = await fetch(feed.url, {
					next: { revalidate: FEED_REVALIDATE_SECONDS },
					signal: AbortSignal.timeout(FEED_TIMEOUT_MS),
				});
				if (!response.ok) {
					throw new Error(`HTTP ${response.status}`);
				}
				return parseFeed(await response.text(), feed, formatDate);
			} catch (error) {
				// A broken feed should never break the journal.
				console.warn(`Could not load feed ${feed.url}:`, error);
				return [];
			}
		})
	);

	return results.flat();
}
