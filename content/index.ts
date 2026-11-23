// import BlueskyIcon from '@/public/bluesky.svg';
// import XIcon from '@/public/x.svg';
import GithubIcon from '@/public/github.svg';
import LinkedinIcon from '@/public/linkedin.svg';
import MailIcon from '@/public/mail.svg';
import FaithlifeTvLogo from '@/public/faithlife-tv-logo.jpg';
import MotortrendLogoLarge from '@/public/motortrend-logo-large.png';
import Motortrend75Logo from '@/public/motortrend-75years-logo.png';
import MotortrendMtLogo from '@/public/motortrend-mt-logo.png';
import MotortrendBlackRedLogo from '@/public/motortrend-blackred-logo.png';
import FaithlifeLogoLarge from '@/public/faithlife-logo-large.png';
import RokuLogo from '@/public/roku-logo.jpg';
import AmberLogo from '@/public/amber-logo.jpg';
import FaithlifeLogo from '@/public/faithlife-logo.png';
import LogosLogo from '@/public/logos-logo.jpg';
import TetrisLogo from '@/public/tetris-logo.jpg';
import Portrait from '@/public/portrait.webp';
import HearstAutosLogoLarge from '@/public/hearst-autos-logo-large.png';
import HearstAutosLogo from '@/public/hearst-autos-logo.png';
import CarAndDriverLogo from '@/public/caranddriver-logo.png';
import MarisaRiveraArtLogo from '@/public/marisariveraart-logo.png';
import MarisaRiveraArtDesktop from '@/public/marisariveraart-desktop.jpg';
import MarisaRiveraArtMobile1 from '@/public/marisariveraart-mobile-1.jpg';
import MarisaRiveraArtMobile2 from '@/public/marisariveraart-mobile-2.jpg';
import MarisaRiveraArtMobile3 from '@/public/marisariveraart-mobile-3.jpg';
import Tetr48Logo from '@/public/tetr48-logo.png';
import Tetr48Desktop from '@/public/tetr48-desktop.jpg';
import Tetr48Mobile1 from '@/public/tetr48-mobile-1.jpg';
import Tetr48Mobile2 from '@/public/tetr48-mobile-2.jpg';
import Tetr48Mobile3 from '@/public/tetr48-mobile-3.jpg';

const email = 'adamjwehunt@gmail.com';

import type { FeedSource } from '@/lib/journal/types';

