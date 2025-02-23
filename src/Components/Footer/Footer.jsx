import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/logo_big.png'
import instagram_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/instagram_icon.png'
import pinterester_icon from  '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>BELLA'S BAKESTRY</p>
            </div>
<ul className='footer-links'>
    <li>COMPANY</li>
    <li>PRODUCTS</li>
    <li>OFFICES</li>
    <li>ABOUT</li>
    <li>CONTACTS</li>
</ul>
<div className="footer-social-icon">
    <div className="footer-icons-container">
        <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={pinterester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
        </div>
        <div className="footer-copywrite">
            <hr />
            <p>Copywrite @ 2025 - All Rights Reserved</p>
        </div>
        
    </div>
  )
}

export default Footer
// import React from 'react';
// import './Footer.css';
// import footer_logo from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/logo_big.png';
// import instagram_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/instagram_icon.png';
// import pinterester_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/pintester_icon.png';
// import whatsapp_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/whatsapp_icon.png';

// const Footer = () => {
//   return (
//     <div className="footer container-fluid bg-dark text-white py-5 text-center">
//       {/* Footer Logo */}
//       <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
//         <img src={footer_logo} alt="Logo" className="img-fluid" style={{ width: '120px' }} />
//         <p className="h1 fw-bold" style={{ fontFamily: 'Dancing Script, serif' }}>BELLA'S BAKESTRY</p>
//       </div>

//       {/* Footer Links */}
//       <ul className="nav justify-content-center gap-4 mb-4">
//       <li className="nav-item"><p className="text-secondary fw-semibold m-0">COMPANY</p></li>
//     <li className="nav-item"><p className="text-secondary fw-semibold m-0">PRODUCTS</p></li>
//     <li className="nav-item"><p className="text-secondary fw-semibold m-0">OFFICES</p></li>
//     <li className="nav-item"><p className="text-secondary fw-semibold m-0">ABOUT</p></li>
//     <li className="nav-item"><p className="text-secondary fw-semibold m-0">CONTACTS</p></li>
//       </ul>

//       {/* Social Icons */}
//       <div className="d-flex justify-content-center gap-3 mb-4">
//         <div className="p-2 bg-white rounded border border-secondary" style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
//           <img src={instagram_icon} alt="Instagram" className="img-fluid" />
//         </div>
//         <div className="p-2 bg-white rounded border border-secondary" style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
//           <img src={pinterester_icon} alt="Pinterest" className="img-fluid" />
//         </div>
//         <div className="p-2 bg-white rounded border border-secondary" style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
//           <img src={whatsapp_icon} alt="WhatsApp" className="img-fluid" />
//         </div>
//       </div>

//       {/* Copywrite Section */}
//       <div className="border-top border-secondary pt-3">
//         <p className="text-secondary m-0">Copyright © 2025 - All Rights Reserved</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;
