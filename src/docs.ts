import "./styles/main.css";
import { highlightCode } from "./lib/prism";
import { initCodeCopy } from "./lib/copy-code";
import { initThemeToggle } from "./lib/theme";
import { renderPaletteGallery } from "./lib/palette-gallery";

renderPaletteGallery();
highlightCode();
initCodeCopy();
initThemeToggle();
