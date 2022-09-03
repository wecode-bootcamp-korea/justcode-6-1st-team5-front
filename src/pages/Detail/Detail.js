import React, { useEffect, useState, useRef } from 'react';

import PhotoList from './detail-components/Photo/PhotoList';
import Description from './detail-components/Description/Description';
import Review from './detail-components/Reiview/Review';

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

  const { photo, ...description } = product;

  const scrollToReview = () => {
    reviewRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const reviewRef = useRef(null);

  return (
    <>
      <section className="detail_container">
        <div className="photo">
          <div className="small-photo">
            <PhotoList photo={photo} />
          </div>
          <div className="big-photo">
            <PhotoList photo={photo} />
          </div>
        </div>
        <div>
          <Description
            description={description}
            scrollFunction={scrollToReview}
          />
        </div>
      </section>
      <Review props={photo} ref={reviewRef} />
    </>
  );
};

export default Detail;
