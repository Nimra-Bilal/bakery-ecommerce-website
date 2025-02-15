import React from 'react';
import './DescriptionBox.css';

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      {/* Navigator Tabs */}
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box active">Description</div>
        <div className="descriptionbox-nav-box">Review (132)</div>
      </div>

      {/* Content Section */}
      <div className="descriptionbox-content">
        {/* Description Section */}
        <div className="descriptionbox-section">
          <h2>Description</h2>
          <p>
            Our bakery offers a delightful assortment of freshly baked goods, from classic breads to sweet pastries. We take pride in using only the finest ingredients, ensuring that each item is both delicious and satisfying. Whether you're craving a soft, warm loaf of sourdough or a delicate, buttery croissant, our bakery has something for every taste.
          </p>
          <p>
            Our range of cakes, muffins, cookies, and pies are perfect for any occasion, from family gatherings to special celebrations. We offer custom orders for personalized cakes and desserts, allowing you to create the perfect treat for your event. With a focus on quality and customer satisfaction, our bakery is a place where every bite is a moment of happiness.
          </p>
        </div>

        {/* Review Section */}
        <div className="descriptionbox-section">
          <h2>Review (132)</h2>
          <p>
            This bakery has received rave reviews from customers. With an average rating of 4.8 stars, patrons love the freshness, taste, and variety of our baked goods. Here's what some of our customers have to say:
          </p>
          <ul>
            <li>"The best bread I’ve ever had! Always fresh and soft." - Sarah</li>
            <li>"Their pastries are to die for, especially the croissants!" - John</li>
            <li>"We ordered a custom cake for our wedding, and it was perfect!" - Maria</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
