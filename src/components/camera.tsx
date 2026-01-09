import { useEffect, useRef, useState } from "react";

type Props = {
  startCapture: boolean;
  onCapture: (file: File) => void;
};

export default function CameraModal({ startCapture, onCapture }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [countdown, setCountdown] = useState<number | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  // Start camera stream on mount
  useEffect(() => {
    (async () => {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });

      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    })();

    return () => {
      stream?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  useEffect(() => {
    if (!startCapture) return;
    setCountdown(3);
  }, [startCapture]);

  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      capture();
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((c) => (c !== null ? c - 1 : null));
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  const capture = () => {
    const video = videoRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.translate(canvas.width, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(video, 0, 0);

    canvas.toBlob((blob) => {
      if (!blob) return;

      const file = new File([blob], "camera.jpg", {
        type: "image/jpeg",
      });

      stream?.getTracks().forEach((t) => t.stop());
      onCapture(file);
    }, "image/jpeg");
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="object-cover rounded"
      />

      {countdown !== null && (
        <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold bg-black/40">
          {countdown}
        </div>
      )}

      <canvas ref={canvasRef} hidden />
    </div>
  );
}
