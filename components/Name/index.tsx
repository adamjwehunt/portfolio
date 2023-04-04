import classnames from 'classnames';
import styles from './name.module.css';

interface NameProps {
	className?: string;
}

export const Name = ({ className }: NameProps) => {
	return (
		<div className={classnames(styles.name, className)}>
			<div>{'Adam'}</div>
			<div>{'Wehunt'}</div>
		</div>
	);
};
