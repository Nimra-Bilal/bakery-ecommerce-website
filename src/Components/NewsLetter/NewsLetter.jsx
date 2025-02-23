// import React from 'react'
// import './NewsLetter.css'
// const NewsLetter = () => {
//   return (
//     <div className='newsletter'>
//         <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
//         <p>SUBSCRIBE TO OUR NEWS CHANNEL AND STAY UPDATED</p>
//     <div>
//         <input type="email" placeholder="Enter your email" />
//         <button>SUBSCRIBE</button>
//     </div>
//     </div>
//   )
// }

// export default NewsLetter
// .newsletter {
//   width: 85%;
//   height: 90vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: auto;
//   padding: 0 140px;
//   margin-top: 150px;
//   background: linear-gradient(180deg, #fde1ff 0%, #e1ffea22 60%);
//   gap: 30px;
// }

// .newsletter h1 {
//   font-size: 55px;
//   font-weight: 600;
//   color: #454545;
// }

// .newsletter p {
//   font-size: 20px;
//   color: #454545;
// }

// .newsletter div {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   background: white;
//   width: 730px;
//   height: 70px;
//   border-radius: 80px;
//   border: 1px solid #e3e3e3;
// }

// .newsletter input {
//   width: 500px;
//   margin-left: 30px;
//   border: none;
//   outline: none;
//   color: #616161;
//   font-size: 16px;
//   color: gray;
// }

// .newsletter div button {
//   width: 210px;
//   height: 70px;
//   border-radius: 80px;
//   background: black;
//   color: white;
//   font-size: 16px;
//   cursor: pointer;
//   border: none;
// }

// @media (max-width: 1280px) {
//   .newsletter {
//       padding: 0px 80px;
//       margin-bottom: 120px;
//       gap: 20px;
//   }
//   .newsletter h1 {
//       font-size: 36px;
//   }
//   .newsletter p {
//       font-size: 16px;
//   }
//   .newsletter div {
//       width: 600px;
//       height: 60px;
//   }
//   .newsletter div input {
//       width: 400px;
//   }
//   .newsletter div button {
//       width: 160px;
//       height: 60px;
//   }
// }

// @media (max-width: 1024px) {
//   .newsletter {
//       margin-bottom: 60px;
//   }
//   .newsletter h1 {
//       font-size: 30px;
//   }
//   .newsletter p {
//       font-size: 14px;
//   }
//   .newsletter div {
//       width: 500px;
//       height: 50px;
//   }
//   .newsletter div input {
//       width: 300px;
//       font-size: 14px;
//   }
//   .newsletter div button {
//       width: 120px;
//       height: 50px;
//       font-size: 14px;
//   }
// }

// @media (max-width: 800px) {
//   .newsletter {
//       height: 35vh;
//       margin-bottom: 30px;
//   }
//   .newsletter h1 {
//       font-size: 18px;
//   }
//   .newsletter p {
//       font-size: 12px;
//   }
//   .newsletter div {
//       width: 400px;
//       height: 40px;
//   }
//   .newsletter div input {
//       width: 200px;
//       font-size: 13px;
//   }
//   .newsletter div button {
//       width: 100px;
//       height: 40px;
//       font-size: 13px;
//   }
// }

// @media (max-width: 500px) {
//   .newsletter {
//       height: 25vh;
//       padding: 0;
//       gap: 15px;
//       width: 100%;
//   }
//   .newsletter h1 {
//       font-size: 16px;
//   }
//   .newsletter p {
//       font-size: 13px;
//       max-width: 200px;
//       text-align: center;
//   }
//   .newsletter div {
//       width: 290px;
//   }
//   .newsletter div input {
//       width: 130px;
//   }
// }


// NewsLetter.js
import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
    return (
        <div className="newsletter container">
            <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
            <p>SUBSCRIBE TO OUR NEWS CHANNEL AND STAY UPDATED</p>
            <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button className="btn btn-dark">SUBSCRIBE</button>
            </div>
        </div>
    );
};

export default NewsLetter;
