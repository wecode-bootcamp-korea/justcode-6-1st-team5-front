import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CartItemBox.scss';

export default function CartItemBox({
  setItemData,
  cartId,
  name,
  img,
  price,
  num,
  productId,
  setIsCartClicked,
}) {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

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
          product_id: [],
          product_name: [],
          product_price: [],
          num: [],
          product_photos: [],
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
          product_id: [],
          product_name: [],
          product_price: [],
          num: [],
          product_photos: [],
        });
      else setItemData(res.data[0]);
    });
  }

  return (
    <div className="item_box">
      <img src={img} alt="item" className="pic" />
      <div className="text_box">
        <div
          className="title"
          onClick={() => {
            navigate(`/product/detail/${productId}`);
            scrollToTop();
            setIsCartClicked(false);
          }}
        >
          {name}
        </div>
        <div className="price">$ {price.toLocaleString()}</div>
        <div className="wrapper">
          <img
            src="/image/minus.png"
            alt="minus"
            className="minus"
            onClick={() => {
              minus();
            }}
          />
          <p className="quantity">{num}</p>
          <img
            src="/image/add.png"
            alt="add"
            className="add"
            onClick={() => {
              plus();
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
