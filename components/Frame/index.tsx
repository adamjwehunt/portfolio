import classnames from 'classnames';
import { Roboto } from 'next/font/google';
import { Name } from '../Name';
import { SocialLinks } from '../SocialLinks';
import Link from 'next/link';
import styles from './frame.module.css';
import { BackButton } from '../BackButton';

const FLAGSTAFF_AZ = 'Flagstaff, AZ';
const EMAIL = 'adamjwehunt@gmail.com';
const COPYRIGHT = '© Wehunt 2023';

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
				<BackButton />
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
						<div>{FLAGSTAFF_AZ}</div>
						<Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
					</div>
					<div className={classnames(styles.halfRow, styles.right)}>
						{COPYRIGHT}
					</div>
				</div>
			</div>
		</>
	);
}
