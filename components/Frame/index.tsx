import { ReactNode } from 'react';
import { content } from '@/content';
import classnames from 'classnames';
import { SocialLinks } from '../SocialLinks';
import { BackButton } from '../BackButton';
import { Name } from '../Name';
import { shareTechMono } from '@/constants/fonts';
import classNames from 'classnames';
import styles from './frame.module.scss';

interface FrameProps {
	header?: string;
	children: ReactNode;
}

const Frame = ({ header, children }: FrameProps) => {
	const { location, copyright } = content.components.frame.footer;
	const { email } = content;

	return (
		<>
			<header className={styles.header}>
				<BackButton />
				<Name className={styles.name} href="/" />
			</header>
			<div className={styles.frame}>
				<div className={styles.contentWrapper}>
					<div className={classNames(styles.heading, shareTechMono.className)}>
						{header}
					</div>
					<main className={styles.content}>{children}</main>
				</div>
				<footer className={classNames(styles.footer, shareTechMono.className)}>
					<div className={styles.fullRow}>
						<SocialLinks className={styles.socialLinks} />
					</div>
					<section className={classnames(styles.halfRow, styles.left)}>
						<a
							className={styles.location}
							href={'https://www.flagstaff.az.gov/2445/Explore'}
							target="_blank"
						>
							{location}
						</a>
						<a className={styles.email} href={`mailto:${email}`}>
							{email}
						</a>
					</section>
					<section className={classnames(styles.halfRow, styles.right)}>
						{copyright}
					</section>
				</footer>
			</div>
		</>
	);
};

export default Frame;
