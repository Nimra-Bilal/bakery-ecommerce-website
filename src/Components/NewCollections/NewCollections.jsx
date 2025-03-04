// import React from 'react'
// import './NewCollections.css'
// import new_collection from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/new_collections'
// import Item from '../Item/Item'
// const NewCollections = () => {
    
//   return (
//     <div className='new-collection'  >
//        <h1>ON THE MENU TODAY</h1>
//        <hr />
//        <div className="collections">
//         {new_collection.map((item,i)=>{
//             return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//         })}
//        </div>
//        </div>
//   )
// }

// export default NewCollections
// .new-collection {
//   display: flex; /* Flexbox layout for vertical stacking */
//   flex-direction: column; /* Stack child elements vertically */
//   align-items: center; /* Center content horizontally */
//   gap: 50px; /* Adds space between child elements */
//   margin-bottom: 100px; /* Adds space below */
//   padding: 20px; /* Inner padding */
//   margin: 100px;
//   background: #333; /* Dark background for the section */
//   color: #fff; /* Light text color */
// }

// .new-collection h1 {
//   color: #fff; /* White color for the heading */
//   font-size: 50px; /* Large font size */
//   font-weight: 600; /* Bold text */
//   margin: 0; /* Removes default margins */
// }

// .new-collection hr {
//   width: 200px; /* Width of horizontal line */
//   height: 6px; /* Thickness of the line */
//   border-radius: 10px; /* Rounded corners */
//   background: #777; /* Lighter gray line for contrast */
//   border: none; /* No default border */
// }

// .collections {
//   display: grid; /* Grid layout */
//   grid-template-columns: repeat(3, 1fr); /* Ensures 3 items per row */
//   gap: 40px; /* Space between grid items */
//   width: 100%; /* Full container width */
//   box-sizing: border-box; /* Include padding and border in width */
// }

// .collections > * {
//   display: block; /* Ensures block layout for items */
//   margin: auto; /* Centers items if smaller */
// }

// .collections img {
//   width: 250px; /* Ensures images are responsive */
//   height: 300px; /* Maintains aspect ratio */
//   display: block; /* Removes inline space below images */
//   object-fit: cover; /* Ensures proper cropping (if needed) */
//   border-radius: 10px; /* Rounded corners for images */
// }

// /* Responsive Styles */
// @media (max-width: 1280px) {
//   .new-collection h1 {
//       font-size: 40px;
//   }
//   .new-collection hr {
//       width: 160px;
//       height: 4px;
//   }
//   .collections {
//       grid-template-columns: repeat(3, 1fr); /* 3 items per row for medium screens */
//       gap: 30px; /* Maintain gap */
//   }
// }

// @media (max-width: 1024px) {
//   .new-collection h1 {
//       font-size: 30px;
//   }
//   .new-collection hr {
//       width: 120px;
//       height: 3px;
//   }
//   .collections {
//       grid-template-columns: repeat(2, 1fr); /* 2 items per row for smaller screens */
//       gap: 25px;
//   }
// }

// @media (max-width: 800px) {
//   .new-collection h1 {
//       font-size: 24px;
//   }
//   .new-collection hr {
//       width: 100px;
//       height: 3px;
//   }
//   .collections {
//       grid-template-columns: repeat(2, 1fr); /* 2 items per row for small screens */
//       gap: 20px;
//   }
// }

// @media (max-width: 500px) {
//   .new-collection h1 {
//       font-size: 20px;
//   }
//   .new-collection hr {
//       width: 80px;
//   }
//   .collections {
//       grid-template-columns: 1fr; /* 1 item per row for mobile screens */
//       gap: 10px; /* Space for small screens */
//       margin-top: 30px; /* Adds space above the grid */
//   }
// }
// NewCollections.js
import React from 'react';
import './NewCollections.css';
import new_collection from '../Assets/Frontend_Assets-20250118T130924Z-001/Frontend_Assets/new_collections';
import Item from '../Item/Item';

const NewCollections = () => {
    return (
        <div className="new-collection container">
            <h1>ON THE MENU TODAY</h1>
            <hr />
            <div className="row g-4">
                {new_collection.map((item, i) => (
                    <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-4">
                        <Item
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewCollections;
