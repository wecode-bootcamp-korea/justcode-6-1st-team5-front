import './productlist.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ProductList(props) {
  const { goodsdata, id } = props;
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const rating = goodsdata.rating;

  let starnumber;
  if (rating === '1') {
    starnumber = <div className="star_img">★☆☆☆☆</div>;
  } else if (rating === '2') {
    starnumber = <div className="star_img">★★☆☆☆</div>;
  } else if (rating === '3') {
    starnumber = <div className="star_img">★★★☆☆</div>;
  } else if (rating === '4') {
    starnumber = <div className="star_img">★★★★☆</div>;
  } else if (rating === '5') {
    starnumber = <div className="star_img">★★★★★</div>;
  }

  const basic = {
    width: '18vw',
    height: '18vw',
    backgroundSize: 'cover',
    backgroundImage: 'url(' + goodsdata.photos + ')',
  };

  const hovered = {
    width: '18vw',
    height: '18vw',
    backgroundSize: '120%',
    backgroundPosition: '50% 50%',
    backgroundImage:
      'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(' +
      goodsdata.photos +
      ')',
  };

  const goDetail = () => {
    navigate(`/product/detail/${id}`);
  };

  return (
    <div className="product_wrapper">
      <div className="product">
        <div
          id="goods_img_wrapper"
          onClick={goDetail}
          onMouseOver={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          <div
            id="goods_img"
            style={hover ? hovered : basic}
            className={hover && 'hovered'}
          >
            {hover && <div className="see_more">SEE MORE</div>}
          </div>
        </div>
        <div className="product_name" onClick={goDetail}>
          {goodsdata.name}
        </div>
        <div className="star">{starnumber}</div>
        <div id="product_price">${goodsdata.price}</div>
      </div>
    </div>
  );
}

export default ProductList;
