import Frame from '@/components/Frame';

interface AboutLayoutProps {
	children: React.ReactNode;
}

export default function AboutLayout({ children }: AboutLayoutProps) {
	return <Frame>{children}</Frame>;
}
