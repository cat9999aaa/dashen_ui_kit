export type PaletteSwatch = {
  name: string;
  label: string;
  value: string;
  foreground: string;
};

export type Palette = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  cssFile: string;
  ramp: PaletteSwatch[];
  accents: PaletteSwatch[];
};

const fg = {
  light: "#ffffff",
  dark: "#101018",
  black: "#050509"
};

export const palettes: Palette[] = [
  {
    id: "amethyst",
    name: "01 AMETHYST",
    shortName: "AMETHYST",
    cssFile: "01-amethyst.css",
    description: "Violet phosphor primary, green activation, amber signal.",
    ramp: [
      { name: "amethyst-950", label: "950", value: "#160c27", foreground: fg.light },
      { name: "amethyst-900", label: "900", value: "#24113f", foreground: fg.light },
      { name: "amethyst-800", label: "800", value: "#391c62", foreground: fg.light },
      { name: "amethyst-700", label: "700", value: "#4d2585", foreground: fg.light },
      { name: "amethyst-600", label: "600", value: "#6330a6", foreground: fg.light },
      { name: "amethyst-500", label: "500", value: "#7741c1", foreground: fg.light },
      { name: "amethyst-400", label: "400", value: "#9d6be8", foreground: fg.dark },
      { name: "amethyst-300", label: "300", value: "#b98cff", foreground: fg.dark },
      { name: "amethyst-200", label: "200", value: "#c9b2ec", foreground: fg.dark },
      { name: "amethyst-100", label: "100", value: "#e4d8f8", foreground: fg.dark },
      { name: "amethyst-50", label: "50", value: "#f4effc", foreground: fg.dark }
    ],
    accents: [
      { name: "activation", label: "ACTIVE", value: "#9df542", foreground: "#0a1500" },
      { name: "signal", label: "SIGNAL", value: "#f0a030", foreground: "#150900" },
      { name: "danger", label: "DANGER", value: "#ff4a52", foreground: fg.light },
      { name: "info", label: "INFO", value: "#4fd8ff", foreground: "#041018" }
    ]
  },
  {
    id: "azure",
    name: "02 AZURE",
    shortName: "AZURE",
    cssFile: "02-azure.css",
    description: "Cold blue instrumentation with cyan activation and amber warnings.",
    ramp: [
      { name: "azure-950", label: "950", value: "#061420", foreground: fg.light },
      { name: "azure-900", label: "900", value: "#08233a", foreground: fg.light },
      { name: "azure-800", label: "800", value: "#0b3558", foreground: fg.light },
      { name: "azure-700", label: "700", value: "#0d4b7a", foreground: fg.light },
      { name: "azure-600", label: "600", value: "#12639d", foreground: fg.light },
      { name: "azure-500", label: "500", value: "#1881c8", foreground: fg.light },
      { name: "azure-400", label: "400", value: "#41a9ea", foreground: fg.dark },
      { name: "azure-300", label: "300", value: "#79c9f5", foreground: fg.dark },
      { name: "azure-200", label: "200", value: "#b4e2fb", foreground: fg.dark },
      { name: "azure-100", label: "100", value: "#d8f1fd", foreground: fg.dark },
      { name: "azure-50", label: "50", value: "#eef9ff", foreground: fg.dark }
    ],
    accents: [
      { name: "activation", label: "ACTIVE", value: "#5af7ff", foreground: "#001416" },
      { name: "signal", label: "SIGNAL", value: "#f5b347", foreground: "#160d00" },
      { name: "danger", label: "DANGER", value: "#ff4f6d", foreground: fg.light },
      { name: "info", label: "INFO", value: "#8de0ff", foreground: "#061420" }
    ]
  },
  {
    id: "scarlet",
    name: "03 SCARLET",
    shortName: "SCARLET",
    cssFile: "03-scarlet.css",
    description: "Red combat shell with orange signal and blue diagnostic contrast.",
    ramp: [
      { name: "scarlet-950", label: "950", value: "#230708", foreground: fg.light },
      { name: "scarlet-900", label: "900", value: "#3b0a0c", foreground: fg.light },
      { name: "scarlet-800", label: "800", value: "#5a1114", foreground: fg.light },
      { name: "scarlet-700", label: "700", value: "#7c171b", foreground: fg.light },
      { name: "scarlet-600", label: "600", value: "#a31f25", foreground: fg.light },
      { name: "scarlet-500", label: "500", value: "#c93238", foreground: fg.light },
      { name: "scarlet-400", label: "400", value: "#e85d61", foreground: fg.dark },
      { name: "scarlet-300", label: "300", value: "#f48b8e", foreground: fg.dark },
      { name: "scarlet-200", label: "200", value: "#f9b9bb", foreground: fg.dark },
      { name: "scarlet-100", label: "100", value: "#fde0e1", foreground: fg.dark },
      { name: "scarlet-50", label: "50", value: "#fff1f1", foreground: fg.dark }
    ],
    accents: [
      { name: "activation", label: "ACTIVE", value: "#ff9d2e", foreground: "#160900" },
      { name: "signal", label: "SIGNAL", value: "#ffd166", foreground: "#171000" },
      { name: "danger", label: "DANGER", value: "#ff314f", foreground: fg.light },
      { name: "info", label: "INFO", value: "#48c8ff", foreground: "#031019" }
    ]
  },
  {
    id: "obsidian",
    name: "04 OBSIDIAN",
    shortName: "OBSIDIAN",
    cssFile: "04-obsidian.css",
    description: "Black frame system with icy violet signal and acid activation.",
    ramp: [
      { name: "obsidian-950", label: "950", value: "#030306", foreground: fg.light },
      { name: "obsidian-900", label: "900", value: "#08080d", foreground: fg.light },
      { name: "obsidian-800", label: "800", value: "#101019", foreground: fg.light },
      { name: "obsidian-700", label: "700", value: "#191925", foreground: fg.light },
      { name: "obsidian-600", label: "600", value: "#252535", foreground: fg.light },
      { name: "obsidian-500", label: "500", value: "#35354a", foreground: fg.light },
      { name: "obsidian-400", label: "400", value: "#56566d", foreground: fg.light },
      { name: "obsidian-300", label: "300", value: "#7b7b92", foreground: fg.dark },
      { name: "obsidian-200", label: "200", value: "#aaaabe", foreground: fg.dark },
      { name: "obsidian-100", label: "100", value: "#d7d7e4", foreground: fg.dark },
      { name: "obsidian-50", label: "50", value: "#f1f1f7", foreground: fg.dark }
    ],
    accents: [
      { name: "activation", label: "ACTIVE", value: "#b6ff4a", foreground: "#101500" },
      { name: "signal", label: "SIGNAL", value: "#9aa7ff", foreground: "#060818" },
      { name: "danger", label: "DANGER", value: "#ff495f", foreground: fg.light },
      { name: "info", label: "INFO", value: "#66f0ff", foreground: "#001618" }
    ]
  },
  {
    id: "argent",
    name: "05 ARGENT",
    shortName: "ARGENT",
    cssFile: "05-argent.css",
    description: "Silver-grade interface for restrained documentation and tooling.",
    ramp: [
      { name: "argent-950", label: "950", value: "#0b0d10", foreground: fg.light },
      { name: "argent-900", label: "900", value: "#171b20", foreground: fg.light },
      { name: "argent-800", label: "800", value: "#252b33", foreground: fg.light },
      { name: "argent-700", label: "700", value: "#37404a", foreground: fg.light },
      { name: "argent-600", label: "600", value: "#4c5965", foreground: fg.light },
      { name: "argent-500", label: "500", value: "#667482", foreground: fg.light },
      { name: "argent-400", label: "400", value: "#8a98a5", foreground: fg.dark },
      { name: "argent-300", label: "300", value: "#aeb9c2", foreground: fg.dark },
      { name: "argent-200", label: "200", value: "#cfd7dd", foreground: fg.dark },
      { name: "argent-100", label: "100", value: "#e7ecef", foreground: fg.dark },
      { name: "argent-50", label: "50", value: "#f6f8f9", foreground: fg.dark }
    ],
    accents: [
      { name: "activation", label: "ACTIVE", value: "#3df2c2", foreground: "#001712" },
      { name: "signal", label: "SIGNAL", value: "#f2c14e", foreground: "#171100" },
      { name: "danger", label: "DANGER", value: "#ef476f", foreground: fg.light },
      { name: "info", label: "INFO", value: "#4cc9f0", foreground: "#061018" }
    ]
  },
  {
    id: "osseous",
    name: "06 OSSEOUS",
    shortName: "OSSEOUS",
    cssFile: "06-osseous.css",
    description: "Bone-white shell with surgical red and mineral blue accents.",
    ramp: [
      { name: "osseous-950", label: "950", value: "#17120d", foreground: fg.light },
      { name: "osseous-900", label: "900", value: "#2a2118", foreground: fg.light },
      { name: "osseous-800", label: "800", value: "#423529", foreground: fg.light },
      { name: "osseous-700", label: "700", value: "#5c4b3b", foreground: fg.light },
      { name: "osseous-600", label: "600", value: "#786555", foreground: fg.light },
      { name: "osseous-500", label: "500", value: "#958373", foreground: fg.dark },
      { name: "osseous-400", label: "400", value: "#b4a798", foreground: fg.dark },
      { name: "osseous-300", label: "300", value: "#cec6b8", foreground: fg.dark },
      { name: "osseous-200", label: "200", value: "#e3ddd1", foreground: fg.dark },
      { name: "osseous-100", label: "100", value: "#f1ede5", foreground: fg.dark },
      { name: "osseous-50", label: "50", value: "#fbf8f1", foreground: fg.dark }
    ],
    accents: [
      { name: "activation", label: "ACTIVE", value: "#7bd88f", foreground: "#041307" },
      { name: "signal", label: "SIGNAL", value: "#d98e2b", foreground: "#140800" },
      { name: "danger", label: "DANGER", value: "#d92d20", foreground: fg.light },
      { name: "info", label: "INFO", value: "#3a86ff", foreground: fg.light }
    ]
  },
  {
    id: "amber",
    name: "07 AMBER",
    shortName: "AMBER",
    cssFile: "07-amber.css",
    description: "Classic amber terminal, warmed up for long-form reading.",
    ramp: [
      { name: "amber-950", label: "950", value: "#1b0f02", foreground: fg.light },
      { name: "amber-900", label: "900", value: "#321b04", foreground: fg.light },
      { name: "amber-800", label: "800", value: "#4d2a06", foreground: fg.light },
      { name: "amber-700", label: "700", value: "#6f3c08", foreground: fg.light },
      { name: "amber-600", label: "600", value: "#96540d", foreground: fg.light },
      { name: "amber-500", label: "500", value: "#c06f16", foreground: fg.dark },
      { name: "amber-400", label: "400", value: "#e8942e", foreground: fg.dark },
      { name: "amber-300", label: "300", value: "#f5b75f", foreground: fg.dark },
      { name: "amber-200", label: "200", value: "#ffd38e", foreground: fg.dark },
      { name: "amber-100", label: "100", value: "#ffe8bd", foreground: fg.dark },
      { name: "amber-50", label: "50", value: "#fff6df", foreground: fg.dark }
    ],
    accents: [
      { name: "activation", label: "ACTIVE", value: "#ffd166", foreground: "#171000" },
      { name: "signal", label: "SIGNAL", value: "#ff8c1a", foreground: "#160800" },
      { name: "danger", label: "DANGER", value: "#ff3b30", foreground: fg.light },
      { name: "info", label: "INFO", value: "#00d4ff", foreground: "#001318" }
    ]
  },
  {
    id: "phosphor",
    name: "08 PHOSPHOR",
    shortName: "PHOSPHOR",
    cssFile: "08-phosphor.css",
    description: "Green phosphor terminal with cold cyan diagnostics.",
    ramp: [
      { name: "phosphor-950", label: "950", value: "#041407", foreground: fg.light },
      { name: "phosphor-900", label: "900", value: "#08250d", foreground: fg.light },
      { name: "phosphor-800", label: "800", value: "#0d3b15", foreground: fg.light },
      { name: "phosphor-700", label: "700", value: "#13551f", foreground: fg.light },
      { name: "phosphor-600", label: "600", value: "#1b742c", foreground: fg.light },
      { name: "phosphor-500", label: "500", value: "#2a963d", foreground: fg.dark },
      { name: "phosphor-400", label: "400", value: "#54c764", foreground: fg.dark },
      { name: "phosphor-300", label: "300", value: "#83e68b", foreground: fg.dark },
      { name: "phosphor-200", label: "200", value: "#b6f5b9", foreground: fg.dark },
      { name: "phosphor-100", label: "100", value: "#dcfbdd", foreground: fg.dark },
      { name: "phosphor-50", label: "50", value: "#f0fff0", foreground: fg.dark }
    ],
    accents: [
      { name: "activation", label: "ACTIVE", value: "#adff2f", foreground: "#101600" },
      { name: "signal", label: "SIGNAL", value: "#f4d35e", foreground: "#171200" },
      { name: "danger", label: "DANGER", value: "#ff3b5c", foreground: fg.light },
      { name: "info", label: "INFO", value: "#48f2ff", foreground: "#001718" }
    ]
  },
  {
    id: "hazard",
    name: "09 HAZARD",
    shortName: "HAZARD",
    cssFile: "09-hazard.css",
    description: "Warning yellow, black structure, and emergency red.",
    ramp: [
      { name: "hazard-950", label: "950", value: "#171300", foreground: fg.light },
      { name: "hazard-900", label: "900", value: "#2a2200", foreground: fg.light },
      { name: "hazard-800", label: "800", value: "#433700", foreground: fg.light },
      { name: "hazard-700", label: "700", value: "#604f00", foreground: fg.light },
      { name: "hazard-600", label: "600", value: "#806a00", foreground: fg.light },
      { name: "hazard-500", label: "500", value: "#a88a00", foreground: fg.dark },
      { name: "hazard-400", label: "400", value: "#d4b000", foreground: fg.dark },
      { name: "hazard-300", label: "300", value: "#f5d13d", foreground: fg.dark },
      { name: "hazard-200", label: "200", value: "#ffe68a", foreground: fg.dark },
      { name: "hazard-100", label: "100", value: "#fff3c4", foreground: fg.dark },
      { name: "hazard-50", label: "50", value: "#fffbe8", foreground: fg.dark }
    ],
    accents: [
      { name: "activation", label: "ACTIVE", value: "#fff000", foreground: "#171400" },
      { name: "signal", label: "SIGNAL", value: "#ff9f1c", foreground: "#170900" },
      { name: "danger", label: "DANGER", value: "#e71d36", foreground: fg.light },
      { name: "info", label: "INFO", value: "#2ec4b6", foreground: "#001614" }
    ]
  },
  {
    id: "monochrome",
    name: "10 MONOCHROME",
    shortName: "MONO",
    cssFile: "10-monochrome.css",
    description: "Classic black-and-white interface for documents and neutral tools.",
    ramp: [
      { name: "mono-950", label: "950", value: "#050505", foreground: fg.light },
      { name: "mono-900", label: "900", value: "#111111", foreground: fg.light },
      { name: "mono-800", label: "800", value: "#1f1f1f", foreground: fg.light },
      { name: "mono-700", label: "700", value: "#333333", foreground: fg.light },
      { name: "mono-600", label: "600", value: "#4d4d4d", foreground: fg.light },
      { name: "mono-500", label: "500", value: "#737373", foreground: fg.light },
      { name: "mono-400", label: "400", value: "#999999", foreground: fg.dark },
      { name: "mono-300", label: "300", value: "#b8b8b8", foreground: fg.dark },
      { name: "mono-200", label: "200", value: "#d4d4d4", foreground: fg.dark },
      { name: "mono-100", label: "100", value: "#ececec", foreground: fg.dark },
      { name: "mono-50", label: "50", value: "#fafafa", foreground: fg.dark }
    ],
    accents: [
      { name: "activation", label: "ACTIVE", value: "#ffffff", foreground: fg.black },
      { name: "signal", label: "SIGNAL", value: "#b8b8b8", foreground: fg.dark },
      { name: "danger", label: "DANGER", value: "#2b2b2b", foreground: fg.light },
      { name: "info", label: "INFO", value: "#737373", foreground: fg.light }
    ]
  }
];

export function getPalette(id: string): Palette {
  return palettes.find((palette) => palette.id === id) ?? palettes[0];
}
