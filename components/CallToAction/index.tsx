import { content } from '@/content';
import { shareTechMono } from '@/constants/fonts';
import classNames from 'classnames';
import styles from './callToAction.module.css';

export const CallToAction = () => {
	const {
		page: {
			home: { callToAction1 },
		},
	} = content;

	return (
		<div className={classNames(styles.callToAction, shareTechMono.className)}>
			{callToAction1}
		</div>
	);
};
