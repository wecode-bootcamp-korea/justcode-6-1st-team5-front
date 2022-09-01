import React, { useState } from 'react';

import './Description.scss';

const Description = ({ description }) => {
  const { name, rate, price, info, allerge, temp, nutrition, tags } =
    description;

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = e => {
    const check = e.target.textContent;
    if (check === '⎼' && quantity > 1) setQuantity(current => current - 1);
    else if (check === '+') setQuantity(current => current + 1);
  };

  return (
    <div className="description">
      <div className="product_meta">
        <h1>{name}</h1>
        <div className="review">
          <span>☆☆☆☆☆</span>
          <a>Write A Review</a>
        </div>
        <p>${price}</p>
      </div>
      <form className="product_form">
        <div className="quantity_selector">
          <span onClick={handleQuantity}>⎼</span>
          <input
            value={quantity}
            onChange={e => console.log('바보')}
            type="text"
          />
          <span onClick={handleQuantity}>+</span>
        </div>
        <button>ADD TO CART • ${price * quantity} </button>
      </form>
      <div className="product_description">
        <p className="content">{info}</p>
        <p className="allergens">{allerge}</p>
        <p className="temperature">{temp}</p>
        <p className="nutrition">{nutrition}</p>
      </div>
    </div>
  );
};

export default Description;
