import { syncActivePaletteLabels } from "./palette-gallery";

const themeStorageKey = "dashen-ui-theme";

export function initThemeToggle(): void {
  const stored = window.localStorage.getItem(themeStorageKey);
  if (stored === "paper" || stored === "void") {
    document.documentElement.dataset.theme = stored;
  }

  const button = document.querySelector<HTMLButtonElement>("#theme-toggle");
  if (!button) {
    syncActivePaletteLabels();
    return;
  }

  const syncLabel = () => {
    button.textContent = document.documentElement.dataset.theme === "paper" ? "VOID" : "PAPER";
  };

  button.addEventListener("click", () => {
    const root = document.documentElement;
    root.dataset.theme = root.dataset.theme === "paper" ? "void" : "paper";
    window.localStorage.setItem(themeStorageKey, root.dataset.theme);
    syncLabel();
    syncActivePaletteLabels();
  });

  syncLabel();
}
