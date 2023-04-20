import Link from 'next/link';
import { content } from '@/content';
import classnames from 'classnames';
import styles from './name.module.css';

interface NameProps {
	className?: string;
	linkHome?: boolean;
}

export const Name = ({ className, linkHome = false }: NameProps) => {
	const InnerContent = () => (
		<h1>
			<div>{content.components.name.firstName}</div>
			<div>{content.components.name.lastName}</div>
		</h1>
	);

	return linkHome ? (
		<Link className={classnames(styles.name, className)} href={'/'}>
			<InnerContent />
		</Link>
	) : (
		<div className={classnames(styles.name, className)}>
			<InnerContent />
		</div>
	);
};
