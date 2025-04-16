import Image from 'next/image';

import Frame from '@/components/Frame';
import { content } from '@/content';
import { getAbout } from '@/lib/mdx';
import { generatePersonJsonLd } from '@/lib/seo';

import styles from './about.module.scss';

export const generateMetadata = async () => {
	const { metadata } = await getAbout();

	return {
		alternates: {
			canonical: '/about',
		},
		title: `${content.metadata.titleBase} ${metadata.title}`,
	};
};

const AboutPage = async () => {
	const aboutMdx = await getAbout();
	const { content: mdxContent } = aboutMdx;

	const {
		header,
		image: { height, width, src, alt },
		title,
		intro,
		outro,
	} = content.page.about;
	const { email } = content;
	const personJsonLd = generatePersonJsonLd();

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(personJsonLd),
				}}
			/>
			<Frame header={header}>
				<section>
					<div className={styles.imageWrapper}>
						<Image
							className={styles.image}
							height={height}
							width={width}
							src={src}
							alt={alt}
							priority
						/>
					</div>
					<h1 className={styles.title}>{title}</h1>
					<p className={styles.intro}>{intro}</p>
					<article className={styles.content}>{mdxContent}</article>
					<p className={styles.outro}>
						{`${outro} `}
						<a className={styles.email} href={`mailto:${email}`}>
							{email}
						</a>
					</p>
				</section>
			</Frame>
		</>
	);
};

export default AboutPage;
