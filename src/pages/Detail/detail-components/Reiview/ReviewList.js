import React, { useEffect } from 'react';

const ReviewList = () => {
  const onClick = () => {
    const body = { product_id: 1 };

    fetch('http://localhost:10010/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then(res => res.json())
      .then(json => {
        console.log(json);
      });
  };

  return <button onClick={onClick}>리뷰 보기</button>;
};

export default ReviewList;
