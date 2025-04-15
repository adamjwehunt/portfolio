import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { MdxLink } from './components/MdxLink';
import { ReactElement } from 'react';
import { MdxImage } from './components/MdxImage';
import { Columns, Left, Right } from './components/Columns';
import moment from 'moment';
import { ImageProps } from 'next/image';

const components = {
	a: MdxLink,
	Image: MdxImage,
	Columns,
	Left,
	Right,
};

interface BlogPost {
	metadata: BlogPostMetadata;
	content: ReactElement;
}

interface BlogPostMetadata {
	slug: string;
	title?: string;
	author?: string;
	publishDate?: string;
	tags?: string[];
}

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export const getPost = async (slug: string): Promise<BlogPost> => {
	const mdxSlug = slug.replace(/\.mdx$/, '');
	const filePath = path.join(postsDirectory, `${mdxSlug}.mdx`);
	const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

	// Use gray-matter to parse frontmatter and content
	const { data: frontmatter, content: mdxContent } = matter(fileContent);

	const content = await MDXRemote({
		source: mdxContent,
		components,
	});

	return {
		metadata: {
			...frontmatter,
			slug: mdxSlug,
			...(frontmatter.publishDate
				? {
						publishDate: moment(frontmatter.publishDate).format(
							'MMMM Do, YYYY'
						),
				  }
				: {}),
		},
		content,
	};
};

export const getPostsMetadata = async (): Promise<BlogPostMetadata[]> => {
	const files = fs.readdirSync(postsDirectory);

	const posts = [];

	for (const file of files) {
		const { metadata } = await getPost(file);
		posts.push(metadata);
	}

	const sortedPosts = sortPostsByDate(posts);

	return sortedPosts;
};

interface About {
	metadata: AboutMetadata;
	content: ReactElement;
}

interface AboutMetadata {
	title?: string;
}

export const getAbout = async (): Promise<About> => {
	const filePath = path.join('content', `about.mdx`);
	const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

	// Use gray-matter to parse frontmatter and content
	const { data: frontmatter, content: mdxContent } = matter(fileContent);

	const content = await MDXRemote({
		source: mdxContent,
		components,
	});

	return { metadata: frontmatter, content };
};

export interface Task {
	text: string;
	image: ImageProps;
}

export const convertTasksToMdx = async (tasks: Task[]) => {
	const newTasks: { image: ImageProps; content: ReactElement }[] = [];

	for (const task of tasks) {
		const content = await MDXRemote({
			source: task.text,
			components,
		});
		newTasks.push({ image: task.image, content });
	}

	return newTasks;
};

export const convertStringsToMdx = async (strings: string[]) => {
	const mdx: ReactElement[] = [];

	for (const string of strings) {
		const content = await MDXRemote({
			source: string,
			components,
		});
		mdx.push(content);
	}

	return mdx;
};

function sortPostsByDate(posts: BlogPostMetadata[]) {
	return posts.sort((a, b) => {
		const aDate = a.publishDate
			? moment(a.publishDate, 'MMMM Do, YYYY').valueOf()
			: 0;
		const bDate = b.publishDate
			? moment(b.publishDate, 'MMMM Do, YYYY').valueOf()
			: 0;
		return bDate - aDate;
	});
}
