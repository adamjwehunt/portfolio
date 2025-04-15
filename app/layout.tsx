import { ReactNode } from 'react';
import { content } from '@/content';
import StarField from '@/components/StarField/StarField';
import { Analytics } from '@/components/Analytics';
import { roboto } from '@/constants/fonts';
import { generateWebsiteJsonLd } from '@/lib/seo';
import './globals.scss';

const { titleBase, titleRootPage, description } = content.metadata;

export const metadata = {
	title: `${titleBase} ${titleRootPage}`,
	description,
	metadataBase: new URL(content.metadata.siteUrl),
	alternates: {
		canonical: '/',
	},
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
