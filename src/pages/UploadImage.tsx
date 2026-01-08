import { useEffect, useState } from "react";
import ImageUpload from "@/components/ImageUpload";
import FaceCanvas from "@/components/faceCanvas";
import { loadFaceModels } from "@/lib/faceApi";
import { detectFace } from "@/lib/detectFace";
import * as faceapi from "face-api.js";
import { detectTone } from "@/lib/analysis/toneDetector";
import type { ToneType } from "@/lib/analysis/tonePalettes";
import ConsentModal from "@/components/consentModal";
import CameraModal from "@/components/camera";
import "@/styles/uploadImage.css";

export default function UploadImage() {
  const [ready, setReady] = useState(false);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [result, setResult] = useState<faceapi.WithFaceLandmarks<
    { detection: faceapi.FaceDetection },
    faceapi.FaceLandmarks68
  > | null>(null);
  const [tone, setTone] = useState<ToneType | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [open, setOpen] = useState(true);
  const [openCamera, setOpenCamera] = useState(false);

  useEffect(() => {
    loadFaceModels().then(() => setReady(true));
  }, []);

  const handleImage = async (img: HTMLImageElement) => {
    setError(null);
    setImage(img);

    const detection = await detectFace(img);

    if (!detection) {
      setResult(null);
      setError("No face detected. Please upload a clear face photo.");
      return;
    }

    setResult(detection);
  };
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Upload your photo</h1>

      <ImageUpload onImageLoad={handleImage} disabled={!ready} />

      {image && result && !error && (
        <FaceCanvas
          image={image}
          detection={result}
          onSkinColor={(rgb) => {
            const res = detectTone(rgb);
            setTone(res.tone);
            console.log("tone:", res);
          }}
        />
      )}
      {error && (
        <div className="rounded bg-red-100 p-4 text-red-700">{error}</div>
      )}
      <div className="text-4xl font-bold bg-red-800 text-white">
        TONE ==== {tone}
      </div>
      <div className="flex justify-center">
        <button
          className="start-btn bg-red-800"
          onClick={() => setOpenCamera(true)}
        >
          Startหหหหหห
        </button>
        {openCamera && <CameraModal onClose={() => setOpenCamera(false)} />}
        {open && <ConsentModal onClose={() => setOpen(false)} />}
      </div>
    </div>
  );
}
