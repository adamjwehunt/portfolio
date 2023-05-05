import styles from './iframeWrapper.module.css';
import { IIframe } from 'react-iframe/types';

interface iframeWrapperProps {
	iframe: IIframe;
}

export const IframeWrapper = ({ iframe }: iframeWrapperProps) => {
	return (
		<div className={styles.iframeWrapper}>
			<Iframe scrolling={'no'} loading={'lazy'} frameBorder={0} {...iframe} />
		</div>
	);
};
