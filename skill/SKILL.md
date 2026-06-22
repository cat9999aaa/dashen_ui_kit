---
name: exoframe-ui
description: Use when building IP-safe retro-futurist UI, article typography, syntax highlighting, motion, print/PDF styles, or palette modules based on the EXOFRAME design system.
---

# EXOFRAME UI

Build with the EXOFRAME system when a project needs original terminal/CRT/ASCII-inspired UI, strong prose formatting, local-only assets, and print/PDF readiness.

## Core Rules

- Do not use franchise names, logos, copied interface graphics, character references, or third-party IP.
- Do not use CDN assets. Use local packages or bundled assets.
- Keep modules small: tokens, palettes, elements, components, motion, and print stay separate.
- Keep palette files independent from components. Components consume semantic variables only.
- Treat article typography and print output as first-class surfaces.
- Respect `prefers-reduced-motion`.

## Workflow

1. Choose one palette module.
2. Load base tokens, the chosen palette, `palette-system.css`, semantic tokens, elements, components, motion, and print layers separately.
3. Verify screen UI in a browser.
4. Verify print/PDF output when prose or print styles change.

## Resources

- Read `references/design-rules.md` before making visual or naming decisions.
- Read `references/module-map.md` before copying modules into another project.
- Use `assets/showcase-template/` as a minimal local-only starter when a target project needs a demo shell.
