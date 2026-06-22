# dashen_ui_kit

Original retro-futurist UI, prose, motion, and print system for reusable front-end work. The visual system currently uses the EXOFRAME concept as its first theme direction.

The project is intentionally IP-safe: it studies terminal, CRT, ASCII, instrumentation, and warning-system design language without using third-party franchise names, logos, character references, or copied assets.

## Current Shape

- `src/styles/tokens/` holds design tokens and palette modules.
- `src/styles/elements/` holds raw HTML/article formatting.
- `src/styles/components/` holds reusable UI component styles.
- `src/styles/motion/` holds animation primitives.
- `src/styles/print/` holds PDF/print formatting.
- `src/lib/` holds local runtime behavior.
- `docs/DEVLOG.md` records development steps.
- `skill/` is a future Codex skill draft, kept small by design.

## Local-Only Policy

No CDN dependencies. Fonts, syntax highlighting, animation libraries, and runtime code must be installed locally or committed as project assets.

## Development

```bash
bun install
bun run dev
```

Use browser verification for layout and interaction. Use PDF/document verification when changing print or document export behavior.

## Repository Name

Use `dashen_ui_kit` for the GitHub repository and `dashen-ui-kit` for package naming.
