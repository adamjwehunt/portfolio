import { content } from '@/content';
import { getAbout } from '@/lib/mdx';
import Frame from '@/components/Frame';

export const generateMetadata = async () => {
	const { metadata } = await getAbout();

	return { title: `${content.metadata.titleBase} ${metadata.title}` };
};

const AboutPage = async () => {
	const { content } = await getAbout();

	return (
		<Frame>
			<section>
				<article>{content}</article>
			</section>
		</Frame>
	);
};

export default AboutPage;
