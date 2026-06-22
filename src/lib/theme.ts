export function initThemeToggle(): void {
  const button = document.querySelector<HTMLButtonElement>("#theme-toggle");
  if (!button) return;

  const syncLabel = () => {
    button.textContent = document.documentElement.dataset.theme === "paper" ? "VOID" : "PAPER";
  };

  button.addEventListener("click", () => {
    const root = document.documentElement;
    root.dataset.theme = root.dataset.theme === "paper" ? "void" : "paper";
    syncLabel();
  });

  syncLabel();
}
