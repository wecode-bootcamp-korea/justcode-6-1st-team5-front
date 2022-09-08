import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.scss';
import Modal from 'react-modal';
import axios from 'axios';

function ItemBox({ setItemData, cartId, name, img, price, num }) {
  function plus() {
    axios({
      method: 'put',
      url: 'http://localhost:8000/cart/',
      data: {
        token: localStorage.getItem('token'),
        cart_id: cartId,
        num: num + 1,
      },
    }).then(res => {
      setItemData(res.data[0]);
    });
  }

  function minus() {
    axios({
      method: 'put',
      url: 'http://localhost:8000/cart/',
      data: {
        token: localStorage.getItem('token'),
        cart_id: cartId,
        num: num - 1,
      },
    }).then(res => {
      if (res.data.length === 0)
        setItemData({
          cart_id: [],
          product_name: [],
          product_price: [],
          num: [],
          product_photos: [],
          product_prices: [],
        });
      else setItemData(res.data[0]);
    });
  }

  function remove() {
    axios({
      method: 'delete',
      url: 'http://localhost:8000/cart',
      data: {
        token: localStorage.getItem('token'),
        cart_id: cartId,
      },
    }).then(res => {
      if (res.data.length === 0)
        setItemData({
          cart_id: [],
          product_name: [],
          product_price: [],
          num: [],
          product_photos: [],
          product_prices: [],
        });
      else setItemData(res.data[0]);
    });
  }

  return (
    <div className="item_box">
      <img src={img} alt="item" className="pic" />
      <div className="text_box">
        <div className="title">{name}</div>
        <div className="price">$ {price.toLocaleString()}</div>
        <div className="wrapper">
          <img
            src="/image/add.png"
            alt="add"
            className="add"
            onClick={() => {
              plus();
            }}
          />
          <p className="quantity">{num}</p>
          <img
            src="/image/minus.png"
            alt="minus"
            className="minus"
            onClick={() => {
              minus();
            }}
          />
          <div
            className="remove"
            onClick={() => {
              remove();
            }}
          >
            Remove
          </div>
        </div>
      </div>
    </div>
  );
}

function Cart({ setIsCartClicked, setScrollPosition }) {
  const navigate = useNavigate();
  const [itemData, setItemData] = useState({
    cart_id: [],
    product_name: [],
    product_price: [],
    num: [],
    product_photos: [],
    product_prices: [],
  });

  let price = 0;

  itemData.product_price.map((el, i) => (price += el * itemData.num[i]));

  const moveAndScrollToTop = url => {
    navigate(url);
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      axios({
        method: 'get',
        url: `http://localhost:8000/cart/${localStorage.getItem('token')}`,
      }).then(res => {
        if (res.data[0].num.length !== 0) {
          setItemData(res.data[0]);
        }
      });
    }
  }, []);

  function button() {
    if (localStorage.getItem('token') !== null)
      return itemData.num.length !== 0 ? (
        <div
          className="buy_btn flex_center"
          onClick={() => {
            setIsCartClicked(false);
            moveAndScrollToTop('/cart');
          }}
        >
          REVIEW CART
        </div>
      ) : (
        <div
          className="buy_btn flex_center"
          onClick={() => {
            setIsCartClicked(false);
            moveAndScrollToTop('/shop');
          }}
        >
          SHOP
        </div>
      );
    else
      return (
        <div
          className="buy_btn flex_center"
          onClick={() => {
            setIsCartClicked(false);
            moveAndScrollToTop('/login');
          }}
        >
          LOGIN
        </div>
      );
  }

  return (
    <Modal
      isOpen={true}
      onRequestClose={() => {
        setIsCartClicked(false);
        setScrollPosition(window.scrollY);
      }}
      ariaHideApp={false}
      className="modal_cart"
    >
      {localStorage.getItem('token') !== null ? (
        itemData.num.length !== 0 ? (
          itemData.product_name.map((el, i) => {
            return (
              <ItemBox
                cartId={itemData.cart_id[i]}
                key={itemData.product_id[i]}
                name={itemData.product_name[i]}
                img={itemData.product_photos[i]}
                price={itemData.product_price[i]}
                num={itemData.num[i]}
                setItemData={setItemData}
              />
            );
          })
        ) : (
          <div className="not_login flex_center">
            <div className="login_plz">Cart is empty</div>
          </div>
        )
      ) : (
        <div className="not_login flex_center">
          <div className="login_plz">Only ROECY' members can order</div>
        </div>
      )}

      <div className="modal_bottom flex_center">
        <p className="total_price">
          {localStorage.getItem('token') !== null
            ? `Total : $ ${price.toLocaleString()}`
            : ''}
        </p>
        {button()}
      </div>
    </Modal>
  );
}

export { Cart, ItemBox };
