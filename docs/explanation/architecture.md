# Architecture

`dashen_ui_kit` is a reusable UI, prose, motion, and print system.

The system is split into small layers:

- `tokens/base`: stable primitives for surfaces, type, spacing, borders, and motion.
- `tokens/palettes`: one palette per file.
- `tokens/palette-system.css`: maps the active palette to semantic variables.
- `tokens/semantic`: cross-cutting semantic aliases derived from the mapped variables.
- `elements`: raw HTML and article formatting.
- `components`: reusable UI shells.
- `motion`: animation primitives.
- `print`: paged media and PDF output.
- `docs/site`: local documentation site.
- `docs/deck`: HTML PPT output.
- `skill`: installable Codex skill packaging.
- `src/index.ts`: typed package export surface.

The screen aesthetic can be expressive. The content and print layers must remain readable and reusable.

## Palette Independence

The base/system layer and the palette layer are intentionally separate:

- Components and elements consume semantic variables such as `--color-primary`, `--color-line`, `--code-bg`, and `--syntax-keyword`.
- Palette files expose raw `--palette-*` variables only.
- `tokens/palette-system.css` is the bridge between a selected palette and semantic usage.
- A component or layout change should not require editing every palette file.
- A new palette should require one new palette file, one data entry in `src/data/palettes.ts`, and one import from `src/styles/main.css`.

This keeps future UI growth manageable. The component layer can evolve as one system, while color directions remain swappable modules.

## Local-Only Asset Rule

Runtime resources must be local. The project rejects CDN and remote runtime URLs through `bun run check:local-assets`.

## Package Shape

The package exposes a small TypeScript API through `src/index.ts` and builds declarations into `dist/library/`. CSS remains the primary integration surface through `dashen-ui-kit/styles.css`.

## HTML Deck Output

Presentation output is browser-native HTML. The HTML deck entry supports keyboard navigation, print media, and the same token/palette system as the app.

## Font Size Strategy

Fontsource imports are subset imports such as `latin-400.css`, not broad weight imports such as `400.css`. CJK text falls back to local system fonts so the build does not bundle the full Japanese font surface by default.

## Codegraph Rule

Use codegraph MCP when the project has enough modules and call relationships to justify graph inspection. Until then, direct file inspection is clearer.
