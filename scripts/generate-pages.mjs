import { mkdirSync, writeFileSync } from "node:fs";
import { pages, site, absoluteUrl, alternatesFor } from "./seo-data.mjs";

const pageMap = new Map(pages.map((page) => [page.file, page]));

const labels = {
  zh: {
    home: "/",
    nav: [
      ["/", "总览"],
      ["/usage.html", "用法"],
      ["/api.html", "API"],
      ["/palettes.html", "配色"],
      ["/components.html", "演示"],
      ["/skill.html", "Skill"],
      ["/theme-builder.html", "主题"],
      ["/about.html", "王大神"]
    ],
    langHref: (page) => alternatesFor(page).find((item) => item.lang === "en")?.path ?? "en.html",
    langLabel: "EN",
    github: "GitHub 仓库",
    docs: "组件文档",
    deck: "HTML PPT",
    themeToggle: "PAPER",
    mobile: [
      ["/", "总览"],
      ["/usage.html", "用法"],
      ["/palettes.html", "配色"],
      ["/components.html", "演示"],
      ["/skill.html", "Skill"]
    ]
  },
  en: {
    home: "/en.html",
    nav: [
      ["/en.html", "Overview"],
      ["/usage.en.html", "Usage"],
      ["/api.en.html", "API"],
      ["/palettes.en.html", "Palettes"],
      ["/components.en.html", "Demos"],
      ["/skill.en.html", "Skill"],
      ["/theme-builder.en.html", "Builder"],
      ["/about.en.html", "Dashen"]
    ],
    langHref: (page) => alternatesFor(page).find((item) => item.lang === "zh-CN")?.path ?? "",
    langLabel: "中文",
    github: "GitHub Repo",
    docs: "Docs",
    deck: "HTML PPT",
    themeToggle: "PAPER",
    mobile: [
      ["/en.html", "Home"],
      ["/usage.en.html", "Usage"],
      ["/palettes.en.html", "Theme"],
      ["/components.en.html", "Demos"],
      ["/skill.en.html", "Skill"]
    ]
  }
};

function esc(text) {
  return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
}

function code(text) {
  return esc(text).trim();
}

function relative(path = "") {
  return `/${path}`;
}

function meta(page) {
  const canonical = absoluteUrl(page.path);
  const language = page.lang === "zh-CN" ? "zh" : "en";
  const alternates = alternatesFor(page)
    .map((item) => `    <link rel="alternate" hreflang="${item.lang}" href="${item.href}" />`)
    .join("\n");
  return `<!doctype html>
<html lang="${language}" data-theme="void" data-palette="amethyst">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${esc(page.description)}" />
    <meta name="keywords" content="dashen_ui_kit, EXOFRAME, UI kit, frontend components, HTML PPT, Codex skill, local-only UI, palette system" />
    <meta name="author" content="cat9999aaa" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${canonical}" />
${alternates}
    <link rel="icon" href="/src/assets/favicon.svg" type="image/svg+xml" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${site.name}" />
    <meta property="og:title" content="${esc(page.title)}" />
    <meta property="og:description" content="${esc(page.description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${absoluteUrl("og-showcase.png")}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(page.title)}" />
    <meta name="twitter:description" content="${esc(page.description)}" />
    <meta name="twitter:image" content="${absoluteUrl("og-showcase.png")}" />
    <script type="application/ld+json">
      ${JSON.stringify({
        "@context": "https://schema.org",
        "@type": page.kind === "about" ? "Person" : "SoftwareSourceCode",
        name: page.title,
        url: canonical,
        inLanguage: ["zh-CN", "en"],
        description: page.description,
        codeRepository: "https://github.com/cat9999aaa/dashen_ui_kit"
      }, null, 8)}
    </script>
    <title>${esc(page.title)}</title>
  </head>`;
}

