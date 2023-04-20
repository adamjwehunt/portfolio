import { ReactNode } from 'react';
import { content } from '@/content';
import classnames from 'classnames';
import { Roboto } from 'next/font/google';
import { Name } from '../Name';
import { SocialLinks } from '../SocialLinks';
import Link from 'next/link';
import { BackButton } from '../BackButton';
import styles from './frame.module.scss';

const { location, copyright } = content.components.frame.footer;
const { email } = content;

const roboto = Roboto({
	weight: ['100', '300', '400', '700'],
	subsets: ['latin'],
});

interface FrameProps {
	header?: string;
	children: ReactNode;
}

const Frame = ({ header, children }: FrameProps) => (
	<>
		<header className={styles.header}>
			<BackButton />
			<Name className={styles.name} linkHome />
		</header>
		<div className={styles.frame}>
			<div className={classnames(styles.contentWrapper, roboto.className)}>
				<header className={styles.contentHeader}>
					{header && <i>{header}</i>}
				</header>
				<main className={styles.content}>{children}</main>
			</div>
			<footer className={styles.footer}>
				<div className={styles.fullRow}>
					<SocialLinks className={styles.socialLinks} />
				</div>
				<section className={classnames(styles.halfRow, styles.left)}>
					<div>{location}</div>
					<Link className={styles.email} href={`mailto:${email}`}>
						{email}
					</Link>
				</section>
				<section className={classnames(styles.halfRow, styles.right)}>
					{copyright}
				</section>
			</footer>
		</div>
	</>
);

export default Frame;
