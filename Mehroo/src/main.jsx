import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/CSS/style.css";
import "./assets/CSS/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./Components/Home";
import ProductListing from "./Components/ProductListing";
import ProductDetail from "./Components/ProductDetail";



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product-listings/:slug?" element={<ProductListing />} />
      <Route path="/product-details/:id" element={<ProductDetail />} />
    

    </Routes>


  </BrowserRouter>
);
