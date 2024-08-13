// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";
import preact from "@preact/preset-vite";
import path from "path";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [preact()],
  css: {
    postcss: "./postcss.config.js",
  },
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
