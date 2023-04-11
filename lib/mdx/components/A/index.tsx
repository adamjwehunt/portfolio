import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import styles from './a.module.css';

type AProps = LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>;

export const A = ({ href, target = '_blank', ...otherProps }: AProps) => (
	<Link className={styles.link} target={target} href={href} {...otherProps} />
);
