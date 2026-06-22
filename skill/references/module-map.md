# Module Map

Use these layers when applying the kit to a project:

- `tokens/base` for primitives.
- `tokens/palettes` for one active palette file.
- `tokens/palette-system.css` for mapping palette variables to semantic variables.
- `tokens/semantic` for meaning.
- `elements` for article/HTML formatting.
- `components` for interface controls.
- `motion` for animations.
- `print` for PDF and paged media.
- `references/ppt-workflow.md` for EXOFRAME-themed HTML decks.

For quick adoption, copy the minimal required layers first:

1. tokens/base
2. one palette
3. palette-system
4. semantic
5. elements or components depending on the target
6. print when document output is needed

Palette files should expose `--palette-*` variables only. Components should never depend on a concrete palette name such as `amethyst` or `azure`.

When adapting the system to decks, use the same active palette and typography roles, but build browser-native HTML decks. Do not create `.pptx` unless the user explicitly changes the project direction.
