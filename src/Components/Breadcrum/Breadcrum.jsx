// import React from 'react';
// import './Breadcrum.css';
// import arrow_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/breadcrum_arrow.png';

// const Breadcrum = (props) => {
//   const { product } = props;
//   // Check if the product exists and has the necessary properties
//   if (!product) {
//     return <div className="breadcrum">Loading...</div>; // Or any other loading state/message
//   }
//   return (
//     <div className="breadcrum">
//       <span>
//         HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
//       </span>
//     </div>
//   );
// };

// export default Breadcrum;

import React from 'react';
import arrow_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/breadcrum_arrow.png';

const Breadcrum = ({ product }) => {
  if (!product) return <div className="breadcrumb text-center py-2 bg-dark text-white rounded">Loading...</div>;

  return (
    <div className="breadcrumb d-flex align-items-center gap-2 text-white fs-6 fw-semibold my-3 py-2 px-3 bg-dark rounded">
      <span className="text-capitalize">
        HOME <img src={arrow_icon} alt="" className="img-fluid" /> SHOP <img src={arrow_icon} alt="" className="img-fluid" /> 
        {product.category} <img src={arrow_icon} alt="" className="img-fluid" /> {product.name}
      </span>
    </div>
  );
};

export default Breadcrum;

