import React, { useContext, useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { cartContext } from "../ContextApi/ContextApi";
import { ToastContainer } from "react-toastify";

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Categories"); // default text
  let { cartItem } = useContext(cartContext);

  useEffect(() => {
    axios
      .get("https://wscubetech.co/ecommerce-api/categories.php")
      .then((result) => {
        setCategories(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCategorySelect = (name) => {
    setSelectedCategory(name); // set selected category
  };

  return (
    <>
    <ToastContainer/>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 sticky-top shadow">
        <div className="container-xl">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            {/* <img src={logo} alt="Logo" height="40" /> */}

            <h2>Fardin</h2>
          </Link>

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
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/product-listings"
                >
                  All Products
                </Link>
              </li>

              {/* Dropdown for Categories */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="categoriesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {selectedCategory} {/* Show selected category */}
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="categoriesDropdown"
                >
                  {categories.slice(0, 8).map((v, i) => (
                    <li key={v.id || i}>
                      <Link
                        className="dropdown-item"
                        to={`/product-listings/${v.slug}`}
                        onClick={() => handleCategorySelect(v.name)} // update dropdown text
                      >
                        {v.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>

            <Link to="/cart" className="m-3  position-relative">

              <button type="button" class="btn btn-primary">

                  <i className="bi bi-cart"></i>
                
                <span
                  className="position-absolute top-0 start-100 translate-middle rounded-circle bg-danger d-flex align-items-center justify-content-center"
                  style={{ width: "24px", height: "24px", fontSize: "12px" }}
                >
                  {cartItem.length}
                  <span className="visually-hidden">unread messages</span>
                </span>


              </button>
            </Link>

            {/* Sign in & Register buttons */}
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
