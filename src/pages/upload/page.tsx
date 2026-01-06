"use client";

import { useAnalyze } from "@/context/AnalyzeContext";
import ImageUpload from "@/components/ImageUpload";
import ProgressStep from "@/components/ProgressStep";
import PrimaryButton from "@/components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CameraModal from "@/components/camera";
import ConsentModal from "@/components/consentModal";

export default function UploadPage() {
  const { state, dispatch } = useAnalyze();
  const [open, setOpen] = useState(true);
  const [openCamera, setOpenCamera] = useState(true);
  const navigate = useNavigate();

  const handleNext = () => {
    if (!state.image) return;
    navigate("/veins");
  };

  return (
    <div className="min-h-screen p-6">
      <ProgressStep current={1} />

      <h1 className="text-2xl font-bold mb-4">Upload your photo</h1>

      <ImageUpload
        value={state.image}
        onSelect={(file) => dispatch({ type: "SET_IMAGE", payload: file })}
      />

      <div className="flex justify-center">
        {openCamera && <CameraModal onClose={() => setOpenCamera(true)} />}
        {open && <ConsentModal onClose={() => setOpen(false)} />}
      </div>
      <PrimaryButton disabled={!state.image} onClick={handleNext}>
        Next
      </PrimaryButton>
    </div>
  );
}
