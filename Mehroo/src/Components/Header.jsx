import React from "react";
import logo from "../assets/images/logo.png"

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
      <div className="container-xl">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img
            src={logo}
            alt="Logo"
            height="40"
          />
        </a>

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
              <a className="nav-link active" aria-current="page" href="#">
                All
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Women's
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Men's
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Kid's
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Accessories
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cosmetics
              </a>
            </li>
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
  );
}
