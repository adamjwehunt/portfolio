import { content } from '@/content';
import { getProjects } from '@/lib/mdx';
import Frame from '@/components/Frame';

const ProjectPage = async () => {
	const projects = await getProjects();

	return (
		<Frame>
			<h1>{content.page.projects.title}</h1>
			<section>
				{projects.map(({ metadata: { title, publishDate }, content }) => (
					<>
						<h3>{title}</h3>
						<time>{publishDate}</time>
						<article>{content}</article>
					</>
				))}
			</section>
		</Frame>
	);
};

export default ProjectPage;
