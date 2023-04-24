import { content } from '@/content';
import Link from 'next/link';
import styles from './callToAction.module.css';

const {
	page: {
		home: { callToAction1, callToAction2 },
	},
} = content;

export const CallToAction = () => (
	<div className={styles.callToAction}>
		{`${callToAction1} (`}
		<Link
			className={styles.resume}
			aria-label={'Download Resume'}
			href={'/Adam_Wehunt_Resume.pdf'}
			target={'_blank'}
			prefetch={false}
		>
			{'resume'}
		</Link>
		{`)${callToAction2}`}
	</div>
);
