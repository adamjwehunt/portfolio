import { ReactNode } from 'react';

import { Analytics } from '@/components/Analytics';
import StarField from '@/components/StarField/StarField';
import { roboto } from '@/constants/fonts';
import { content } from '@/content';
import { generateWebsiteJsonLd } from '@/lib/seo';
import './globals.scss';

const { titleBase, titleRootPage, description } = content.metadata;

export const metadata = {
	alternates: {
		canonical: '/',
	},
	description,
	metadataBase: new URL(content.metadata.siteUrl),
	title: `${titleBase} ${titleRootPage}`,
};

interface RootLayoutProps {
	children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
	const websiteJsonLd = generateWebsiteJsonLd();

	return (
		<html lang="en">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(websiteJsonLd),
					}}
				/>
			</head>
			<body className={roboto.className}>
				<StarField />
				{children}
				<Analytics />
			</body>
		</html>
	);
};

export default RootLayout;
