"use client";

import { useAnalyze } from "@/context/useAnalyze";
import { useEffect } from "react";
import summer from "@/assets/mock-up-result-summer.png";
import { Link, useNavigate } from "react-router-dom";
import { COLOR_SETS, isColorSetKey } from "@/type/colorSets";

export default function ResultPage() {
  const { state } = useAnalyze();
  const navigate = useNavigate();
  const key = state.result?.toLowerCase();
  const data = key && isColorSetKey(key) ? COLOR_SETS[key] : undefined;

  useEffect(() => {
    if (!state.image) {
      navigate("/upload");
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
        <img src={summer} alt="summer" className="w-full h-auto rounded-lg" />
        <div
          className="absolute 
      inset-0 
      flex 
      flex-col 
      justify-center 
      pl-6 
      md:pl-24 
      text-left
      text-white "
        >
          <p className="text-white text-lg md:text-2xl drop-shadow">
            Your personal color is
          </p>

          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg mt-2">
            {state.result || "Summer"}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-6 md:mt-10 text-center text-sm md:text-lg leading-relaxed px-2 md:px-0">
        Summer Types often give a gentle, calm, and soft impression. They have
        cool-toned skin and muted hair and eye colors, creating an overall
        delicate look. Soft cool shades like dusty pink, powder blue, lavender,
        and milky white suit them best, while strong warm colors can dull their
        appearance. Summer Types are generally seen as refined, graceful, and
        approachable.
      </div>

      <div className="text-center mt-10">
        <p className="text-xl md:text-3xl">Find products that match</p>
        <p className="text-xl md:text-3xl mb-6">your personal color</p>

        <Link
          to="/shopping"
          className="bg-[#8E1616] px-6 py-3 md:px-10 md:py-4 text-white rounded-full text-lg md:text-2xl shadow-lg shadow-[#8E1616]/20 inline-block"
        >
          Discover your matches
        </Link>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Make up */}
          <div className="text-center md:pl-20">
            <h3 className="text-[#8E1616] font-semibold text-xl mb-3">
              Make up
            </h3>

            <div className="bg-white rounded-2xl p-6 shadow-sm inline-block">
              <div className="grid grid-cols-2 gap-4">
                {data.makeup.map((c: string, i: number) => (
                  <div
                    key={i}
                    className="w-25 h-25 rounded-xl"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Accessories */}
          <div className="text-center">
            <h3 className="text-[#8E1616] font-semibold text-xl mb-3">
              Accessories
            </h3>

            <div className="bg-white rounded-2xl p-6 shadow-sm inline-block">
              <span className="text-gray-400">Coming soon</span>
            </div>
          </div>
        </div>

        {/* ---------- SECTION 2 ---------- */}
        <div>
          <h3 className="text-center text-[#8E1616] font-semibold text-xl mb-6">
            Color of good fortune
          </h3>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 text-center md:px-45">
   
            <div>
              <p className="font-medium mb-2">Career luck</p>

              <div className="overflow-hidden shadow-sm">
                <div
                  className="h-40 flex items-start p-3 text-white"
                  style={{ background: "#0BA4DB" }}
                >
                  Blue
                </div>
                <div
                  className="h-40 flex items-start p-3 text-white"
                  style={{ background: "#E3E6EB" }}
                >
                  Grey
                </div>
                <div
                  className="h-40 flex items-start p-3 text-white"
                  style={{ background: "#071D49" }}
                >
                  Navy
                </div>
              </div>
            </div>

  
            <div>
              <p className="font-medium mb-2">Love luck</p>

              <div className="overflow-hidden shadow-sm">
                <div
                  className="h-40 flex items-start p-3 text-white"
                  style={{ background: "#FFC3BD" }}
                >
                  Pink
                </div>
                <div
                  className="h-40 flex items-start p-3 text-white"
                  style={{ background: "#BFC5FF" }}
                >
                  Purple
                </div>
              </div>
            </div>

           
            <div>
              <p className="font-medium mb-2">Wealth luck</p>

              <div className="overflow-hidden shadow-sm">
                <div
                  className="h-40 flex items-start p-3 text-white"
                  style={{ background: "#B8EAD6" }}
                >
                  Green
                </div>
                <div
                  className="h-40 flex items-start p-3 text-white"
                  style={{ background: "#AEB3C2" }}
                >
                  Grey
                </div>
              </div>
            </div>
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-20 text-center md:px-45 mb-10">
            {Object.entries(data.fortune).map(([type, colors]) => (
              <div key={type}>
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
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
