import { content } from '@/content';
import { getPost } from '@/lib/mdx';
import styles from './blog.module.css';

interface BlogPageProps {
	params: { slug: string };
}

export const generateMetadata = async ({ params: { slug } }: BlogPageProps) => {
	const { metadata } = await getPost(slug);

	return { title: `${content.metadata.titleBase} ${metadata.title}` };
};

const BlogPage = async ({ params: { slug } }: BlogPageProps) => {
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
