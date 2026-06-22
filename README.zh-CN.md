# dashen_ui_kit

`dashen_ui_kit` 是一个本地化、可复用的前端 UI 组件库草案。它包含终端/CRT/ASCII 风格界面、文章排版、代码高亮、动效、打印/PDF 输出，以及独立 palette 配色系统。

当前展示方向叫 EXOFRAME。它是原创视觉语言，不使用第三方影视、游戏、组织、角色、标志或复制界面资产。

## 核心原则

- 不使用 CDN。字体、Prism、GSAP 和运行时代码都走本地依赖。
- 组件底层和配色层分离。组件只消费 `--color-*`、`--code-*`、`--syntax-*` 等语义变量。
- 每套配色都是独立文件：`src/styles/tokens/palettes/*.css`。
- 新增配色只新增 palette 文件和 `src/data/palettes.ts` 清单，不改组件。
- 文章排版和打印/PDF 层是一等模块，不是展示页附属品。
- `skill/` 目录保留未来封装成 Codex skill 的最小资源。

## 目录

- `src/styles/tokens/base/`：稳定基础 token。
- `src/styles/tokens/palettes/`：独立配色模块。
- `src/styles/tokens/palette-system.css`：把 active palette 映射到语义变量。
- `src/styles/elements/`：原生 HTML、文章、代码和内容格式。
- `src/styles/components/`：可复用组件外壳。
- `src/styles/motion/`：动效基础。
- `src/styles/print/`：打印和 PDF 输出。
- `src/data/palettes.ts`：配色清单和展示数据。
- `src/lib/`：本地交互逻辑。
- `docs/DEVLOG.md`：开发步骤记录。
- `skill/`：未来 skill 草案。

## 开发

```bash
bun install
bun run dev
bun run check
bun run check:local-assets
bun run build
```

浏览器入口是 Vite 输出的本地地址，默认 `http://127.0.0.1:5173/`。

## 新增一套配色

1. 在 `src/data/palettes.ts` 增加配色元数据、色阶和状态色。
2. 新增 `src/styles/tokens/palettes/NN-name.css`。
3. 在 `src/styles/main.css` 引入新 palette 文件。
4. 只提供 `--palette-*` 变量，不在组件里写具体颜色。
5. 运行 `bun run check` 和浏览器切换验证。

## 本地化策略

`scripts/check-local-assets.mjs` 会扫描远程运行时引用。出现 `https://`、cdnjs、Google Fonts、unpkg、jsDelivr 等远程依赖时会失败。
