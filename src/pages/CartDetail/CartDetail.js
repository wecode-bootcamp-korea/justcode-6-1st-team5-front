import './CartDetail.scss';
import { ItemBox } from '../../components/Header/Cart/Cart';
import { useState, useEffect } from 'react';

export default function CartDetail() {
  const [itemData, setItemData] = useState({
    product_name: [],
    product_price: [],
  });

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
            console.log(el);
          }
        });
      });
  }, []);

  return (
    <div className="cart_detail flex_center">
      <div className="cart_title">CART</div>
      <div className="cart_subtitle">
        {toShipping > 0 &&
          `Spend $ ${toShipping.toLocaleString()} more and get free shipping!`}
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
              {price.toLocaleString > 990
                ? price.toLocaleString()
                : Number(price.toLocaleString())}
            </div>
            <div className="cart_checkout_subtitle">
              Shipping & taxes not calculated at checkout
            </div>
            <div className="checkout_btn flex_center">CHECKOUT</div>
          </div>
        </div>
      </div>
    </div>
  );
}
