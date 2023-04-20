import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { convertTasksToMdx } from '@/lib/mdx';
import styles from './workItem.module.scss';
import { ProjectsItemHeader } from '../ProjectsItemHeader';

interface Task {
	text: string;
	image: ImageProps;
}

export interface WorkItemProps {
	role: string;
	company: string;
	companyLink: string;
	image: ImageProps;
	dateRange: string;
	tasks: Task[];
}

const WorkItem = async ({
	role,
	company,
	companyLink,
	image,
	dateRange,
	tasks,
}: WorkItemProps) => {
	const mdxTasks = await convertTasksToMdx(tasks);

	return (
		<>
			<ProjectsItemHeader
				image={image}
				title={
					<>
						{`${role} at `}
						<Link
							className={styles.company}
							href={companyLink}
							target={'_blank'}
						>
							{company}
						</Link>
					</>
				}
				subtitle={dateRange}
			/>
			<div className={styles.tasks}>
				{mdxTasks.map(({ image: taskImage, content }, index) => (
					<div key={index} className={styles.taskContainer}>
						<Image
							className={styles.taskImage}
							{...taskImage}
							alt={taskImage.alt}
						/>
						{content}
					</div>
				))}
			</div>
		</>
	);
};

export default WorkItem;
