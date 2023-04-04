import Frame from '@/components/Frame';

interface CodeLayoutProps {
	children: React.ReactNode;
}

export default function CodeLayout({ children }: CodeLayoutProps) {
	return <Frame>{children}</Frame>;
}
