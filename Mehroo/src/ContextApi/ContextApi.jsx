import React, { createContext, useState } from 'react'


var cartContext =createContext();

export default function ContextApi({children}) {

  var getCartItem = localStorage.getItem("cartItem");
  var getCartItem = JSON.parse(getCartItem);

  let [cartItem, SetCartItem] = useState(getCartItem ? getCartItem : []); // State to hold cart items
  let [wishListItem, setWishListItem] = useState([]);


  var allData ={cartItem, SetCartItem,wishListItem, setWishListItem}
  return (
    <>
    
    <cartContext.Provider value={allData}>
{      children }
      </cartContext.Provider>
    </>
  )
}


export { cartContext }; // Export the context for use in other components
