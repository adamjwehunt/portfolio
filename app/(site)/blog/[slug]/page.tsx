import { content } from '@/content';
import { getPost, getPostsMetadata } from '@/lib/mdx';
import { generateBlogPostJsonLd } from '@/lib/seo';
import { joinListItems } from '@/lib/util';

import styles from './blog.module.scss';

interface BlogPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const posts = await getPostsMetadata();
	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export const generateMetadata = async ({ params }: BlogPageProps) => {
	const { slug } = await params;
	const { metadata } = await getPost(slug);

	return {
		alternates: {
			canonical: `/blog/${slug}`,
		},
		title: `${content.metadata.titleBase} ${metadata.title}`,
	};
};

const BlogPage = async ({ params }: BlogPageProps) => {
	const { slug } = await params;
	const {
		content,
		metadata: { title = '', publishDate, tags, author },
	} = await getPost(slug);

	const blogPostJsonLd = generateBlogPostJsonLd({
		author,
		publishDate,
		slug,
		title,
	});

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(blogPostJsonLd),
				}}
			/>
			<section>
				<div>
					<h1 className={styles.title}>{title}</h1>
					<div className={styles.details}>
						<time>{publishDate}</time>
						{tags?.length && <div>{joinListItems(tags)}</div>}
					</div>
				</div>

				<article>{content}</article>
			</section>
		</>
	);
};

export default BlogPage;
