import classNames from 'classnames';

import { Button } from '@/components/Button';
import { CallToAction } from '@/components/CallToAction';
import { Name } from '@/components/Name';
import { SocialLinks } from '@/components/SocialLinks';
import { shareTechMono } from '@/constants/fonts';
import { content } from '@/content';

import styles from './page.module.scss';

const Home = () => {
	const {
		page: {
			home: { greeting, aboutMe },
			blog,
			projects,
			about,
		},
	} = content;

	return (
		<main className={styles.main}>
			<header className={classNames(styles.intro, shareTechMono.className)}>
				<div className={styles.greeting}>{greeting}</div>
				<Name className={styles.name} />
				<div className={styles.aboutMe}>{aboutMe}</div>
			</header>
			<nav className={styles.buttons}>
				<Button
					accentClassName={styles.button1}
					text={blog.linkText}
					href={'/blog'}
				/>
				<Button
					accentClassName={styles.button2}
					text={projects.linkText}
					href={'/projects'}
				/>
				<Button
					accentClassName={styles.button3}
					text={about.linkText}
					href={'/about'}
				/>
			</nav>
			<footer className={styles.footer}>
				<CallToAction />
				<SocialLinks hasAccent />
			</footer>
		</main>
	);
};

export default Home;
