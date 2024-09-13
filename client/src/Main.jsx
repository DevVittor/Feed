import { StrictMode } from "react";
import { SnackbarProvider } from "notistack";
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
import { Post } from "./pages/Post.jsx";
import { Login } from "./pages/Login.jsx";

export function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/post/:postId" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/acessar" element={<Login />} />
          <Route path="/cadastrar" element={<Register />} />
          <Route path="/post" element={<Post />} />
          <Route path="*" element={<PageFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <SnackbarProvider autoHideDuration={5000}>
    <StrictMode>
      <Main />
    </StrictMode>
  </SnackbarProvider>
);
