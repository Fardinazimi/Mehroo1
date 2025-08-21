import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../ContextApi/ContextApi";

export default function ProductCard({ column, productData }) {
  let { cartItem, SetCartItem } = useContext(cartContext);

  const addToCart = (product) => {
    var data = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    var finalData = [data, ...cartItem];
    SetCartItem(finalData);
    localStorage.setItem("cartItem", JSON.stringify(finalData));

    console.log(product);
  };

  return (
    <>
      <div
        className={
          column == 4
            ? "productCard col-lg-4 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3 "
            : "col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-4"
        }
      >
        <div className="product">
          {" "}
          <img src={productData.image} alt={productData.name} />
          <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
            <li className="icon">
              <span className="fas fa-expand-arrows-alt"></span>
            </li>
            <li className="icon mx-3">
              <span className="far fa-heart"></span>
            </li>
            <li className="icon" onClick={() => addToCart(productData)}>
              <span className="fas fa-shopping-bag"></span>
            </li>
          </ul>
        </div>
        <Link
          to={`/product-details/${productData.id}`}
          className=" text-decoration-none text-black "
        >
          <div className="tag bg-red">{productData.category_name}</div>
          <div className="title pt-4 pb-1">{productData.title}</div>
          <div className="d-flex align-content-center justify-content-center">
            {" "}
            <span className="fas fa-star"></span>{" "}
            <span className="fas fa-star"></span>{" "}
            <span className="fas fa-star"></span>{" "}
            <span className="fas fa-star"></span>{" "}
            <span className="fas fa-star"></span>{" "}
          </div>
          {/* <div className="price"> {productData.price}</div> */}
          <div className="price">
            <span className="badge bg-success fs-6 p-2 mt-2">
              € {productData.price}
            </span>{" "}
          </div>
        </Link>
      </div>
    </>
  );
}
