export type PaletteSwatch = {
  name: string;
  label: string;
  value: string;
  foreground: string;
};

export type Palette = {
  id: string;
  name: string;
  description: string;
  ramp: PaletteSwatch[];
  accents: PaletteSwatch[];
};

export const palettes: Palette[] = [
  {
    id: "amethyst",
    name: "01 AMETHYST",
    description: "Violet phosphor primary, green activation, amber signal, red danger.",
    ramp: [
      { name: "violet-950", label: "950", value: "#160c27", foreground: "#ffffff" },
      { name: "violet-900", label: "900", value: "#24113f", foreground: "#ffffff" },
      { name: "violet-800", label: "800", value: "#391c62", foreground: "#ffffff" },
      { name: "violet-700", label: "700", value: "#4d2585", foreground: "#ffffff" },
      { name: "violet-600", label: "600", value: "#6330a6", foreground: "#ffffff" },
      { name: "violet-500", label: "500", value: "#7741c1", foreground: "#ffffff" },
      { name: "violet-400", label: "400", value: "#9d6be8", foreground: "#12081f" },
      { name: "violet-300", label: "300", value: "#b98cff", foreground: "#12081f" },
      { name: "violet-200", label: "200", value: "#c9b2ec", foreground: "#12081f" },
      { name: "violet-100", label: "100", value: "#e4d8f8", foreground: "#12081f" },
      { name: "violet-50", label: "50", value: "#f4effc", foreground: "#12081f" }
    ],
    accents: [
      { name: "phosphor-lime", label: "PHOSPHOR", value: "#9df542", foreground: "#0a1500" },
      { name: "signal-amber", label: "SIGNAL", value: "#f0a030", foreground: "#150900" },
      { name: "danger-red", label: "DANGER", value: "#ff4a52", foreground: "#ffffff" },
      { name: "signal-cyan", label: "INFO", value: "#4fd8ff", foreground: "#041018" }
    ]
  }
];
