"use client";

import { useAnalyze } from "@/context/useAnalyze";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ResultPage() {
  const { state } = useAnalyze();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.image) {
      navigate("/upload");
    }
  }, []);

  return (
    <div className="min-h-screen p-6 text-center">
      <h1 className="text-5xl font-bold text-[#8E1616] mb-6">
        Your Personal Color
      </h1>

      <div className="text-6xl font-semibold">{state.result}</div>
    </div>
  );
}
