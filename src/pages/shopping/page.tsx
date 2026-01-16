import { motion } from "framer-motion";
import backIcon from "@/assets/icon/ep_back.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  PRODUCT_SETS,
  type Product,
  type Season,
  type Tab,
} from "@/type/products";

export default function PersonalColorUI() {
  const [activeTab, setActiveTab] = useState<Tab>("clothes");

  const season: Season = "summer"; // This can be dynamic based on user data
  const products = PRODUCT_SETS[season]?.[activeTab] ?? [];
  const TABS: Tab[] = ["clothes", "makeup", "accessories"];

  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div>
        <img
          src={backIcon}
          alt="homeImage"
          className="max-w-9 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="relative w-full h-[420px] md:h-[520px] lg:h-[640px] bg-[#dcd8d6]">
        <div
          className="
      absolute inset-0
      flex items-center
    "
        >
          <div
            className="
        px-6
        md:px-20
        lg:px-32
        max-w-xl
      "
          >
            <p
              className="
          text-2xl
          md:text-3xl
          lg:text-4xl
          font-semibold
          leading-tight
          mb-6
        "
            >
              Try your perfect
              <br />
              shades in real time
            </p>

            <button
              className="
          inline-flex w-fit
          bg-[#8E1616]
          text-white
          px-8 py-3
          md:px-10 md:py-4
          rounded-full
          text-base md:text-lg
          shadow-lg shadow-[#8E1616]/30
          hover:scale-105 transition
        "
            >
              Virtual Try-On
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="flex gap-6 md:gap-28 ">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
          relative pb-2
          text-sm md:text-xl
          font-medium
          transition-colors
          ${
            activeTab === tab
              ? "text-black"
              : "text-gray-400 hover:text-gray-600"
          }
        `}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}

              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-red-700"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="my-20 px-6 md:px-20 text-center text-gray-500">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10">
          {products.map((item: Product) => (
            <div
              key={item.id}
              onClick={() =>
                navigate(`/product/${season}/${activeTab}/${item.id}`)
              }
              className="    cursor-pointer"
            >
              <div className="w-full  aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>

              <p className="text-xs md:text-xl text-gray-800 leading-snug text-left">
                {item.name}
              </p>
            </div>
          ))}
          {products.length === 0 && (
            <p className="col-span-full text-gray-400">No products available</p>
          )}
        </div>
      </div>
    </div>
  );
}
