import './FooterTop.scss';

function FooterTop() {
  return (
    <div className="top_container flex_center">
      <div className="top_box flex_center">
        <img src="./Images/truck.png" alt="truck" className="icon" />
        <p className="text">
          WE OFFER FREE SHIPPING ON <br />
          ORDERS OVER $ 999 USD
        </p>
      </div>
      <div className="top_box flex_center">
        <img src="./Images/snow.png" alt="snowflake" className="icon" />
        <p className="text">
          THE CHOCOLATES WILL ARRIVE FROZEN <br />
          IN A BOX CONTAINING DRY ICE
        </p>
      </div>
      <div className="top_box flex_center">
        <img src="./Images/shop.png" alt="snowflake" className="icon" />
        <p className="text">
          WE OFFER SAME-DAY DELIVERY <br />
          AND PICK-UP SERVICES IN <br />
          SOME OF OUR BOUTIQUES
        </p>
      </div>
      <div className="top_box flex_center">
        <img src="./Images/security.png" alt="snowflake" className="icon" />
        <p className="text">
          100% SAFE & SECURE CHECKOUT <br />
          WORRY-FREE-PURCHASES
        </p>
      </div>
    </div>
  );
}

export default FooterTop;
