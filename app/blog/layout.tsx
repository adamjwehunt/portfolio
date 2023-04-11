import Frame from '@/components/Frame';

interface BlogLayoutProps {
	children: React.ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
	return <Frame>{children}</Frame>;
};

export default BlogLayout;
