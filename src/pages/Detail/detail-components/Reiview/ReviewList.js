import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../Reiview/ReviewList.scss';

const ReviewList = ({ render, setLength }) => {
  const [reviewData, setReviewData] = useState([]);

  const params = useParams();
  const productId = Number(params.id);
  console.log(productId);

  useEffect(() => {
    const body = { product_id: productId };

    fetch('http://localhost:8000/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(json => {
        setReviewData(json);
        setLength(json.length);
        console.log(json.length);
      });
  }, [render]);

  function starRate(rating) {
    if (rating === 5) return '★★★★★';
    if (rating === 4) return '★★★★☆';
    if (rating === 3) return '★★★☆☆';
    if (rating === 2) return '★★☆☆☆';
    if (rating === 1) return '★☆☆☆☆';
    else return '☆☆☆☆☆';
  }

  return (
    <div className="reveiw_list_container">
      {/* <button onClick={onClick}>리뷰 보기</button> */}
      {reviewData.map(review => {
        const { id, name, rating, title, content, created_at } = review;
        return (
          <>
            <div className="review_box">
              <div className="writer_info">
                <span className="star_rate">{starRate(Number(rating))}</span>
                <span className="writer_name">{name}</span>
                <span className="created_at">{created_at}</span>
              </div>
              <div className="review_content">
                <p className="title">{title}</p>
                <p className="content">{content}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ReviewList;
