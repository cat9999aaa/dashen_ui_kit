import { palettes, getPalette } from "./data/palettes";
import { initCodeCopy } from "./lib/copy-code";
import { initComponentDemos, initModal, initTabs, initToasts } from "./lib/components";
import { initMotion } from "./lib/motion";
import { renderPaletteGallery, syncActivePaletteLabels } from "./lib/palette-gallery";
import { initPrintAction } from "./lib/print";
import { highlightCode } from "./lib/prism";
import { initTerminal } from "./lib/terminal";
import { initThemeToggle } from "./lib/theme";

export { palettes, getPalette };
export type { Palette, PaletteSwatch } from "./data/palettes";
export { initCodeCopy };
export { initComponentDemos, initModal, initTabs, initToasts };
export { initMotion };
export { renderPaletteGallery, syncActivePaletteLabels };
export { initPrintAction };
export { highlightCode };
export { initTerminal };
export { initThemeToggle };

export function initExoframeUI(): void {
  renderPaletteGallery();
  highlightCode();
  initComponentDemos();
  initCodeCopy();
  initPrintAction();
  initTerminal();
  initThemeToggle();
  initMotion();
}
