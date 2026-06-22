# Export HTML To PDF

The print layer is designed for browser print, paged media engines, and document conversion flows.

## Browser Path

1. Render article content with `.article`.
2. Load `src/styles/print/page.css`.
3. Use the Print button or browser print dialog.
4. Save as PDF.

## Document Path

1. Convert Word or Markdown to semantic HTML.
2. Wrap the result in `.article`.
3. Apply token, element, and print layers.
4. Render through a browser, Paged.js, WeasyPrint, or Prince.

## Rules

- Keep screen chrome out of print.
- Avoid block breaks inside code, tables, blockquotes, callouts, and figures.
- Keep links visible in printed output.
- Use local fonts or committed font assets only.
