import { isSkinPixel } from "./skinFilter";

export type RGB = {
  r: number;
  g: number;
  b: number;
};

export function analyzeSkinColor(canvas: HTMLCanvasElement): RGB | null {
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;

  const { width, height } = canvas;
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;

  let r = 0, g = 0, b = 0, count = 0;

  for (let i = 0; i < data.length; i += 4) {
    const rr = data[i];
    const gg = data[i + 1];
    const bb = data[i + 2];

    if (!isSkinPixel(rr, gg, bb)) continue;

    r += rr;
    g += gg;
    b += bb;
    count++;
  }

  if (count === 0) return null;

  return {
    r: Math.round(r / count),
    g: Math.round(g / count),
    b: Math.round(b / count),
  };
}
