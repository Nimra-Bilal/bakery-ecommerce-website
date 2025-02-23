// import React from 'react';
// import './Item.css';
// import { Link } from 'react-router-dom';
// const Item = (props) => {
//   return (
//     <div className="item">
//     <Link to = {`/Product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt={props.name || "item"} /></Link> 
//       <p>{props.name}</p>
//       <div className="item-prices">
//         <div className="item-price-new">${props.new_price}</div>
//         <div className="item-price-old">${props.old_price}</div>
//       </div>
//     </div>
//   );
// };

// export default Item;


import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="card text-center bg-dark text-light border-0" style={{ width: '18rem' }}>
      <Link to={`/Product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name || 'item'}
          className="card-img-top rounded"
          style={{ height: '300px', width: '289px', objectFit: 'cover' }}
        />
      </Link>
      <div className="card-body">
        <p className="card-text fw-semibold">{props.name}</p>
        <div className="d-flex justify-content-center gap-3">
          <span className="text-light fw-bold">${props.new_price}</span>
          <span className="text-secondary text-decoration-line-through">${props.old_price}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;

