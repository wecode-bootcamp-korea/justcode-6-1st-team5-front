import React from 'react';

import './PhotoList.scss';

const PhotoList = ({ photo }) => {
  console.log(photo);
  return (
    <>
      {/* {photo.map((el, i) => {
        return <img key={i} src={el} />;
      })} */}
      <img src={photo} />
      <img src={photo} />
      <img src={photo} />
      <img src={photo} />
      <img src={photo} />
      <img src={photo} />
      <img src={photo} />
      {/* <img src="image/초코 2.png" />
      <img src="image/초코 3.png" />
      <img src="image/초코 4.png" />
      <img src="image/초코 5.png" />
      <img src="image/초코 6.png" />
      <img src="image/초코 7.png" /> */}
    </>
  );
};

export default PhotoList;
