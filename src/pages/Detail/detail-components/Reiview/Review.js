import React from 'react';
import ReviewForm from './ReviewForm';

import './Review.scss';
import './ReviewForm.scss';

const Review = () => {
  return (
    <>
      <section className="review_container">
        <div className="star_rating">☆☆☆☆☆</div>
        <div className="review_wrapper">
          <div className="write_btn">
            <span>
              <img src="image/edit.png" />
              <p>Write a Review</p>
            </span>
          </div>
          <div className="tab-review">
            <div>
              <span>Reviews</span>
              <span className="num">0</span>
            </div>
          </div>
          <ReviewForm />
          <div className="view_review">
            <div className="rating">★★★★★</div>
            <p>Be the first to review this item</p>
          </div>
        </div>
        <div className="bubble"></div>
      </section>
    </>
  );
};

export default Review;
