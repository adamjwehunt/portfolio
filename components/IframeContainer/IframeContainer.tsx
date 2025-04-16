'use client';

import { useLazyLoad } from '@/hooks/useLazyLoad';

import styles from './iframeItem.module.scss';

interface IframeContainer {
	siteLink: string;
}

const IframeContainer = ({ siteLink }: IframeContainer) => {
	const { elementRef, isVisible } = useLazyLoad();

	return (
		<div className={styles.iframeContainer} ref={elementRef}>
			{isVisible && (
				<iframe
					src={siteLink}
					loading={'eager'}
					height={'600px'}
					style={{ border: 0 }}
				/>
			)}
		</div>
	);
};

export default IframeContainer;
