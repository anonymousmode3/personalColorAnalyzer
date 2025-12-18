import { useEffect, useState } from "react";
import ImageUpload from "@/components/imageUpload";
import FaceCanvas from "@/components/faceCanvas";
import { loadFaceModels } from "@/lib/faceApi";
import { detectFace } from "@/lib/detectFace";
import * as faceapi from "face-api.js";

export default function UploadImage() {
  const [ready, setReady] = useState(false);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [result, setResult] = useState<faceapi.WithFaceLandmarks<
    { detection: faceapi.FaceDetection },
    faceapi.FaceLandmarks68
  > | null>(null);

  useEffect(() => {
    loadFaceModels().then(() => setReady(true));
  }, []);

  const handleImage = async (img: HTMLImageElement) => {
    setImage(img);
    const detection = await detectFace(img);
    setResult(detection);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Upload your photo</h1>

      <ImageUpload onImageLoad={handleImage} disabled={!ready} />

      {image && result && <FaceCanvas image={image} detection={result} />}
    </div>
  );
}
