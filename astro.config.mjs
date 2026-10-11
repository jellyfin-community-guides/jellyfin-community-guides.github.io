// @ts-check

import react from "@astrojs/react";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "(WIP!) Jellyfin Community Guides",
			social: [
				{
					icon: "github",
					label: "GitHub",
					href: "https://github.com/jellyfin-community-guides/jellyfin-community-guides.github.io",
				},
			],
			sidebar: [
				{
					label: "Guides",
					items: [
						// Each item here is one entry in the navigation menu.
						{ autogenerate: { directory: "guides" } },
					],
				},
				{
					label: "Reference",
					items: [{ autogenerate: { directory: "reference" } }],
				},
			],
		}),
		mermaid(),
		react(),
	],
});
