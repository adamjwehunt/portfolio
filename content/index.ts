import TwitterIcon from '@/public/twitter.svg';
import GithubIcon from '@/public/github.svg';
import LinkedinIcon from '@/public/linkedin.svg';
import MailIcon from '@/public/mail.svg';

const email = 'adamjwehunt@gmail.com';

export const content = {
	email,
	metadata: {
		titleBase: 'Adam Wehunt -',
		titleRootPage: 'Software Engineer, Web Developer, and Tinkerer',
		description:
			'Adam Wehunt is a software engineer, web developer, and tinkerer. He is currently looking for fulltime employment.',
	},
	components: {
		frame: {
			footer: {
				location: 'Flagstaff, AZ',
				copyright: '© Wehunt 2023',
			},
		},
		backButton: { ariaLabel: 'Back' },
		name: { firstName: 'Adam', lastName: 'Wehunt' },
		socialLinks: [
			{
				href: 'https://github.com/adamjwehunt',
				ariaLabel: 'GitHub',
				icon: GithubIcon,
			},
			{
				href: 'https://www.linkedin.com/in/ajwehunt',
				ariaLabel: 'LinkedIn',
				icon: LinkedinIcon,
			},
			{
				href: 'https://twitter.com/codetiquette',
				ariaLabel: 'Twitter',
				icon: TwitterIcon,
			},
			{
				href: `mailto:${email}`,
				ariaLabel: 'Email',
				icon: MailIcon,
			},
		],
	},
	page: {
		home: {},
		blog: {
			title: 'Ideas, Thoughts, and Ramblings',
			linkText: 'Blog',
		},
		projects: {
			title: 'Software Shenanigans',
			linkText: 'Code',
		},
		about: {
			title: 'About',
			linkText: 'About',
		},
	},
};
