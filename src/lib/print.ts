export function initPrintAction(): void {
  document.querySelectorAll<HTMLButtonElement>("[data-print-page]").forEach((button) => {
    button.addEventListener("click", () => {
      window.print();
    });
  });
}
