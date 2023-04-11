import { content } from '@/content';
import classnames from 'classnames';
import styles from './name.module.css';

interface NameProps {
	className?: string;
}

export const Name = ({ className }: NameProps) => (
	<div className={classnames(styles.name, className)}>
		<div>{content.components.name.firstName}</div>
		<div>{content.components.name.lastName}</div>
	</div>
);
