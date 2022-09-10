import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import '../Reiview/ReviewList.scss';

const ReviewList = ({ render, setLength }) => {
  const [reviewData, setReviewData] = useState([]);
  // const [visible, setVisible] = useState(false);

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

  const handleDelete = () => {
    // setVisible(current => !current);
    // const token = localStorage.getItem(LOGIN_TOKEN);
    // if (!token) {
    //   alert('로그인 후 이용해주세요');
    //   return;
    // }
    // if (userInfo !== user) {
    //   alert('작성자 정보와 다릅니다.');
    //   return;
    // }
    // fetch(`http://localhost:8000/comment/${id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     token: token,
    //     'Content-type': 'application/json',
    //   },
    // })
    //   .then(res => res.status)
    //   .then(data => {
    //     loader();
    //   });
  };

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
      {reviewData.map(review => {
        const { id, name, rating, title, content, date } = review;
        return (
          <>
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
              {/* <div className="delete_btn" onClick={handleDelete}>
                {visible && <input placeholder="email"></input>}
                <img src="/image/trash.png" />
              </div> */}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ReviewList;
