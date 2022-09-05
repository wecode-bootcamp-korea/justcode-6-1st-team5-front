import React, { useEffect, useState, useRef } from 'react';

import PhotoList from './detail-components/Photo/PhotoList';
import Description from './detail-components/Description/Description';
import Review from './detail-components/Reiview/Review';
import Trending from '../Home/Trending/Trending';
import Carousel from '../Home/Carousel/Carousel';

import './Detail.scss';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/mockDataEng.json')
      .then(res => res.json())
      .then(json => {
        setProduct(json);
      });
  }, []);

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
          <Description description={product} scrollFunction={scrollToReview} />
        </div>
      </section>
      <Review rating={rating} ref={reviewRef} />
      <Trending />
    </>
  );
};

export default Detail;
