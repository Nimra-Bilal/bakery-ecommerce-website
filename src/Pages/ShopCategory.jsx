// import React, { useContext } from 'react'
// import './CSS/ShopCategory.css'
// import { ShopContext } from '../Context/ShopContext'
// import dropdown_icon from '../Components/Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/dropdown_icon.png'
// import Item from '../Components/Item/Item'

// const ShopCategory = (props) => {

//   const { all_product } = useContext(ShopContext);

//   return (
//     <div className='shop-category'>
//       <img className='shopcategory-banner' src={props.banner} alt="" />
//       <div className="shopcategory-indexSort">
//         <p>
//           <span>Showing 1-12</span> out of 36 products
//         </p>
// <div className="shopcategory-sort">
// Sort by <img src={dropdown_icon} alt="" />
//       </div> 
// </div>
//       <div className="shopcategory-products">
//       {all_product && all_product.length > 0 ? (
//   all_product.map((item, i) => {
//     console.log("Processing item:", item); // Debug log
//     console.log("Checking item:", item, props.category === item.category);
//     console.log("Category prop:", props.category);
//     console.log("Item category:", item.category, "Match:", props.category === item.category);
    
//     if (props.category === item.category) {
//       return (
//         <Item
//           key={i}
//           id={item.id}
//           name={item.name}
//           image={item.image}
//           new_price={item.new_price}
//           old_price={item.old_price}
//         />
//       );
//     }
//     return null;
//   })
// ) : (
//   <p>No products found!</p>
// )}
//       </div>
//       <div className="shopcategory-loadmore">
//         EXPLORE MORE...
//       </div>
//     </div>
   
//   )
// }

// export default ShopCategory


import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className='shop-category bg-light py-5'>
      <img className='shopcategory-banner d-block mx-auto img-fluid mb-4' src={props.banner} alt='' />
      <div className='shopcategory-indexSort d-flex justify-content-between align-items-center container mb-4'>
        <p className='m-0'><span className='fw-bold'>Showing 1-12</span> out of 36 products</p>
        <div className='shopcategory-sort border rounded-pill py-2 px-3'>
          Sort by <img src={dropdown_icon} alt='' className='ms-2' />
        </div>
      </div>

      <div className='shopcategory-products text-center' style={{ paddingLeft: '0', paddingRight: '0' }}>

        {all_product && all_product.length > 0 ? (
         <div className='shopcategory-products row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-0 align-content-center'>

            {all_product.map((item, i) => (
              props.category === item.category && (
                <div key={i} className='col'>
                  <Item
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />
                </div>
              )
            ))}
          </div>
        ) : (
          <p>No products found!</p>
        )}
      </div>

      <div className='shopcategory-loadmore text-center mx-auto rounded-pill bg-secondary text-white fw-bold py-2 mt-5' style={{ width: '233px' }}>
        EXPLORE MORE...
      </div>
    </div>
  );
};

export default ShopCategory;
