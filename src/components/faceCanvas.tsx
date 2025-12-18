import { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import { analyzeSkinColor } from "../lib/analysis/colorAnalyzer";
import { detectSeason } from "../lib/analysis/seasonClassifier";

type Props = {
  image: HTMLImageElement;
  detection: faceapi.WithFaceLandmarks<
    { detection: faceapi.FaceDetection },
    faceapi.FaceLandmarks68
  >;
  onFaceReady?: (canvas: HTMLCanvasElement) => void;
};

export default function FaceCanvas({ image, detection, onFaceReady }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const { x, y, width, height } = detection.detection.box;
    const canvas = canvasRef.current;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, width, height);

    ctx.drawImage(image, x, y, width, height, 0, 0, width, height);

    onFaceReady?.(canvas);
    const color = analyzeSkinColor(canvas);
    if (color) {
      const season = detectSeason(color ?? null);

      console.log("season----->", season);
    }
  }, [image, detection, onFaceReady]);

  return <canvas ref={canvasRef} className="border rounded" />;
}
