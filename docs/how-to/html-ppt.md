# HTML PPT Workflow

EXOFRAME presentation output is HTML, not `.pptx`.

Open the local deck:

```bash
bun run dev
```

Then visit:

```text
http://127.0.0.1:5173/docs/deck/exoframe-html-ppt.html
```

Controls:

- ArrowRight or PageDown: next slide.
- ArrowLeft or PageUp: previous slide.
- Home: first slide.
- End: last slide.
- Browser print: export to PDF using print media.

Rules:

- Keep every slide local and browser-native.
- Use `<section class="deck-slide">` for each slide.
- Keep ASCII in monospace blocks with equal line widths.
- Run `bun run check` after editing.
