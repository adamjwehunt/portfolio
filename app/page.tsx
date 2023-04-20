import { content } from '@/content';
import { Name } from '@/components/Name';
import { Button } from '@/components/Button';
import { SocialLinks } from '@/components/SocialLinks';
import styles from './page.module.scss';

const {
	page: { blog, projects, about },
} = content;

const Home = () => (
	<main className={styles.main}>
		<Name className={styles.name} />
		<section className={styles.buttons}>
			<Button
				className={styles.button1}
				text={blog.linkText}
				href={'/blog'}
			/>
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
