# Component API

`dashen-ui-kit` exposes local CSS plus small TypeScript helpers. The CSS is the primary product; the runtime helpers wire up optional demos and interactions.

## Package Imports

```ts
import "dashen-ui-kit/styles.css";
import {
  getPalette,
  initCodeCopy,
  initComponentDemos,
  initExoframeUI,
  initMotion,
  initPrintAction,
  initTerminal,
  initThemeToggle,
  palettes
} from "dashen-ui-kit";
```

## Exports

- `initExoframeUI()`: initializes palette gallery, Prism highlighting, component demos, copy buttons, print button, terminal, theme toggle, and motion.
- `initComponentDemos()`: initializes tabs, modal, and toast demos.
- `initTabs()`: wires `[data-tabs]` groups.
- `initModal()`: wires `[data-modal]`, `[data-open-modal]`, and `[data-close-modal]`.
- `initToasts()`: wires `[data-toast-stack]` and `[data-show-toast]`.
- `initCodeCopy()`: wires `[data-copy-code]` buttons inside `.code-shell`.
- `initMotion()`: runs GSAP entry animation with reduced-motion guard.
- `initPrintAction()`: wires `[data-print-page]`.
- `initTerminal()`: wires `#terminal-log` and `#command-input`.
- `initThemeToggle()`: wires `#theme-toggle`.
- `renderPaletteGallery()`: renders `[data-palette-gallery]`.
- `syncActivePaletteLabels()`: updates `[data-active-palette-label]`.
- `palettes`: palette manifest.
- `getPalette(id)`: returns a palette by id, falling back to the first palette.

## CSS Contracts

Use these attributes at the document root:

```html
<html data-theme="void" data-palette="amethyst"></html>
```

Use these host attributes for optional runtime behavior:

```html
<div data-palette-gallery></div>
<button id="theme-toggle" type="button">PAPER</button>
<button data-copy-code type="button">COPY</button>
<button data-print-page type="button">PRINT</button>
```

## Build Output

```bash
bun run build
```

The package emits type declarations and JavaScript under `dist/library/` and builds all browser entries with Vite.
