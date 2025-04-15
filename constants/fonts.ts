import { Roboto, Share_Tech_Mono } from 'next/font/google';

export const shareTechMono = Share_Tech_Mono({
	weight: '400',
	subsets: ['latin'],
	display: 'swap',
});

export const roboto = Roboto({
	weight: ['100', '300', '400', '700'],
	subsets: ['latin'],
	display: 'swap',
});
