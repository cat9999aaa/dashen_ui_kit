export function initTabs(): void {
  document.querySelectorAll<HTMLElement>("[data-tabs]").forEach((root) => {
    const buttons = [...root.querySelectorAll<HTMLButtonElement>("[role='tab']")];
    const panels = [...root.querySelectorAll<HTMLElement>("[role='tabpanel']")];

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        buttons.forEach((item) => item.setAttribute("aria-selected", String(item === button)));
        panels.forEach((panel) => {
          panel.hidden = panel.id !== button.getAttribute("aria-controls");
        });
      });
    });
  });
}

export function initModal(): void {
  const modal = document.querySelector<HTMLElement>("[data-modal]");
  if (!modal) return;

  const openButtons = document.querySelectorAll<HTMLButtonElement>("[data-open-modal]");
  const closeButtons = modal.querySelectorAll<HTMLButtonElement>("[data-close-modal]");
  const open = () => {
    modal.hidden = false;
    modal.querySelector<HTMLElement>("[data-close-modal]")?.focus();
  };
  const close = () => {
    modal.hidden = true;
  };

  openButtons.forEach((button) => button.addEventListener("click", open));
  closeButtons.forEach((button) => button.addEventListener("click", close));
  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) close();
  });
}

export function initToasts(): void {
  const stack = document.querySelector<HTMLElement>("[data-toast-stack]");
  const trigger = document.querySelector<HTMLButtonElement>("[data-show-toast]");
  if (!stack || !trigger) return;

  trigger.addEventListener("click", () => {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = "<strong>SIGNAL RECEIVED</strong>Local component event emitted.";
    stack.appendChild(toast);
    window.setTimeout(() => toast.remove(), 2600);
  });
}

export function initComponentDemos(): void {
  initTabs();
  initModal();
  initToasts();
}
