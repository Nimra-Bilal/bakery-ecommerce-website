import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/hand_icon.png'
import arrow_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/arrow.png'
import hero_image from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
<div className="hero-left">
<h2>FRESH PRODUCTS ONLY</h2>
<div>
    <div className="hand-hand-icon">
       <img src={hand_icon} alt="hand_icon" /> <p>new </p>
       
        </div>
        <p>yummiest delicasies</p>
        <p>for everyone!</p>
      </div>
    <div className="hero-latest-btn">
        <div>HOT AND FRESH</div>
            <img src={arrow_icon} alt="arrow_icon" />
</div>
</div>
<div className="hero-right"></div>
<img src={hero_image}  style={{ maxWidth: "1080px", height: "auto" }} alt="hero_image" />

    </div>
  )
}

export default Hero