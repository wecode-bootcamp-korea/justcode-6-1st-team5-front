import { useEffect, useState } from 'react';

function Price() {
  const [offLineButton, setOffLineButton] = useState(false);
  const [goodsstate, setgoodsstate] = useState();

  useEffect(() => {
    fetch('mockdata/product.json')
      .then(res => res.json())
      .then(data => {
        setgoodsstate(data.product);
      });
  }, []);

  useEffect(() => {
    offLineButton && goodsstate.filter(d => d.salesmethod === 'offline');
  }, [setOffLineButton]);

  return (
    <>
      <div className="button_style">
        <input className="pricebox" placeholder="9" />
        <span id="minus">-</span>
        <input className="pricebox" placeholder="106" />
      </div>
      <div id="pricenavibase">
        <div id="priceline"></div> <div id="pricenavigator"></div>
        <div id="bottomlinebox" className="margin_right"></div>
      </div>
    </>
  );
}
export default Price;
