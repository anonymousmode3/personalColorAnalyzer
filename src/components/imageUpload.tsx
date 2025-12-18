type Props = {
  onImageLoad: (img: HTMLImageElement) => void;
  disabled?: boolean;
};

export default function ImageUpload({ onImageLoad, disabled }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => onImageLoad(img);
  };

  return (
    <input
      type="file"
      accept="image/*"
      onChange={handleChange}
      className="block w-full"
      disabled={disabled}
    />
  );
}
