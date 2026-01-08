"use client";

import { useState } from "react";
import { useAnalyze } from "@/context/AnalyzeContext";
import ImageUpload from "@/components/imageUpload";
import ProgressStep from "@/components/ProgressStep";
import PrimaryButton from "@/components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import backIcon from "@/assets/icon/ep_back.svg";
export default function UploadPage() {
  const { state, dispatch } = useAnalyze();
  const [startCamera, setStartCamera] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (!state.image) return;
    navigate("/veins");
  };

  const handleSnap = () => {
    setStartCamera(true);
  };

  return (
    <div className="min-h-screen p-6 bg-[#FAFAFA]">
      <div>
        <img
          src={backIcon}
          alt="homeImage"
          className="max-w-9 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <ProgressStep current={1} />

      <ImageUpload
        value={state.image}
        onSelect={(file) => dispatch({ type: "SET_IMAGE", payload: file })}
        openCamera={startCamera}
      />

      <div className="text-center">
        <PrimaryButton onClick={state.image ? handleNext : handleSnap}>
          {state.image ? "Next" : "Start"}
        </PrimaryButton>
      </div>
    </div>
  );
}
