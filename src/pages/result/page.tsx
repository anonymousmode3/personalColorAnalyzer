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
import { Link, useNavigate } from "react-router-dom";
import { COLOR_SETS, isColorSetKey } from "@/type/colorSets";
import logo from "@/assets/logo.png";
import bannerShopping from "@/assets/result/banner-shopping.png";
import springCareer from "@/assets/result/spring-fortune-career.png";
import springLove from "@/assets/result/spring-fortune-love.png";
import springWealth from "@/assets/result/spring-fortune-wealth.png";
import summerCareer from "@/assets/result/summer-fortune-career.png";
import summerLove from "@/assets/result/summer-fortune-love.png";
import summerWealth from "@/assets/result/summer-fortune-wealth.png";
import autumnCareer from "@/assets/result/autumn-fortune-career.png";
import autumnLove from "@/assets/result/autumn-fortune-love.png";
import autumnWealth from "@/assets/result/autumn-fortune-wealth.png";
import winterCareer from "@/assets/result/winter-fortune-career.png";
import winterLove from "@/assets/result/winter-fortune-love.png";
import winterWealth from "@/assets/result/winter-fortune-wealth.png";

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
    if (!state.result) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
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
    <div className="pb-10">
      <div className="w-full  mx-auto relative">
        <div className="relative w-full h-79.75 md:h-full">
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
            alt="result"
            className="w-full h-auto rounded-lg"
          />

          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="absolute top-4 left-1/2 -translate-x-1/2 w-10 h-8 md:w-32 md:h-24 z-10"
            />
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-6 md:mt-10 text-center text-sm md:text-lg leading-relaxed px-2 md:px-0">
        {description}
      </div>

      <div className="mt-12 relative px-2 md:px-32">
        <img
          src={bannerShopping}
          alt="banner"
          className="w-full h-auto rounded-lg"
        />

        <div className=" absolute inset-0 flex flex-col justify-end items-center text-center px-4 pb-4 sm:pb-6 md:pb-10">
          <div className="max-w-xs sm:max-w-md md:max-w-xl">
            <p className="text-xs md:text-3xl font-medium leading-snug">
              Find products that match
            </p>

            <p className="text-xs md:text-3xl md:mt-1 md:mb-3 sm:mb-4">
              your personal color
            </p>

            <Link
              to="/shopping"
              className="inline-flex items-center justify-center bg-[#8E1616] text-white rounded-full px-2 py-1 sm:px-6 sm:py-3 md:px-10 md:py-4 text-[8px] md:text-xl shadow-lg shadow-[#8E1616]/20 hover:scale-105 transition"
            >
              Discover your matches
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 md:mt-14 text-2xl md:text-4xl font-bold text-[#8E1616]">
        Recommended colors
      </div>

      <div className="mx-4 md:mx-32 justify-center mt-10 rounded-2xl p-6 shadow-sm bg-white">
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
      <div className="px-4 md:px-32 mt-11 py-40 bg-[url(@/assets/result/bg.png)] bg-cover bg-center bg-no-repeat min-h-280">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          {/* Make up */}
          <div className="text-center h-full flex flex-col justify-center">
            <h3 className="text-[#8E1616] font-semibold md:text-[36px] mb-4">
              Make up
            </h3>

            <div className="bg-white rounded-2xl p-6 shadow-sm h-full flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 md:gap-12 p-2 md:p-8 h-full min-h-80 md:h-full">
                {data.makeup.map((c: string, i: number) => (
                  <div
                    key={i}
                    className="w-full aspect-square rounded-xl"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Accessories */}
          <div className="text-center h-full flex flex-col">
            <h3 className="text-[#8E1616] font-semibold md:text-[36px] mb-4 mt-11 md:mt-0">
              Accessories
            </h3>

            <div className="h-full flex items-center justify-center">
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
                className="w-full md:h-140 shadow-sm rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-6xl mx-auto space-y-10 mt-10">
        {/* ---------- SECTION 2 ---------- */}
        <div className="mt-12 ">
          <h3 className="text-center text-[#8E1616] font-semibold md:text-[36px] mb-6">
            Color of good fortune
          </h3>

          <div className="grid md:grid-cols-3 gap-20 px-14">
            <img
              src={
                state.result == "Summer"
                  ? summerCareer
                  : state.result == "Autumn"
                    ? autumnCareer
                    : state.result == "Winter"
                      ? winterCareer
                      : springCareer
              }
              alt="Color of good fortune"
              className=""
            />
            <img
              src={
                state.result == "Summer"
                  ? summerLove
                  : state.result == "Autumn"
                    ? autumnLove
                    : state.result == "Winter"
                      ? winterLove
                      : springLove
              }
              alt="Color of good fortune"
              className=""
            />
            <img
              src={
                state.result == "Summer"
                  ? summerWealth
                  : state.result == "Autumn"
                    ? autumnWealth
                    : state.result == "Winter"
                      ? winterWealth
                      : springWealth
              }
              alt="Color of good fortune"
              className=""
            />
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 text-center md:px-45">
            {Object.entries(data.fortune).map(([type, colors]) => (
              <div key={type}>
                <div className="w-full max-w-60 bg-[#F4CEC6] p-4 h-140 mb-5">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
