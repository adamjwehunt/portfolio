import { ImageProps } from 'next/image';
import { content } from '@/content';
import { Button } from '../Button';
import { ProjectsItemHeader } from '../ProjectsItemHeader';
import { joinListItems } from '@/lib/util';
import { convertStringsToMdx } from '@/lib/mdx';
import styles from './iframeItem.module.scss';
import IframeWrapper from './IframeWrapper';

const { visitSiteText, visitCodeText } = content.page.projects;

interface IframeItemProps {
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

const IframeItem = async ({
	title,
	subtitle,
	siteLink,
	githubLink,
	tech,
	image,
	description,
}: IframeItemProps) => {
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
				<IframeWrapper siteLink={siteLink} />
			</div>
		</>
	);
};

export default IframeItem;
