import { readFileSync } from "node:fs";
import { globSync } from "node:fs";

const files = globSync("{index.html,exoframe-concept.html,src/**/*.{ts,css,html},skill/**/*.md}", {
  exclude: ["node_modules/**", "dist/**"]
});

const blocked = [/\bhttps?:\/\//i, /\bcdnjs\b/i, /\bgoogleapis\b/i, /\bgstatic\b/i, /\bunpkg\b/i, /\bjsdelivr\b/i];
const findings = [];

for (const file of files) {
  const text = readFileSync(file, "utf8");
  text.split(/\r?\n/).forEach((line, index) => {
    if (blocked.some((pattern) => pattern.test(line))) {
      findings.push(`${file}:${index + 1}: ${line.trim()}`);
    }
  });
}

if (findings.length > 0) {
  console.error("Remote runtime asset references are not allowed:");
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log(`Local asset check passed (${files.length} files scanned).`);
