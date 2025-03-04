// import React from 'react'
// import './Offers.css'
// import exclusive_image from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/exclusive_image.png'
// const Offers = () => {
//   return (
//     <div className='offers'>
//         <div className="offers-left">
// <h1>EXCLUSIVE</h1>
// <h1>DEALS FOR YOU</h1>
// <p>ONLY ON BEST SELLER PRODUCTS</p>
// <button>check now</button>
//         </div>
//         <div className="offers-right">
// <img src={exclusive_image} alt="exclusive_image" />
//         </div>
//     </div>
//   )
// }

// export default Offers

// .offers {
//   width: 100%; /* Full width of the container */
//   min-height: 60vh; /* Ensure a responsive minimum height */
//   display: flex; /* Flex layout for offers section */
//   margin: auto;
//   padding: 0px 80px; /* Reduce padding for better responsiveness */
//   margin-bottom: 100px; /* Adjust bottom margin */
//   background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%);
//   margin-top:50px;
// }

// .offers-left {
//   display: flex; /* Flex container for the left section */
//   flex: 1; /* Take equal space */
//   flex-direction: column; /* Stack content vertically */
//   justify-content: center; /* Center content vertically */
// }

// .offers-left h1 {
//   color: #171717; /* Text color */
//   font-size: 64px; /* Adjusted size for better scaling */
//   font-weight: 600;
//   margin-bottom: 20px; /* Add spacing below the heading */
// }

// .offers-left p {
//   color: #171717; /* Text color */
//   font-size: 20px; /* Adjusted font size */
//   font-weight: 600;
//   margin-bottom: 20px; /* Add spacing below the paragraph */
// }

// .offers-left button {
//   width: 282px;
//   height: 70px;
//   border-radius: 35px;
//   background: #ff4141; /* Button background color */
//   border: none;
//   color: white; /* Text color */
//   font-size: 22px;
//   font-weight: 500;
//   margin-top: 30px;
//   cursor: pointer;
//   transition: all 0.3s ease; /* Smooth hover transition */
// }

// .offers-left button:hover {
//   background: #d93737; /* Darker shade on hover */
// }

// .offers-right {
//   flex: 1; /* Equal space for right section */
//   display: flex; /* Flex layout */
//   align-items: center; /* Center items vertically */
//   justify-content: flex-end; /* Align content to the right */
//   padding-top: 50px;
// }

// .offers-right img {
//   max-width: 100%; /* Ensure the image is responsive */
//   height: auto; /* Maintain aspect ratio */
// }

// @media (max-width: 1280px) {
//   .offers {
//       padding: 0px 80px;
//       margin-bottom: 120px;
//   }
//   .offers-left h1 {
//       font-size: 40px;
//   }
//   .offers-left p {
//       font-size: 18px;
//   }
//   .offers-right img {
//       width: 300px;
//   }
//   .offers-left button {
//       width: 220px;
//       height: 50px;
//       font-size: 18px;
//   }
//   .offers-right {
//       padding-top: 30px;
//   }
// }

// @media (max-width: 800px) {
//   .offers {
//       padding: 0px 60px;
//       margin-bottom: 80px;
//       height: 40vh;
//   }
//   .offers-left h1 {
//       font-size: 16px;
//   }
//   .offers-left p {
//       font-size: 18px;
//   }
//   .offers-right img {
//       width: 200px;
//   }
//   .offers-left button {
//       width: 160px;
//       height: 40px;
//       font-size: 16px;
//   }
//   .offers-right {
//       padding-top: 10px;
//   }
// }

// @media (max-width: 500px) {
//   .offers {
//       margin-bottom: 50px;
//       height: 25vh;
//   }
//   .offers-left h1 {
//       font-size: 16px;
//   }
//   .offers-left p {
//       font-size: 10px;
//   }
//   .offers-right img {
//       width: 120px;
//   }
//   .offers-left button {
//       width: 120px;
//       height: 25px;
//       font-size: 10px;
//       margin-top: 12px;
//   }
// }

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import exclusive_image from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className='container-fluid bg-light py-5 mt-5'>
      <div className='row align-items-center'>
        <div className='col-md-6 text-center text-md-start'>
          <h1 className='display-4 fw-bold'>EXCLUSIVE</h1>
          <h1 className='display-4 fw-bold'>DEALS FOR YOU</h1>
          <p className='fs-5 fw-semibold'>ONLY ON BEST SELLER PRODUCTS</p>
          <button className='btn btn-danger btn-lg mt-3'>Check Now</button>
        </div>
        <div className='col-md-6 text-center'>
          <img src={exclusive_image} alt='exclusive_image' className='img-fluid' />
        </div>
      </div>
    </div>
  );
};

export default Offers;

