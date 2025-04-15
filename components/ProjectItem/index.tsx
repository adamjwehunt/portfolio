import Image, { ImageProps } from 'next/image';

import { content } from '@/content';
import { convertStringsToMdx } from '@/lib/mdx';
import { joinListItems } from '@/lib/util';

import { Button } from '../Button';
import IframeWrapper from '../IframeContainer/IframeContainer';
import { ProjectsItemHeader } from '../ProjectsItemHeader';

import styles from './projectItem.module.scss';


interface ProjectItemProps {
	title: string;
	subtitle: string;
	siteLink: string;
	githubLink: string;
	tech: string[];
	image: ImageProps;
	images?: {
		desktop: ImageProps;
		mobile: ImageProps[];
	};
	iframeLink?: string;
	description: string[];
}

const ProjectItem = async ({
	title,
	subtitle,
	siteLink,
	githubLink,
	tech,
	iframeLink,
	image,
	images,
	description,
}: ProjectItemProps) => {
	const { visitSiteText, visitCodeText } = content.page.projects;

	const mdxDescriptionItems = await convertStringsToMdx(description);

	const { desktop, mobile } = images || {};

	return (
		<div className={styles.container}>
			<ProjectsItemHeader {...{ image, subtitle, title }} />
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
				{images ? (
					<div className={styles.images}>
						<Image
							className={styles.desktopImage}
							{...desktop!}
							alt={desktop?.alt || ''}
						/>
						<div className={styles.mobileImages}>
							{mobile?.map((props, index) => (
								<Image key={index} {...props} alt={props.alt} />
							))}
						</div>
					</div>
				) : null}
				{iframeLink && <IframeWrapper siteLink={siteLink} />}
			</div>
		</div>
	);
};

export default ProjectItem;
