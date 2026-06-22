# dashen_ui_kit

`dashen_ui_kit` is a local-only reusable front-end UI kit draft. It includes terminal/CRT/ASCII-inspired interface styles, prose formatting, syntax highlighting, motion, print/PDF output, and independent palette modules.

The current showcase direction is called EXOFRAME. It is an original visual language and does not use third-party franchise names, logos, character references, copied interface graphics, or copied assets.

## Principles

- No CDN runtime assets. Fonts, Prism, GSAP, and runtime code are local dependencies.
- Base components and palettes are separate. Components consume semantic variables such as `--color-*`, `--code-*`, and `--syntax-*`.
- Each palette lives in its own file under `src/styles/tokens/palettes/`.
- Adding a palette should not require component edits.
- Prose and print/PDF output are first-class layers.
- `skill/` is a small draft for future Codex skill packaging.

## Structure

- `src/styles/tokens/base/`: stable base tokens.
- `src/styles/tokens/palettes/`: independent palette modules.
- `src/styles/tokens/palette-system.css`: maps the active palette to semantic variables.
- `src/styles/elements/`: raw HTML, prose, code, and content formatting.
- `src/styles/components/`: reusable component shells.
- `src/styles/motion/`: motion primitives.
- `src/styles/print/`: print and PDF output.
- `src/data/palettes.ts`: palette manifest and showcase data.
- `src/lib/`: local runtime behavior.
- `docs/DEVLOG.md`: development log.
- `skill/`: future skill draft.

## Development

```bash
bun install
bun run dev
bun run check
bun run check:local-assets
bun run build
```

The Vite showcase runs locally, usually at `http://127.0.0.1:5173/`.

## Adding A Palette

1. Add metadata, ramp colors, and accents in `src/data/palettes.ts`.
2. Add `src/styles/tokens/palettes/NN-name.css`.
3. Import the new palette file from `src/styles/main.css`.
4. Expose only `--palette-*` variables from the palette file.
5. Run `bun run check` and verify palette switching in the browser.

## Local-Only Policy

`scripts/check-local-assets.mjs` scans for remote runtime references. `https://`, cdnjs, Google Fonts, unpkg, jsDelivr, and similar remote runtime dependencies fail the check.
