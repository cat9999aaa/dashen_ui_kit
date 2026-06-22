import { existsSync, readFileSync } from "node:fs";

const findings = [];

function readRequired(file) {
  if (!existsSync(file)) {
    findings.push(`Missing ${file}`);
    return "";
  }
  return readFileSync(file, "utf8");
}

const skill = readRequired("skill/SKILL.md");
const agent = readRequired("skill/agents/openai.yaml");

if (skill) {
  const frontmatter = skill.match(/^---\n([\s\S]+?)\n---/);
  if (!frontmatter) {
    findings.push("skill/SKILL.md missing YAML frontmatter");
  } else {
    const meta = frontmatter[1];
    if (!/^name:\s*exoframe-ui\s*$/m.test(meta)) findings.push("skill/SKILL.md missing name: exoframe-ui");
    if (!/^description:\s*\S+/m.test(meta)) findings.push("skill/SKILL.md missing description");
  }

  for (const required of [
    "references/design-rules.md",
    "references/module-map.md",
    "references/ppt-workflow.md",
    "assets/showcase-template/",
    "assets/html-deck-template/"
  ]) {
    if (!skill.includes(required)) findings.push(`skill/SKILL.md missing reference to ${required}`);
  }
}

for (const file of [
  "skill/references/design-rules.md",
  "skill/references/module-map.md",
  "skill/references/ppt-workflow.md",
  "skill/assets/showcase-template/index.html",
  "skill/assets/html-deck-template/index.html"
]) {
  if (!existsSync(file)) findings.push(`Missing ${file}`);
}

if (agent) {
  for (const needle of ["display_name:", "short_description:", "brand_color:", "default_prompt:", "allow_implicit_invocation:"]) {
    if (!agent.includes(needle)) findings.push(`skill/agents/openai.yaml missing ${needle}`);
  }
}

if (findings.length > 0) {
  console.error("Skill check failed:");
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log("Skill check passed.");
