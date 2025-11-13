import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App";
import { AboutMe, WorkGallery } from "./pages";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/projects" element={<WorkGallery />} />
    </Routes>
  </BrowserRouter>
);
