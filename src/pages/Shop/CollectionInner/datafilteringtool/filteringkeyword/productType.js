import { useEffect, useState } from 'react';
import './filteringkeyword.css';
function ProductType(props) {
  const [offLineButton, setOffLineButton] = useState(false);

  useEffect(() => {
    offLineButton && props.goodsstate.filter(d => d.salesmethod === 'offline');
    console.log(offLineButton);
  }, [setOffLineButton]);

  return (
    <>
      <div className="button_style">
        <button
          id="inner_keyword_button"
          onClick={() => setOffLineButton(p => !p)}
        >
          In Store Purchase
          <div className="margin_right">(갯수)</div>
        </button>
      </div>

      <div className="button_style">
        <div className="margin_right">Ecommerce</div>
        <div className="margin_right">(갯수)</div>
      </div>
    </>
  );
}
export default ProductType;
