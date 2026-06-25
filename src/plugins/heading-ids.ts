import { defineHastPlugin } from "satteri";

export const headingIds = defineHastPlugin({
  name: "heading-ids",
  element: {
    filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
    visit(node, ctx) {
      const id = ctx
        .textContent(node)
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");
      if (!id) return;
      ctx.setProperty(node, "id", id);
    },
  },
});
