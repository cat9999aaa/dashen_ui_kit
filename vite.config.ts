import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  build: {
    rollupOptions: {
      input: {
        showcase: resolve(__dirname, "index.html"),
        showcaseEn: resolve(__dirname, "en.html"),
        usage: resolve(__dirname, "usage.html"),
        usageEn: resolve(__dirname, "usage.en.html"),
        api: resolve(__dirname, "api.html"),
        apiEn: resolve(__dirname, "api.en.html"),
        palettes: resolve(__dirname, "palettes.html"),
        palettesEn: resolve(__dirname, "palettes.en.html"),
        components: resolve(__dirname, "components.html"),
        componentsEn: resolve(__dirname, "components.en.html"),
        skill: resolve(__dirname, "skill.html"),
        skillEn: resolve(__dirname, "skill.en.html"),
        themeBuilder: resolve(__dirname, "theme-builder.html"),
        themeBuilderEn: resolve(__dirname, "theme-builder.en.html"),
        about: resolve(__dirname, "about.html"),
        aboutEn: resolve(__dirname, "about.en.html"),
        docs: resolve(__dirname, "docs/site/index.html"),
        docsEn: resolve(__dirname, "docs/site/en.html"),
        deck: resolve(__dirname, "docs/deck/exoframe-html-ppt.html"),
        deckEn: resolve(__dirname, "docs/deck/exoframe-html-ppt.en.html")
      }
    }
  }
});
