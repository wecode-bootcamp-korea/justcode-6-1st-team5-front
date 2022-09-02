import './ExpandHeader.scss';
import { Link, useNavigate } from 'react-router-dom';
import MenuList from '../../MenuList/MenuList';
import ItemContainer from '../../../pages/Home/ItemContainer/ItemContainer';

const trend = [
  { url: '/', name: 'Gift Set' },
  { url: '/', name: 'Boutique Exclusives Only' },
  { url: '/', name: 'Bars' },
];

const popular = [
  { url: '/', name: 'Pure Chocolate' },
  { url: '/', name: 'Sweet & Salty' },
  { url: '/', name: 'Wafers' },
];

export default function ExpandHeader({ setIsShopClicked }) {
  return (
    <div
      className="expand_container flex_center"
      onMouseLeave={() => setIsShopClicked(false)}
    >
      <div className="expand_wrapper flex_center">
        <div className="menu_list flex_center">
          <MenuList title="TRENDING" menu={trend}></MenuList>
        </div>
        <div className="menu_list flex_center">
          <MenuList title="POPULAR" menu={popular}></MenuList>
        </div>
        <ItemContainer
          img="./Images/home_part_1.jpg"
          name="ROECY Signature Chocolate"
          rate={5}
          price={'32,000'}
        />
        <ItemContainer
          img="./Images/home_part_1.jpg"
          name="ROECY Signature Chocolate"
          rate={5}
          price={'32,000'}
        />
      </div>
    </div>
  );
}
