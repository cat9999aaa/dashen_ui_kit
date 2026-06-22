import { readFileSync } from "node:fs";
import { globSync } from "node:fs";

const files = globSync("{index.html,exoframe-concept.html,README*.md,docs/**/*.{md,html,css,js,ts},src/**/*.{ts,css,html},skill/**/*.{md,html,css,js},public/**/*.{html,css,js,svg}}", {
  exclude: ["node_modules/**", "dist/**"]
});

const blockedRuntime = [/\bcdnjs\b/i, /\bgoogleapis\b/i, /\bgstatic\b/i, /\bunpkg\b/i, /\bjsdelivr\b/i];
const findings = [];

for (const file of files) {
  const text = readFileSync(file, "utf8");
  text.split(/\r?\n/).forEach((line, index) => {
    const isMarkdown = file.endsWith(".md");
    const isRuntimeElement = /<(script|iframe|source)\b/i.test(line) || /<(link)\b/i.test(line) && /\brel=["']?(stylesheet|preload|modulepreload|icon)/i.test(line) || /<(img)\b/i.test(line);
    const shouldScan = isRuntimeElement || isMarkdown && /]\(\s*https?:\/\//i.test(line);
    const hasBlockedHost = blockedRuntime.some((pattern) => pattern.test(line));
    const hasRemoteRuntime = isRuntimeElement && /\bhttps?:\/\//i.test(line);
    if (shouldScan && (hasBlockedHost || hasRemoteRuntime)) {
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
