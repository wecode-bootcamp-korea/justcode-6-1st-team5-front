import './Home.scss';
import { useState, useEffect } from 'react';
import Part from './Part/Part';
import Trending from './Trending/Trending';
import Description from '../Detail/detail-components/Description/Description';

function Home({ setIsCartClicked }) {
  const [product, setProduct] = useState({
    photos: ['/image/home_part_1.jpg'],
    name: "ROECY' SIGNATURE CHCOLATE",
    price: 100.99,
  });
  useEffect(() => {
    fetch('http://localhost:8000/product/detail/39')
      .then(res => res.json())
      .then(json => {
        setProduct(json);
      });
  }, []);

  return (
    <div className="home_container">
      <div className="home_main">
        <div className="text_container">
          <div className="text_1">SAME-DAY BOUTIQUE PICK-UP</div>
          <div className="text_2">DELICIOUSLY UNIQUE</div>
          <div className="text_btn flex_center">SHOP NOW</div>
        </div>
      </div>

      <Part
        type="left"
        pic="/image/home_part_1.jpg"
        text1="PURE CHOCOLATE"
        text2={`WE ARE "PURELY" ADDICTED`}
      />

      <Part
        type="right"
        pic="/image/home_part_2.jpg"
        text1="GIFT SET"
        text2="IF YOU WANT TO GIVE LUXURY AS A GIFT"
      />

      <Trending />

      <video
        src="/image/chocolate.mp4"
        autoPlay
        loop
        muted
        className="video"
      ></video>
      <div className="description_container">
        <img
          src={product.photos[0]}
          alt="product"
          className="description_img"
        />
        <Description
          description={product}
          setIsCartClicked={setIsCartClicked}
          rate="no"
        />
      </div>
    </div>
  );
}

export default Home;
