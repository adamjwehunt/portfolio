import classnames from 'classnames';
import { Name } from '../Name';
import BackArrow from '@/public/back-arrow.svg';
import { SvgButton } from '../SvgButton';
import { SocialLinks } from '../SocialLinks';
import Link from 'next/link';
import styles from './frame.module.css';

interface FrameProps {
	children: React.ReactNode;
}

export default function Frame({ children }: FrameProps) {
	return (
		<div className={styles.frame}>
			<div className={styles.innerFrame}>
				<SvgButton
					className={styles.backArrow}
					accentClassName={styles.backArrowAccent}
					href={'/'}
					icon={BackArrow}
					accent
				/>
				<Name className={styles.name} />
				<div className={styles.contentWrapper}>{children}</div>
				<div className={styles.footer}>
					<div className={styles.fullFooterRow}>
						<SocialLinks className={styles.socialLinks} />
					</div>
					<div className={classnames(styles.halfFooterRow, styles.left)}>
						<div>{'Flagstaff, AZ'}</div>
						<Link href={'mailto:adamjwehunt@gmail.com'}>
							{'adamjwehunt@gmail.com'}
						</Link>
					</div>
					<div className={classnames(styles.halfFooterRow, styles.right)}>
						{'© Wehunt 2023'}
					</div>
				</div>
			</div>
		</div>
	);
}
