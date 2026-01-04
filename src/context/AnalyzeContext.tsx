import React, { createContext, useReducer, useContext } from "react";
import type {
  AnalyzeState,
  VeinType,
  Step1,
  Step2,
  Step3Cool,
  Step3Warm,
} from "@/type/analyze";

const initialState: AnalyzeState = {
  image: null,
  vein: null,
  step1: null,
  step2: null,
  step3: null,
  result: null,
};

type Action =
  | { type: "SET_IMAGE"; payload: File }
  | { type: "SET_VEIN"; payload: VeinType }
  | { type: "SET_STEP1"; payload: Step1 }
  | { type: "SET_STEP2"; payload: Step2 }
  | { type: "SET_STEP3"; payload: Step3Cool | Step3Warm }
  | { type: "SET_RESULT"; payload: string }
  | { type: "RESET" };

function reducer(state: AnalyzeState, action: Action): AnalyzeState {
  switch (action.type) {
    case "SET_IMAGE":
      return { ...state, image: action.payload };
    case "SET_VEIN":
      return { ...state, vein: action.payload };
    case "SET_STEP1":
      return { ...state, step1: action.payload };
    case "SET_STEP2":
      return { ...state, step2: action.payload };
    case "SET_STEP3":
      return { ...state, step3: action.payload };
    case "SET_RESULT":
      return { ...state, result: action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const AnalyzeContext = createContext<any>(null);

export const AnalyzeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AnalyzeContext.Provider value={{ state, dispatch }}>
      {children}
    </AnalyzeContext.Provider>
  );
};

export const useAnalyze = () => useContext(AnalyzeContext);
