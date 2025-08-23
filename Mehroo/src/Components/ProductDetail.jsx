import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { cartContext } from "../ContextApi/ContextApi";
import { toast } from "react-toastify";

export default function ProductDetail() {
  var productId = useParams();
  var productId = useParams().id;

  const [productDetails, setProductDetails] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const {cartItem, SetCartItem} = useContext(cartContext);

  const [quantity, setQuantity] = useState(1); // default quantity 1

  const handleQuantityChange = (e) => {
    let val = parseInt(e.target.value);
    if (val < 1) val = 1;
    if (val > 10) val = 10;
    setQuantity(val);
  };

  const handleAddToCart = () => {
    const existingIndex = cartItem.findIndex((v) => v.id === productDetails.id);

    let updatedCart = [...cartItem];

    if (existingIndex >= 0) {
      // If product already exists, increase quantity but max 10
      const newQty = updatedCart[existingIndex].quantity + quantity;
      updatedCart[existingIndex].quantity = newQty > 10 ? 10 : newQty;
    } else {
      // If product is new, add it to cart
      updatedCart.push({
        ...productDetails,
        quantity: quantity,
      });
    }

    SetCartItem(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
    toast.success("Item added to cart!");
  };

  useEffect(() => {
    axios
      .get(
        `https://wscubetech.co/ecommerce-api/productdetails.php?id=${productId}`
      )
      .then((result) => {
        setProductDetails(result.data.product);
        setCurrentImage(result.data.product.image);
        console.log(result.data.product);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const imageHandler = (image) => {
    setCurrentImage(image);
    // console.log(image);
  };https://cdn.dummyjson.com/products/images/tops/Tartan%20Dress/4.png

  return (
    <>
      <Header />

      {productDetails ? (
        <div className="container my-5">
          <div className="row details-snippet1">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-2 mini-preview">
                  {/* {productDetails?.multiple_images &&
                  productDetails.multiple_images.length > 0 ? (
                    productDetails.multiple_images.map((v, i) => (
                      <img
                        key={i}
                        className="img-fluid p-1"
                        src={v}
                        alt={`Preview ${i}`}
                      />
                    ))
                  ) : (
                    <p>No images available</p> // 👈 optional fallback
                  )} */}

                  {productDetails.multiple_images.map((v, i) => {
                    return (
                      <img
                        className="img-fluid"
                        onMouseOver={() => imageHandler(v)}
                        src={v}
                        alt="Preview"
                      />
                    );
                  })}
                </div>

                <div className="col-md-10">
                  <div className="product-image">
                    <img
                      className="img-fluid"
                      src={currentImage}
                      alt="Main Image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="category">
                <span className="theme-text">Category:</span>{" "}
                {productDetails.category}{" "}
              </div>
              <div className="title">{productDetails.name}</div>
              <div className="ratings my-2">
                <div className="stars d-flex">

                  {/*  product Rating loop also */}
                  <div className="stars d-flex align-items-center">


                    <div className="theme-text mr-2" style={{ fontWeight :"bold", fontSize:"10px"}}>Product Ratings:</div>

                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={
                          index < productDetails.rating
                            ? "fas fa-star text-warning"
                            : "far fa-star text-muted"
                        }
                      ></span>
                    ))}

                    <span className="ml-2">({productDetails.rating})</span>
                  </div>
                </div>
              </div>
              <div className="price my-2"style={{ fontWeight :"bold", fontSize:"10px"}}>
                 Price: {productDetails.price} €

                {/* <strike className="original-price p-3">{productDetails.price}</strike> */}
              </div>
              <div className="theme-text subtitle"style={{ fontWeight :"bold", fontSize:"15px"}}>Brief Description:</div>
              <div className="brief-description">
                {productDetails.description}
              </div>

              <div>
                <div className="subtitle my-3 theme-text">Colors:</div>
                <div className="select-colors d-flex">
                  <div className="color red"></div>
                  <div className="color silver"></div>
                  <div className="color black"></div>
                </div>
              </div>

              <hr />
              <div className="row">
  <div className="col-md-3">
    <input
      type="number"
      className="form-control"
      value={quantity}
      min="1"
      max="10"
      onChange={handleQuantityChange}
    />
  </div>
  <div className="col-md-9">
    <button className="btn addBtn btn-block" onClick={handleAddToCart}>
      Add to basket
    </button>
  </div>
</div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