export const content = {
	email,
	metadata: {
		titleBase: 'Adam Wehunt -',
		titleRootPage: 'Software Engineer',
		description:
			'Hi, my name is Adam Wehunt. Software engineer. Building for the web, TV, and whatever comes next.',
		siteUrl: 'https://adamwehunt.com',
	},
	components: {
		frame: {
			footer: {
				// TODO(Adam): confirm preferred wording, e.g. a specific city in Washington
				location: 'Portland Area, WA',
				locationLink: 'https://en.wikipedia.org/wiki/Portland_metropolitan_area',
				copyrightName: 'Wehunt',
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
			// {
			// 	href: 'https://bsky.app/profile/codetiquette.bsky.social',
			// 	ariaLabel: 'Bluesky',
			// 	icon: BlueskyIcon,
			// },
			// {
			// 	href: 'https://x.com/codetiquette',
			// 	ariaLabel: 'X',
			// 	icon: XIcon,
			// },
			{
				href: `mailto:${email}`,
				ariaLabel: 'Email',
				icon: MailIcon,
			},
		],
	},
	page: {
		home: {
			greeting: 'Hello, my name is',
			aboutMe: "Let's code something*.",
			subtitle:
				'Software engineer. Building for the web, TV, and whatever comes next.',
			callToAction1:
				'*Seeking projects with locals and friendlies, please reach out 👇',
		},
		journal: {
			linkText: 'Journal',
			metaTitle: 'Journal',
			header:
				'A good developer looks both ways before crossing a one way street',
			title: "Coder's Journal",
			// Labels for the source of curated social posts. Add new sources here.
			socialSources: {
				bluesky: 'Bluesky',
				mastodon: 'Mastodon',
				x: 'X',
			} as Record<string, string>,
			// RSS / Atom feeds to pull recent posts from (fetched at build time and
			// refreshed daily). Leave empty to keep the journal fully hand-curated.
			feeds: [
				// {
				// 	url: 'https://simonwillison.net/atom/entries/',
				// 	author: 'Simon Willison',
				// 	source: "Simon Willison's Weblog",
				// 	limit: 2,
				// },
			] as FeedSource[],
		},
		projects: {
			title: 'Projects',
			greeting1: 'What I’ve been digging into in 2026:',
			greeting2:
				'Agentic software development, AI-assisted workflows, autonomous coding agents, React and Next.js, TypeScript, technical SEO, large-scale platform migrations, conversational AI and ChatGPT apps, commerce and Shopify integrations, Roku development, and building independent products from idea to launch.',
			linkText: 'Work',
			header: 'Make it work, Make it right, Make it fast',
			workHeader: 'Professional Work',
			workItems: [
				{
					role: 'Software Development Engineer II',
					company: 'Hearst Autos',
					companyLink: 'https://www.hearstautos.com',
					subtitle: 'Car and Driver & MotorTrend',
					image: {
						src: HearstAutosLogoLarge,
						width: 64,
						height: 64,
						alt: 'Hearst Autos',
					},
					// TODO(Adam): copy below came from the content brief and could not be
					// verified from the codebase. Please review each line.
					tasks: [
						{
							image: {
								src: HearstAutosLogo,
								width: 36,
								height: 36,
								alt: 'Hearst Autos',
							},
							text: "Helped migrate and unify MotorTrend's web platform within the Hearst Autos technology ecosystem, supporting both [MotorTrend](https://www.motortrend.com 'MotorTrend') and [Car and Driver](https://www.caranddriver.com 'Car and Driver')",
						},
						{
							image: {
								src: CarAndDriverLogo,
								width: 36,
								height: 36,
								alt: 'Car and Driver',
							},
							text: 'Developed shared frontend features and reusable components across major automotive publications, while preserving each brand’s requirements',
						},
						{
							image: {
								src: MotortrendMtLogo,
								width: 36,
								height: 36,
								alt: 'MotorTrend',
							},
							text: 'Built automotive comparison, shopping, and discovery experiences',
						},
						{
							image: {
								src: HearstAutosLogo,
								width: 36,
								height: 36,
								alt: 'Hearst Autos',
							},
							text: 'Planned and led CMS improvements to simplify editorial workflows and expand publishing capabilities',
						},
						{
							image: {
								src: CarAndDriverLogo,
								width: 36,
								height: 36,
								alt: 'Car and Driver',
							},
							text: 'Improved technical SEO through metadata, canonical URLs, structured data, and search-friendly architecture, and kept ad integrations performant so monetization doesn’t come at the cost of page speed',
						},
						{
							image: {
								src: HearstAutosLogo,
								width: 36,
								height: 36,
								alt: 'Hearst Autos',
							},
							text: 'Brought AI-assisted and agentic development workflows into day-to-day engineering to improve productivity',
						},
						// TODO(Adam): only enable if this reflects real project work.
						// {
						// 	image: {
						// 		src: CarAndDriverLogo,
						// 		width: 36,
						// 		height: 36,
						// 		alt: 'Car and Driver',
						// 	},
						// 	text: 'Developed conversational automotive discovery experiences through ChatGPT apps',
						// },
					],
				},
				{
					role: 'Software Development Engineer II, Web',
					company: 'MotorTrend',
					companyLink: 'https://motortrend.com',
					subtitle: '',
					image: {
						src: MotortrendLogoLarge,
						width: 64,
						height: 64,
						alt: 'MotorTrend',
					},
					tasks: [
						{
							image: {
								src: Motortrend75Logo,
								width: 36,
								height: 36,
								alt: 'MotorTrend',
							},
							text: `Modernized MotorTrend's platform, replacing the legacy frontend with React and Next.js (SSR/SSG) and cutting page load times for millions of visitors`,
						},
						{
							image: {
								src: MotortrendMtLogo,
								width: 36,
								height: 36,
								alt: 'MotorTrend',
							},
							text: 'Streamlined CI/CD to reduce deployments from days to minutes, accelerating stakeholder feedback and QA (via GitHub Actions + Vercel preview urls)',
						},
						{
							image: {
								src: MotortrendBlackRedLogo,
								width: 36,
								height: 36,
								alt: 'MotorTrend',
							},
							text: 'Helped refine the Google Publisher Tag (GPT) ad architecture, reducing layout shift and improving Core Web Vitals',
						},
					],
				},
				{
					role: 'Software Engineer',
					company: 'Faithlife',
					companyLink: 'https://faithlife.com',
					subtitle: '',
					image: {
						src: FaithlifeLogoLarge,
						width: 64,
						height: 64,
						alt: 'Faithlife',
					},
					tasks: [
						{
							image: {
								src: FaithlifeTvLogo,
								width: 36,
								height: 36,
								alt: 'Faithlife TV',
							},
							text: `Built and maintained [Faithlife TV](https://www.faithlifetv.com 'Faithlife TV'), a video streaming service for the web, iOS, Android, Apple TV, Fire TV, and Roku. Serving over 30k unique users every month.`,
						},
						{
							image: {
								src: RokuLogo,
								width: 36,
								height: 36,
								alt: 'Roku',
							},
							text: "Solo dev for Faithlife TV's Roku app. Built from the ground up, with the proprietary language [Brightscript](https://developer.roku.com/docs/references/brightscript/language/brightscript-language-reference.md 'BrightScript language reference') and [SceneGraph](https://developer.roku.com/docs/developer-program/core-concepts/core-concepts.md 'SceneGraph core concepts') (Nobody else in the company wanted to learn 🤣).",
						},
						{
							image: {
								src: AmberLogo,
								width: 36,
								height: 36,
								alt: 'Amber',
							},
							text: "Led the frontend of Faithlife's digital asset manager, [Amber](https://amber.faithlife.com/about 'Amber Digital Asset Manager'). Implemented a user-friendly download manager interface and streamlined access to multimedia files.",
						},
						{
							image: {
								src: FaithlifeLogo,
								width: 36,
								height: 36,
								alt: 'Faithlife.com',
							},
							text: "Developed [Faithlife.com's](https://faithlife.com/ 'Faithlife') church management system, improving churches' ability to manage and visualize members of their congregation. Created a touch-friendly [child check-in system](https://support.faithlife.com/hc/en-us/sections/360012145671-Check-In-and-Attendance 'Check-In and Attendance Support').",
						},
						{
							image: {
								src: LogosLogo,
								width: 36,
								height: 36,
								alt: 'Logos Bible Software',
							},
							text: "Built a timeline feature using [React-Virtualized](https://www.npmjs.com/package/react-virtualized 'npm - react-virtualized') for [Logos Bible software](https://www.logos.com/ 'Logos.com'), rendering over 18k interactive events and syncing with books and resources for a seamless user experience across web, desktop, and iPad platforms.",
						},
					],
				},
			],
			projectsHeader: 'Recent things I’ve built',
			visitSiteText: 'Visit Website',
			visitCodeText: 'See the Code',
			projectItems: [
				{
					title: 'Marisa Rivera Art',
					subtitle: 'Custom art storefront for an independent artist',
					image: {
						src: MarisaRiveraArtLogo,
						width: 64,
						height: 64,
						alt: 'Marisa Rivera Art',
					},
					images: {
						desktop: {
							src: MarisaRiveraArtDesktop,
							width: 483,
							height: 320,
							alt: 'Marisa Rivera Art desktop gallery view',
						},
						mobile: [
							{
								src: MarisaRiveraArtMobile1,
								width: 148,
								height: 320,
								alt: 'Marisa Rivera Art mobile gallery view',
							},
							{
								src: MarisaRiveraArtMobile2,
								width: 148,
								height: 320,
								alt: 'Marisa Rivera Art mobile shop view',
							},
							{
								src: MarisaRiveraArtMobile3,
								width: 148,
								height: 320,
								alt: 'Marisa Rivera Art mobile product view',
							},
						],
					},
					siteLink: 'https://marisariveraart.com',
					tech: ['Next.js', 'TypeScript', 'Shopify'],
					// TODO(Adam): confirm print-on-demand fulfillment (not verifiable from the live site).
					description: [
						"Developed and launched a custom art storefront integrated with [Shopify](https://www.shopify.com 'Shopify'), supporting product variants, print-on-demand fulfillment, and online sales",
						'Built to help an independent artist (my wife!) manage and grow her business, from gallery to checkout',
					],
				},
				{
					title: 'TETR48',
					subtitle: 'Block-stacking puzzle game',
					image: {
						src: Tetr48Logo,
						width: 64,
						height: 64,
						alt: 'TETR48',
					},
					images: {
						desktop: {
							src: Tetr48Desktop,
							width: 483,
							height: 320,
							alt: 'TETR48 desktop game view',
						},
						mobile: [
							{
								src: Tetr48Mobile1,
								width: 148,
								height: 320,
								alt: 'TETR48 mobile new game',
							},
							{
								src: Tetr48Mobile2,
								width: 148,
								height: 320,
								alt: 'TETR48 mobile game in progress',
							},
							{
								src: Tetr48Mobile3,
								width: 148,
								height: 320,
								alt: 'TETR48 mobile stacking pieces',
							},
						],
					},
					siteLink: 'https://tetr48.pages.dev',
					tech: ['React', 'TypeScript', 'Vite', 'Vitest', 'Cloudflare Pages'],
					// TODO(Adam): drawn from the private tetr48 repo; please review.
					description: [
						"I’ve always wondered what mashing Tetris together with [2048](https://play2048.co/ '2048') mechanics would be like. Maybe one day it gets refined into something actually fun, but please don’t take it too seriously for now 😅",
						'A fast block-stacking puzzle game: swipe or use the arrow keys to slide pieces, then clear rows and columns to survive',
						'Built for phones and desktops with swipe, tap, keyboard, and trackpad controls, plus an installable web app manifest',
						'Game logic covered by unit tests and deployed to Cloudflare Pages with GitHub Actions. Built with an AI-assisted, agentic workflow',
					],
				},
				{
					title: 'Tetris',
					subtitle: 'Experimenting with SolidJs',
					iframeLink: 'https://solid-tetris.vercel.app/',
					image: {
						src: TetrisLogo,
						width: 64,
						height: 64,
						alt: 'Tetris',
					},
					siteLink: 'https://solid-tetris.vercel.app/',
					githubLink: 'https://github.com/adamjwehunt/solid-tetris',
					tech: ['Solid.js', 'Typescript'],
					description: [
						'Minimal code: Under a few hundred lines',
						'This might be the last thing I hand-coded purely by myself, without an agent 😅',
					],
				},
			],
		},
		about: {
			linkText: 'About',
			header: 'Hello!',
			image: {
				src: Portrait,
				width: 450,
				height: 450,
				alt: 'Welcome!',
			},
			title: "Welcome! Thanks for visiting. I'm thrilled to have you here.",
			intro:
				'Growing up in the sunny suburbs of Mesa, Arizona 🌵, my journey began riding a wave of tech growth. With a PC always within reach, I developed a passion for creativity through constant tinkering. This ultimately led me to become a software developer. As a child, I had a love for drawing and art, which has translated into my work as a programmer. I find the most satisfaction in building with a team and turning ideas into clean, reliable (and satisfying!) software that actually ships.',
			outro:
				"If you're seeking a new addition to your team, need help with an app or website, or simply just want to say hello, please reach out:",
		},
	},
};
