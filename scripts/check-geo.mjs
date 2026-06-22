import { existsSync, readFileSync } from "node:fs";
import { alternatesFor, pages, site, absoluteUrl } from "./seo-data.mjs";

const required = ["public/robots.txt", "public/sitemap.xml", "public/llms.txt", "public/llms-full.txt", "public/ai.txt"];
const findings = [];

for (const file of required) {
  if (!existsSync(file)) findings.push(`Missing ${file}`);
}

for (const page of pages) {
  if (!existsSync(page.file)) findings.push(`Missing page source ${page.file}`);
  const text = existsSync(page.file) ? readFileSync(page.file, "utf8") : "";
  const canonical = absoluteUrl(page.path);
  const expectations = [
    [`<html lang="${page.lang === "zh-CN" ? "zh" : "en"}"`, "html lang"],
    [`<meta name="description" content="${page.description}"`, "description"],
    [`<link rel="canonical" href="${canonical}"`, "canonical"],
    [`<meta property="og:url" content="${canonical}"`, "og:url"],
    [`application/ld+json`, "json-ld"]
  ];
  for (const alternate of alternatesFor(page)) {
    expectations.push([`hreflang="${alternate.lang}" href="${alternate.href}"`, `${alternate.lang} hreflang`]);
  }
  for (const [needle, label] of expectations) {
    if (!text.includes(needle)) findings.push(`${page.file}: missing ${label}`);
  }
}

const sitemap = existsSync("public/sitemap.xml") ? readFileSync("public/sitemap.xml", "utf8") : "";
for (const page of pages) {
  const url = absoluteUrl(page.path);
  if (!sitemap.includes(`<loc>${url}</loc>`)) findings.push(`sitemap.xml missing ${url}`);
  for (const alternate of alternatesFor(page)) {
    if (!sitemap.includes(`hreflang="${alternate.lang}" href="${alternate.href}"`)) {
      findings.push(`sitemap.xml missing ${alternate.lang} alternate for ${url}`);
    }
  }
}

const llms = existsSync("public/llms.txt") ? readFileSync("public/llms.txt", "utf8") : "";
if (!llms.includes(site.name) || !llms.includes("HTML PPT")) {
  findings.push("llms.txt missing project identity or HTML PPT summary");
}

if (findings.length > 0) {
  console.error("GEO check failed:");
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log("GEO check passed.");
