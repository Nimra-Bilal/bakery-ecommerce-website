// import React, { useContext, useRef, useState } from 'react'
// import './Navbar.css'
// import logo from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/logo.png'
// import cart_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/cart_icon.png'
// import { Link } from 'react-router-dom'
// import { ShopContext } from '../../Context/ShopContext'
// import nav_dropdown from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/nav_dropdown.png'
// export const Navbar = () => {

// const [menu,setMenu]=useState("shop");
// const {getTotalCartItems}=useContext(ShopContext);
// const menuRef= useRef();
// const dropdown_toggle = (e) => {
//   menuRef.current.classList.toggle('Nav-menu-visible');
//   e.target.classList.toggle('open');
// }
//   return (
//     <div className='Navbar'>
//         <div className="Nav-logo">
//        <img id='l' src={logo} alt="" />
//        <p>BELLA'S BAKESTRY</p>
//         </div>
//         <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
//         <ul ref={menuRef} className="Nav-menu">
//             <li onClick={()=>(setMenu("shop"))}> <Link style={{textDecoration:'none'}} to = '/'>shop</Link> {menu==="shop"?<hr/>:<></>}</li>
//             <li onClick={()=>(setMenu("cake"))}><Link style={{textDecoration:'none'}}  to = '/cake'>cake</Link>  {menu==="cake"?<hr/>:<></>}</li>
//             <li onClick={()=>(setMenu("buns"))}><Link style={{textDecoration:'none'}}  to = '/buns'>buns</Link>{menu==="bun"?<hr/>:<></>}</li>
//             <li onClick={()=>(setMenu("fried-food"))}><Link style={{textDecoration:'none'}}  to = '/fried-food'>fried-food</Link>  {menu==="fried-food"?<hr/>:<></>}</li>
//         </ul>
//         <div className="nav-login-cart">
//           <Link to = '/login'><button>Login</button></Link>  
//             <Link to = '/cart'><img  src={cart_icon} alt="cart_icon" /></Link>
//             <div className="nav-cart-count">{ getTotalCartItems()}</div>

//         </div>
//     </div>
//   )
// }
// Navbar.js


// .Navbar {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 16px;
//   box-shadow: 0 1px 3px -2px black;
//   background:rgb(255, 223, 253);
//   font-family: "Dancing Script", serif;
//   font-optical-sizing: auto;
//   font-style: Bold;
//   font-size:24px;
// }

// .Nav-logo {
//   display: flex;
//   align-items: center;
//   gap: 10px;
// }

// .Nav-logo p {
//   color: #171717;
//   font-size: 38px;
//   font-weight: 600;
// }

// .Nav-menu {
//   display: flex;
//   align-items: center;
//   gap: 50px;
//   list-style: none;
//   font-size: 20px;
//   color: #626262;
//   font-weight: 500;
//   margin: 0;
//   padding: 0;
// }

// .Nav-menu li {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   gap: 3px;
//   cursor: pointer;
// }

// .Nav-menu hr {
//   border: none;
//   width: 80%;
//   height: 3px;
//   border-radius: 10px;
//   background-color: red; /* Fixed property for consistency */
// }

// .nav-login-cart {
//   display: flex;
//   align-items: center;
//   gap: 45px;
// }

// .Nav-logo img#l {
//   width: 90px; /* You can adjust this value to fit your design */
//   height: auto;
// }

// .nav-login-cart button {
//   width: 157px;
//   height: 58px;
//   outline: none;
//   border: 1px solid #7a7a7a;
//   border-radius: 75px;
//   background: black;
//   color: white;
//   font-weight: 500;
//   font-size: 20px;
//   cursor: pointer;
//   transition: background 0.3s ease;
// }

// .nav-login-cart button:active {
//   background: #f3f3f3;
// }

// .nav-cart-count {
//   width: 22px;
//   height: 22px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: -35px;
//   margin-left: -55px;
//   border-radius: 11px;
//   font-size: 14px;
//   background: red;
//   color: white;
// }

// .nav-dropdown {
//   display: none;
//   width: 30px;
//   transform: rotate(-90deg);
//   transition: transform 0.5s;
// }

// .nav-dropdown.open {
//   transform: rotate(90deg);
// }

// @media (max-width: 1280px) {
//   .Navbar {
//     padding: 12px 50px;
//   }

//   .Nav-logo img {
//     width: 40px;
//   }

//   .Nav-logo p {
//     font-size: 25px;
//   }

//   .Nav-menu {
//     gap: 30px;
//     font-size: 16px;
//   }

//   .nav-login-cart {
//     gap: 30px;
//   }

//   .nav-login-cart button {
//     width: 120px;
//     height: 45px;
//     font-size: 16px;
//   }

//   .nav-cart-count {
//     margin-left: -40px;
//     font-size: 12px;
//   }
// }

