// import { useEffect, useState } from 'react';

function Price() {
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
