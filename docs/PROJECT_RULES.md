# Project Rules

## Development Discipline

- Record meaningful work in `docs/DEVLOG.md`.
- Keep files small and single-purpose.
- Split by responsibility before adding clever abstraction.
- Preserve user work and avoid unrelated refactors.
- Verify changes with focused commands, browser checks, or document/PDF rendering.

## Tooling

- Use `gh` for GitHub work when authenticated.
- Use codegraph MCP only after the project has enough modules/symbols to benefit from dependency exploration.
- Use browser/Playwright checks for visual UI verification.
- Use PDF/document skills for print, Word, and PDF workflows.

## Local Dependencies

- Do not use CDN scripts, CDN stylesheets, Google Fonts links, or remote runtime assets.
- Prefer npm/Bun-installed packages or committed local assets.
- If a dependency is missing, report it instead of silently replacing it with a remote CDN.

## Architecture

- Tokens are separate from elements, components, motion, and print.
- Palettes are independent modules.
- The article/print layer is a first-class product, not a demo afterthought.
- Future Codex skill packaging must stay concise and use progressive disclosure.
