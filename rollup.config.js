import staticSite from "rollup-plugin-static-site";
import svelte from "rollup-plugin-svelte";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.js",
  output: {
    sourcemap: true,
    file: "dist/bundle.js",
    name: "app",
    format: "iife"
  },
  plugins: [
    staticSite({
      dir: "dist",
      moreStyles: ["bundle.css", "global.css"],
      template: {
        path: "./public/index.html"
      }
    }),
    svelte({
      dev: !production,
      css: css => {
        css.write("dist/bundle.css");
      }
    }),

    commonjs(),
    resolve(),

    production && terser()
  ]
};
