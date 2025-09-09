import React, { useState } from "react";
import "../assets/CSS/contact.css"; // Custom CSS for styling
import Header from "../Components/Header";

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // For submission status

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Example: You can integrate API call here to send message
    console.log("Form submitted:", formData);

    // Simulate success
    setStatus("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });

    // Clear status after 5 seconds
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <>

<Header />
    
   
    <div className="contact-page container py-5">
      <div className="text-center mb-5">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          We’d love to hear from you! Fill out the form below or reach us directly.
        </p>
      </div>

      <div className="row">
        {/* Contact Info */}
        <div className="col-lg-5 mb-4">
          <div className="contact-info p-4 rounded shadow-sm bg-light h-100">
            <h3 className="mb-4">Our Office</h3>
            <p>
              <strong>Address:</strong> 123 Main Street, Hanau, Germany
            </p>
            <p>
              <strong>Email:</strong> info@mehroo.com
            </p>
            <p>
              <strong>Phone:</strong> +49 123 456 789
            </p>

            <h4 className="mt-4 mb-3">Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="me-3">🌐 Website</a>
              <a href="#" className="me-3">📘 Facebook</a>
              <a href="#" className="me-3">📸 Instagram</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col-lg-7">
          <form className="contact-form p-4 rounded shadow-sm bg-white" onSubmit={handleSubmit}>
            {status && <div className="alert alert-success">{status}</div>}

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
