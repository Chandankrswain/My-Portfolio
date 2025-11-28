import { createRoot } from "react-dom/client";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import { ThankYou } from "./pages";

const WorkGallery = lazy(
  () => import("../src/pages/work-gallery/work-gallery")
);

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<WorkGallery />} />
        <Route path="thank-you" element={<ThankYou />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
