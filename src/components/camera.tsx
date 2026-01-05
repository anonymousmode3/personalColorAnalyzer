import { useEffect, useRef } from 'react'

export default function CameraModal({ onClose }: { onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  let stream: MediaStream | null = null

  useEffect(() => {
    async function startCamera() {
      stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' },
        audio: false
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
      }
    }

    startCamera()

    return () => {
      stream?.getTracks().forEach(track => track.stop())
    }
  }, [])

  const capture = () => {
    const video = videoRef.current!
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    ctx.drawImage(video, 0, 0)

    const imageBase64 = canvas.toDataURL('image/jpeg')
    console.log(imageBase64)

    // TODO: ส่งไป backend หรือ analysis
    onClose()
  }

  return (
    <div className="modal-backdrop">
      <div className="camera-modal">
        <video ref={videoRef} autoPlay playsInline />

        <div className="actions">
          <button onClick={capture}>Capture</button>
          <button onClick={onClose}>Close</button>
        </div>

        <canvas ref={canvasRef} hidden />
      </div>
    </div>
  )
}
