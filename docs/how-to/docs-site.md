# Local Docs Site

The docs site is a Vite HTML entry, not a remote documentation framework.

Run:

```bash
bun run dev
```

Open:

```text
http://127.0.0.1:5173/docs/site/
```

The docs site consumes the same CSS and runtime modules as the showcase:

- local fonts;
- palette gallery;
- code highlighting;
- copy buttons;
- theme toggle.

This keeps the docs site close to the actual library surface and avoids another styling system.
