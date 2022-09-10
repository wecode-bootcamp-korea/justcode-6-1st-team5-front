import './Header.scss';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ExpandHeader from './ExpandHeader/ExpandHeader';
import Logo from './Logo/Logo';
import { Cart } from './Cart/Cart';
import Search from './Search/Search';

export default function Header({ isCartClicked, setIsCartClicked }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isShopClicked, setIsShopClicked] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  }, []);

  const moveAndScrollToTop = url => {
    navigate(url);
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };

  if (document.querySelector('.ReactModal__Overlay--after-open') !== null) {
    const modal = document.querySelector('.ReactModal__Overlay--after-open');
    modal.addEventListener('mouseover', () => {
      setIsShopClicked(false);
    });
  }

  return (
    <div
      className="nav_container flex_center"
      onMouseOver={() => setScrollPosition(60)}
      onMouseLeave={() => {
        setScrollPosition(window.scrollY);
        setIsShopClicked(false);
      }}
    >
      <div
        className={
          scrollPosition < 30 && location.pathname === '/'
            ? 'invisibleNav'
            : 'nav'
        }
      >
        <div className="nav_menu_container">
          <div
            className="nav_menu"
            onClick={() => {
              moveAndScrollToTop('/');
              setIsShopClicked(false);
              setIsSearchClicked(false);
              setIsCartClicked(false);
            }}
          >
            HOME
          </div>
          <div
            className="nav_menu"
            onClick={() => {
              moveAndScrollToTop('/about');
              setIsShopClicked(false);
              setIsSearchClicked(false);
              setIsCartClicked(false);
            }}
          >
            ABOUT
          </div>
          <div
            className="nav_menu"
            onClick={() => {
              moveAndScrollToTop('/shop');
              setIsSearchClicked(false);
              setIsShopClicked(false);
              setIsCartClicked(false);
            }}
            onMouseOver={() => setIsShopClicked(true)}
          >
            SHOP ▽
          </div>
          <div
            className="nav_menu"
            onClick={() => {
              moveAndScrollToTop('/contact');
              setIsShopClicked(false);
              setIsSearchClicked(false);
              setIsCartClicked(false);
            }}
          >
            CONTACT
          </div>
        </div>
        <div className="logo_container">
          <Logo />
        </div>

        <div className="nav_menu_container">
          <div
            className="nav_menu"
            onClick={() => {
              moveAndScrollToTop('/location');
              setIsShopClicked(false);
              setIsSearchClicked(false);
              setIsCartClicked(false);
            }}
          >
            LOCATION
          </div>
          <div
            className="nav_menu"
            onClick={() => {
              moveAndScrollToTop('/login');
              setIsShopClicked(false);
              setIsSearchClicked(false);
              setIsCartClicked(false);
            }}
          >
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
              if (window.location.pathname !== '/cart') {
                setIsShopClicked(false);
                setIsSearchClicked(false);
                if (isCartClicked === false) setIsCartClicked(true);
                else setIsCartClicked(false);
              }
            }}
          >
            CART
          </div>
        </div>
      </div>

      <ExpandHeader
        isShopClicked={isShopClicked}
        setIsShopClicked={setIsShopClicked}
      />
      {isCartClicked && (
        <Cart
          setIsCartClicked={setIsCartClicked}
          setScrollPosition={setScrollPosition}
        />
      )}
      {isSearchClicked && (
        <Search
          setIsSearchClicked={setIsSearchClicked}
          setScrollPosition={setScrollPosition}
        />
      )}
    </div>
  );
}
