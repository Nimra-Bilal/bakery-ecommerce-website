// import React, { useContext } from 'react'
// import { ShopContext } from '../Context/ShopContext';
// import { useParams } from 'react-router-dom';
// import Breadcrum from '../Components/Breadcrum/Breadcrum';
// import ProductDisplay from '../Components/ProductDisplay.jsx/ProductDisplay';
// import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
// import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

// const Product = () => {
//   const { all_product } = useContext(ShopContext);
//   const {productId}=useParams();
//   const product = all_product.find((e)=>e.id=== Number( productId) );
//   return (
//     <div>
//       <Breadcrum product={product}/>
//       <ProductDisplay product={product} />
//       <DescriptionBox/>
//       <RelatedProducts/>
//     </div>
//   )
// }

// export default Product

import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay.jsx/ProductDisplay';
import { DescriptionBox } from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Product Details</h1>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
