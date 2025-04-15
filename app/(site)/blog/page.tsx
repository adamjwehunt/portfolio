import Link from 'next/link';

import { content } from '@/content';
import { getPostsMetadata } from '@/lib/mdx';
import { joinListItems } from '@/lib/util';

import styles from './blog.module.scss';

const BlogPage = async () => {
	const { title } = content.page.blog;
	const posts = await getPostsMetadata();

	return (
		<>
			<section>
				{posts.map(({ slug, title, tags, publishDate }) => (
					<Link className={styles.entry} href={`blog/${slug}`} key={title}>
						<h2 className={styles.title}>{title}</h2>
						<div className={styles.details}>
							<time>{publishDate}</time>
							{tags?.length && <div>{joinListItems(tags)}</div>}
						</div>
					</Link>
				))}
			</section>
		</>
	);
};

export default BlogPage;
