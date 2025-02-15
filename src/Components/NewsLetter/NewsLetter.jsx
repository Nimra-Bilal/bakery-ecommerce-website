import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
        <p>SUBSCRIBE TO OUR NEWS CHANNEL AND STAY UPDATED</p>
    <div>
        <input type="email" placeholder="Enter your email" />
        <button>SUBSCRIBE</button>
    </div>
    </div>
  )
}

export default NewsLetter