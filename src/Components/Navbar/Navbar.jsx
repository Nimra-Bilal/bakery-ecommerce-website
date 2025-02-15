import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/logo.png'
import cart_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/nav_dropdown.png'
export const Navbar = () => {

const [menu,setMenu]=useState("shop");
const {getTotalCartItems}=useContext(ShopContext);
const menuRef= useRef();
const dropdown_toggle = (e) => {
  menuRef.current.classList.toggle('Nav-menu-visible');
  e.target.classList.toggle('open');
}
  return (
    <div className='Navbar'>
        <div className="Nav-logo">
       <img id='l' src={logo} alt="" />
       <p>BELLA'S BAKESTRY</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="Nav-menu">
            <li onClick={()=>(setMenu("shop"))}> <Link style={{textDecoration:'none'}} to = '/'>shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>(setMenu("cake"))}><Link style={{textDecoration:'none'}}  to = '/cake'>cake</Link>  {menu==="cake"?<hr/>:<></>}</li>
            <li onClick={()=>(setMenu("buns"))}><Link style={{textDecoration:'none'}}  to = '/buns'>buns</Link>{menu==="bun"?<hr/>:<></>}</li>
            <li onClick={()=>(setMenu("fried-food"))}><Link style={{textDecoration:'none'}}  to = '/fried-food'>fried-food</Link>  {menu==="fried-food"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to = '/login'><button>Login</button></Link>  
            <Link to = '/cart'><img  src={cart_icon} alt="cart_icon" /></Link>
            <div className="nav-cart-count">{ getTotalCartItems()}</div>

        </div>
    </div>
  )
}
