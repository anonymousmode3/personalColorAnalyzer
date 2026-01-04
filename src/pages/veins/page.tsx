"use client";

import { useAnalyze } from "@/context/AnalyzeContext";
import PrimaryButton from "@/components/PrimaryButton";
import ProgressStep from "@/components/ProgressStep";
import { useNavigate } from "react-router-dom";

export default function VeinsPage() {
  const { state, dispatch } = useAnalyze();
  const navigate = useNavigate();

  const selectVein = (value: "cool" | "warm") => {
    dispatch({ type: "SET_VEIN", payload: value });
    dispatch({ type: "SET_STEP3", payload: null as any }); // reset step3
  };

  return (
    <div className="p-6">
      <ProgressStep current={2} />

      <h1 className="text-2xl font-bold mb-4">Select your vein color</h1>

      <div className="grid grid-cols-2 gap-4">
        <div>card1</div>
        <div>card2</div>
      </div>

      <PrimaryButton disabled={!state.vein} onClick={() => navigate("/steps")}>
        Next
      </PrimaryButton>
    </div>
  );
}
