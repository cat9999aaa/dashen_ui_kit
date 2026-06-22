import { palettes } from "../data/palettes";

function swatchStyle(value: string, foreground: string): string {
  return `--swatch-bg:${value};--swatch-fg:${foreground}`;
}

export function renderPaletteGallery(): void {
  const host = document.querySelector<HTMLElement>("[data-palette-gallery]");
  if (!host) return;

  host.innerHTML = palettes
    .map(
      (palette) => `
        <div class="panel palette-card" data-label="${palette.name}">
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
}
