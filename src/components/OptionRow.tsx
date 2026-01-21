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
  const imageUrl = previewImage ? URL.createObjectURL(previewImage) : null;

  const capitalize = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <div className="grid md:flex md:justify-center gap-10">
      {options.map((opt) => {
        const selected = value === opt.value;

        return (
          <>
            <div className="grid gap-y-6 text-center">
              <div
                key={opt.value}
                onClick={() => onSelect(opt.value)}
                className={clsx(
                  "cursor-pointer rounded-2xl w-75 h-100 md:w-[384px] md:h-127.5 flex items-center justify-center shadow-xl transition-all border",
                  selected ? "border-2 border-[#8E1616]" : "border-[#7E7F83]"
                )}
                style={{ backgroundColor: opt.bgColor }}
              >
                {imageUrl && (
                  <div className="w-64 h-64 rounded-full overflow-hidden bg-white shadow-lg">
                    <img
                      src={imageUrl}
                      alt="preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              <div className="text-[28px] text-center">
                {capitalize(opt.value)}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
