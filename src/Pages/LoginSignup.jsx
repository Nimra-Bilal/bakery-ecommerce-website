// import React, { useState } from 'react'
// import './CSS/LoginSignup.css'
// const LoginSignup = () => {
//   const [state,setState]=useState("login");
//   const login=async()=>{
// console.log("login function executed");
//   }
//   const signup=async()=>{
//     console.log("signup function executed");
//   }
//   return (
//    <div className="loginsignup">
//     <div className="loginsignup-container">
//       <h1>Sign Up</h1>
//       <div className="loginsignup-fields">
//        {state==="Sign Up"?<input type="text" placeholder='your name' />:<></>} 
//         <input type="email" placeholder='your email' />
//         <input type="password" placeholder='your password' />
//       </div>
//       <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
//       {state==="Sign Up"? <p className="loginsignup-login">
//         Already have an account?<span onClick={()=>{setState("Login")}}> login here.</span>
//       </p>:<p className="loginsignup-login">
//         Create an account?<span onClick={()=>{setState("Sign Up")}}> Click here.</span>
//       </p>}
     
      
//       <div className="loginsignup-agree">
//         <input type="checkbox" name='' id='' />
//         <p>By continuing , I agree to your terms of service and privacy policy </p>
//       </div>
//     </div>
//    </div>
//   )
// }

// export default LoginSignup


// import React, { useState } from 'react';
// import './CSS/LoginSignup.css';

// const LoginSignup = () => {
//   const [state, setState] = useState("login");

//   const login = async () => {
//     console.log("Login function executed",formData);
//   };

//   const signup = async () => {
//     console.log("Signup function executed",formData);
//   };

//   const [formData,setFormData]=useState({
//     username:"",
//     email:"",
//     password:"",
//   })

//   const changeHandler=(e)=>{
//     setFormData({...formData,[e.target.name]:e.target.value})
//   }

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{state === "login" ? "Login" : "Sign Up"}</h1>
//         <div className="loginsignup-fields">
//           {state === "signup" && <input type="text" name='username' value={formData.username} onChange={changeHandler} placeholder='Your Name' />}
//           <input type="email" name='email' value={formData.email} onChange={changeHandler} placeholder='Your Email' />
//           <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='Your Password' />
//         </div>
//         <button onClick={() => { state === "login" ? login() : signup() }}>
//           Continue
//         </button>

//         {state === "signup" ? (
//           <p className="loginsignup-login">
//             Already have an account?
//             <span onClick={() => setState("login")}> Login here.</span>
//           </p>
//         ) : (
//           <p className="loginsignup-login">
//             Create an account?
//             <span onClick={() => setState("signup")}> Click here.</span>
//           </p>
//         )}

//         <div className="loginsignup-agree">
//           <input type="checkbox" id="agree" />
//           <p>By continuing, I agree to your terms of service and privacy policy.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;


// import React, { useState } from 'react';
// import './CSS/LoginSignup.css';

// const LoginSignup = () => {
//   const [state, setState] = useState("login");
  
//   // Initializing formData for both login and signup fields
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     agree: false,  // For checkbox state
//   });

//   // Handle form input changes
//   const changeHandler = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       setFormData({ ...formData, [name]: checked });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const login = async () => {
//     console.log("Login function executed", formData);
//   };

//   const signup = async () => {
//     console.log("Signup function executed", formData);
//   };

//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{state === "login" ? "Login" : "Sign Up"}</h1>
//         <div className="loginsignup-fields">
//           {state === "signup" && (
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={changeHandler}
//               placeholder="Your Name"
//             />
//           )}
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={changeHandler}
//             placeholder="Your Email"
//           />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={changeHandler}
//             placeholder="Your Password"
//           />
//         </div>
//         <button onClick={() => { state === "login" ? login() : signup() }}>
//           Continue
//         </button>

//         {state === "signup" ? (
//           <p className="loginsignup-login">
//             Already have an account?
//             <span onClick={() => setState("login")}> Login here.</span>
//           </p>
//         ) : (
//           <p className="loginsignup-login">
//             Create an account?
//             <span onClick={() => setState("signup")}> Click here.</span>
//           </p>
//         )}

