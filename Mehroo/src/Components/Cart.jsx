import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import "../assets/CSS/cart.css";
import { cartContext } from "../ContextApi/ContextApi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Cart() {
  let { cartItem, SetCartItem } = useContext(cartContext);
  let [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    // ✅ Flatten the array (handles nested arrays inside cartItem)
    let flatCart = cartItem.flat(Infinity);

    // ✅ Filter out nulls or invalid items
    flatCart = flatCart.filter((v) => v && v.price && v.quantity);

    // ✅ Calculate total (convert price to number)
    let sum = flatCart.reduce(
      (acc, v) => acc + parseInt(v.price) * Number(v.quantity),
      0
    );

    setTotalValue(sum);
  }, [cartItem]);

  const quantityUpdate = (id, type) => {
    // Create a new array with updated quantities
    const finalData = cartItem.map((v) => {
      if (!v) return v;
      if (v.id === id) {
        // return a new object, do NOT mutate
        let newQuantity = v.quantity;
        if (type === "minus" && v.quantity > 1) {
          newQuantity = v.quantity - 1;
          toast.success("Cart updated successfully");
        } else if (type === "plus" && v.quantity < 10) {
          newQuantity = v.quantity + 1;
          toast.success("Cart updated successfully");
        }
        return { ...v, quantity: newQuantity };
      }
      return v;
    });

    // Update context state and localStorage
    SetCartItem(finalData);
    localStorage.setItem("cartItem", JSON.stringify(finalData));
  };

  const deleteCart = (id) => {
    if (confirm("Are you sure you want to delete this item?")) {
      const finalData = cartItem.filter((v) => v.id !== id); // keep all items except the one with matching id
      SetCartItem([...finalData]);
      localStorage.setItem("cartItem", JSON.stringify(finalData)); // also update localStorage
      toast.error("Item removed from cart");
    }
  };

  return (
    <>
      <Header />
      <div className="container py-3">
        <h3>Shopping Cart</h3>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8">
            <hr />
            <div className="cart-item py-2">
              <div className="row">
                {cartItem.flat(Infinity).map((v, i) => {
                  if (!v) return null; // ✅ skip nulls
                  return (
                    <React.Fragment key={i}>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="d-flex justify-content-between mb-3">

                          {/*  link the image to product  details page. */}
                          <Link to={`/product-details/${v.id}`}>
                            <img
                              className="cart-image d-block"
                              src={v.image}
                              alt={v.name}
                              style={{ cursor: "pointer" }}
                            />
                          </Link>

                          <div className="mx-3">
                            <h5>{v.name}</h5>
                            <p>Lorem ipsum, dolor sit</p>
                            <h5> €: {v.price}</h5>
                            <small className="text-white bg-success px-2 py-1 d-inline-block rounded-3 mt-2">
                              {v.stock > 0 ? "In Stock" : "Out of Stock"}
                            </small>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <div className="d-flex justify-content-between">
                          <div>
                            <button
                              className="py-2 px-3 me-2"
                              onClick={() => quantityUpdate(v.id, "minus")}
                            >
                              -
                            </button>

                            <button className="py-2 px-3 me-2">
                              {v.quantity}
                            </button>

                            <button
                              className="py-2 px-3 me-2"
                              onClick={() => quantityUpdate(v.id, "plus")}
                            >
                              +
                            </button>
                          </div>
                          {v.price} * {v.quantity} ={" "}
                          {parseInt(v.price) * v.quantity}
                          <div>
                            <button
                              type="button"
                              className="btn-close"
                              aria-label="Close"
                              onClick={() => deleteCart(v.id)} // ✅ pass the id of the current item
                            ></button>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <hr />
          </div>

          <div className="col-12 col-sm-12 col-md-8 col-lg-4">
            <div className=" orderSummary bg-light rounded-3 p-4 sticky-top">
              <h6 className="mb-4">Order Summary</h6>
              <div className="d-flex justify-content-between align-items-center">
                <div>Subtotal</div>
                <div>
                  <strong>Rs. {totalValue}</strong>
                </div>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div>Delivery Charge</div>
                <div>
                  <strong>Rs. 100</strong>
                </div>
              </div>
              <hr />

              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4>Total</h4>
                </div>
                <div>
                  <strong>Rs. {totalValue * 1.19 + 100}</strong>
                </div>
              </div>
              <button className="btn btn-primary w-100 mt-4">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
