
import React from "react";
import "../assets/CSS/about.css"; // Custom CSS
import aboutImage from "../assets/images/about_us.jpg"; // Add your image here
import Header from "../Components/Header";

export default function About() {
  return (

    <>
    <Header />
   
    <div className="about-page container py-5">
      {/* Header Section */}
      <div className="text-center mb-5">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle">
          Learn more about our mission, vision, and the team behind our success.
        </p>
      </div>

      {/* Main Content */}
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src={aboutImage}
            alt="About Us"
            className="img-fluid rounded shadow about-img"
          />
        </div>

        {/* Text Section */}
        <div className="col-lg-6">
          <h2 className="mb-3">Our Mission</h2>
          <p>
            Our mission is to provide top-quality products with excellent customer service,
            ensuring every experience is memorable and enjoyable.
          </p>

          <h2 className="mb-3 mt-4">Our Vision</h2>
          <p>
            We aim to be a leader in our industry by embracing innovation,
            sustainability, and continuous improvement in everything we do.
          </p>

          <h2 className="mb-3 mt-4">Our Values</h2>
          <ul className="about-values">
            <li>Integrity & Transparency</li>
            <li>Customer Satisfaction</li>
            <li>Innovation & Creativity</li>
            <li>Teamwork & Collaboration</li>
          </ul>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="about-cta text-center mt-5">
        <h3>Want to know more about our journey?</h3>
        <p>Reach out to us or explore our products!</p>
        <a href="/contact-page" className="btn btn-primary mt-3">
          Contact Us
        </a>
      </div>
    </div>
    </>
  );
}
