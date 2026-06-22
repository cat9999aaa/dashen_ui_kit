# Architecture

`dashen_ui_kit` is a reusable UI, prose, motion, and print system.

The system is split into small layers:

- `tokens/base`: stable primitives for surfaces, type, spacing, borders, and motion.
- `tokens/palettes`: one palette per file.
- `tokens/semantic`: current meaning mapped from primitives and active palette.
- `elements`: raw HTML and article formatting.
- `components`: reusable UI shells.
- `motion`: animation primitives.
- `print`: paged media and PDF output.
- `skill`: future Codex skill packaging.

The screen aesthetic can be expressive. The content and print layers must remain readable and reusable.

## Local-Only Asset Rule

Runtime resources must be local. The project rejects CDN and remote runtime URLs through `bun run check:local-assets`.

## Codegraph Rule

Use codegraph MCP when the project has enough modules and call relationships to justify graph inspection. Until then, direct file inspection is clearer.
