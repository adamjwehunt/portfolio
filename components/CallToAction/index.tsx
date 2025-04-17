import classNames from 'classnames';

import { shareTechMono } from '@/constants/fonts';
import { content } from '@/content';

import styles from './callToAction.module.css';

export const CallToAction = () => {
	const {
		page: {
			home: { callToAction1 },
		},
	} = content;

	return (
		<p className={classNames(styles.callToAction, shareTechMono.className)}>
			{callToAction1}
		</p>
	);
};
