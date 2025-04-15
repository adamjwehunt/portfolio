const withMDX = require('@next/mdx')({
	options: {
		providerImportSource: '@mdx-js/react',
	},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	turbopack: {
		// Configure SVG loader support
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js',
			},
		},
		// Add support for resolving MDX files
		resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
	},
	// Existing webpack configuration
	webpack(config) {
		// Grab the existing rule that handles SVG imports
		const fileLoaderRule = config.module.rules.find((rule) =>
			rule.test?.test?.('.svg')
		);

		config.module.rules.push(
			// Reapply the existing rule, but only for svg imports ending in ?url
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/, // *.svg?url
			},
			// Convert all other *.svg imports to React components
			{
				test: /\.svg$/i,
				// issuer: /\.[jt]sx?$/,
				resourceQuery: { not: /url/ }, // exclude if *.svg?url
				use: ['@svgr/webpack'],
			}
		);

		// Modify the file loader rule to ignore *.svg, since we have it handled now.
		fileLoaderRule.exclude = /\.svg$/i;

		// Optimize MDX processing
		config.module.rules.push({
			test: /\.mdx?$/,
			use: [
				{
					loader: '@mdx-js/loader',
					options: {
						providerImportSource: '@mdx-js/react',
					},
				},
			],
		});

		return config;
	},
	sassOptions: {
		includePaths: ['./app', './components', './lib'],
		prependData: `@use 'variables' as *;`,
	},
	reactStrictMode: true,
	images: {
		unoptimized: true,
	},
};

module.exports = withMDX(nextConfig);
