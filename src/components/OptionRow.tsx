import clsx from "clsx";

type OptionValue = string;

type OptionRowProps<T extends OptionValue> = {
  previewImage: File | null;
  value: T | null;
  onSelect: (value: T) => void;
  options: { value: T; bgColor: string }[];
};

export default function OptionRow<T extends OptionValue>({
  previewImage,
  value,
  onSelect,
  options,
}: OptionRowProps<T>) {
  const imageUrl = previewImage
    ? URL.createObjectURL(previewImage)
    : null;

  return (
    <div className="flex justify-center gap-6">
      {options.map((opt) => {
        const selected = value === opt.value;

        return (
          <div
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={clsx(
              "cursor-pointer rounded-2xl w-[384px] h-127.5 flex items-center justify-center shadow-xl transition-all border",
              selected
                ? "border-[#8E1616]"
                : "border-[#7E7F83]"
            )}
            style={{ backgroundColor: opt.bgColor }}
          >

            {imageUrl && (
              <div className="w-48 h-48 rounded-full overflow-hidden bg-white shadow-lg">
                <img
                  src={imageUrl}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
