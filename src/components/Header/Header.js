import './Header.scss';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ExpandHeader from './ExpandHeader/ExpandHeader';
import Logo from './Logo/Logo';

export default function Header() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className="nav_container flex_center"
      onMouseLeave={() => setIsClicked(false)}
    >
      <div id="nav">
        <div className="nav_menu_container">
          <div className="nav_menu" onClick={() => navigate('/')}>
            HOME
          </div>
          <div className="nav_menu">ABOUT</div>
          <div
            className="nav_menu"
            onClick={() => navigate('/collections/all-products')}
            onMouseOver={() => setIsClicked(true)}
          >
            SHOP
          </div>
        </div>
        <div className="logo_container">
          <Logo />
        </div>

        <div className="nav_menu_container">
          <div className="nav_menu" onClick={() => navigate('/login')}>
            ACCOUNT
          </div>
          <div className="nav_menu">SEARCH</div>
          <div className="nav_menu">CART</div>
        </div>
      </div>

      {isClicked && <ExpandHeader setIsClicked={setIsClicked} />}
    </div>
  );
}
