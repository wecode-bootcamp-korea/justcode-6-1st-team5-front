import React, { useState } from 'react';

import './Description.scss';

const Description = ({
  description,
  scrollFunction,
  setIsCartClicked,
  rate,
}) => {
  const { id, name, rating, price, info, allerges, temperature } = description;

  const [quantity, setQuantity] = useState(1);
  const pureNum = Math.round(price * quantity * 100) / 100;

  const handleQuantity = e => {
    const check = e.target.textContent;
    if (check === '⎼' && quantity > 1) setQuantity(current => current - 1);
    else if (check === '+') setQuantity(current => current + 1);
  };

  const onChange = e => {
    if (isNaN(e.target.value)) return;
    else setQuantity(Number(e.target.value));
  };

  function starRate(rating) {
    if (rating === 5) return '★★★★★';
    if (rating === 4) return '★★★★☆';
    if (rating === 3) return '★★★☆☆';
    if (rating === 2) return '★★☆☆☆';
    if (rating === 1) return '★☆☆☆☆';
    else return '☆☆☆☆☆';
  }

  const onSubmit = async e => {
    e.preventDefault();
    const body = {
      token: localStorage.token,
      product_id: id,
      num: quantity,
    };

    await fetch('http://localhost:8000/cart', {
      method: 'POST',
      headers: {
        Authorization: localStorage.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    setIsCartClicked(true);
  };

  return (
    <div className="description">
      <div className="product_meta">
        <h1 className="product_name">{name}</h1>
        {rate !== 'no' && (
          <div className="review" onClick={scrollFunction}>
            <span className="total_rating">{starRate(Number(rating))}</span>
            <a>Write A Review</a>
          </div>
        )}
        <p className="price">${price}</p>
      </div>
      <form className="product_form" onSubmit={onSubmit}>
        <div className="quantity_selector">
          <span onClick={handleQuantity}>⎼</span>
          <input value={quantity} onChange={onChange} type="text" />
          <span onClick={handleQuantity}>+</span>
        </div>
        <button>ADD TO CART • ${pureNum} </button>
      </form>
      <div className="product_description">
        <p className="content">{info}</p>
        <p className="allergens">Allergens: {allerges}</p>
        <p className="temperature">{temperature}</p>
        <a href="https://www.fda.gov/media/99203/download">
          <p className="nutrition">Nutrition Facts(Download Here)</p>
        </a>
      </div>
    </div>
  );
};

export default Description;
