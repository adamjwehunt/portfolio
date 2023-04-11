import path from 'path';
import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import { A } from './components/A';
import { ReactElement } from 'react';

interface BlogPost {
	metadata: BlogPostMetadata;
	content: string | ReactElement;
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

	const { frontmatter, content } = await compileMDX({
		source: fileContent,
		options: { parseFrontmatter: true },
	});

	return { metadata: { ...frontmatter, slug: mdxSlug }, content };
};

export const getPostsMetadata = async (): Promise<BlogPostMetadata[]> => {
	const files = fs.readdirSync(postsDirectory);

	const posts = [];

	for (const file of files) {
		const { metadata } = await getPost(file);
		posts.push(metadata);
	}

	return posts;
};

interface About {
	metadata: AboutMetadata;
	content: string | ReactElement;
}

interface AboutMetadata {
	title?: string;
}

export const getAbout = async (): Promise<About> => {
	const filePath = path.join('content', `about.mdx`);
	const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

	const { frontmatter, content } = await compileMDX({
		source: fileContent,
		options: { parseFrontmatter: true },
		components: {
			a: A,
		},
	});

	return { metadata: frontmatter, content };
};

interface Project {
	metadata: ProjectsMetadata;
	content: string | ReactElement;
}

interface ProjectsMetadata {
	title?: string;
	publishDate?: string;
}

const projectsDirectory = path.join(process.cwd(), 'content', 'projects');

const getProject = async (slug: string): Promise<Project> => {
	const mdxSlug = slug.replace(/\.mdx$/, '');
	const filePath = path.join(projectsDirectory, `${mdxSlug}.mdx`);
	const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

	const { frontmatter, content } = await compileMDX({
		source: fileContent,
		options: { parseFrontmatter: true },
	});

	return { metadata: frontmatter, content };
};

export const getProjects = async (): Promise<Project[]> => {
	const files = fs.readdirSync(projectsDirectory);

	const projects = [];

	for (const file of files) {
		const project = await getProject(file);
		projects.push(project);
	}

	return projects;
};
