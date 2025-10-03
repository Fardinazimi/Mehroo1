import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import axios from "axios";
import { Link, NavLink, useLocation } from "react-router-dom";
import { cartContext } from "../ContextApi/ContextApi";
import { ToastContainer } from "react-toastify";
import "../assets/CSS/header.css";

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [shopLabel, setShopLabel] = useState("Shop");
  const { cartItem } = useContext(cartContext);
  const location = useLocation();

  useEffect(() => {
    axios
      .get("https://wscubetech.co/ecommerce-api/categories.php")
      .then((res) => setCategories(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  const handleCategorySelect = (name) => setShopLabel(name);

  return (
    <>
      <ToastContainer />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm">
        <div className="container-xl d-flex justify-content-between align-items-center">
          {/* Logo */}
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <h2>Mehroo</h2>
          </Link>

          {/* Shop & Cart always visible */}
          <div className="d-flex align-items-center">
            {/* Shop */}
            <div className="dropdown me-3">
              <button
                className={`btn btn-outline-light dropdown-toggle ${
                  shopLabel !== "Shop" ? "shop-selected" : ""
                }`}
                type="button"
                id="shopDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {shopLabel}
              </button>
              <ul className="dropdown-menu" aria-labelledby="shopDropdown">
                {categories.map((cat) => (
                  <li key={cat.id}>
                    <NavLink
                      to={`/product-listings/${cat.slug}`}
                      className={({ isActive }) =>
                        `dropdown-item ${isActive ? "active-link" : ""}`
                      }
                      onMouseDown={() => handleCategorySelect(cat.name)}
                    >
                      {cat.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cart */}
            <Link to="/cart" className="position-relative">
              <button className="btn btn-primary position-relative">
                <i className="bi bi-cart"></i>
                {cartItem.length > 0 && (
                  <span className="cart-count">{cartItem.length}</span>
                )}
              </button>
            </Link>
          </div>

          {/* Navbar toggle for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blog-page"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                >
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact-page"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active-link" : ""}`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>

            {/* Sign in & Register */}
            <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
              <a href="#" className="nav-link text-light">
                Sign in
              </a>
              <a href="#" className="btn btn-sm btn-primary">
                Register
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
