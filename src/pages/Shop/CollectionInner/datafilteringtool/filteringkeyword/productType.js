import './filteringkeyword.scss';

function ProductType(props) {
  const { mission1, mission2 } = props;

  const detailViewer = () => {
    mission1(p => !p);
    mission2(false);
  };

  const detailViewer2 = () => {
    mission2(p => !p);
    mission1(false);
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
