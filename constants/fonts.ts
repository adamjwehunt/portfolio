import localFont from 'next/font/local';

// Self-hosted (Latin subset) so builds don't depend on fetching from Google Fonts.
export const shareTechMono = localFont({
	display: 'swap',
	src: '../assets/fonts/share-tech-mono-400-latin.woff2',
	weight: '400',
});

export const roboto = localFont({
	display: 'swap',
	src: [
		{ path: '../assets/fonts/roboto-100-latin.woff2', style: 'normal', weight: '100' },
		{ path: '../assets/fonts/roboto-300-latin.woff2', style: 'normal', weight: '300' },
		{ path: '../assets/fonts/roboto-400-latin.woff2', style: 'normal', weight: '400' },
		{ path: '../assets/fonts/roboto-700-latin.woff2', style: 'normal', weight: '700' },
	],
});
