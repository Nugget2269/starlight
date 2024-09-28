import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
						{ label: 'Privacy', slug: 'guides/privacy' },
						{ label: 'Authoring Tools', slug: 'guides/authoring' }
						// { label: 'Mathe Klausur', slug: 'guides/math'}
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			defaultLocale: 'root',
			locales: {
			  // English docs in `src/content/docs/en/`
				root: {
					label: 'English',
					lang: "en",
			  	},
			//   de: {
			// 	label: 'Deutsch',
			//   },
			},
			
		}),
	],
	markdown: {
		remarkPlugins: [remarkMath], // I need math support!
		rehypePlugins: [rehypeMathjax],
	},
});
