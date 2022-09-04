import Logo from '../../Header/Logo/Logo';
import './FooterBottom.scss';
import { Link, useNavigate } from 'react-router-dom';
import MenuList from '../../MenuList/MenuList';
import SnsIcons from '../SnsIcons/SnsIcons';

const general = [
  { url: '/', name: 'Home' },
  { url: '/about', name: 'About' },
  { url: '/shop', name: 'Shop' },
  { url: '/login', name: 'Account' },
  { url: '/location', name: 'Location' },
];

const policy = [
  { url: '', name: 'Accessibility Statement' },
  { url: '', name: 'Privacy Policy' },
  { url: '', name: 'Sustainability Policy' },
  { url: '', name: 'Refund Policy' },
  { url: '', name: 'Term of Service' },
];

export default function FooterBottom() {
  const navigate = useNavigate();

  return (
    <div className="bottom_container flex_center">
      <div className="bottom_box flex_center">
        <div className="wrapper flex_center">
          <Logo fontSize={'2.65rem'} />
          <p className="text">
            Precisely crafted using only the <br />
            highest quality ingredients,
            <br /> ROECY' has been making
            <br /> exquisite, world class confections in Hokkaido (the
            northernmost
            <br /> island of Japan).
            <div className="corporate">© ROECY' CHOCOLATE</div>
          </p>
        </div>
      </div>
      <div className="bottom_box flex_center">
        <div className="menu_list">
          <MenuList title="GENERAL" menu={general} />
        </div>
      </div>
      <div className="bottom_box flex_center">
        <div className="menu_list">
          <MenuList title="STATEMENTS & POLICIES" menu={policy} />
        </div>
      </div>
      <div className="bottom_box flex_center">
        <div className="wrapper flex_center">
          <div className="icons">
            <SnsIcons />
          </div>
        </div>
      </div>
    </div>
  );
}
