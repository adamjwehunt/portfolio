import Image, { ImageProps } from 'next/image';
import { content } from '@/content';
import { Button } from '../Button';
import { ProjectsItemHeader } from '../ProjectsItemHeader';
import { joinListItems } from '@/lib/util';
import { convertStringsToMdx } from '@/lib/mdx';
import styles from './projectItem.module.scss';

const { visitSiteText, visitCodeText } = content.page.projects;

interface ProjectItemProps {
	title: string;
	subtitle: string;
	siteLink: string;
	githubLink: string;
	tech: string[];
	image: ImageProps;
	images: {
		desktop: ImageProps;
		mobile: ImageProps[];
	};
	description: string[];
}

const ProjectItem = async ({
	title,
	subtitle,
	siteLink,
	githubLink,
	tech,
	image,
	images: { desktop, mobile },
	description,
}: ProjectItemProps) => {
	const mdxDescriptionItems = await convertStringsToMdx(description);

	return (
		<>
			<ProjectsItemHeader {...{ image, title, subtitle }} />
			<div className={styles.wrapper}>
				<div className={styles.details}>
					<div className={styles.buttons}>
						<Button
							accentClassName={styles.button1}
							text={visitSiteText}
							href={siteLink}
							isExternalLink
						/>
						<Button
							accentClassName={styles.button2}
							text={visitCodeText}
							href={githubLink}
							isExternalLink
						/>
					</div>
					<ul className={styles.description}>
						<li>{joinListItems(tech)}</li>
						{mdxDescriptionItems.map((paragraph, index) => (
							<li key={index}>{paragraph}</li>
						))}
					</ul>
				</div>
				<div className={styles.images}>
					<Image
						className={styles.desktopImage}
						{...desktop}
						alt={desktop.alt}
					/>
					<div className={styles.mobileImages}>
						{mobile.map((props, index) => (
							<Image key={index} {...props} alt={props.alt} />
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default ProjectItem;