// @media (max-width: 1024px) {
//   .Navbar {
//     padding: 12px 30px;
//   }

//   .Nav-menu {
//     gap: 25px;
//     font-size: 14px;
//   }

//   .nav-login-cart button {
//     width: 80px;
//     height: 35px;
//     font-size: 14px;
//   }

//   .nav-login-cart img {
//     width: 30px;
//   }

//   .nav-cart-count {
//     width: 18px;
//     height: 18px;
//   }
// }

// @media (max-width: 800px) {
//   .Navbar {
//     padding: 10px 0;
//   }

//   .nav-dropdown {
//     display: block;
//   }

//   .Nav-menu {
//     display: none;
//     flex-direction: column;
//     align-items: center;
//     position: absolute;
//     top: 50px;
//     left: 0;
//     width: 100%;
//     height: auto;
//     background-color: white;
//     padding: 10px 0;
//     box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
//   }

//   .Nav-menu.nav-menu-visible {
//     display: flex;
//   }
// }

// @media (max-width: 500px) {
//   .Navbar {
//     padding: 8px 0;
//   }

//   .Nav-logo {
//     transform: scale(0.8);
//   }

//   .Nav-menu {
//     height: 70px;
//     top: 50px;
//   }
// }

// import React, { useContext, useRef, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Navbar.css';
// import logo from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/logo.png';
// import cart_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/cart_icon.png';
// import { Link } from 'react-router-dom';
// import { ShopContext } from '../../Context/ShopContext';

// export const Navbar = () => {
//     const [menu, setMenu] = useState("shop");
//     const { getTotalCartItems } = useContext(ShopContext);
//     const menuRef = useRef();

//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
//             <div className="container-fluid">
//                 <Link className="navbar-brand d-flex align-items-center" to="/">
//                     <img src={logo} alt="Logo" width="60" height="60" />
//                     <span className="ms-2 fs-3 fw-bold">BELLA'S BAKESTRY</span>
//                 </Link>

//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarNav" ref={menuRef}>
//                     <ul className="navbar-nav mx-auto">
//                         <li className="nav-item" onClick={() => setMenu("shop")}>
//                             <Link className={`nav-link ${menu === "shop" && "active"}`} to="/">Shop</Link>
//                         </li>
//                         <li className="nav-item" onClick={() => setMenu("cake")}>
//                             <Link className={`nav-link ${menu === "cake" && "active"}`} to="/cake">Cake</Link>
//                         </li>
//                         <li className="nav-item" onClick={() => setMenu("buns")}>
//                             <Link className={`nav-link ${menu === "buns" && "active"}`} to="/buns">Buns</Link>
//                         </li>
//                         <li className="nav-item" onClick={() => setMenu("fried-food")}>
//                             <Link className={`nav-link ${menu === "fried-food" && "active"}`} to="/fried-food">Fried Food</Link>
//                         </li>
//                     </ul>

//                     <div className="d-flex align-items-center gap-4">
//                         <Link to="/login" className="btn btn-dark px-4 py-2">Login</Link>
//                         <div className="position-relative">
//                             <Link to="/cart">
//                                 <img src={cart_icon} alt="Cart" width="35" />
//                             </Link>
//                             <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//                                 {getTotalCartItems()}
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };


import React, { useContext, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import logo from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/logo.png';
import cart_icon from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = ({ navbarButton, setNavbarButton }) => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef();

    const handleButtonClick = () => {
        if (navbarButton === 'Logout') {
            setNavbarButton('Login');
            alert('You have been logged out!');
        } else {
            // Redirect to the login/signup page when clicking "Login"
            window.location.href = '/login';
        }
    };
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={logo} alt="Logo" width="60" height="60" />
                    <span className="ms-2 fs-3 fw-bold">BELLA'S BAKESTRY</span>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav" ref={menuRef}>
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item" onClick={() => setMenu("shop")}>
                            <Link className={`nav-link ${menu === "shop" && "active"}`} to="/">Shop</Link>
                        </li>
                        <li className="nav-item" onClick={() => setMenu("cake")}>
                            <Link className={`nav-link ${menu === "cake" && "active"}`} to="/cake">Cake</Link>
                        </li>
                        <li className="nav-item" onClick={() => setMenu("buns")}>
                            <Link className={`nav-link ${menu === "buns" && "active"}`} to="/buns">Buns</Link>
                        </li>
                        <li className="nav-item" onClick={() => setMenu("fried-food")}>
                            <Link className={`nav-link ${menu === "fried-food" && "active"}`} to="/fried-food">Fried Food</Link>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center gap-4">
                        <button onClick={handleButtonClick} className="btn btn-dark px-4 py-2">{navbarButton}</button>

                        <div className="position-relative">
                            <Link to="/cart">
                                <img src={cart_icon} alt="Cart" width="35" />
                            </Link>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {getTotalCartItems()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};