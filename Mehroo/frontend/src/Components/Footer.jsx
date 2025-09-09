import React from "react";
import { Link } from "react-router-dom";
import "../assets/CSS/footer.css"; // optional for extra styling

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-4">
      <div className="container">
        <div className="row">
          {/* Logo & About */}
          <div className="col-md-4 mb-4">
            <h3>Fardin</h3>
            <p>
              Delivering the best products and services to our customers.  
              Fast, reliable, and fresh!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blog-page" className="footer-link">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-page" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Shop Links */}
          <div className="col-md-3 mb-4">
            <h5>Shop Categories</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/product-listings/category1" className="footer-link">
                  Category 1
                </Link>
              </li>
              <li>
                <Link to="/product-listings/category2" className="footer-link">
                  Category 2
                </Link>
              </li>
              <li>
                <Link to="/product-listings/category3" className="footer-link">
                  Category 3
                </Link>
              </li>
              <li>
                <Link to="/product-listings/category4" className="footer-link">
                  Category 4
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4">
            <h5>Contact Us</h5>
            <p>
              123 Main Street, Hanau <br />
              Germany
            </p>
            <p>Email: info@fardin.com</p>
            <p>Phone: +49 123 456 789</p>
            {/* Social Icons */}
            <div className="d-flex gap-3 mt-2">
              <a href="https://www.facebook.com/search/top?q=mehroo" className="text-light">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-instagram fs-5"></i>
              </a>
              <a href="#" className="text-light">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="bg-light" />

        <div className="row">
          <div className="col text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Fardin. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
