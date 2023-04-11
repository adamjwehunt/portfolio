import { content } from '@/content';
import { getPost } from '@/lib/mdx';

interface BlogPageProps {
	params: { slug: string };
}

export const generateMetadata = async ({ params: { slug } }: BlogPageProps) => {
	const { metadata } = await getPost(slug);

	return { title: `${content.metadata.titleBase} ${metadata.title}` };
};

const BlogPage = async ({ params: { slug } }: BlogPageProps) => {
	const { content } = await getPost(slug);

	return (
		<section>
			<article>{content}</article>
		</section>
	);
};

export default BlogPage;
