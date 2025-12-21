import { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

type Props = {
  image: HTMLImageElement;
  detection: faceapi.WithFaceLandmarks<
    { detection: faceapi.FaceDetection },
    faceapi.FaceLandmarks68
  >;
  onSkinColor?: (rgb: { r: number; g: number; b: number }) => void;
};

export default function FaceCanvas({
  image,
  detection,
  onSkinColor,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = image.width;
    canvas.height = image.height;

    ctx.drawImage(image, 0, 0);

    // landmarks
    const landmarks = detection.landmarks.positions;

    // 👉 left cheek approx (points 2–4)
    const cheekPoints = landmarks.slice(2, 5);

    const x = Math.round(
      cheekPoints.reduce((s, p) => s + p.x, 0) / cheekPoints.length
    );
    const y = Math.round(
      cheekPoints.reduce((s, p) => s + p.y, 0) / cheekPoints.length
    );

    const data = ctx.getImageData(x, y, 1, 1).data;

    const rgb = {
      r: data[0],
      g: data[1],
      b: data[2],
    };

    onSkinColor?.(rgb);
  }, [image, detection]);

  return <canvas ref={canvasRef} className="max-w-full rounded" />;
}
