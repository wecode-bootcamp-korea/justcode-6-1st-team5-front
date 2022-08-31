import React, { useEffect } from 'react';

import PhotoList from './detail-components/Photo/PhotoList';
import Description from './detail-components/Description/Description';
import Review from './detail-components/Reiview/Review';

import './Detail.scss';

const Detail = () => {
  useEffect(() => {
    fetch(
      'https://wecode-bootcamp.slack.com/archives/C040KJR4FNU/p1661826928500109'
    )
      .then(res => res.json())
      .then(json => console.log(json));
  }, []);
  return (
    <>
      <section className="detail_container">
        <div className="photo">
          <div className="small-photo">
            <PhotoList />
          </div>
          <div className="big-photo">
            <PhotoList />
          </div>
        </div>
        <div>
          <Description />
        </div>
      </section>
      <Review />
    </>
  );
};

export default Detail;
