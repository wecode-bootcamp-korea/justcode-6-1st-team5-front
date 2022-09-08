import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Price(props) {
  const { priceValue, setPriceValue, mission } = props;
  //const [priceValue, setPriceValue] = useState([9, 106]);
  //useEffect로 pricevalue 의존성 배열로 만들어 해결
  const navi = useNavigate();
  const location = useLocation();
  const query = location.search;

  function onFetchClick() {
    navi(`?min=${priceValue[0]}&max=${priceValue[1]}`);
  }

  useEffect(() => {
    if (priceValue[0] !== 9) {
      mission(true);
    } else if (priceValue[1] !== 106) {
      mission(true);
    }
  }, [priceValue]);

  return (
    <div id="price_filtering_category">
      <div className="button_style">
        <input className="price_box" value={'$' + '' + priceValue[0]} />
        <span id="minus">-</span>
        <input className="price_box" value={'$' + '' + priceValue[1]} />
      </div>
      <div id="price_navi_base">
        <div id="price_line">
          <Slider
            range
            allowCross={false}
            min={9}
            max={106}
            value={priceValue}
            onChange={e => setPriceValue(e)}
          />
        </div>
        <button onClick={onFetchClick}>search</button>
        <div id="bottom_line_box" className="margin_right"></div>
      </div>
    </div>
  );
}
