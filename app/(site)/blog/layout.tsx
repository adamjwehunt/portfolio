import Frame from '@/components/Frame';
import { content } from '@/content';

interface BlogLayoutProps {
	children: React.ReactNode;
}

const { header } = content.page.blog;

const BlogLayout = ({ children }: BlogLayoutProps) => {
	return <Frame header={header}>{children}</Frame>;
};

export default BlogLayout;
