import './CartDetail.scss';
import { ItemBox } from '../../components/Header/Cart/Cart';
export default function CartDetail() {
  return (
    <div className="cart_detail flex_center">
      <div className="cart_title">CART</div>
      <div className="cart_subtitle">
        Spend ₩40000 more and get free shipping!
      </div>
      <div className="cart_container">
        <div className="items_box">
          <ItemBox
            key={1}
            name="로이시 시그니처 초콜릿"
            img={'Images/home_part_1.jpg'}
            price={32000}
            num={2}
          />
          <ItemBox
            key={1}
            name="로이시 시그니처 초콜릿"
            img={'Images/home_part_1.jpg'}
            price={32000}
            num={2}
          />
        </div>
        <div className="cart_bottom">
          <div className="order_note">
            <p className="order_note">Add Order Note</p>
            <textarea name="" id="" cols="20" rows="10"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
