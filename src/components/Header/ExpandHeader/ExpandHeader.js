import './ExpandHeader.scss';
import { Link, useNavigate } from 'react-router-dom';
import MenuList from '../../MenuList/MenuList';
import ItemContainer from '../../../pages/Home/ItemContainer/ItemContainer';

const trend = [
  { url: '/', name: '선물 세트' },
  { url: '/', name: '전용 매장 상품' },
  { url: '/', name: '초콜릿 바' },
];

const popular = [
  { url: '/', name: '퓨어 초콜릿' },
  { url: '/', name: '스위트 & 솔티' },
  { url: '/', name: '와퍼' },
];

export default function ExpandHeader({ setIsShopClicked }) {
  return (
    <div
      className="expand_container flex_center"
      onMouseLeave={() => setIsShopClicked(false)}
    >
      <div className="expand_wrapper flex_center">
        <div className="menu_list flex_center">
          <MenuList title="현재 트렌드" menu={trend}></MenuList>
        </div>
        <div className="menu_list flex_center">
          <MenuList title="인기 상품" menu={popular}></MenuList>
        </div>
        <ItemContainer
          img="./Images/home_part_1.jpg"
          name="로이시 시그니처 초콜릿"
          rate={5}
          price={'32,000'}
        />
        <ItemContainer
          img="./Images/home_part_1.jpg"
          name="로이시 시그니처 초콜릿"
          rate={5}
          price={'32,000'}
        />
      </div>
    </div>
  );
}
