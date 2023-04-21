import { content } from '@/content';
import { Name } from '@/components/Name';
import { Button } from '@/components/Button';
import { SocialLinks } from '@/components/SocialLinks';
import { CallToAction } from '@/components/CallToAction';
import styles from './page.module.scss';

const {
	page: {
		home: { greeting, aboutMe },
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
		</section>
		<section className={styles.buttons}>
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
		</section>
		<CallToAction />
		<SocialLinks hasAccent />
	</main>
);

export default Home;
