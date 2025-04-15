'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const Analytics = () => {
	if (process.env.NODE_ENV !== 'production') {
		return null;
	}

	return (
		<>
			<VercelAnalytics />
			<SpeedInsights />
		</>
	);
};
