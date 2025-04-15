import { content } from '@/content';
import { getPost, getPostsMetadata } from '@/lib/mdx';
import styles from './blog.module.scss';
import { joinListItems } from '@/lib/util';
import { generateBlogPostJsonLd } from '@/lib/seo';

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
		title: `${content.metadata.titleBase} ${metadata.title}`,
		alternates: {
			canonical: `/blog/${slug}`,
		},
	};
};

const BlogPage = async ({ params }: BlogPageProps) => {
	const { slug } = await params;
	const {
		content,
		metadata: { title = '', publishDate, tags, author },
	} = await getPost(slug);

	const blogPostJsonLd = generateBlogPostJsonLd({
		title,
		publishDate,
		author,
		slug,
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
				<p>{"- Adam"}</p>
			</section>
		</>
	);
};

export default BlogPage;
