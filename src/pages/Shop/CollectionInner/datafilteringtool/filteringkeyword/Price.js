import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function Price(props) {
  const { priceValue, setPriceValue } = props;
  //const [priceValue, setPriceValue] = useState([9, 106]);
  console.log('test', priceValue);
  console.log('test', setPriceValue);
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
        <div id="bottom_line_box" className="margin_right"></div>
      </div>
    </div>
  );
}
