import { resolve } from "node:path";
import { defineConfig } from "vite";

const base = process.env.GITHUB_PAGES === "true" ? "/dashen_ui_kit/" : "/";

export default defineConfig({
  base,
  build: {
    rollupOptions: {
      input: {
        showcase: resolve(__dirname, "index.html"),
        showcaseEn: resolve(__dirname, "en.html"),
        docs: resolve(__dirname, "docs/site/index.html"),
        docsEn: resolve(__dirname, "docs/site/en.html"),
        deck: resolve(__dirname, "docs/deck/exoframe-html-ppt.html"),
        deckEn: resolve(__dirname, "docs/deck/exoframe-html-ppt.en.html")
      }
    }
  }
});
