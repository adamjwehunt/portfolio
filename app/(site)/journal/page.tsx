import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { content } from '@/content';
import { ArticleEntry, getJournalEntries, PostEntry, SocialEntry } from '@/lib/journal';
import { joinListItems } from '@/lib/util';

import styles from './journal.module.scss';

const { metaTitle, socialSources } = content.page.journal;

export const metadata = {
	alternates: {
		canonical: '/journal',
	},
	title: `${content.metadata.titleBase} ${metaTitle}`,
};

const externalLinkProps = {
	rel: 'noopener noreferrer',
	target: '_blank',
};

const Avatar = ({ src, alt }: { src?: string; alt: string }) =>
	src ? (
		<Image className={styles.avatar} src={src} alt={alt} width={48} height={48} />
	) : null;

const Post = ({ slug, title, tags, date, publishDate }: PostEntry) => (
	<Link className={styles.entry} href={`/journal/${slug}`}>
		<h2 className={styles.title}>{title}</h2>
		<div className={styles.details}>
			<time dateTime={date}>{publishDate}</time>
			{tags?.length && <div>{joinListItems(tags)}</div>}
		</div>
	</Link>
);

const Article = ({
	title,
	author,
	url,
	excerpt,
	source,
	image,
	date,
	publishDate,
	comment,
}: ArticleEntry) => (
	<div className={styles.external}>
		<a className={styles.entry} href={url} {...externalLinkProps}>
			<div className={styles.body}>
				<Avatar src={image} alt={author} />
				<div className={styles.text}>
					<h2 className={styles.title}>
						{title}
						<span className={styles.arrow} aria-hidden>
							{' '}
							↗
						</span>
					</h2>
					{excerpt && <p className={styles.excerpt}>{excerpt}</p>}
				</div>
			</div>
			<div className={styles.details}>
				<time dateTime={date}>{publishDate}</time>
				<div>{[author, source].filter(Boolean).join(' · ')}</div>
			</div>
		</a>
		{comment && <div className={styles.comment}>{comment}</div>}
	</div>
);

const Social = ({
	author,
	handle,
	url,
	text,
	source,
	image,
	date,
	publishDate,
	comment,
}: SocialEntry) => (
	<div className={styles.external}>
		<a className={styles.entry} href={url} {...externalLinkProps}>
			<div className={styles.body}>
				<Avatar src={image} alt={author} />
				<div className={styles.text}>
					<h2 className={styles.title}>
						{author}
						{handle && <span className={styles.handle}> @{handle}</span>}
						<span className={styles.arrow} aria-hidden>
							{' '}
							↗
						</span>
					</h2>
					<p className={classNames(styles.excerpt, styles.postText)}>{text}</p>
				</div>
			</div>
			<div className={styles.details}>
				<time dateTime={date}>{publishDate}</time>
				<div>{`Posted on ${socialSources[source] ?? source}`}</div>
			</div>
		</a>
		{comment && <div className={styles.comment}>{comment}</div>}
	</div>
);

const JournalPage = async () => {
	const entries = await getJournalEntries();

	return (
		<section>
			{entries.map((entry) => {
				switch (entry.type) {
					case 'post':
						return <Post key={entry.id} {...entry} />;
					case 'article':
						return <Article key={entry.id} {...entry} />;
					case 'social':
						return <Social key={entry.id} {...entry} />;
				}
			})}
		</section>
	);
};

export default JournalPage;
