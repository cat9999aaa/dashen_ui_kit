# Palette Quality Matrix

Each palette is independent and must satisfy the same token contract. Components never reference concrete palette names.

| Palette | Visual Role | Best Surface | Accent Logic | Status |
| --- | --- | --- | --- | --- |
| `01-amethyst` | Signature violet phosphor | Showcase hero, brand moments | green active, amber signal, cyan info | checked |
| `02-azure` | Cold diagnostic blue | Docs, dashboards, ops tools | cyan active, amber signal | checked |
| `03-scarlet` | High-energy tactical red | Alerts, launches, dramatic decks | orange active, yellow signal, blue info | checked |
| `04-obsidian` | Dark neutral frame | Dense app shells, night mode | acid active, violet signal, cyan info | checked |
| `05-argent` | Restrained silver utility | Documentation, admin tools | teal active, gold signal | checked |
| `06-osseous` | Bone-white editorial shell | Paper mode, long-form reading | green active, surgical red danger, mineral blue info | checked |
| `07-amber` | Classic amber terminal | Retro tools, logs, local consoles | amber active, orange signal, cyan info | checked |
| `08-phosphor` | Green phosphor terminal | HTML PPT, terminal hero, monitoring | lime active, yellow signal, cyan info | checked |
| `09-hazard` | Warning system yellow | Safety, audit, critical notices | yellow active, orange signal, red danger | checked |
| `10-monochrome` | Neutral black-and-white | Specs, PDFs, low-distraction docs | white active, grey signal | checked |

## Contract

Every palette file must provide:

- `--palette-950` through `--palette-50`;
- `--palette-active`, `--palette-signal`, `--palette-danger`, and `--palette-info`;
- paper variants for the status colors;
- foreground helpers for primary and active states.

Run:

```bash
bun run check:palettes
```

The check verifies the manifest, file presence, required variables, and that palette files do not contain component selectors.
