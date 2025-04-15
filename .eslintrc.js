module.exports = {
	extends: [
		'next/core-web-vitals',
		'plugin:import/recommended',
		'plugin:import/typescript',
	],
	plugins: ['import', 'sort-keys-fix'],
	rules: {
		// Import sorting
		'import/order': [
			'error',
			{
				alphabetize: {
					order: 'asc',
					caseInsensitive: true,
				},
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index',
					'object',
					'type',
				],
				'newlines-between': 'always',
				pathGroups: [
					{
						pattern: '@/**',
						group: 'internal',
						position: 'after',
					},
				],
				pathGroupsExcludedImportTypes: ['builtin'],
			},
		],
		// Object property sorting
		'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }],

		// Disable the no-duplicates rule that's causing the classnames issue
		'import/no-duplicates': 'off',

		// Disable the no-unresolved rule for CSS files
		'import/no-unresolved': [
			'error',
			{
				ignore: ['\\.css$', '\\.scss$'],
			},
		],
	},
	settings: {
		'import/resolver': {
			typescript: {},
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
};
