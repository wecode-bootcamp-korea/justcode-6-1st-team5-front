import './CartDetail.scss';
import DaumPostcode from 'react-daum-postcode';
import { ItemBox } from '../../components/Header/Cart/Cart';
import { useState, useEffect } from 'react';
import PopupPostCode from '../../components/Address/PopupPostCode';
import Modal from 'react-modal';

export default function CartDetail() {
  const [itemData, setItemData] = useState({
    product_name: [],
    product_price: [],
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [mainAddress, setMainAddress] = useState('Main Address');
  const [detailedAddress, setDetailedAddress] = useState('');

  const openPostCode = () => {
    setIsPopupOpen(true);
  };

  const closePostCode = () => {
    setIsPopupOpen(false);
  };

  let price = 0;
  itemData.product_price.map(
    (el, i) => (price += Number(el * itemData.num[i]))
  );
  const toShipping = 999 - price;

  useEffect(() => {
    fetch('/mockdata/cart.json')
      .then(res => res.json())
      .then(data => {
        data.map(el => {
          if (el.user_id === 1) {
            setItemData(el);
          }
        });
      });
  }, []);

  return (
    <div className="cart_detail flex_center">
      <div className="cart_title">CART</div>
      <div className="cart_subtitle">
        {toShipping <= 0
          ? 'You are eligible for free shipping!'
          : `Spend $ ${toShipping.toLocaleString()} more and get free shipping!`}
      </div>
      <div className="cart_container">
        <div className="items_box">
          {itemData.product_name.map((el, i) => {
            return (
              <ItemBox
                itemData={itemData}
                key={itemData.product_id[i]}
                name={itemData.product_name[i]}
                img={itemData.product_photos[i]}
                price={itemData.product_price[i]}
                num={itemData.num[i]}
              />
            );
          })}
        </div>
        <div className="cart_bottom flex_center">
          <div className="order_note">
            <p className="order_title">Add Order Note</p>
            <textarea
              className="text_area"
              cols="30"
              rows="10"
              placeholder="How Can We Help You?"
            ></textarea>
          </div>
          <div className="cart_checkout flex_center">
            <div className="cart_checkout_title">
              TOTAL : ${' '}
              {price.toLocaleString > 999
                ? price.toLocaleString()
                : Number((price + 3).toLocaleString())}
            </div>
            <div className="cart_checkout_subtitle">
              Shipping & taxes calculated at checkout
            </div>
            <div className="checkout_btn flex_center">CHECKOUT</div>
          </div>
        </div>

        <div className="cart_address_container flex_center">
          <div className="title">Shipping Destination</div>
          <div className="cart_address">
            <div className="input_address flex_center">
              <div className="main_address flex_center">{mainAddress}</div>
              <input
                type="text"
                className="detailed_address flex_center"
                placeholder="Detailed Address"
                onChange={e => {
                  setDetailedAddress(e.target.value);
                }}
              />
              <button
                type="button"
                onClick={openPostCode}
                className="address_btn"
              >
                FIND ADDRESS
              </button>
              <div id="popupDom">
                {isPopupOpen && (
                  <Modal
                    isOpen={true}
                    onRequestClose={() => setIsPopupOpen(false)}
                    className="addressModal"
                  >
                    <PopupPostCode
                      onClose={closePostCode}
                      setMainAddress={setMainAddress}
                    />
                  </Modal>
                )}
              </div>
            </div>
            <div className="address_text">
              No Saturday and Sunday delivery.
              <br /> We only ship domestically across the Korean Peninsula
              (include Jeju-do, Ulleung-do, Dok-do etc).
              <br />
              Shipping is not available in the following states and/or
              territories:
              <span className="bold"> All over the world except Korea</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
