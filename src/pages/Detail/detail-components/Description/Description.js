import React, { useState, useRef } from 'react';

import './Description.scss';

const Description = ({ description, scrollFunction }) => {
  const { name, rate, price, info, allerge, temp, nutrition, tags } =
    description;

  const [quantity, setQuantity] = useState(1);
  // const reviewRef = useRef();

  const handleQuantity = e => {
    const check = e.target.textContent;
    if (check === '⎼' && quantity > 1) setQuantity(current => current - 1);
    else if (check === '+') setQuantity(current => current + 1);
  };

  function starRate(rate) {
    if (rate === 5) return '★★★★★';
    if (rate === 4) return '★★★★☆';
    if (rate === 3) return '★★★☆☆';
    if (rate === 2) return '★★☆☆☆';
    if (rate === 1) return '★☆☆☆☆';
    else return '☆☆☆☆☆';
  }

  return (
    <div className="description">
      <div className="product_meta">
        <h1 className="product_name">{name}</h1>
        <div className="review">
          <span className="total_rating">{starRate(rate)}</span>
          <a onClick={scrollFunction}>Write A Review</a>
        </div>
        <p className="price">${price}</p>
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
        <a href="https://www.fda.gov/media/99203/download">
          <p className="nutrition">{nutrition}</p>
        </a>
      </div>
    </div>
  );
};

export default Description;
