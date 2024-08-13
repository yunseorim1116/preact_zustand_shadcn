// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";
import preact from "@preact/preset-vite";
import path from "path";

export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      react: "preact/compat",
      "react-dom": "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
