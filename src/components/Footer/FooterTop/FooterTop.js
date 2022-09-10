import './FooterTop.scss';

function FooterTop() {
  return (
    <div className="top_container flex_center">
      <div className="top_box flex_center">
        <img src="/image/truck.png" alt="truck" className="icon" />
        <div className="text">
          WE OFFER FREE SHIPPING ON <br />
          ORDERS OVER $ 99 USD
        </div>
      </div>
      <div className="top_box flex_center">
        <img src="/image/snow.png" alt="snowflake" className="icon" />
        <div className="text">
          THE CHOCOLATES WILL ARRIVE FROZEN <br />
          IN A BOX CONTAINING DRY ICE
        </div>
      </div>
      <div className="top_box flex_center">
        <img src="/image/shop.png" alt="shop" className="icon" />
        <div className="text">
          WE OFFER SAME-DAY DELIVERY <br />
          AND PICK-UP SERVICES IN <br />
          SOME OF OUR BOUTIQUES
        </div>
      </div>
      <div className="top_box flex_center">
        <img src="/image/security.png" alt="security" className="icon" />
        <div className="text">
          100% SAFE & SECURE CHECKOUT <br />
          WORRY-FREE-PURCHASES
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
