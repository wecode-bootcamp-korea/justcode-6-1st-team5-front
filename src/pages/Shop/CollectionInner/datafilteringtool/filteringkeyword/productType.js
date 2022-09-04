import './filteringkeyword.scss';

function ProductType(props) {
  const { createfilterviewer, setProductFilterViewer } = props;

  const detailviewer = () => {
    createfilterviewer(true);
    setProductFilterViewer(p => !p);
  };

  return (
    <div id="product_filtering_category">
      <div className="button_style">
        <button
          className="inner_keyword_button"
          onClick={() => {
            detailviewer();
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
            detailviewer();
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
