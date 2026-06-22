# Install The EXOFRAME Skill

Install the repository skill into the local Codex skill directory:

```bash
bun run skill:install
```

The script copies `skill/` to `${CODEX_HOME:-~/.codex}/skills/exoframe-ui`.

Validate the source skill before installing:

```bash
bun run check:skill
```

After install, new Codex sessions can discover `$exoframe-ui`.
