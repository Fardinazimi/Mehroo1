import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";

export default function ProductListing() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categorySlug, setCategorySlug] = useState([]);
  const [priceTo, setPriceTo] = useState(2000); // default max price

  const params = useParams();

  // ✅ helper to format any number as Euro
  const formatEUR = (value) =>
    new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(
      Number(value) || 0
    );

  // Set categorySlug from URL param
  useEffect(() => {
    if (params.slug) {
      setCategorySlug([params.slug]);
    } else {
      setCategorySlug([]);
    }
  }, [params.slug]);

  // Fetch categories
  useEffect(() => {
    axios
      .get("https://wscubetech.co/ecommerce-api/categories.php")
      .then((result) => {
        setCategories(result.data.data || []);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  // Fetch products based on selected categories and price
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://wscubetech.co/ecommerce-api/products.php",
          {
            params: {
              limit: 30,
              price_from: 0,
              price_to: priceTo,
              categories: categorySlug.join(","), // send all selected categories
            },
          }
        );
        setProducts(res.data.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categorySlug, priceTo]);

  // Toggle category selection
  const handleCategoryChange = (slug) => {
    setCategorySlug((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug) // remove if already selected
        : [...prev, slug]                 // add if not selected
    );
  };

  // Handle price change
  const handlePriceChange = (e) => {
    setPriceTo(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="container bg-white">
        <div className="search-section">
          <div className="container-fluid container-xl">
            <div className="row main-content ml-md-0">
              {/* Sidebar */}
              <div className="sidebar col-md-3 px-0">
                <h1 className="border-bottom filter-header d-flex d-md-none p-3 mb-0 align-items-center">
                  <span className="mr-2 filter-close-btn">X</span>
                  Filters
                  <span className="ml-auto text-uppercase">Reset Filters</span>
                </h1>

                <div className="sidebar__inner ">
                  <div className="filter-body">
                    {/* Categories */}
                    <h2 className="border-bottom filter-title">Categories</h2>
                    <div className="mb-30 filter-options">
                      {categories.slice(0, 10).map((v) => (
                        <div
                          className="custom-control custom-checkbox mb-3"
                          key={v.id}
                        >
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id={`category_${v.id}`}
                            onChange={() => handleCategoryChange(v.slug)}
                            checked={categorySlug.includes(v.slug)}
                          />
                          <label
                            className="p-1 custom-control-label"
                            htmlFor={`category_${v.id}`}
                          >
                            {v.name}
                          </label>
                        </div>
                      ))}
                    </div>

                    {/* Price Range */}
                    <h2 className="font-x-bold body-font border-bottom filter-title">
                      Price Range
                    </h2>
                    <div className="mb-3 theme-clr xs2-font d-flex justify-content-between">
                      <span>$0</span>
                      <span>${priceTo}</span>
                    </div>
                    <div className="mb-30 filter-options">
                      <input
                        type="range"
                        min="0"
                        max="2000"
                        value={priceTo}
                        onChange={handlePriceChange}
                        className="form-control-range"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div className="content col-md-9">
                <div className="d-flex justify-content-between border-bottom align-items-center">
                  <h2 className="title">Products</h2>
                </div>
                <div className="row row-grid">
                  {products.length > 0 ? (
                    products.map((product, index) => (
                      <ProductCard
                        key={index}
                        column="4"
                        productData={product}
                      />
                    ))
                  ) : (
                    <p className="p-3">No products found for selected filters.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}