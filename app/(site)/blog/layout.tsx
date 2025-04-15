import Frame from '@/components/Frame';
import { content } from '@/content';

interface BlogLayoutProps {
	children: React.ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
	const { title } = content.page.blog;
	return <Frame header={title}>{children}</Frame>;
};

export default BlogLayout;