function chrome(page, body) {
  const locale = page.lang === "zh-CN" ? "zh" : "en";
  const ui = labels[locale];
  const langHref = relative(ui.langHref(page));
  const nav = ui.nav
    .map(([href, label]) => `<a href="${href}"${href === relative(page.path) ? " aria-current=\"page\"" : ""}>${label}</a>`)
    .join("\n        ");
  const mobileNav = ui.mobile
    .map(([href, label]) => `<a href="${href}"${href === relative(page.path) ? " aria-current=\"page\"" : ""}>${label}</a>`)
    .join("\n      ");
  return `${meta(page)}
  <body>
    <div class="crt-scan"></div>
    <div class="crt-vignette"></div>
    <div class="crt-roll"></div>
    <header class="status-bar app-chrome site-nav">
      <span class="status-dot"></span>
      <a class="status-brand" href="${locale === "zh" ? "/" : "/en.html"}">dashen_ui_kit</a>
      <span class="status-separator">::</span>
      <span>UI SKILL SITE</span>
      <nav class="status-nav" aria-label="Site navigation">
        ${nav}
      </nav>
      <a class="chrome-link" href="${langHref}" data-locale-link="${locale === "zh" ? "en" : "zh"}">${ui.langLabel}</a>
      <button class="theme-toggle" id="theme-toggle" type="button">${ui.themeToggle}</button>
    </header>
    <main class="page-shell">
      <aside class="side-rail" aria-label="Palette and page tools">
        <div class="rail-card" data-label="ACTIVE PALETTE"><span data-active-palette-label>01 AMETHYST / 01-amethyst.css</span></div>
        <div class="rail-card rail-pulse" data-label="ROUTE"><strong>${esc(page.title)}</strong><span>${esc(page.description)}</span></div>
        <div class="rail-card" data-label="SHORTCUTS"><a href="https://github.com/cat9999aaa/dashen_ui_kit">${ui.github}</a><a href="/docs/site/${locale === "en" ? "en.html" : ""}">${ui.docs}</a><a href="/docs/deck/exoframe-html-ppt${locale === "en" ? ".en" : ""}.html">${ui.deck}</a></div>
      </aside>
      <div class="page-content">
${body}
      </div>
    </main>
    <nav class="mobile-page-nav" aria-label="Mobile site navigation">
      ${mobileNav}
    </nav>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>`;
}

const snippets = {
  install: `git clone https://github.com/cat9999aaa/dashen_ui_kit.git
cd dashen_ui_kit
bun install
bun run dev
bun run check`,
  api: `import "dashen-ui-kit/styles.css";
import { initExoframeUI, palettes, getPalette } from "dashen-ui-kit";

initExoframeUI();
console.log(palettes.length, getPalette("amethyst"));`,
  apiSurface: `export { palettes, getPalette };
export type { Palette, PaletteSwatch };
export { initCodeCopy, initComponentDemos, initThemeToggle };
export { renderPaletteGallery, syncActivePaletteLabels };
export function initExoframeUI(): void;`,
  theme: `[data-palette="your-theme"] {
  --palette-bg: #07090f;
  --palette-surface: #101522;
  --palette-primary: #7cf7ff;
  --palette-success: #8cff5a;
  --palette-signal: #ffd166;
  --palette-danger: #ff4f6d;
}`,
  skill: `bun run skill:install
# installs $exoframe-ui into local Codex skills`
};

