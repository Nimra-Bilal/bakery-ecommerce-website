// import React from 'react'
// import './Popular.css'
// import data_product from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/data'
// import Item from '../Item/Item'
// const Popular = () => {
//   return (
//     <div className='Popular'>
//         <h1>POPULAR IN TOWN</h1>
//         <hr/>
// <div className="popular-item">
//     {data_product.map((item,i)=>{
//         return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
//     })}
// </div>
//     </div>
//   )
// }

// export default Popular

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data_product from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/data';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='container-fluid text-center bg-dark text-light py-5'>
      <h1 className='display-4 fw-bold'>POPULAR IN TOWN</h1>
      <hr className='mx-auto my-3 ' style={{ width: '200px', height: '6px', backgroundColor: '#BB86FC', border: 'none', borderRadius: '10px' }} />
      <div className='row gx-5 gy-5 px-3 justify-content-center'> {/* Increased gap between items */}
        {data_product.map((item, i) => (
          <div key={i} className='col-6 col-sm-4 col-md-3 col-lg-3 '>
            <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
