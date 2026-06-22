const mobileScreens = ["overview", "usage", "palettes", "demos", "skill"];

function preferredLocale(): "zh" | "en" {
  const stored = window.localStorage.getItem("dashen-ui-locale");
  if (stored === "zh" || stored === "en") return stored;
  const languages = navigator.languages?.length ? navigator.languages : [navigator.language];
  return languages.some((language) => language.toLowerCase().startsWith("zh")) ? "zh" : "en";
}

function initLocaleRouting(): void {
  document.querySelectorAll<HTMLAnchorElement>("[data-locale-link]").forEach((link) => {
    link.addEventListener("click", () => {
      const locale = link.dataset.localeLink;
      if (locale === "zh" || locale === "en") window.localStorage.setItem("dashen-ui-locale", locale);
    });
  });

  const path = window.location.pathname;
  const isRoot = path === "/" || path.endsWith("/index.html");
  if (!isRoot || window.localStorage.getItem("dashen-ui-locale")) return;
  if (preferredLocale() === "en") window.location.replace("/en.html");
}

function setActiveMobileScreen(id: string): void {
  const next = mobileScreens.includes(id) ? id : "overview";

  document.querySelectorAll<HTMLElement>("[data-mobile-screen]").forEach((screen) => {
    screen.classList.toggle("is-mobile-active", screen.dataset.mobileScreen === next);
  });

  document.querySelectorAll<HTMLButtonElement>("[data-mobile-target]").forEach((button) => {
    const isActive = button.dataset.mobileTarget === next;
    button.setAttribute("aria-selected", String(isActive));
  });
}

function initMobileScreens(): void {
  const hash = window.location.hash.replace("#", "");
  setActiveMobileScreen(hash || "overview");

  document.querySelectorAll<HTMLButtonElement>("[data-mobile-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.dataset.mobileTarget ?? "overview";
      setActiveMobileScreen(target);
      window.history.replaceState(null, "", `#${target}`);
    });
  });

  window.addEventListener("hashchange", () => setActiveMobileScreen(window.location.hash.replace("#", "")));
}

export function initShowcaseApp(): void {
  initLocaleRouting();
  initMobileScreens();
}
