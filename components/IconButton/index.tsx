import Link from 'next/link';
import classnames from 'classnames';
import styles from './iconButton.module.css';

interface BaseIconButtonProps {
	icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	ariaLabel: string;
	accent?: boolean;
	accentClassName?: string;
	className?: string;
}

interface ButtonProps extends BaseIconButtonProps {
	onClick?: () => void;
	href?: never;
	isExternalLink?: never;
}

interface LinkProps extends BaseIconButtonProps {
	href: string;
	isExternalLink?: boolean;
	onClick?: never;
}

type IconButtonProps = ButtonProps | LinkProps;

export const IconButton = ({
	href,
	icon: Icon,
	onClick,
	className,
	accentClassName,
	ariaLabel,
	accent = false,
	isExternalLink = false,
}: IconButtonProps) => {
	const Icons = () => (
		<>
			<Icon className={styles.svg} />
			{!accent ? null : (
				<Icon className={classnames(styles.accent, accentClassName)} />
			)}
		</>
	);

	return !href ? (
		<button
			className={classnames(styles.iconButton, className)}
			onClick={onClick}
			aria-label={ariaLabel}
		>
			<Icons />
		</button>
	) : (
		<Link
			className={classnames(styles.iconButton, className)}
			href={href}
			target={isExternalLink ? '_blank' : '_self'}
			aria-label={ariaLabel}
		>
			<Icons />
		</Link>
	);
};
