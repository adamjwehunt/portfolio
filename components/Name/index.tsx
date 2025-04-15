import classnames from 'classnames';
import Link from 'next/link';

import { shareTechMono } from '@/constants/fonts';
import { content } from '@/content';

import styles from './name.module.css';

interface NameProps {
	className?: string;
	href?: string;
}

export const Name = ({ className, href = '' }: NameProps) => {
	const Text = () => (
		<div>
			<div>{content.components.name.firstName}</div>
			<div>{content.components.name.lastName}</div>
		</div>
	);

	return href ? (
		<Link
			className={classnames(styles.name, className, shareTechMono.className)}
			href={href}
		>
			<Text />
		</Link>
	) : (
		<div
			className={classnames(styles.name, className, shareTechMono.className)}
		>
			<Text />
		</div>
	);
};
