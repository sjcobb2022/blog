import { defineHastPlugin, type HastContent } from "satteri";

// A (relatively) simple way to remove the need for a manual section before every h2.
// It takes advantage of 2 behaviours of the 0.7 Satteri parser.
// 1. <section> elements that wrap other elements are treated as raw 
//    and are flat.
// 2. ElementContent and RootContent are similar enough that we can ignore the typescript
//    warning.
export const tufteSectionize = defineHastPlugin({
  name: "tufte-sectionize",
  element: {
    filter: ["h2"],
    visit(node, ctx) {
      const parent = ctx.parent(node);
      const idx = ctx.indexOf(node);

      // If no index, something is wrong
      if (idx === undefined) return;
      // If we are somehow a direct descendant of a section escape early
      if(parent.type === "element" && parent.tagName === "section") return;

      // We know that if we count an odd number of <sections> we are probably in one.
      const above = parent.children.slice(0, idx);
      let depth = 0;
      for (const child of above) {
        if (child.type === "raw") {
          if (child.value.trim() === "<section>") depth++;
          else if (child.value.trim() === "</section>") depth--;
        }
      }
      if (depth > 0) return;

      // Look forward until we reach a h2 or a section.
      const below = parent.children.slice(idx);
      let endOffset = below.length;
      for (let i = 1; i < below.length; i++) {
        const child = below[i];
        if (child.type === "element" && child.tagName === "h2") {
          endOffset = i;
          break;
        }
        if (child.type === "raw") {
          const v = child.value.trim();
          if (v === "</section>" || v === "<section>") {
            endOffset = i;
            break;
          }
        }
      }

      // Get all elements in our range.
      const sectionChildren = structuredClone(
        parent.children.slice(idx, idx + endOffset),
      );

      const sectionNode: HastContent = {
        type: "element",
        tagName: "section",
        properties: {},
        // Ignore this warning so we can force a conversion which is a little disgusting but it works...
        // @ts-ignore
        children: sectionChildren,
      };

      ctx.replaceNode(node, sectionNode);

      for (let i = endOffset - 1; i >= 1; i--) {
        ctx.removeChildAt(parent, idx + i);
      }
    },
  },
});
