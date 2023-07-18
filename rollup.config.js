import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";

export default {
  input: "index.js",
  output: {
    file: "dist/hls-video-element.js",
    format: "es",
  },
  plugins: [resolve(), commonjs(), terser()],
};
