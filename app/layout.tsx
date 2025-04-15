import { ReactNode } from 'react';
import { content } from '@/content';
import StarField from '@/components/StarField/StarField';
import { Analytics } from '@vercel/analytics/react';
import { roboto } from '@/constants/fonts';
import './globals.scss';

const { titleBase, titleRootPage, description } = content.metadata;

export const metadata = {
	title: `${titleBase} ${titleRootPage}`,
	description,
};

interface RootLayoutProps {
	children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => (
	<html lang="en">
		<body className={roboto.className}>
			<StarField />
			{children}
			<Analytics />
		</body>
	</html>
);

export default RootLayout;
