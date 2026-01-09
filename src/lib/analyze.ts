import type { AnalyzeState } from "@/type/analyze";

type Tone = "Bright" | "Soft";
type Season = "Winter" | "Summer" | "Autumn" | "Spring";

export function analyzeResult(state: AnalyzeState): Season {
  let scoreA = 0;

  if (state.step1 === "white") scoreA++;

  if (state.step2 === "black") scoreA++;

  if (state.step3 === "bright" || state.step3 === "bright2") scoreA++;

  const tone: Tone = scoreA >= 2 ? "Bright" : "Soft";

  if (state.vein === "cool" && tone === "Bright") return "Winter";
  if (state.vein === "cool" && tone === "Soft") return "Summer";
  if (state.vein === "warm" && tone === "Bright") return "Autumn";

  return "Spring";
}
