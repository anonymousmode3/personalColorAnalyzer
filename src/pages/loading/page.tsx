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
    if (!state.image) {
      navigate("/upload");
    }

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
        <div className="w-60 h-80 md:w-70 md:h-90 overflow-hidden bg-white shadow-lg [clip-path:ellipse(50%_50%_at_50%_50%)] opacity-60">
          <img src={imageUrl} className="w-full h-full object-cover" />
        </div>
      )}

      <p className="text-3xl text-white mt-8">Loading...</p>
    </div>
  );
}
