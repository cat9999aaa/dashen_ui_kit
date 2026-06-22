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

export function initShowcaseApp(): void {
  initLocaleRouting();
}