//         <div className="loginsignup-agree">
//           <input
//             type="checkbox"
//             id="agree"
//             name="agree"
//             checked={formData.agree}
//             onChange={changeHandler}
//           />
//           <p>By continuing, I agree to your terms of service and privacy policy.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;




// import React, { useState } from 'react';
// import './CSS/LoginSignup.css';

// const LoginSignup = () => {
//   const [state, setState] = useState("login");
  
//   // Initializing formData for both login and signup fields
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     agree: false,  // For checkbox state
//   });

//   // Handle form input changes
//   const changeHandler = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       setFormData({ ...formData, [name]: checked });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const login = async () => {
//     console.log("Login function executed", formData);
//       // Ensure required fields match backend expectations
//       const requestBody = {
//         name: formData.username,  // Backend expects 'name'
//         email: formData.email,
//         password: formData.password
//     };

//     try {
//         const response = await fetch('http://localhost:9001/login', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(requestBody),  // Send corrected body
//         });

//         const responseData = await response.json();

//         if (response.ok) {  // Ensure request was successful
//             localStorage.setItem('auth-token', responseData.token);
//             window.location.replace("/");
//         } else {
//             console.error("Signup failed:", responseData.message);
//             alert(responseData.message);
//         }
//     } catch (error) {
//         console.error("Signup error:", error);
//     }
//   };

//   const signup = async () => {
//     console.log("Signup function executed", formData);

//     // Ensure required fields match backend expectations
//     const requestBody = {
//         name: formData.username,  // Backend expects 'name'
//         email: formData.email,
//         password: formData.password
//     };

//     try {
//         const response = await fetch('http://localhost:9001/signup', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(requestBody),  // Send corrected body
//         });

//         const responseData = await response.json();

//         if (response.ok) {  // Ensure request was successful
//             localStorage.setItem('auth-token', responseData.token);
//             window.location.replace("/");
//         } else {
//             console.error("Signup failed:", responseData.message);
//             alert(responseData.message);
//         }
//     } catch (error) {
//         console.error("Signup error:", error);
//     }
// };



//   return (
//     <div className="loginsignup">
//       <div className="loginsignup-container">
//         <h1>{state === "login" ? "Login" : "Sign Up"}</h1>
//         <div className="loginsignup-fields">
//           {state === "signup" && (
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={changeHandler}
//               placeholder="Your Name"
//             />
//           )}
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={changeHandler}
//             placeholder="Your Email"
//           />
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={changeHandler}
//             placeholder="Your Password"
//           />
//         </div>
//         <button onClick={() => { state === "login" ? login() : signup() }}>
//           Continue
//         </button>

//         {state === "signup" ? (
//           <p className="loginsignup-login">
//             Already have an account?
//             <span onClick={() => setState("login")}> Login here.</span>
//           </p>
//         ) : (
//           <p className="loginsignup-login">
//             Create an account?
//             <span onClick={() => setState("signup")}> Click here.</span>
//           </p>
//         )}

//         <div className="loginsignup-agree">
//           <input
//             type="checkbox"
//             id="agree"
//             name="agree"
//             checked={formData.agree}
//             onChange={changeHandler}
//           />
//           <p>By continuing, I agree to your terms of service and privacy policy.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './CSS/LoginSignup.css';

// const LoginSignup = () => {
//   const [state, setState] = useState("login");

//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     agree: false,
//   });

//   const changeHandler = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
//   };

//   const login = async () => {
//     const requestBody = {
//       name: formData.username,
//       email: formData.email,
//       password: formData.password,
//     };

//     try {
//       const response = await fetch('http://localhost:9001/login', {
//         method: 'POST',
//         headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
//         body: JSON.stringify(requestBody),
//       });
//       const responseData = await response.json();
//       if (response.ok) {
//         localStorage.setItem('auth-token', responseData.token);
//         window.location.replace("/");
//       } else {
//         alert(responseData.message);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   const signup = async () => {
//     const requestBody = {
//       name: formData.username,
//       email: formData.email,
//       password: formData.password,
//     };

