import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './Review.scss';

const Review = ({ review, setReviewData, setLength }) => {
  const { id, name, email, rating, title, content, date } = review;

  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');

  const params = useParams();
  const productId = Number(params.id);

  function starRate(rating) {
    if (rating === 5) return '★★★★★';
    if (rating === 4) return '★★★★☆';
    if (rating === 3) return '★★★☆☆';
    if (rating === 2) return '★★☆☆☆';
    if (rating === 1) return '★☆☆☆☆';
    else return '☆☆☆☆☆';
  }

  const openEmailInput = () => {
    setVisible(current => !current);
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  const handleDelete = e => {
    e.preventDefault();

    const body = {
      id: id,
      email: value,
      product_id: productId,
    };

    fetch(`http://localhost:8000/reviews/product/delete`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(data => {
        if (value === email) alert('Your review has been deleted!');
        else if (value === '')
          alert('Please enter the correct email used to write this review.');
        else if (value !== email) alert('Please check your email.');
        setReviewData(data);
        setLength(data.length);
      });
  };

  return (
    <div className="review_box">
      <div className="writer_info">
        <span className="created_at">{date}</span>
        <span className="star_rate">{starRate(Number(rating))}</span>
        <span className="writer_name">{name}</span>
      </div>
      <div className="review_content">
        <p className="title">{title}</p>
        <p className="content">{content}</p>
      </div>
      <div className="delete_btn">
        {!visible && (
          <img
            onClick={openEmailInput}
            src="/image/trash.png"
            alt="delete_icon"
          />
        )}
        {visible && (
          <form>
            <input
              onChange={onChange}
              value={value}
              placeholder="Please enter the correct email."
            />
            <button onClick={handleDelete}>OK</button>
            <button onClick={openEmailInput}>CLOSE</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Review;
