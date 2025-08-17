import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Header from "./Header";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductListing() {
  const [products, setProducts] = useState([]);

  // ! useParams hook to get the params from the URL
  const params = useParams();
  console.log(params.slug);

  const [categorySlug, setCategorySlug] = useState([]);

  useEffect(() => {
    if (params.slug) {
      setCategorySlug([params.slug]);
    } else {
      setCategorySlug([]);
    }
  }, [params.slug]);

  useEffect(() => {
    axios
      .get("https://wscubetech.co/ecommerce-api/products.php", {
        params: {
          limit: 30, // Limit the number of products to 30
          categories: categorySlug.toString(), // Filter by category slug if provided
        },
      })
      .then((result) => {
        setProducts(result.data.data);
        console.log(result.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [categorySlug]);

  const [categories, setCategories] = useState([]);

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

  const filterCategories = (slug) => {
    if (categorySlug.includes(slug)) {
      if (categorySlug.includes(slug)) {
        var final = categorySlug.filter((v, i) => {
          if (slug != v) {
            return v;
          }
        });
        setCategorySlug([...final]);
      }
    } else {
      categorySlug.push(slug);
      setCategorySlug([...categorySlug]);
      // console.log(slug);
    }
  };
  return (
    <>
      <Header />
      <div className="container bg-white">
        <div className="search-section">
          <div className="container-fluid container-xl">
            <div className="row main-content ml-md-0">
              <div className="sidebar col-md-3 px-0">
                <h1 className="border-bottom filter-header d-flex d-md-none p-3 mb-0 align-items-center">
                  <span className="mr-2 filter-close-btn">X</span>
                  Filters
                  <span className="ml-auto text-uppercase">Reset Filters</span>
                </h1>
                <div className="sidebar__inner ">
                  <div className="filter-body">
                    <div>
                      <h2 className="border-bottom filter-title">Categories</h2>
                      <div className="mb-30 filter-options">
                        {categories.map((v, i) => {
                          // Limit the number of categories displayed to 10
                          if (i < 10) 
                          return  (
                            <div
                              className="custom-control custom-checkbox mb-3"
                              key={v.id}
                            >
                              <input
                                onClick={() => filterCategories(v.slug)} checked={categorySlug.includes(v.slug)? 'checked' : '' }
                                type="checkbox"
                                className="custom-control-input"
                                id={`category_${v.id}`}
                              />
                              <label
                                className=" p-1 custom-control-label"
                                for={`category_${v.id}`}
                              >
                                {v.name}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                      {/* <!--seating option end--> */}

                      {/* <!-- cusine filters end --> */}
                      <h2 className="font-x-bold body-font border-bottom filter-title">
                        Price Range
                      </h2>
                      <div className="mb-3 theme-clr xs2-font d-flex justify-content-between">
                        <span id="slider-range-value1">$100</span>
                        <span id="slider-range-value2">$10,000</span>
                      </div>
                      <div className="mb-30 filter-options">
                        <div>
                          <div id="slider-range">
                            <form>
                              <div className="form-group">
                                <input
                                  type="range"
                                  className="form-control-range"
                                  id=""
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content col-md-9">
                <div className="d-flex justify-content-between border-bottom align-items-center">
                  <h2 className="title">Products</h2>
                </div>

                <div className="row row-grid">
                  {products.map((data, index) => {
                    return (
                      <ProductCard column="4" productData={data} key={index} />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
