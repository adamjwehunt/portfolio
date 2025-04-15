import Frame from '@/components/Frame';
import ProjectItem from '@/components/ProjectItem';
import WorkItem from '@/components/WorkItem';
import { content } from '@/content';

import styles from './projects.module.css';

const ProjectPage = () => {
	const {
		title,
		greeting1,
		greeting2,
		workHeader,
		workItems,
		projectsHeader,
		projectItems,
	} = content.page.projects;

	return (
		<Frame header={title}>
			<section className={styles.greeting}>
				<div>
					<div>
						<b>{greeting1}</b>
					</div>
					<div>{greeting2}</div>
				</div>
			</section>
			<section>
				<h2>{workHeader}</h2>
				{workItems.map((props, index) => (
					<WorkItem key={index} {...props} />
				))}
			</section>
			<section>
				<h2>{projectsHeader}</h2>
				{projectItems.map((props, index) => (
					<ProjectItem key={index} {...props} />
				))}
			</section>
		</Frame>
	);
};

export default ProjectPage;
