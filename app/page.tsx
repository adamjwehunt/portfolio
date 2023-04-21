import { content } from '@/content';
import { Name } from '@/components/Name';
import { Button } from '@/components/Button';
import { SocialLinks } from '@/components/SocialLinks';
import Link from 'next/link';
import styles from './page.module.scss';

const {
	page: {
		home: { greeting, aboutMe, callToAction1, callToAction2 },
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
		<div className={styles.callToAction}>
			{`${callToAction1} (`}
			<Link
				className={styles.resume}
				aria-label={'Download Resume'}
				href={'/Adam_Wehunt_Resume.pdf'}
				target={'_blank'}
				download
			>
				{'resume'}
			</Link>
			{`) ${callToAction2}`}
		</div>
		<SocialLinks hasAccent />
	</main>
);

export default Home;
