import './ExpandHeader.scss';
import { Link, useNavigate } from 'react-router-dom';
import MenuList from '../MenuList/MenuList';
import ItemContainer from '../../../pages/Home/ItemContainer/ItemContainer';
import { useEffect, useRef, useState } from 'react';

const trend = [
  { url: '/shop?category=gift', name: 'Gift Set' },
  { url: '/shop?category=limited', name: 'Limited Edition' },
  { url: '/shop?category=bars', name: 'Bars' },
];

const popular = [
  { url: '/shop?category=pure', name: 'Pure Chocolate' },
  { url: '/shop?category=sweet', name: 'Sweet & Salty' },
  { url: '/shop?category=wafers', name: 'Wafers' },
];

export default function ExpandHeader({ isShopClicked, setIsShopClicked }) {
  const hideDiv = useRef();
  const [item, setItem] = useState(
    <>
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
    </>
  );

  useEffect(() => {
    if (isShopClicked === false) {
      setTimeout(() => {
        hideDiv.current.classList.add('upInTheAir');
      }, 300);
    }
  }, [isShopClicked]);

  useEffect(() => {
    fetch('http://localhost:8000/product?trending=2')
      .then(res => res.json())
      .then(data => {
        setItem(
          data.map(data => {
            return (
              <ItemContainer
                id={data.id}
                key={data.id}
                img={data.photos}
                name={data.name}
                rate={data.rating}
                price={data.price}
              />
            );
          })
        );
      });
  }, []);

  return isShopClicked ? (
    <div className="expand_container flex_center">
      <div className="expand_wrapper flex_center">
        <div className="menu_list flex_center">
          <MenuList title="TRENDING" menu={trend}></MenuList>
        </div>
        <div className="menu_list flex_center">
          <MenuList title="POPULAR" menu={popular}></MenuList>
        </div>
        {item}
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
        {item}
      </div>
    </div>
  );
}
