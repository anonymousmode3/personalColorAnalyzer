import { useParams, useNavigate } from "react-router-dom";
import { PRODUCT_SETS } from "@/type/products";
import type { Season, Tab, Product } from "@/type/products";
import backIcon from "@/assets/icon/ep_back.svg";
export default function ProductDetailPage() {
  const { season, tab, id } = useParams();
  const navigate = useNavigate();

  const product: Product | undefined = PRODUCT_SETS[season as Season]?.[
    tab as Tab
  ]?.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="p-10 text-center">
        <p>Product not found</p>
        <button className="mt-4 underline" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 md:px-20 py-10">
      <div>
        <img
          src={backIcon}
          alt="homeImage"
          className="max-w-9 cursor-pointer"
          onClick={() => navigate(-1)}
        />
      </div>

      <div className="w-max-7xl mx-auto grid md:grid-cols gap-10 items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-140 aspect-square object-contain"
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-left">
          <h1 className="text-xl md:text-3xl ">{product.name}</h1>

          <p className="mt-2  text-xl md:text-3xl">Brand:</p>
        </div>
      </div>
    </div>
  );
}
