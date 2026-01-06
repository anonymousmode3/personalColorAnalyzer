import "@/styles/uploadImage.css";
type Props = {
  value: File | null;
  onSelect: (file: File) => void;
};

export default function ImageUpload({ value, onSelect }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) onSelect(file);
  };

  return (
    <div>
      <div className="border-2 border-dashed rounded-lg p-6 text-center">
        <input type="file" accept="image/*" onChange={handleChange} />

        {value && (
          <img
            src={URL.createObjectURL(value)}
            className="mt-4 mx-auto max-h-64 rounded"
          />
        )}
      </div>
    </div>
  );
}
