import React from 'react';

import './Review.scss';

const Review = () => {
  return (
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
        <form className="review_form">
          <div className="contact-box space">
            <div className="name">
              <label htmlFor="name">Name</label>
              <input id="name" placeholder="Enter your name" />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input id="email" placeholder="john.smith@example.com" />
            </div>
          </div>
          <div className="rating_box space">
            <label htmlFor="rating">Raiting</label>
            <p>☆☆☆☆☆</p>
          </div>
          <div className="review_title_box space">
            <label htmlFor="review_title">Title of Review</label>
            <input
              id="review_title"
              type="text"
              placeholder="Give your review a title"
            />
          </div>
          <div className="review_content_box space">
            <label htmlFor="review_content">
              How was your overall experience?
            </label>
            <textarea id="review_content" type="text"></textarea>
          </div>
          <div className="submit_btn_box space">
            <button>Submit</button>
          </div>
        </form>
        <div className="view_review">
          <div className="rating">★★★★★</div>
          <p>Be the first to review this item</p>
        </div>
      </div>
    </section>
  );
};

export default Review;
