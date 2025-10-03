import React, { useContext, useEffect, useState } from "react";
import Header from "../Components/Header";
import "../assets/CSS/cart.css";
import { cartContext } from "../ContextApi/ContextApi";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom"; // <-- Added useNavigate
import emptyCartImg from "../assets/images/empty_cart.webp"; // <-- Imported empty cart image

export default function Cart() {
  const { cartItem, SetCartItem } = useContext(cartContext);
  const [totalValue, setTotalValue] = useState(0);
  const [agree, setAgree] = useState(false); // <-- State for "agree to terms" checkbox
  const navigate = useNavigate(); // <-- Initialize navigate

  // Flatten cartItem and filter valid items
  const flatCart = cartItem
    .flat(Infinity)
    .filter((v) => v && v.price && v.quantity);

  // Calculate total whenever cart changes
  useEffect(() => {
    const sum = flatCart.reduce(
      (acc, v) => acc + parseFloat(v.price) * Number(v.quantity),
      0
    );
    setTotalValue(sum);
  }, [cartItem]);

  // Update quantity
  const quantityUpdate = (id, type) => {
    const updatedCart = flatCart.map((v) => {
      if (v.id === id) {
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

    SetCartItem(updatedCart);
    localStorage.setItem("cartItem", JSON.stringify(updatedCart));
  };

  // Delete item from cart
  const deleteCart = (id) => {
    if (confirm("Are you sure you want to delete this item?")) {
      const updatedCart = flatCart.filter((v) => v.id !== id);
      SetCartItem(updatedCart);
      localStorage.setItem("cartItem", JSON.stringify(updatedCart));
      toast.error("Item removed from cart");
    }
  };

  return (
    <>
      <Header />
      <div className="container py-3">
        <h3>Shopping Cart</h3>

        <div className="row">
          <div className="col-lg-8">
            <hr />

            <div className="cart-item py-2">
              {flatCart.length === 0 ? (
                // <-- Modern empty cart message with button to home page
                <div className="text-center py-5">
                  <img
                    src={emptyCartImg}
                    alt="Empty Cart"
                    style={{ width: "150px", marginBottom: "20px" }}
                  />
                  <h3>Your cart is empty!</h3>
                  <p className="text-muted">
                    Looks like you haven’t added anything to your cart yet.
                  </p>
                  <Link to="/" className="btn btn-primary mt-3">
                    🏠 Back to Home
                  </Link>
                </div>
              ) : (
                flatCart.map((v) => (
                  <React.Fragment key={v.id}>
                    <div className="row mb-3">
                      <div className="col-md-6 d-flex">
                        <Link to={`/product-details/${v.id}`}>
                          <img
                            className="cart-image"
                            src={v.image}
                            alt={v.name}
                            style={{ cursor: "pointer" }}
                          />
                        </Link>
                        <div className="mx-3">
                          <h5>{v.name}</h5>
                          <p>Lorem ipsum, dolor sit</p>
                          <h5>€ {v.price}</h5>
                          <small
                            className={`px-2 py-1 d-inline-block rounded-3 mt-2 ${
                              v.stock > 0
                                ? "bg-success text-white"
                                : "bg-danger text-white"
                            }`}
                          >
                            {v.stock > 0 ? "In Stock" : "Out of Stock"}
                          </small>
                        </div>
                      </div>

                      <div className="col-md-6 d-flex justify-content-between align-items-center">
                        <div>
                          <button
                            className="py-2 px-3 me-2"
                            onClick={() => quantityUpdate(v.id, "minus")}
                          >
                            -
                          </button>
                          <span className="py-2 px-3 me-2">{v.quantity}</span>
                          <button
                            className="py-2 px-3 me-2"
                            onClick={() => quantityUpdate(v.id, "plus")}
                          >
                            +
                          </button>
                        </div>
                        <div>{parseFloat(v.price) * v.quantity} €</div>
                        <div>
                          <button
                            type="button"
                            className="btn-close"
                            aria-label="Close"
                            onClick={() => deleteCart(v.id)}
                          ></button>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </React.Fragment>
                ))
              )}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="orderSummary bg-light rounded-3 p-4 sticky-top">
              <h6 className="mb-4">Order Summary</h6>
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <strong>€ {totalValue.toFixed(2)}</strong>
              </div>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Delivery Charge</span>
                <strong>€ 100</strong>
              </div>
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4>Total</h4>
                  <h6>includes 19% tax</h6>
                </div>
                <div>
                  <strong>€ {(totalValue * 1.19 + 100).toFixed(2)}</strong>
                </div>
              </div>

              {/* <-- Checkbox for agreeing to terms before checkout */}
              <div className="form-check my-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="termsCheckbox"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="termsCheckbox"> 
                  I agree to the <Link to="/terms">terms & conditions<i className="bi bi-box-arrow-up-right p-1 text-danger"></i> </Link>
                </label>
              </div>

              {/* <-- Checkout button disabled until checkbox is checked */}
              <button
                className="btn btn-primary w-100 mt-4"
                disabled={flatCart.length === 0 || !agree} // <-- Disabled if cart empty or not agreed
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
