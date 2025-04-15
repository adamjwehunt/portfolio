import { content } from '@/content';
import { Button } from '@/components/Button';
import { SocialLinks } from '@/components/SocialLinks';
import { CallToAction } from '@/components/CallToAction';
import { Name } from '@/components/Name';
import { shareTechMono } from '@/constants/fonts';
import classNames from 'classnames';
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
			<section className={classNames(styles.intro, shareTechMono.className)}>
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
			<section className={styles.footer}>
				<CallToAction />
				<SocialLinks hasAccent />
			</section>
		</main>
	);
};

export default Home;
