import { useState, useEffect } from 'react';
import './Cart.scss';
import Modal from 'react-modal';

function ItemBox({ name, img, price, num }) {
  return (
    <div className="item_box">
      <img src={img} alt="item" className="pic" />
      <div className="text_box">
        <div className="title">{name}</div>
        <div className="price">₩ {price.toLocaleString()}</div>
        <div className="wrapper">
          <img src="./Images/add.png" alt="add" className="add" />
          <p className="quantity">{num}</p>
          <img src="./Images/minus.png" alt="minus" className="minus" />
          <div className="remove">제거</div>
        </div>
      </div>
    </div>
  );
}

export default function Cart({ setIsCartClicked }) {
  const [itemData, setItemData] = useState({ product_name: [] });

  useEffect(() => {
    fetch('./cart.json')
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
    <Modal
      isOpen={true}
      onRequestClose={() => setIsCartClicked(false)}
      className="modal_cart"
    >
      {itemData.product_name.map((el, i) => {
        return (
          <ItemBox
            key={itemData.product_id[i]}
            name={itemData.product_name[i]}
            img={itemData.product_photos[i]}
            price={itemData.product_price[i]}
            num={itemData.num[i]}
          />
        );
      })}

      <div className="modal_bottom flex_center">
        <p className="total_price">총 금액 : ₩ 184,000</p>
        <div className="buy_btn flex_center">구매하기</div>
      </div>
    </Modal>
  );
}

// get으로 내 토큰을 보내면 백엔드에서 토큰과 일치하는 아이다 값을 찾고 데이터를 보내줌
// 카트가 눌렸을 때가 아니라 nav에서 useEffect로 받아 props로 전달받는 형태
