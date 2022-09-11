import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

import PhotoList from './detail-components/Photo/PhotoList';
import Description from './detail-components/Description/Description';
import ReviewContainer from './detail-components/Reiview/ReviewContainer';
import Trending from '../Home/Trending/Trending';

import './Detail.scss';

const Detail = ({ setIsCartClicked }) => {
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/product/detail/${productId}`)
      .then(res => res.json())
      .then(json => {
        setProduct(json);
      });
  }, [productId]);

  const { photos, rating } = product;

  const scrollToReview = () => {
    reviewRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const reviewRef = useRef(null);

  return (
    <>
      <section className="detail_container">
        <div className="photo">
          <div className="small-photo">
            <PhotoList photos={photos} />
          </div>
          <div className="big-photo">
            <PhotoList photos={photos} />
          </div>
        </div>
        <div>
          <Description
            description={product}
            scrollFunction={scrollToReview}
            setIsCartClicked={setIsCartClicked}
          />
        </div>
      </section>
      <ReviewContainer rating={rating} ref={reviewRef} />
      <Trending />
    </>
  );
};

export default Detail;
