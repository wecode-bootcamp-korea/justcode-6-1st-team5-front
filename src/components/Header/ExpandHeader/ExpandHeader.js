import './ExpandHeader.scss';
import { Link, useNavigate } from 'react-router-dom';
import MenuList from '../../MenuList/MenuList';
import ItemContainer from '../../../pages/Home/ItemContainer/ItemContainer';
import { useEffect, useRef } from 'react';

const trend = [
  { url: '/shop/gift-set', name: 'Gift Set' },
  { url: '/shop/boutique-exclusive-only', name: 'Boutique Exclusives Only' },
  { url: '/shop/bars', name: 'Bars' },
];

const popular = [
  { url: '/shop/pure-chocolate', name: 'Pure Chocolate' },
  { url: '/shop/sweet-salty', name: 'Sweet & Salty' },
  { url: '/shop/wafers', name: 'Wafers' },
];

export default function ExpandHeader({ isShopClicked, setIsShopClicked }) {
  const hideDiv = useRef();
  console.log(hideDiv);
  useEffect(() => {
    if (isShopClicked === false) {
      setTimeout(() => {
        console.log('hi');
        hideDiv.current.classList.add('upInTheAir');
      }, 300);
    }
  }, [isShopClicked]);

  return isShopClicked ? (
    <div className="expand_container flex_center">
      <div className="expand_wrapper flex_center">
        <div className="menu_list flex_center">
          <MenuList title="TRENDING" menu={trend}></MenuList>
        </div>
        <div className="menu_list flex_center">
          <MenuList title="POPULAR" menu={popular}></MenuList>
        </div>
        <ItemContainer
          img="/Images/home_part_1.jpg"
          name="ROECY Signature Chocolate"
          rate={5}
          price={'30.99'}
        />
        <ItemContainer
          img="/Images/home_part_1.jpg"
          name="ROECY Signature Chocolate"
          rate={5}
          price={'30.99'}
        />
      </div>
    </div>
  ) : (
    <div className="hide_container flex_center" ref={hideDiv}>
      <div className="expand_wrapper flex_center">
        <div className="menu_list flex_center">
          <MenuList title="TRENDING" menu={trend}></MenuList>
        </div>
        <div className="menu_list flex_center">
          <MenuList title="POPULAR" menu={popular}></MenuList>
        </div>
        <ItemContainer
          img="/Images/home_part_1.jpg"
          name="ROECY Signature Chocolate"
          rate={5}
          price={'30.99'}
        />
        <ItemContainer
          img="/Images/home_part_1.jpg"
          name="ROECY Signature Chocolate"
          rate={5}
          price={'30.99'}
        />
      </div>
    </div>
  );
}
