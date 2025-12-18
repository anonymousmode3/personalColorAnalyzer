import * as faceapi from "face-api.js";

export async function detectFace(
  img: HTMLImageElement
): Promise<
  | faceapi.WithFaceLandmarks<
      { detection: faceapi.FaceDetection },
      faceapi.FaceLandmarks68
    >
  | null
> {
  const result = await faceapi
    .detectSingleFace(img, new faceapi.TinyFaceDetectorOptions())
    .withFaceLandmarks(true); // 👈 IMPORTANT

  return result ?? null;
}
