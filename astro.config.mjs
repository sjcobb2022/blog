// @ts-check
import { defineConfig } from "astro/config";
import { satteri } from "@astrojs/markdown-satteri";
import mdx from "@astrojs/mdx";
import { math } from "./src/plugins/math";
import { headingIds, anchors } from "./src/plugins/heading";

export default defineConfig({
  site: "https://sjcobb2022.github.io",
  base: "/blog",
  output: "static",
  prefetch: {
    defaultStrategy: "hover",
  },
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
      mdastPlugins: [math],
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
