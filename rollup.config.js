import _ from "lodash";
import { minify } from "html-minifier";

import svelte from "rollup-plugin-svelte";
import sveltePreprocessPostcss from "svelte-preprocess-postcss";
import staticSite from "rollup-plugin-static-site";
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
      title: "patrik.dev",
      moreStyles: [
        "https://fonts.googleapis.com/css?family=Roboto+Mono:400,500",
        "https://fonts.googleapis.com/css?family=Roboto:400,500",
        "bundle.css"
        // "global.css"
      ],
      template: {
        path: "./public/index.html",
        func: (html, data) => {
          const template = _.template(html)(data);

          return minify(template, {
            html5: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true,
            minifyURLs: true
          });
        }
      }
    }),
    svelte({
      dev: !production,
      preprocess: {
        style: sveltePreprocessPostcss({
          useConfigFile: false,
          plugins: [require("postcss-nested"), require("postcss-import")]
        })
      },
      css: css => {
        css.write("dist/bundle.css");
      }
    }),

    commonjs(),
    resolve(),

    production && terser()
  ]
};
