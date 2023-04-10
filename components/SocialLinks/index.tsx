import classnames from 'classnames';
import TwitterIcon from '@/public/twitter.svg';
import GithubIcon from '@/public/github.svg';
import LinkedinIcon from '@/public/linkedin.svg';
import MailIcon from '@/public/mail.svg';
import { IconButton } from '../IconButton';
import styles from './socialLinks.module.css';

interface SocialLinksProps {
	hasAccents?: boolean;
	className?: string;
}

export const SocialLinks = ({
	className,
	hasAccents = false,
}: SocialLinksProps) => {
	return (
		<div className={classnames(styles.container, className)}>
			<IconButton
				href={'https://github.com/adamjwehunt'}
				isExternalLink
				accent={hasAccents}
				icon={GithubIcon}
				ariaLabel="Github"
			/>
			<IconButton
				href={'https://www.linkedin.com/in/ajwehunt'}
				isExternalLink
				accent={hasAccents}
				icon={LinkedinIcon}
				ariaLabel="LinkedIn"
			/>
			<IconButton
				href={'https://twitter.com/codetiquette'}
				isExternalLink
				accent={hasAccents}
				icon={TwitterIcon}
				ariaLabel="Twitter"
			/>
			<IconButton
				href={'mailto:adamjwehunt@gmail.com'}
				isExternalLink
				accent={hasAccents}
				icon={MailIcon}
				ariaLabel="Email"
			/>
		</div>
	);
};
