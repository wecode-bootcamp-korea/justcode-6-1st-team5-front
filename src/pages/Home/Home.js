import './Home.scss';
import Part from './Part/Part';
import Trending from './Trending/Trending';
import Description from '../Detail/detail-components/Description/Description';

function Home() {
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
        pic="/Images/home_part_1.jpg"
        text1="PURE CHOCOLATE"
        text2={`WE ARE "PURELY" ADDICTED`}
      />

      <Part
        type="right"
        pic="/Images/home_part_2.jpg"
        text1="GIFT SET"
        text2="IF YOU WANT TO GIVE LUXURY AS A GIFT"
      />

      <Trending />

      <video
        src="/Images/chocolate.mp4"
        autoPlay
        loop
        muted
        className="video"
      ></video>

      <Description />
    </div>
  );
}

export default Home;
