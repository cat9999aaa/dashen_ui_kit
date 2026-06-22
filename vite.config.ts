import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        showcase: resolve(__dirname, "index.html"),
        docs: resolve(__dirname, "docs/site/index.html"),
        deck: resolve(__dirname, "docs/deck/exoframe-html-ppt.html")
      }
    }
  }
});
