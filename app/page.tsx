import { content } from '@/content';
import { Name } from '@/components/Name';
import { Button } from '@/components/Button';
import { SocialLinks } from '@/components/SocialLinks';
import styles from './page.module.scss';

const {
	page: {
		home: { greeting, aboutMe, callToAction },
		blog,
		projects,
		about,
	},
} = content;

const Home = () => (
	<main className={styles.main}>
		<section className={styles.intro}>
			<div className={styles.greeting}>{greeting}</div>
			<Name className={styles.name} />
			<div className={styles.aboutMe}>{aboutMe}</div>
			<div className={styles.callToAction}>{callToAction}</div>
		</section>
		<section className={styles.buttons}>
			<Button className={styles.button1} text={blog.linkText} href={'/blog'} />
			<Button
				className={styles.button2}
				text={projects.linkText}
				href={'/projects'}
			/>
			<Button
				className={styles.button3}
				text={about.linkText}
				href={'/about'}
			/>
		</section>
		<SocialLinks hasAccent />
	</main>
);

export default Home;
