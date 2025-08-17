import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListGroupItem } from "react-bootstrap";

export default function Header() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://wscubetech.co/ecommerce-api/categories.php" )
      .then((result) => {
        setCategories(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 sticky-top shadow">
        <div className="container-xl">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" height="40" />
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
                 Home
                </Link>
              </li>
              {categories.map((v, i) => {
                return i < 8 ? (
                  <li className="nav-item"key={v.id || i}>
                    <Link
                      className="nav-link"
                      to={`/product-listings/${v.slug}`}
                    >
                      {v.name}
                      </Link>
                  </li>
                ) : (
                  ""
                );
              })}
            </ul>

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
