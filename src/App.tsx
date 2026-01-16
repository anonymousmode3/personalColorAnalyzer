import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/page";
import UploadPage from "@/pages/upload/page";
import MainLayout from "@/layouts/MainLayout";
import VeinsPage from "@/pages/veins/page";
import StepsPage from "./pages/steps/page";
import LoadingPage from "./pages/loading/page";
import ResultPage from "./pages/result/page";
import ShoppingPage from "./pages/shopping/page";
import ProductDetailPage from "./pages/shopping/ProductDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/veins" element={<VeinsPage />} />
          <Route path="/steps" element={<StepsPage />} />
          <Route path="/loading" element={<LoadingPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/shopping" element={<ShoppingPage />} />
          <Route
            path="/product/:season/:tab/:id"
            element={<ProductDetailPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
