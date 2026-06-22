export const site = {
  origin: "https://cat9999aaa.github.io",
  basePath: "/dashen_ui_kit/",
  name: "dashen_ui_kit",
  title: "dashen_ui_kit // EXOFRAME UI",
  zhTitle: "dashen_ui_kit // EXOFRAME 本地化前端 UI 组件库",
  enTitle: "dashen_ui_kit // EXOFRAME local-only front-end UI kit",
  description:
    "A local-only EXOFRAME UI kit for terminal, CRT, ASCII, palette modules, component docs, HTML PPT decks, and Codex skills.",
  zhDescription:
    "dashen_ui_kit 是本地化 EXOFRAME 前端 UI 组件库，支持终端、CRT、ASCII、独立配色、组件文档、HTML PPT 和 Codex skill。",
  enDescription:
    "dashen_ui_kit is a local-only EXOFRAME front-end UI kit for terminal, CRT, ASCII, independent palettes, component docs, HTML PPT, and Codex skills."
};

export const localeGroups = {
  showcase: {
    "zh-CN": "",
    en: "en.html",
    "x-default": ""
  },
  docs: {
    "zh-CN": "docs/site/",
    en: "docs/site/en.html",
    "x-default": "docs/site/"
  },
  deck: {
    "zh-CN": "docs/deck/exoframe-html-ppt.html",
    en: "docs/deck/exoframe-html-ppt.en.html",
    "x-default": "docs/deck/exoframe-html-ppt.html"
  }
};

export const pages = [
  {
    path: "",
    file: "index.html",
    lang: "zh-CN",
    title: site.zhTitle,
    description: site.zhDescription,
    kind: "showcase"
  },
  {
    path: "en.html",
    file: "en.html",
    lang: "en",
    title: site.enTitle,
    description: site.enDescription,
    kind: "showcase"
  },
  {
    path: "docs/site/",
    file: "docs/site/index.html",
    lang: "zh-CN",
    title: "EXOFRAME Docs // dashen_ui_kit",
    description: "dashen_ui_kit 的本地组件文档站，覆盖安装、API、配色、skill 和 HTML PPT。",
    kind: "docs"
  },
  {
    path: "docs/site/en.html",
    file: "docs/site/en.html",
    lang: "en",
    title: "EXOFRAME Docs // dashen_ui_kit",
    description: "Local component documentation for dashen_ui_kit, covering install, API, palettes, skills, and HTML PPT.",
    kind: "docs"
  },
  {
    path: "docs/deck/exoframe-html-ppt.html",
    file: "docs/deck/exoframe-html-ppt.html",
    lang: "zh-CN",
    title: "EXOFRAME HTML PPT // dashen_ui_kit",
    description: "用 EXOFRAME UI 制作的浏览器原生 HTML PPT 示例，不生成 .pptx。",
    kind: "deck"
  },
  {
    path: "docs/deck/exoframe-html-ppt.en.html",
    file: "docs/deck/exoframe-html-ppt.en.html",
    lang: "en",
    title: "EXOFRAME HTML PPT // dashen_ui_kit",
    description: "A browser-native HTML PPT example built with EXOFRAME UI, without generating .pptx.",
    kind: "deck"
  }
];

export function absoluteUrl(path = "") {
  return new URL(`${site.basePath}${path}`, site.origin).toString();
}

export function alternatesFor(page) {
  return Object.entries(localeGroups[page.kind]).map(([lang, path]) => ({
    lang,
    path,
    href: absoluteUrl(path)
  }));
}
