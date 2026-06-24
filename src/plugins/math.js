import { defineMdastPlugin } from "satteri";
import katex from "katex";

export const debugMathPlugin = defineMdastPlugin({
  name: "debug-math",
  math(node) {
    console.log("math node:", JSON.stringify(node));
  },
  inlineMath(node) {
    console.log("inlineMath node:", JSON.stringify(node));
  },
});

export const math = defineMdastPlugin({
  name: "math-katex",
  math(node) {
    return {
      type: "html",
      value: `<div class="math math-display">${katex.renderToString(
        node.value,
        {
          displayMode: true,
          throwOnError: false,
        },
      )}</div>`,
    };
  },
  inlineMath(node) {
    return {
      type: "html",
      value: `<span class="math math-inline">${katex.renderToString(
        node.value,
        {
          displayMode: false,
          throwOnError: false,
        },
      )}</span>`,
    };
  },
});
