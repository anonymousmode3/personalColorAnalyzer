"use client";

import { useAnalyze } from "@/context/useAnalyze";
import { useEffect, useState } from "react";
import summer from "@/assets/result/banner-summer.png";
import autumn from "@/assets/result/banner-autumn.png";
import winter from "@/assets/result/banner-winter.png";
import spring from "@/assets/result/banner-spring.png";
import summerAccsessories from "@/assets/result/accessories-summer.png";
import springAccsessories from "@/assets/result/accessories-spring.png";
import autumnAccsessories from "@/assets/result/accessories-autumn.png";
import winterAccsessories from "@/assets/result/accessories-winter.png";
import logo from "@/assets/result/logo-result.png";
import bg from "@/assets/result/bg.png";
import banner from "@/assets/result/banner-shopping.png";
import { Link, useNavigate } from "react-router-dom";
import { COLOR_SETS, isColorSetKey } from "@/type/colorSets";

export default function ResultPage() {
  const { state } = useAnalyze();
  const navigate = useNavigate();
  const key = state.result?.toLowerCase();
  const data = key && isColorSetKey(key) ? COLOR_SETS[key] : undefined;
  const [description, setDescription] = useState("");

  const descriptionResult = () => {
    if (state.result == "Summer") {
      setDescription(
        "Summer Types often give a gentle, calm, and soft impression. They have cool-toned skin and muted hair and eye colors, creating an overall delicate look. Soft cool a like dusty pink, powder blue, lavender, and milky white suit them best, while strong warm colors can dull their appearance. Summer Types are generally seen as refined, graceful, and approachable.",
      );
    } else if (state.result == "Spring") {
      setDescription(
        "Spring types suit bright, clear, and lively colors, similar to the natural hues of the spring season. These colors convey a friendly, approachable, and cheerful impression.",
      );
    } else if (state.result == "Autumn") {
      setDescription(
        "Autumn types suit muted and relatively deep colors, similar to the natural hues of the fall season or earth tones. These colors convey a sense of seriousness, maturity, and reliability.",
      );
    } else if (state.result == "Winter") {
      setDescription(
        "Winter types suit colors that are both deep and vivid, similar to the natural hues of the winter season. These colors convey a sense of strength, confidence, and sharpness in both actions and speech.",
      );
    }
  };
  useEffect(() => {
    if (!state.image) {
      navigate("/upload");
    }
  }, []);
  useEffect(() => {
    if (!!state.result) {
      descriptionResult();
    }
  }, []);

  console.log("Analyze result state:", {
    vein: state.vein,
    step1: state.step1,
    step2: state.step2,
    step3: state.step3,
    finalResult: state.result,
  });

  if (!data) return null;

  return (
    <div>
      <div className="w-full  mx-auto relative">
        <img
          src={
            state.result == "Summer"
              ? summer
              : state.result == "Autumn"
                ? autumn
                : state.result == "Winter"
                  ? winter
                  : spring
          }
          alt="state.result"
          className="w-full h-auto rounded-lg"
        />
        {/* <img
            src={logo}
            alt="logo"
            className="
        absolute md:top-15 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-10 sm:w-16 md:w-15
      "
          /> */}
        <div className="absolute inset-0 flex flex-col justify-center pl-6 md:pl-60 text-left text-white ">
          <p className="text-white text-lg md:text-2xl drop-shadow">
            Your personal color is
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg mt-2">
            {state.result || "Summer"}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-6 md:mt-10 text-center text-sm md:text-lg leading-relaxed px-2 md:px-0">
        {description}
      </div>

      <div className="mt-10 relative">
        <img src={banner} alt="banner" className="w-full h-auto rounded-lg" />

        <div
          className="
      absolute inset-0
      flex flex-col
      justify-end
      items-center
      text-center
      px-4
      pb-4
      sm:pb-6
      md:pb-10
    "
        >
          <div className="max-w-xs sm:max-w-md md:max-w-xl">
            <p className="text-sm sm:text-lg md:text-3xl font-medium leading-snug">
              Find products that match
            </p>

            <p className="text-sm sm:text-lg md:text-3xl mt-1 mb-3 sm:mb-4">
              your personal color
            </p>

            <Link
              to="/shopping"
              className="
          inline-flex
          items-center
          justify-center
          bg-[#8E1616]
          text-white
          rounded-full
          px-4 py-2
          sm:px-6 sm:py-3
          md:px-10 md:py-4
          text-xs sm:text-base md:text-xl
          shadow-lg shadow-[#8E1616]/20
          hover:scale-105 transition
        "
            >
              Discover your matches
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 md:mt-14 text-2xl md:text-4xl font-bold text-[#8E1616]">
        Recommended colors
      </div>

      <div className="max-w-3xl mx-auto justify-center mt-10 rounded-2xl p-6  shadow-sm bg-white">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {data.recommended.map((c: string, i: number) => (
            <div
              key={i}
              className="w-full aspect-square rounded-xl"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto space-y-10 mt-10">
        {/* ---------- SECTION 1 ---------- */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {/* Make up */}
            <div className="text-center">
              <h3 className="text-[#8E1616] font-semibold text-xl mb-4">
                Make up
              </h3>

              <div className="bg-white rounded-2xl p-6 shadow-sm inline-block">
                <div className="grid grid-cols-2 gap-4">
                  {data.makeup.map((c: string, i: number) => (
                    <div
                      key={i}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-xl"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Accessories */}
            <div className="text-center">
              <h3 className="text-[#8E1616] font-semibold text-xl mb-4">
                Accessories
              </h3>

              <div className="rounded-2xl p-6 shadow-sm inline-block">
                <img
                  src={
                    state.result === "Summer"
                      ? summerAccsessories
                      : state.result === "Autumn"
                        ? autumnAccsessories
                        : state.result === "Winter"
                          ? winterAccsessories
                          : springAccsessories
                  }
                  alt="Accessories"
                  className="w-52 md:w-56 h-auto mx-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ---------- SECTION 2 ---------- */}
        <div className="mt-12 ">
          <h3 className="text-center text-[#8E1616] font-semibold text-xl mb-6">
            Color of good fortune
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 text-center md:px-45 mb-10">
            {Object.entries(data.fortune).map(([type, colors]) => (
              <div key={type}>
                <div className="w-full max-w-[240px] bg-[#F4CEC6] p-4 h-140 mb-5">
                  <p className="capitalize font-medium mb-2">{type} luck</p>

                  <div className="rounded-lg overflow-hidden shadow-sm">
                    {colors.map(
                      (c: { name: string; color: string }, i: number) => (
                        <div
                          key={i}
                          className="h-40 flex items-start p-3 text-white"
                          style={{ backgroundColor: c.color }}
                        >
                          {c.name}
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
