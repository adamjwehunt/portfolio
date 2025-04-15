import { useEffect, useState, useRef } from 'react';

export const useLazyLoad = (
	rootMargin: string = '200px',
	threshold: number = 0.1
) => {
	const [isVisible, setIsVisible] = useState(false);
	const elementRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.disconnect();
				}
			},
			{ rootMargin, threshold }
		);

		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, [rootMargin, threshold]);

	return { elementRef, isVisible };
};
