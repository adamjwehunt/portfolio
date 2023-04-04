import classnames from 'classnames';
import TwitterIcon from '@/public/twitter.svg';
import GithubIcon from '@/public/github.svg';
import LinkedinIcon from '@/public/linkedin.svg';
import MailIcon from '@/public/mail.svg';
import { SvgButton } from '../SvgButton';
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
			<SvgButton
				isExternal
				href={'https://github.com/adamjwehunt'}
				accent={hasAccents}
				icon={GithubIcon}
			/>
			<SvgButton
				isExternal
				href={'https://www.linkedin.com/in/ajwehunt'}
				accent={hasAccents}
				icon={LinkedinIcon}
			/>
			<SvgButton
				isExternal
				href={'https://twitter.com/codetiquette'}
				accent={hasAccents}
				icon={TwitterIcon}
			/>
			<SvgButton
				isExternal
				href={'mailto:adamjwehunt@gmail.com'}
				accent={hasAccents}
				icon={MailIcon}
			/>
		</div>
	);
};
