import { defineHastPlugin, type HastContent } from "satteri";

export const anchors = defineHastPlugin({
  name: "heading-anchors",
  element: {
    filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
    visit(node, ctx) {
      const id = node.properties.id;
      if (typeof id !== "string" || !id) return;

      const anchor: HastContent = {
        type: "element",
        tagName: "a",
        properties: {
          href: `#${id}`,
          ariaHidden: "true",
          tabIndex: -1,
        },
        children: [],
      };

      ctx.prependChild(node, anchor);
    },
  },
});
