# dashen_ui_kit

Reusable local-only EXOFRAME UI kit for cool terminal/CRT/ASCII screens, prose, motion, palette modules, print/PDF output, and future Codex skill reuse.

[Live Demo](https://uiskill.dashen.wang/) · [Usage](https://uiskill.dashen.wang/usage.html) · [API](https://uiskill.dashen.wang/api.html) · [Palettes](https://uiskill.dashen.wang/palettes.html) · [Demos](https://uiskill.dashen.wang/components.html) · [Skill](https://uiskill.dashen.wang/skill.html) · [Theme Builder](https://uiskill.dashen.wang/theme-builder.html) · [About](https://uiskill.dashen.wang/about.html) · [English](https://uiskill.dashen.wang/en.html) · [HTML PPT](https://uiskill.dashen.wang/docs/deck/exoframe-html-ppt.html)

![EXOFRAME showcase](docs/assets/showcase-amethyst.png)

## About

`dashen_ui_kit` is built by **王大神 · dashen**, the self-described strict father of AI: legislator, architect, Stanley Team co-founder, and technical lead. The project is not a throwaway demo. It is a reusable UI shell for GitHub demos, Codex skills, HTML decks, theme systems, and local-first product surfaces.

Dashen's background spans reverse engineering, vulnerability research, 2000+ PBN nodes, the TradeV7 quant system, Hermes Agent, OpenTSC, and the x-plan AI content factory. The operating principle behind this kit is the same one behind his TSC thinking: technology can be copied, relationships and rules cannot.

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
- Multilingual Pages surfaces for Chinese and English overview, usage, API, palettes, demos, skill, theme builder, about, docs, and HTML PPT.
- Local docs site at `docs/site/`.
- HTML PPT deck at `docs/deck/exoframe-html-ppt.html`.
- Independent palette system with 10 palettes.
- Terminal, CRT, ASCII, article, code, component, motion, print, and PDF-oriented layers.
- Future Codex skill draft in `skill/`, including an EXOFRAME HTML presentation workflow reference.
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
- `Multi-page Showcase`: Splits the front-end site into multilingual overview, usage, API, palettes, component demos, skill, theme builder, and about pages with persistent palette/theme controls.
