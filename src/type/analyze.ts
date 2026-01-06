export type VeinType = "cool" | "warm";

export type Step1 = "white" | "cream";
export type Step2 = "black" | "brown";
export type Step3Cool = "bright" | "soft";
export type Step3Warm = "bright2" | "soft2";

export interface AnalyzeState {
  image: File | null;
  vein: VeinType | null;

  step1: Step1 | null;
  step2: Step2 | null;
  step3: Step3Cool | Step3Warm | null;

  result: string | null;
}
