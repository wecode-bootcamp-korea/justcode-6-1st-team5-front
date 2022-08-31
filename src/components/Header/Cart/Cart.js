import { useState } from 'react';
import './Cart.scss';
import Modal from 'react-modal';

export default function Cart({ setIsCartClicked }) {
  const arr = [1, 2, 3, 4];

  const [itemData, setItemData] = useState(
    arr.map(() => {
      return (
        <div className="item_box">
          <img src="./Images/home_part_1.jpg" alt="item" className="pic" />
          <div className="text_box">
            <div className="title">로이시 시그니처 초콜릿</div>
            <div className="price">₩ 32,000</div>
            <div className="wrapper">
              <img src="./Images/add.png" alt="add" className="add" />
              <p className="quantity">3</p>
              <img src="./Images/minus.png" alt="minus" className="minus" />
              <div className="remove">제거</div>
            </div>
          </div>
        </div>
      );
    })
  );

  return (
    <Modal
      isOpen={true}
      onRequestClose={() => setIsCartClicked(false)}
      style={{ outline: 'none' }}
      className="modal "
    >
      {itemData}

      <div className="modal_bottom flex_center">
        <p className="total_price">총 금액 : ₩ 184,000</p>
        <div className="buy_btn flex_center">구매하기</div>
      </div>
    </Modal>
  );
}
