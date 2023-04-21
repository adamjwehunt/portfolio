import Link from 'next/link';
import { content } from '@/content';
import classnames from 'classnames';
import styles from './name.module.css';

interface NameProps {
	className?: string;
	linkHome?: boolean;
}

export const Name = ({ className, linkHome = false }: NameProps) => {
	const Text = () => (
		<div>
			<h1>{content.components.name.firstName}</h1>
			<h1>{content.components.name.lastName}</h1>
		</div>
	);

	return linkHome ? (
		<Link className={classnames(styles.name, className)} href={'/'}>
			<Text />
		</Link>
	) : (
		<div className={classnames(styles.name, className)}>
			<Text />
		</div>
	);
};
