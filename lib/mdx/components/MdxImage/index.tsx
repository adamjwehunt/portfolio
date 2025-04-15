import Image, { ImageProps } from 'next/image';

import styles from './mdxImage.module.css';

interface MdxImageProps extends ImageProps {
	caption: string;
	priority?: boolean;
}

export const MdxImage = ({ caption, priority = false, ...otherProps }: MdxImageProps) => (
	<figure className={styles.wrapper}>
		<Image 
			className={styles.image} 
			priority={priority} 
			{...otherProps} 
			alt={otherProps.alt} 
		/>
		<figcaption className={styles.caption}>{caption}</figcaption>
	</figure>
);
