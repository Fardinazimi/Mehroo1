import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // for clickable navigation
import axios from "axios";
import Slider from "react-slick";

export default function BestSellers() {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    axios
      .get("https://wscubetech.co/ecommerce-api/products.php", {
        params: { limit: 12 }, // load 12 products
      })
      .then((result) => {
        setBestSellers(result.data.data || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="container bg-white mx-auto my-5">
      <h2 className="text-center mb-4 fw-bold">🔥 Best Sellers</h2>

      <Slider {...settings}>
        {bestSellers.map((product) => (
          <div key={product.id} className="p-2">
            <div className="card h-100 shadow-sm border-0 rounded-3 overflow-hidden product-card">
              <Link
                to={`/product-details/${product.id}`}
                className="text-decoration-none text-dark"
              >
                <div className="position-relative">
                  <img
                    src={product.image}
                    className="card-img-top p-3"
                    alt={product.title}
                    style={{ height: "220px", objectFit: "contain" }}
                  />
                  <div className="overlay d-flex align-items-center justify-content-center">
                    <button className="btn btn-primary btn-sm rounded-pill">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="card-body text-center">
                  <h6 className="card-title text-truncate">{product.title}</h6>
                  <p className="text-danger fw-bold mb-0">${product.price}</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom CSS for hover effect */}
      <style>{`
        .product-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .product-card:hover .overlay {
          opacity: 1;
        }
      `}</style>

<hr
  style={{
    width: "",
    height: "4px",
    border: "none",
    borderRadius: "2px",
    background: "linear-gradient(to right, #ff6b6b, #845ef7)",
    margin: "20px auto",
    animation: "hr-fade 2s ease-in-out infinite alternate",
    paddingTop: "10px",
    marginTop: "40px",
  }}
/>




    </div>
  );
}
