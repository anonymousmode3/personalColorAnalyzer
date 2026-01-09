"use client";

import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useAnalyze } from "@/context/useAnalyze";

export default function LoadingPage() {
  const { state } = useAnalyze();
  const navigate = useNavigate();

  const imageUrl = useMemo(() => {
    return state.image ? URL.createObjectURL(state.image) : null;
  }, [state.image]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/result");
    }, 5000);

    return () => {
      clearTimeout(timer);
      if (imageUrl) URL.revokeObjectURL(imageUrl);
    };
  }, [imageUrl]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#8E1616]">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="preview"
          className="w-64 h-64 rounded-full object-cover mb-8"
        />
      )}

      <p className="text-3xl text-white">Loading...</p>
    </div>
  );
}
