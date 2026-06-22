export function initCodeCopy(): void {
  document.querySelectorAll<HTMLButtonElement>("[data-copy-code]").forEach((button) => {
    button.addEventListener("click", async () => {
      const shell = button.closest(".code-shell");
      const code = shell?.querySelector("code")?.textContent ?? "";
      try {
        await navigator.clipboard.writeText(code);
        button.textContent = "COPIED";
        window.setTimeout(() => {
          button.textContent = "COPY";
        }, 1200);
      } catch {
        button.textContent = "FAILED";
      }
    });
  });
}
