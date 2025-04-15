import Image, { ImageProps } from 'next/image';
import { content } from '@/content';
import { Button } from '../Button';
import { ProjectsItemHeader } from '../ProjectsItemHeader';
import { joinListItems } from '@/lib/util';
import { convertStringsToMdx } from '@/lib/mdx';
import styles from './projectItem.module.scss';
import IframeWrapper from '../IframeContainer/IframeContainer';

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
