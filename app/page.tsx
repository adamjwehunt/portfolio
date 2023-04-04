import { Name } from '@/components/Name';
import { Button } from '@/components/Button';
import { SocialLinks } from '@/components/SocialLinks';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<Name className={styles.name} />
			<div className={styles.buttons}>
				<Button text={'Blog'} href={'/blog'} className={styles.button1} />
				<Button text={'About'} href={'/about'} className={styles.button2} />
				<Button text={'Code'} href={'/code'} className={styles.button3} />
			</div>
			<SocialLinks hasAccents />
		</main>
	);
}
