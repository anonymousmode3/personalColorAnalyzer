import { useEffect, useRef, useState } from "react";

export default function CameraModal({ onClose }: { onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [countdown, setCountdown] = useState<number | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);

  const start = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: false,
    });

    setStream(mediaStream);
    if (videoRef.current) {
      videoRef.current.srcObject = mediaStream;
    }

    setPhoto(null);
    setCountdown(3);
  };

  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      capture();
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => (prev !== null ? prev - 1 : null));
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

    const img = canvas.toDataURL("image/jpeg");
    setPhoto(img);

    stream?.getTracks().forEach((t) => t.stop());
    setCountdown(null);
  };

  const onRetake = () => {
    setPhoto(null);
    start();
  };

  return (
    <div className="page">
      <button className="upload">Upload image</button>

      <div className="frame">
        {!photo && <video ref={videoRef} autoPlay playsInline />}
        {photo && <img src={photo} alt="preview" />}

        {countdown !== null && <div className="countdown">{countdown}</div>}
        {/* <button className="retake-btn" onClick={onRetake}>
            Retake
          </button> */}
      </div>

      <button className="start" onClick={start}>
        Start
      </button>

      <canvas ref={canvasRef} hidden />
    </div>
  );
}
