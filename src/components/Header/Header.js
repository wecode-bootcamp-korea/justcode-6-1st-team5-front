import './Header.scss';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ExpandHeader from './ExpandHeader/ExpandHeader';
import Logo from './Logo/Logo';
import Cart from './Cart/Cart';
import Search from './Search/Search';

export default function Header() {
  const navigate = useNavigate();
  const [isShopClicked, setIsShopClicked] = useState(false);
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  // useEffect(() => {
  //   window.addEventListener('scroll', function () {
  //     let value = window.scrollY;
  //     if (value === 0) return 1;
  //   });
  // }, [window.scrollY]);

  return (
    <div className="nav_container flex_center">
      <div id="nav">
        <div className="nav_menu_container">
          <div className="nav_menu" onClick={() => navigate('/')}>
            HOME
          </div>
          <div className="nav_menu" onClick={() => navigate('/about')}>
            ABOUT
          </div>
          <div
            className="nav_menu"
            onClick={() => navigate('/collections/all-products')}
            onMouseOver={() => setIsShopClicked(true)}
          >
            SHOP ▽
          </div>
        </div>
        <div className="logo_container">
          <Logo />
        </div>

        <div className="nav_menu_container">
          <div className="nav_menu" onClick={() => navigate('/login')}>
            ACCOUNT
          </div>
          <div
            className="nav_menu"
            onClick={() => {
              setIsShopClicked(false);
              setIsCartClicked(false);
              if (isSearchClicked === false) setIsSearchClicked(true);
              else setIsSearchClicked(false);
            }}
          >
            SEARCH
          </div>
          <div
            className="nav_menu"
            onClick={() => {
              setIsShopClicked(false);
              setIsSearchClicked(false);
              if (isCartClicked === false) setIsCartClicked(true);
              else setIsCartClicked(false);
            }}
          >
            CART
          </div>
        </div>
      </div>

      {isShopClicked && <ExpandHeader setIsShopClicked={setIsShopClicked} />}
      {isCartClicked && <Cart setIsCartClicked={setIsCartClicked} />}
      {isSearchClicked && <Search setIsSearchClicked={setIsSearchClicked} />}
    </div>
  );
}
