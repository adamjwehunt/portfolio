import Link from 'next/link';
import TwitterIcon from '@/public/twitter.svg';
import GithubIcon from '@/public/github.svg';
import LinkedinIcon from '@/public/linkedin.svg';
import MailIcon from '@/public/mail.svg';
import classnames from 'classnames';
import styles from './socialLinks.module.css';

export const SocialLinks = () => {
	return (
		<div className={styles.container}>
			<SocialLink href={'https://github.com/adamjwehunt'} icon={GithubIcon} />
			<SocialLink
				href={'https://www.linkedin.com/in/ajwehunt'}
				icon={LinkedinIcon}
			/>
			<SocialLink
				href={'https://twitter.com/codetiquette'}
				icon={TwitterIcon}
			/>
			<SocialLink href={'mailto:adamjwehunt@gmail.com'} icon={MailIcon} />
		</div>
	);
};

interface LinkProps {
	href: string;
	icon: any;
}

const SocialLink = ({ href, icon: Icon }: LinkProps) => (
	<Link href={href} className={styles.link} target={'_blank'}>
		<Icon className={styles.svg} />
		<Icon className={classnames(styles.svg, styles.accent)} />
	</Link>
);
