import React, { useEffect, useState } from "react";
import ProductCard from "../pages/ProductCard";
import HeroSlider from "../Components/HeroSlider";
import Header from "../Components/Header";
import axios from "axios";
import BestSellers from "../Components/BestSellers";

export default function Home() {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then(console.log);
  // ! we dont want to use fetch here directly in the component, instead we are going to use Axios or React Query to fetch data

  //  create useState and  to fetch data
  const [products, setProducts] = useState([]);
  // ! useEffect hook to fetch data and stop the component from re-rendering on every render

  useEffect(() => {
    axios
      .get("https://wscubetech.co/ecommerce-api/products.php" ,{
        params: {
          limit: 8, // Limit the number of products to 9
          
        },
      })
      .then((result) => {

        setProducts(result.data.data || []);
        console.log(result.data.data

        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <Header />
      <HeroSlider />
      <BestSellers />
      
      <div className="container bg-white mx-auto">
        <div className="row">



          
          {

            products.map((data,index)=>{
                    


                return (
                    <ProductCard productData = {data} key={index} />
                )
            })
          }
        </div>
      </div>
    </>
  );
}
