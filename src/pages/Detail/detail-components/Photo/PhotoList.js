import React from 'react';

import './PhotoList.scss';

const PhotoList = ({ photo }) => {
  console.log(photo);
  return (
    <>
      {photo !== undefined &&
        photo.map((el, i) => {
          return <img key={i} src={el} alt={`choco${i}`} />;
        })}
    </>
  );
};

export default PhotoList;
