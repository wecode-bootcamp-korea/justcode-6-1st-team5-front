import './ItemContainer.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ItemContainer({ id, img, name, rate, price }) {
  const [isItemHovered, setIsItemHovered] = useState();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  function starRate() {
    if (rate == 5) return '★★★★★';
    if (rate == 4) return '★★★★☆';
    if (rate == 3) return '★★★☆☆';
    if (rate == 2) return '★★☆☆☆';
    if (rate == 1) return '★☆☆☆☆';
    else return '☆☆☆☆☆';
  }

  const basicStyle = {
    width: '18vw',
    height: '18vw',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + img + ')',
  };

  const hoveredStyle = {
    width: '18vw',
    height: '18vw',
    backgroundSize: '120%',
    backgroundPosition: '50% 50%',
    backgroundImage:
      'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(' +
      img +
      ')',
  };

  return (
    <div className="items_container">
      <div
        className="item_container flex_center"
        onClick={() => {
          navigate(`/product/detail/${id}`);
          scrollToTop();
        }}
        onMouseOver={() => {
          setIsItemHovered(true);
        }}
        onMouseLeave={() => {
          setIsItemHovered(false);
        }}
      >
        <div className="img_container">
          <div
            style={isItemHovered ? hoveredStyle : basicStyle}
            className={
              isItemHovered ? 'hovered_img flex_center' : 'img flex_center'
            }
          >
            {isItemHovered && <div className="in_img">SEE MORE</div>}
          </div>
        </div>
        <div className="name flex_center">{name}</div>
        <div className="rate">{starRate()}</div>
        <div className="price">$ {price.toLocaleString()}</div>
      </div>
    </div>
  );
}
