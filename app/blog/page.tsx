import { content } from '@/content';
import Link from 'next/link';
import { getPostsMetadata } from '@/lib/mdx';

const BlogPage = async () => {
	const posts = await getPostsMetadata();

	return (
		<>
			<h1>{content.page.blog.title}</h1>
			<>
				{posts.map(({ slug, title, author, publishDate }) => (
					<Link href={`blog/${slug}`} key={title}>
						<h3>{title}</h3>
						<p>{author}</p>
						<time>{publishDate}</time>
					</Link>
				))}
			</>
		</>
	);
};

export default BlogPage;
