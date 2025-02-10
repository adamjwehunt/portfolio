import BlueskyIcon from '@/public/bluesky.svg';
import XIcon from '@/public/x.svg';
import GithubIcon from '@/public/github.svg';
import LinkedinIcon from '@/public/linkedin.svg';
import MailIcon from '@/public/mail.svg';
import VodifaiDesktop from '@/public/vodifai-desktop.png';
import VodifaiMobile1 from '@/public/vodifai-mobile-1.png';
import VodifaiMobile2 from '@/public/vodifai-mobile-2.png';
import VodifaiMobile3 from '@/public/vodifai-mobile-3.png';
import StrongTowerDesktop from '@/public/strongtower-desktop.png';
import StrongTowerMobile1 from '@/public/strongtower-mobile-1.png';
import StrongTowerMobile2 from '@/public/strongtower-mobile-2.png';
import StrongTowerMobile3 from '@/public/strongtower-mobile-3.png';
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
import StrongtowerLogo from '@/public/strongtower-logo.jpg';
import VodifaiLogo from '@/public/vodifai-logo.jpg';
import TetrisLogo from '@/public/tetris-logo.jpg';
import Portrait from '@/public/portrait.webp';

const email = 'adamjwehunt@gmail.com';

export const content = {
	email,
	metadata: {
		titleBase: 'Adam Wehunt -',
		titleRootPage: 'Software Engineer',
		description: 'Hi, my name is Adam Wehunt and I am a software engineer.',
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
				href: 'https://bsky.app/profile/codetiquette.bsky.social',
				ariaLabel: 'Bluesky',
				icon: BlueskyIcon,
			},
			{
				href: 'https://x.com/codetiquette',
				ariaLabel: 'X',
				icon: XIcon,
			},
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
			aboutMe: "Let's code something.",
			callToAction1: '*Seeking full-time position',
			callToAction2: ' please reach out 👇',
		},
		blog: {
			linkText: 'Blog',
			header:
				'A good developer looks both ways before crossing a one way street',
			title: "Coder's Journal",
		},
		projects: {
			greeting1: 'What I’ve been digging into this 2025:',
			greeting2:
				'Typescript, React.js, Next.js, Tailwind, Framer motion, Zod, GraphQL, Webiny, Prisma, TRPC, Shopify, React Native, Solid.js, Brightscript (Roku), and various AI / LLM things',
			linkText: 'Code',
			header: 'Make it work, Make it right, Make it fast',
			workHeader: 'Group efforts',
			workItems: [
				{
					role: 'Software Development Engineer II, Web',
					company: 'Motortrend',
					companyLink: 'https://motortrend.com',
					subtitle: '',
					image: {
						src: MotortrendLogoLarge,
						width: 64,
						height: 64,
						alt: 'Motortrend',
					},
					tasks: [
						{
							image: {
								src: Motortrend75Logo,
								width: 36,
								height: 36,
								alt: 'Motortrend',
							},
							text: `Replaced legacy stack with Next.js (SSR/SSG), cutting page load times and boosting SEO for millions of visitors`,
						},
						{
							image: {
								src: MotortrendMtLogo,
								width: 36,
								height: 36,
								alt: 'Motortrend',
							},
							text: 'Streamlined CI/CD to reduce deployments from days to minutes, accelerating stakeholder feedback and QA (via GitHub Actions + Vercel preview urls)',
						},
						{
							image: {
								src: MotortrendBlackRedLogo,
								width: 36,
								height: 36,
								alt: 'Motortrend',
							},
							text: 'Helped refine GPT ad architecture, reducing layout shift and improving Core Web Vitals',
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
							text: `Built and maintained [Faithlife TV](https://www.faithlifetv.com 'Faithlife TV'), a video stream service for the web, iOS, Android, Apple TV, Fire TV, and Roku, with over 20k monthly unique users. Upgraded the React codebase by converting to Typescript, replacing class components with React hooks. Developed a "watch list" feature across all platforms.`,
						},
						{
							image: {
								src: RokuLogo,
								width: 36,
								height: 36,
								alt: 'Roku',
							},
							text: "Solely developed Faithlife TV's Roku client from the ground up, requiring quick proficiency in proprietary language [Brightscript](https://developer.roku.com/docs/references/brightscript/language/brightscript-language-reference.md 'BrightScript language reference') and XML framework [SceneGraph](https://developer.roku.com/docs/developer-program/core-concepts/core-concepts.md 'SceneGraph core concepts'). Designed custom components such as the video player UI while leveraging built-in components whenever possible.",
						},
						{
							image: {
								src: AmberLogo,
								width: 36,
								height: 36,
								alt: 'Amber',
							},
							text: "Maintained and enhanced the frontend of Faithlife's digital asset manager, [Amber](https://amber.faithlife.com/about 'Amber Digital Asset Manager'), by implementing a user-friendly download manager interface and streamlining access to multimedia files.",
						},
						{
							image: {
								src: FaithlifeLogo,
								width: 36,
								height: 36,
								alt: 'Faithlife.com',
							},
							text: "Assisted in the development of [Faithlife.com's](https://faithlife.com/ 'Faithlife') church management system, improving churches' ability to manage and visualize members of their congregation. Created a touch-friendly [child check-in system](https://support.faithlife.com/hc/en-us/sections/360012145671-Check-In-and-Attendance 'Check-In and Attendance Support').",
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
			projectsHeader: 'Solo projects',
			visitSiteText: 'Visit Website',
			visitCodeText: 'See the Code',
			projectItems: [
				{
					title: 'Vodifai',
					subtitle: 'Youtube transcript app',
					image: {
						src: VodifaiLogo,
						width: 64,
						height: 64,
						alt: 'Vodifai',
					},
					images: {
						desktop: {
							src: VodifaiDesktop,
							width: 483,
							height: 320,
							alt: 'Vodifai desktop home view',
						},
						mobile: [
							{
								src: VodifaiMobile1,
								width: 148,
								height: 320,
								alt: 'Vodifai mobile watch view',
							},
							{
								src: VodifaiMobile2,
								width: 148,
								height: 320,
								alt: 'Vodifai mobile transcript view',
							},
							{
								src: VodifaiMobile3,
								width: 148,
								height: 320,
								alt: 'Vodifai mobile recap view',
							},
						],
					},
					siteLink: 'https://www.vodifai.com/',
					githubLink: 'https://github.com/adamjwehunt/vodifai',
					tech: ['Next.js', 'TypeScript', 'Sass', 'GPT-3'],
					description: [
						'Spotify inspired design to easily view and search through transcripts of YouTube videos',
						"Generates a recap with [GPT-3](https://openai.com/blog/gpt-3-apps 'GPT-3 AI Language Model') from video's transcript (On longer videos, the transcript is trimmed before AI analysis)",
						'Other features: Recap text-to-speech, bypass search by pasting youtube links, Download youtube videos, Copy transcript button, Share links, Listen to video while viewing transcript',
					],
				},
				{
					title: 'Strong Tower Installations',
					subtitle: 'Freelance project for local tech services company',
					image: {
						src: StrongtowerLogo,
						width: 64,
						height: 64,
						alt: 'Strong Tower Installations',
					},
					images: {
						desktop: {
							src: StrongTowerDesktop,
							width: 483,
							height: 320,
							alt: 'Strong Tower Installations desktop home view',
						},
						mobile: [
							{
								src: StrongTowerMobile1,
								width: 148,
								height: 320,
								alt: 'Strong Tower Installations mobile home view',
							},
							{
								src: StrongTowerMobile2,
								width: 148,
								height: 320,
								alt: 'Strong Tower Installations mobile services view',
							},
							{
								src: StrongTowerMobile3,
								width: 148,
								height: 320,
								alt: 'Strong Tower Installations mobile contact view',
							},
						],
					},
					siteLink: 'https://www.strongtowerinstallations.com/',
					githubLink: 'https://github.com/adamjwehunt/st-installations',
					tech: ['Vue.js', 'Sanity.io'],
					description: [
						"Integrated CMS: With [Sanity.io,](https://www.sanity.io/ 'Sanity') the owner is able to modify content",
						'Following consultation with the owner, who provided examples of their desired designs and specifications, I created the Design and UX',
					],
				},
			],
			etceteraHeader: 'Etcetera',
			iframeItems: [
				{
					title: 'Tetris',
					subtitle: 'First go at SolidJs',
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
						'Play it right here 🙌',
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
				'Growing up in the sunny suburbs of the Arizona desert 🌵, my journey began riding a wave of tech growth. With a PC always within reach, I developed a passion for creativity through constant tinkering. This ultimately led me to become a software developer. As a child, I had a love for drawing and art, which has translated into my work as a programmer. I find the most satisfaction from building with a team and bringing the UI to life by creating clean, reliable (and satisfying!) software.',
			outro:
				"If you're seeking a new addition to your team, need help with an app or website, or simply just want to say hello, please reach out:",
		},
	},
};
