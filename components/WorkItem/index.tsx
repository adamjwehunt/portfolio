import Image, { ImageProps } from 'next/image';
import Link from 'next/link';

import { convertTasksToMdx } from '@/lib/mdx';

import { ProjectsItemHeader } from '../ProjectsItemHeader';

import styles from './workItem.module.scss';

interface Task {
	text: string;
	image: ImageProps;
}

export interface WorkItemProps {
	role: string;
	company: string;
	companyLink: string;
	image: ImageProps;
	subtitle: string;
	tasks: Task[];
	/** Whether the task list starts expanded */
	defaultOpen?: boolean;
}

const WorkItem = async ({
	role,
	company,
	companyLink,
	image,
	subtitle,
	tasks,
	defaultOpen = false,
}: WorkItemProps) => {
	const mdxTasks = await convertTasksToMdx(tasks);

	return (
		<details className={styles.container} open={defaultOpen}>
			<summary className={styles.summary}>
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
				subtitle={subtitle}
				/>
				<svg
					className={styles.caret}
					viewBox="0 0 24 24"
					width="24"
					height="24"
					aria-hidden
				>
					<path
						d="M6 9l6 6 6-6"
						fill="none"
						stroke="currentColor"
						strokeWidth="2.5"
						strokeLinecap="square"
					/>
				</svg>
			</summary>
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
		</details>
	);
};

export default WorkItem;
