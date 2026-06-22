# EXOFRAME HTML Deck Workflow

Use this reference when a user asks for a PPT, presentation, report deck, pitch deck, or slide template using the EXOFRAME UI system. In this skill, "PPT" means an HTML slide deck, not a `.pptx` file.

## Route

- Create a local HTML deck. Do not create `.pptx`.
- Start from `assets/html-deck-template/` when a target project needs a reusable starter.
- Keep CSS and JavaScript local. Do not use CDN fonts, remote image URLs, or remote slide frameworks.
- Deliver an `.html` file plus any local assets needed by that file.

## Visual System

- Build from EXOFRAME tokens: terminal surfaces, CRT texture, ASCII identifiers, instrument panels, palette accent lines, and strong local typography.
- Use one active palette per deck unless the user asks for a palette comparison slide.
- Use full-viewport slides with `16 / 9` composition and print styles for export.
- Keep slide content high-impact and readable: titles large, body text sparse, and no cramped dashboard grids.
- Do not use franchise IP, copied UI, remote assets, or CDN-hosted fonts/images.

## HTML Deck Behavior

- Each slide should be a `<section class="deck-slide">`.
- Add keyboard navigation with ArrowLeft, ArrowRight, Home, and End.
- Add visible slide counters and semantic headings.
- Support print/export by using `@media print` and page breaks.
- Keep ASCII in fixed-width blocks with `white-space: pre` and no wrapping.

## QA

- Open the final deck in a browser and inspect desktop and mobile-ish widths.
- Verify keyboard navigation, no horizontal overflow, no text overlap, and no clipped ASCII.
- Run the repository ASCII and local-asset checks when the deck lives in this project.
