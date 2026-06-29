// @ts-check
import { defineConfig } from "astro/config";
import { satteri, satteriHeadingIdsPlugin } from "@astrojs/markdown-satteri";
import mdx from "@astrojs/mdx";
import { katex } from "./src/plugins/katex";
import { anchors } from "./src/plugins/anchors";
import { tufteSectionize } from "./src/plugins/sectionize";

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
      hastPlugins: [satteriHeadingIdsPlugin(), anchors, tufteSectionize],
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
