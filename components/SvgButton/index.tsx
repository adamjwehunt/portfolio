import Link from 'next/link';
import classnames from 'classnames';
import styles from './svgButton.module.css';

interface SvgButtonProps {
	href: string;
	icon: any;
	className?: string;
	accentClassName?: string;
	accent?: boolean;
	isExternal?: boolean;
}

export const SvgButton = ({
	href,
	icon: Icon,
	className,
	accentClassName,
	accent = false,
	isExternal = false,
}: SvgButtonProps) => (
	<Link
		href={href}
		className={classnames(styles.link, className)}
		target={isExternal ? '_blank' : '_self'}
	>
		<Icon className={styles.svg} />
		{!accent ? null : (
			<Icon
				className={classnames(styles.svg, styles.accent, accentClassName)}
			/>
		)}
	</Link>
);
