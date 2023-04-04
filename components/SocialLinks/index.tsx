import Link from 'next/link';
import TwitterIcon from '@/public/twitter.svg';
import GithubIcon from '@/public/github.svg';
import LinkedinIcon from '@/public/linkedin.svg';
import MailIcon from '@/public/mail.svg';
import classnames from 'classnames';
import styles from './socialLinks.module.css';

export const SocialLinks = ({ multicolor = false }) => {
	return (
		<div className={styles.container}>
			<SocialLink
				className={multicolor ? styles.accent1 : ''}
				href={'https://github.com/adamjwehunt'}
				icon={GithubIcon}
			/>
			<SocialLink
				className={multicolor ? styles.accent2 : ''}
				href={'https://www.linkedin.com/in/ajwehunt'}
				icon={LinkedinIcon}
			/>
			<SocialLink
				className={multicolor ? styles.accent3 : ''}
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
	className?: string;
}

const SocialLink = ({ href, icon: Icon, className }: LinkProps) => (
	<Link href={href} className={styles.link} target={'_blank'}>
		<Icon className={styles.svg} />
		<Icon className={classnames(styles.svg, styles.accent, className)} />
	</Link>
);
