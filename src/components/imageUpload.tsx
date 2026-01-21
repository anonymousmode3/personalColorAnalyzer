import uploadImageIcon from "@/assets/icon/upload-image.svg";
import { useRef } from "react";
import { useState } from "react";
import CameraModal from "./camera";
import ConsentModal from "@/components/consentModal";
import "@/styles/uploadImage.css";

type Props = {
  value: File | null;
  onSelect: (file: File) => void;
  onClear: () => void;
  openCamera: boolean;
  noDetectFaceAlert: boolean;
  unsupportFileAlert: boolean;
};

export default function ImageUpload({
  value,
  onSelect,
  onClear,
  openCamera,
  noDetectFaceAlert,
  unsupportFileAlert,
}: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [openConsentModal, setOpenConsentModal] = useState(true);
  // const [retakeTrigger, setRetakeTrigger] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onSelect(file);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="text-center">
      <button
        onClick={handleClick}
        className="py-2 px-4 rounded-full inline-flex items-center gap-2 cursor-pointer bg-white text-[#8E1616] border border-[#8E1616]"
      >
        <img src={uploadImageIcon} alt="uploadImageIcon" />
        <span>Upload image</span>
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />

      <div className="flex justify-center">
        <div className="m-5 min-w-full md:min-w-325 bg-[url(@/assets/bg-upload-image.png)] bg-size-[800px] md:bg-size-[1300px] bg-no-repeat bg-center">
          <div className="flex justify-center">
            {value ? (
              <>
                <div className="flex justify-center">
                  <div className="p-10">
                    <div className="relative h-112.5 w-187.5 overflow-hidden rounded-lg bg-black">
                      {noDetectFaceAlert && (
                        <div className="absolute inset-0 z-10 flex items-start justify-center p-4">
                          <div className="w-1/2 rounded-full bg-white/60 p-3 text-center shadow-lg">
                            Please try again. We couldn't detect a face in the
                            image.
                            <span
                              className="pl-4 cursor-pointer font-semibold"
                              onClick={onClear}
                            >
                              X
                            </span>
                          </div>
                        </div>
                      )}

                      {unsupportFileAlert && (
                        <div className="absolute inset-0 z-10 flex items-start justify-center p-4">
                          <div className="w-1/2 md:w-2/3 rounded-full bg-white/60 p-3 text-center shadow-lg">
                            Unsupported file format or file size exceeds the
                            limit. Please upload a JPG or PNG file under 3 MB.
                            <span
                              className="pl-4 cursor-pointer font-semibold"
                              onClick={onClear}
                            >
                              X
                            </span>
                          </div>
                        </div>
                      )}

                      <img
                        src={URL.createObjectURL(value)}
                        className="h-full w-full object-contain"
                        alt="preview"
                      />
                      {value && (
                        <button
                          onClick={() => {
                            onSelect(null as never);
                          }}
                          className="z-100 absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full  bg-white text-[#8E1616] border border-[#8E1616]"
                        >
                          Retake
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="">
                {openConsentModal ? (
                  <ConsentModal onClose={() => setOpenConsentModal(false)} />
                ) : (
                  <CameraModal startCapture={openCamera} onCapture={onSelect} />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
