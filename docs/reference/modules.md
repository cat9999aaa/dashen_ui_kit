# Module Reference

## Tokens

- `src/styles/tokens/base/surface.css`
- `src/styles/tokens/base/type.css`
- `src/styles/tokens/base/space.css`
- `src/styles/tokens/base/radius-border.css`
- `src/styles/tokens/base/motion.css`
- `src/styles/tokens/palettes/01-amethyst.css`
- `src/styles/tokens/palettes/02-azure.css`
- `src/styles/tokens/palettes/03-scarlet.css`
- `src/styles/tokens/palettes/04-obsidian.css`
- `src/styles/tokens/palettes/05-argent.css`
- `src/styles/tokens/palettes/06-osseous.css`
- `src/styles/tokens/palettes/07-amber.css`
- `src/styles/tokens/palettes/08-phosphor.css`
- `src/styles/tokens/palettes/09-hazard.css`
- `src/styles/tokens/palettes/10-monochrome.css`
- `src/styles/tokens/palette-system.css`
- `src/styles/tokens/semantic.css`

## Elements

- `article.css`
- `blockquote.css`
- `callout.css`
- `code.css`
- `details.css`
- `figure.css`
- `footnote.css`
- `list.css`
- `rule.css`
- `table.css`
- `aside.css`

## Components

- `alert.css`
- `badge.css`
- `breadcrumb.css`
- `button.css`
- `card.css`
- `crt.css`
- `form.css`
- `modal.css`
- `nav.css`
- `pagination.css`
- `panel.css`
- `progress.css`
- `status-bar.css`
- `switch.css`
- `tabs.css`
- `toast.css`
- `tooltip.css`

## Runtime

- `src/index.ts`
- `src/docs.ts`
- `src/deck.ts`
- `src/lib/terminal.ts`
- `src/lib/theme.ts`
- `src/lib/copy-code.ts`
- `src/lib/components.ts`
- `src/lib/motion.ts`
- `src/lib/palette-gallery.ts`
- `src/lib/print.ts`
- `src/lib/prism.ts`

## Palette Contract

Palette files define:

- `--palette-950` through `--palette-50`;
- `--palette-active`, `--palette-signal`, `--palette-danger`, and `--palette-info`;
- paper variants for status colors;
- foreground helpers for primary and active states.

Do not put component selectors in palette files.

Palette quality review lives in `docs/reference/palette-quality.md`.

## Package Surface

- Main typed export: `dashen-ui-kit`.
- CSS export: `dashen-ui-kit/styles.css`.
- Palette manifest export: `dashen-ui-kit/palettes`.
- Skill entry export: `dashen-ui-kit/skill`.

## Browser Entries

- `index.html`: primary showcase.
- `docs/site/index.html`: local documentation site.
- `docs/deck/exoframe-html-ppt.html`: HTML PPT deck.
