import { content } from '@/content';
import StarField from '@/components/StarField/StarField';
import { Roboto, Share_Tech_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.scss';

const shareTechMono = Share_Tech_Mono({
	weight: '400',
	subsets: ['latin'],
	variable: '--share-tech-mono-font',
	fallback: ['monospace'],
});

const { titleBase, titleRootPage, description } = content.metadata;

export const metadata = {
	title: `${titleBase} ${titleRootPage}`,
	description,
};

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
	<html lang="en">
		<body className={shareTechMono.className}>
			<StarField />
			{children}
			<Analytics />
		</body>
	</html>
);

export default RootLayout;
