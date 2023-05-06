'use client';

import { content } from '@/content';
import { useRouter } from 'next/navigation';
import BackArrow from '@/public/back-arrow.svg';
import { IconButton } from '../IconButton';
import styles from './backButton.module.scss';

export const BackButton = () => {
	const router = useRouter();
	const handleBackButtonClick = () => router.back();

	return (
		<IconButton
			className={styles.arrow}
			accentClassName={styles.arrowAccent}
			accent
			icon={BackArrow}
			ariaLabel={content.components.backButton.ariaLabel}
			onClick={handleBackButtonClick}
		/>
	);
};
