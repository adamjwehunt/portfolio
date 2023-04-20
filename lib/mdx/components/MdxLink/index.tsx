import Link, { LinkProps } from 'next/link';
import { AnchorHTMLAttributes } from 'react';
import { Url } from 'url';

interface MdxLinkProps extends Omit<LinkProps, 'href'> {
	href?: string | Url;
	target?: AnchorHTMLAttributes<HTMLAnchorElement>['target'];
}

export const MdxLink = ({
	href,
	target = '_blank',
	...otherProps
}: MdxLinkProps) =>
	!href ? null : <Link href={href} target={target} {...otherProps} />;
