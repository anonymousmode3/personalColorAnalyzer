import uploadImageIcon from "@/assets/icon/upload-image.svg";
import { useRef } from "react";
import { useState } from "react";
import CameraModal from "./camera";
import ConsentModal from "@/components/consentModal";
import "@/styles/uploadImage.css";

type Props = {
  value: File | null;
  onSelect: (file: File) => void;
  openCamera: boolean;
};

export default function ImageUpload({ value, onSelect, openCamera }: Props) {
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
        <div className="m-5 min-w-325 bg-[url(@/assets/bg-upload-image.png)] bg-cover bg-center">
          <div className="flex justify-center">
            {value ? (
              <>
                <div className="flex justify-center">
                  <div className="p-10">
                    <div className="relative h-112.5 w-187.5 overflow-hidden rounded-lg bg-black">
                      <img
                        src={URL.createObjectURL(value)}
                        className="h-full w-full object-cover"
                        alt="preview"
                      />
                      {value && (
                        <button
                          onClick={() => {
                            onSelect(null as any);
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
