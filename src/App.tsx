import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UploadImage from "./pages/UploadImage";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/upload-image" element={<UploadImage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
