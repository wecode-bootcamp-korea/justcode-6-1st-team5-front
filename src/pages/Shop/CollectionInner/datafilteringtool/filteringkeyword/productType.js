import './filteringkeyword.scss';
import { useNavigate } from 'react-router-dom';
function ProductType(props) {
  const { mission1, mission2, mission1state, mission2state } = props;
  const navi = useNavigate();

  const detailViewer = () => {
    mission1(p => !p);
    mission2(false);
    mission1state ? navi('/shop') : navi('onoff=on');
  };

  const detailViewer2 = () => {
    mission2(p => !p);
    mission1(false);
    mission2state ? navi('/shop') : navi('onoff=off');
  };

  return (
    <div id="product_filtering_category">
      <div className="button_style">
        <button
          className="inner_keyword_button"
          onClick={() => {
            detailViewer();
          }}
        >
          In Store Purchase
          <div className="margin_right">(갯수)</div>
        </button>
      </div>
      <div className="button_style">
        <button
          className="inner_keyword_button"
          onClick={() => {
            detailViewer2();
          }}
        >
          <div className="margin_right">Ecommerce</div>
          <div className="margin_right">(갯수)</div>
        </button>
      </div>
    </div>
  );
}

export default ProductType;
