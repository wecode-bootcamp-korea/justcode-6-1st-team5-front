import React, { useState, useEffect } from 'react';
import Review from './Review';

import './ReviewForm.scss';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [rating, setRating] = useState('');

  const handleInput = e => {
    const value = e.target.value;
    if (e.target.id === 'name') setName(value);
    else if (e.target.id === 'email') setEmail(value);
    else if (e.target.id === 'review_title') setTitle(value);
    else if (e.target.id === 'review_content') setContent(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    const body = {
      name,
      email,
      rating,
      title,
      content,
    };
    setName('');
    setEmail('');
    setClicked([false, false, false, false, false]);
    setTitle('');
    setContent('');
    console.log(body);

    fetch('http://localhost:3000/review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(json => {
        alert(json);
      });
  };

  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleRating = e => {
    const rate = e.target.id;
    setRating(Number(rate));

    if (rate === '1') setClicked([true, false, false, false, false]);
    else if (rate === '2') setClicked([true, true, false, false, false]);
    else if (rate === '3') setClicked([true, true, true, false, false]);
    else if (rate === '4') setClicked([true, true, true, true, false]);
    else if (rate === '5') setClicked([true, true, true, true, true]);
  };

  return (
    <form onSubmit={onSubmit} className="review_form">
      <div className="contact-box space">
        <div className="name">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onChange={handleInput}
            id="name"
            placeholder="Enter your name"
            autoComplete="off"
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={handleInput}
            id="email"
            placeholder="john.smith@example.com"
            autoComplete="off"
          />
        </div>
      </div>
      <div className="rating_box space">
        <label htmlFor="rating">Raiting</label>
        <div className="star">
          {clicked.map((el, i) => {
            return el ? (
              <span key={i} id={i + 1} onClick={handleRating}>
                ★
              </span>
            ) : (
              <span key={i} id={i + 1} onClick={handleRating}>
                ☆
              </span>
            );
          })}
        </div>
      </div>
      <div className="review_title_box space">
        <label htmlFor="review_title">Title of Review</label>
        <input
          value={title}
          onChange={handleInput}
          id="review_title"
          type="text"
          placeholder="Give your review a title"
          autoComplete="off"
        />
      </div>
      <div className="review_content_box space">
        <label htmlFor="review_content">How was your overall experience?</label>
        <textarea
          value={content}
          onChange={handleInput}
          id="review_content"
          type="text"
        ></textarea>
      </div>
      <div className="submit_btn_box space">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default ReviewForm;
