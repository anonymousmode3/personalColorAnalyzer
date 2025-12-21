import { TONE_PALETTES, type ToneType } from "./tonePalettes";
import {
  hexToRgb,
  colorDistance,
  type RGB,
} from "@/lib/analysis/colorAnalyzer";

export function detectTone(skin: RGB): {
  tone: ToneType;
  distance: number;
} {
  let bestTone: ToneType = "neutral";
  let bestDistance = Infinity;

  (Object.keys(TONE_PALETTES) as ToneType[]).forEach((tone) => {
    TONE_PALETTES[tone].forEach((hex) => {
      const dist = colorDistance(skin, hexToRgb(hex));
      if (dist < bestDistance) {
        bestDistance = dist;
        bestTone = tone;
      }
    });
  });

  console.log("result===>", { tone: bestTone, distance: bestDistance });

  return { tone: bestTone, distance: bestDistance };
}
