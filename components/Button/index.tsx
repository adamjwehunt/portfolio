import Link from 'next/link';
import classnames from 'classnames';
import styles from './button.module.css';

interface ButtonProps {
	href: string;
	text: string;
	className: string;
}

export const Button = ({ href, text, className }: ButtonProps) => (
	<Link href={href} className={styles.link}>
		<div className={styles.text}>{text}</div>
		<div className={classnames(styles.accent, className)} />
	</Link>
);
