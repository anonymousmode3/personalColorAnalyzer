import mockup from "@/assets/mock-up-product.png";
type Season = "summer" | "spring" | "autumn" | "winter";
type Tab = "clothes" | "makeup" | "accessories";

type Product = {
  id: string;
  name: string;
  image: string;
};

const PRODUCT_SETS: Record<Season, Record<Tab, Product[]>> = {
  summer: {
    clothes: [
      {
        id: "s-c1",
        name: "เสื้อสเวตเตอร์ ผ้าคอตตอน ป๊อปคอร์น | แขนสั้น",
        image: mockup,
      },
      { id: "s-c2", name: "เสื้อโปโลสเวตเตอร์ | แขนสั้น", image: mockup },
      {
        id: "s-c3",
        name: "เสื้อยืด HEATTECH Extra Warm ผ้าแคชเมียร์ผสม | แขนยาว",
        image: mockup,
      },
    ],
    makeup: [
      { id: "s-m1", name: "Soft Pink Lip", image: mockup },
      { id: "s-m2", name: "Lavender Blush", image: mockup },
      { id: "s-m3", name: "Cool Eyeshadow", image: mockup },
    ],
    accessories: [
      { id: "s-a1", name: "Silver Necklace", image: mockup },
      { id: "s-a2", name: "Pearl Earrings", image: mockup },
      { id: "s-a3", name: "Light Bag", image: mockup },
    ],
  },

  spring: {
    clothes: [],
    makeup: [],
    accessories: [],
  },

  autumn: {
    clothes: [],
    makeup: [],
    accessories: [],
  },

  winter: {
    clothes: [],
    makeup: [],
    accessories: [],
  },
};
export type { Product, Season, Tab };
export { PRODUCT_SETS };
