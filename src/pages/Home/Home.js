import React from 'react';
import './Home.scss';
import Part from './Part/Part';
import Trending from './Trending/Trending';

function Home() {
  return (
    <div className="home_container">
      <div className="home_main">
        <div className="text_container">
          <div className="text_1">당일 매장 픽업</div>
          <div className="text_2">딜리셔스 유니크</div>
          <div className="text_btn flex_center">구매하기</div>
        </div>
      </div>

      <Part
        type="left"
        pic="./Images/home_part_1.jpg"
        text1="퓨어 초콜릿"
        text2={`그 "순수함"에 중독되다`}
      />

      <Part
        type="right"
        pic="./Images/home_part_2.jpg"
        text1="선물 세트"
        text2="럭셔리한 경험을 선물하고 싶다면"
      />

      <Trending />

      <video
        src="./Images/chocolate.mp4"
        autoPlay
        loop
        muted
        className="video"
      ></video>
    </div>
  );
}

export default Home;
