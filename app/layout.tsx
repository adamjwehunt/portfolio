import StarField from '../components/StarField/StarField';
import { Share_Tech_Mono } from 'next/font/google';
import styles from './layout.module.css';
import './globals.css';

const shareTechMono = Share_Tech_Mono({ weight: '400', subsets: ['latin'] });

export const metadata = {
	title: 'Adam Wehunt -- Software Engineer, Web Developer, and Tinkerer',
	description:
		'Adam Wehunt is a software engineer, web developer, and tinkerer. He is currently looking for fulltime employment.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={shareTechMono.className}>
				<StarField />
				<main className={styles.main}>{children}</main>
			</body>
		</html>
	);
}
