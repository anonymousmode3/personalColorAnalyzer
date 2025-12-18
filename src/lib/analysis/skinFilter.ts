export function isSkinPixel(r: number, g: number, b: number) {
  return (
    r > 95 &&
    g > 40 &&
    b > 20 &&
    r > g &&
    r > b &&
    Math.abs(r - g) > 15
  );
}