//     try {
//       const response = await fetch('http://localhost:9001/signup', {
//         method: 'POST',
//         headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
//         body: JSON.stringify(requestBody),
//       });
//       const responseData = await response.json();
//       if (response.ok) {
//         localStorage.setItem('auth-token', responseData.token);
//         window.location.replace("/");
//       } else {
//         alert(responseData.message);
//       }
//     } catch (error) {
//       console.error("Signup error:", error);
//     }
//   };

//   return (
//     <div className="container vh-100 d-flex align-items-center justify-content-center">
//       <div className="card p-4 shadow-lg" style={{ width: '500px' }}>
//         <h1 className="text-center mb-4">{state === "login" ? "Login" : "Sign Up"}</h1>
//         <div className="mb-3">
//           {state === "signup" && (
//             <input type="text" name="username" className="form-control mb-3" placeholder="Your Name" value={formData.username} onChange={changeHandler} />
//           )}
//           <input type="email" name="email" className="form-control mb-3" placeholder="Your Email" value={formData.email} onChange={changeHandler} />
//           <input type="password" name="password" className="form-control mb-3" placeholder="Your Password" value={formData.password} onChange={changeHandler} />
//         </div>
//         <button className="btn btn-danger w-100 mb-3" onClick={() => (state === "login" ? login() : signup())}>
//           Continue
//         </button>
//         <p className="text-center">
//           {state === "signup" ? (
//             <>Already have an account? <span className="text-danger" onClick={() => setState("login")} style={{ cursor: 'pointer' }}>Login here.</span></>
//           ) : (
//             <>Create an account? <span className="text-danger" onClick={() => setState("signup")} style={{ cursor: 'pointer' }}>Click here.</span></>
//           )}
//         </p>
//         <div className="form-check mt-3">
//           <input type="checkbox" id="agree" name="agree" className="form-check-input" checked={formData.agree} onChange={changeHandler} />
//           <label className="form-check-label" htmlFor="agree">By continuing, I agree to your terms of service and privacy policy.</label>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/LoginSignup.css';

const LoginSignup = ({ setNavbarButton }) => {
  const [state, setState] = useState("login");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    agree: false,
  });

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = () => {
    if (!formData.email || !formData.password || (state === "signup" && !formData.username)) {
      alert("Please fill all fields");
      return;
    }
    console.log("Entered Email:", formData.email);
    console.log("Entered Password:", formData.password);
    setNavbarButton('Logout');
    alert('You are ready to shop!');
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="card p-4 shadow-lg" style={{ width: '500px' }}>
        <h1 className="text-center mb-4">{state === "login" ? "Login" : "Sign Up"}</h1>
        <div className="mb-3">
          {state === "signup" && (
            <input type="text" name="username" className="form-control mb-3" placeholder="Your Name" value={formData.username} onChange={changeHandler} />
          )}
          <input type="email" name="email" className="form-control mb-3" placeholder="Your Email" value={formData.email} onChange={changeHandler} />
          <input type="password" name="password" className="form-control mb-3" placeholder="Your Password" value={formData.password} onChange={changeHandler} />
        </div>
        <button className="btn btn-danger w-100 mb-3" onClick={handleSubmit}>Continue</button>
        <p className="text-center">
          {state === "signup" ? (
            <>Already have an account? <span className="text-danger" onClick={() => setState("login")} style={{ cursor: 'pointer' }}>Login here.</span></>
          ) : (
            <>Create an account? <span className="text-danger" onClick={() => setState("signup")} style={{ cursor: 'pointer' }}>Click here.</span></>
          )}
        </p>
        <div className="form-check mt-3">
          <input type="checkbox" id="agree" name="agree" className="form-check-input" checked={formData.agree} onChange={changeHandler} />
          <label className="form-check-label" htmlFor="agree">By continuing, I agree to your terms of service and privacy policy.</label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
