# dashen_ui_kit

`dashen_ui_kit` is a local-only, reusable, visually intense front-end UI kit draft. The current direction is EXOFRAME: terminal, CRT, ASCII, instrument panels, bold palettes, prose formatting, code highlighting, motion, print/PDF output, and future Codex skill reuse in one system.

[Live Demo](https://uiskill.dashen.wang/) · [English Demo](https://uiskill.dashen.wang/en.html) · [Docs](https://uiskill.dashen.wang/docs/site/) · [English Docs](https://uiskill.dashen.wang/docs/site/en.html) · [HTML PPT](https://uiskill.dashen.wang/docs/deck/exoframe-html-ppt.html)

![EXOFRAME showcase](docs/assets/showcase-amethyst.png)

EXOFRAME is an original visual language. It does not use third-party franchise names, logos, character references, copied interface graphics, or copied assets.

## About

`dashen_ui_kit` is built by **王大神 · dashen**, the self-described strict father of AI: legislator, architect, Stanley Team co-founder, and technical lead. The project is not a throwaway demo. It is a reusable UI shell for GitHub demos, Codex skills, HTML decks, theme systems, and local-first product surfaces.

Dashen's background spans reverse engineering, vulnerability research, 2000+ PBN nodes, the TradeV7 quant system, Hermes Agent, OpenTSC, and the x-plan AI content factory. The operating principle behind this kit is the same one behind his TSC thinking: technology can be copied, relationships and rules cannot.

## Principles

- No CDN runtime assets. Fonts, Prism, GSAP, and runtime code are local dependencies.
- Base components and palettes stay separate. Components consume semantic variables such as `--color-*`, `--code-*`, and `--syntax-*`.
- Each palette lives in its own file under `src/styles/tokens/palettes/`.
- Adding a palette should not require component edits.
- Prose, print/PDF, and HTML presentation output are first-class surfaces.
- `skill/` is a small draft for future Codex skill packaging.
- ASCII wordmarks, diagrams, and terminal art must be equal-width and automatically checked.

## Quick Start

```bash
bun install
bun run dev
bun run check
```

The Vite showcase runs locally, usually at `http://127.0.0.1:5173/`.

## Commands

```bash
bun run dev
bun run check:types
bun run check:ascii
bun run check:local-assets
bun run check:skill
bun run check:palettes
bun run check:geo
bun run build
bun run check
```

- `check:types`: TypeScript validation.
- `check:ascii`: ASCII alignment, tab, and trailing whitespace validation.
- `check:local-assets`: rejects CDN, Google Fonts, unpkg, jsDelivr, and similar remote runtime references.
- `check:skill`: validates `skill/SKILL.md` frontmatter.
- `check:palettes`: validates palette variables and manifest entries.
- `check:geo`: validates sitemap, robots, llms files, and multilingual metadata.
- `build`: production Vite build.
- `check`: full validation chain.

## Structure

- `src/styles/tokens/base/`: stable base tokens.
- `src/styles/tokens/palettes/`: independent palette modules.
- `src/styles/tokens/palette-system.css`: maps the active palette to semantic variables.
- `src/styles/tokens/semantic.css`: project semantic layer.
- `src/styles/elements/`: raw HTML, prose, code, and content formatting.
- `src/styles/components/`: reusable component shells.
- `src/styles/motion/`: motion primitives.
- `src/styles/print/`: print and PDF output.
- `src/data/palettes.ts`: palette manifest and showcase data.
- `src/lib/`: local runtime behavior.
- `src/index.ts`: typed package export.
- `docs/site/`: local component docs site.
- `docs/site/en.html`: English component docs entry.
- `docs/deck/`: HTML PPT example.
- `docs/DEVLOG.md`: development log.
- `skill/`: future skill draft.

## Usage

### Showcase

1. Run `bun run dev`.
2. Open `http://127.0.0.1:5173/`.
3. Use the palette controls to switch palettes.
4. Use the `PAPER` toggle for screen/paper themes.
5. Type `help` or `palette` in the terminal demo to test local behavior.

### Another Front-End Project

Copy modules in this order:

```text
tokens/base
tokens/palettes/one-active-palette.css
tokens/palette-system.css
tokens/semantic.css
elements or components
motion
print
```

Components should only depend on semantic variables such as `--color-primary`, `--color-card`, `--code-bg`, and `--syntax-keyword`. Do not make components depend on concrete palette names such as `amethyst` or `azure`.

### Package Usage

```ts
import "dashen-ui-kit/styles.css";
import { initExoframeUI, palettes } from "dashen-ui-kit";

initExoframeUI();
console.log(palettes);
```

API docs live in `docs/reference/api.md`.
The palette quality matrix lives in `docs/reference/palette-quality.md`.

### Local Docs Site

```text
http://127.0.0.1:5173/docs/site/
```

### HTML PPT

```text
http://127.0.0.1:5173/docs/deck/exoframe-html-ppt.html
```

This PPT is an HTML slide deck, not a `.pptx` file.

### Palette And Theme

```html
<html data-theme="void" data-palette="amethyst"></html>
```

- `data-theme="void"`: dark terminal surface.
- `data-theme="paper"`: light reading and print surface.
- `data-palette="amethyst"`: active independent palette.

## Palettes

The kit currently ships with 10 palettes:

- `01-amethyst.css`: violet phosphor, green activation, amber signal.
- `02-azure.css`: cold blue instrumentation with cyan activation.
- `03-scarlet.css`: red tactical shell with orange signal.
- `04-obsidian.css`: black frame with acid activation.
- `05-argent.css`: silver utility interface.
- `06-osseous.css`: bone-white surface with mineral blue.
- `07-amber.css`: classic amber terminal.
- `08-phosphor.css`: green phosphor terminal.
- `09-hazard.css`: yellow-black warning system.
- `10-monochrome.css`: black-and-white minimal system.

## Adding A Palette

1. Add metadata, ramp colors, and accents in `src/data/palettes.ts`.
2. Add `src/styles/tokens/palettes/NN-name.css`.
3. Import the new palette file from `src/styles/main.css`.
4. Expose only `--palette-*` variables from the palette file.
5. Run `bun run check` and verify palette switching in the browser.

## Skill Usage

`skill/` is the future Codex skill draft:

- `skill/SKILL.md`: main EXOFRAME skill instructions.
- `skill/references/design-rules.md`: visual and naming rules.
- `skill/references/module-map.md`: module adoption order.
- `skill/agents/openai.yaml`: Codex skill display metadata.
- `skill/references/ppt-workflow.md`: HTML presentation workflow using this UI system.
- `skill/assets/showcase-template/`: local-only starter template.
- `skill/assets/html-deck-template/`: HTML PPT template.

When a user asks for a PPT, presentation, report deck, or slide template using this UI, the skill routes Codex to `ppt-workflow.md` and creates an HTML slide deck instead of a `.pptx` file. It forbids CDN assets and requires browser QA for overlap, clipping, wrapping, contrast, and ASCII alignment.

Install into local Codex:

```bash
bun run skill:install
```

## ASCII Validation

Run `bun run check:ascii` after editing ASCII content. It validates:

- Equal display width for `pre.ascii-wordmark`.
- Equal display width for `text`/`txt`/`ascii` fenced blocks that contain box or block characters.
- No tabs.
- No trailing whitespace.

## Local-Only Policy

`scripts/check-local-assets.mjs` scans for remote runtime references. `https://`, cdnjs, Google Fonts, unpkg, jsDelivr, and similar remote runtime dependencies fail the check. Local documentation images such as `docs/assets/showcase-amethyst.png` are allowed.

## GEO / SEO

- GitHub Pages URL: `https://uiskill.dashen.wang/`.
- `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt`, `public/llms-full.txt`, and `public/ai.txt` are generated with `bun run geo:generate`.
- Pages include canonical links, Open Graph, Twitter cards, JSON-LD, and `hreflang`.
- The Chinese page is the primary entry; `en.html`, `docs/site/en.html`, and `docs/deck/exoframe-html-ppt.en.html` are directly accessible English pages.

## Changelog

- `2026-06-22`: Read the Claude conversation, confirmed the direction, created the local Vite project, and replaced remote fonts/CDN Prism with local dependencies.
- `v0.1 Baseline Push`: Added data-driven palette gallery, components, article elements, GSAP motion entry, print/PDF docs, architecture docs, and skill draft.
- `Independent Palette System`: Split base/components from 10 independent palette modules and added `palette-system.css` as the mapping layer.
- `Docs And Skill Polish`: Added README screenshot, full usage notes, PPT workflow, ASCII validation, broader local asset scanning, and the full validation command chain.
- `v0.2 Full-Form Push`: Adds installable skill metadata, HTML PPT, docs site, package exports, API docs, and font subset checks.
- `GitHub Pages And GEO`: Adds Pages deployment, sitemap/robots/llms/ai files, and zh/en showcase, docs, and HTML PPT entry points.
