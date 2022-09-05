import './filteringkeyword.scss';

function ProductType(props) {
  const { mission } = props;

  const detailViewer = () => {
    mission(p => !p);
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
            detailViewer();
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
