import React from 'react';
import './Breadcrum.css';
import arrow_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/breadcrum_arrow.png';

const Breadcrum = (props) => {
  const { product } = props;
  // Check if the product exists and has the necessary properties
  if (!product) {
    return <div className="breadcrum">Loading...</div>; // Or any other loading state/message
  }
  return (
    <div className="breadcrum">
      <span>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
      </span>
    </div>
  );
};

export default Breadcrum;
