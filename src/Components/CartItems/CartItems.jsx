import './CartItems.css';
import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount,all_product, cartItems, removefromcart } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
        <hr />
      </div>
     
      {all_product.map((e) => {
        // Ensure cartItems[e.id] exists and is greater than 0
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt={e.name} className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price.toFixed(2)}</p>
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                <img
                  src={remove_icon}
                  onClick={() => removefromcart(e.id)}
                  alt="Remove Item"
                  className="remove-icon"
                />
              </div>
           <hr /> </div> 
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>CART TOTAL</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>SUBTOTAL : </p>
                    <p>${getTotalCartAmount()}</p>
                    
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>DELIVERY FEE</p>
                    <p>FREE</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>TOTAL : </h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code , enter it here </p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='promo code' />
                <button>SUBMIT</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
