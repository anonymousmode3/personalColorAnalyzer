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
    .detectSingleFace(
      img,
      new faceapi.TinyFaceDetectorOptions({
        inputSize: 512,
        scoreThreshold: 0.5,
      })
    )
    .withFaceLandmarks(true);

  if (!result) {
    return null; // 👈 NO FACE
  }

  return result;
}
