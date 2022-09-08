import React from 'react';

import './PhotoList.scss';

const PhotoList = ({ photos }) => {
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
