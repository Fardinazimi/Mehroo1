import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  var productId = useParams();
  var productId = useParams().id;

  const [productDetails, setProductDetails] = useState('');
  const [currentImage, setCurrentImage] = useState('');


  useEffect(() => {
    axios
      .get(
        `https://wscubetech.co/ecommerce-api/productdetails.php?id=${productId}`
      )
      .then((result) => {
        setProductDetails(result.data.product);
        setCurrentImage(result.data.product.image);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const imageHandler = (image) => {

    setCurrentImage(image);
    // console.log(image);
  }

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




            {
                productDetails.multiple_images.map((v,i)=>{
                    return(

                        <img className="img-fluid" onClick={()=>imageHandler (v)} src={v} alt="Preview"/>
                    )
                })
            }

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
                  <div className="theme-text mr-2">Product Ratings: </div>
                  <div>&#9733;</div>
                  <div>&#9733;</div>
                  <div>&#9733;</div>
                  <div>&#9733;</div>
                  <div>&#9733;</div>
                  <div className="ml-2"> {productDetails.rating} </div>
                </div>
              </div>
              <div className="price my-2">
                {productDetails.price}

                {/* <strike className="original-price p-3">{productDetails.price}</strike> */}
              </div>
              <div className="theme-text subtitle">Brief Description:</div>
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
                  <input type="number" className="form-control" value="1" />
                </div>
                <div className="col-md-9">
                  <button className="btn addBtn btn-block">
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
