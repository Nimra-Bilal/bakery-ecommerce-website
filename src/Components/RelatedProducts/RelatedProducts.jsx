// import React from 'react'
// import './RelatedProducts.css'
// import data_product from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/data'
// import Item from '../Item/Item'
// const RelatedProducts = () => {
//   return (
//     <div className='relatedproducts'>
//         <h1>Related Products</h1>
//         <hr/>
//         <div className='relatedproducts-item'>
// {data_product.map((item,i)=>{
// return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/> })}
//         </div>
//         </div>
//   )
// }

// export default RelatedProducts
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './RelatedProducts.css';
import data_product from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/data';
import Item from '../Item/Item';

const RelatedProducts = () => {
  return (
    <div className='relatedproducts text-light bg-dark py-5 text-center'>
      <h1 className='fs-1 fw-bold'>Related Products</h1>
      <hr className='mx-auto' style={{ width: '200px', height: '6px', borderRadius: '10px', background: '#ff4141', border: 'none' }} />
      <div className='container'>
        <div className='row g-4 justify-content-center'>
          {data_product.map((item, i) => (
            <div key={i} className='col-12 col-sm-6 col-lg-3'>
              <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
