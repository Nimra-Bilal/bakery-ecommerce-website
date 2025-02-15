import React, { useState, createContext } from "react";
import all_product from '../Components/Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addtocart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }

  const removefromcart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
  
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        // Find the product with the matching ID
        let itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
  
    return totalAmount; // Return the total after the loop completes
  };
  
const getTotalCartItems=()=>{
  let totalItem=0;
  for(const item in cartItems){
    if(cartItems[item]>0){
      totalItem+=cartItems[item];
  }
 
} return totalItem;}


  console.log(cartItems);

  const ContextValue = {  getTotalCartItems,getTotalCartAmount,all_product, cartItems, addtocart, removefromcart };

  return (
    <ShopContext.Provider value={ContextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;



// import React, { useState, createContext, useEffect } from "react";

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let index = 0; index <= 300; index++) {
//     cart[index] = 0;
//   }
//   return cart;
// };

// const ShopContextProvider = (props) => {
//   const [all_product, setAll_Product] = useState([]);
//   const [cartItems, setCartItems] = useState(getDefaultCart());
//   useEffect(() => {
//     fetch("http://localhost:9001/allproducts")
//       .then((response) => response.json())
//       .then((data) => setAll_Product(data));
  
//     if(localStorage.getItem('auth-token')){
//       fetch("http://localhost:9001/getcart", {
//         method: 'GET',
//         headers: {
//           Accept: 'application/form-data',
//           'auth-token': `${localStorage.getItem('auth-token')}`,
//           'Content-Type': 'application/json',
//         },
//       })
//         .then((response) => response.json())
//         .then((data) => setCartItems(data));
//     }
//   }, []);

//  const addToCart = (itemId) => {
//   if (itemId < 1 || itemId > 300) {
//     console.error("Invalid item ID:", itemId);
//     return;
//   }
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 })); //purana code
//     if (localStorage.getItem('auth-token')) {
//       fetch('http://localhost:9001/addtocart', {
//           method: 'POST',
//           headers: {
//             Accept:'application/form-data',
//               'auth-token': `${localStorage.getItem('auth-token')}`,
//               'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ "itemId":itemId }),
//       })
//       .then((response) => response.json())
//       .then((data) => console.log("Added to cart:", data))
//       .catch(error => console.error("Error adding to cart:", error));
//   }
//   }

//   const removeFromCart = (itemId) => {
//     // if (cartItems[itemId] > 0) {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   if(localStorage.getItem('auth-token')){
//     fetch('http://localhost:9001/removefromcart', {
//       method: 'POST',
//       headers: {
//         Accept:'application/form-data',
//           'auth-token': `${localStorage.getItem('auth-token')}`,
//           'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ "itemId":itemId }),
//   })
//   .then((response) => response.json())
//   .then((data) => console.log("removed from cart:", data))
//   .catch(error => console.error("Error adding to cart:", error));
//   }
//     // }
    
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;

//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = all_product.find(
//           (product) => product.id === Number(item)
//         );
//         if (itemInfo) {
//           totalAmount += itemInfo.new_price * cartItems[item];
//         }
//       }
//     }

//     return totalAmount;
//   };

//   const getTotalCartItems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         totalItem += cartItems[item];
//       }
//     }
//     return totalItem;
//   };

//   console.log(cartItems);

//   const ContextValue = {
//     getTotalCartItems,
//     getTotalCartAmount,
//     all_product,
//     cartItems,
//     addToCart, 
//     removeFromCart, 
//   };

//   return (
//     <ShopContext.Provider value={ContextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
