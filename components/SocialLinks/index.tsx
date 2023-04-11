import { content } from '@/content';
import classnames from 'classnames';
import { IconButton } from '@/components/IconButton';
import styles from './socialLinks.module.css';

interface SocialLinksProps {
	className?: string;
	hasAccent?: boolean;
}

export const SocialLinks = ({ className, hasAccent }: SocialLinksProps) => (
	<section className={classnames(styles.container, className)}>
		{content.components.socialLinks.map((props, index) => (
			<IconButton key={index} {...props} accent={hasAccent} isExternalLink />
		))}
	</section>
);
