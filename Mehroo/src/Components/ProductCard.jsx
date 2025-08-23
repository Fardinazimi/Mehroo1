import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../ContextApi/ContextApi";
import { toast } from "react-toastify";

export default function ProductCard({ column, productData }) {
  let { cartItem, SetCartItem } = useContext(cartContext);
  const navigate = useNavigate();

  const addToCart = (product) => {

    var checkData = cartItem.filter((v)=>{
      if (v.id === product.id){
        return v;
      }



      
      
      
    })
    if (checkData.length == 0) {
      
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
      // toast.success("product added to cart")
    }else{
      var data = cartItem.map((v)=>{

        if(v.id == product.id){
          v.quantity ++;
          return v;
        }
      })


    }
    var finalData = [data, ...cartItem];
      SetCartItem(finalData);
      localStorage.setItem("cartItem", JSON.stringify(finalData));
      toast.success("product updated to cart")
      
    }
 

  const goToDetails = () => {
    navigate(`/product-details/${productData.id}`);
  };

  return (
    <div
      className={
        column === 4
          ? "productCard col-lg-3 col-sm-2 d-flex flex-column align-items-center justify-content-center product-item my-3 border rounded "
          : "col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-4 border rounded "
      }
    >
      <div className="product">
        {/* image clickable */}
        <img
          src={productData.image}
          alt={productData.name}
          onClick={goToDetails}
          style={{ cursor: "pointer" }}
        />

        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
          {/* zoom / expand */}
          <li className="icon" onClick={goToDetails}>
            <span className="fas fa-expand-arrows-alt"></span>
          </li>

          {/* wishlist */}
          <li
            className="icon mx-3"
            onClick={(e) => {
              e.stopPropagation();
              // add to wishlist logic here
            }}
          >
            <span className="far fa-heart"></span>
          </li>

          {/* add to cart */}
          <li
            className="icon"
            onClick={(e) => {
              e.stopPropagation();
              addToCart(productData);
            }}
          >
            <span className="fas fa-shopping-bag"></span>
          </li>
        </ul>
      </div>

      {/* Title & category should also go to details */}
      <Link
        to={`/product-details/${productData.id}`}
        className="text-decoration-none text-black"
      >
        <div className="tag bg-red">{productData.category_name}</div>
        <div className="title pt-4 pb-1">{productData.title}</div>

        {/*  Rating Lope */}
        <div className="d-flex align-items-center justify-content-center">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={
                index < productData.rating
                  ? "fas fa-star text-warning"
                  : "far fa-star text-muted"
              }
            ></span>
          ))}
        </div>
        
        <div className="price">
          <span className="badge bg-success fs-6 p-2 mt-2">
            € {productData.price}
          </span>
        </div>
      </Link>
    </div>
  );
}
