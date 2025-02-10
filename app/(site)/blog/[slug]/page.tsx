import { content } from '@/content';
import { getPost } from '@/lib/mdx';
import styles from './blog.module.css';

interface BlogPageProps {
	params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: BlogPageProps) => {
	const { slug } = await params;
	const { metadata } = await getPost(slug);

	return { title: `${content.metadata.titleBase} ${metadata.title}` };
};

const BlogPage = async ({ params }: BlogPageProps) => {
	const { slug } = await params;
	const {
		content,
		metadata: { title },
	} = await getPost(slug);

	return (
		<section>
			<h2 className={styles.title}>{title}</h2>
			<article>{content}</article>
		</section>
	);
};

export default BlogPage;
