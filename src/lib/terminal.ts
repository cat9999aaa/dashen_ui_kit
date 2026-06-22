import { getPalette, palettes } from "../data/palettes";

type CommandMap = Record<string, () => void>;

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function initTerminal(): void {
  const log = document.querySelector<HTMLElement>("#terminal-log");
  const input = document.querySelector<HTMLInputElement>("#command-input");
  if (!log || !input) return;

  const writeLine = (html: string, className = ""): HTMLElement => {
    const line = document.createElement("div");
    if (className) line.className = className;
    line.innerHTML = html;
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;
    return line;
  };

  const bootLines: Array<[string, string]> = [
    ["EXOFRAME BIOS v0.1", "mu"],
    ["> memory ............... <span class=\"ok\">OK</span>", ""],
    ["> local assets ......... <span class=\"ok\">MOUNTED</span>", ""],
    ["> external cdn ......... <span class=\"er\">BLOCKED</span>", ""],
    ["> palette system ...... <span class=\"vi\">10 MODULES</span>", ""],
    ["> article/print layer .. <span class=\"am\">READY</span>", ""],
    ["type <span class=\"ok\">help</span> and press enter", "mu"]
  ];

  const typeLine = (html: string, className: string, done: () => void) => {
    if (reduceMotion) {
      writeLine(html, className);
      done();
      return;
    }
    const line = writeLine("", className);
    let i = 0;
    const tick = () => {
      line.innerHTML = html.slice(0, i);
      i += 1;
      if (i <= html.length) window.setTimeout(tick, 8);
      else done();
    };
    tick();
  };

  const runBoot = () => {
    log.innerHTML = "";
    let i = 0;
    const next = () => {
      if (i >= bootLines.length) return;
      typeLine(bootLines[i][0], bootLines[i][1], () => {
        i += 1;
        window.setTimeout(next, reduceMotion ? 0 : 90);
      });
    };
    next();
  };

  const commands: CommandMap = {
    help: () => writeLine("commands: <span class=\"ok\">help ls palette theme whoami boot clear</span>", "mu"),
    ls: () => writeLine("tokens/ palettes/ elements/ components/ motion/ print/ skill/", "vi"),
    palette: () => {
      const palette = getPalette(document.documentElement.dataset.palette ?? palettes[0].id);
      const colors = [...palette.ramp.slice(0, 6), ...palette.accents];
      writeLine(`<span class=\"mu\">${palette.name} · ${palette.cssFile}</span>`);
      writeLine(
        colors
          .map((color) => `<span style=\"background:${color.value};color:${color.foreground};padding:0 6px\">${color.value.toUpperCase()}</span>`)
          .join(" ")
      );
    },
    theme: () => {
      const root = document.documentElement;
      root.dataset.theme = root.dataset.theme === "paper" ? "void" : "paper";
      writeLine(`theme switched to <span class=\"ok\">${root.dataset.theme}</span>`);
    },
    whoami: () => writeLine("operator: local developer · since-2010 class · no remote telemetry", "am"),
    boot: runBoot,
    clear: () => {
      log.innerHTML = "";
    }
  };

  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    const value = input.value.trim();
    if (!value) return;
    writeLine(`<span class=\"ok\">$</span> ${value}`);
    input.value = "";
    const command = value.split(/\s+/)[0];
    if (commands[command]) commands[command]();
    else writeLine(`command not found: <span class=\"er\">${command}</span>`, "er");
  });

  runBoot();
}
