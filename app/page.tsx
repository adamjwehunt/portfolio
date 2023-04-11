import { content } from '@/content';
import { Name } from '@/components/Name';
import { Button } from '@/components/Button';
import { SocialLinks } from '@/components/SocialLinks';
import styles from './page.module.css';

const {
	page: { blog, projects, about },
} = content;

const Home = () => (
	<main className={styles.main}>
		<Name className={styles.name} />
		<section className={styles.buttons}>
			<Button
				className={styles.blogButton}
				text={blog.linkText}
				href={'/blog'}
			/>
			<Button
				className={styles.projectsButton}
				text={projects.linkText}
				href={'/projects'}
			/>
			<Button
				className={styles.aboutButton}
				text={about.linkText}
				href={'/about'}
			/>
		</section>
		<SocialLinks hasAccent />
	</main>
);

export default Home;
