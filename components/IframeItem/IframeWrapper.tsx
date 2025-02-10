'use client';

import Iframe from 'react-iframe';
import styles from './iframeItem.module.scss';
import { useLazyLoad } from '@/hooks/useLazyLoad';

interface IframeWrapper {
	siteLink: string;
}

const IframeWrapper = ({ siteLink }: IframeWrapper) => {
	const { elementRef, isVisible } = useLazyLoad();

	return (
		<div className={styles.iframeWrapper} ref={elementRef}>
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

export default IframeWrapper;
