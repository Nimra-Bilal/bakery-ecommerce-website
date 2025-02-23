import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}

export default Shop

// import React from 'react';
// import Hero from '../Components/Hero/Hero';
// import Popular from '../Components/Popular/Popular';
// import Offers from '../Components/Offers/Offers';
// import NewCollections from '../Components/NewCollections/NewCollections';
// import NewsLetter from '../Components/NewsLetter/NewsLetter';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Shop = () => {
//   return (
//     <div className="container my-5">
//       <h1 className="text-center mb-4">Welcome to Our Shop</h1>
//       <Hero />
//       <Popular />
//       <Offers />
//       <NewCollections />
//       <NewsLetter />
//     </div>
//   );
// };

// export default Shop;
