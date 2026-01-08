"use client";

import { useAnalyze } from "@/context/AnalyzeContext";
import ImageUpload from "@/components/ImageUpload";
import ProgressStep from "@/components/ProgressStep";
import PrimaryButton from "@/components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import backIcon from "@/assets/icon/ep_back.svg";

export default function UploadPage() {
  const { state, dispatch } = useAnalyze();
  const navigate = useNavigate();

  const handleNext = () => {
    if (!state.image) return;
    navigate("/veins");
  };

  return (
    <div className="min-h-screen p-6 bg-[#FAFAFA]">
      <div>
        <img src={backIcon} alt="homeImage" className="max-w-9" />
      </div>
      <ProgressStep current={1} />

      <ImageUpload
        value={state.image}
        onSelect={(file) => dispatch({ type: "SET_IMAGE", payload: file })}
      />

      <div className="text-center">
        <PrimaryButton disabled={!state.image} onClick={handleNext}>
          Start
        </PrimaryButton>
      </div>
    </div>
  );
}
