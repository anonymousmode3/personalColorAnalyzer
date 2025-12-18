import type { RGB } from "./colorAnalyzer";

export type Season = "spring" | "summer" | "autumn" | "winter";

export function detectSeason({ r, g, b }: RGB): Season {
  console.log("r", r, "g", g, "b", b);

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const chroma = max - min;

  const warmth = (r - b) * 0.6 + (g - b) * 0.4;
  const saturation = chroma / max;
  const brightness = (r + g + b) / 3;

  // clear + deep always winter
  if (saturation >= 0.28 && brightness < 140) return "winter";

  if (warmth > 25 && saturation < 0.28) return "autumn";
  if (warmth > 25 && saturation >= 0.28) return "spring";

  if (warmth <= 25 && saturation < 0.28) return "summer";
  return "winter";
}
