import Frame from '@/components/Frame';
import { content } from '@/content';
import WorkItem from '@/components/WorkItem';
import ProjectItem from '@/components/ProjectItem';
import IframeItem from '@/components/IframeItem';

const {
	header,
	workHeader,
	workItems,
	projectsHeader,
	projectItems,
	etceteraHeader,
	iframeItems,
} = content.page.projects;

const ProjectPage = () => (
	<Frame header={header}>
		<section>
			<h2>{workHeader}</h2>
			{workItems.map((props, index) => (
				// @ts-expect-error Server Component
				<WorkItem key={index} {...props} />
			))}
		</section>
		<section>
			<h2>{projectsHeader}</h2>
			{projectItems.map((props, index) => (
				// @ts-expect-error Server Component
				<ProjectItem key={index} {...props} />
			))}
		</section>
		<section>
			<h2>{etceteraHeader}</h2>
			{iframeItems.map((props, index) => (
				// @ts-expect-error Server Component
				<IframeItem key={index} {...props} />
			))}
		</section>
	</Frame>
);

export default ProjectPage;
