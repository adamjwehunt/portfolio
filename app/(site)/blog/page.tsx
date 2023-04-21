import Link from 'next/link';
import { content } from '@/content';
import { getPostsMetadata } from '@/lib/mdx';
import { joinListItems } from '@/lib/util';
import styles from './blog.module.scss';

const { title } = content.page.blog;

const BlogPage = async () => {
	const posts = await getPostsMetadata();

	return (
		<section>
			<h2>{title}</h2>
			{posts.map(({ slug, title, tags, publishDate }) => (
				<Link className={styles.entry} href={`blog/${slug}`} key={title}>
					<h3 className={styles.title}>{title}</h3>
					<div className={styles.details}>
						<time>{publishDate}</time>
						{tags?.length && <div>{joinListItems(tags)}</div>}
					</div>
				</Link>
			))}
		</section>
	);
};

export default BlogPage;
