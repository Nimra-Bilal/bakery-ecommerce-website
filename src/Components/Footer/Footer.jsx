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