// @ts-check
import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import mdx from "@astrojs/mdx";
import { katex } from "./src/plugins/katex";
import { headingIds } from "./src/plugins/heading-ids";
import { anchors } from "./src/plugins/anchors";

export default defineConfig({
  site: "https://blog.sjc03.org",
  output: "static",
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      themes: {
        dark: "one-dark-pro",
        light: "one-light",
      },
    },
    processor: satteri({
      hastPlugins: [headingIds, anchors],
      mdastPlugins: [katex],
      features: {
        gfm: true,
        frontmatter: true,
        math: true,
        headingAttributes: false,
        directive: true,
        superscript: false,
        subscript: false,
        wikilinks: true,
        smartPunctuation: false,
      },
    }),
  },
});
