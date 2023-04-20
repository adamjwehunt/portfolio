import { Children, ReactNode, isValidElement } from 'react';
import styles from './columns.module.scss';

interface ColumnProps {
	children: ReactNode;
}

const Left = ({ children }: ColumnProps) => (
	<div className={styles.left}>{children}</div>
);

const Right = ({ children }: ColumnProps) => (
	<div className={styles.right}>{children}</div>
);

interface ColumnsProps {
	children: ReactNode;
}

const Columns = ({ children }: ColumnsProps) => {
	const leftChildren: ReactNode[] = [];
	const rightChildren: ReactNode[] = [];

	Children.forEach(children, (child) => {
		if (isValidElement(child) && child.type === Left) {
			leftChildren.push(child);
		} else if (isValidElement(child) && child.type === Right) {
			rightChildren.push(child);
		}
	});

	return (
		<div className={styles.columns}>
			{leftChildren}
			{rightChildren}
		</div>
	);
};

Columns.Left = Left;
Columns.Right = Right;

export { Columns, Left, Right };
