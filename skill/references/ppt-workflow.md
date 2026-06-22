# EXOFRAME PPT Workflow

Use this reference when a user asks for a PowerPoint, pitch deck, report deck, keynote-style deck, or slide template using the EXOFRAME UI system.

## Route

- Use the local Presentations skill for actual `.pptx` creation.
- Use `@oai/artifact-tool` from JavaScript ES modules. Do not use `python-pptx`.
- Keep temporary build files outside the repository unless the user asks for source files to be committed.
- Deliver the final `.pptx` in the requested path or a clear local output path.

## Visual System

- Build from EXOFRAME tokens: terminal surfaces, CRT texture, ASCII identifiers, instrument panels, palette accent lines, and strong local typography.
- Use one active palette per deck unless the user asks for a palette comparison slide.
- Prefer full-canvas compositions over dense UI card grids.
- Keep slide content high-impact and readable: deck titles at least 50pt, slide titles at least 35pt, body text at least 16pt.
- Do not use franchise IP, copied UI, remote assets, or CDN-hosted fonts/images.

## Slide Patterns

- Title: large monospace or serif title, short subtitle, palette accent rule, optional ASCII code tag.
- Section divider: oversized section number, terminal prompt line, sparse supporting text.
- Concept slide: one strong statement, one evidence block, one visual field.
- Component showcase: limited panels with token labels, not a cluttered dashboard.
- Process slide: native PowerPoint shapes for simple flows; keep connectors behind labels.

## QA

- Render every final slide and inspect previews before delivery.
- Fix unintended overlap, clipping, wrapping, broken connectors, and unreadable contrast.
- Keep ASCII in fixed-width text boxes with wrapping disabled or with enough width to preserve line breaks.
- If research or external facts inform slide content, cite sources in the final response.
