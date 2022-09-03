import React, { useState } from 'react';
import Review from './Review';

import './ReviewForm.scss';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

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
      title,
      content,
    };
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
            autocomplete="off"
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={handleInput}
            id="email"
            placeholder="john.smith@example.com"
          />
        </div>
      </div>
      <div className="rating_box space">
        <label htmlFor="rating">Raiting</label>
        <p>☆☆☆☆☆</p>
      </div>
      <div className="review_title_box space">
        <label htmlFor="review_title">Title of Review</label>
        <input
          value={title}
          onChange={handleInput}
          id="review_title"
          type="text"
          placeholder="Give your review a title"
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
