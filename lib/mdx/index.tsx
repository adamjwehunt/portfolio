import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import moment from 'moment';
import { ImageProps } from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ReactElement , cache } from 'react';

import { Columns, Left, Right } from './components/Columns';
import { MdxImage } from './components/MdxImage';
import { MdxLink } from './components/MdxLink';

const components = {
	Columns,
	Image: MdxImage,
	Left,
	Right,
	a: MdxLink,
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

const getFileContent = cache((filePath: string): string => {
	try {
		return fs.readFileSync(filePath, { encoding: 'utf8' });
	} catch (error) {
		console.error(`Error reading file ${filePath}:`, error);
		return '';
	}
});

// Cached version of metadata extraction
export const getPostMetadata = cache(async (slug: string): Promise<BlogPostMetadata> => {
	const mdxSlug = slug.replace(/\.mdx$/, '');
	const filePath = path.join(postsDirectory, `${mdxSlug}.mdx`);
	const fileContent = getFileContent(filePath);

	const { data: frontmatter } = matter(fileContent);
	
	return {
		...frontmatter,
		slug: mdxSlug,
		...(frontmatter.publishDate
			? {
					publishDate: moment(frontmatter.publishDate).format(
						'MMMM Do, YYYY'
					),
			  }
			: {}),
	};
});

export const getPost = cache(async (slug: string): Promise<BlogPost> => {
	const mdxSlug = slug.replace(/\.mdx$/, '');
	const filePath = path.join(postsDirectory, `${mdxSlug}.mdx`);
	const fileContent = getFileContent(filePath);

	const { data: frontmatter, content: mdxContent } = matter(fileContent);

	const content = await MDXRemote({
		components,
		options: {
			mdxOptions: {
				development: process.env.NODE_ENV === 'development',
				rehypePlugins: [],
				remarkPlugins: [],
			},
			parseFrontmatter: false,
		},
		source: mdxContent,
	});

	return {
		content,
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
	};
});

export const getPostsMetadata = cache(async (): Promise<BlogPostMetadata[]> => {
	const files = fs.readdirSync(postsDirectory);
	
	const posts = await Promise.all(
		files.map(async (file) => {
			const slug = file.replace(/\.mdx$/, '');
			return await getPostMetadata(slug);
		})
	);

	return sortPostsByDate(posts);
});

interface About {
	metadata: AboutMetadata;
	content: ReactElement;
}

interface AboutMetadata {
	title?: string;
}

export const getAbout = cache(async (): Promise<About> => {
	const filePath = path.join('content', `about.mdx`);
	const fileContent = getFileContent(filePath);

	// Use gray-matter to parse frontmatter and content
	const { data: frontmatter, content: mdxContent } = matter(fileContent);

	const content = await MDXRemote({
		components,
		options: {
			mdxOptions: {
				development: process.env.NODE_ENV === 'development',
			},
			parseFrontmatter: false,
		},
		source: mdxContent,
	});

	return { content, metadata: frontmatter };
});

export interface Task {
	text: string;
	image: ImageProps;
}

export const convertTasksToMdx = cache(async (tasks: Task[]) => {
	const newTasks: { image: ImageProps; content: ReactElement }[] = [];

	const contentPromises = tasks.map(task => 
		MDXRemote({
			components,
			options: {
				mdxOptions: {
					development: process.env.NODE_ENV === 'development',
				},
			},
			source: task.text,
		})
	);
	
	const contents = await Promise.all(contentPromises);
	
	// Match content with images
	for (let i = 0; i < tasks.length; i++) {
		newTasks.push({ content: contents[i], image: tasks[i].image });
	}

	return newTasks;
});

export const convertStringsToMdx = cache(async (strings: string[]) => {
	const contentPromises = strings.map(string => 
		MDXRemote({
			components,
			options: {
				mdxOptions: {
					development: process.env.NODE_ENV === 'development',
				},
			},
			source: string,
		})
	);
	
	return Promise.all(contentPromises);
});

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
