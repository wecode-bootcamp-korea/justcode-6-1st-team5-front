import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Xbar.scss';

export default function Xbar({ data }) {
  console.log('slider : ', Slider);
  console.log(data);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="items_container flex_center">
      <Slider {...settings}>{data}</Slider>
    </div>
  );
}
