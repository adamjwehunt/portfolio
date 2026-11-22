import { ReactElement } from 'react';

interface BaseEntry {
	id: string;
	/** ISO date (YYYY-MM-DD), used for sorting */
	date: string;
	/** Human readable date, e.g. "October 28, 2026" */
	publishDate: string;
}

/** An original article written on this site (content/posts/*.mdx) */
export interface PostEntry extends BaseEntry {
	type: 'post';
	slug: string;
	title: string;
	tags?: string[];
}

/** An article from another site, curated in content/journal/*.mdx or pulled from a feed */
export interface ArticleEntry extends BaseEntry {
	type: 'article';
	title: string;
	author: string;
	url: string;
	excerpt?: string;
	/** Publication name, e.g. "Simon Willison's Weblog" */
	source?: string;
	/** Avatar or thumbnail, local path (e.g. /journal/avatar.jpg) or absolute URL */
	image?: string;
	/** Optional personal note, written as the MDX body of the entry file */
	comment?: ReactElement;
}

/** A social post (X, Bluesky, ...) curated in content/journal/*.mdx */
export interface SocialEntry extends BaseEntry {
	type: 'social';
	author: string;
	/** Account handle without the @ */
	handle?: string;
	url: string;
	text: string;
	/** Key into content.page.journal.socialSources, e.g. "x" */
	source: string;
	image?: string;
	comment?: ReactElement;
}

export type JournalEntry = PostEntry | ArticleEntry | SocialEntry;

export interface FeedSource {
	/** RSS or Atom feed URL */
	url: string;
	author: string;
	/** Publication name shown on each entry */
	source?: string;
	/** Max number of recent items to show from this feed (default 3) */
	limit?: number;
	image?: string;
}
