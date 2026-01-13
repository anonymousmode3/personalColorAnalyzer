"use client";

import { useAnalyze } from "@/context/useAnalyze";
import PrimaryButton from "@/components/PrimaryButton";
import ProgressStep from "@/components/ProgressStep";
import OptionRow from "@/components/OptionRow";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import backIcon from "@/assets/icon/ep_back.svg";
import { analyzeResult } from "@/lib/analyze";

type Step1Value = "white" | "cream";
type Step2Value = "black" | "brown";
type Step3Value = "bright" | "soft" | "bright2" | "soft2";

type Round = 1 | 2 | 3;

export default function StepsPage() {
  const { state, dispatch } = useAnalyze();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.image) {
      navigate("/upload");
    }
  }, []);

  const [round, setRound] = useState<Round>(1);
  const [step1, setStep1] = useState<Step1Value | null>(null);
  const [step2, setStep2] = useState<Step2Value | null>(null);
  const [step3, setStep3] = useState<Step3Value | null>(null);

  const handleBack = () => {
    if (round === 1) {
      navigate("/veins");
    } else if (round === 2) {
      setRound(1);
    } else {
      setRound(2);
    }
  };

  const progressMap = {
    1: 3,
    2: 4,
    3: 5,
  } as const;

  const canNext =
    (round === 1 && step1) || (round === 2 && step2) || (round === 3 && step3);

  const handleNext = () => {
    if (round === 1) {
      dispatch({ type: "SET_STEP1", payload: step1! });
      return setRound(2);
    }

    if (round === 2) {
      dispatch({ type: "SET_STEP2", payload: step2! });
      return setRound(3);
    }

    dispatch({ type: "SET_STEP3", payload: step3! });

    const result = analyzeResult({
      ...state,
      step1,
      step2,
      step3,
    });

    dispatch({ type: "SET_RESULT", payload: result });

    navigate("/loading");
  };

  return (
    <div className="min-h-screen p-6">
      <div>
        <img
          src={backIcon}
          alt="homeImage"
          className="max-w-9 cursor-pointer"
          onClick={handleBack}
        />
      </div>
      <ProgressStep current={progressMap[round]} />

      <h1 className="font-semibold mb-4 text-center text-3xl md:text-5xl text-[#8E1616]">
        Which color do you think suits you best?
      </h1>
      <div className="m-5 mt-10 md:bg-[url(@/assets/bg-upload-image.png)] bg-size-[800px] md:bg-size-[1300px] bg-no-repeat bg-center">
        {round === 1 && (
          <OptionRow
            previewImage={state.image}
            value={step1}
            onSelect={setStep1}
            options={[
              { value: "white", bgColor: "#FFFFFF" },
              { value: "cream", bgColor: "#F5F0E6" },
            ]}
          />
        )}

        {round === 2 && (
          <OptionRow
            previewImage={state.image}
            value={step2}
            onSelect={setStep2}
            options={[
              { value: "black", bgColor: "#000000" },
              { value: "brown", bgColor: "#5A3A1E" },
            ]}
          />
        )}

        {round === 3 && (
          <OptionRow
            previewImage={state.image}
            value={step3}
            onSelect={setStep3}
            options={
              state.vein === "cool"
                ? [
                    { value: "bright", bgColor: "#0047AB" },
                    { value: "soft", bgColor: "#6B7C93" },
                  ]
                : [
                    { value: "bright2", bgColor: "#FF7A45" },
                    { value: "soft2", bgColor: "#C65A1E" },
                  ]
            }
          />
        )}
      </div>

      <div className="text-center mt-12">
        <PrimaryButton disabled={!canNext} onClick={handleNext}>
          {round === 3 ? "Continue to result" : "Next"}
        </PrimaryButton>
      </div>
    </div>
  );
}
