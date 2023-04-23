import Link from 'next/link';
import classnames from 'classnames';
import styles from './button.module.css';

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
		className={styles.link}
		target={isExternalLink ? '_blank' : '_self'}
	>
		<div className={styles.text}>{text}</div>
		<div className={classnames(styles.accent, accentClassName)} />
	</Link>
);
