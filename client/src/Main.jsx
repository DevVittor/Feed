import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Nav } from "./components/Nav.jsx";
import { Home } from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./global.css";
import "./tailwind.css";
import { About } from "./pages/About.jsx";
import { PageFound } from "./pages/PageFound.jsx";
import Details from "./pages/Details.jsx";
import { Register } from "./pages/Register.jsx";

export function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/post/:postId" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