const content = {
  "index.html": `        <section class="page-hero">
          <div class="eyebrow">// 王大神 · dashen presents</div>
          <h1 class="product-title">dashen_ui_kit</h1>
          <p class="product-lead">一个多页面、多语言、可换肤、可安装 skill 的 EXOFRAME UI 组件库展示站。它讲清楚 GitHub 仓库怎么跑、API 怎么调、主题怎么做、Skill 怎么用。</p>
          <div class="hero-actions"><a class="exo-button" data-variant="primary" href="/usage.html">开始使用</a><a class="exo-button" href="/palettes.html">切换配色</a><a class="exo-button" href="/skill.html">安装 Skill</a></div>
        </section>
        <section class="feature-map">
          <a class="feature-tile" href="/usage.html"><b>Usage</b><span>安装、命令、API 调用</span></a>
          <a class="feature-tile" href="/api.html"><b>API</b><span>包导出与初始化函数</span></a>
          <a class="feature-tile" href="/palettes.html"><b>Palettes</b><span>十套配色，全站持久化</span></a>
          <a class="feature-tile" href="/components.html"><b>Demos</b><span>按钮、弹层、终端、文档层</span></a>
          <a class="feature-tile" href="/skill.html"><b>Skill</b><span>Codex 可安装工作流</span></a>
          <a class="feature-tile" href="/theme-builder.html"><b>Theme</b><span>构建自己的视觉外壳</span></a>
          <a class="feature-tile" href="/about.html"><b>Dashen</b><span>王大神个人背书</span></a>
        </section>`,
  "en.html": `        <section class="page-hero">
          <div class="eyebrow">// BUILT BY WANG DASHEN</div>
          <h1 class="product-title">dashen_ui_kit</h1>
          <p class="product-lead">A multi-page, multilingual, theme-switchable EXOFRAME UI kit showcase for the GitHub repo, package API, Codex skill, and theme builder.</p>
          <div class="hero-actions"><a class="exo-button" data-variant="primary" href="/usage.en.html">Start</a><a class="exo-button" href="/palettes.en.html">Switch Palettes</a><a class="exo-button" href="/skill.en.html">Install Skill</a></div>
        </section>
        <section class="feature-map">
          <a class="feature-tile" href="/usage.en.html"><b>Usage</b><span>Install, commands, API calls</span></a>
          <a class="feature-tile" href="/api.en.html"><b>API</b><span>Exports and runtime entry points</span></a>
          <a class="feature-tile" href="/palettes.en.html"><b>Palettes</b><span>Ten themes, persisted site-wide</span></a>
          <a class="feature-tile" href="/components.en.html"><b>Demos</b><span>Controls, overlays, terminal, prose</span></a>
          <a class="feature-tile" href="/skill.en.html"><b>Skill</b><span>Installable Codex workflow</span></a>
          <a class="feature-tile" href="/theme-builder.en.html"><b>Theme</b><span>Build your own shell</span></a>
          <a class="feature-tile" href="/about.en.html"><b>Dashen</b><span>Founder-level authority</span></a>
        </section>`,
  "usage.html": `        <section class="page-hero compact"><div class="eyebrow">// USAGE</div><h1 class="section-title">怎么用这个仓库</h1><p class="subtle">从 clone 到本地运行，再到包 API 调用，一页讲清楚。</p></section><div class="showcase-grid"><div class="code-shell"><div class="codebar"><span class="filename">terminal</span><button class="code-copy" data-copy-code type="button">COPY</button><span class="language">BASH</span></div><pre><code class="language-bash">${code(snippets.install)}</code></pre></div><div class="code-shell"><div class="codebar"><span class="filename">app.ts</span><button class="code-copy" data-copy-code type="button">COPY</button><span class="language">TYPESCRIPT</span></div><pre><code class="language-typescript">${code(snippets.api)}</code></pre></div></div>`,
  "usage.en.html": `        <section class="page-hero compact"><div class="eyebrow">// USAGE</div><h1 class="section-title">Use the repository</h1><p class="subtle">Clone, run locally, validate, and import the package API.</p></section><div class="showcase-grid"><div class="code-shell"><div class="codebar"><span class="filename">terminal</span><button class="code-copy" data-copy-code type="button">COPY</button><span class="language">BASH</span></div><pre><code class="language-bash">${code(snippets.install)}</code></pre></div><div class="code-shell"><div class="codebar"><span class="filename">app.ts</span><button class="code-copy" data-copy-code type="button">COPY</button><span class="language">TYPESCRIPT</span></div><pre><code class="language-typescript">${code(snippets.api)}</code></pre></div></div>`,
  "api.html": `        <section class="page-hero compact"><div class="eyebrow">// API SURFACE</div><h1 class="section-title">包导出和运行入口</h1><p class="subtle">这里单独列出组件库能被其他项目调用的 API。完整参考见 docs/reference/api.md。</p></section><div class="showcase-grid"><div class="code-shell"><div class="codebar"><span class="filename">src/index.ts</span><button class="code-copy" data-copy-code type="button">COPY</button><span class="language">TYPESCRIPT</span></div><pre><code class="language-typescript">${code(snippets.apiSurface)}</code></pre></div><div class="panel" data-label="CONTRACT"><ul class="compact-list"><li>CSS 从 dashen-ui-kit/styles.css 进入。</li><li>initExoframeUI 初始化高亮、复制、组件、终端、主题和动效。</li><li>palette 数据从 src/data/palettes.ts 暴露。</li><li>组件文件不依赖具体 palette 名称。</li></ul></div></div>`,
  "api.en.html": `        <section class="page-hero compact"><div class="eyebrow">// API SURFACE</div><h1 class="section-title">Package exports and runtime entry points</h1><p class="subtle">This page isolates the API callable from other projects. Full reference lives in docs/reference/api.md.</p></section><div class="showcase-grid"><div class="code-shell"><div class="codebar"><span class="filename">src/index.ts</span><button class="code-copy" data-copy-code type="button">COPY</button><span class="language">TYPESCRIPT</span></div><pre><code class="language-typescript">${code(snippets.apiSurface)}</code></pre></div><div class="panel" data-label="CONTRACT"><ul class="compact-list"><li>CSS enters through dashen-ui-kit/styles.css.</li><li>initExoframeUI initializes highlighting, copy, components, terminal, theme, and motion.</li><li>Palette data is exposed from src/data/palettes.ts.</li><li>Component files do not depend on concrete palette names.</li></ul></div></div>`,
  "palettes.html": `        <section class="page-hero compact"><div class="eyebrow">// PALETTES</div><h1 class="section-title">全站配色切换</h1><p class="subtle">点击任何一套配色，它会写入 localStorage，跨页面保持一致。</p></section><div data-palette-gallery></div>`,
  "palettes.en.html": `        <section class="page-hero compact"><div class="eyebrow">// PALETTES</div><h1 class="section-title">Site-wide palette switching</h1><p class="subtle">Activate a palette once. It persists across pages through localStorage.</p></section><div data-palette-gallery></div>`,
  "components.html": `        <section class="page-hero compact"><div class="eyebrow">// DEMO LAB</div><h1 class="section-title">组件演示实验室</h1><p class="subtle">这里专门展示 UI 控件和交互，不再挤在首页。</p></section>${demoLab("zh")}`,
  "components.en.html": `        <section class="page-hero compact"><div class="eyebrow">// DEMO LAB</div><h1 class="section-title">Component demo lab</h1><p class="subtle">Controls and interactions have their own page, instead of being buried in the overview.</p></section>${demoLab("en")}`,
  "skill.html": `        <section class="page-hero compact"><div class="eyebrow">// CODEX SKILL</div><h1 class="section-title">把 UI 变成 Skill</h1><p class="subtle">安装后，Codex 可以按这套规则生成界面、文档和 HTML PPT。</p></section><div class="showcase-grid"><div class="code-shell"><div class="codebar"><span class="filename">terminal</span><button class="code-copy" data-copy-code type="button">COPY</button><span class="language">BASH</span></div><pre><code class="language-bash">${code(snippets.skill)}</code></pre></div><div class="panel" data-label="SKILL MAP"><ul class="compact-list"><li>design-rules.md：视觉规则</li><li>module-map.md：迁移顺序</li><li>ppt-workflow.md：HTML 演示稿</li><li>assets/：本地模板</li></ul></div></div>`,
  "skill.en.html": `        <section class="page-hero compact"><div class="eyebrow">// CODEX SKILL</div><h1 class="section-title">Turn the UI into a skill</h1><p class="subtle">After installation, Codex can generate interfaces, docs, and HTML decks with this system.</p></section><div class="showcase-grid"><div class="code-shell"><div class="codebar"><span class="filename">terminal</span><button class="code-copy" data-copy-code type="button">COPY</button><span class="language">BASH</span></div><pre><code class="language-bash">${code(snippets.skill)}</code></pre></div><div class="panel" data-label="SKILL MAP"><ul class="compact-list"><li>design-rules.md: visual rules</li><li>module-map.md: migration order</li><li>ppt-workflow.md: HTML decks</li><li>assets/: local templates</li></ul></div></div>`,
  "theme-builder.html": `        <section class="page-hero compact"><div class="eyebrow">// THEME BUILDER</div><h1 class="section-title">构建自己的主题</h1><p class="subtle">只新增 palette 文件和 manifest 条目，不改组件。</p></section><div class="code-shell"><div class="codebar"><span class="filename">11-your-theme.css</span><button class="code-copy" data-copy-code type="button">COPY</button><span class="language">CSS</span></div><pre><code class="language-css">${code(snippets.theme)}</code></pre></div>`,
  "theme-builder.en.html": `        <section class="page-hero compact"><div class="eyebrow">// THEME BUILDER</div><h1 class="section-title">Build your own theme</h1><p class="subtle">Add one palette file and one manifest entry. Do not rewrite components.</p></section><div class="code-shell"><div class="codebar"><span class="filename">11-your-theme.css</span><button class="code-copy" data-copy-code type="button">COPY</button><span class="language">CSS</span></div><pre><code class="language-css">${code(snippets.theme)}</code></pre></div>`,
  "about.html": `        <section class="page-hero compact"><div class="eyebrow">// 王大神 · DASHEN</div><h1 class="section-title">AI 最严厉的父亲</h1><p class="subtle">立法者 / 构架师 · Stanley Team 联合创始人兼技术负责人。这个 UI kit 是把“规则、关系、外壳”做成可复用界面的实验。</p></section><div class="authority-grid"><div class="panel" data-label="PLAYER"><p>不接受默认规则，写规则。把自己运行成一家可拆装、可迁移、可持续演化的薄壳公司。</p></div><div class="panel" data-label="TRACK RECORD"><p>逆向与漏洞研究、2000+ PBN 节点、TradeV7、Hermes Agent、OpenTSC、x-plan 内容工厂。</p></div><div class="panel" data-label="POSITION"><p>技术会被复制，关系不会。dashen_ui_kit 是这种立法者思维在 UI 与 skill 工程里的一个外壳。</p></div></div>`,
  "about.en.html": `        <section class="page-hero compact"><div class="eyebrow">// WANG DASHEN</div><h1 class="section-title">The strict father of AI</h1><p class="subtle">Legislator / architect, Stanley Team co-founder and technical lead. This UI kit turns rules, relationships, and shells into reusable interface infrastructure.</p></section><div class="authority-grid"><div class="panel" data-label="PLAYER"><p>He does not accept default rules. He writes rules, then runs himself as a thin-shell company.</p></div><div class="panel" data-label="TRACK RECORD"><p>Reverse engineering, 2000+ PBN nodes, TradeV7, Hermes Agent, OpenTSC, and x-plan content factory.</p></div><div class="panel" data-label="POSITION"><p>Technology can be copied. Relationships cannot. This UI kit is one shell of that legislator mindset.</p></div></div>`
};

