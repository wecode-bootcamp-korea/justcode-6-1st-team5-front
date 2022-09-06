import { useNavigate } from 'react-router-dom';
import './MenuList.scss';

export default function MenuList({ title, menu }) {
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  };
  const menuData = menu.map((el, i) => {
    return (
      <div
        onClick={() => {
          navigate(el.url);
          scrollToTop();
        }}
        className="menu"
        key={i}
      >
        {el.name}
      </div>
    );
  });

  return (
    <div className="wrapper flex_center">
      <div className="title">{title}</div>
      {menuData}
    </div>
  );
}
