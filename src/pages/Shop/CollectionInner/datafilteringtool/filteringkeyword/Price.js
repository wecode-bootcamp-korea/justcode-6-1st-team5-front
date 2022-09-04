import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function Price() {
  return (
    <div id="price_filtering_category">
      <div className="button_style">
        <input className="pricebox" placeholder="9" />
        <span id="minus">-</span>
        <input className="pricebox" placeholder="106" />
      </div>
      <div id="pricenavibase">
        <div id="priceline">
          <Slider range />
        </div>
        <div id="bottomlinebox" className="margin_right"></div>
      </div>
    </div>
  );
}
