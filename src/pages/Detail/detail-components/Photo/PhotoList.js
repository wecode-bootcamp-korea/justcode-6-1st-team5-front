import React from 'react';

import './PhotoList.scss';

const PhotoList = ({ photo }) => {
  console.log(photo);
  return (
    <>
      {/* {photo.map((el, i) => {
        return <img key={i} src={el} />;
      })} */}
      <img src="image/초코 1.png" />
      <img src={photo} />
      <img src={photo} />
      <img src={photo} />
      <img src={photo} />
      <img src={photo} />
      <img src={photo} />
      <img src={photo} />
    </>
  );
};

export default PhotoList;
