import Image, { ImageProps } from 'next/image';
import { ReactElement } from 'react';

import styles from './projectsItemHeader.module.css';

interface ProjectsItemHeaderProps {
	image: ImageProps;
	title: string | ReactElement;
	subtitle: string;
}

export const ProjectsItemHeader = ({
	image,
	title,
	subtitle,
}: ProjectsItemHeaderProps) => (
	<div className={styles.header}>
		<Image className={styles.image} {...image} alt={image.alt} />
		<div className={styles.text}>
			<h3 className={styles.title}>{title}</h3>
			{subtitle && <div className={styles.subtitle}>{subtitle}</div>}
		</div>
	</div>
);
