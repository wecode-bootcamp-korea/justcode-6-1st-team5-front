import Logo from '../../Header/Logo/Logo';
import './FooterBottom.scss';
import { Link, useNavigate } from 'react-router-dom';
import MenuList from '../../MenuList/MenuList';
import SnsIcons from '../SnsIcons/SnsIcons';

const general = [
  { url: '/', name: '홈' },
  { url: '/about', name: '소개' },
  { url: '/collections/all-products', name: '온라인 스토어' },
  { url: '/login', name: '계정' },
  { url: '/location', name: '위치' },
];

const policy = [
  { url: '', name: '접근성 안내' },
  { url: '', name: '개인 정보 정책' },
  { url: '', name: '지속 가능성 정책' },
  { url: '', name: '환불 정책' },
  { url: '', name: '서비스 약관' },
];

export default function FooterBottom() {
  const navigate = useNavigate();

  return (
    <div className="bottom_container flex_center">
      <div className="bottom_box flex_center">
        <div className="wrapper flex_center">
          <Logo fontSize={'42px'} />
          <p className="text">
            최고 품질의 재료만을 사용하여 <br /> 정교하게 만들어진 'ROECY'는
            홋카이도(일본 최북단 섬)에서 <br /> 정교하고 세계적인 과자를
            <br /> 만들어 왔습니다.
            <div className="corporate">㈜로이시초콜릿</div>
          </p>
        </div>
      </div>
      <div className="bottom_box flex_center">
        <div className="menu_list">
          <MenuList title="일반" menu={general} />
        </div>
      </div>
      <div className="bottom_box flex_center">
        <div className="menu_list">
          <MenuList title="안내 및 정책" menu={policy} />
        </div>
      </div>
      <div className="bottom_box flex_center">
        <div className="wrapper flex_center">
          <div className="sns_icons">
            <div className="icons">
              <SnsIcons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
