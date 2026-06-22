import { readFileSync } from "node:fs";
import { globSync } from "node:fs";

const dataFile = "src/data/palettes.ts";
const data = readFileSync(dataFile, "utf8");
const files = globSync("src/styles/tokens/palettes/*.css").sort();
const requiredVars = [
  "--palette-950",
  "--palette-900",
  "--palette-800",
  "--palette-700",
  "--palette-600",
  "--palette-500",
  "--palette-400",
  "--palette-300",
  "--palette-200",
  "--palette-100",
  "--palette-50",
  "--palette-active",
  "--palette-signal",
  "--palette-danger",
  "--palette-info",
  "--palette-active-paper",
  "--palette-signal-paper",
  "--palette-danger-paper",
  "--palette-info-paper",
  "--palette-on-primary",
  "--palette-on-active",
  "--palette-on-primary-paper",
  "--palette-on-active-paper"
];

const ids = [...data.matchAll(/id:\s*"([^"]+)"/g)].map((match) => match[1]);
const cssFiles = [...data.matchAll(/cssFile:\s*"([^"]+)"/g)].map((match) => match[1]);
const findings = [];

for (const file of files) {
  const text = readFileSync(file, "utf8");
  const basename = file.split("/").pop();
  if (!cssFiles.includes(basename)) {
    findings.push(`${file}: palette file is not listed in ${dataFile}`);
  }

  const selectorMatch = text.match(/^\[data-palette="([^"]+)"\]\s*\{/m);
  if (!selectorMatch) {
    findings.push(`${file}: missing root [data-palette] selector`);
    continue;
  }

  const id = selectorMatch[1];
  if (!ids.includes(id)) {
    findings.push(`${file}: data-palette "${id}" is not listed in ${dataFile}`);
  }

  for (const variable of requiredVars) {
    if (!text.includes(`${variable}:`)) {
      findings.push(`${file}: missing ${variable}`);
    }
  }

  text.split(/\r?\n/).forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("/*") || trimmed.startsWith("*")) return;
    const isAllowed = trimmed.startsWith("[data-palette=") || trimmed === "}" || trimmed.startsWith("--");
    if (!isAllowed) {
      findings.push(`${file}:${index + 1}: palette files may only contain variables under [data-palette]`);
    }
  });
}

for (const cssFile of cssFiles) {
  if (!files.some((file) => file.endsWith(`/${cssFile}`))) {
    findings.push(`${dataFile}: listed palette file does not exist: ${cssFile}`);
  }
}

if (findings.length > 0) {
  console.error("Palette contract check failed:");
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log(`Palette contract check passed (${files.length} palette files).`);
