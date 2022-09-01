import React, { useState } from 'react';

import './Description.scss';

const Description = () => {
  const [quantity, setQuantity] = useState(1);
  const onClick = e => {
    const check = e.target.textContent;
    if (check === '⎼') {
      if (quantity > 1) setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  return (
    <div className="description">
      <div className="product_meta">
        <h1>ROYCE’ TASTING BOX</h1>
        <div className="review">
          <span>☆☆☆☆☆</span>
          <a>Write A Review</a>
        </div>
        <p>$51.99</p>
      </div>
      <form className="product_form">
        <div className="quantity_selector">
          <span onClick={onClick}>⎼</span>
          <input
            value={quantity}
            onChange={e => console.log('바보')}
            type="text"
          />
          <span onClick={onClick}>+</span>
        </div>
        <button>ADD TO CART • $19.99</button>
      </form>
      <div className="product_description">
        <p className="content">
          A confection made with a rich and smooth blend of premium milk
          chocolate and fresh cream with a slight hint of brandy. Contains
          liquor. 20 pieces inside.
        </p>
        <p className="allergens">Allergens: Milk, Soy, May Contain Tree Nuts</p>
        <p className="temperature">Storage Temperature: 50°F Or Below</p>
        <p className="nutrition">Nutrition Facts (Download Here)</p>
      </div>
    </div>
  );
};

export default Description;
