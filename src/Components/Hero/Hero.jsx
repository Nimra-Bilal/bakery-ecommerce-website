// import React from 'react'
// import './Hero.css'
// import logo from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/logo.png'
// import arrow_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/arrow.png'
// import hero_image from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/hero_image.png'
// const Hero = () => {
//   return (
//     <div className='hero'>
// <div className="hero-left">
// <h2>FRESH PRODUCTS ONLY</h2>
// <div>
//   <div className="logo-img">
//     <img src={logo} alt="logo" />
//   </div>
//         <p>yummiest delicasies for everyone!</p>
    
//       </div>
//     <div className="hero-latest-btn">
//         <div>HOT AND FRESH</div>
//             <img src={arrow_icon} alt="arrow_icon" />
// </div>
// </div>
// <div className="hero-right"></div>
// <img src={hero_image}  style={{ maxWidth: "900px", height: "auto" }} alt="hero_image" />

//     </div>
//   )
// }

// export default Hero
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css';
import logo from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/hand_icon.png';
import arrow_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/arrow.png';
import hero_image from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/hero_image.png';

const Hero = () => {
  return (
    <div className='hero d-flex flex-column flex-md-row align-items-center justify-content-center text-light bg-dark py-5'>
      <div className='hero-left text-center text-md-start px-5'>
        <h2 className='fs-4 fw-semibold'>FRESH PRODUCTS ONLY</h2>
        <div className='d-flex align-items-center justify-content-center justify-content-md-start my-3'>
          <img src={logo} alt='logo' className='img-fluid rounded-circle' style={{ width: '150px', height: '150px' }} />
          <p className='fs-2 fw-bold mb-0 ms-3'>yummiest delicasies for everyone!</p>
        </div>
        <div className='hero-latest-btn d-inline-flex align-items-center justify-content-center gap-2 bg-danger text-white rounded-pill px-4 py-2 fw-bold mt-3'>
          <div>HOT AND FRESH</div>
          <img src={arrow_icon} alt='arrow_icon' className='img-fluid' style={{ width: '20px' }} />
        </div>
      </div>
      <div className='hero-right text-center mt-4 mt-md-0'>
        <img src={hero_image} alt='hero_image' className='img-fluid' style={{ maxWidth: '1000px', height: '100vh' }} />
      </div>
    </div>
  );
};

export default Hero;
