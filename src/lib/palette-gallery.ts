import { getPalette, palettes } from "../data/palettes";

const paletteStorageKey = "dashen-ui-palette";
let paletteObserver: MutationObserver | undefined;

function swatchStyle(value: string, foreground: string): string {
  return `--swatch-bg:${value};--swatch-fg:${foreground}`;
}

export function syncActivePaletteLabels(): void {
  const root = document.documentElement;
  const palette = getPalette(root.dataset.palette ?? palettes[0].id);
  if (root.dataset.palette !== palette.id) root.dataset.palette = palette.id;

  document.querySelectorAll<HTMLElement>("[data-active-palette-label]").forEach((target) => {
    target.textContent = `${palette.name} / ${palette.cssFile}`;
  });

  document.querySelectorAll<HTMLButtonElement>("[data-activate-palette]").forEach((button) => {
    const isActive = button.dataset.activatePalette === palette.id;
    button.setAttribute("aria-pressed", String(isActive));
    button.textContent = isActive ? "ACTIVE" : "ACTIVATE";
  });
}

export function initStoredPalette(): void {
  const stored = window.localStorage.getItem(paletteStorageKey);
  const palette = getPalette(stored ?? document.documentElement.dataset.palette ?? palettes[0].id);
  document.documentElement.dataset.palette = palette.id;
  syncActivePaletteLabels();
}

export function renderPaletteGallery(): void {
  initStoredPalette();

  const host = document.querySelector<HTMLElement>("[data-palette-gallery]");
  if (!host) {
    if (!paletteObserver) {
      paletteObserver = new MutationObserver(() => syncActivePaletteLabels());
      paletteObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-palette"]
      });
    }
    return;
  }

  host.innerHTML = palettes
    .map(
      (palette) => `
        <div class="panel palette-card" data-label="${palette.name}">
          <div class="palette-actions">
            <span class="palette-file">${palette.cssFile}</span>
            <button class="palette-activate" type="button" data-activate-palette="${palette.id}" aria-pressed="false">ACTIVATE</button>
          </div>
          <p class="palette-description">${palette.description}</p>
          <div class="ramp" aria-label="${palette.name} color ramp">
            ${palette.ramp
              .map(
                (swatch) => `
                  <div class="swatch" style="${swatchStyle(swatch.value, swatch.foreground)}">
                    <span>${swatch.label}</span>
                    <small>${swatch.name}</small>
                  </div>`
              )
              .join("")}
          </div>
          <div class="chip-grid">
            ${palette.accents
              .map(
                (swatch) => `
                  <div class="chip" style="${swatchStyle(swatch.value, swatch.foreground)}">
                    ${swatch.label}<span>${swatch.value}</span>
                  </div>`
              )
              .join("")}
          </div>
        </div>`
    )
    .join("");

  host.addEventListener("click", (event) => {
    const button = (event.target as HTMLElement).closest<HTMLButtonElement>("[data-activate-palette]");
    if (!button?.dataset.activatePalette) return;
    const palette = getPalette(button.dataset.activatePalette);
    document.documentElement.dataset.palette = palette.id;
    window.localStorage.setItem(paletteStorageKey, palette.id);
    syncActivePaletteLabels();
  });

  if (!paletteObserver) {
    paletteObserver = new MutationObserver(() => syncActivePaletteLabels());
    paletteObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-palette"]
    });
  }

  syncActivePaletteLabels();
}
