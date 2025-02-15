// import React, { useContext } from 'react'
// import './ProductDisplay.css'
// import star_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/star_icon.png'
// import stardull_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/star_dull_icon.png'
// import { ShopContext } from '../../Context/ShopContext'
// const ProductDisplay = (props) => {
//     const {product}=props;
//     const {addToCart} = useContext(ShopContext);
//   return (
//     <div className='productdisplay'>
//         <div className="productdisplay-left">
// <div className="productdisplay-imglist">
//     <img src={product.image} alt="" />
//     <img src={product.image} alt="" />
//     <img src={product.image} alt="" />
//     <img src={product.image} alt="" />
// </div>
// <div className="productdisplay-image">
//     <img className="productdisplay-main-image" src={product.image} alt="" />
// </div>
//         </div>
//         <div className="productdisplay-right">
// <h1>{product.name}</h1>
// <div className="productdisplay-right-star">
//     <img src={star_icon} alt="" />
//     <img src={star_icon} alt="" />
//     <img src={star_icon} alt="" />
//     <img src={star_icon} alt="" />
//     <img src={stardull_icon} alt="" />
//     <p>(122)</p>
// </div>
// <div className="productdisplay-right-prices">
//     <div className="productdisplay-right-price-old">
// ${product.old_price}
//     </div>
//     <div className="productdisplay-right-price-new">
//     ${product.new_price}
//         </div></div>
//         <div className="productdisplay-right-description">
//         The chocolate croissant is a flaky, buttery pastry filled with rich, smooth chocolate, offering a perfect balance of sweetness and texture in every bite.
//         <div className="productdisplay-right-size">
//             <h1>SELECT SIZE</h1>
//             <div className="productdisplay-right-sizes">
//                 <div>S</div>
//                 <div>M</div>
//                 <div>L</div>
//                 <div>FAMILY ORDER</div>
//                 <div>MIGHTY ORDER</div>
//             </div>
       
//         <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button> 
//         <p className="productdisplay-right-category">
//             <span>Category: </span><span> BUNS , BREAD , SALTED BUTTERED WITH CREAM</span>
//             <span> Tags:</span><span> Fresh , Hot </span>
//         </p></div>  </div>

//         </div>
//     </div>
//   )
// }

// export default ProductDisplay


import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/star_icon.png';
import stardull_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addtocart } = useContext(ShopContext);

  // Check if product is defined and has image property
  if (!product || !product.image) {
    return <div>Product not found</div>; // Handle missing product or image
  }

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-imglist">
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
          <img src={product.image} alt="product" />
        </div>
        <div className="productdisplay-image">
          <img className="productdisplay-main-image" src={product.image} alt="main product" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={stardull_icon} alt="star" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          The chocolate croissant is a flaky, buttery pastry filled with rich, smooth chocolate, offering a perfect balance of sweetness and texture in every bite.
          <div className="productdisplay-right-size">
            <h1>SELECT SIZE</h1>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>FAMILY ORDER</div>
              <div>MIGHTY ORDER</div>
            </div>
            <button onClick={() => { addtocart(product.id) }}>ADD TO CART</button>
            <p className="productdisplay-right-category">
              <span>Category: </span><span> BUNS , BREAD , SALTED BUTTERED WITH CREAM</span>
              <span> Tags:</span><span> Fresh , Hot </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
