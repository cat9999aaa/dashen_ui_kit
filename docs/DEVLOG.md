# Development Log

## 2026-06-22

- Read exported Claude conversation and confirmed the project direction:
  - original IP-safe terminal/CRT/ASCII-inspired UI system;
  - reusable front-end elements and components;
  - strong article typography, code highlighting, and print/PDF output;
  - one palette at a time;
  - future Codex skill packaging.
- Inspected the current workspace:
  - only `exoframe-concept.html` existed;
  - workspace was not yet a git repository;
  - the concept page still used Google Fonts and cdnjs Prism scripts.
- Confirmed local tooling:
  - `gh 2.62.0`;
  - `git 2.53.0`;
  - Node `22.22.2`;
  - npm `10.9.7`;
  - Bun `1.3.14`.
- Confirmed package names/versions from npm registry before writing config:
  - `@fontsource/inter 5.2.8`;
  - `@fontsource/jetbrains-mono 5.2.8`;
  - `@fontsource/shippori-mincho-b1 5.2.8`;
  - `prismjs 1.30.0`;
  - `gsap 3.15.0`;
  - `vite 8.0.16`;
  - `typescript 6.0.3`.
- Added project rules and a future skill draft path.
- Created a local-only Vite project:
  - added `package.json`, `tsconfig.json`, and `.gitignore`;
  - installed all fonts, Prism, GSAP, Vite, and TypeScript locally with Bun;
  - added `scripts/check-local-assets.mjs` to reject remote runtime references.
- Replaced the remote single-file concept with modular runtime files:
  - `index.html` is now the active showcase entry;
  - old `exoframe-concept.html` now points to the local project entry;
  - added a local SVG favicon.
- Split CSS into minimal modules:
  - base tokens: surface, type, space, border, motion;
  - palette module: `01-amethyst`;
  - semantic token map;
  - CRT, status bar, panel, button, badge, and form components;
  - article, blockquote, list, table, rule, and code element styles;
  - print stylesheet.
- Split runtime behavior into small modules:
  - local Prism highlighting;
  - terminal REPL;
  - theme toggle;
  - code copy buttons.
- Verification:
  - `bun run check` passed;
  - browser opened `http://127.0.0.1:5173/`;
  - console had no current errors after adding local favicon;
  - terminal command `palette` produced the expected color output;
  - theme toggle changed the active theme;
  - build passed.
- Follow-up noted:
  - `@fontsource/shippori-mincho-b1` produces a large bundled font surface; consider local subsetting before production.
- Final pass updates:
  - aligned package name with the approved repo direction: `dashen-ui-kit`;
  - moved print button behavior out of inline HTML and into `src/lib/print.ts`.

## v0.1 Baseline Push

- Data-driven palette rendering:
  - added `src/data/palettes.ts`;
  - added `src/lib/palette-gallery.ts`;
  - removed hard-coded color ramp markup from the showcase.
- Expanded component coverage:
  - alerts, cards, tabs, accordion, modal, toast, tooltip, progress, breadcrumb, pagination, switch controls, and nav.
- Expanded article element coverage:
  - callouts, figures, details, footnotes, and asides.
- Added runtime behavior modules:
  - component demos for tabs, modal, and toast;
  - GSAP-backed motion entry with reduced-motion guard.
- Strengthened docs:
  - architecture explanation;
  - module reference;
  - PDF export how-to.
- Strengthened future skill packaging:
  - design rules reference;
  - module map reference;
  - starter showcase template asset.

## Independent Palette System

- Reworked palette architecture so base/components consume semantic variables and palette files expose raw `--palette-*` values only.
- Added `src/styles/tokens/palette-system.css` as the mapping layer between active palette and UI semantics.
- Added ten independent palette modules:
  - `01-amethyst`;
  - `02-azure`;
  - `03-scarlet`;
  - `04-obsidian`;
  - `05-argent`;
  - `06-osseous`;
  - `07-amber`;
  - `08-phosphor`;
  - `09-hazard`;
  - `10-monochrome`.
- Updated the showcase palette gallery to activate palettes from `src/data/palettes.ts`.
- Updated terminal `palette` command to read the active palette instead of hard-coded colors.
- Moved code block and syntax colors onto semantic variables.
- Added multilingual README entry points: Chinese and English.
- Updated architecture docs, module reference, and future skill references with palette independence rules.

## Docs And Skill Polish

- Added README screenshot placement and expanded Chinese/English usage guides:
  - quick start;
  - validation commands;
  - module adoption order;
  - theme and palette switching;
  - palette list;
  - skill usage;
  - changelog.
- Added `scripts/check-ascii.mjs`:
  - validates `pre.ascii-wordmark` display widths;
  - validates fenced ASCII blocks with box/block characters;
  - rejects tabs and trailing whitespace inside checked ASCII blocks.
- Added `check:types`, `check:ascii`, and a stricter `check` chain to `package.json`.
- Expanded local asset scanning to include docs and skill HTML/CSS/JS assets.
- Corrected the EXOFRAME ASCII wordmark so all visible rows are equal width.
- Updated the future skill draft:
  - expanded trigger description for front-end showcase and deck work;
  - added PPT/deck output as a first-class surface;
  - added `skill/references/ppt-workflow.md`;
  - documented that EXOFRAME presentation output is browser-native HTML, not `.pptx`.

## v0.2 Full-Form Push

- Started converting the remaining roadmap into concrete project surfaces.
- Added installable skill metadata at `skill/agents/openai.yaml`.
- Added `scripts/install-skill.mjs` and `bun run skill:install` to copy the skill to `${CODEX_HOME:-~/.codex}/skills/exoframe-ui`.
- Added `check:skill` to validate `skill/SKILL.md`.
- Replaced the old `.pptx` wording with an HTML deck workflow because EXOFRAME PPT output should be HTML, not PowerPoint binary.
- Added Vite multi-entry build for showcase, docs site, and HTML PPT.
- Added `src/index.ts` as the typed package export surface.
- Added `docs/reference/api.md`, `docs/how-to/html-ppt.md`, and `docs/how-to/docs-site.md`.
- Switched font imports to subsetted `latin-*` CSS files and added `check:font-imports`.
- Added `check:palettes` to keep all ten palettes aligned with the manifest and variable contract.
- Added `docs/reference/palette-quality.md` to record the role and checked status of every palette.

## GitHub Pages And GEO

- Added GitHub Pages deployment workflow for `main`.
- Added GitHub Pages base path handling with `GITHUB_PAGES=true`.
- Added generated GEO files:
  - `robots.txt`;
  - `sitemap.xml`;
  - `llms.txt`;
  - `llms-full.txt`;
  - `ai.txt`.
- Added multilingual metadata, canonical links, Open Graph, Twitter cards, `hreflang`, and JSON-LD to the showcase, docs site, and HTML PPT.
- Added direct English HTML entry points for showcase, docs, and HTML PPT:
  - `en.html`;
  - `docs/site/en.html`;
  - `docs/deck/exoframe-html-ppt.en.html`.
- Added `check:geo` to validate generated GEO files and page metadata.
