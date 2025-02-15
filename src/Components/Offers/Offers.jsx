import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
<h1>EXCLUSIVE</h1>
<h1>DEALS FOR YOU</h1>
<p>ONLY ON BEST SELLER PRODUCTS</p>
<button>check now</button>
        </div>
        <div className="offers-right">
<img src={exclusive_image} alt="exclusive_image" />
        </div>
    </div>
  )
}

export default Offers