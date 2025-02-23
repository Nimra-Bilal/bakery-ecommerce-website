
import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductDisplay.css';
import star_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/star_icon.png';
import stardull_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addtocart } = useContext(ShopContext);

  if (!product || !product.image) {
    return <div className="text-center text-light bg-dark py-5">Product not found</div>;
  }

  return (
    <div className="container-fluid text-light bg-dark py-5">
      <div className="row g-4">
        <div className="col-md-6 d-flex">
          <div className="d-flex flex-column gap-2 me-3">
            {[...Array(4)].map((_, index) => (
              <img key={index} src={product.image} alt="product" className="img-thumbnail" style={{ width: '60px', height: '60px' }} />
            ))}
          </div>
          <div className="flex-grow-1 d-flex justify-content-center align-items-center">
            <img src={product.image} alt="main product" className="img-fluid w-100" />
          </div>
        </div>

        <div className="col-md-6 d-flex flex-column gap-3">
          <h1 className="fs-3 fw-bold">{product.name}</h1>
          <div className="d-flex align-items-center gap-2 text-warning">
            {[...Array(4)].map((_, index) => (
              <img key={index} src={star_icon} alt="star" width="20" />
            ))}
            <img src={stardull_icon} alt="star" width="20" />
            <p className="mb-0">(122)</p>
          </div>

          <div className="d-flex align-items-center gap-3">
            <div className="text-decoration-line-through text-secondary">${product.old_price}</div>
            <div className="text-danger fs-4 fw-bold">${product.new_price}</div>
          </div>

          <p className="text-secondary">The chocolate croissant is a flaky, buttery pastry filled with rich, smooth chocolate, offering a perfect balance of sweetness and texture in every bite.</p>

          <h2 className="fs-5 fw-semibold mt-3">SELECT SIZE</h2>
          <div className="d-flex gap-2">
            {['S', 'M', 'L', 'FAMILY ORDER', 'MIGHTY ORDER'].map((size, index) => (
              <div key={index} className="btn btn-outline-light py-2 px-3 border border-secondary rounded-2">{size}</div>
            ))}
          </div>

          <button onClick={() => addtocart(product.id)} className="btn btn-danger w-100 mt-3">ADD TO CART</button>

          <p className="text-secondary mt-3">
            <span className="fw-semibold">Category: </span> BUNS, BREAD, SALTED BUTTERED WITH CREAM<br />
            <span className="fw-semibold">Tags: </span> Fresh, Hot
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
