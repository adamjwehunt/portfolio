import classnames from 'classnames';
import { Roboto } from 'next/font/google';
import { Name } from '../Name';
import BackArrow from '@/public/back-arrow.svg';
import { SvgButton } from '../SvgButton';
import { SocialLinks } from '../SocialLinks';
import Link from 'next/link';
import styles from './frame.module.css';

const roboto = Roboto({
	weight: ['100', '300', '400', '700'],
	subsets: ['latin'],
});

interface FrameProps {
	children: React.ReactNode;
}

export default function Frame({ children }: FrameProps) {
	return (
		<>
			<div className={styles.header}>
				<SvgButton
					className={styles.backArrow}
					accentClassName={styles.backArrowAccent}
					href={'/'}
					icon={BackArrow}
					accent
				/>
				<Name className={styles.name} />
			</div>
			<div className={styles.frame}>
				<div className={classnames(styles.contentWrapper, roboto.className)}>
					{children}
				</div>
				<div className={styles.footer}>
					<div className={styles.fullRow}>
						<SocialLinks className={styles.socialLinks} />
					</div>
					<div className={classnames(styles.halfRow, styles.left)}>
						<div>{'Flagstaff, AZ'}</div>
						<Link href={'mailto:adamjwehunt@gmail.com'}>
							{'adamjwehunt@gmail.com'}
						</Link>
					</div>
					<div className={classnames(styles.halfRow, styles.right)}>
						{'© Wehunt 2023'}
					</div>
				</div>
			</div>
		</>
	);
}
