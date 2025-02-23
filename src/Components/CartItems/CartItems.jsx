// import './CartItems.css';
// import React, { useContext } from 'react';
// import { ShopContext } from '../../Context/ShopContext';
// import remove_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/cart_cross_icon.png';

// const CartItems = () => {
//   const { getTotalCartAmount,all_product, cartItems, removefromcart } = useContext(ShopContext);

//   return (
//     <div className="cartitems">
//       <div className="cartitems-format-main">
//         <p>Product</p>
//         <p>Title</p>
//         <p>Price</p>
//         <p>Quantity</p>
//         <p>Total</p>
//         <p>Remove</p>
//         <hr />
//       </div>
     
//       {all_product.map((e) => {
//         // Ensure cartItems[e.id] exists and is greater than 0
//         if (cartItems[e.id] > 0) {
//           return (
//             <div key={e.id}>
//               <div className="cartitems-format cartitems-format-main">
//                 <img src={e.image} alt={e.name} className="carticon-product-icon" />
//                 <p>{e.name}</p>
//                 <p>${e.new_price.toFixed(2)}</p>
//                 <button className="cartitems-quantity">{cartItems[e.id]}</button>
//                 <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
//                 <img
//                   src={remove_icon}
//                   onClick={() => removefromcart(e.id)}
//                   alt="Remove Item"
//                   className="remove-icon"
//                 />
//               </div>
//            <hr /> </div> 
//           );
//         }
//         return null;
//       })}
//       <div className="cartitems-down">
//         <div className="cartitems-total">
//             <h1>CART TOTAL</h1>
//             <div>
//                 <div className="cartitems-total-item">
//                     <p>SUBTOTAL : </p>
//                     <p>${getTotalCartAmount()}</p>
                    
//                 </div>
//                 <hr />
//                 <div className="cartitems-total-item">
//                     <p>DELIVERY FEE</p>
//                     <p>FREE</p>
//                 </div>
//                 <hr />
//                 <div className="cartitems-total-item">
//                     <h3>TOTAL : </h3>
//                     <h3>${getTotalCartAmount()}</h3>
//                 </div>
//             </div>
//             <button>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cartitems-promocode">
//             <p>If you have a promo code , enter it here </p>
//             <div className="cartitems-promobox">
//                 <input type="text" placeholder='promo code' />
//                 <button>SUBMIT</button>
//             </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartItems;

import './CartItems.css';
import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removefromcart } = useContext(ShopContext);

  return (
    <div className="container my-5 p-4 bg-dark text-white rounded">
      <div className="row fw-semibold text-secondary text-center mb-3">
        <div className="col-2">Product</div>
        <div className="col-3">Title</div>
        <div className="col-2">Price</div>
        <div className="col-2">Quantity</div>
        <div className="col-2">Total</div>
        <div className="col-1">Remove</div>
      </div>
      <hr className="border-secondary" />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="row align-items-center text-center mb-3">
              <div className="col-2">
                <img src={e.image} alt={e.name} className="img-fluid rounded" style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
              </div>
              <div className="col-3">{e.name}</div>
              <div className="col-2">${e.new_price.toFixed(2)}</div>
              <div className="col-2">
                <button className="btn btn-outline-light btn-sm w-75">{cartItems[e.id]}</button>
              </div>
              <div className="col-2">${(e.new_price * cartItems[e.id]).toFixed(2)}</div>
              <div className="col-1">
                <img
                  src={remove_icon}
                  onClick={() => removefromcart(e.id)}
                  alt="Remove Item"
                  className="remove-icon"
                  style={{ width: '20px', cursor: 'pointer' }}
                />
              </div>
            </div>
          );
        }
        return null;
      })}

      <div className="row mt-5">
        {/* Cart Total Section */}
        <div className="col-md-6">
          <h1 className="mb-4">CART TOTAL</h1>
          <div className="d-flex justify-content-between py-2">
            <p>SUBTOTAL:</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr className="border-secondary" />
          <div className="d-flex justify-content-between py-2">
            <p>DELIVERY FEE</p>
            <p>FREE</p>
          </div>
          <hr className="border-secondary" />
          <div className="d-flex justify-content-between py-2">
            <h3>TOTAL:</h3>
            <h3>${getTotalCartAmount()}</h3>
          </div>
          <button className="btn btn-danger w-100 py-2 mt-3">PROCEED TO CHECKOUT</button>
        </div>

        {/* Promo Code Section */}
        <div className="col-md-9 mt-4 mt-md-0">
          <hr />
          <p>If you have a promo code, enter it here:</p>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Promo code" />
            <button className="btn btn-dark">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;

