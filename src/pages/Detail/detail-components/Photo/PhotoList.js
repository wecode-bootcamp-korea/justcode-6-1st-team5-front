import React from 'react';

import './PhotoList.scss';

const PhotoList = ({ photos }) => {
  photos !== undefined && console.log(photos[0]);

  return (
    <>
      {photos !== undefined &&
        photos.map((photo, i) => {
          return <img key={i} src={photo} alt={`choco${i}`} />;
        })}
    </>
  );
};

export default PhotoList;
