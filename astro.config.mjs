// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'NimbusDB',
			//logo: {
			//	light: './src/assets/logo-light.png',
			//	dark: './src/assets/logo-dark.png',
			//	alt: 'NimbusDB Logo',
			//	replacesTitle: true
			//},
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/pBrRGSXU96' },
				// { icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/undervolta.npc' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/undervolta/NimbusDB' },
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Setup', slug: 'getting-started/setup' },
					],
				},
				{
					label: 'Concepts',
					items: [
						{ label: 'Architecture', slug: 'concepts/architecture' },
						{ label: 'Data Access', slug: 'concepts/data-access' },
						{ label: 'Master Functions', slug: 'concepts/master-functions' },
						{ label: 'Reading the API', slug: 'concepts/reading-the-api' },
					],
				},
				{
					label: 'Core',
					items: [
						{
							label: 'Model', items: [
								{ label: 'Schema', slug: 'core/model/schema' },
								{ label: 'Insert', slug: 'core/model/insert' },
								{ label: 'Query', slug: 'core/model/query' },
								{ label: 'Update', slug: 'core/model/update' },
								{ label: 'Remove', slug: 'core/model/remove' },
								{ label: 'Expose/Alias', slug: 'core/model/expose-alias' },
								{ label: 'Cache & Temporary Data', slug: 'core/model/cache-temp' },
							]
						},
						{
							label: 'Catalog', items: [
								{ label: 'Essentials', slug: 'core/catalog/essentials' },
								{ label: 'Relations', slug: 'core/catalog/relations' },
								{ label: 'Backup/Restore', slug: 'core/catalog/backup-restore' },
							]
						},
						{
							label: 'Data', items: [
								{ label: 'Mutations', slug: 'core/data/mutations' },
								{ label: 'Resolve', slug: 'core/data/resolve' },
							]
						},
						{
							label: 'Transaction', items: [
								{ label: 'Basics', slug: 'core/transaction/basics' },
								{ label: 'Operations', slug: 'core/transaction/operations' },
							]
						},
					],
				},
				{
					label: 'Pipeline',
					items: [
						{ label: 'Overview', slug: 'pipeline/overview' },
						{
							label: 'Operations', items: [
								{ label: 'Transform', slug: 'pipeline/ops/transform' },
								{ label: 'Pagination', slug: 'pipeline/ops/pagination' },
								{ label: 'Shaping', slug: 'pipeline/ops/shaping' },
								{ label: 'Ordering', slug: 'pipeline/ops/ordering' },
								{ label: 'Control', slug: 'pipeline/ops/control' },
							]
						},
						{ 
							label: 'Terminals', items: [
								{ label: 'Accessors', slug: 'pipeline/terminal/accessors' },
								{ label: 'Assertions', slug: 'pipeline/terminal/assertions' },
								{ label: 'Aggregation', slug: 'pipeline/terminal/aggregation' },
								{ label: 'Iteration', slug: 'pipeline/terminal/iteration' },
								{ label: 'Write-back', slug: 'pipeline/terminal/write-back' },
							] 
						},	
					],
				},
				{
					label: 'Joins',
					items: [{ autogenerate: { directory: 'joins' } }],
				},
				{
					label: 'Reactivity',
					items: [
						{ label: 'Computed', slug: 'reactivity/computed' },
						{ label: 'Watch', slug: 'reactivity/watch' },
						{ label: 'Derived', slug: 'reactivity/derived' },
					],
				},
				{
					label: 'Input/Output',
					items: [
						{ label: 'Exports', slug: 'io/exports' },
						{ label: 'Imports', slug: 'io/imports' },
					],
				},
				{
					label: 'Migration',
					items: [{ autogenerate: { directory: 'migration' } }],
				},
				{
					label: 'API Reference',
					items: [
						{ label: 'ndb Functions', slug: 'api-reference/ndb-functions' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Modeling Relations', slug: 'guides/modeling-relations' },
						{ label: 'Pipeline Patterns', slug: 'guides/pipeline-patterns' },
						{ label: 'Performance Tips', slug: 'guides/performance-tips' },
					],
				},
			],
			editLink: {
				baseUrl: 'https://github.com/undervolta/nimbusdb-docs/edit/master',
			},
			customCss: [
				'./src/styles/custom.css',
				'@fontsource/plus-jakarta-sans/400.css',
				'@fontsource/plus-jakarta-sans/600.css',
			],
			lastUpdated: true
		}),
		mdx(),
	],
	site: 'https://nimbusdb.lefinitas.com',
});
