import './CartDetail.scss';
import { ItemBox } from '../../components/Header/Cart/Cart';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Address } from './Address/Address';
import { useNavigate } from 'react-router-dom';

export default function CartDetail() {
  const navigate = useNavigate();
  const [itemData, setItemData] = useState({
    cart_id: [],
    product_id: [],
    product_name: [],
    product_price: [],
    num: [],
    product_photos: [],
  });

  const [mainAddress, setMainAddress] = useState('Main Address');
  const [detailedAddress, setDetailedAddress] = useState('');
  const [orderNote, setOrderNote] = useState('');

  const moveAndScrollToTop = url => {
    navigate(url);
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  function order() {
    axios({
      method: 'post',
      url: 'http://localhost:8000/order',
      data: {
        token: localStorage.getItem('token'),
        message: orderNote,
        address: mainAddress + ' ' + detailedAddress,
      },
    }).then(res => {
      alert('Your order has been successfully received.');
      moveAndScrollToTop('/');
    });
  }

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:8000/cart/${localStorage.getItem('token')}`,
    }).then(res => {
      if (res.data[0].num.length !== 0) {
        setItemData(res.data[0]);
      }
    });
  }, []);

  let price = 0;
  itemData.product_price.map(
    (el, i) => (price += Number(el * itemData.num[i]))
  );
  const toShipping = 99 - price;

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
                cartId={itemData.cart_id[i]}
                productId={itemData.product_id[i]}
                key={itemData.product_id[i]}
                name={itemData.product_name[i]}
                img={itemData.product_photos[i]}
                price={itemData.product_price[i]}
                num={itemData.num[i]}
                setItemData={setItemData}
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
              onChange={e => {
                setOrderNote(e.target.value);
              }}
            />
          </div>
          <div className="cart_checkout flex_center">
            <div className="cart_checkout_title">
              TOTAL : ${' '}
              {price > 99
                ? price.toLocaleString()
                : (price + 3).toLocaleString()}
            </div>
            <div className="cart_checkout_subtitle">
              Shipping & taxes calculated at checkout
            </div>
            <div
              className="checkout_btn flex_center"
              onClick={() => {
                if (itemData.product_name.length === 0)
                  alert('Please add products to the cart.');
                else if (mainAddress === 'Main Address')
                  alert('Please enter an address.');
                else order();
              }}
            >
              CHECKOUT
            </div>
          </div>
        </div>

        <Address
          mainAddress={mainAddress}
          setDetailedAddress={setDetailedAddress}
          setMainAddress={setMainAddress}
        />
      </div>
    </div>
  );
}
