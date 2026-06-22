import { readFileSync } from "node:fs";
import { globSync } from "node:fs";

const files = globSync("{index.html,skill/assets/**/*.html,README*.md,docs/**/*.{md,html}}", {
  exclude: ["node_modules/**", "dist/**"]
});

const findings = [];

function charWidth(char) {
  const code = char.codePointAt(0);
  if (!code) return 0;
  if (code >= 0x1100 && (
    code <= 0x115f ||
    code === 0x2329 ||
    code === 0x232a ||
    (code >= 0x2e80 && code <= 0xa4cf) ||
    (code >= 0xac00 && code <= 0xd7a3) ||
    (code >= 0xf900 && code <= 0xfaff) ||
    (code >= 0xfe10 && code <= 0xfe19) ||
    (code >= 0xfe30 && code <= 0xfe6f) ||
    (code >= 0xff00 && code <= 0xff60) ||
    (code >= 0xffe0 && code <= 0xffe6)
  )) {
    return 2;
  }
  return 1;
}

function displayWidth(line) {
  return [...line].reduce((width, char) => width + charWidth(char), 0);
}

function lineNumberForOffset(text, offset) {
  return text.slice(0, offset).split(/\r?\n/).length;
}

function checkBlock(file, text, block, startLine, label) {
  const rawLines = block.replace(/\r\n/g, "\n").split("\n");
  const lines = rawLines.filter((line) => line.length > 0);
  if (lines.length < 2) return;

  const expected = displayWidth(lines[0]);
  lines.forEach((line, index) => {
    const width = displayWidth(line);
    if (width !== expected) {
      findings.push(`${file}:${startLine + index}: ${label} line width ${width}, expected ${expected}`);
    }
    if (/\t/.test(line)) {
      findings.push(`${file}:${startLine + index}: ${label} contains a tab; use spaces for stable alignment`);
    }
    if (/\s+$/.test(line)) {
      findings.push(`${file}:${startLine + index}: ${label} has trailing whitespace`);
    }
  });
}

for (const file of files) {
  const text = readFileSync(file, "utf8");

  for (const match of text.matchAll(/<pre\b[^>]*class=["'][^"']*\bascii-wordmark\b[^"']*["'][^>]*>\n([\s\S]*?)<\/pre>/g)) {
    checkBlock(file, text, match[1], lineNumberForOffset(text, match.index) + 1, "ascii-wordmark");
  }

  for (const match of text.matchAll(/```(?:text|txt|ascii)\n([\s\S]*?)```/g)) {
    const block = match[1];
    if (/[╔╗╚╝═║█▀▄▌▐■□▪▫]/.test(block)) {
      checkBlock(file, text, block, lineNumberForOffset(text, match.index) + 1, "ascii fenced block");
    }
  }
}

if (findings.length > 0) {
  console.error("ASCII alignment check failed:");
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log(`ASCII alignment check passed (${files.length} files scanned).`);
