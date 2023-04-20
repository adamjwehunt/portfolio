import Image from 'next/image';
import Link from 'next/link';
import { content } from '@/content';
import { getAbout } from '@/lib/mdx';
import Frame from '@/components/Frame';
import styles from './about.module.scss';

const {
	header,
	image: { height, width, src, alt },
	title,
	intro,
	outro,
} = content.page.about;
const { email } = content;

export const generateMetadata = async () => {
	const { metadata } = await getAbout();

	return { title: `${content.metadata.titleBase} ${metadata.title}` };
};

const AboutPage = async () => {
	const { content } = await getAbout();

	return (
		<Frame header={header}>
			<section>
				<div className={styles.imageWrapper}>
					<Image
						className={styles.image}
						height={height}
						width={width}
						src={src}
						alt={alt}
					/>
				</div>
				<div className={styles.title}>{title}</div>
				<div className={styles.intro}>{intro}</div>
				<article className={styles.content}>{content}</article>
				<div className={styles.outro}>
					{`${outro} `}
					<Link className={styles.email} href={`mailto:${email}`}>
						{email}
					</Link>
				</div>
			</section>
		</Frame>
	);
};

export default AboutPage;
