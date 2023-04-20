import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';

export const MdxLink = ({
	href,
	target = '_blank',
	...otherProps
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => (
	<Link target={target} href={href} {...otherProps} />
);
