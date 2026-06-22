import { readFileSync } from "node:fs";

const file = "src/styles/main.css";
const text = readFileSync(file, "utf8");
const broadImports = [...text.matchAll(/@import\s+["']@fontsource\/[^/"']+\/(?:[0-9]+|index)\.css["'];/g)];

if (broadImports.length > 0) {
  console.error("Use subsetted @fontsource imports instead of broad weight imports:");
  for (const match of broadImports) {
    const line = text.slice(0, match.index).split(/\r?\n/).length;
    console.error(`${file}:${line}: ${match[0]}`);
  }
  process.exit(1);
}

console.log("Font import check passed (subset imports only).");
