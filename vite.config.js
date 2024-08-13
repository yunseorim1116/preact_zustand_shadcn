// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
      "@components": resolve(__dirname, "src/components"),
      "@utils": resolve(__dirname, "src/lib"),
    },
  },
});
