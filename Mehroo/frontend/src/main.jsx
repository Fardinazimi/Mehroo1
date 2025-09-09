import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/CSS/style.css";
import "./assets/CSS/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Home from "./pages/Home";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetail";
import ContextApi from "./ContextApi/ContextApi";
import "bootstrap-icons/font/bootstrap-icons.css";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Footer from "./Components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Term from "./pages/Term";
import Checkout from "./pages/Checkout";





ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextApi>




    <BrowserRouter>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product-listings/:slug?" element={<ProductListing />} />
        <Route path="/product-details/:id?" element={<ProductDetail />} />
        <Route path="/contact-page" element={<Contact/>} />
        <Route path="/about-us" element={<About/>} />
        <Route path="/blog-page" element={<Blogs/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/terms" element={<Term/>} />
        <Route path="/checkout" element={<Checkout/>} />
        
      </Routes>



<Footer/>
    </BrowserRouter>


  </ContextApi>
);
