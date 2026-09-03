import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Cart from "./pages/Cart";
import Delivery from "./pages/Delivery";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Offer from "./pages/Offer";
import NotFound from "./pages/NotFound";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <CartProvider>
        <Routes>
          <Route element={<App />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="about" element={<About />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="offer" element={<Offer />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </HashRouter>
  </StrictMode>
);