function demoLab(locale) {
  const terminalLabel = locale === "zh" ? "commands enabled" : "commands enabled";
  return `<div class="demo-matrix">
          <div class="panel" data-label="ACTIONS"><div class="badge-row"><button class="exo-button" data-variant="primary">ENGAGE</button><button class="exo-button" data-variant="success">SYNC</button><button class="exo-button" data-variant="danger">ABORT</button></div></div>
          <div class="panel" data-label="SIGNALS"><div class="badge-row"><span class="exo-badge" data-tone="primary">PRIMARY</span><span class="exo-badge" data-tone="success">PASS</span><span class="exo-badge" data-tone="signal">WARN</span><span class="exo-badge" data-tone="danger">FAIL</span></div></div>
          <div class="panel" data-label="RUNTIME"><div class="badge-row"><button class="exo-button" data-variant="primary" data-open-modal type="button">OPEN MODAL</button><button class="exo-button" data-variant="success" data-show-toast type="button">SHOW TOAST</button></div></div>
          <div class="terminal panel" data-label="TERMINAL"><div class="terminal-head"><i class="terminal-light" style="background: var(--color-danger)"></i><i class="terminal-light" style="background: var(--color-signal)"></i><i class="terminal-light" style="background: var(--color-success)"></i><span>${terminalLabel}</span></div><div class="terminal-log" id="terminal-log" aria-live="polite"></div><label class="command-line"><span class="prompt">local<span class="path">/exo</span>$</span><input id="command-input" autocomplete="off" spellcheck="false" aria-label="Terminal command" /></label></div>
        </div>
        <div class="modal-backdrop" data-modal hidden><div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title"><div class="modal-header"><h2 class="modal-title" id="modal-title">LOCAL MODAL</h2><button class="exo-button" data-close-modal type="button">CLOSE</button></div><div class="modal-body">This overlay is part of the reusable component shell.</div><div class="modal-footer"><button class="exo-button" data-variant="primary" data-close-modal type="button">CONFIRM</button></div></div></div><div class="toast-stack" data-toast-stack aria-live="polite"></div>`;
}

for (const page of pages) {
  if (!content[page.file]) continue;
  const dir = page.file.split("/").slice(0, -1).join("/");
  if (dir) mkdirSync(dir, { recursive: true });
  writeFileSync(page.file, chrome(page, content[page.file]));
}

console.log("Generated showcase pages.");
