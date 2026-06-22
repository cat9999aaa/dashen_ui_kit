export const site = {
  origin: "https://uiskill.dashen.wang",
  basePath: "/",
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
  usage: {
    "zh-CN": "usage.html",
    en: "usage.en.html",
    "x-default": "usage.html"
  },
  api: {
    "zh-CN": "api.html",
    en: "api.en.html",
    "x-default": "api.html"
  },
  palettes: {
    "zh-CN": "palettes.html",
    en: "palettes.en.html",
    "x-default": "palettes.html"
  },
  components: {
    "zh-CN": "components.html",
    en: "components.en.html",
    "x-default": "components.html"
  },
  skill: {
    "zh-CN": "skill.html",
    en: "skill.en.html",
    "x-default": "skill.html"
  },
  theme: {
    "zh-CN": "theme-builder.html",
    en: "theme-builder.en.html",
    "x-default": "theme-builder.html"
  },
  about: {
    "zh-CN": "about.html",
    en: "about.en.html",
    "x-default": "about.html"
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
    path: "usage.html",
    file: "usage.html",
    lang: "zh-CN",
    title: "用法 // dashen_ui_kit",
    description: "dashen_ui_kit 用法页，覆盖本地安装、运行、检查、包 API 和组件库接入方式。",
    kind: "usage"
  },
  {
    path: "usage.en.html",
    file: "usage.en.html",
    lang: "en",
    title: "Usage // dashen_ui_kit",
    description: "Usage page for dashen_ui_kit, covering local install, run commands, checks, package API, and UI kit adoption.",
    kind: "usage"
  },
  {
    path: "api.html",
    file: "api.html",
    lang: "zh-CN",
    title: "API // dashen_ui_kit",
    description: "dashen_ui_kit API 页，列出包导出、初始化函数、palette 数据和组件交互入口。",
    kind: "api"
  },
  {
    path: "api.en.html",
    file: "api.en.html",
    lang: "en",
    title: "API // dashen_ui_kit",
    description: "API page for dashen_ui_kit, listing package exports, initialization functions, palette data, and component runtime entry points.",
    kind: "api"
  },
  {
    path: "palettes.html",
    file: "palettes.html",
    lang: "zh-CN",
    title: "配色系统 // dashen_ui_kit",
    description: "dashen_ui_kit 配色系统页，展示十套本地 palette 模块和跨页面持久化换肤能力。",
    kind: "palettes"
  },
  {
    path: "palettes.en.html",
    file: "palettes.en.html",
    lang: "en",
    title: "Palette System // dashen_ui_kit",
    description: "Palette system page for dashen_ui_kit, showing ten local palette modules and persistent site-wide theme switching.",
    kind: "palettes"
  },
  {
    path: "components.html",
    file: "components.html",
    lang: "zh-CN",
    title: "组件演示 // dashen_ui_kit",
    description: "dashen_ui_kit 组件演示页，展示按钮、徽章、弹层、toast、终端和可复用界面控件。",
    kind: "components"
  },
  {
    path: "components.en.html",
    file: "components.en.html",
    lang: "en",
    title: "Component Demos // dashen_ui_kit",
    description: "Component demo page for dashen_ui_kit, showing buttons, badges, modal, toast, terminal, and reusable UI controls.",
    kind: "components"
  },
  {
    path: "skill.html",
    file: "skill.html",
    lang: "zh-CN",
    title: "Codex Skill // dashen_ui_kit",
    description: "dashen_ui_kit Skill 页，说明如何把这套 UI 规则、模块和 HTML PPT 工作流安装给 Codex 使用。",
    kind: "skill"
  },
  {
    path: "skill.en.html",
    file: "skill.en.html",
    lang: "en",
    title: "Codex Skill // dashen_ui_kit",
    description: "Codex skill page for dashen_ui_kit, explaining how to install the UI rules, modules, and HTML deck workflow for Codex.",
    kind: "skill"
  },
  {
    path: "theme-builder.html",
    file: "theme-builder.html",
    lang: "zh-CN",
    title: "主题构建器 // dashen_ui_kit",
    description: "dashen_ui_kit 主题构建器页，说明如何新增独立 palette 文件并保持组件只消费语义变量。",
    kind: "theme"
  },
  {
    path: "theme-builder.en.html",
    file: "theme-builder.en.html",
    lang: "en",
    title: "Theme Builder // dashen_ui_kit",
    description: "Theme builder page for dashen_ui_kit, explaining how to add independent palette files while components consume semantic tokens only.",
    kind: "theme"
  },
  {
    path: "about.html",
    file: "about.html",
    lang: "zh-CN",
    title: "王大神 // dashen_ui_kit",
    description: "王大神 dashen 的项目背书页，介绍 dashen_ui_kit 背后的规则、关系、外壳和可复用 UI 思路。",
    kind: "about"
  },
  {
    path: "about.en.html",
    file: "about.en.html",
    lang: "en",
    title: "Wang Dashen // dashen_ui_kit",
    description: "Authority page for Wang Dashen, introducing the rules, relationships, shells, and reusable UI thinking behind dashen_ui_kit.",
    kind: "about"
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
