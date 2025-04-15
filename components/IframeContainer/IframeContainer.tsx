'use client';

import Iframe from 'react-iframe';

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
				<Iframe
					url={siteLink}
					scrolling={'no'}
					loading={'eager'}
					frameBorder={0}
					height={'600px'}
				/>
			)}
		</div>
	);
};

export default IframeContainer;
