"use client";

import { useAnalyze } from "@/context/useAnalyze";
import PrimaryButton from "@/components/PrimaryButton";
import ProgressStep from "@/components/ProgressStep";
import { useNavigate } from "react-router-dom";
import backIcon from "@/assets/icon/ep_back.svg";
import clsx from "clsx";
import { useEffect } from "react";

export default function VeinsPage() {
  const { state, dispatch } = useAnalyze();
  const navigate = useNavigate();

  const selectVein = (value: "cool" | "warm") => {
    dispatch({ type: "SET_VEIN", payload: value });
    dispatch({ type: "RESET_STEP3" });
  };

  useEffect(() => {
    if(!state.image){
      navigate("/upload")
    }
  }, []);

  return (
    <div className="min-h-screen p-6">
      <div>
        <img
          src={backIcon}
          alt="homeImage"
          className="max-w-9 cursor-pointer"
          onClick={() => navigate("/upload")}
        />
      </div>

      <ProgressStep current={2} />

      <h1 className="font-semibold mb-4 text-center text-3xl md:text-5xl text-[#8E1616]">
        Take a look at your wrist <br />
        what color do your veins appear?
      </h1>

      <div className="md:m-5 justify-items-center w-full md:bg-[url(@/assets/bg-upload-image.png)] bg-size-[800px] md:bg-size-[1400px] bg-no-repeat bg-center">
        <div className="grid md:flex md:justify-center gap-10 mt-10">
          <div
            className="grid gap-y-6 text-center"
            onClick={() => selectVein("cool")}
          >
            <div
              className={clsx(
                "cursor-pointer rounded-2xl bg-gray-300 w-75 h-100 md:w-[384px] md:h-127.5 shadow-xl border border-[#7E7F83]",
                state.vein === "cool" && "border-2 border-[#8E1616]"
              )}
            ></div>
            <div className="text-[28px] text-center">Cool</div>
          </div>
          <div className="grid gap-y-6" onClick={() => selectVein("warm")}>
            <div
              className={clsx(
                "cursor-pointer rounded-2xl bg-gray-300 w-75 h-100 md:w-[384px] md:h-127.5 shadow-xl border border-[#7E7F83]",
                state.vein === "warm" && "border-2 border-[#8E1616]"
              )}
            ></div>
            <div className="text-[28px] text-center">Warm</div>
          </div>
        </div>
      </div>

      <div className="text-center pt-6">
        <PrimaryButton
          disabled={!state.vein}
          onClick={() => navigate("/steps")}
        >
          Next
        </PrimaryButton>
      </div>
    </div>
  );
}
