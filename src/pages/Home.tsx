import { Link } from "react-router-dom";
import StickyLogo from "@/components/stickyLogo";
import banner from "@/assets/mock-up-home-banner.png";
import homeImage from "@/assets/mock-up-home-image.png";

export default function Home() {
  return (
    <div className="relative -mt-20">
      <StickyLogo />
      <div>
        <img src={banner} alt="banner" className="h-[638px] w-full" />
      </div>

      <div className="space-y-12 py-12">
        <div className="flex justify-center">
          <Link
            to="/upload-image"
            className="bg-[#8E1616] px-6 py-4 font-thin text-[28px] text-white rounded-full shadow-lg shadow-[#8E1616]/20"
          >
            Discover Your Personal Color
          </Link>
        </div>
        <div className="text-[40px] text-center font-bold text-[#8E1616]">
          What is Personal Color ?
        </div>

        <div className="flex justify-center">
          <div className="text-center w-3xl text-[28px]">
            Colors that match our skin tone will make shadows on the face appear
            less noticeable, reducing the appearance of wrinkles, laugh lines,
            and under-eye circles. This makes the face look brighter and
            healthier. However, using personal color is just one option for
            dressing. It can be adapted to suit your style and confidence level.
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex justify-center">
            <img src={homeImage} alt="homeImage" className="max-w-[796px]" />
          </div>
          <div className="flex justify-center">
            <Link
              to="/upload-image"
              className="border border-[#8E1616] px-6 py-2 font-light text-2xl text-[#8E1616] rounded-full shadow-lg shadow-black/10"
            >
              View Spring tone
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex justify-center">
            <img src={homeImage} alt="homeImage" className="max-w-[796px]" />
          </div>
          <div className="flex justify-center">
            <Link
              to="/upload-image"
              className="border border-[#8E1616] px-6 py-2 font-light text-2xl text-[#8E1616] rounded-full shadow-lg shadow-black/10"
            >
              View Summer tone
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex justify-center">
            <img src={homeImage} alt="homeImage" className="max-w-[796px]" />
          </div>
          <div className="flex justify-center">
            <Link
              to="/upload-image"
              className="border border-[#8E1616] px-6 py-2 font-light text-2xl text-[#8E1616] rounded-full shadow-lg shadow-black/10"
            >
              View Autumn tone
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
