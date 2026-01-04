import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/page";
import UploadPage from "@/pages/upload/page";
import MainLayout from "@/layouts/MainLayout";
import VeinsPage from "@/pages/veins/page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/veins" element={<VeinsPage />} />
          {/*<Route path="/steps" element={<StepsPage />} />
          <Route path="/analyze" element={<AnalyzePage />} />
          <Route path="/result" element={<ResultPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
