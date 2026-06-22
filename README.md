# dashen_ui_kit

Reusable local-only EXOFRAME UI kit for cool terminal/CRT/ASCII screens, prose, motion, palette modules, print/PDF output, and future Codex skill reuse.

[Live Demo](https://cat9999aaa.github.io/dashen_ui_kit/) · [English Demo](https://cat9999aaa.github.io/dashen_ui_kit/en.html) · [Docs](https://cat9999aaa.github.io/dashen_ui_kit/docs/site/) · [English Docs](https://cat9999aaa.github.io/dashen_ui_kit/docs/site/en.html) · [HTML PPT](https://cat9999aaa.github.io/dashen_ui_kit/docs/deck/exoframe-html-ppt.html)

![EXOFRAME showcase](docs/assets/showcase-amethyst.png)

## Languages

- [简体中文](README.zh-CN.md)
- [English](README.en.md)

## Quick Start

```bash
bun install
bun run dev
bun run check
```

Default local URL: `http://127.0.0.1:5173/`

## What Is Included

- Local Vite front-end showcase with no CDN runtime assets.
- GitHub Pages deployment workflow.
- GEO files for AI/search indexing: `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, and `ai.txt`.
- Multilingual Pages surfaces for Chinese and English showcase, docs, and HTML PPT.
- Local docs site at `docs/site/`.
- HTML PPT deck at `docs/deck/exoframe-html-ppt.html`.
- Independent palette system with 10 palettes.
- Terminal, CRT, ASCII, article, code, component, motion, print, and PDF-oriented layers.
- Future Codex skill draft in `skill/`, including an EXOFRAME PowerPoint workflow reference.
- Installable `$exoframe-ui` skill metadata and local install script.
- Validation scripts for TypeScript, local assets, ASCII alignment, and production build.
- Typed package exports through `src/index.ts`.

## Documentation

- Chinese full guide: `README.zh-CN.md`
- English full guide: `README.en.md`
- Development log: `docs/DEVLOG.md`
- Project rules: `docs/PROJECT_RULES.md`
- Architecture notes: `docs/explanation/architecture.md`
- Module reference: `docs/reference/modules.md`
- Palette quality matrix: `docs/reference/palette-quality.md`

## Changelog

- `2026-06-22`: Created local-only Vite baseline from the EXOFRAME concept.
- `v0.1`: Added reusable components, article elements, motion, print styles, and future skill draft.
- `Independent Palette System`: Split base/components from 10 independent palette modules.
- `Docs And Skill Polish`: Added README screenshot, full usage notes, PPT workflow, ASCII alignment check, and stronger validation.
- `v0.2`: Adds installable skill metadata, HTML PPT workflow, docs/deck/library surfaces, and font-size controls.
- `GitHub Pages And GEO`: Adds Pages deployment, sitemap/robots/llms/ai files, and zh/en HTML entry points.
