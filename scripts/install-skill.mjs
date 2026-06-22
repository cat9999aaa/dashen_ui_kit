import { cpSync, existsSync, rmSync } from "node:fs";
import { homedir } from "node:os";
import { resolve } from "node:path";

const source = resolve("skill");
const target = resolve(process.env.CODEX_HOME ?? `${homedir()}/.codex`, "skills/exoframe-ui");

if (!existsSync(source)) {
  console.error("Missing local skill/ directory.");
  process.exit(1);
}

rmSync(target, { force: true, recursive: true });
cpSync(source, target, {
  recursive: true,
  filter: (path) => !path.includes("/.DS_Store")
});

console.log(`Installed EXOFRAME skill to ${target}`);
