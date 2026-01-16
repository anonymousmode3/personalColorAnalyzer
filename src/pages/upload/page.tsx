"use client";

import { useEffect, useState } from "react";

import ImageUpload from "@/components/imageUpload";
import ProgressStep from "@/components/ProgressStep";
import PrimaryButton from "@/components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import backIcon from "@/assets/icon/ep_back.svg";
import { useAnalyze } from "@/context/useAnalyze";
import { detectFace } from "@/lib/detectFace";
import { loadFaceModels } from "@/lib/faceApi";
import { fileToImage } from "@/lib/fileToImage";

export default function UploadPage() {
  const { state, dispatch } = useAnalyze();
  const [startCamera, setStartCamera] = useState(false);
  const [ready, setReady] = useState(false);
  const [noDetectFaceAlert, setNoDetectFaceAlert] = useState(false);
  const [unsupportFileAlert, setUnsupportFileAlert] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    loadFaceModels().then(() => setReady(true));
  }, []);

  const handleSelectImage = async (file: File) => {
    setNoDetectFaceAlert(false);
    setUnsupportFileAlert(false);

    if (!ready) {
      alert("Face model still loading...");
      return;
    }
    dispatch({ type: "SET_IMAGE", payload: file });

    const allowedTypes = ["image/jpeg", "image/png"];
    const maxSize = 3 * 1024 * 1024;

    if (!allowedTypes.includes(file.type) || file.size > maxSize) {
      setUnsupportFileAlert(true);
      return;
    }

    const img = await fileToImage(file);
    const result = await detectFace(img);

    if (!result) {
      setNoDetectFaceAlert(true);
      return;
    }
  };

  const onClear = () => {
    dispatch({ type: "SET_IMAGE", payload: null });
    setStartCamera(false);
    setNoDetectFaceAlert(false);
    setUnsupportFileAlert(false);
  };

  const handleNext = () => {
    if (!state.image) return;
    navigate("/veins");
  };

  const handleSnap = () => {
    setStartCamera(true);
  };

  return (
    <div className="min-h-screen p-6">
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
        noDetectFaceAlert={noDetectFaceAlert}
        unsupportFileAlert={unsupportFileAlert}
        onSelect={handleSelectImage}
        onClear={onClear}
        openCamera={startCamera}
      />

      <div className="text-center">
        <PrimaryButton
          onClick={state.image ? handleNext : handleSnap}
          disabled={
            state.image
              ? noDetectFaceAlert || unsupportFileAlert
                ? true
                : false
              : false
          }
        >
          {state.image ? "Next" : "Start"}
        </PrimaryButton>
      </div>
    </div>
  );
}
