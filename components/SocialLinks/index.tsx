import classnames from 'classnames';

import { IconButton } from '@/components/IconButton';
import { content } from '@/content';

import styles from './socialLinks.module.css';

interface SocialLinksProps {
	className?: string;
	hasAccent?: boolean;
}

export const SocialLinks = ({ className, hasAccent }: SocialLinksProps) => (
	<section className={classnames(styles.container, className)}>
		{content.components.socialLinks.map((props, index) => (
			<IconButton 
				{...props}
				accent={hasAccent}
				isExternalLink
				key={index}
			/>
		))}
	</section>
);
