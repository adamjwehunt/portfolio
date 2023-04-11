import { content } from '@/content';
import StarField from '@/components/StarField/StarField';
import { Share_Tech_Mono } from 'next/font/google';
import './globals.css';

const shareTechMono = Share_Tech_Mono({ weight: '400', subsets: ['latin'] });
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
		</body>
	</html>
);

export default RootLayout;
