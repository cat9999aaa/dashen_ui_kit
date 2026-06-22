import { mkdirSync, writeFileSync } from "node:fs";
import { absoluteUrl, alternatesFor, pages, site } from "./seo-data.mjs";

mkdirSync("public", { recursive: true });

const today = new Date().toISOString().slice(0, 10);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (page) => `  <url>
    <loc>${absoluteUrl(page.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.path === "" ? "1.0" : "0.8"}</priority>
${alternatesFor(page)
  .map((alternate) => `    <xhtml:link rel="alternate" hreflang="${alternate.lang}" href="${alternate.href}" />`)
  .join("\n")}
  </url>`
  )
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${absoluteUrl("sitemap.xml")}
`;

const llms = `# ${site.name}

${site.description}

## Primary URLs

- Showcase: ${absoluteUrl("")}
- English showcase: ${absoluteUrl("en.html")}
- Usage: ${absoluteUrl("usage.html")}
- English usage: ${absoluteUrl("usage.en.html")}
- API: ${absoluteUrl("api.html")}
- English API: ${absoluteUrl("api.en.html")}
- Palettes: ${absoluteUrl("palettes.html")}
- English palettes: ${absoluteUrl("palettes.en.html")}
- Component demos: ${absoluteUrl("components.html")}
- English component demos: ${absoluteUrl("components.en.html")}
- Codex skill: ${absoluteUrl("skill.html")}
- English Codex skill: ${absoluteUrl("skill.en.html")}
- Theme builder: ${absoluteUrl("theme-builder.html")}
- English theme builder: ${absoluteUrl("theme-builder.en.html")}
- About Dashen: ${absoluteUrl("about.html")}
- English about Dashen: ${absoluteUrl("about.en.html")}
- Component docs: ${absoluteUrl("docs/site/")}
- English component docs: ${absoluteUrl("docs/site/en.html")}
- HTML PPT example: ${absoluteUrl("docs/deck/exoframe-html-ppt.html")}
- English HTML PPT example: ${absoluteUrl("docs/deck/exoframe-html-ppt.en.html")}

## What This Project Is

- Local-only front-end UI kit.
- Original EXOFRAME visual language.
- Terminal, CRT, ASCII, prose, code, motion, print, and HTML deck surfaces.
- Independent palette modules and typed package exports.
- Installable Codex skill at \`skill/\`.

## Use Cases

- Build a retro-futurist local UI.
- Reuse palette-driven components.
- Create browser-native HTML PPT decks instead of .pptx files.
- Install \`$exoframe-ui\` as a local Codex skill.
`;

const full = `${llms}
## Package

- Name: dashen-ui-kit
- Version: 0.2.0
- CSS export: dashen-ui-kit/styles.css
- TypeScript entry: src/index.ts

## Important Local Files

- README.zh-CN.md: Chinese guide.
- README.en.md: English guide.
- en.html: English showcase page.
- usage.html / usage.en.html: install and validation pages.
- api.html / api.en.html: package API overview pages.
- palettes.html / palettes.en.html: site-wide palette switching pages.
- components.html / components.en.html: component demo lab.
- skill.html / skill.en.html: Codex skill installation and workflow pages.
- theme-builder.html / theme-builder.en.html: custom palette builder pages.
- about.html / about.en.html: Dashen authority page.
- docs/site/en.html: English component docs page.
- docs/deck/exoframe-html-ppt.en.html: English HTML PPT page.
- docs/reference/api.md: package API.
- docs/reference/palette-quality.md: palette matrix.
- docs/how-to/html-ppt.md: HTML deck usage.
- skill/SKILL.md: Codex skill entry.
- skill/references/ppt-workflow.md: HTML PPT workflow for the skill.

## Constraints

- No CDN runtime assets.
- No copied franchise IP.
- HTML PPT output only; do not create .pptx unless the user explicitly changes the project direction.
- ASCII blocks must remain equal width.
`;

writeFileSync("public/sitemap.xml", sitemap);
writeFileSync("public/robots.txt", robots);
writeFileSync("public/llms.txt", llms);
writeFileSync("public/llms-full.txt", full);
writeFileSync("public/ai.txt", full);

console.log("Generated GEO files in public/.");
