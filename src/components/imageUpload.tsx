import uploadImageIcon from "@/assets/icon/upload-image.svg";
import { useRef } from "react";

type Props = {
  value: File | null;
  onSelect: (file: File) => void;
};

export default function ImageUpload({ value, onSelect }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);

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
        <div className="m-5 min-h-[600px] min-w-[1300px] bg-[url(@/assets/bg-upload-image.png)] bg-cover bg-center">
          <div className="flex justify-center">
            {value ? (
              <>
                <div className="flex justify-center">
                  <div className="p-10">
                    <img
                      src={URL.createObjectURL(value)}
                      className="mt-4 mx-auto min-h-[450px] w-[750px] rounded"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="p-10 mt-16 bg-gray-300 min-h-[450px] w-[750px]">
                display camera
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
