// import { useEffect, useState } from 'react';

function Price() {
  // const productfilterview = () => {
  //   createfilterviewer(p => !p);
  // };
  // const detailviewer = () => {
  //   const filterinfor = {
  //     title: 'Product Type',
  //     value: ' In Store Purchase',
  //   };
  //   createfilterarr([...filterarrstate, filterinfor]);
  // };

  return (
    <div id="price_filtering_category">
      <div className="button_style">
        <input className="pricebox" placeholder="9" />
        <span id="minus">-</span>
        <input className="pricebox" placeholder="106" />
      </div>
      <div id="pricenavibase">
        <div id="priceline"></div> <div id="pricenavigator"></div>
        <div id="bottomlinebox" className="margin_right"></div>
      </div>
    </div>
  );
}
export default Price;
