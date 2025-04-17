import classnames from 'classnames';
import Link from 'next/link';

import { shareTechMono } from '@/constants/fonts';
import { content } from '@/content';

import styles from './name.module.scss';

interface NameProps {
	className?: string;
	href?: string;
	stacked?: boolean;
}

export const Name = ({ className, href = '', stacked = false }: NameProps) => {
	const Text = () => {
		const { firstName, lastName } = content.components.name;
		return stacked ? (
			<div className={styles.stacked}>
				<p>{firstName}</p>
				<p>{lastName}</p>
			</div>
		) : (
			<p>{`${firstName} ${lastName}`}</p>
		);
	};

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
