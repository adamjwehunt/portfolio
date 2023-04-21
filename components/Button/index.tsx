import Link from 'next/link';
import classnames from 'classnames';
import { Share_Tech_Mono } from 'next/font/google';
import styles from './button.module.css';

const shareTechMono = Share_Tech_Mono({ weight: '400', subsets: ['latin'] });
interface ButtonProps {
	href: string;
	text: string;
	accentClassName?: string;
	isExternalLink?: boolean;
}

export const Button = ({
	href,
	text,
	accentClassName,
	isExternalLink = false,
}: ButtonProps) => (
	<Link
		href={href}
		className={classnames(styles.link, shareTechMono.className)}
		target={isExternalLink ? '_blank' : '_self'}
	>
		<div className={styles.text}>{text}</div>
		<div className={classnames(styles.accent, accentClassName)} />
	</Link>
);
