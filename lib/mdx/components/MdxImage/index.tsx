import Image, { ImageProps } from 'next/image';
import styles from './mdxImage.module.css';

interface MdxImageProps extends ImageProps {
	caption: string;
}

export const MdxImage = ({ caption, ...otherProps }: MdxImageProps) => (
	<figure className={styles.wrapper}>
		<Image className={styles.image} {...otherProps} alt={otherProps.alt} />
		<figcaption className={styles.caption}>{caption}</figcaption>
	</figure>
);
