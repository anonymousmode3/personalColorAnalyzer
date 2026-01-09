"use client";

import { useAnalyze } from "@/context/useAnalyze";

export default function ResultPage() {
  const { state } = useAnalyze();

    console.log("Analyze result state:", {
    vein: state.vein,
    step1: state.step1,
    step2: state.step2,
    step3: state.step3,
    finalResult: state.result,
  });

  return (
    <div className="min-h-screen p-6 text-center">
      <h1 className="text-5xl font-bold text-[#8E1616] mb-6">
        Your Personal Color
      </h1>

      <div className="text-6xl font-semibold">
        {state.result}
      </div>
    </div>
  );
}
