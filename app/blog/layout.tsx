import Frame from "@/components/Frame";

interface BlogLayoutProps {
	children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
	return <Frame>{children}</Frame>;
}
