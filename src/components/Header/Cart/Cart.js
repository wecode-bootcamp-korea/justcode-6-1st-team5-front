import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.scss';
import Modal from 'react-modal';
import axios from 'axios';
import CartItemBox from '../../../pages/CartDetail/CartItemBox/CartItemBox';

function Cart({ setIsCartClicked, setScrollPosition }) {
  const navigate = useNavigate();
  const [itemData, setItemData] = useState({
    cart_id: [],
    product_id: [],
    product_name: [],
    product_price: [],
    num: [],
    product_photos: [],
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
            moveAndScrollToTop('/shop/1');
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
              <CartItemBox
                cartId={itemData.cart_id[i]}
                productId={itemData.product_id[i]}
                key={itemData.product_id[i]}
                name={itemData.product_name[i]}
                img={itemData.product_photos[i]}
                price={itemData.product_price[i]}
                num={itemData.num[i]}
                setItemData={setItemData}
                setIsCartClicked={setIsCartClicked}
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

export default Cart;
