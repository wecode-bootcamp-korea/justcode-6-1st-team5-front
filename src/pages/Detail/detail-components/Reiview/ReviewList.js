import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Review from './Review';
import '../Reiview/ReviewList.scss';

const ReviewList = ({ render, setLength }) => {
  const [reviewData, setReviewData] = useState([]);

  const params = useParams();
  const productId = Number(params.id);

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
      });
  }, [render, productId]);

  return (
    <div className="reveiw_list_container">
      {reviewData.map(review => {
        return (
          <Review
            key={review.id}
            review={review}
            setReviewData={setReviewData}
          />
        );
      })}
    </div>
  );
};

export default ReviewList;
