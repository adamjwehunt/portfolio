import { ReactNode } from 'react';

import Frame from '@/components/Frame';
import { content } from '@/content';

interface JournalLayoutProps {
	children: ReactNode;
}

const JournalLayout = ({ children }: JournalLayoutProps) => {
	const { title } = content.page.journal;
	return <Frame header={title}>{children}</Frame>;
};

export default JournalLayout;
