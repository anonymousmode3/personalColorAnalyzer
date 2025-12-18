import type { RGB } from "./colorAnalyzer";

export type Undertone = "warm" | "cool" | "neutral";

export function detectUndertone({ r, g, b }: RGB): Undertone {
  if (r > b && r > g) return "warm";
  if (b > r) return "cool";
  return "neutral";
}
